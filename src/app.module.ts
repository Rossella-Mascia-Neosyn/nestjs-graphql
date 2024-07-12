import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { HasuraModule } from '@golevelup/nestjs-hasura';
import { UserService } from './user/user.service';
import { GraphQLRequestModule } from '@golevelup/nestjs-graphql-request';
import { UserController } from './user/user.controller';

@Module({
  imports: [
    GraphQLRequestModule.forRoot(GraphQLRequestModule, {
      // Exposes configuration options based on the graphql-request package
      endpoint: 'http://localhost:8080/v1/graphql',
      options: {
        headers: {
          'content-type': 'application/json',
          'x-hasura-admin-secret': 'neosyn',
        },
      },
    }),
    HasuraModule.forRoot(HasuraModule, {
      webhookConfig: {
        /**
         * The value of the secret Header. The Hasura module will ensure that incoming webhook payloads contain this
         * value in order to validate that it is a trusted request
         */
        secretFactory: 'neosyn',
        /** The name of the Header that Hasura will send along with all event payloads */
        secretHeader: 'secret-header',
      },
      managedMetaDataConfig: {
        metadataVersion: 'v3',
        dirPath: '../../p2cam-infrastracture/hasura/metadata',
        secretHeaderEnvName: 'HASURA_NESTJS_WEBHOOK_SECRET_HEADER_VALUE',
        nestEndpointEnvName: 'NESTJS_EVENT_WEBHOOK_ENDPOINT',
        defaultEventRetryConfig: {
          intervalInSeconds: 15,
          numRetries: 3,
          timeoutInSeconds: 100,
          toleranceSeconds: 21600,
        },
      },
    }),
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}

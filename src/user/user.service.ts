import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { GraphQLClient } from 'graphql-request';
import { InjectGraphQLClient } from '@golevelup/nestjs-graphql-request';
import {
  UserByIdDocument,
  UserByIdQuery,
  UserByIdQueryVariables,
} from 'src/graphql/queries/userById.generated';
import { isEmpty } from 'src/utils/isEmpty';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);
  constructor(@InjectGraphQLClient() private readonly client: GraphQLClient) {}

  public async findUserById(
    userId: number,
  ): Promise<UserByIdQuery['users'][0]> {
    const { users } = await this.client.request<
      UserByIdQuery,
      UserByIdQueryVariables
    >(UserByIdDocument, {
      id: userId,
    });
    const user = users[0];
    if (isEmpty(user)) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return user;
  }
}

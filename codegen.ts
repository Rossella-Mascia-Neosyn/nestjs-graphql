import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: [
    {
      'http://localhost:8080/v1/graphql': {
        headers: {
          'x-hasura-admin-secret': 'neosyn',
        },
      },
    },
  ],
  documents: './src/graphql/queries/**/*.graphql',
  generates: {
    './src/graphql/queries/models/types.ts': {
      plugins: ['typescript'],
      config: {
        skipTypeNameForRoot: true,
        skipTypename: true,
      },
    },
    './src/graphql/queries/models': {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.generated.ts',
        baseTypesPath: 'types.ts',
      },
      plugins: ['typescript-operations', 'typescript-graphql-request'],
      config: {
        skipTypeNameForRoot: true,
        skipTypename: true,
      },
    },
  },
  hooks: {
    afterOneFileWrite: ['prettier --write'],
  },
};
export default config;

import * as Types from './models/types';

import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export type UserByIdQueryVariables = Types.Exact<{
  id: Types.Scalars['bigint']['input'];
}>;

export type UserByIdQuery = {
  users: Array<{
    email: string;
    id: any;
    name: string;
    password: string;
    phone?: string | null;
    role: Types.User_Role_Enum;
    surname: string;
    is_temporary_password: boolean;
    company_id: number;
  }>;
};

export const UserByIdDocument = gql`
  query UserById($id: bigint!) {
    users(where: { id: { _eq: $id } }) {
      email
      id
      name
      password
      phone
      role
      surname
      is_temporary_password
      company_id
    }
  }
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string,
  variables?: any,
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType,
  _variables,
) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper,
) {
  return {
    UserById(
      variables: UserByIdQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<UserByIdQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UserByIdQuery>(UserByIdDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'UserById',
        'query',
        variables,
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;

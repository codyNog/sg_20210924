import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import { GraphQLError } from 'graphql-request/dist/types';
import { print } from 'graphql'
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** asset */
export type Asset = {
  __typename?: 'Asset';
  uid: Scalars['String'];
  name: Scalars['String'];
  address: Scalars['String'];
};

/** utils */
export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

/** query */
export type Query = {
  __typename?: 'Query';
  user: User;
  users?: Maybe<Users>;
  asset: Asset;
};


/** query */
export type QueryUserArgs = {
  uid: Scalars['String'];
};


/** query */
export type QueryAssetArgs = {
  uid: Scalars['String'];
};

/** user */
export type User = {
  __typename?: 'User';
  uid: Scalars['String'];
  name: Scalars['String'];
  age: Scalars['Int'];
  assets?: Maybe<Array<Asset>>;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String'];
  node: User;
};

export type Users = {
  __typename?: 'Users';
  totalCount: Scalars['Int'];
  pageInfo: PageInfo;
  edges: Array<UserEdge>;
};

export type AssetFragment = { __typename?: 'Asset', uid: string, name: string, address: string };

export type PageInfoFragment = { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> };

export type UserFragment = { __typename?: 'User', uid: string, name: string, age: number };

export type UserEdgeFragment = { __typename?: 'UserEdge', cursor: string, node: { __typename?: 'User', uid: string, name: string, age: number } };

export type UsersFragment = { __typename?: 'Users', totalCount: number, edges: Array<{ __typename?: 'UserEdge', cursor: string, node: { __typename?: 'User', uid: string, name: string, age: number } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } };

export type AssetQueryVariables = Exact<{
  uid: Scalars['String'];
}>;


export type AssetQuery = { __typename?: 'Query', asset: { __typename?: 'Asset', uid: string, name: string, address: string } };

export type UserQueryVariables = Exact<{
  uid: Scalars['String'];
}>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'User', uid: string, name: string, age: number } };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users?: Maybe<{ __typename?: 'Users', totalCount: number, edges: Array<{ __typename?: 'UserEdge', cursor: string, node: { __typename?: 'User', uid: string, name: string, age: number } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }> };

export const AssetFragmentDoc = gql`
    fragment asset on Asset {
  uid
  name
  address
}
    `;
export const UserFragmentDoc = gql`
    fragment user on User {
  uid
  name
  age
}
    `;
export const UserEdgeFragmentDoc = gql`
    fragment userEdge on UserEdge {
  cursor
  node {
    ...user
  }
}
    ${UserFragmentDoc}`;
export const PageInfoFragmentDoc = gql`
    fragment pageInfo on PageInfo {
  endCursor
  hasNextPage
  hasPreviousPage
  startCursor
}
    `;
export const UsersFragmentDoc = gql`
    fragment users on Users {
  totalCount
  edges {
    ...userEdge
  }
  pageInfo {
    ...pageInfo
  }
}
    ${UserEdgeFragmentDoc}
${PageInfoFragmentDoc}`;
export const AssetDocument = gql`
    query Asset($uid: String!) {
  asset(uid: $uid) {
    ...asset
  }
}
    ${AssetFragmentDoc}`;
export const UserDocument = gql`
    query User($uid: String!) {
  user(uid: $uid) {
    ...user
  }
}
    ${UserFragmentDoc}`;
export const UsersDocument = gql`
    query Users {
  users {
    ...users
  }
}
    ${UsersFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();
const AssetDocumentString = print(AssetDocument);
const UserDocumentString = print(UserDocument);
const UsersDocumentString = print(UsersDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Asset(variables: AssetQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data?: AssetQuery | undefined; extensions?: any; headers: Dom.Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<AssetQuery>(AssetDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Asset');
    },
    User(variables: UserQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data?: UserQuery | undefined; extensions?: any; headers: Dom.Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<UserQuery>(UserDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'User');
    },
    Users(variables?: UsersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data?: UsersQuery | undefined; extensions?: any; headers: Dom.Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<UsersQuery>(UsersDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Users');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
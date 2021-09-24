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

/** health */
export type Health = {
  __typename?: 'Health';
  history: Array<Scalars['String']>;
};

/** mutation */
export type Mutation = {
  __typename?: 'Mutation';
  updateUser: User;
};


/** mutation */
export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

/** query */
export type Query = {
  __typename?: 'Query';
  getUser: User;
  getUsers: Array<User>;
  getAsset: Asset;
  getAssets: Array<Asset>;
};


/** query */
export type QueryGetUserArgs = {
  uid: Scalars['String'];
};


/** query */
export type QueryGetAssetArgs = {
  uid: Scalars['String'];
};

/** userInput */
export type UpdateUserInput = {
  uid: Scalars['String'];
  name: Scalars['String'];
  age: Scalars['Int'];
  assets: Array<Scalars['String']>;
};

/** user */
export type User = {
  __typename?: 'User';
  uid: Scalars['String'];
  name: Scalars['String'];
  age: Scalars['Int'];
  assets: Array<Asset>;
  health: Health;
  score: Scalars['Int'];
};

export type AssetFragment = { __typename?: 'Asset', uid: string, name: string, address: string };

export type HealthFragment = { __typename?: 'Health', history: Array<string> };

export type UserFragment = { __typename?: 'User', uid: string, name: string, age: number, score: number, health: { __typename?: 'Health', history: Array<string> }, assets: Array<{ __typename?: 'Asset', uid: string, name: string, address: string }> };

export type UpdateUserMutationVariables = Exact<{
  updateUserInput: UpdateUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', uid: string, name: string, age: number, score: number, health: { __typename?: 'Health', history: Array<string> }, assets: Array<{ __typename?: 'Asset', uid: string, name: string, address: string }> } };

export type GetAssetQueryVariables = Exact<{
  uid: Scalars['String'];
}>;


export type GetAssetQuery = { __typename?: 'Query', getAsset: { __typename?: 'Asset', uid: string, name: string, address: string } };

export type GetAssetsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAssetsQuery = { __typename?: 'Query', getAssets: Array<{ __typename?: 'Asset', uid: string, name: string, address: string }> };

export type GetUserQueryVariables = Exact<{
  uid: Scalars['String'];
}>;


export type GetUserQuery = { __typename?: 'Query', getUser: { __typename?: 'User', uid: string, name: string, age: number, score: number, health: { __typename?: 'Health', history: Array<string> }, assets: Array<{ __typename?: 'Asset', uid: string, name: string, address: string }> } };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', getUsers: Array<{ __typename?: 'User', uid: string, name: string, age: number, score: number, health: { __typename?: 'Health', history: Array<string> }, assets: Array<{ __typename?: 'Asset', uid: string, name: string, address: string }> }> };

export const HealthFragmentDoc = gql`
    fragment health on Health {
  history
}
    `;
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
  score
  health {
    ...health
  }
  assets {
    ...asset
  }
}
    ${HealthFragmentDoc}
${AssetFragmentDoc}`;
export const UpdateUserDocument = gql`
    mutation updateUser($updateUserInput: UpdateUserInput!) {
  updateUser(updateUserInput: $updateUserInput) {
    ...user
  }
}
    ${UserFragmentDoc}`;
export const GetAssetDocument = gql`
    query getAsset($uid: String!) {
  getAsset(uid: $uid) {
    ...asset
  }
}
    ${AssetFragmentDoc}`;
export const GetAssetsDocument = gql`
    query getAssets {
  getAssets {
    ...asset
  }
}
    ${AssetFragmentDoc}`;
export const GetUserDocument = gql`
    query getUser($uid: String!) {
  getUser(uid: $uid) {
    ...user
  }
}
    ${UserFragmentDoc}`;
export const GetUsersDocument = gql`
    query getUsers {
  getUsers {
    ...user
  }
}
    ${UserFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();
const UpdateUserDocumentString = print(UpdateUserDocument);
const GetAssetDocumentString = print(GetAssetDocument);
const GetAssetsDocumentString = print(GetAssetsDocument);
const GetUserDocumentString = print(GetUserDocument);
const GetUsersDocumentString = print(GetUsersDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    updateUser(variables: UpdateUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data?: UpdateUserMutation | undefined; extensions?: any; headers: Dom.Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<UpdateUserMutation>(UpdateUserDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateUser');
    },
    getAsset(variables: GetAssetQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data?: GetAssetQuery | undefined; extensions?: any; headers: Dom.Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetAssetQuery>(GetAssetDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAsset');
    },
    getAssets(variables?: GetAssetsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data?: GetAssetsQuery | undefined; extensions?: any; headers: Dom.Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetAssetsQuery>(GetAssetsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAssets');
    },
    getUser(variables: GetUserQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data?: GetUserQuery | undefined; extensions?: any; headers: Dom.Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetUserQuery>(GetUserDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUser');
    },
    getUsers(variables?: GetUsersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data?: GetUsersQuery | undefined; extensions?: any; headers: Dom.Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetUsersQuery>(GetUsersDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUsers');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
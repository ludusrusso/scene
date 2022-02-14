import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type ChatMessage = {
  __typename?: 'ChatMessage';
  author: Scalars['String'];
  msg: Scalars['String'];
};

export type Command = PinMessage | Unpin;

export type Mutation = {
  __typename?: 'Mutation';
  pinMessage: Scalars['Boolean'];
  unpin: Scalars['Boolean'];
};


export type MutationPinMessageArgs = {
  author: Scalars['String'];
  msg: Scalars['String'];
};

export type PinMessage = {
  __typename?: 'PinMessage';
  author: Scalars['String'];
  msg: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
};


export type QueryHelloArgs = {
  name?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  commands: Command;
  twitchChat: ChatMessage;
};


export type SubscriptionTwitchChatArgs = {
  channel: Scalars['String'];
};

export type Unpin = {
  __typename?: 'Unpin';
  b?: Maybe<Scalars['Boolean']>;
};

export type ChatSubscriptionVariables = Exact<{
  channel: Scalars['String'];
}>;


export type ChatSubscription = { __typename?: 'Subscription', twitchChat: { __typename: 'ChatMessage', msg: string, author: string } };

export type CommandSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type CommandSubscription = { __typename?: 'Subscription', commands: { __typename: 'PinMessage', msg: string, author: string } | { __typename: 'Unpin' } };

export type PinMessageMutationVariables = Exact<{
  msg: Scalars['String'];
  author: Scalars['String'];
}>;


export type PinMessageMutation = { __typename?: 'Mutation', pinMessage: boolean };

export type UnPinMessageMutationVariables = Exact<{ [key: string]: never; }>;


export type UnPinMessageMutation = { __typename?: 'Mutation', unpin: boolean };


export const ChatDocument = gql`
    subscription Chat($channel: String!) {
  twitchChat(channel: $channel) {
    __typename
    msg
    author
  }
}
    `;

/**
 * __useChatSubscription__
 *
 * To run a query within a React component, call `useChatSubscription` and pass it any options that fit your needs.
 * When your component renders, `useChatSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChatSubscription({
 *   variables: {
 *      channel: // value for 'channel'
 *   },
 * });
 */
export function useChatSubscription(baseOptions: Apollo.SubscriptionHookOptions<ChatSubscription, ChatSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<ChatSubscription, ChatSubscriptionVariables>(ChatDocument, options);
      }
export type ChatSubscriptionHookResult = ReturnType<typeof useChatSubscription>;
export type ChatSubscriptionResult = Apollo.SubscriptionResult<ChatSubscription>;
export const CommandDocument = gql`
    subscription Command {
  commands {
    __typename
    ... on PinMessage {
      msg
      author
    }
  }
}
    `;

/**
 * __useCommandSubscription__
 *
 * To run a query within a React component, call `useCommandSubscription` and pass it any options that fit your needs.
 * When your component renders, `useCommandSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommandSubscription({
 *   variables: {
 *   },
 * });
 */
export function useCommandSubscription(baseOptions?: Apollo.SubscriptionHookOptions<CommandSubscription, CommandSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<CommandSubscription, CommandSubscriptionVariables>(CommandDocument, options);
      }
export type CommandSubscriptionHookResult = ReturnType<typeof useCommandSubscription>;
export type CommandSubscriptionResult = Apollo.SubscriptionResult<CommandSubscription>;
export const PinMessageDocument = gql`
    mutation PinMessage($msg: String!, $author: String!) {
  pinMessage(msg: $msg, author: $author)
}
    `;
export type PinMessageMutationFn = Apollo.MutationFunction<PinMessageMutation, PinMessageMutationVariables>;

/**
 * __usePinMessageMutation__
 *
 * To run a mutation, you first call `usePinMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePinMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [pinMessageMutation, { data, loading, error }] = usePinMessageMutation({
 *   variables: {
 *      msg: // value for 'msg'
 *      author: // value for 'author'
 *   },
 * });
 */
export function usePinMessageMutation(baseOptions?: Apollo.MutationHookOptions<PinMessageMutation, PinMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PinMessageMutation, PinMessageMutationVariables>(PinMessageDocument, options);
      }
export type PinMessageMutationHookResult = ReturnType<typeof usePinMessageMutation>;
export type PinMessageMutationResult = Apollo.MutationResult<PinMessageMutation>;
export type PinMessageMutationOptions = Apollo.BaseMutationOptions<PinMessageMutation, PinMessageMutationVariables>;
export const UnPinMessageDocument = gql`
    mutation UnPinMessage {
  unpin
}
    `;
export type UnPinMessageMutationFn = Apollo.MutationFunction<UnPinMessageMutation, UnPinMessageMutationVariables>;

/**
 * __useUnPinMessageMutation__
 *
 * To run a mutation, you first call `useUnPinMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnPinMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unPinMessageMutation, { data, loading, error }] = useUnPinMessageMutation({
 *   variables: {
 *   },
 * });
 */
export function useUnPinMessageMutation(baseOptions?: Apollo.MutationHookOptions<UnPinMessageMutation, UnPinMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UnPinMessageMutation, UnPinMessageMutationVariables>(UnPinMessageDocument, options);
      }
export type UnPinMessageMutationHookResult = ReturnType<typeof useUnPinMessageMutation>;
export type UnPinMessageMutationResult = Apollo.MutationResult<UnPinMessageMutation>;
export type UnPinMessageMutationOptions = Apollo.BaseMutationOptions<UnPinMessageMutation, UnPinMessageMutationVariables>;
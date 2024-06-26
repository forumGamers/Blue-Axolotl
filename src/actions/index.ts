"use server";

import { getServerSideSession } from "@/helper/session";
import type { CustomSession } from "@/interfaces";
import type { BaseMutate, BaseQuery } from "@/interfaces/action";
import { client } from "@/lib/apolloClient";
import type { ApolloQueryResult, FetchResult } from "@apollo/client";

export const Mutate = async <T>({
  mutation,
  context,
  variables,
}: BaseMutate): Promise<FetchResult<T>> =>
  await client.mutate<T>({
    mutation,
    context,
    variables,
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  });

export const Query = async <T>({
  query,
  context,
  variables,
}: BaseQuery): Promise<ApolloQueryResult<T>> =>
  await client.query<T>({
    query,
    context,
    variables,
    fetchPolicy: "cache-first",
    errorPolicy: "all",
  });

export const getAccessToken = async () => {
  const access_token = (await getServerSideSession()) as CustomSession;
  if (!access_token) return null;
  return access_token.user?.access_token;
};

export const getContext = async () => {
  return {
    headers: {
      access_token: await getAccessToken(),
    },
  };
};

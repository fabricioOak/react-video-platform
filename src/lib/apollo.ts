import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4yjx1u203ei01rq6pg8b19y/master',
  cache: new InMemoryCache(),
})
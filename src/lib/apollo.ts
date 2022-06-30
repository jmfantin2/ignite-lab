import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4thk00l04n901t61vupa3ku/master",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`,
  },
  cache: new InMemoryCache(),
});

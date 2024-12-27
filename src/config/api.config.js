import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "./url.config";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    mode: "cors",

    prepareHeaders(headers, { getState }) {
      const token = getState().auth.token;
      if (token) headers.set("Authorization", "Bearer " + token);
      headers.set("device", "WEB");
      return headers;
    },
  }),
  endpoints: () => ({}),
});
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, USER_URL } from '../../constants.js';

const usersApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints(builder) {
    return {
      sendEmail: builder.mutation({
        query: (data) => ({
          url: `${USER_URL}/sendemail`,
          method: 'POST',
          body: data,
        }),
      }),
    };
  },
});

export const { useSendEmailMutation } = usersApi;
export { usersApi };

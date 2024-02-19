import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, TAG_URL } from '../../constants';

const tagsApi = createApi({
  reducerPath: 'tags',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints(builder) {
    return {
      getTags: builder.query({
        providesTags: (result, error, arg) => {
          const tags = [];
          if (result) {
            result.map((tag) => {
              return tags.push({ type: 'Tags', id: tag._id });
            });
          }
          tags.push('Tags');
          return tags;
        },
        query: ({ name, sort }) => ({
          url: TAG_URL,
          method: 'GET',
          credentials: 'include',
          params: {
            name,
            sort,
          },
        }),
      }),
    };
  },
});

export const { useGetTagsQuery } = tagsApi;
export { tagsApi };

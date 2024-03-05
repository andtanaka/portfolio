import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, POST_URL } from '../../constants';

const postsApi = createApi({
  reducerPath: 'posts',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints(builder) {
    return {
      getPosts: builder.query({
        providesTags: (result, error, arg) => {
          const tags = [];
          if (result) {
            result.posts.map((post) => {
              return tags.push({ type: 'Posts', id: post._id });
            });
          }
          tags.push('Posts');
          return tags;
        },
        query: ({ text, tag, sort, pageNumber }) => ({
          url: POST_URL,
          method: 'GET',
          credentials: 'include',
          params: {
            text,
            tag,
            sort,
            pageNumber,
          },
        }),
      }),
      getSomePosts: builder.query({
        providesTags: (result, error, arg) => {
          const tags = [];
          if (result) {
            result.posts.map((post) => {
              return tags.push({ type: 'Posts', id: post._id });
            });
          }
          tags.push('Posts');
          return tags;
        },
        query: () => ({
          url: `${POST_URL}/some`,
          method: 'GET',
        }),
      }),
      getPostByName: builder.query({
        providesTags: (result, error, id) => {
          return [{ type: 'Posts', id: result.post._id }];
        },
        query: (name) => {
          return {
            url: `${POST_URL}/name/${name}`,
            method: 'GET',
            credentials: 'include',
          };
        },
      }),
    };
  },
});

export const { useGetPostsQuery, useGetSomePostsQuery, useGetPostByNameQuery } =
  postsApi;
export { postsApi };

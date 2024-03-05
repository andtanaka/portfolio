import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { postsApi } from './apis/postsApi';
import { tagsApi } from './apis/tagsApi';

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [tagsApi.reducerPath]: tagsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(postsApi.middleware)
      .concat(tagsApi.middleware);
  },
});

setupListeners(store.dispatch);

export {
  useGetPostsQuery,
  useGetSomePostsQuery,
  useGetPostByNameQuery,
} from './apis/postsApi';

export { useGetTagsQuery } from './apis/tagsApi';

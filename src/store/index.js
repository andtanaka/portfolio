import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { postsApi } from './apis/postsApi';
import { tagsApi } from './apis/tagsApi';
import { usersApi } from './apis/userApi';

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [tagsApi.reducerPath]: tagsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(postsApi.middleware)
      .concat(tagsApi.middleware)
      .concat(usersApi.middleware);
  },
});

setupListeners(store.dispatch);

export {
  useGetPostsQuery,
  useGetSomePostsQuery,
  useGetPostByNameQuery,
} from './apis/postsApi';

export { useGetTagsQuery } from './apis/tagsApi';

export { useSendEmailMutation } from './apis/userApi';

import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './components/RootLayout.jsx';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import PostPage from './pages/PostPage';
import TagsPage from './pages/TagsPage.jsx';
import ProjectPage from './pages/ProjectPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'home', element: <HomePage /> },
      { path: 'contact', element: <ContactPage /> },

      { path: 'posts', element: <BlogPage /> },
      { path: 'posts/tags', element: <TagsPage /> },
      { path: 'posts/:name', element: <PostPage /> },
      { path: 'project/:name', element: <ProjectPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

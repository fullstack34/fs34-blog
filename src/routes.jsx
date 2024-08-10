
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";

import Home from './pages/Home.jsx';
import PostPage from "./pages/PostPage.jsx";
import AuthorPage from "./pages/AuthorPage.jsx";
import Exemplos from './pages/Exemplos.jsx';
import Search from './pages/Search.jsx';
import { PostProvider } from "./context/PostContext.jsx";
import NewPost from "./pages/NewPost.jsx";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/:postSlug" element={
        <PostProvider>
          <PostPage />
        </PostProvider>
      } />
      <Route path="/author/:username" element={<AuthorPage />} />
      <Route path="/newpost" element={<NewPost />} />
      <Route path="/exemplos" element={<Exemplos />} />
    </>
  )
);

export default routes;
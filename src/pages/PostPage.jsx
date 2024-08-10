
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Post from "../components/Post";
import PostHeader from "../components/PostHeader";
import Tags from "../components/Tags";
import apiPost from '../api/posts';
import apiUsers from '../api/users';
import apiTags from '../api/tags';

import { usePost } from "../context/PostContext";
import { useEffect } from "react";

export default function PostPage() {

  let {setTags} = usePost();

  let params = useParams();

  let post = apiPost.find(post => {
    return post.slug === params.postSlug;
  });

  let userId = post.user_id;
  let user = apiUsers.find(user => user.id === userId);

  let tags = apiTags.filter(tag => {
    return post.tags_id.includes(tag.id);
  });

  useEffect(() => {
    setTags(tags);
  }, []);

  return (
    <Layout tags={[{name: "JAVASCRIPT"}]} showSideBar>
      <h1 className="font-semibold text-3xl mb-4">{post.title}</h1>
      <Post>
        <PostHeader 
          authorName={user.name} 
          authorProfile={user.profile_path}
          authorUsername={user.username}
          postDate={post.date}
        />
          <div className="h-[250px] my-4">
            <img src={post.image_path} className="rounded w-full h-full object-cover object-center" />
          </div>

          <p>
            {post.content}
          </p>
          <Tags/>
      </Post>
    </Layout>
  )
}
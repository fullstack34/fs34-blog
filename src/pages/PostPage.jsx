
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Post from "../components/Post";
import PostHeader from "../components/PostHeader";
import Tags from "../components/Tags";
import apiPost from '../api/posts';
import apiUsers from '../api/users';
import apiTags from '../api/tags';

import { usePost } from "../context/PostContext";
import { useEffect, useState } from "react";

export default function PostPage() {

  const [post, setPost] = useState({}); 
  let user = {};

  let {setTags} = usePost();

  let params = useParams();

  if(!post.id) {
    fetch('http://localhost:3000/posts/' + params.postSlug)
      .then(response => response.json())
      .then(post => setPost(post))
  }

  /*let post = apiPost.find(post => {
    return post.slug === params.postSlug;
  });

  let userId = post.user_id;
  let user = apiUsers.find(user => user.id === userId);

  let tags = apiTags.filter(tag => {
    return post?.tags_id?.includes(tag.id);
  });

  useEffect(() => {
    setTags(tags);
  }, []);*/

  return (
    <Layout showSideBar>
      <h1 className="font-semibold text-3xl mb-4">{post.title}</h1>
      <Post>
        {post.author && <PostHeader 
            authorName={post.author.fullname} 
            authorProfile={post.author.profile_path}
            authorUsername={post.author.username}
            postDate={post.createdAt}
        />}
        
          <div className="h-[250px] my-4">
            <img src={post.image} className="rounded w-full h-full object-cover object-center" />
          </div>

          <p>
            {post.content}
          </p>
      </Post>
    </Layout>
  )
}
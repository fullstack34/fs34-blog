import PostHeader from './../components/PostHeader';
import PostBody from './../components/PostBody';
import Layout from './../components/Layout';
import Post from '../components/Post';
import postsApi from '../api/posts';
import users from '../api/users';
import { useEffect, useState } from 'react';


function App() {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/posts')
            .then(response => response.json())
            .then(posts => {
                setPosts(posts);
            })
    }, [])

    return (
        <>
            <Layout showSideBar>
                { posts.map(function(post) {

                    console.log(post);

                    return (
                        <Post>
                            <PostHeader 
                                authorName={post.author.fullname} 
                                authorProfile={post.author.image}
                                postDate={post.createdAt}
                                authorUsername={post.author.username} 
                            />
                            <PostBody 
                                content={post.content}
                                title={post.title} 
                                slug={post.slug} 
                                image={post.image}
                            />
                        </Post>
                    );
                })}
            </Layout>
        </>
    );
}

export default App;

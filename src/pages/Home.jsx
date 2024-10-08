import PostHeader from './../components/PostHeader';
import PostBody from './../components/PostBody';
import Layout from './../components/Layout';
import Post from '../components/Post';
// import posts from '../api/posts';
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
                    
                    let user = users.find(function(user) {
                        return user.id === post.user_id;
                    });

                    return (
                        <Post>
                            <PostHeader 
                                authorName={user.name} 
                                authorProfile={user.profile_path}
                                postDate={post.date}
                                authorUsername={user.username} 
                            />
                            <PostBody 
                                content={post.content}
                                title={post.title} 
                                slug={post.slug} 
                                image={post.image_path}
                            />
                        </Post>
                    );
                })}
            </Layout>
        </>
    );
}

export default App;

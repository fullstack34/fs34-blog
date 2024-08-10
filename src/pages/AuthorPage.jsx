
import Layout from "../components/Layout";
import Post from '../components/Post';
import {useParams} from 'react-router-dom';
import posts from '../api/posts';
import users from '../api/users';

export default function AuthorPage () {

  let params = useParams();

  let user = users.find(function (user) {
    return user.username === params.username;
  });

  return (
    <Layout>
        <h1>Author: {user.name}</h1>
    </Layout>
  );
}
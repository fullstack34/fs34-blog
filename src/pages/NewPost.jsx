
import { useState } from "react";
import { useNavigate } from 'react-router-dom'

export default function NewPost() {

  let navigate = useNavigate();
  let token = localStorage.getItem('user_token');

  if(!token) {
    navigate('/login');
  }

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [slug, setSlug] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        user_id: 1,
        title,
        content,
        slug,
        image: {
          type: 'url',
          content: "https://picsum.photos/200/200"
        }
      })
    };

    let response = await fetch('http://localhost:3000/posts', options);
    let dados = await response.json();

    console.log(dados);
  }

  const handleTitle = (event) => {
    let inputValue = event.target.value;
    setTitle(inputValue);
    setSlug(inputValue.replaceAll(' ', '-').toLowerCase());
  }

  return (
    <form action="" className="max-w-96 m-auto" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <label htmlFor="">Titulo</label>
        <input type="text" value={title} className="border w-full" onChange={handleTitle} />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="">Slug</label>
        <input type="text" className="border w-full" value={slug} onChange={(event) => setSlug(event.target.value)} />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="">Conteúdo</label>
        <textarea className="border w-full" onChange={(event) => setContent(event.target.value)}></textarea>
      </div>
      <div>
        <button className="w-full bg-black text-white mt-5">Criar novo post</button>
      </div>
    </form>
  )
}
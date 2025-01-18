
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

export default function NewPost() {

  let navigate = useNavigate();
  let token = localStorage.getItem('user_token');

  useEffect(() => {
    if(!token) {
      navigate('/login');
    }
  }, []);
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [slug, setSlug] = useState('');
  const [image64, setImage64] = useState('');
  const [mimeType, setMimeType] = useState('');
  const [preview, setPreview] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        title,
        content,
        slug,
        image: {
          type: 'base64',
          mime: mimeType,
          content: image64
        }
      })
    };

    let response = await fetch('http://localhost:3000/posts', options);
    
    if(response.status < 200 || response.status > 299) {
      localStorage.removeItem('user_token');
      return navigate('/login');
    }

    let dados = await response.json();

    console.log(dados);
  }

  const handleTitle = (event) => {
    let inputValue = event.target.value;
    setTitle(inputValue);3
    setSlug(inputValue.replaceAll(' ', '-').toLowerCase());
  }

  const handleUpload = (event) => {
    let {files} = event.target

    let fileReader = new FileReader;

    fileReader.onload = (event) => {
      let {result} = event.target;
      setPreview(result);
      let pattern = /data:(?<mime>.*);base64,(?<base64>.*)/
      let {groups} = pattern.exec(result);
      setImage64(groups.base64);
      setMimeType(groups.mime);
    }
    fileReader.readAsDataURL(files[0]);
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
      <div className="flex flex-xol gap-2">
        <label>Imagens</label>
        <input type="file" accept="image/*" onChange={handleUpload} />
      </div>
      <div>
        <img src={preview} />
      </div>
      <div>
        <button className="w-full bg-black text-white mt-5">Criar novo post</button>
      </div>
    </form>
  )
}
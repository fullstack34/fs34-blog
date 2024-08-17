
import { useState } from "react";
import { createUser } from "../services/UserService";
import Swal from "sweetalert2";

export default function NewUser() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    let result = await createUser({name, email, password});
    console.log(result);
    
    let msg = {
      title: "Erro ao cadastrar usuario",
      icon: "error"
    };

    if(result?.id) {
      msg.title = "Usuario cadastrado com sucesso!"
      msg.icon = "success"  
    }

    Swal.fire(msg);
  }

  return (
    <form action="" className="max-w-96 m-auto" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <label htmlFor="">Nome</label>
        <input type="text" className="border w-full" 
          value={name}
          onChange={(event) => setName(event.target.value)} />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="">Email</label>
        <input type="text" className="border w-full" 
          value={email} 
          onChange={(event) => setEmail(event.target.value)} />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="">Senha</label>
        <input type="password" className="border w-full" 
          value={password} 
          onChange={(event) => setPassword(event.target.value)} />
      </div>
      <div>
        <button className="w-full bg-black text-white mt-5">Criar Conta</button>
      </div>
    </form>
  )
}
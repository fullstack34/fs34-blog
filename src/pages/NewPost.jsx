
export default function NewPost() {

  // Criar um estado chamado title para guardar a informação do input do Titulo
  // Criar um estado chamado content para guardar a informação do input do Conteudo

  const handleSubmit = (event) => {
    event.preventDefault();

    // Exibir em um console.log ou alert, as informações dos inputs que estão guardadas
    // nos estados
  }

  return (
    <form action="" className="max-w-96 m-auto" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <label htmlFor="">Titulo</label>
        {/* usar no onChange para adicionar a informação no estado title*/}
        <input type="text" className="border w-full" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="">Conteúdo</label>
        {/* usar no onChange para adicionar a informação no estado content*/}
        <textarea className="border w-full"></textarea>
      </div>
      <div>
        <button className="w-full bg-black text-white mt-5">Criar novo post</button>
      </div>
    </form>
  )
}
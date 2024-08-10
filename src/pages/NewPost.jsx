
export default function NewPost() {
  return (
    <form action="" className="max-w-96 m-auto">
      <div className="flex flex-col gap-2">
        <label htmlFor="">Titulo</label>
        <input type="text" className="border w-full" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="">Conteúdo</label>
        <textarea className="border w-full"></textarea>
      </div>
      <div>
        <button className="w-full bg-black text-white mt-5">Crtia novo post</button>
      </div>
    </form>
  )
}
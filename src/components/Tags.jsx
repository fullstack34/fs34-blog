import TagItem from "./TagItem";
import { usePost } from "../context/PostContext";

export default function Tags () {

  let {tags} = usePost();

  return (
    <div className="w-[350px]">
      <h3 className="text-xl pb-3">Tags</h3>
      <ul className="flex gap-2 flex-wrap">
        {tags.map(tag => <TagItem name={tag.name} />)}
      </ul>
    </div>
  )
}
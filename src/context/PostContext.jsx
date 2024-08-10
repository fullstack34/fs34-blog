import { createContext, useContext, useEffect, useState } from "react";

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  
  const [tags, setTags] = useState([
    {name: 'JS'}
  ]);

  return (
    <PostContext.Provider value={{tags, setTags}}>
      {children}
    </PostContext.Provider>
  )
}

export const usePost = () => useContext(PostContext)
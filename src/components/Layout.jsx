
import Tags from "./Tags";
import Latest from "./Latest";
import Header from "./Header";
import FormBase from "./FormBase";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Layout ({children, tags, showSideBar}) {
  
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [query, setQuery] = useState(searchParams.get('query'));

  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Header className="flex items-center p-3 shadow-md dark:bg-slate-800 dark:text-white dark:border-b">
          <h1 className="ml-5 font-bold text-2xl">
            <Link to="/">FS34Blog</Link>
          </h1>
          <FormBase className="ml-5" sendTo="search">
              <input type="text" 
                onChange={(event) => setQuery(event.target.value)}
                value={query}
                className="border px-2 py-1 rounded" 
                name="query" />
              <button className="border rounded border-black dark:border-white px-2 py-1 ml-2">Pesquisar</button>
          </FormBase>
          <button
            onClick={toggleTheme}
            className="border rounded border-black dark:border-white p-2 ml-auto text-xl"
          >
            {theme === 'light' ? <FaMoon id="fa-moon" /> : <FaSun id="fa-sun" />}
          </button>
      </Header>
      
      <div className='flex px-20 py-10 gap-20 dark:bg-slate-950 dark:text-white'>
          <div>
            {children}
          </div>

        { showSideBar && (
          <div>
            <div>
                <Tags tags={tags} />
                <Latest />
            </div>
          </div>
        )}
      </div>
    </>
  )
}
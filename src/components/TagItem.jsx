export default function TagItem ({ name, href = '#' }) {
  return (
    <li className="bg-gray-200 dark:hover:bg-slate-600 hover:bg-gray-300 rounded dark:bg-slate-700">
      <a className="py-2 px-4 inline-block" href={href}>{name}</a>
    </li>
  )
}
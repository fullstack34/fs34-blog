
export default function LatestItem ({ href = '#', text}) {
  return (
    <li className="p-2">
      <a className="text-gray-700 hover:text-black dark:hover:text-gray-400 dark:text-white" href={href}>{text}</a>
    </li>
  )
}
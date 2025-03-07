import { Link } from 'react-router-dom'

export default function CourseLink({ to, number, title }) {
  return (
    <Link 
      to={to}
      className="p-5 bg-stone-100 rounded-lg text-stone-800 hover:bg-stone-200 transition-all hover:-translate-y-0.5 py-2"
    >
      {number}. {title}
    </Link>
  )
} 
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="flex w-full h-fit p-4 border-b border-b-white">
      <Link to="/">
        <h1 className="text-2xl font-extrabold">
          Template
        </h1>
      </Link>
    </div>
  )
}

export default Header

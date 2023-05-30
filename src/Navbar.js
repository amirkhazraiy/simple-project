import {Link} from "react-router-dom";
export default function Navbar(){
return(
    <nav className="flex flex-row justify-between bg-grey-300">
        <h1 className="m-5 text-fuchsia-400 text-3xl bg-gray-700">my blog</h1>
        <div className="flex flex-row ">
            <Link className="m-5" to="/">HomePage</Link>
            <Link className="m-5" to="/create">New Blog</Link>
        </div>
    </nav>
)
}

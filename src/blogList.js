import {Link} from "react-router-dom";


export default function BlogList({blogs}) {
    return (
        <div className="flex flex-col items-center">
            {blogs.map((blog) => (
                <div className=" w-3/4 border border-grey-400 flex flex-col m-5 p-10 hover:bg-blue-200" key={blog.id}>
                    <Link className="border-grey-400" to={`/blogs/${blog.id}`}>
                       <h1 className="text-primary-100 mb-5 font-bold"> {blog.title}</h1>
                        <p>written by {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>

    )
}

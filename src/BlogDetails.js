import {useHistory, useParams} from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} = useParams();
    const {data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory()
        const handleClick = () => {
            fetch('http://localhost:8000/blogs/' + blog.id, {
                method: 'DELETE'
            }).then(() => {
                history.push('/');
            })
        }

    return (
        <div className="flex flex-col m-5 h-2/3">
            {error && <div>{error}</div>}
            {isPending && <div>loading ...</div>}
            {blog &&
                <article className="flex flex-col items-center">
                        <div className=" flex flex-col bg-blue-500 justify-center items-center w-2/3  p-10 ">
                            <h1 className="m-5 font-bold">{blog.title}</h1>
                            <p className="m-5">{blog.body}</p>
                            <p className="m-5">  Written by : {blog.author}</p>
                            <button className="text-blue-300 bg-error-500 w-32 justify-end " onClick={handleClick}>Delete</button>
                        </div>
                </article>
            }
        </div>
    )
}
export default BlogDetails

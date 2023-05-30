import {useState} from "react";
import {useHistory} from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};

        fetch('http://localhost:8000/blogs/', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            // history.go(-1);
            history.push('/');
        })
    }
    return (
        <div className="create">
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col  items-center  m-5">
                    <div className="flex flex-col w-2/4 m-5 items-center bg-blue-400 ">
                        <h2>Add new blog</h2>
                        <div className=" flex flex-col w-2/4 m-5">
                            <label>Blog title : </label>
                            <input value={title} required onChange={(e) => setTitle(e.target.value)} type="text"/>
                        </div>
                        <div className="flex flex-col w-2/4 m-5">
                            <label>Blog body : </label>
                            <textarea value={body} required onChange={(e) => setBody(e.target.value)}
                                      className=" "></textarea>
                        </div>
                        <div className=" flex flex-col w-2/4 m-5">
                            <label>author : </label>
                            <select value={author} onChange={(e) => setAuthor(e.target.value)} className=" ">
                                <option value={"joo"}> joo</option>
                                <option value={"jak"}>jak</option>
                                <option value={"jim"}>jim</option>
                            </select>
                        </div>
                        <button className="bg-success-600 text-white w-32 m-5">add blog</button>
                    </div>

                </div>
            </form>
        </div>
    )
}
export default Create;


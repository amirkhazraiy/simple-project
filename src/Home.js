import BlogList from "./blogList";
import useFetch from "./useFetch";


export default function Home(){
  const {data : blogs , error ,isPending } = useFetch('http://localhost:8000/blogs');

    return(
        <div className="flex flex-col m-5">
            { error && <div>{error}</div>  }
            { isPending && <div>loading ...</div>  }
            { blogs && <BlogList blogs={blogs} />  }
        </div>
    )
}

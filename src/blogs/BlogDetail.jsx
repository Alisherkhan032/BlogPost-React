import { useParams } from "react-router-dom";
import { useState } from "react";
import useFetch from "./useFetch";
const BlogDetail = () => {
  const { id } = useParams();

  // 1. use useParams() to extract the id from the URL
  // 2. display the id in the h2 tag
  // 3. Create the API endpoint to fetch the blog with the id using customHook useFetch
  // 4. Fetch the blog data using custom hook useFetch
  // 5. Display the blog data in the BlogDetail component
  // const url = ;
  const [url, setUrl] = useState("http://localhost:3099/blogs/" + id);
  const { data, loading, error } = useFetch(url);
  console.log("hi ");
  console.log(url);
  return (
    <section>
      {loading && <p>Loading...</p>}
      {data && (
        <div>
          <h2>{data.title}</h2>
          <p>{data.content}</p>
          <p>Written by: {data.author}</p>
        </div>
      )}
      {error && <p>{"ERROR IS : " + error.message}</p>}
    </section>
  );
};

export default BlogDetail;

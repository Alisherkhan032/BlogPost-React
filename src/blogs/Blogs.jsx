import { Link } from "react-router-dom";
const Blogs = ({ blogs, title }) => {
  return (
    <section>
      <h1>{title}</h1>
      {blogs.map((blog) => {
        const url = `/blogs/${blog.id}`;
        return (
            <div key={blog.id}>
              <Link to={url}> <h4>{blog.title}</h4> </Link>
              <em>Written by: {blog.author}</em>
              <p>{blog.content}</p>
            </div>
        );
      })}
    </section>
  );
};

/*
     <Link to={url} key={blog.id}>
            <div>
              <h4>{blog.title}</h4>
              <em>Written by: {blog.author}</em>
              <p>{blog.content}</p>
            </div>
          </Link>
*/

export default Blogs;

import PropTypes from "prop-types";
import { FaRegBookmark } from "react-icons/fa6";

const Blog = ({ blog, handleBookmark}) => {
  const { author, cover_img, author_img, posted_date, reading_time, title, hashtags} = blog;

  return (
    <div>
      <img className="w-full h-[350px]" src={cover_img} alt="" />
      <div className="flex justify-between items-center my-3">
        <div className="flex items-center">
          <img className="h-14 w-14 rounded-full" src={author_img} alt="" />
          <div className="ml-4">
            <h3 className="text-2xl font-bold">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center">
          <h3>{reading_time} min read</h3>
          <button className="ml-2" onClick={() => handleBookmark(blog)}><FaRegBookmark /></button>
        </div>
      </div>
        <h2 className="text-4xl font-bold mt-4">{title}</h2>
        <p className="my-4">
          {
            hashtags.map((tags, idx) => <span key={idx}><a href="">#{tags}</a> </span>)
          }
        </p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object,
  handleBookmark: PropTypes.func
};
export default Blog;

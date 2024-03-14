import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-[#1111110D] p-6 rounded-lg">
            <div className='bg-[#6047EC1A] border rounded-lg p-3'>
                <h2 className='text-[#6047EC] text-xl font-bold'>Spent time on read : {readingTime} min</h2>
            </div>
            <h2 className='text-xl font-bold my-5'>Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
}
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
};
export default Bookmarks;
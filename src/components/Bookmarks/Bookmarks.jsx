import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 bg-[#1111110D] p-6 rounded-lg">
            <h2 className='text-3xl mb-5'>Bookmarks: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
}
Bookmarks.propTypes = {
    bookmarks: PropTypes.array
};
export default Bookmarks;
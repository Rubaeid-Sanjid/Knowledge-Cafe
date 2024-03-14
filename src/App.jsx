import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {

  const [bookmarks, setBookmark] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookmark = blog => {
    const newBookmark = [...bookmarks, blog];
    setBookmark(newBookmark)
  }

  const handleReadingTime = time =>{
    setReadingTime(readingTime + time);
  }

  return (
    <>
      <Header></Header>
      <div className='flex gap-6 mt-8'>
        <Blogs handleBookmark={handleBookmark} handleReadingTime={handleReadingTime}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App

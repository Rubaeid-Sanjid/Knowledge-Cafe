import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {

  const [bookmarks, setBookmark] = useState([]);

  const handleBookmark = blog => {
    const newBookmark = [...bookmarks, blog];
    setBookmark(newBookmark)
  }

  return (
    <>
      <Header></Header>
      <div className='flex gap-6'>
        <Blogs handleBookmark={handleBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App

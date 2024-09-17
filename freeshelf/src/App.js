import './App.css'
import books from './books.json'
import Book from './Book'
import 'tachyons'

const booksArr = books.map((book, index) => {
  return {
    // spread (...) allows you to iterate over an object in an array and get back every object
    ...book,
    id: index
  }
})

const App = () => {
  const renderBooks = () => {
    return booksArr.map((book) => <Book key={book.id} book={book} />)
  }

  return renderBooks()
}

export default App

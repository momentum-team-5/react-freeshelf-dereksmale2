import './App.css'
import books from './books.json'
import Book from './Book'

const booksArr = books.map((book, index) => {
  return {
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

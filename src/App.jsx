import { useState } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import './App.css'

function App() {
  const { movies } = useMovies()
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    const { query } = Object.fromEntries(
      new window.FormData(event.target)
    )
    console.log(query);
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    setQuery(newQuery)
    if (newQuery === '') {
      setError('No se puede buscar una película vacía')
      return
    }
    if (newQuery.match(/^\d+$/)) {
      setError('No se puede buscar una pelicula con un número')
      return
    }
    if (newQuery.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }
    setError(null)
  }



  return (
    <div className='page'>
      <header>
        <h1>Movie Search</h1>
        <form className="form" onSubmit={handleSubmit} >
          <input onChange={handleChange} value={query} name='query' placeholder='Avengers, Star Wars...' />
          <button type="submit">Search</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App

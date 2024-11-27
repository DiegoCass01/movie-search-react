import { useRef } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App() {
  const { movies } = useMovies()
  const inputRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    const inpuEl = inputRef.current
    const value = inpuEl.value
    console.log(value);

  }

  return (
    <div className='page'>
      <header>
        <h1>Movie Search</h1>
        <form className="form" onSubmit={handleSubmit} >
          <input ref={inputRef} placeholder='Avengers, Star Wars...' />
          <button type="submit">Search</button>
        </form>
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App

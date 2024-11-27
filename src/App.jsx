import './App.css'

function App() {

  return (
    <div className='page'>
      <header>
        <h1>Movie Search</h1>
        <form className="form">
          <input placeholder='Avengers, Star Wars...' />
          <button type="submit">Search</button>
        </form>
      </header>
      <main>
        Resultados
      </main>
    </div>
  )
}

export default App

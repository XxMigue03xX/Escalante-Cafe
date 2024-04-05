import Nav from './components/Nav/Nav'
import ProductList from './components/ProductList/ProductList'
import './App.css'

function App() {

  return (
    <article className='app'>
      <Nav/>
      <main>
        <h1>Escalante Café</h1>
        <ProductList/>
      </main>
      <footer>
        <p>
          © 2024 Escalante Café
        </p>
      </footer>
    </article>
  )
}

export default App
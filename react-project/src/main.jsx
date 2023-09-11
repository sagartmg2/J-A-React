import ReactDOM from 'react-dom/client'
import "./index.css"
import Products from './pages/Products'
import Tables from './pages/Tables'
import Todos from './pages/Todos'
import Counter from './pages/Counter'
import ProductsTwo from './pages/ProductsTwo'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    {/* <Products/> */}
    <Tables/>
    {/* <Todos/> */}
    {/* <Counter/> */}
    <ProductsTwo/>
  </div>
)

import ReactDOM from 'react-dom/client'
import "./index.css"
import Products from './pages/Products'
import Tables from './pages/Tables'
import Todos from './pages/Todos'
import ProductsTwo from './pages/ProductsTwo'
import {Counter} from "./pages/Counter"
import {Counter as CounterState} from "./pages/CounterState"
import Theme from './pages/Theme'
// import CunterTwo from "./pages/CounterState"
ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    {/* <Products/> */}
    {/* <Tables/> */}
    {/* <Todos/> */}
    {/* <ProductsTwo/> */}
    {/* <Counter/> */}
    <CounterState/>
    <hr />
    <Theme/>

   
  </div>
)

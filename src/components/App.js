import { Route, Switch } from 'react-router-dom'
import GlobalStyle from '../styles/global'
import Cart from './pages/Cart'

// Pages
import Home from './pages/Home'
import Login from './pages/Login'
import ProductDetail from './pages/ProductDetail'

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/product/:id' children={<ProductDetail />} />
      </Switch>
    </>
  )
}

export default App

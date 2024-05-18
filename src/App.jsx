
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import NoPage from './pages/nopages/NoPage'
import ProductInfo from './pages/productInfo/ProductInfo'
import ScrollTop from './components/scrollTop/ScrollTop'
import CartPages from './pages/cart/CartPages'
import AllProduct from './pages/allProducts/AllProducts'
import Signup from './pages/registration/Singup'
import Login from './pages/registration/Login'
import UserDashboard from './pages/user/UserDeshboard'
import AdminDashboard from './pages/admin/AdminDashboard'
import AddProduct from './pages/admin/AddProduct'
import UpdateProduct from './pages/admin/UpdateProduct'
import MyState from './context/myState'
import { Toaster } from 'react-hot-toast'
import { ProtectedRouteForUser } from './protectedRoute/ProdectedRouteForUser'
import { ProtectedRouteForAdmin } from './protectedRoute/ProtectedRouteForAdmin'
import CategoryPage from './pages/categoey/CategoryPage'


function App() {
  return (
    <MyState>
      <Router>
        <ScrollTop/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/*' element={<NoPage/>}/>
        <Route path='/productinfo/:id' element={<ProductInfo/>}/>
        <Route path='/cart' element={<CartPages/>}/>
        <Route path='/allproduct' element={<AllProduct/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/category/:categoryname' element={<CategoryPage/>}/>
        <Route path='/user-dashboard' element={
          <ProtectedRouteForUser>
            <UserDashboard/>
          </ProtectedRouteForUser>
        }/>
        <Route path='/admin-dashboard' element={
          <ProtectedRouteForAdmin>
            <AdminDashboard/>
          </ProtectedRouteForAdmin>
        }/>
        <Route path='/addproduct' element={
          <ProtectedRouteForAdmin>
            <AddProduct/>
          </ProtectedRouteForAdmin>
        }/>
        <Route path='/Updateproduct/:id' element={
          <ProtectedRouteForAdmin>
            <UpdateProduct/>
          </ProtectedRouteForAdmin>
        }/>
        
      </Routes>
      <Toaster/>
      </Router>
      
    </MyState>
    
    
   
  )
}

export default App
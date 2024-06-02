import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Products,{loader as productsLoader} from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Home from "./pages/Home";
import Root,{loader as categoryLoader} from "./pages/Root";

const router=createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    // loader:categoryLoader,
    id:'root',
    children:[
      {index:true,element:<Home/>},
      {path:'products/:category',element:<Products/>,loader:productsLoader},
      {path:'products/productDetail/:id',element:<ProductDetail/>}
    ]
  },
])

function App() {

  return (
    <RouterProvider router={router}/>
  );
}

export default App;

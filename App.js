import React, {useState, lazy, Suspense} from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import Cart from "./src/components/Cart";
import Error from "./src/components/Error.js";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Restaurant from "./src/components/Restaurant";
import useOnline from "./src/utils/useOnline";
import OfflineComponent from "./src/components/OfflineComponent";
import Shimmer from "./src/components/Shimmer.js";
import AboutRecipe from "./src/components/AboutRecipe.js";
import userContext from "./src/utils/userContext";
import store from "./src/utils/store";


import { Provider } from "react-redux";



const TastyRecipe = lazy(()=> { 
  return import("./src/components/TastyRecipe")
})


const AppLayout = () => {
  const [user, setUser] = useState({
    name:"Suraj",
    email:"suraj@example.com"
  })
  const isOnline = useOnline()
  
  if (!isOnline) {
   return(
    <OfflineComponent />
   )
  }

  return (
    <Provider store={store
      
    }>
      <userContext.Provider value={{
        ...user
      }}>
        <Header />
        <Outlet />
        <Footer />
      </userContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout />,
    errorElement: <Error />,
    children:[
      {
        path:'/',
        element:<Body />
      },
      {
        path:'/about',
        element:<About />
      },
      {
        path:'/contact',
        element:<Contact />
      },
      {
        path:'/restaurant/:id',
        element:<Restaurant />
      },
      {
        path:'/cart',
        element:<Cart />
      },
      {
        path:'/recipe',
        element:(<Suspense fallback={<Shimmer/>}><AboutRecipe /></Suspense>),
        children:[
          {
            path:'/recipe/about',
            element:(<Suspense fallback={<Shimmer/>}><TastyRecipe /></Suspense>)
          }
        ]
      }
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider  router={appRouter} />);

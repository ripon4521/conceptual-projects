import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Header/Home/Home";
import Favoirites from "../Favourites/Favoirites";
import Login from "../Login/Login";
import Signup from "../Login/Signup";
import Phone from "../Favourites/Phone";

const myroute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,

    children:[{
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch('/Phone.json')
        
    },{
      path:"/favorites",
      element:<Favoirites></Favoirites>
    },
    {
      path:"/login",
      element:<Login></Login>
    },
    {
      path:"/login/signup",
      element:<Signup></Signup>
    },
    {
      path:"/login/signup/login",
      element:<Login></Login>
    }, {
      path : "/phones/:id",
      element : <Phone></Phone>,
      loader:()=>fetch('/Phone.json')
  }
]
  },
]);

export default myroute;

import React, { lazy } from "react";
import Loadable from "./Loadable";
import AuthorHeader from "./AuthorHeader";
// import Plans_and_Diets from "../Pages/Plans_and_Diets";
// import Custom_Meals from "../Pages/Custom_Meals";
// import Quick_Check_Out from "../Pages/Quick_Check_Out";
// import Channel_Nutritionist from "../Pages/Channel_Nutritionist";
import Login from "../Pages/Login";
import Profile from "../Pages/Profile";
import SingUp from "../Pages/SingUp";
import SingUpOTP from "../Pages/SingUpOTP";
import AddFamilyMembers from "../Pages/AddFamilyMembers";
import ToursAndHires from "../Pages/ToursAndHires";
import WhaleWatching from "../Pages/WhaleWatching";
import Diving from "../Pages/Diving";
import VehicleRent from "../Pages/VehicleRent";
import MobileTopup from "../Pages/MobileTopup";
import Restaurants from "../Pages/Restaurants";
import MassagingAndSpa from "../Pages/MassagingAndSpa";
import Surfing from "../Pages/Surfing";
import VisitingPlaces from "../Pages/VisitingPlaces";
// import Dashbord from "../Pages/Dashbord";


// const Login = Loadable(lazy(()=>import("../Pages/Login"))) ;

const Dashbord = Loadable(lazy(()=>import( "../Pages/Dashbord")));


const UserAuthorizedRoutes = [
  {
    path: "/",
    element: <AuthorHeader/>,
    children:[
      {
        path: "/",
        element: <Dashbord/>,
      },
      {
        path: "/ToursAndHires",
        element: <ToursAndHires/>,
      },
      {
        path:"/WhaleWatching",
        element:<WhaleWatching/> 
      },
      {
        path:"/Diving",
        element:<Diving/> 
      },
      {
        path:"/VehicleRent",
        element:<VehicleRent/> 
      },
      {
        path:"/MobileTopup",
        element:<MobileTopup/> 
      },
      {
        path:"/Restaurants",
        element:<Restaurants/> 
      },  {
        path:"/MassagingAndSpa",
        element:<MassagingAndSpa/> 
      },  {
        path:"/Surfing",
        element:<Surfing/> 
      },
      {
        path:"/VisitingPlaces",
        element:<VisitingPlaces/>
      },
      // {
      //   path:"/MobileTopup",
      //   element:<MobileTopup/> 
      // },
      {
        path:"/Login",
        element:<Login/>
      },
      {
        path:"/Profile",
        element:<Profile/>
      },
      {
        path:"/SingUp",
        element:<SingUp/>
      },
      {
        path:"/SingUpOTP",
        element:<SingUpOTP/>
      },
      {
        path:"/AddFamilyMembers",
        element:<AddFamilyMembers/>
      },
      {
        path:"*",
        element:<Dashbord />
      }
    ]
  }
  
  
];

export default UserAuthorizedRoutes;

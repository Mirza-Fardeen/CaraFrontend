
import './App.css';
import { Fragment } from 'react';
import HomePageTwo  from './components/HomePageTwo';
import {createBrowserRouter,  RouterProvider} from 'react-router-dom';
import MainPage from './pages/MainPage';
import HomePageOne , {loader as homePageOneLoader, action as homeOneAction} from './components/HomePageOne';
import HomePageThree  ,{loader as homepagethreeloader}from './components/HomePageThree';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import PageTwo from './pages/PageTwo';
import PageOne  ,{action as formAction}from './pages/PageOne';
import { Home } from '@mui/icons-material';
import HomePage , {action as homePageAction}from './pages/Home';


const router = createBrowserRouter([

  {path:'/' , element: <HomePage/> },
  {
  path: '/dashboard' ,
  element:<MainPage/>,

  children:[
   
    {path: '/dashboard/app' ,element:<HomePageOne/>  ,loader:homePageOneLoader , action: homeOneAction} ,
    {path: '/dashboard/comparison' , element: <HomePageTwo/> } ,
    {path: '/dashboard/audit' , element:<HomePageThree/> , loader: homepagethreeloader} ,
    
  ]
}  ,
{path:'/page' , element: <PageOne/> ,
children:[
  {path:'/page/two' , element : <PageTwo />} 
]
}

]);


function App() {

  return ( <RouterProvider router={router} />

  );
}

export default App;

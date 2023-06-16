
import './App.css';
import { Fragment } from 'react';
import HomePageTwo from './components/HomePageTwo';
import {createBrowserRouter,  RouterProvider} from 'react-router-dom';
import MainPage from './pages/MainPage';
import HomePageOne , {loader as OneLoader} from './components/HomePageOne';
import HomePageThree  ,{loader as homepagethreeloader}from './components/HomePageThree';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import PageTwo from './pages/PageTwo';
import PageOne  ,{action as formAction}from './pages/PageOne';


const router = createBrowserRouter([
  {
  path: '/' ,
  element:<MainPage/>,

  children:[
   
    {path: '/dashboard/app' ,element:<HomePageOne/> ,loader: OneLoader} ,
    {path: '/dasboard/comparison' , element: <HomePageTwo/>} ,
    {path: '/dashboard/audit' , element:<HomePageThree/> , loader: homepagethreeloader} ,
    
  ]
}  ,
{path:'/page' , element: <PageOne/> ,action: formAction,
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

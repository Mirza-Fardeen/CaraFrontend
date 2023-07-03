
import {Link, redirect} from 'react-router-dom'
import LogInForm from '../components/LogInForm';
import './mainClass.css';
const HomePage = ()=>{

    return(
      
      <>
      {/* <div className='grid-container'>
        <div className='item-1'>
item one
        </div>
        <div className='item-2'>
        item two  
        </div>
      </div> */}
      <LogInForm />
      </>
    ) 
}
// export async function action({request , params}){
//   try{
//       console.log("its clicked")
//       const data = await request.formData();
//       console.log(data.get('username'));
      
//   }
//   catch(err){
      
//   }
  
//  return redirect('/dashboard/app');
// }
export default HomePage;
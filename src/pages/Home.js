
import {Link, redirect} from 'react-router-dom'
import LogInForm from '../components/LogInForm';

const HomePage = ()=>{

    return(
      
      <>
       <LogInForm/>
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
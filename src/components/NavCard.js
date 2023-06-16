import { PropaneSharp } from '@mui/icons-material';
import classes from './NavCard.module.css'
function NavCard(props){
return(
    <>
    <div className={classes.box}>
        {props.children}
    </div>
    </>
)
}
export default NavCard;
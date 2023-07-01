import { useNavigate } from 'react-router-dom'
import classes from './Navbar.module.css'



const Navbar = () => {
  const navigate = useNavigate()

  return (
    <div className={classes.navbar}>
        <div className={classes.navContainer}>
            <span className={classes.logo}>Header</span>
            <div className={classes.navItems}>
                <button className={classes.navButton}  onClick={()=>{
                navigate('/')}}>FirstComponent</button>
                <button className={classes.navButton} onClick={()=>{
                navigate('/second')}} >SecondComponent</button>
                <button className={classes.navButton} onClick={()=>{
                navigate('/third')}} >ThirdComponent</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
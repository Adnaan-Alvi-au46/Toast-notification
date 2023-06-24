import classes from './Navbar.module.css'


const Navbar = () => {
  

  return (
    <div className={classes.navbar}>
        <div className={classes.navContainer}>
            <span className={classes.logo}>Header</span>
            <div className={classes.navItems}>
                <button className={classes.navButton}  onClick={()=>{
                window.location.replace('/')}}>FirstComponent</button>
                <button className={classes.navButton} onClick={()=>{
                window.location.replace('/second')}} >SecondComponent</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
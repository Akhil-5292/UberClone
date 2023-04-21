
import CustomButton from '../Button/CustomButton'
import MenuPopupState from '../Dropdown/Dropdown'
import style from './Navbar.module.css'

export default function Navbar(){
    return(
        <div className={style.wrapper}>
            <div className={style.left}>
            <h3>Uber</h3>
            
          <MenuPopupState/>

          <h4>Safety</h4>
          <h4>Help</h4>
          </div>
          <div className={style.right}>
            <h4>EN</h4>
            <h4>Products</h4>
            <CustomButton 
            btnText='Log in'
            style={style.btn1}/>
            <CustomButton 
            btnText='Sign up'
            style={style.btn2}/>
          </div>
         </div>
    )
}
import { NavLink } from 'react-router-dom'
import style from './Navbar2.module.css'

export default function Navbar2(){
    return <div className={style.wrapper}>
        <div>
        <NavLink to='/'>
            <img src="https://www.uber-assets.com/image/upload/v1542252540/assets/6d/87af17-3970-4d01-8936-1b0ba102ea6e/original/car-front-outlined.svg" alt="Car" role="presentation" aria-hidden="true" class="css-iTMoEO"/>
           <p>Ride</p> 
       </NavLink>
        </div>
        
        <div>
        <NavLink to='/driver'>
            <img src="https://www.uber-assets.com/image/upload/v1558389718/assets/8e/33c8c0-f7e9-467c-924b-c70232943a47/original/Earn-filled.svg" alt="Earn" role="presentation" aria-hidden="true" class="css-iTMoEO"/>
            <p>Drive or deliver</p>
        </NavLink>
        </div>
        
        <div>
        <NavLink to='/rent'>
            <img src="https://www.uber-assets.com/image/upload/v1674075480/assets/27/7a50c1-0782-405e-947c-83a2f4d78137/original/keys_car_filled.svg" alt="key-car-filled-icon" role="presentation" aria-hidden="true" class="css-iTMoEO"/>
            <p>Rent your fleet</p>
        </NavLink>
        </div>
        
    </div>
}
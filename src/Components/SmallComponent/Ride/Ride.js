import CustomButton from '../../Button/CustomButton'
import style from './Ride.module.css'
export default function(){
    return(
            
        <div className={style.wrapper}>
        
         <div className={style.heading}>
         <h1>
            Request a ride now
         </h1>

         <input placeholder='Enter pickup location' />
         <input placeholder='Enter destination' />
         <CustomButton
         btnText='Request now'
         style={style.btn}/>
         <CustomButton
         btnText='Schedule for later'
         style={style.btn2}/>
        </div>
        </div>
    )
}
import style from './Drive.module.css'
import CustomButton from '../../Button/CustomButton'

export default function (){
   return(
    <div className={style.wrapper}>
         <div className={style.heading}>
         <h1>
         Get in the driver’s seat and get paid
         </h1>

         <p className={style.para}>
         Drive on the platform with the largest network of active&nbsp;riders.
         </p>
         <CustomButton
         btnText='Sign up to drive'
         style={style.btn}/>

         <p>
            Learn more about driving and delivering
         </p>
        
        </div>
    </div>
   ) 
}
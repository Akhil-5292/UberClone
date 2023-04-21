import style from './Rent.module.css'
import CustomButton from '../../Button/CustomButton'
export default function(){
    return(
        <div className={style.wrapper}>
             <div className={style.heading}>
         <h1>
            Make money by renting out your car
         </h1>

         <p className={style.para}>
         Connect with thousands of drivers and earn more per week with Uber’s free fleet management&nbsp;tools.
         </p>
         <CustomButton
         btnText='Get Started'
         style={style.btn}/>
        </div>
        </div>
    )
}
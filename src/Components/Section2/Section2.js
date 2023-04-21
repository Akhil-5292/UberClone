import CustomButton from '../Button/CustomButton'
import style from './Section.module.css'


export default function(){
    return(
        <div className={style.wrapper}>
         <div className={style.heading}> 
          <h1>Uber for Business</h1>
          
          <p>Transform the way your company moves and feeds its people</p>

          <CustomButton
          btnText='See how'
          style={style.btn}/>
        </div>
        </div>
    )
}
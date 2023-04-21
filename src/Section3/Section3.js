import style from './Section3.module.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Section3(){
    return (
        <div className={style.wrapper}>
          <h1>Ride with Uber</h1>
          
          <div className={style.service}>
          <div className={style.img1}> 
          <img className={style.image} src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_188,h_188/v1649914471/assets/89/8e4239-5e7d-4de7-bf71-00cc32d468db/original/Auto-150X150p4x.png" alt="Uber Auto 3D Icon"/>        
          <div className={style.uberauto}>  
          <h4>Uber Auto</h4>
          <p>Get affordable Uber Auto rides with no haggling. Request Uber Auto and ride comfortably around your&nbsp;city.
          <ArrowForwardIcon className={style.arrow}/>
          </p>
         
          </div>
          
          <div className={style.img2}>
          <img className={style.image} src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_300,h_300/v1649914539/assets/86/82f8b3-e2e6-45f8-a8f7-fdc511f709e0/original/Moto-150X150p4x.png" alt="Uber Moto 3D Icon"/>
          <div className={style.uberauto}>
            <h4>Uber Moto</h4>
            <p>
            Get affordable bike rides at your doorstep. Skip the crowd and zip through traffic with Uber&nbsp;Moto.
            <ArrowForwardIcon/>
            </p>
           
          </div>
          </div>
          </div>

          <div className={style.img1}>
          <img className={style.image} src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_188,h_188/v1630531077/assets/38/494083-cc23-4cf7-801c-0deed7d9ca55/original/uber-hourly.png" alt="Uber Hourly" role="presentation" aria-hidden="true" class="css-kGIRRZ"/>
         
          <div className={style.uberrental}>
          <h4>Uber Rentals</h4>
          <p class="cmln__paragraph">Book Rentals to save time with one car and driver for your multi-stop&nbsp;trips.
          <ArrowForwardIcon/></p>
           </div>

          <div className={style.img2}>
          <img className={style.image} src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_188,h_188/v1649914597/assets/f7/7f583f-447a-4cf7-8da6-6ad254f0a66b/original/Intercity-150X150p4x.png" alt="3D icon of a sedan car plus a 2D icon of luggage" role="presentation" aria-hidden="true" class="css-kGIRRZ"/>
          <div className={style.uberintercity}>
          <h4>Uber Intercity</h4>
          <p>
          Book Intercity to head outstation anytime in convenient and affordable&nbsp;cars.
          <ArrowForwardIcon/>
          </p>
          
          </div>
          </div>
          </div>
        </div>
        </div>
    )
}
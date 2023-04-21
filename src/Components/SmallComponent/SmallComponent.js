import { Route, Routes } from "react-router-dom";
import Navbar2 from "./Navbar2/Navbar2";
import Ride from "./Ride/Ride";
import Drive from "./Drive/Drive";
import Rent from "./Rent/Rent";
import { useLocation } from "react-router-dom";

export default function (){
    const location =useLocation()
    const getimageurl=()=>{
   if(location.pathname==='/'){
    return "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_2363,h_1416/v1613521692/assets/d9/ce6c00-32b0-4b93-9f0d-6f927d93da08/original/Rider_Home_bg_desktop2x.png" 
   }
   else if(location.pathname==='/driver'){
    return 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_2363,h_1382/v1613521435/assets/bc/0529b6-c37a-416b-9907-2cb44c4c2888/original/Earner_Home_bg_desktop2x.png'
   }else{
    return 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_2363,h_1374/v1677102595/assets/66/2853af-061f-4176-8c6b-f2ddef091599/original/UberIM_002309-%281%29.jpg'
   }
    }
    console.log(location);
    return (
        <div  style={{backgroundImage:`url(${getimageurl()})` ,backgroundSize:'cover', backgroundRepeat:'no-repeat', padding:'80px' }}>
            
                <Navbar2/>
    
            
            <Routes>
                <Route path='/' element={<Ride/>}/>
                <Route path='/driver' element={<Drive/>}/>
                <Route path='/rent' element={<Rent/>}/>
            </Routes>
        </div>
    )
}
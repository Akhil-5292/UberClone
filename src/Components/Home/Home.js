import Section3 from "../../Section3/Section3";
import Navbar from "../Navbar/Navbar";
import Section2 from "../Section2/Section2";
import SmallComponent from "../SmallComponent/SmallComponent";

 export default function Home(){
    return(
        <div>
          <Navbar/>

          <div>
            <SmallComponent/>
          </div>
          <div>
            <Section2/>
          </div>
          <div>
            <Section3/>
          </div>
        </div>
    )
}
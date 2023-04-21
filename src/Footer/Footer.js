import style from './Footer.module.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Footer(){
    return (
        <div className={style.wrapper}>
            <h3 className={style.heading}>Uber</h3>

            <p className={style.para}>Visit Help Center</p>
           <div className={style.container}>
          <div>
            <h3>Company</h3>
            <p>About us</p>
            <p>Our offerings</p>
            <p>Newsroom</p>
            <p> Investors
            </p>
            <p>Blog</p>
            <p>Careers</p>
            <p>AI</p>
            <p>Gift cards</p>
          </div>
           <FacebookIcon/>
           <TwitterIcon/>
           <YouTubeIcon/>
           <LinkedInIcon/>
           <InstagramIcon/>
      
           </div>
           <div>
               <p> <LanguageIcon/> English </p> 
               <p><LocationOnIcon/> Lucknow</p>
           </div>

           {/* <img src="https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-google-4d63c31a3e.svg" alt="Download the Uber app for Android" role="presentation" aria-hidden="true"></img> */}
        </div>
        
    )
}
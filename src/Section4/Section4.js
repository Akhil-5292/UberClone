import style from './Section.module.css' 


export default function Section4(){
    return (
        <div className={style.wrapper}>
            <h1 className={style.heading}>Focused on safety, wherever you go</h1>
            
            <div className={style.image}>
                <div>
                 <img className={style.img1} src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_698,h_465/v1613520218/assets/3e/e98625-31e6-4536-8646-976a1ee3f210/original/Safety_Home_Img2x.png" alt="Our commitment to your safety" role="presentation" aria-hidden="true" class="css-kGIRRZ"/>
                 <h3>Our commitment to your safety</h3>
                 <p>With every safety feature and every standard in our Community Guidelines, we're committed to helping to create a safe environment for our&nbsp;users.</p>

                 <a href='https://www.uber.com/in/en/safety/uber-community-guidelines/'>Read about our Community Guidelines</a><br/>
                 <a href='https://www.uber.com/in/en/safety/'  >See all safety features</a>
                 </div>
                 <div>
                 <img className={style.img1} src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_698,h_465/v1613520285/assets/c2/91ea9c-90d7-4c36-a740-d7844536694e/original/Cities_Home_Img2x.png" alt="Overhead view of cars driving in a city" role="presentation" aria-hidden="true" class="css-kGIRRZ"/>
                 <h3>
                    Setting 10,000+ cities in motion
                 </h3>
                 <p>The app is available in thousands of cities worldwide, so you can request a ride even when you’re far from&nbsp;home.</p>
                 <a href='https://www.uber.com/global/en/cities/'>View all cities</a>
            </div>
            </div>
          
        
        </div>
    )
}   
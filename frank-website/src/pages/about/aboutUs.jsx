import HomeTop from '../../components/HomeTop/HomeTop.jsx'
import HomeDes from '../../components/HomeDescription/HomeDes.jsx'
import Services from '../../components/HomeServices/services.jsx'
import Carousel from '../../components/PictureCarousel/carousel.jsx'

export default function About(){
    return(
        <div>
            <HomeTop/>
            <HomeDes/>
            <Carousel/>
            <Services/>
            
        </div>
    )
}
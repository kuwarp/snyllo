import React from 'react'
import { FiArrowRight } from "react-icons/fi";
import Navbartwo from './Navbartwo';
import ScrollTop from '../common/ScrollTop';
import TimelineTwo from '../common/Timeline'
import ScrollAnimation from "react-animate-on-scroll";
import Homepagetwo from './Homepagetwo';
import FooterOne from '../common/Footer';
import SlpitOne from './SplitSection';
const Homepage = () => {
  return (
    <>
    <main className="page-wrapper">
    {/* <HeaderTopNews />
    <HeaderOne btnStyle="btn-small btn-icon" HeaderSTyle="header-transparent" /> */}

    {/* Start Slider Area  */}
    <div className="slider-area  slider-style-6 shape-right height-650">
        <div className="container">
            <div className="row row--30 align-items-center">
                <div className="order-2 order-lg-1 col-lg-6 mt_md--50 mt_sm--50 mt_lg--30">
                    <div className="inner text-start">
                        <h1 className="title color-white"> <span className='text-danger'> E</span>pilaze - <span className='theme-gradient'>x</span> </h1>
                        <p className="description color-white">Intelligent laser hair removal platform</p>
                                         </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2">
                    <div className="thumbnail w-75 mx-auto p-lg-5 ">
                    <img src={`${process.env.PUBLIC_URL}/images/art.png`} className='rounded' alt="Banner Images" />
               </div>
                </div>
                <div className="shape-image">
                   
                   </div>
            </div>
        </div>
    </div>
</main>
<screenTop/>
<Navbartwo HeaderSTyle="header-not-transparent"     />
<ScrollAnimation/>
<Homepagetwo  />
<div className="parallax-container">
      
      <div className="parallax-image col-lg-6">
        <ScrollAnimation animateIn="fadeInUp"
                    animateOut="fadeInOut">
      <img src={`${process.env.PUBLIC_URL}/images/art42.png`} className='w-50 ' alt="Banner Images" />
      </ScrollAnimation>
     
        </div>

        <div className="parallax-content col-lg-12">
        <h1>ELIPAZE- <span className='text-danger display-two'>x</span></h1>
        {/* <p>Scroll down to see the parallax effect.</p> */}
        <div className="rwt-timeline-area   rn-section-gap">
                    <div className="container ">
                        <div className="row">
                            <div className="col-lg-6">
                                  
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1 mt--50">
                                <TimelineTwo classVar="dark-line"  />
                            </div>
                        </div>
                    </div>
                </div>
      </div>
    </div>
    <SlpitOne/>  
    <FooterOne/>
</>
  )
}

export default Homepage
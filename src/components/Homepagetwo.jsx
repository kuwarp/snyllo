import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
const Homepagetwo = ({column , teamStyle}) => {
    const teamData =[  
        {
            image: 'team-dark-01',
            name: 'Compressor cooling system for rapid cooling',
            designation: 'The industrial grade compressor takes just 4 seconds to cool to 4℃. Temperature is stable at 4℃ even during constant high laser energy shots. This ensures an more excellent protection for the skin and a more comfortable experience for the patient. ',
           
        },
      
    ]
  return (
  <>
 
 <div className="rn-splite-style text-white bg-danger">
                <ScrollAnimation  animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                  >
                <div className="split-wrapper">
                        <div className="row no-gutters radius-10 align-items-center">
                        <div className="col-lg-12 col-xl-6 col-12">
                                <div className="split-inner">
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                        <h4 className="title text-white">High reliable diode laser stacks
</h4>
                                    </ScrollAnimation>
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                    <p className=" text-white">The extremely high quality US manufactured laser bars allow for 20,000hours of continuous laser usage; 20 million shots are guaranteed.</p>
                                    </ScrollAnimation>

                                    
                                   </div>
                        </div>
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="thumbnail image-left-content">
                                    <img src="./images/art1c-bg.png" alt="split Images" />
                                </div>
                            </div>
                           
                    </div>
                </div>
                </ScrollAnimation>
            </div>

   <div className="row    ">
            {teamData.map((data, index) => (
                <div className={`${column}`} key={index}>
                    <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    >
                        <div className={`rn-team ${teamStyle}`}>
                            <div className="inner">
                                <figure className="thumbnail">
                                <img src={`${process.env.PUBLIC_URL}/images/art.png`} className='rounded' alt="Banner Images" />
                 </figure>
                                <figcaption className="content">
                                    <div className="team-info">
                                        <h2 className="title mx-2">{data.name}</h2>
                                        <h6 className="subtitle  mx-2">{data.designation}</h6>
                                     
                                    </div>
                                </figcaption>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
                          
        <div className="slider-area slider-style-1 variation-default height-850 bg_image" data-black-overlay="6" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/art7.png)`, backgroundSize:'cover'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 d-flex">
                                <div  className=" animated  me-lg-5 "> 
                                <ScrollAnimation animateIn="fadeInUp"
                    animateOut="fadeInOut">
                                <img className='  ' src= {`${process.env.PUBLIC_URL}/images/art3-bg.png`} alt='' />
                             
                             </ScrollAnimation>      </div>
                                   <div> <h1 className='text-white-50'>High Quality Design Materials</h1></div>
                            </div>
                            <div> High Quality Design Materials</div>
                        </div>
                    </div>
                </div>

          
          
  </>
    )
}

export default Homepagetwo
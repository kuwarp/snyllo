import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";


const SlpitOne = () => {
    return (
            <div className="rn-splite-style text-white bg-danger">
                <ScrollAnimation  animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                  >
                <div className="split-wrapper">
                        <div className="row no-gutters radius-10 align-items-center">
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="thumbnail image-left-content">
                                    <img src="./images/art1c-bg.png" alt="split Images" />
                                </div>
                            </div>
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
                    </div>
                </div>
                </ScrollAnimation>
            </div>
    )
}

export default SlpitOne

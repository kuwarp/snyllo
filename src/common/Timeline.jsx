import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";

const TimelineData = [
    {
        id: "1",
        title: "Your working process you can present.",
        description: "Lorem ipsum dolor sit amet at — consectetur adipisicing elit. Hic, expedita. Incidunt laboriosam.",
        image: "timeline-01",
        workingStep: [
            {
                stepTitle: "Gain your works",
                stepDescription: "Lorem ipsum dolor sit amet at consectetur adipisicing",
            },
            {
                stepTitle: "Working process",
                stepDescription: "Lorem ipsum dolor sit amet at consectetur adipisicing",
            },
        ]
    },
    {
        id: "2",
        title: "Our compnay working process to present.",
        description: "Lorem ipsum dolor sit amet at — consectetur adipisicing elit. Hic, expedita. Incidunt laboriosam.",
        image: "timeline-02",
        workingStep: [
            {
                stepTitle: "Follow this process",
                stepDescription: "Lorem ipsum dolor sit amet at consectetur adipisicing",
            },
            {
                stepTitle: "Working experience",
                stepDescription: "Lorem ipsum dolor sit amet at consectetur adipisicing",
            },
        ]
    },
]

const TimelineTwo = () => {
    return (
        <div className="rn-timeline-wrapper timeline-style-one position-relative">
            <div className="timeline-line"></div>
            {/* Start Single Timeline  */}

            {TimelineData.map((data, index) =>(
                <div className="single-timeline  mt--50" key={index}>
                    <div className="timeline-dot">
                        <div className="time-line-circle"></div>
                    </div>
                    <div className="single-content">
                        <div className="inner">
                            <div className="row row--30 align-items-center">
                                <div className="order-2 order-lg-1 col-lg-6 mt_md--40 mt_sm--40">
                                    <div className="content">
                                     

                                       
                                      

                                        <div className="row ">
                                        <div className="col-lg-12 col-md-12 col-12" >
                                                    <div className="working-list">
                                                        <ScrollAnimation 
                                                        animateIn="fadeInUp"
                                                        animateOut="fadeInOut"
                                                        animateOnce={true}>
                                                            {/* <h5 className="working-title">{data.stepTitle}</h5> */}
                                                     
                                                        </ScrollAnimation>

                                                        <ScrollAnimation 
                                                        animateIn="fadeInUp"
                                                        animateOut="fadeInOut"
                                                        animateOnce={true}>
                                                         </ScrollAnimation>
                                                    </div>
                                                </div>
                                        </div>
                                       
                                    </div>
                                </div>
                              </div>
                        </div>
                    </div>
                </div>
            ))}
           
            {/* End Single Timeline  */}
        </div>
    )
}

export default TimelineTwo;

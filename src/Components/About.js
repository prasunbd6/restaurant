import React from "react";
import Story from "../images/Story.jpeg";

const About = () => {
  const romantic="https://images.pexels.com/photos/15538237/pexels-photo-15538237/free-photo-of-loving-couple-at-restaurant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const stair="https://images.pexels.com/photos/15527031/pexels-photo-15527031/free-photo-of-candles-and-decor-on-couch-in-restaurant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const sittingAlone="https://images.pexels.com/photos/15400501/pexels-photo-15400501/free-photo-of-man-in-suit-sitting-by-table-in-restaurant.jpeg?auto=compress&cs=tinysrgb&w=600";
  const environment="https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=600"
  return (
    <>
        <div className="container">
        <div className="row justify-content-center">
          <div className="col-md">
            <h1 className="text-info text-center mt-5">Our Story</h1>
            <p className="text-secondary fs-4 mt-4">
              Once upon a time, in a bustling city called Foodville, a new era
              of convenience was about to begin. The citizens of Foodville were
              tired of long queues at restaurants and the hassle of cooking
              after a long day's work. That's when two young entrepreneurs, Alex
              and Lily, came up with a brilliant idea—they decided to start a
              food delivery service.
            </p>
          </div>
          <div className="col-md mt-2 m-4 text-center"> <img src={Story} alt="" width="438px" /></div>
        </div>
      </div>

      <div className="container mt-3">
        <div className="row justify-content-center">
          <h1 className="text-info text-center">Our Values</h1>
          <div className="col-md">
            <p className="text-secondary fs-4">
              Alex and Lily knew that they wanted their food delivery service to
              be different. They wanted to offer not only delicious food but
              also an unforgettable experience for their customers. They spent
              days brainstorming, designing their website and app, and reaching
              out to local restaurants to partner with them.

              Alex and Lily understood that the success of their venture relied
              heavily on building a reliable and efficient delivery team. They
              handpicked a group of dedicated and passionate individuals who
              shared their vision of delivering happiness through food. The
              delivery team was given distinctive green uniforms and trained to
              provide exceptional customer service.
            </p>
            </div>
            </div>
    
            <div className="container mt-3">
            <div className="row justify-content-center">
            
            <div className="col-md"><img className="img-thumbnail m-1" width="450px" src={stair} alt="" /></div>
            <div className="col-md"><img className="img-thumbnail m-1" width="450px" src={sittingAlone} alt="" /></div>
            <div className="col-md"><img className="img-thumbnail m-1" width="450px" src={environment} alt="" /></div>
            <div className="col-md"><img className="img-thumbnail m-1" width="450px" src={romantic} alt="" /></div>
            </div>
          </div>
        
     

      <div className="container-fluid mt-3">
        <div className="row justify-content-center">
          <div className="col-md">
            <h1 className="text-info text-center">Our Promise</h1>
            <p className="text-secondary fs-4">
              Finally, the big day arrived when they officially launched their
              food delivery service, "Delicious Delivers." Foodville's residents
              were ecstatic to have a convenient solution for their hunger
              pangs. With just a few taps on their smartphones, they could order
              mouthwatering dishes from their favorite restaurants and have them
              delivered right to their doorsteps.
            </p>
          </div>
        </div>
      </div>
    </div>  
    </>
  );
};

export default About;

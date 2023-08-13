import './AboutMobile.css'
import "./About.css"
import Header from "../LandingPage/Header"
import Footer from "../LandingPage/Footer"
const About =()=>{
    return(
 
  <>
  <Header />
  <div className="aboutPageHolder">
  <section className="aboutPage">
  <h1 className="aboutUs">ABOUT US</h1>
  <h3 className="aboutCreativent">
  Creativent is a platform with a wide range of services that satisfies
  customers demands with easy and secure payment options, we 
  are ready to give you the best experience as an event enthusiasts
  or attendee 
  </h3>
 
 </section>
 <h3 className="aboutAllMiddleText">Creative corporate event ideas </h3>
 <div className="aboutUsPictureHolder">

 <div className="aboutUsPictureHolderLeft">
   
    <h3 className="aboutUsPictureHolderLeftText">Don’t Miss Out !!! </h3>
 </div>
  <div className="aboutUsPictureHolderRight">
    <h2 className="aboutTextFirst">Hosts </h2>
    <h2 className="aboutTextSecond">Get the Best from Creativents </h2>
    <h3 className="aboutTextThird">
    
Creativent offers good services for event organizers
and attendees at almost no cost. Event organizers
can create their own event page and add custom 
ticket/registration types to sell to their guests
while event attendees can find events, register
for events and purchase tickets seamlessly. 
    </h3>
  </div>
 </div>
    <h3 className="aboutAllMiddleText">Discover More  </h3>
 <div className="aboutUsSecondpictureHolder">

    <div className="aboutUsSecondpictureHolderLeft"><h3 className="aboutUsSecondpictureHolderLeftText">Buy Tickets </h3></div>
    <div className="aboutUsSecondpictureHolderRight"><h3 className="aboutUsSecondpictureHolderRightText">Create Events</h3></div>
 </div>
 </div>
  <Footer />

 </>
 
    )
}
export default About

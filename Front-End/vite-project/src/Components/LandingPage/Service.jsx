
import {AiOutlineArrowDown} from 'react-icons/ai'
import vector1 from '../../assets/vector1.png'
import Vector2 from '../../assets/Vector2.png'
import vector3 from '../../assets/vector3.png'
function Service (){
    return(
        <div>
        <div className="our-service">

           <div className="service-div">
            <h2>Service</h2>
            <AiOutlineArrowDown className='arrow-down'/>
            </div>
                <div className='holder1'>
                
            <div className='holderwrap1'>
            <div className="service-containers1">
                <div className="main-serice">
                    <h1> create events </h1>
                    <img src={Vector2} alt=""/>
                    <p>Welcome to our platform for creating inventions! It's a place where you can let your creativity flow and turn your ideas into real things.</p>
                </div>

                <div className="main-serice">
                    <h1>selling tickets</h1>
                    <img src={vector1} alt=""/>
                    <p>Join us for an enchanting event, filled with unforgettable moments. Book your tickets today and create cherished memories that will last a lifetime. Hurry, before they're gone!</p>
                </div>
                
                <div className="main-serice">
                    <h1> vital information </h1>
                    <img src={vector3} alt=""/>
                    <p>Discover the best date, perfect venue, and essential event planning tips on our platform. Ensure success and create lasting memories for your attendees. Join us now and make your event a resounding success!</p>
                </div>
              
                </div>
            </div>
                </div>
            

        </div>
        </div>
    )
 }

export default Service
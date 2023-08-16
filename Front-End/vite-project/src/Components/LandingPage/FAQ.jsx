import { useState } from 'react'
import {BsArrowDownCircle} from 'react-icons/bs'



function FAQ (){

    const [drop, setDrop] = useState (false)
    const [dropTwo, setDropTwo] = useState (false)
    const [dropThree, setDropThree] = useState (false)
    const [dropFour, setDropFour] = useState (false)
    const [dropFive, setDropFive] = useState (false)
    const [dropSix, setDropSix] = useState (false)

    const HandleDrop =()=>{
        setDrop(!drop)
    }

    const HandleDropTwo =()=>{
        setDropTwo(!dropTwo)
    }

    const HandleDropThree =()=>{
        setDropThree(!dropThree)
    }

    const HandleDropFour =()=>{
        setDropFour(!dropFour)
    }

    const HandleDropFive =()=>{
        setDropFive(!dropFive)
    }

    const HandleDropSix =()=>{
        setDropSix(!dropSix)
    }
        return(
        <div className="FAQ-container">
            <div className="frequently-ask">
                <h1>Frequently Asked Questions</h1>
            </div>
            
            <div className="FAQ-holder">
                <div className="questions" onClick={HandleDrop}>
                    <h5>What  is creativent? </h5>
                    <BsArrowDownCircle className='FAQ-drop' />
                </div>

                {drop?
                <div className='how'>
                <h5>
                rdtgxfhcgjhvkjghfgd
                </h5>
                </div>:null
                }
                

                <div className="questions"  onClick={HandleDropTwo}>
                    <h5>How much does Ticket cost here? </h5>
                    <BsArrowDownCircle className='FAQ-drop'/>
                </div>
                    { dropTwo?
                        <div className='how'>
                    <h5>
                    To buy ticket click on any Event of your choice and fill in other necessary information
                    </h5>
                </div>:null
                    }

                <div className="questions"  onClick={HandleDropThree}>
                    <h5>How do I create an account on the platform?</h5>
                    <BsArrowDownCircle className='FAQ-drop'/>
                </div>
                    {
                        dropThree?
                        <div className='how'>
                    <h5>To create an account, click on the "Sign Up" or "Register" button on our platform's homepage. Follow the prompts, provide the required information, and you'll have your account ready in no time!</h5>
                </div>:null
                    }


                <div className="questions" onClick={HandleDropFour}>
                    <h5>What  type of event can i host on the platform?</h5>
                    <BsArrowDownCircle className='FAQ-drop' />
                </div>

                {dropFour?
                 <div className='how'>
                 <h5>
                 Our platform supports a good events, such as music-show, Festival, Wedding, Sport-event, and more.
                 </h5>
                 </div>:null
                }
               

                <div className="questions"  onClick={HandleDropFive}> 
                    <h5>How can I list my event on the platform as an organizer?</h5>
                    <BsArrowDownCircle className='FAQ-drop'/>
                </div>
                {dropFive?
                 <div className='how'>
                 <h5>
                 As an organizer, log in to your account and navigate to the "Create Event" section. Fill in the event details, such as title, date, location, and ticket options. Once submitted, our team will review and approve the listing.
                 </h5>
                 </div>:null
                }


                <div className="questions" onClick={HandleDropSix}>
                    <h5>What are the event timings?</h5>
                    <BsArrowDownCircle className='FAQ-drop' />
                </div>
                {
                    dropSix?
                    <div className='how'>
                    <h5>
                    Event time is mustly base on the hoster fixed time, there is no particular time for events.
                    </h5>
                </div>:null
                }

            </div>
        </div>
    )
}

export default FAQ
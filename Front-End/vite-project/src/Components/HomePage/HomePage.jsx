import React, { useState } from 'react'
import './HomePage.css'
import './HomepageMobile.css'
import { BiSearch } from 'react-icons/bi'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { AiOutlineHeart } from 'react-icons/ai'
import { SlOptionsVertical } from 'react-icons/sl'
import { BiArrowBack } from 'react-icons/bi'
import { MdLocationPin } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import LogoC from "../../assets/LogoC.png"
import Cat1 from "../../assets/Cat1.png"
import Cat2 from "../../assets/Cat2.png"
import Cat3 from "../../assets/Cat3.png"
import Cat4 from "../../assets/Cat4.png"
import Upcoming1 from "../../assets/Upcoming1.png"
import Upcoming2 from "../../assets/Upcoming2.png"
import Upcoming3 from "../../assets/Upcoming3.png"
import HomeImage from "../../assets/HomeImage.png"


function HomePage() {
  const userOnLoggedIn = useSelector(state=>state.events.user)
  const [popUp, setPopUp] = useState(false)
  const [settingPopUp, setSettingPopUp] = useState(false)
  // const userSignUpData = useSelector(state=>state.events.userRes)
  const nav = useNavigate()
  console.log(userOnLoggedIn);
  const id = userOnLoggedIn.id

  const signOut = () => {
    // axios.get("https://creativents-on-boarding.onrender.com/api/allusers")
    // .then(res=>{
    //   console.log(res.data.data[0]._id)
    //   console.log(res.data.data[0].token)
    //   Dispatch(userResData(res.data.data[0].token))
    //   const id = res.data.data[1]._id
      console.log(id);
      nav(`/api/logout/${id}`)
    // })
  }

  const changeUserPassword = () => {
  //   // axios.get("https://creativents-on-boarding.onrender.com/api/allusers")
  //   // .then(res=>{
  //   //   console.log(res.data.data[1]._id)
  //   //   console.log(res.data.data[0].token)
  //   //   Dispatch(userResData(res.data.data[1].token))
  //   //   const id2 = res.data.data[1]._id
      console.log(id);
      nav(`/api/changepasswordlogged/${id}`)
  //   // })
  }

  
  

    const ShowPopUp = () => {
      setPopUp(!popUp)
    }

    const hidePopUp = () => {
      setPopUp(!popUp)
    }

    const showSettings = () => {
      setSettingPopUp(!settingPopUp)
      setPopUp(!popUp)
    }

    const hideSettings = () => {
      setSettingPopUp(!settingPopUp)
      setPopUp(!popUp)
    }
   
  const category = [
    {
    name:"Music",
    image:Cat1
    },
    {
      name:"Sport",
      image:Cat2
    },
    {
      name:"Festival",
      image:Cat3
    },
    {
        name:"Wedding",
        image:Cat4
    },
    {
      name:"Wedding",
      image:Cat4
  },
  {
    name:"Wedding",
    image:Cat4
}
]

const UpEvents = [
  {
  name:"The Curve Africa",
  des:"Cohort 2  HackAthon Presentation",
  image:Upcoming1,
  address:"157 Muyibi Str Olodi-Apapa Lagos",
  date:"Thur, August 16, 2023,   10:00AM",
  id:1
  },
  {
    name:"The Curve Africa",
    des:"Cohort 2  Graduation Party",
    image:Upcoming2,
    address:"111 Franks Estate , Lekki, Lagos  ",
    date:"Thur, August 18, 2023,   12:00AM",
    id:2
  },
  {
    name:"Kareem’s  Birthday",
    des:"Pool and Other things Party ",
    image:Upcoming3,
    address:"56, Alakija Estate Gberigbe , Ikorodu, Lagos  ",
    date:"Thur, August 25, 2023,   10:00AM",
    id:3
  },
  {
    name:"The Curve Africa",
    des:"Cohort 2  HackAthon Presentation",
    image:Upcoming1,
    address:"157 Muyibi Str Olodi-Apapa Lagos",
    date:"Thur, August 16, 2023,   10:00AM",
    id:4
    },
    {
      name:"The Curve Africa",
      des:"Cohort 2  Graduation Party",
      image:Upcoming2,
      address:"111 Franks Estate , Lekki, Lagos  ",
      date:"Thur, August 18, 2023,   12:00AM",
      id:5
    },
    {
      name:"Kareem’s  Birthday",
      des:"Pool and Other things Party ",
      image:Upcoming3,
      address:"56, Alakija Estate Gberigbe , Ikorodu, Lagos  ",
      date:"Thur, August 25, 2023,   10:00AM",
      id:5 
    }
]

  return (
    <div className='HomePage'>
    <section className='HomePage_Header'>
      <div className='HomePage_HeaderWrapper'>
        <div className='HeaderLogo'>
        <img src={LogoC} alt="" />
        </div>
        <BiSearch className='Search_Icons'/>
        <input type='text' placeholder='Search for events' className='Search_Bar'/>
        <div className='Pages_Profile'>
          <nav className='Header_Pages'>
            <ul>
              <li onClick={()=>nav('/upload')}>Create Event</li>
              <li>Find Event</li>
              <li onClick={()=>nav('/about')}>About Us</li>
            </ul>
          </nav>
        </div>
        <div className='Header_Profile'  >
          <h3>{userOnLoggedIn.name}</h3>
          <div className='Profile_Image' onMouseOver={ShowPopUp} >

          </div>
        </div>
      </div>
    </section>
    {
      popUp?<div className='PopUp_Desktop' onMouseLeave={hidePopUp}>
            <ul>
              <li onClick={()=>nav('/upload')}>Create Event</li>
              <li onClick={()=>nav('/about')}>About Us</li>
              <li onClick={()=>nav('/saved')}>My Tickets</li>
              <li onClick={()=>nav('/saved')}>Saved</li>
              <li onClick={showSettings}>Settings</li>
              <li onClick={signOut}>Log out</li>
            </ul>
      </div>:null
    }

{
      settingPopUp?<div className='SettingsPopUp_Desktop' onMouseLeave={hidePopUp}>
        <BiArrowBack style={{fontSize:"19px", cursor:"pointer", marginTop:"19px", }} onClick={hideSettings}/>
            <ul>
              <li onClick={changeUserPassword}>Change Password</li>
              <li>Change Profile Picture</li>
              <li>Dark Mode</li>
            </ul>
      </div>:null
    }
     
    <section className='HomePage_Main'>
      <div className='HomePage_Events'>
        <img src={HomeImage} alt="" />
      </div>
      <div className='Home_EventDesc'>
        <h2>Sunday, September 31st 2023</h2>
        <h1>Pastor Frank 7th Spiritual Journey Session</h1>
      </div>
    </section>

    <section className='Header_Category'>
      <div className='Header_CategoryContent'>
        <h4>Categories</h4> 
        {/* <span className='CatArrow'><TbMathGreater  /></span>  */}
      </div>
      <div className='Header_CategoryContent_Cards'> 
      {
        category.map((e)=>(
          <>
          <div className='Category_card'>
            <img src={e.image} alt="" />  
          <h4 style={{color:'white'}}>{e.name}</h4>

          </div>
          </>
        ))
      } 
      </div>
    </section>

    <h4 style={{marginBottom:"3vh", display:"flex", alignSelf:"flex-start", marginLeft:"5%"}}>Upcoming Events</h4>
    <section className='Upcoming_Events'>
      <div className='Upcoming_EventsWrapper'>
        {
          UpEvents.map((e,i)=>(
            <>
              <div className='Upcoming_EventsDetails' key={i}>
          <div className='Upcoming_EventImage'>
            <img src={e.image} alt="" />
          </div>
          <div className='Upcoming_EventDesc'>
            <h1>{e.name}</h1>
            <h2>{e.des}</h2>
            <div className='Upcoming_LocationDiv'>
            <MdLocationPin className='Upcoming_Location'/>
            <span>{e.address}</span>
            </div>
            <span>{e.date}</span>
          </div>
        </div>

        <div className='Upcoming_EventsDetailsM'>
          <div className='Upcoming_EventImage'>
            <img src={e.image} alt="" />
          </div>
          <div className='Upcoming_EventDesc'>
            <h1>{e.name}</h1>
            <h2>{e.des}</h2>
            <div className='Upcoming_LocationDiv'>
            <MdLocationPin className='Upcoming_Location'/>
            <span>{e.address}</span>
            <span>{e.date}</span>

            </div>
          </div>
        </div>
            </>
          ))
        }

      </div>
    </section>

    <section className='Home_Tickets'>
        <div className='Ticket_Header'>
          <div className='Ticket_Line'></div>
          <h4>Tickets</h4>
          <div className='Ticket_Line'></div>
        </div>

        <div className='Event_Tickets'>
         {
          UpEvents.map((e)=>(
            <div className='Event_Card'>
            <div className='EventCard_Image'>
              <img src={e.image} alt="" />
            </div>
            <div className='EventCard_Description'>
              <span>{e.name}  {e.des}</span>
              <p>{e.address}</p>
            </div>
            <div className='EventCard_DatePrice'>
              <span>{e.date}</span>  <span>N13k</span>
            </div>
            {/* <div className="EventCard_Options">
              <AiOutlineHeart />
              <SlOptionsVertical />
            </div> */}
          </div>
          ))
         }
        </div>
    </section>
    <div className="directiontodifferentpage">
            <div className="Homedirection">
                <AiFillHome className="directionmain"/>
                <h5>Home</h5>
            </div>

            <div className="Homedirection">
                <MdCreateNewFolder className="directionmain"/>
                <h5>Create</h5>
            </div>
            <div className="Homedirection">
                <BsFillCheckSquareFill className="directionmain"/>
                <h5>Save</h5>
            </div>
          </div>

  </div>
  )
}

export default HomePage
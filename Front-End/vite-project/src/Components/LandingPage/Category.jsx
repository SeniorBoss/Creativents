import { useEffect, useState } from 'react';
import {AiOutlineArrowDown} from 'react-icons/ai';
import {BsFillSuitHeartFill} from 'react-icons/bs';
import {CiMenuKebab} from 'react-icons/ci';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {CiCalendarDate} from 'react-icons/ci'
import {BiMoney} from 'react-icons/bi'
import axios from 'axios';


function Category (){
    const [event, setEvent] =useState([]);
    const [liked, setLiked] = useState (false)
    
    const url ="https://creativents-on-boarding.onrender.com/api/login"

    const getallData =()=>{
        axios.get(url)
        .then (res =>setEvent(res.data.data))
    }

    useEffect(()=>{
        getallData()
    },[])

    const handleImageUpload = (event) =>{
        const file = event.target.file[0]

        if(file){
            const reader = new FileFReader();
            ReadableStream.onload =(e) =>{
                const newEvent = {
                    ImageUrl:e.target.result,
                };

                setEvent(preEvents => [newEvent, ...preEvents]);
                toast.success('image upload sucessfully!',{

                });
            };
            reader.readerAsDataURL(file)
        }
    }


    const handleLiked = () =>{
        setLiked(!liked);
        if (!liked) {
            toast.success('You have liked this post!', {
              position: 'top-right',
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
            })
          }
    }
    return(
        <div>
        <div className="our-category">

           <div className="category-div">
            <h2>Find your interest</h2>
            <AiOutlineArrowDown className='arrow-down'/>
            </div>
           <div className='holder2'>
            <div className='inner-holder2'>
            
            <div className="category-containers">           
           
                <div className="main-category">
                <div className="category-image">
                    <div className='love'>
                        
                    <BsFillSuitHeartFill onClick={handleLiked} style={{color
                    :liked ? "rgb(240, 44, 44)": "lightgrey"}}/>
                    </div>
                    <div className='love2'>
                    <CiMenuKebab/>
                    </div>
                    
                </div>
                <div className="category-discription">
                    <div className='locationandeventname'>
                        <h4>{event.name}</h4>
                        <h4>{event.location}</h4>
                        <div class="rating">
                        <input value="5" name="rating" id="star5" type="radio"/>
                        <label for="star5"></label>
                        <input value="4" name="rating" id="star4" type="radio"/>
                        <label for="star4"></label>
                        <input value="3" name="rating" id="star3" type="radio"/>
                        <label for="star3"></label>
                        <input value="2" name="rating" id="star2" type="radio"/>
                        <label for="star2"></label>
                        <input value="1" name="rating" id="star1" type="radio"/>
                        <label for="star1"></label>
                        </div>
                    </div>
                    
                <div className='dateandprice'>
                        <div className='thedate'>
                            <CiCalendarDate/>
                            <h5>26 july 2023</h5>
                        </div>
                        <div className='theprice'>
                            <BiMoney/>
                            <h5>#2000</h5>
                        </div>
                    </div>
                </div>
            </div>
            
                
                
                <div className="main-category">
                    <div className="category-image">
                    <div className='love'>
                        <BsFillSuitHeartFill/>
                        </div>
                        <div className='love2'>
                        <CiMenuKebab/>
                        </div>
                    </div>
                    <div className="category-discription"></div>
                </div>

                <div className="main-category">
                    <div className="category-image">
                    <div className='love'>
                        <BsFillSuitHeartFill/>
                        </div>
                        <div className='love2'>
                        <CiMenuKebab/>
                        </div>
                    </div>
                    <div className="category-discription"></div>
                </div>

                <div className="main-category">
                    <div className="category-image">
                    <div className='love'>
                        <BsFillSuitHeartFill/>
                        </div>
                        <div className='love2'>
                        <CiMenuKebab/>
                        </div>
                    </div>
                    <div className="category-discription"></div>
                </div>

                <div className="main-category">
                    <div className="category-image">
                    <div className='love'>
                        <BsFillSuitHeartFill/>
                        </div>
                        <div className='love2'>
                        <CiMenuKebab/>
                        </div>
                    </div>
                    <div className="category-discription">
                       
                    </div>
                </div>

                <div className="main-category">
                    <div className="category-image">
                    <div className='love'>
                        <BsFillSuitHeartFill/>
                        </div>
                        <div className='love2'>
                        <CiMenuKebab/>
                        </div>
                    </div>
                    <div className="category-discription"></div>
                </div>

                <div className="main-category">
                    <div className="category-image">
                    <div className='love'>
                        <BsFillSuitHeartFill/>
                        </div>
                        <div className='love2'>
                        <CiMenuKebab/>
                        </div>
                    </div>
                    <div className="category-discription"></div>
                </div>
               
                <div className="main-category">
                    <div className="category-image">
                    <div className='love'>
                        <BsFillSuitHeartFill/>
                        </div>
                        <div className='love2'>
                        <CiMenuKebab/>
                        </div>
                    </div>
                    <div className="category-discription"></div>
                </div>
                <div className="main-category">
                    <div className="category-image">
                    <div className='love'>
                        <BsFillSuitHeartFill/>
                        </div>
                        <div className='love2'>
                        <CiMenuKebab/>
                        </div>
                    </div>
                    <div className="category-discription"></div>
                </div>
            

            </div>
            </div>
           </div>
           <ToastContainer />
            
           

        </div>
        </div>
    )
}

export default Category
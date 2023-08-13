import React, { useState, useEffect } from 'react';
import { AiOutlineSearch, AiOutlineArrowRight } from 'react-icons/ai';

function Hero() {
    const imageChange = [
        "./src/image/partyimage-one.webp",
        "./src/image/event2.jpg",
        "./src/image/event3.jpg",
    ];
    const [imageIndex, setImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex((prevIndex) => (prevIndex + 1) % imageChange.length);
        }, 5000); // Adjust the interval time for a slower slide effect (e.g., 5000ms for 5 seconds)

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className="hero-section">
                <img
                    src={imageChange[imageIndex]}
                    alt=""
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div className="event-result">
                    <div className="discription">
                        <h1>DON'T MISS THE UPCOMING EVENT</h1>
                        <h2>Explore what's happening, where and when</h2>
                    </div>

                    <div className="search-event">
                        <div className="search-bar">
                            <input type="text" placeholder="Search Event" name="search" />
                            <AiOutlineSearch className="searchin" />
                        </div>

                        <div className="see-result2">
                            <button className="see-result">
                                See result
                                <AiOutlineArrowRight className="arrow" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;

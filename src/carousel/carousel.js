import Carousel from 'react-bootstrap/Carousel';
import user1 from '../assets/user1.jpeg'
import user2 from '../assets/user2.jpeg'
import user3 from '../assets/user3.jpeg'
import user4 from '../assets/user4.jpeg'

import img2 from '../assets/img2.png'
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './carousel.css';

function IndividualIntervalsExample() {
   
  return (
    <div className='back'>
     <>
     <div className='container'>
      <Swiper spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
        <SwiperSlide className='slide'>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",color:"white"  }}>
    <img src={user1} className='userImage'></img>

        <p className='userName'>Naveen chava</p>
        <p>CEO - IDSign app</p>
        <p><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M3.691 6.292C5.094 4.771 7.217 4 10 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 0 0 6.925 10H10a1 1 0 0 1 1 1v7c0 1.103-.897 2-2 2H3a1 1 0 0 1-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789zM20 20h-6a1 1 0 0 1-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789C16.094 4.771 18.217 4 21 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 0 0 17.925 10H21a1 1 0 0 1 1 1v7c0 1.103-.897 2-2 2z" fill="rgb(255 255 255 / 40%)"/></svg>
        &nbsp;  Never thought buying a group health insurance and onboarding employees was so simple and easy. Thanks Policy Nation. Best rates, simple & transparent.&nbsp;
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z" fill="rgb(255 255 255 / 40%)"/></svg>
        </p>
      
            </div>
        </SwiperSlide>
        <SwiperSlide className='slide'>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",color:"white"  }}>
    <img src={user2} className='userImage'></img>

        <p className='userName'>Naveen chava</p>
        <p>CEO - IDSign app</p>
        <p>I am always worried about TnCs when it comes to insurance and PolicyNation is different from others as they give me full transparency and the right advise. Amazed at the way PolicyNation has redefined employees group health insurance for a young start up like ours. Our employees find it clear and easy to use. Thanks PolicyNation team for giving us personalised help in getting our claims processed swiftly.</p>
      
            </div>
        </SwiperSlide> <SwiperSlide className='slide'>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",color:"white"  }}>
    <img src={user3} className='userImage'></img>

        <p className='userName'>Naveen chava</p>
        <p>CEO - IDSign app</p>
        <p>Never thought buying a group health insurance and onboarding employees was so simple and easy. Thanks Policy Nation. Best rates, simple & transparent.</p>
      
            </div>
        </SwiperSlide> <SwiperSlide className='slide'>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",color:"white"  }}>
    <img src={user4} className='userImage'></img>

        <p className='userName'>Naveen chava</p>
        <p>CEO - IDSign app</p>
        <p>Never thought buying a group health insurance and onboarding employees was so simple and easy. Thanks Policy Nation. Best rates, simple & transparent.</p>
      
            </div>
        </SwiperSlide> <SwiperSlide className='slide'>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",color:"white"  }}>
    <img src={user3} className='userImage'></img>

        <p className='userName'>Naveen chava</p>
        <p>CEO - IDSign app</p>
        <p>Never thought buying a group health insurance and onboarding employees was so simple and easy. Thanks Policy Nation. Best rates, simple & transparent.</p>
      
            </div>
        </SwiperSlide> <SwiperSlide className='slide'>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",color:"white"  }}>
    <img src={user2} className='userImage'></img>

        <p className='userName'>Naveen chava</p>
        <p>CEO - IDSign app</p>
        <p>Never thought buying a group health insurance and onboarding employees was so simple and easy. Thanks Policy Nation. Best rates, simple & transparent.</p>
      
            </div>
        </SwiperSlide>
       
      </Swiper>
      </div>
    </>
    </div>
  );
}

export default IndividualIntervalsExample;
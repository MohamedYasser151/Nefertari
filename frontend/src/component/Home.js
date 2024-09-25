import React, { useRef, useState } from 'react';
import { useNavigate,NavLink } from 'react-router-dom'
import Cookies from 'js-cookie';

import style from './css/home.module.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import img1 from './image/1.png'
import data from './data';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';

import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
// import 'swiper/css/pagination';

import './css/styles.css';

// import required modules
import { Grid, Pagination, Autoplay, Navigation } from 'swiper/modules';
 
// images
import img6 from "./image/6.png"
import img7 from "./image/7.png"
import img8 from "./image/8.png" 
import img9 from "./image/9.png" 
import img10 from "./image/10.png" 
import img11 from "./image/11.png"

function Home() {
  const navigate = useNavigate();

  // useEffect(() => {
  
  //   const login = Cookies.get('loginkids');
  //   if (login !== 'true') {
      
  //     navigate('/');
  //   }
  // }, [navigate]);
  
  return (
    <div className={style.bghome}>
      <img src={img1} alt="" />
      {/* {data.map((item)=>(
           <div className="col-5 col-md-3 col-lg-2 mx-2 mb-1" >
             <div className="col">
              <div className="">
                <div className={style.cards}>
                    <NavLink to={item.to} key={item.id} className={style.link}>
                    <img src={item.image} className={style.img} />
                    <h6>{item.title}</h6>
                    </NavLink>
                </div>
              </div>
        </div>
        </div>
        ))} */}
        <Row xs={2} md={2} className="g-1">
      {data.map((image, idx) => (
        <Col key={idx}>
          <Card style={{border:"none"}}>
            <Card.Img variant="top" src={image.image} className={style.cardimags} />
            
          </Card>
        </Col>
      ))}
    </Row>

    <h1>
    NEW IN
      </h1>

    <Swiper
        slidesPerView={2}
       
        // centeredSlides={true}

        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        pagination={{
          // clickable: true,
        }}
        // navigation={true}
        modules={[Grid,Autoplay,Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>   
             <img src={img6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
      <img src={img7} alt="" />
          
        </SwiperSlide>
        <SwiperSlide>
      <img src={img8} alt="" />
          
        </SwiperSlide>
   
       
      </Swiper>
    <Swiper
        slidesPerView={2}
       
        // centeredSlides={true}

        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        pagination={{
          // clickable: true,
        }}
        // navigation={true}
        modules={[Grid,Autoplay,Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>   
             <img src={img9} alt="" />
        </SwiperSlide>
        <SwiperSlide>
      <img src={img10} alt="" />
          
        </SwiperSlide>
        <SwiperSlide>
      <img src={img11} alt="" />
          
        </SwiperSlide>
    
       
      </Swiper>
      
      <MDBFooter className='bg-light text-center text-white ' style={{marginTop:"30px"}} >
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='#!'
            role='button'
          >
        <FontAwesomeIcon icon={faFacebook} />
        </MDBBtn>

         
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='#!'
            role='button'
          >
<FontAwesomeIcon icon={faInstagram} />
</MDBBtn>

          

         
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <a className='text-white' href='#'  style={{textAlign:"none"}}>
        Nefertari      
          </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Home


import { Key } from '@mui/icons-material';
import { Box, Card, CardActionArea, Grid, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper/modules";


const categoryCard = [
    {
      id: 1,
      // image: Hire_and_Taxi,
      // image: TourAndHireId1,
      cardName: "Tours & Hires",
      path: "/ToursAndHires",
    },
    {
      id: 2,
      // image: Diving,
      cardName: "Diving",
      path: "/Diving",
    },
    {
      id: 3,
      // image: Whale_Watching,
      cardName: "Whale Watching",
      path: "/WhaleWatching",
    },
    {
      id: 4,
      // image: Vehicle_Rent,
      cardName: "Vehicle Rent",
      path: "/VehicleRent",
    },
    {
      id: 5,
      // image: Mobile_Topups,
      cardName: "Mobile topups & Sim cards",
      path: "/MobileTopup",
    },
    {
      id: 6,
      // image: Restaurants,
      cardName: "Restaurants",
      path: "/Restaurants",
    },
    {
      id: 7,
      // image: Massaging_Spa,
      cardName: "Massaging & Spa",
      path: "/MassagingAndSpa",
    },
    {
      id: 8,
      // image: Surfing,
      cardName: "Surfing",
      path: "/Surfing",
    },
  ];
  
  

export default function CategorySwiper() {
    const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path); // Navigate to the specified path
  };


    const swiperCardCategory = (item, key) => (
        <SwiperSlide>
          <Grid key={Key} item xs={12} sm={6} md={4} lg={4} xl={3}>
          
              <CardActionArea onClick={() => handleClick(item.path)}>
              <Typography>ewfwertfretfer</Typography>
              </CardActionArea>
           
          </Grid>
        </SwiperSlide>
      );
    
    
    
  return (
    <>
        
        <Swiper
          // slidesPerView={2}
          spaceBetween={30}
          // pagination={{
          //   clickable: true,
          // }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          className="mySwiper"
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
            },
            // when window width is >= 480px
            520: {
              slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          <Grid container spacing={1} marginTop={3} marginBottom={3}>
            {categoryCard.map((card, key) => swiperCardCategory(card, key))}
          </Grid>
        </Swiper>
    </>
  )
}

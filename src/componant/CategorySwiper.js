import { Key } from '@mui/icons-material';
import { Box, Card, CardActionArea, Grid, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper/modules";
import { FreeMode} from 'swiper/modules';


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
    navigate(path); 
  };


    const swiperCardCategory = (item, key) => (
      <SwiperSlide key={item.id}>
      <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
        <Box
          sx={{
            width: 345,
            height: 70,
            backgroundColor: "rgba(197, 235, 170, 0.1)",
            border: "transparent",
          }}
        >
          <CardActionArea onClick={() => handleClick(item.path)}>
            <Card
              sx={{
                width: 345,
                height: 55,
                borderRadius: 6,
                backgroundColor: "rgba(127, 235, 170, 0.1)",
                // border: "1px solid rgba(0, 0, 0, 0.2)",
              }}
            >
             
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  color: "white",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  padding: "10px",
                  textAlign: "center",
                  borderRadius: 10,
                  // marginTop:10
                }}
              >
                <Typography variant="h6">{item.cardName}</Typography>
              </Box>
            </Card>
          </CardActionArea>
        </Box>
      </Grid>
    </SwiperSlide>
      );
    
    
    
  return (
    <>
        <Swiper
      spaceBetween={30}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Autoplay]}
      className="mySwiper"
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        520: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {categoryCard.map((card) => swiperCardCategory(card))}
    </Swiper>
    </>
  )
}

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";

import "../Style/Style.css";
import { Bolt, Key } from "@mui/icons-material";
import P1 from "../Image/P1.jpg";
import P2 from "../Image/P2.jpg";
import P3 from "../Image/P3.jpg";
import P4 from "../Image/P4.jpg";
import P5 from "../Image/P5.jpg";
import P6 from "../Image/P6.jpg";
import H1 from "../Image/H1.webp";
import H2 from "../Image/H2.png";
import H3 from "../Image/H3.png";
import H4 from "../Image/H4.png";
import NF from "../Image/NF.jpg";
import NC from "../Image/NC.jpg";
import NS from "../Image/NS.jpg";
import C1 from "../Image/C1.jpg";
import C2 from "../Image/C2.jpg";
import C3 from "../Image/C3.jpg";
import C4 from "../Image/C4.jpg";
import Vehicle_Rent from "../Image/Vehicle_Rent.jpg";
import Massaging_Spa from "../Image/Massaging_&_Spa.jpg";
import Diving from "../Image/Diving.jpg";
import Whale_Watching from "../Image/Whale_Watching.jpg";
import Mobile_Topups from "../Image/Mobile_Topups.jpg";
import Restaurants from "../Image/Restaurants.jpg";
import Surfing from "../Image/Surfing.jpg";
import Hire_and_Taxi from "../Image/Hire_and_Taxi.jpg";
import { useTheme } from "@emotion/react";
import { blue } from "@mui/material/colors";
import OurProces from "../MUI/OurProces";

import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import MataraToKadavatha from "../MUI/MataraToKadavatha";

const CardData = [
  {
    id: 1,
    image: Hire_and_Taxi,
    cardName: "Tours & Hires",
    carSubName: "BBQ",
    price: "1800",
  },
  {
    id: 2,
    image: Diving,
    cardName: "Diving",
    carSubName: "Hot and spyce",
    price: "2000",
  },
  {
    id: 3,
    image: Whale_Watching,
    cardName: "Whale Watching",
    carSubName: "tandoori chicken ",
    price: "2500",
  },
  {
    id: 4,
    image: Vehicle_Rent,
    cardName: "Vehicle Rent",
    carSubName: "cheese",
    price: "3000",
  },
  {
    id: 5,
    image: Mobile_Topups,
    cardName: "Mobile topups & Sim cards",
    carSubName: "cheese",
    price: "3000",
  },
  {
    id: 6,
    image: Restaurants,
    cardName: "Restaurants",
    carSubName: "tandoori chicken ",
    price: "2500",
  },
  {
    id: 7,
    image: Massaging_Spa,
    cardName: "Massaging & Spa",
    carSubName: "cheese",
    price: "3000",
  },
  {
    id: 8,
    image: Surfing,
    cardName: "Surfing",
    carSubName: "cheese",
    price: "3000",
  },
];

export default function Dashbord() {
  const theme = useTheme();

  const swiperCard = (item, key) => (
    <SwiperSlide>
      <Grid key={Key} item xs={12} sm={6} md={4} lg={4} xl={3}>
        <Box
          sx={{
            Width: 345,
            height: 350,
            backgroundColor: "transparent",
            // borderRadius: 6,
            // backgroundColor: "rgba(197, 235, 170, 0.1)",
            border: "transparent",
          }}
        >
          <CardActionArea>
            <Card
              sx={{
                Width: 325,
                height: 320,
                borderRadius: 6,
                backgroundColor: "rgba(127, 235, 170, 0.3)",
                border: "1px solid rgba(0, 0, 0, 0.2)",
              }}
              // elevation={5}
            >
              <img
                alt=""
                src={item.image}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover", // or "contain" based on your requirement
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  color: "white",
                  backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background for text readability
                  padding: "10px",
                  textAlign: "center",
                  borderRadius: 10,
                }}
              >
                <Typography variant="h6">{item.cardName}</Typography>
                {/* <Typography variant="body2">{item.carSubName}</Typography>
            <Typography variant="body2">Price: ${item.price}</Typography> */}
              </Box>
            </Card>
          </CardActionArea>
        </Box>
      </Grid>
    </SwiperSlide>
  );

  const cardData = (item, key) => (
    <Grid key={Key} item xs={12} sm={6} md={4} lg={4} xl={3}>
      <Card
        sx={{
          Width: 345,
          height: 330,
          borderRadius: 6,
          backgroundColor: "rgba(197, 235, 170, 0.1)",
          border: "1px solid rgba(0, 0, 0, 0.2)",
        }}
        elevation={10}
      >
        <Box
          sx={{ height: 280, padding: 2 }}
          // onClick={() => {
          //   navigate(`/DigiBill/${item.card_id}`);
          // }}
        >
          <CardHeader
            sx={{
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              height: 80,
              overflow: "hidden",
            }}
            title={
              <Typography gutterBottom variant="h4" component="h2">
                {item.cardName}
              </Typography>
            }
            subheader={item.carSubName}
          />
          <Box
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              height: 180,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
            }}
          >
            <img src={item.image} height="auto" width="200px" />
          </Box>
        </Box>
        <CardActionArea>
          <container>
            <Box
              sx={{
                backgroundColor: "rgb(18, 104, 18)",
                padding: "0px 0.5px 2px 0.5px",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                margin: "0px 10px 2px 10px",
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ color: "white" }}>
                eprice is {item.price}
              </Typography>
            </Box>
          </container>
        </CardActionArea>
      </Card>
    </Grid>
  );

  return (
    <>
      <Box
        sx={{
          padding: { xs: 2, lg: 12 },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <Carousel className="main-slide" showThumbs={false} showStatus={false} style={{ maxWidth: '60%' }}> */}
        <Carousel
          className="main-slide"
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}

          // dotColor="rgba(0, 255, 0)"
        >
          <div>
            <img
              src={C1}
              // src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              // height="auto"
              width="200px"
              alt=""
            />
          </div>
          <div>
            <img
              src={C2}
              // src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              // height="auto"
              width="200px"
              alt=""
            />
          </div>
          <div>
            <img
              src={C3}
              // src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              // height="auto"
              width="200px"
              alt=""
            />
          </div>
          <div>
            <img
              src={C4}
              // src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              // height="auto"
              width="200px"
              alt=""
            />
          </div>
        </Carousel>
      </Box>

      <br />
      <br />
      <Container>
        {/* OUR PROCESS  */}

        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{
            fontWeight: "bold",
            fontFamily: "Cormorant Garamond, serif",
            color: "rgb(18, 104, 18)",
            textShadow: "2px 45px 4px rgba(18,104,18,0.1)",
          }}
        >
          MIRISSA
        </Typography>
        <br />
        <br />
        <h5>
          Mirissa (Sinhala: මිරිස්ස, romanized: Mirissa; Tamil: மிரிஸ்ஸ,
          romanized: Miris'sa) is a small town on the south coast of Sri Lanka,
          located in the Matara District of the Southern Province. It is
          approximately 150 kilometres (93 mi) south of Colombo and is situated
          at an elevation of 4 metres (13 ft) above sea level. Mirissa's beach
          and nightlife make it a popular tourist destination. It is also a
          fishing port and one of the island's main whale and dolphin watching
          locations.
        </h5>

        <br />
        <br />
        <br />
        <br />
        <br />

        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{
            fontWeight: "bold",
            fontFamily: "Cormorant Garamond, serif",
            color: "rgb(18, 104, 18)",
            textShadow: "2px 45px 4px rgba(18,104,18,0.1)",
          }}
        >
          CATEGORIES
        </Typography>
        <br />

        <br />
        <br />

        <Swiper
          // slidesPerView={2}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Pagination, Autoplay]}
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
            {CardData.map((card, key) => swiperCard(card, key))}
          </Grid>
        </Swiper>

        <br />
        <br />
        <br />
        <br />
        <br />

        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{
            fontWeight: "bold",
            fontFamily: "Cormorant Garamond, serif",
            color: "rgb(18, 104, 18)",
            textShadow: "2px 45px 4px rgba(18,104,18,0.1)",
          }}
        >
          EXPRESSWAY BUS SERVICE
        </Typography>
        <br />
        <br />
        <Grid container spacing={1} marginTop={3} marginBottom={3}>
        <Grid key={Key} item xs={12} sm={6} md={6} lg={6} xl={6}>
        <Box
          sx={{
            Width: 145,
            height: 1350,
            backgroundColor: "transparent",
            // borderRadius: 6,
            // backgroundColor: "rgba(197, 235, 170, 0.1)",
            border: "transparent",
          }}
        >
          {/* <CardActionArea sx={{borderRadius: 6,}}> */}
            <Card
              sx={{
                maxWidth: 395,
                height: 1325,
                borderRadius: 6,
                backgroundColor: "rgba(127, 235, 170, 0.3)",
                border: "1px solid rgba(0, 0, 0, 0.2)",
              }}
              // elevation={5}
            >
              <MataraToKadavatha/>
             
            </Card>
          {/* </CardActionArea> */}
        </Box>
      </Grid>
      <Grid key={Key} item xs={12} sm={6} md={6} lg={6} xl={6}>
        <Box
          sx={{
            Width: 145,
            height: 1350,
            backgroundColor: "transparent",
            // borderRadius: 6,
            // backgroundColor: "rgba(197, 235, 170, 0.1)",
            border: "transparent",
          }}
        >
          {/* <CardActionArea sx={{borderRadius: 6,}}> */}
            <Card
              sx={{
                maxWidth: 395,
                height: 1325,
                borderRadius: 6,
                backgroundColor: "rgba(127, 235, 170, 0.3)",
                border: "1px solid rgba(0, 0, 0, 0.2)",
              }}
              // elevation={5}
            >
              <MataraToKadavatha/>
             
            </Card>
          {/* </CardActionArea> */}
        </Box>
      </Grid>
        
            
        </Grid>
        <br />
        <br />
      </Container>
    </>
  );
}

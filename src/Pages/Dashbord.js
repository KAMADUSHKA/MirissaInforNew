import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
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
import KadawathaToMatara from "../MUI/KadawathaToMatara";
import { useNavigate } from "react-router-dom";
import TourAndHireId1 from "../Image/ToursAndHires/id-1.jpg";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';

const CardData = [
  {
    id: 1,
    // image: Hire_and_Taxi,
    image: TourAndHireId1,
    cardName: "Tours & Hires",
    path: "/ToursAndHires",
  },
  {
    id: 2,
    image: Diving,
    cardName: "Diving",
    path: "/Diving",
  },
  {
    id: 3,
    image: Whale_Watching,
    cardName: "Whale Watching",
    path: "/WhaleWatching",
  },
  {
    id: 4,
    image: Vehicle_Rent,
    cardName: "Vehicle Rent",
    path: "/VehicleRent",
  },
  {
    id: 5,
    image: Mobile_Topups,
    cardName: "Mobile topups & Sim cards",
    path: "/MobileTopup",
  },
  {
    id: 6,
    image: Restaurants,
    cardName: "Restaurants",
    path: "/Restaurants",
  },
  {
    id: 7,
    image: Massaging_Spa,
    cardName: "Massaging & Spa",
    path: "/MassagingAndSpa",
  },
  {
    id: 8,
    image: Surfing,
    cardName: "Surfing",
    path: "/Surfing",
  },
];

const BusinessCardData = [
  {
    id: 1,
    // image: Hire_and_Taxi,
    image: TourAndHireId1,
    cardName: "Low Deep Fishing Tours",
    contact: "",
  },
  {
    id: 2,
    image: Diving,
    cardName: "Deep Sea Fishing Tours",
    path: "/Diving",
  },
  {
    id: 3,
    image: Whale_Watching,
    cardName: "Boat Tours River Safari",
    path: "/WhaleWatching",
  },
  {
    id: 4,
    image: Diving,
    cardName: "Sunset Tours",
    path: "/Diving",
  },
  {
    id: 5,
    image: Whale_Watching,
    cardName: "Snorkeling Tours: 100% Turtles",
    path: "/WhaleWatching",
  },
  {
    id: 6,
    image: Diving,
    cardName: "Snorkeling with Whales",
    path: "/Diving",
  },
  {
    id: 7,
    image: Whale_Watching,
    cardName: "Diving Tours",
    path: "/WhaleWatching",
  },
  {
    id: 8,
    image: Whale_Watching,
    cardName: "Whales Watching Tours",
    path: "/WhaleWatching",
  },
  {
    id: 9,
    image: Whale_Watching,
    cardName: "vehicle rent and hires",
    path: "/WhaleWatching",
  },
  {
    id: 10,
    image: Whale_Watching,
    cardName: "Safari",
    path: "/WhaleWatching",
  },
  
];


const mainSlider = [
  {
    id: 1,
    img: C1,
  },
  {
    id: 2,
    img: C2,
  },
  {
    id: 3,
    img: C3,
  },
  {
    id: 4,
    img: C4,
  },
];

export default function Dashbord() {
  const theme = useTheme();

  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path); // Navigate to the specified path
  };

  const swiperCard = (item, key) => (
    <SwiperSlide>
      <Grid key={Key} item xs={12} sm={6} md={4} lg={4} xl={3}>
        <Box
          sx={{
            Width: 345,
            height: 300,
            // backgroundColor: "transparent",
            // borderRadius: 6,
            backgroundColor: "rgba(197, 235, 170, 0.1)",
            border: "transparent",
          }}
        >
          <CardActionArea onClick={() => handleClick(item.path)}>
            <Card
              sx={{
                Width: 325,
                height: 300,
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

  const catagories = (item, key) => (
    <>
      <Grid key={Key} item xs={12} sm={6} md={6} lg={4} xl={4}>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
      <CardMedia
        sx={{ height: 340 }}
        image={item.image}
        title="green iguana"
      />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {item.cardName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
      <IconButton color="primary" href="https://wa.me/94778569639" target="_blank">
            <WhatsAppIcon />
          </IconButton>
          <IconButton color="primary" href="tel:+94778569639">
            <PhoneIcon />
          </IconButton>
      </CardActions>
    </Card>


        {/*  
        <Card
          sx={{
            display: "flex",
            Width: 345,
            height: 235,
            borderRadius: 6,
            boxShadow: "0px 3px 6px rgba(0, 0, 0, 0)",
            outline:2
            // backgroundColor: "rgb(245, 0, 79, 0.2)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              // backgroundColor: "rgb(245, 0, 79, 0.3)",
            }}
          >
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Box
                sx={{
                  // backgroundColor: "rgb(60, 179, 113, 0.3)",

                  padding: 1.5,
                  // paddingBottom:4,
                  borderRadius: 8,
                }}
              >
                <Typography component="div" variant="h5">
                {item.cardName}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                Description  Description  Description  Descriptionv    Description  Description   Description
                </Typography>
              </Box>
             
              <CardMedia
                component="img"
                sx={{
                  height: 235,
                  width: 240,
                  display: { xs: "flex", sm: "none" },
                  marginTop: 1,
                  marginLeft: 11,
                }}
                image={item.image}
                // alt="Live from space album cover"
              />
            <Box sx={{marginTop:1}}>
          <IconButton color="primary" href="https://wa.me/94778569639" target="_blank">
            <WhatsAppIcon />
          </IconButton>
          <IconButton color="primary" href="tel:+94778569639">
            <PhoneIcon />
          </IconButton>
          </Box>
            </CardContent>
          </Box>
          
          <CardMedia
            component="img"
            sx={{
              height: 235,
              width: 200,
              display: { xs: "none", sm: "flex" },
            }}
            image={item.image}
            // alt="Live from space album cover"
          />
        </Card>
        */}
      </Grid>
    </>
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

  const mainSwiper = (item, Key) => (
    <SwiperSlide>
      <Grid key={Key} item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Box
          sx={{
            Width: 345,
            // height: 460,
            height: {
              xs: 220, // default height for xs, sm, and md sizes
              md: 520, // height for md size and up
              lg: 620, // height for lg size and up
              xl: 720, // height for xl size and up
            },
            backgroundColor: "transparent",
            // borderRadius: 6,
            // backgroundColor: "red",
            border: "transparent",
            marginTop: 2,
          }}
        >
          <Card
            sx={{
              Width: 325,
              // height:440,
              height: {
                xs: 200, // default height for xs, sm, and md sizes
                md: 500, // height for md size and up
                lg: 600, // height for lg size and up
                xl: 700, // height for xl size and up
              },
              borderRadius: 6,
              backgroundColor: "rgba(127, 235, 170, 0.3)",
              border: "1px solid rgba(0, 0, 0, 0.2)",
              marginLeft: 1,
              marginRight: 1,
            }}
            // elevation={5}
          >
            <img
              alt=""
              src={item.img}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "inherit",
              }}
            />
          </Card>
          <Box
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              height: "15px", // height of the pink line
              backgroundColor: "#be43fb",
              // borderBottomLeftRadius: "6px",  // same border radius as the card
              // borderBottomRightRadius: "6px",  // same border radius as the card
            }}
          />
        </Box>
      </Grid>
    </SwiperSlide>
  );

  return (
    <>
      <Swiper
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
      >
        <Grid container spacing={0} marginTop={3} marginBottom={3}>
          {mainSlider.map((card, key) => mainSwiper(card, key))}
          {/* {CardData.map((card, key) => swiperCard(card, key))} */}
        </Grid>
      </Swiper>
      <Container>
        {/* OUR PROCESS  */}

        <Typography
          variant="h2"
          align="center"
          // gutterBottom
          sx={{
            fontWeight: "bold",
            fontFamily: "Cormorant Garamond, serif",
            color: "#be43fb",
            textShadow: "1px 5px 4px rgba(18,104,18,0.2)",
          }}
        >
          WELCOME TO MIRISSA
        </Typography>

        <Typography>
          Mirissa, a picturesque town on Sri Lanka's south coast, is famous for
          its beautiful beach, vibrant nightlife, and bustling fishing port.
          Just 150 km south of Colombo, this tropical haven is one of the
          island's premier whale and dolphin watching spots. Whether you're
          looking to relax on golden sands, enjoy fresh seafood, or embark on an
          ocean adventure, Mirissa has something for everyone.
        </Typography>

        {/*  */}

        <br />
        <Typography
          variant="h3"
          align="center"
          // gutterBottom
          sx={{
            fontWeight: "bold",
            fontFamily: "Cormorant Garamond, serif",
            color: "#be43fb",
            textShadow: "1px 5px 4px rgba(18,104,18,0.2)",
          }}
        >
          CATEGORIES
        </Typography>
        <br />

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
            {CardData.map((card, key) => swiperCard(card, key))}
          </Grid>
        </Swiper>

        <br />
        <br />
        <br />

        <Grid container spacing={1} marginTop={3} marginBottom={4}>
          {BusinessCardData.map((card, key) => catagories(card, key))}
        </Grid>

        {/* <Typography
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
        </Typography> */}
        {/* <br /> */}
        {/* <br /> */}
        {/* <Grid container spacing={1} marginTop={3} marginBottom={3}> */}
        {/* <Grid key={Key} item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Box
              sx={{
                Width: 145,
                height: 1380,
                backgroundColor: "transparent",
                // borderRadius: 6,
                // backgroundColor: "rgba(197, 235, 170, 0.1)",
                border: "transparent",
              }}
            >
              
              <Card
                sx={{
                  maxWidth: 395,
                  height: 1380,
                  borderRadius: 6,
                  backgroundColor: "rgba(127, 235, 170, 0.3)",
                  border: "1px solid rgba(0, 0, 0, 0.2)",
                }}
                // elevation={5}
              >
                <MataraToKadavatha />
              </Card>
              
            </Box>
          </Grid>
          <Grid key={Key} item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Box
              sx={{
                Width: 145,
                height: 1380,
                backgroundColor: "transparent",
                // borderRadius: 6,
                // backgroundColor: "rgba(197, 235, 170, 0.1)",
                border: "transparent",
              }}
            >
            
              <Card
                sx={{
                  maxWidth: 395,
                  height: 1380,
                  borderRadius: 6,
                  backgroundColor: "rgba(127, 235, 170, 0.3)",
                  border: "1px solid rgba(0, 0, 0, 0.2)",
                }}
                // elevation={5}
              >
                <KadawathaToMatara />
              </Card>
             
            </Box>
          </Grid> */}
        {/* </Grid> */}
      </Container>
    </>
  );
}

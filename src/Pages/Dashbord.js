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

const CardData = [
  {
    id: 1,
    image:
      "https://cdn130.picsart.com/289328266010211.png?to=crop&type=webp&r=1456x712&q=85",
    cardName: "Pizza",
    carSubName: "BBQ",
    price: "1800",
  },
  {
    id: 2,
    image:
      "https://cdn130.picsart.com/289328266010211.png?to=crop&type=webp&r=1456x712&q=85",
    cardName: "Pizza",
    carSubName: "Hot and spyce",
    price: "2000",
  },
  {
    id: 3,
    image:
      "https://cdn130.picsart.com/289328266010211.png?to=crop&type=webp&r=1456x712&q=85",
    cardName: "Pizza",
    carSubName: "tandoori chicken ",
    price: "2500",
  },
  {
    id: 4,
    image:
      "https://cdn130.picsart.com/289328266010211.png?to=crop&type=webp&r=1456x712&q=85",
    cardName: "Pizza",
    carSubName: "cheese",
    price: "3000",
  },
  {
    id: 5,
    image:
      "https://cdn130.picsart.com/289328266010211.png?to=crop&type=webp&r=1456x712&q=85",
    cardName: "Pizza",
    carSubName: "cheese",
    price: "3000",
  },
];

// const itemData = [
//   {
//     img: P1,
//     title: "Set Your Goal",
//   },
//   {
//     img: P2,
//     title: "Select Your Meal",
//   },
//   {
//     img: P3,
//     title: "Enter Your Information",
//   },
//   {
//     img: P4,
//     title: "place Your Order",
//   },
//   {
//     img: P5,
//     title: "We Process and Deliver Your Order",
//   },
//   {
//     img: P6,
//     title: "Enjoy Your Meals",
//   },
// ];
// const NutritionistData = [
//   {
//     img: NS,
//     title: "MySelf",
//   },
//   {
//     img: NC,
//     title: "Children",
//   },
//   {
//     img: NF,
//     title: "Family",
//   },
// ];

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
          <Card
            sx={{
              Width: 325,
              height: 320,
              borderRadius: 6,
              backgroundColor: "rgba(127, 235, 170, 0.3)",
              border: "1px solid rgba(0, 0, 0, 0.2)",
            }}
            // elevation={5}
          ></Card>
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
  // const NutritionistCard = (item, key) => (
  //   <Grid key={Key} item xs={12} sm={6} md={4} lg={4} xl={4}>
  //     <Card
  //       className="nutritionMeal-card"
  //       sx={{
  //         Width: 345,
  //         height: 330,
  //         borderRadius: 6,
  //         // backgroundColor: "rgba(197, 235, 170, 0.1)",
  //         // border: "1px solid rgba(0, 0, 0, 0.1)",
  //       }}
  //       elevation={0}
  //     >
  //       <Box
  //         sx={{ height: 280, padding: 2, position: "relative" }}
  //         // onClick={() => {
  //         //   navigate(`/DigiBill/${item.card_id}`);
  //         // }}
  //       >
  //         <CardHeader
  //           sx={{
  //             flexDirection: "column",
  //             justifyContent: "center",
  //             textAlign: "center",
  //             height: 80,
  //             overflow: "hidden",
  //           }}
  //           title={
  //             <Typography
  //               className="nutritionMeal-card-title"
  //               gutterBottom
  //               variant="h4"
  //               component="h2"
  //             >
  //               {item.title}
  //             </Typography>
  //           }
  //         />
  //         <CardActionArea>
  //           <Box
  //             sx={{
  //               // backgroundColor: "rgba(255, 255, 255, 0.8)",
  //               height: 180,
  //               display: "flex",
  //               justifyContent: "center",
  //               alignItems: "center",
  //               borderRadius: 5,
  //             }}
  //           >
  //             <img
  //               src={item.img}
  //               className="nutritionMeal-card-img"
  //               height="auto"
  //               width="300px"
  //               style={{ borderRadius: "10px" }}
  //               alt=""
  //             />
  //             {/* <div className="overlay"></div> */}
  //             <Typography
  //               variant="h3"
  //               className="img-title"
  //               style={{
  //                 position: "absolute",
  //                 top: "50%",
  //                 left: "50%",
  //                 transform: "translate(-50%, -50%)",
  //                 color: "rgb(18, 104, 18)",
  //                 // backgroundColor:"black",
  //                 fontWeight: "bold",
  //               }}
  //             >
  //               {item.title}
  //             </Typography>
  //           </Box>
  //         </CardActionArea>
  //       </Box>
  //     </Card>
  //   </Grid>
  // );

  // const HealthGoals = (item, key) => (
  //   <Grid key={Key} item xs={12} sm={12} md={6} lg={6} xl={6}>
  //     <Card sx={{ display: "flex", Width: 345, height: 280, borderRadius: 6 }}>
  //       <Box sx={{ display: "flex", flexDirection: "column" }}>
  //         <CardContent sx={{ flex: "1 0 auto" }}>
  //           <Typography component="div" variant="h5">
  //             WEIGHT LOSS
  //           </Typography>
  //           <Typography
  //             variant="subtitle1"
  //             color="text.secondary"
  //             component="div"
  //           >
  //             Forget starving yourself to lose weight. Let us introduce you to a
  //             healthy regime where you make smart food choices without having to
  //             skip them to lose weight.
  //           </Typography>
  //         </CardContent>
  //       </Box>
  //       <CardMedia
  //         component="img"
  //         sx={{ width: 180 }}
  //         image="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
  //         alt="Live from space album cover"
  //       />
  //     </Card>
  //   </Grid>;
  // );

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
          MIRISSA
        </Typography>
        <br />
        <br /> */}

        {/* <OurProces />
        
        <br />
        <br />
        <br />
        <br />
        <br /> */}

        {/* NUTRITION MEAL PLANS  */}
        {/* /******* card*/}

        {/* <Grid container spacing={2} marginTop={3} marginBottom={3}>
          {CardData.map((card, key) => cardData(card, key))}
        </Grid> */}

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
      </Container>
    </>
  );
}

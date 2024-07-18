import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import imgS1 from "../Image/Hire_and_Taxi.jpg";
import id1 from "../Image/ToursAndHires/id-1.jpg";
import { red } from "@mui/material/colors";
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { WhatsApp } from "@mui/icons-material";

const CardData = [
  {
    id: 1,
    image: id1,
    cardName: "Ms. Lakmal",
    cardSubName: "",
    link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.2745983449754!2d80.4708050741119!3d5.956855329490534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae13fc6ee1bf711%3A0xe1bfa6ccb0ea10b!2sMirissa!5e0!3m2!1sen!2slk!4v1721060011284!5m2!1sen!2slk",
    call:"+94779716434",
    WhatsApp:"+94779716434"
  },
  {
    id: 2,
    image: imgS1,
    cardName: "Mirissa infor Tours and Hires card",
    cardSubName: "Mirissa best business site",
    // path: "/Diving",
  },
  {
    id: 3,
    image: imgS1,
    cardName: "Mirissa infor Tours and Hires card",
    cardSubName: "Mirissa best business site",
    // path: "/WhaleWatching",
  },
  {
    id: 4,
    image: imgS1,
    cardName: "Mirissa infor Tours and Hires card",
    cardSubName: "Mirissa best business site",
    // path: "/VehicleRent",
  },
  {
    id: 5,
    image: imgS1,
    cardName: "Mirissa infor Tours and Hires card",
    cardSubName: "Mirissa best business site",
    // path: "/MobileTopup",
  },
  {
    id: 6,
    image: imgS1,
    cardName: "Mirissa infor Tours and Hires card",
    cardSubName: "Mirissa best business site",
    // path: "/Restaurants",
  },
  {
    id: 7,
    image: imgS1,
    cardName: "Mirissa infor Tours and Hires card",
    cardSubName: "Mirissa best business site",
    // path: "/MassagingAndSpa",
  },
  {
    id: 8,
    image: imgS1,
    cardName: "Mirissa infor Tours and Hires card",
    cardSubName: "Mirissa best business site",
    // path: "/Surfing",
  },
];

export default function ToursAndHires() {
  const sellingCard = (item, key) => (
    <Grid key={key} item xs={12} sm={12} md={6} lg={4} xl={4}>
      {/* <Box
          sx={{
            Width:'auto',
            height: 300,
            // backgroundColor: "transparent",
            // borderRadius: 6,
            backgroundColor: "rgba(197, 235, 170, 0.5)",
            border: "transparent",
          }}
        > */}
      <Card
        sx={{
          maxWidth: 495,
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: 3,
          paddingRight: 3,
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          // action={
          //   <IconButton aria-label="settings">
          //     <MoreVertIcon />
          //   </IconButton>
          // }
          title={item.cardName}
          subheader={item.cardSubName}
        />
        <CardMedia
          component="img"
          height="320"
          image={item.image}
          alt="Paella dish"
        />
        <Box>
        <Grid container>
         <Grid item xs={6}>
         <CardContent >
          <Typography sx={{fontSize:20}}>
           Contact Me 
          </Typography><br/><br/>
          <Typography sx={{fontSize:15}}>
          <a href={`tel:${item.call}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <CallIcon sx={{ fontSize: 15 }} /> {item.call}
              </a><br/><br/>
          {/* <a href="https://wa.me/94779716434" style={{ textDecoration: 'none', color: 'inherit' }}>
                <WhatsAppIcon sx={{ fontSize: 15 }} /> {item.WhatsApp}
              </a> */}
              <a href={`https://api.whatsapp.com/send?phone=${item.WhatsApp}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <WhatsAppIcon sx={{ fontSize: 15 }} /> {item.WhatsApp}
              </a>
          </Typography>
        </CardContent>
        </Grid>
        <Grid item xs={6}>
          <CardContent>
            <iframe
              src={item.link}
              width="170"
              height="210"
              style={{ border: 0, borderRadius: "8px" }}
              // style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </CardContent>
        </Grid>
        </Grid>
        </Box>
         {/* <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingTop: 1 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor:"red" }}>
            <Typography>Contact Me</Typography>
            <Typography><CallIcon /> +94779716434</Typography>
          </Box>
          <iframe
            src={item.link}
            width="165"
            height="210"
            style={{ border: 0, borderRadius: "8px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box> */}
      </Card>
      
      {/* </Box> */}
    </Grid>
  );

  return (
    <>
      <Container>
        <Grid container spacing={2} marginTop={3} marginBottom={3}>
          {CardData.map((card, key) => sellingCard(card, key))}
        </Grid>
      </Container>
    </>
  );
}

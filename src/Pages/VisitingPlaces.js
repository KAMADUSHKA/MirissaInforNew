import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Container, Grid } from "@mui/material";
import { Key } from "@mui/icons-material";
import img1 from "../Image/Restaurants.jpg";

export default function VisitingPlaces() {
  const CardData = [
    {
      id: 1,
      image: img1,
      placeName: "Mirissa Railway Station",
      description: "Mirissa best business site",
      link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.2745983449754!2d80.4708050741119!3d5.956855329490534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae13fc6ee1bf711%3A0xe1bfa6ccb0ea10b!2sMirissa!5e0!3m2!1sen!2slk!4v1721060011284!5m2!1sen!2slk",
    },
    {
      id: 2,
      image: img1,
      placeName: "Secret Beach Mirissa",
      description: "Mirissa best business site",
      link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31300.03281218176!2d80.44984506006853!3d5.943545886640973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1157f48c9a207%3A0xc5fc17e2e73ed16e!2sSecret%20Beach%20Mirissa!5e0!3m2!1sen!2slk!4v1721064238296!5m2!1sen!2slk",
    },
    {
      id: 3,
      image: img1,
      placeName: "Coconut Tree Hill",
      description: "Mirissa best business site",
      link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.401707609849!2d80.46566707411174!3d5.939240629678833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae13e324bc0846b%3A0x35758cdcba8dedcf!2sCoconut%20Tree%20Hill!5e0!3m2!1sen!2slk!4v1721064368987!5m2!1sen!2slk",
    },
    {
      id: 4,
      image: img1,
      placeName: "Parrot Rock Mirissa",
      description: "Mirissa best business site",
      link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.3859456928576!2d80.45967357411179!3d5.9414277296554765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae13e2cc22dd4fb%3A0x5a4954d71c0b1070!2sParrot%20Rock!5e0!3m2!1sen!2slk!4v1721064540498!5m2!1sen!2slk",
    },
    {
      id: 5,
      image: img1,
      placeName: "Mirissa",
      description: "Mirissa best business site",
      link: "https",
    },
    {
      id: 6,
      image: img1,
      placeName: "Mirissa",
      description: "Mirissa best business site",
      link: "https",
    },
   
  ];

  const visitingCard = (item, key) => (
    <Grid key={Key} item xs={12} sm={12} md={6} lg={4} xl={4}>
      <Card sx={{ maxWidth: 600 }}>
        <CardMedia
          sx={{ height: 240, backgroundColor: "red" }}
          image={img1}
          title="green iguana"
        />
        <Box>
          <Grid container>
            <Grid item xs={5}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.placeName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={7}>
              <CardContent>
                <iframe
                  src={item.link}
                  width="195"
                  height="230"
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
      </Card>
    </Grid>
  );

  return (
    <>
      <Container>
        <Grid container spacing={2} marginTop={3} marginBottom={3}>
          {CardData.map((card, key) => visitingCard(card, key))}
        </Grid>
      </Container>
    </>
  );
}

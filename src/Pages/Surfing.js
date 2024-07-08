import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import imgS1 from "../Image/Surfing.jpg";
import { Container, Grid } from "@mui/material";
import { Key } from "@mui/icons-material";

const CardData = [
  {
    id: 1,
    image: imgS1,
    cardName: "Tours & Hires",
    path: "/ToursAndHires",
  },
  {
    id: 2,
    image: imgS1,
    cardName: "Diving",
    path: "/Diving",
  },
  {
    id: 3,
    image: imgS1,
    cardName: "Whale Watching",
    path: "/WhaleWatching",
  },
  {
    id: 4,
    image: imgS1,
    cardName: "Vehicle Rent",
    path: "/VehicleRent",
  },
  {
    id: 5,
    image: imgS1,
    cardName: "Mobile topups & Sim cards",
    path: "/MobileTopup",
  },
  {
    id: 6,
    image: imgS1,
    cardName: "Restaurants",
    path: "/Restaurants",
  },
  {
    id: 7,
    image: imgS1,
    cardName: "Massaging & Spa",
    path: "/MassagingAndSpa",
  },
  {
    id: 8,
    image: imgS1,
    cardName: "Surfing",
    path: "/Surfing",
  },
];

export default function Surfing() {
  const sellingCard = (item, key) => (
    <Grid key={key} item xs={12} sm={6} md={4} lg={4} xl={3}>
      <Card
        sx={{ maxWidth: 345, alignItems: "center", justifyContent: "center" }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image={imgS1}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );

  return (
    <>
      <Container>
        <Grid container spacing={1} marginTop={3} marginBottom={3}>
          {CardData.map((card, key) => sellingCard(card, key))}
        </Grid>
      </Container>
    </>
  );
}

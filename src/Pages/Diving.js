import {
  Avatar,
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
import imgS1 from "../Image/Diving.jpg";
import { red } from "@mui/material/colors";

const CardData = [
  {
    id: 1,
    image: imgS1,
    cardName: "Mirissa infor Diving card",
    cardSubName: "Mirissa best business site",
    // path: "/ToursAndHires",
  },
  {
    id: 2,
    image: imgS1,
    cardName: "Mirissa infor Diving card",
    cardSubName: "Mirissa best business site",
    // path: "/Diving",
  },
  {
    id: 3,
    image: imgS1,
    cardName: "Mirissa infor Diving card",
    cardSubName: "Mirissa best business site",
    // path: "/WhaleWatching",
  },
  {
    id: 4,
    image: imgS1,
    cardName: "Mirissa infor Diving card",
    cardSubName: "Mirissa best business site",
    // path: "/VehicleRent",
  },
  {
    id: 5,
    image: imgS1,
    cardName: "Mirissa infor Diving card",
    cardSubName: "Mirissa best business site",
    // path: "/MobileTopup",
  },
  {
    id: 6,
    image: imgS1,
    cardName: "Mirissa infor Diving card",
    cardSubName: "Mirissa best business site",
    // path: "/Restaurants",
  },
  {
    id: 7,
    image: imgS1,
    cardName: "Mirissa infor Diving card",
    cardSubName: "Mirissa best business site",
    // path: "/MassagingAndSpa",
  },
  {
    id: 8,
    image: imgS1,
    cardName: "Mirissa infor Diving card",
    cardSubName: "Mirissa best business site",
    // path: "/Surfing",
  },
];
export default function Diving() {
  const sellingCard = (item, key) => (
    <Grid key={key} item xs={12} sm={6} md={4} lg={4} xl={3}>
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
        sx={{ maxWidth: 485, alignItems: "center", justifyContent: "center", paddingLeft:3, paddingRight:3 }}
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
          height="280"
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
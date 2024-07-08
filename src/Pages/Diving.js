import { Key } from '@mui/icons-material'
import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import H1 from "../Image/H1.webp";
import H2 from "../Image/H2.png";
import H3 from "../Image/H3.png";
import H4 from "../Image/H4.png";


export default function Diving() {
  return (
    <>
      <Grid container spacing={2} marginTop={3} marginBottom={3}>
          <Grid key={Key} item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Card
              sx={{
                display: "flex",
                Width: 345,
                height: 390,
                borderRadius: 6,
                boxShadow: "0px 3px 6px rgba(0, 0, 0, 0)",
                background:"rgb(60, 179, 113, 0.1)",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Box
                    sx={{
                      backgroundColor: "rgb(60, 179, 113, 0.3)",

                      padding: 1.5,
                      // paddingBottom:4,
                      borderRadius: 8,
                    }}
                  >
                    <Typography component="div" variant="h5">
                      WEIGHT LOSS
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      Forget starving yourself to lose weight. Let us introduce
                      you to a healthy regime where you make smart food choices
                      without having to skip them to lose weight.
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
                    image={H1}
                    // alt="Live from space album cover"
                  />
                </CardContent>
              </Box>
              <CardMedia
                component="img"
                sx={{
                  height: 235,
                  width: 200,
                  display: { xs: "none", sm: "flex" },
                }}
                image={H1}
                // alt="Live from space album cover"
              />
            </Card>
          </Grid>
          <Grid key={Key} item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Card
              sx={{
                display: "flex",
                Width: 345,
                height: 420,
                borderRadius: 6,
                boxShadow: "0px 3px 6px rgba(0, 0, 0, 0)",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Box
                    sx={{
                      backgroundColor: "rgba(255, 99, 71, 0.3)",

                      padding: 1.5,
                      // paddingBottom:4,
                      borderRadius: 8,
                    }}
                  >
                    <Typography component="div" variant="h5">
                      ATHLETE
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      When you are an athlete, you need a meal plan that will
                      support your rigorous activities, which is exactly what we
                      serve.
                    </Typography>
                  </Box>
                  <CardMedia
                    component="img"
                    sx={{
                      width: 340,
                      display: { xs: "flex", sm: "none" },
                      marginTop: 1,
                      marginLeft: 9,
                    }}
                    image={H2}
                    // alt="Live from space album cover"
                  />
                </CardContent>
              </Box>
              <CardMedia
                component="img"
                sx={{ width: 240, display: { xs: "none", sm: "flex" } }}
                image={H2}
                // alt="Live from space album cover"
              />
            </Card>
          </Grid>
          <Grid key={Key} item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Card
              sx={{
                display: "flex",
                Width: 345,
                height: 400,
                borderRadius: 6,
                boxShadow: "0px 3px 6px rgba(0, 0, 0, 0)",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Box
                    sx={{
                      backgroundColor: "rgb(106, 90, 205, 0.3)",

                      padding: 1.5,
                      // paddingBottom:4,
                      borderRadius: 8,
                    }}
                  >
                    <Typography component="div" variant="h5">
                      WELLNESS
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      Lead a wholesome life with our wellness meal plan that
                      will enhance the quality of your life, keeping you healthy
                      across the board.
                    </Typography>
                  </Box>
                  <CardMedia
                    component="img"
                    sx={{
                      width: 332,
                      display: { xs: "flex", sm: "none" },
                      marginTop: 1,
                      marginLeft: 11,
                    }}
                    image={H3}
                    // alt="Live from space album cover"
                  />
                </CardContent>
              </Box>
              <CardMedia
                component="img"
                sx={{ width: 230, display: { xs: "none", sm: "flex" } }}
                image={H3}
                // alt="Live from space album cover"
              />
            </Card>
          </Grid>
          <Grid key={Key} item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Card
              sx={{
                display: "flex",
                Width: 345,
                height: 400,
                borderRadius: 6,
                boxShadow: "0px 3px 6px rgba(0, 0, 0, 0)",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Box
                    sx={{
                      backgroundColor: "rgb(255, 152, 10, 0.3)",

                      padding: 1.5,
                      // paddingBottom:4,
                      borderRadius: 8,
                    }}
                  >
                    <Typography component="div" variant="h5">
                      MUSCLE GAIN
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      Give your muscles the necessary boost with our
                      muscle-enhancing food through our meal plan which will
                      accelerate your fitness journey with remarkable positive
                      results.
                    </Typography>
                  </Box>
                  <CardMedia
                    component="img"
                    sx={{
                      marginTop: 1,
                      width: 332,
                      display: { xs: "flex", sm: "none" },
                      marginLeft: 10,
                    }}
                    image={H4}
                    // alt="Live from space album cover"
                  />
                </CardContent>
              </Box>
              <CardMedia
                component="img"
                sx={{ width: 175, display: { xs: "none", sm: "flex" } }}
                image={H4}
                // alt="Live from space album cover"
              />
            </Card>
          </Grid>
        </Grid>
    </>
  )
}

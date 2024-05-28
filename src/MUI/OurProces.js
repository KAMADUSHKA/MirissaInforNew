import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Collapse,
  Container,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import P1 from "../Image/P1.jpg";
import P2 from "../Image/P2.jpg";
import P3 from "../Image/P3.jpg";
import P4 from "../Image/P4.jpg";
import P5 from "../Image/P5.jpg";
import P6 from "../Image/P6.jpg";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import InboxIcon from "@mui/icons-material/MoveToInbox";

export default function OurProces() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      
        <Grid container spacing={3} marginTop={5} marginBottom={5}>
          <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
            <Card
              // className="nutritionMeal-card"
              sx={{
                Width: 365,
                height: 350,
                borderRadius: 6,

                // backgroundColor: "rgba(197, 235, 170, 0.1)",
                // border: "1px solid rgba(0, 0, 0, 0.1)",
              }}
              elevation={0}
            >
              <Box
                sx={{
                  height: 220,
                  padding: 1,
                  position: "relative",
                  backgroundColor: "blue",
                }}
              >
                <CardHeader
                  sx={{
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "center",
                    height: 40,
                    overflow: "hidden",
                  }}
                  title={
                    <Typography gutterBottom variant="h4" component="h2">
                      මාතර - මාකුඹුර
                    </Typography>
                  }
                />

                <Box
                  sx={{
                    // backgroundColor: "rgba(255, 255, 255, 0.8)",

                    height: 300,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 6,
                    marginTop: 1,
                    backgroundColor: "red",
                  }}
                >
                  
                  <Typography >
                    <h4>
                      උදෑසන 4.30 සිට රාත්‍රී 9.00 දක්වා කාලය තුල බස් රථ ධාවනය
                      වේ.
                    </h4>
                    <ol type="1">
                      <li>
                     
                        අගහරුවාදා ,බදාදා ,බ්‍රහස්පතින්දා යන දින වල විනාඩි 30න්
                        30ට ද ,
                        
                      </li>
                      <li>
                        සිකුරාදා ,සෙනසුරාදා ,ඉරිදා යන දින වල විනාඩි 20න් 20ට ද ,
                      </li>
                      <li>
                        සදුදා දිනවල උදෑසන 4.30 සිට උදෑසන 9.00දක්වා විනාඩි 15න්
                        15ට ද ,
                      </li>
                      <li>
                        උදෑසන 9.00 සිට උදෑසන 11.00 දක්වා විනාඩි 20න් 20ට ද ,
                      </li>
                      <li>
                        උදෑසන 11.00 සිට රාත්‍රී 9 දක්වා විනාඩි 30න් 30ට ද ,
                      </li>
                    </ol>
                  </Typography>
                 
                </Box>
              </Box>
            </Card>
          </Grid>

          {/*  Second card  */}

          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <Card
              className="nutritionMeal-card"
              sx={{
                Width: 365,
                height: 300,
                borderRadius: 6,
                // backgroundColor: "rgba(197, 235, 170, 0.1)",
                // border: "1px solid rgba(0, 0, 0, 0.1)",
              }}
              elevation={0}
            >
              <Box
                sx={{
                  height: 220,
                  padding: 1,
                  position: "relative",
                  backgroundColor: "blue",
                }}
              >
                <CardHeader
                  sx={{
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "center",
                    height: 40,
                    overflow: "hidden",
                  }}
                  title={
                    <Typography gutterBottom variant="h4" component="h2">
                      මාතර - මාකුඹුර
                    </Typography>
                  }
                />

                <Box
                  sx={{
                    // backgroundColor: "rgba(255, 255, 255, 0.8)",

                    height: 180,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 6,
                    marginTop: 1,
                    backgroundColor: "red",
                  }}
                >
                  <Typography>
                    <h4>sdfsefgwerfg</h4>
                    <ol type="1">
                      <li>සිකුරාදා ,සෙනසුරාදා , ඉරිදා යන දිනඉරිදා යන දින</li>
                      <li>ikujkmjyju</li>
                      <li>juyjuytyth</li>
                      <li>ikujkmjyju</li>
                    </ol>
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>

          {/*  third card  */}

          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <Card
              // className="nutritionMeal-card"
              sx={{
                Width: 365,
                height: 380,
                borderRadius: 6,

                // backgroundColor: "rgba(197, 235, 170, 0.1)",
                // border: "1px solid rgba(0, 0, 0, 0.1)",
              }}
              elevation={0}
            >
              <Box sx={{ height: 280, padding: 1, position: "relative" }}>
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
                      Enter Your Information
                    </Typography>
                  }
                />

                <Box
                  sx={{
                    // backgroundColor: "rgba(255, 255, 255, 0.8)",
                    height: 180,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 5,
                    marginTop: 5,
                  }}
                >
                  <img
                    src={P3}
                    height="auto"
                    width="280px"
                    style={{
                      borderRadius: "10px",
                      maxWidth: "100%",
                      height: "auto",
                    }}
                    alt=""
                  />
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <Card
              // className="nutritionMeal-card"
              sx={{
                Width: 365,
                height: 380,
                borderRadius: 6,

                // backgroundColor: "rgba(197, 235, 170, 0.1)",
                // border: "1px solid rgba(0, 0, 0, 0.1)",
              }}
              elevation={0}
            >
              <Box sx={{ height: 280, padding: 1, position: "relative" }}>
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
                      place Your Order
                    </Typography>
                  }
                />

                <Box
                  sx={{
                    // backgroundColor: "rgba(255, 255, 255, 0.8)",
                    height: 180,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 5,
                    marginTop: 5,
                  }}
                >
                  <img
                    src={P4}
                    height="auto"
                    width="280px"
                    style={{
                      borderRadius: "10px",
                      maxWidth: "100%",
                      height: "auto",
                    }}
                    alt=""
                  />
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <Card
              // className="nutritionMeal-card"
              sx={{
                Width: 365,
                height: 350,
                borderRadius: 6,

                // backgroundColor: "rgba(197, 235, 170, 0.1)",
                // border: "1px solid rgba(0, 0, 0, 0.1)",
              }}
              elevation={0}
            >
              <Box sx={{ height: 280, padding: 1, position: "relative" }}>
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
                      We Process and Deliver Your Order
                    </Typography>
                  }
                />

                <Box
                  sx={{
                    // backgroundColor: "rgba(255, 255, 255, 0.8)",
                    height: 180,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 5,
                    marginTop: 4.5,
                  }}
                >
                  <img
                    src={P5}
                    height="auto"
                    width="330px"
                    style={{ borderRadius: "10px" }}
                    alt=""
                  />
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <Card
              // className="nutritionMeal-card"
              sx={{
                Width: 365,
                height: 350,
                borderRadius: 6,

                // backgroundColor: "rgba(197, 235, 170, 0.1)",
                // border: "1px solid rgba(0, 0, 0, 0.1)",
              }}
              elevation={0}
            >
              <Box sx={{ height: 280, padding: 1, position: "relative" }}>
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
                      Enjoy Your Meals
                    </Typography>
                  }
                />

                <Box
                  sx={{
                    // backgroundColor: "rgba(255, 255, 255, 0.8)",
                    height: 180,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 5,
                    marginTop: 2.5,
                  }}
                >
                  <img
                    src={P6}
                    height="auto"
                    width="390px"
                    style={{
                      borderRadius: "10px",
                      maxWidth: "100%",
                      height: "auto",
                    }}
                    alt=""
                  />
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
      
    </>
  );
}

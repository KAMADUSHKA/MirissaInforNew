import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import LOGO from "../Image/LOGO11.jpg";
import CallIcon from "@mui/icons-material/Call";

const pages = [
  "Tours & Hires",
  "Whale Watching",
  "Vehicle Rent",
  "Hotel, Restaurants & Spa",
  "Surfing",
];
const settings = ["Profile", "LogIn", "LogOut"];

export default function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    // <AppBar position="static" sx={{backgroundColor:"rgb(18, 104, 18)"}}>
    <AppBar position="static" sx={{ backgroundColor: "rgb(0, 0, 0)" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: "none", lg: "flex" }, mr: 1 }} /> */}
          {/* <BeachAccessIcon sx={{ display: { xs: "none", lg: "flex" }, mr: 1 }} /> */}
          <Avatar
            alt="Remy Sharp"
            src={LOGO}
            sx={{ display: { xs: "none", lg: "flex" } }}
          />
          &nbsp;&nbsp;
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", lg: "flex" },
              fontFamily: "monospace",
              fontWeight: 600,
              letterSpacing: ".2rem",
              color: "#be43fb",
              textDecoration: "none",
            }}
          >
            Mirissa Info
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", lg: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#be43fb"
            >
              <MenuIcon sx={{ color: "#be43fb" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", lg: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={() => {
                    handleCloseNavMenu();
                    if (page === "Tours & Hires") {
                      window.location.href = "/ToursAndHires"; // Navigate to "/Plans_and_Diets" for the "Blog" button
                    }
                    if (page === "Whale Watching") {
                      window.location.href = "/WhaleWatching"; // Navigate to "/Plans_and_Diets" for the "Blog" button
                    }
                    if (page === "Vehicle Rent") {
                      window.location.href = "/VehicleRent"; // Navigate to "/Plans_and_Diets" for the "Blog" button
                    }
                    if (page === "Hotel, Restaurants & Spa") {
                      window.location.href = "/Restaurants"; // Navigate to "/Plans_and_Diets" for the "Blog" button
                    }
                    if (page === "Surfing") {
                      window.location.href = "/Surfing"; // Navigate to "/Plans_and_Diets" for the "Blog" button
                    }
                  }}
                  sx={{ backgroundColor: "rgb(0, 0, 0)" }}
                >
                  <Typography
                    textAlign="center"
                    sx={{
                      color: "#be43fb",
                      // "&:hover": {
                      //   Color: "rgba(0,0,0)", // Change this to your desired hover color
                      // }
                    }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: "flex", lg: "none" }, mr: 1 }} /> */}
          {/* <BeachAccessIcon sx={{ display: { xs: "flex", lg: "none" }, mr: 1 }} /> */}
          {/* <Avatar alt="Remy Sharp" src={LOGO}  sx={{ display: { xs: "flex", lg: "none" }}}/> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", lg: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#be43fb",
              textDecoration: "none",
            }}
          >
            Mirissa Info
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", lg: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => {
                  handleCloseNavMenu(); // Close the navigation menu
                  if (page === "Tours & Hires") {
                    window.location.href = "/ToursAndHires"; // Navigate to "/Plans_and_Diets" for the "Blog" button
                  }
                  if (page === "Whale Watching") {
                    window.location.href = "/WhaleWatching"; // Navigate to "/Plans_and_Diets" for the "Blog" button
                  }
                  if (page === "Vehicle Rent") {
                    window.location.href = "/VehicleRent"; // Navigate to "/Plans_and_Diets" for the "Blog" button
                  }
                  if (page === "Hotel, Restaurants & Spa") {
                    window.location.href = "/Restaurants"; // Navigate to "/Plans_and_Diets" for the "Blog" button
                  }
                  if (page === "Surfing") {
                    window.location.href = "/Surfing"; // Navigate to "/Plans_and_Diets" for the "Blog" button
                  }
                }}
                sx={{
                  my: 2,
                  color: "#be43fb",
                  display: "block",
                  "&:hover": {
                    backgroundColor: "#be43fb",
                    color: "black",
                    fontWeight: "bold",
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box
            sx={{color:"#be43fb" ,display: { xs: "none", lg: "flex" }, padding: "5px 10px",border: "1px solid #be43fb",borderRadius: "5px", }}
          >
            <CallIcon />
            &nbsp;&nbsp;
            <Typography
              variant="body1"
              sx={{
                color: "#be43fb",
                fontFamily: "monospace",
                fontWeight: 700,
                // Padding inside the box
                 // Border color and width
                 // Rounded corners
              }}
            >
             : +94713321950
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

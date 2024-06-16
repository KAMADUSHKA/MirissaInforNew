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
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import LOGO from "../Image/LOGO11.jpg";

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
       <AppBar position="static" sx={{backgroundColor:"rgb(0, 0, 0)"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: "none", lg: "flex" }, mr: 1 }} /> */}
          {/* <BeachAccessIcon sx={{ display: { xs: "none", lg: "flex" }, mr: 1 }} /> */}
          <Avatar alt="Remy Sharp" src={LOGO}  sx={{ display: { xs: "none", lg: "flex" }}}/>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", lg: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#be43fb",
              textDecoration: "none",
            }}
          >
            &nbsp; Mirissa Info
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", lg: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color= "#be43fb"
            >
              <MenuIcon sx={{color:"#be43fb"}} />
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
                      window.location.href = "/Plans_and_Diets"; // Navigate to "/Plans_and_Diets" for the "Blog" button
                    }
                    if (page === "Vehicle Rent") {
                      window.location.href = "/Custom_Meals"; // Navigate to "/Plans_and_Diets" for the "Blog" button
                    }
                    if (page === "Hotel, Restaurants & Spa") {
                      window.location.href = "/Quick_Check_Out"; // Navigate to "/Plans_and_Diets" for the "Blog" button
                    }
                    if (page === "Surfing") {
                      window.location.href = "/Channel_Nutritionist"; // Navigate to "/Plans_and_Diets" for the "Blog" button
                    }
                  }}
                  sx={{backgroundColor:"rgb(0, 0, 0)"}}
                >
                  <Typography textAlign="center" sx={{color:"#be43fb"}}>{page}</Typography>
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
                    window.location.href = "/Plans_and_Diets"; // Navigate to "/Plans_and_Diets" for the "Blog" button
                  }
                  if (page === "Vehicle Rent") {
                    window.location.href = "/Custom_Meals"; // Navigate to "/Plans_and_Diets" for the "Blog" button
                  }
                  if (page === "Hotel, Restaurants & Spa") {
                    window.location.href = "/Quick_Check_Out"; // Navigate to "/Plans_and_Diets" for the "Blog" button
                  }
                  if (page === "Surfing") {
                    window.location.href = "/Channel_Nutritionist"; // Navigate to "/Plans_and_Diets" for the "Blog" button
                  }
                }}
                sx={{ my: 2, color: "#be43fb", display: "block", }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {/* <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.972764281.1692088791&semt=ais" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} 
                onClick={() => {
                  if (setting === "LogIn") {
                    window.location.href = "/Login"; 
                  }
                  if (setting === "Profile") {
                    window.location.href = "/Profile"; 
                  }
                }}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

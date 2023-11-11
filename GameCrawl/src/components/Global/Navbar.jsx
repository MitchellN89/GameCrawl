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
import { useUserContext } from "../../context/UserProvider";
import GamepadIcon from "@mui/icons-material/Gamepad";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

const StyledNavLink = styled(NavLink)(() => ({
  color: "white",
  textDecoration: "none",
  "&.active": {
    textDecoration: "underline",
  },
}));

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [user, userDispatch] = useUserContext();
  const navigate = useNavigate();

  const pages = [
    { val: "Store", href: "/store" },
    { val: "My Collection", href: "/collections" },
  ];

  const settings = [
    // {
    //   val: "Profile",
    //   onClick: () => {
    //     console.log("Clicked Profile. This is not available at this stage");
    //   },
    // },
    {
      val: "Logout",
      onClick: () => {
        userDispatch({ type: "logout" });
      },
    },
  ];

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
    <AppBar position="sticky" sx={{ backgroundColor: "rgb(10, 10, 90)" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <GamepadIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            GAME CRAWL
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
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
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.val} onClick={handleCloseNavMenu}>
                  <Typography
                    onClick={() => {
                      navigate(page.href);
                    }}
                    textAlign="center"
                  >
                    {page.val}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <GamepadIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Game Crawl
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.val}
                onClick={(evt) => {
                  navigate(page.href);
                  handleCloseNavMenu(evt);
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <StyledNavLink to={page.href}>{page.val}</StyledNavLink>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {user ? (
                  <Avatar sx={{ backgroundColor: "rgb(100, 100, 180)" }}>
                    {user.userName[0]}
                  </Avatar>
                ) : null}
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
                <MenuItem key={setting.val} onClick={handleCloseUserMenu}>
                  <Typography onClick={setting.onClick} textAlign="center">
                    {setting.val}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;

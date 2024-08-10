import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Link from 'next/link';
import { Cookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { useRouter } from "next/navigation";
import { logout } from '@/toolkit/authSlice';
import { Tooltip } from '@mui/material';
import Image from 'next/image';
import img1 from '../../public/Images/download.png'

const pages = ['About', 'Blog', 'Contact'];
const settings = ['Login', 'Register']

export default function Header() {
  const cookie = new Cookies();
  const dispatch = useDispatch();
  const router = useRouter();

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  }

  const [name, setName] = useState("");
  //  const [token, setToken] = useState();
  const [user, setUser] = useState();


  const token = cookie.get("token", { path: "/" });
  //    const name = cookie.get("name", {path:"/"});
  //    const user_id = cookie.get('_id', {path:"/"});

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    router.push("/");
  }

  useEffect(() => {

    const name = cookie.get("name", { path: "/" });
    const user_id = cookie.get('_id', { path: "/" });
    setUser(user_id);
    // setToken(token)
    setName(name);
  }, [token]);

  return (
    <AppBar position="static" >
      <Container>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { lg: 'flex', md: 'flex', xs: 'none' } }}>

            {/* <img style={{width:"100px", height:"80px",display:{xs:'none', md:'flex'}}} src={img1} alt="" />  */}

            <Typography
              variant="h4"
              noWrap
              style={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 300,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                // marginTop:"30px"
              }}
            >

              MEDINEST
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link href={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
                    Home
                  </Link>
                </Typography>
              </MenuItem>
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>

                  <Typography textAlign="center">
                    <Link href={`/cms/${page.toLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      {page}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { lg: 'none', md: 'none', xs: 'block' } }}>
            {/* <img style={{width:"130px", height:"100px"}} src={img1} alt="" /> */}
          </Box>
          <Typography
            variant="h5"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MEDINEST
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  <Link href={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
                    HOME
                  </Link>
                </Button>
              </Typography>
            </MenuItem>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link href={`/cms/${page.toLowerCase()}`} style={{ textDecoration: 'none', color: 'white' }}>
                  {page}
                </Link>

              </Button>
            ))}
           
          </Box>

          <MenuItem>
            <h6 style={{marginRight:"5px"}}>{name} </h6>
          </MenuItem>




          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Image style={{width:"20px", height:"20px", borderRadius:"50%", marginRight:"10px",position:"absolute" }} src={img1} alt="" /> 
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings?.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  {console.log(setting, "setting")}
                  <Typography textAlign="center">
                    {" "}
                    <Link
                      href={`/auth/${setting.toLowerCase()}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {setting === "Login" ? (
                        token ? (
                          <Button variant="outlined" color="primary" onClick={handleLogout}>Logout</Button>
                        ) : (
                          <Button variant="outlined" color="primary">Login</Button>
                        )
                      ) : (
                        <Button variant="outlined" color="primary">{setting}</Button>
                      )}
                    </Link>

                  </Typography>

                </MenuItem>
              ))}
              <MenuItem>
             {token ? <Typography textAlign="center">{" "}<Link 
                href={`/cms/profile/${user}`}
                style={{ textDecoration: "none", color: "inherit" }}
              > <Button variant="contained" color="primary">Profile</Button></Link></Typography>:
              <Button variant="contained" color="primary" disabled>Profile</Button>}
              </MenuItem>
            </Menu>

          </Box>


        </Toolbar>
      </Container>
    </AppBar>
  );
}



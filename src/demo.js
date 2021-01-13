import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import HomeIcon from '@material-ui/icons/Home';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

function shoot(){
    alert("Clicked Button")
}

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
      
          
          <Typography className={classes.title} variant="h6" noWrap>
          <div class="navbar">
          <a href="#"> Home </a>
          <a href="#"><i class="fa fa-fw fa-search"></i>Discover</a>
          <a href="#"><i class="fa fa-fw fa-envelope"></i>InstaMatch</a>
          <a href="#"><i class="fa fa-fw fa-user"></i> Schedules</a>
        </div>
          
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    
      <div className = "container ml-5">
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>

      </div> 
      <Divider light />

      <div 
        className = "container" style={{marginLeft:'2rem', marginTop:'1rem'}}>
            Following
           
      </div>
      <span class="square"></span>
      <span class="square"></span>
      <span class="square"></span>
      <span class="square"></span>
      <span class="square"></span>
      <span class="square"></span>
      
      <span class="square"></span>
      

<Divider light/>
      
      <div className = "container" style={{marginLeft:'2rem', marginTop:'1rem'}}>
      
      Teachers
      
      <Typography className={classes.title} variant="h6" noWrap>
      <div class="navbar1">
      <a href="#" style={{color:'black'}} >All </a>
      <a href="#" style={{color:'black'}} >Beginner</a>
      <a href="#" style={{color:'black'}}>Intermediate</a>
      <a href="#" style={{color:'black'}}>Advanced</a>
      <a href="#" style={{color:'black'}}>Expert </a>
    </div> 
      </Typography>
      </div>
      <div>
      <span class="square"></span>
      <span class="square"></span>
      <span class="square"></span>
      <span class="square"></span>
      <span class="square"></span>
      <span class="square"></span>
      
      <span class="square"></span>
      </div>
      <button onClick={shoot} style={{marginLeft:'2rem', marginTop:'1rem', marginBottom:'1rem'}}>Show More</button>
      <Divider light/>

      <div className = "container" style={{marginLeft:'2rem', marginTop:'1rem'}}>TEACHERS OF THE WEEK
      </div>
      <span class="square"></span>
      <span class="square"></span>
      <span class="square"></span>
      <span class="square"></span>
      <span class="square"></span>
      <span class="square"></span>
      
      <span class="square"></span>

      <Divider light/>

      <div className = "container" style={{marginLeft:'2rem', marginTop:'1rem'}}>STUDENTS
      <Typography className={classes.title} variant="h6" noWrap>
      <div class="navbar1">
      <a href="#" style={{color:'black'}} >All </a>
      <a href="#" style={{color:'black'}} >Beginner</a>
      <a href="#" style={{color:'black'}}>Intermediate</a>
      <a href="#" style={{color:'black'}}>Advanced</a>
      <a href="#" style={{color:'black'}}>Expert </a>
    </div> 
      </Typography>
      </div>
      <div>
      <span class="square"></span>
      <span class="square"></span>
      <span class="square"></span>
      <span class="square"></span>
      <span class="square"></span>
      <span class="square"></span>
      
      <span class="square"></span>
      </div>
      <button onClick={shoot} style={{marginLeft:'2rem', marginTop:'1rem', marginBottom:'1rem'}}>Show More</button>

      <Divider light/>

      <div className = "container" style={{marginLeft:'2rem', marginTop:'1rem'}}>NEW TEACHERS OF THE WEEK</div>
      <span class="square"></span>
      <span class="square"></span>
      <span class="square"></span>
      <span class="square"></span>
      <span class="square"></span>
      <span class="square"></span>
      
      <span class="square"></span>

      <Divider light/>








    </div>


    
    
  );
}

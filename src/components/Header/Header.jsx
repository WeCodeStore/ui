import'./Header.css'
import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, Box, List, ListItem, ListItemText } from '@mui/material';


export default function Header() {
    const [drawerOpen, setDrawerOpen] = useState(false);
  
    const toggleDrawer = () => {
      setDrawerOpen(!drawerOpen);
    };
  
    return (
      <div className="header-menu">
        <AppBar  >
          <Toolbar className='navbar navbar'>
            <div className="header-button-menu">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
            >
                <span class="navbar-toggler-menu"></span>
                 <img src="https://cdn.shopify.com/s/files/1/0951/7126/files/menu.svg?v=1653421355"alt="Toggle navigation"/>
            </IconButton>
            </div>
            <div>
              <a className="navbar-brand" href="#">Urban Nest</a>
            </div>
            <div className="header-seacher">
              <a className="navbar-user" href="#/account"></a>
              <img src="https://cdn.shopify.com/s/files/1/0951/7126/files/account.svg?v=1653421420" alt="User" />
              <a className="navbar-cart" href="#"></a>
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIHN0cm9rZT0iIzI4MzQ1NSIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik02LjY5NSAyMS4yNUw1LjgxIDkuNzVoMTIuMzhsLS44ODUgMTEuNUg2LjY5NXoiLz4KICAgIDxwYXRoIHN0cm9rZT0iIzI4MzQ1NSIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xNSAxMlY4YzAtMS42NTctMS4zNDMtMy0zLTN2MGMtMS42NTcgMC0zIDEuMzQzLTMgM3Y0Ii8+Cjwvc3ZnPgo=" />
            </div>
          </Toolbar>
        </AppBar>
        <Toolbar>s
        </ Toolbar>
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
          <List>
            <ListItem button>
              <ListItemText primary="Item 1" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Item 2" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Item 3" />
            </ListItem>
          </List>
        </Drawer>
        
        <Toolbar />
       
      </div>
    );
  }


import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';

export default function DrawerMenu() {
    const [drawerOpen, setDrawerOpen] = useState(false);
  
    const toggleDrawer = () => {
      setDrawerOpen(!drawerOpen);
    };
    return (
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <div className='drawer-wrapper' style={{ width: '650px' }}>
          <div className='drawer-category'>
          <List >
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
          </div>
        
        </div>
       
      </Drawer>
      
    )}
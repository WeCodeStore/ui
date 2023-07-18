import "./SiteHeader.css";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SiteHeader() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const nav = useNavigate();
  const home = () => {
    nav("/");
  };
  const profile = () => {
    nav("/profile");
  };
  const shoppingCart = () => {
    nav("/shop");
  };

  return (
    <div className="header-menu">
      <AppBar>
        <Toolbar className="navbar navbar">
          <div className="header-button-menu">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
            >
              <span className="navbar-toggler-menu"></span>
              <img
                src="https://cdn.shopify.com/s/files/1/0951/7126/files/menu.svg?v=1653421355"
                alt="Toggle navigation"
              />
            </IconButton>
          </div>
          <div>
            <p className="navbar-brand" onClick={home}>
              Urban Nest
            </p>
          </div>
          <div className="header-seacher">
            <p className="navbar-user"></p>
            <img
              src="https://cdn.shopify.com/s/files/1/0951/7126/files/account.svg?v=1653421420"
              alt="User"
              onClick={profile}
            />
            <p className="navbar-cart"></p>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIHN0cm9rZT0iIzI4MzQ1NSIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik02LjY5NSAyMS4yNUw1LjgxIDkuNzVoMTIuMzhsLS44ODUgMTEuNUg2LjY5NXoiLz4KICAgIDxwYXRoIHN0cm9rZT0iIzI4MzQ1NSIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xNSAxMlY4YzAtMS42NTctMS4zNDMtMy0zLTN2MGMtMS42NTcgMC0zIDEuMzQzLTMgM3Y0Ii8+Cjwvc3ZnPgo="
              onClick={shoppingCart}
              alt="cart"
            />
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar></Toolbar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <div className="drawer-wrapper" style={{ width: "650px" }}>
          <div className="drawer-category">
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
          </div>
        </div>
      </Drawer>

      <Toolbar />
    </div>
  );
}

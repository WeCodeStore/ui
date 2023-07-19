import { React, useState } from "react";
import { Navbar, Container, Offcanvas } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import "./NavbarComp.css";
import { useNavigate } from "react-router-dom";
import SideBar from "../SideBar/SideBar";



export default function NavbarComp()  {
    const [drawerOpen, setDrawerOpen] = useState(false);

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
    
    const toggleDrawer = () => {
      setDrawerOpen(!drawerOpen);
    };
    return (
   <div className='navbar navbar'>
      <Navbar fixed="top" >
        <Container>
        <Button 
              variant="link" 
              className="link custom-button"  
              aria-label="menu"  
              onClick={toggleDrawer}  >
                <span class="navbar-toggler-menu"></span>
                 <img src="https://cdn.shopify.com/s/files/1/0951/7126/files/menu.svg?v=1653421355"
                 alt="Toggle navigation"  
                 />
           </Button>
          <Navbar.Brand >
            <a className="navbar-brand" onClick={home} >Urban Nest</a>
            
          </Navbar.Brand>
          <div className="header-seacher">
              <a className="navbar-user" ></a>
              <img src="https://cdn.shopify.com/s/files/1/0951/7126/files/account.svg?v=1653421420" 
              alt="User" 
              onClick={profile}/>
              <a className="navbar-cart" ></a>
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIHN0cm9rZT0iIzI4MzQ1NSIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik02LjY5NSAyMS4yNUw1LjgxIDkuNzVoMTIuMzhsLS44ODUgMTEuNUg2LjY5NXoiLz4KICAgIDxwYXRoIHN0cm9rZT0iIzI4MzQ1NSIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xNSAxMlY4YzAtMS42NTctMS4zNDMtMy0zLTN2MGMtMS42NTcgMC0zIDEuMzQzLTMgM3Y0Ii8+Cjwvc3ZnPgo="  
              alt="Cart"
              onClick={shoppingCart}/>
        </div>
        </Container>
      </Navbar>
      <SideBar show={drawerOpen} onHide={() => setDrawerOpen(false)} />     
</div>
        
    )}
import {  Offcanvas } from "react-bootstrap";
import './SideBar.css'

export default function SideBar({ show, onHide })  {
   
    return (
     <div>
        <Offcanvas show={show} onHide={onHide} placement="start">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div className="offcanvas-content">
                    <ul>
                        <li class='h-2'>
                            <a href="#!" data-nav-id="Bed" class="offcanvas-a">
                               Bed
                            </a>
                        </li>
                        <li class='h-2'>
                            <a href="#home"class="offcanvas-a" >
                                Bath
                            </a>
                        </li>
                        <li class='h-2'>
                            <a href="#" class="offcanvas-a">
                                Home
                            </a>
                        </li>
                        <li class='h-2'>
                            <a href="#" class="offcanvas-a">
                                New Arrivals
                            </a>
                        </li>
                    </ul> 
                </div>
            </Offcanvas.Body>
       </Offcanvas>
     </div>

    );
}
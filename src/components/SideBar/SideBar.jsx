import {  Offcanvas } from "react-bootstrap";
import './SideBar.css';
import { useDispatch } from "react-redux";
import { useGetAllCategoriesQuery } from "../../store/apiSlice";
import { setCategory } from "../../store/actionSlice";
import { useNavigate } from "react-router-dom";

export default function SideBar({ show, onHide })  {
    const dispatch = useDispatch();
    const nav = useNavigate();

    let allCategories;
    const { data: categories, isSuccess: success } = useGetAllCategoriesQuery();
    if (success) {
      allCategories = categories;
    } else {
      allCategories = [];
    }
    const handleNavigate = (val) => {
        dispatch(setCategory(val.id));
        nav(`/shop/${val.name}`);
      };
   
    return (
     <div>
        <Offcanvas show={show} onHide={onHide} placement="start">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div className="offcanvas-content">
                {allCategories.map((val, k) => {
                    return (
                        <div key={k} className="h-2">
                            <h4 className="menu-category" 
                            onClick={() => {handleNavigate(val)}}>
                             {val.name}
                             </h4>
                        </div>
                    )}
                )
            }      
                </div>
            </Offcanvas.Body>
       </Offcanvas>
     </div>

    );
}
import "./categoryImageGrid.css";
import { useGetAllCategoriesQuery } from "../../store/apiSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCategory } from "../../store/actionSlice";

const CategoryImageGrid = () => {
  const dispatch = useDispatch();

  let allCategories;
  const { data: categories, isSuccess: success } = useGetAllCategoriesQuery();
  if (success) {
    allCategories = categories;
  } else {
    allCategories = [];
  }

  const navigate = useNavigate();

  const handleNavigate = (val) => {
    dispatch(setCategory(val.id));
    navigate(`/shop/${val.name}`);
  };

  return (
    <>
      <h3 className="header-category"> Shop By Category</h3>
      <div className="container-category">
        {allCategories.map((val, k) => {
          return (
            <div key={k}>
              <h4 className="header-category">{val.name}</h4>
              <img
                src={val.titleImage}
                className="img"
                onClick={() => {
                  handleNavigate(val);
                }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default CategoryImageGrid;

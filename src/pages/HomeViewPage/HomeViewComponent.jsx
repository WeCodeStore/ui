import Featured from "../../components/Featured/Featured";
import CategoryImageGrid from "../../components/Category/categoryImageGrid";
import HeroImageGrid from "../../components/Hero/Hero";

const HomeViewComponent = () => {
  return (
    <div className="home-view-container" data-testid="home-view-container">
      <HeroImageGrid />
      <CategoryImageGrid />
      <Featured />
    </div>
  );
};

export default HomeViewComponent;

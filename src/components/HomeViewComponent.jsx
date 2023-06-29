import Featured from './Featured/Featured';
import CategoryImageGrid from './Category/categoryImageGrid';
import HeroImageGrid from './Hero/Hero';

const HomeViewComponent = () => {
  return (
    <div className='home-view-container' data-testid='home-view-container'>
      <HeroImageGrid/>
      <CategoryImageGrid />
      <Featured />
    </div>
  );
};

export default HomeViewComponent;

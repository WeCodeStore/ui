import Featured from './Featured/Featured';
import CategoryImageGrid from './Category/categoryImageGrid';

const HomeViewComponent = () => {
  return (
    <div className='home-view-container' data-testid='home-view-container'>
      <div
        className='hero-section-container'
        data-testid='hero-section-container'
      >
        Hero Section
      </div>
      <CategoryImageGrid />
      <Featured />
    </div>
  );
};

export default HomeViewComponent;

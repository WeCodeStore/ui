
import CategoryImageGrid from  './categoryComponent/categoryImageGrid';

const HomeViewComponent = () => {
    return (
        <div className="home-view-container" data-testid="home-view-container">
            <div className="hero-section-container" data-testid="hero-section-container">Hero Section</div>
            <div className="shop-by-category-container" data-testid="shop-by-category-container"> <CategoryImageGrid /></div>
            <div className="featured-container" data-testid="featured-container">Featured</div>
        </div>
    );
}

export default HomeViewComponent
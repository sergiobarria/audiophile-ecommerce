import Hero from '../components/hero/Hero';
import CategoriesSection from '../components/categories/categories-container/CategoriesContainer';
import FeaturedProducts from '../components/featured';

const HomeScreen = () => {
  return (
    <>
      <Hero />
      <CategoriesSection />
      <FeaturedProducts />
    </>
  );
};

export default HomeScreen;

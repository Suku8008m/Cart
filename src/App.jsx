import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation, useParams } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import ProductList from './components/ProductList'
import ProductDetails from './components/ProductDetails'
import CartPage from './components/CartPage'
import Footer from './components/Footer'
import { products, getCategories } from './data/products'

export const createSlug = (str) => {
  if (!str) return '';
  return str.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-');
};

const CategoryPage = ({ searchTerm }) => {
  const { categorySlug } = useParams();

  const filteredProducts = products.filter(product => {
    const isCategoryMatch = createSlug(product.category) === categorySlug;
    const isSearchMatch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    return isCategoryMatch && isSearchMatch;
  });

  return <ProductList products={filteredProducts} />;
};

const SearchPage = ({ searchTerm }) => {
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return <ProductList products={filteredProducts} />;
};

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const categories = getCategories();

  const navigateTo = (page, isSearch = false) => {
    window.scrollTo(0, 0);
    if (page === 'home') {
      navigate('/');
      if (!isSearch) setSearchTerm('');
    } else if (page === 'cart') {
      navigate('/cart');
    }
  };

  const setCategoryWrapper = (cat) => {
    if (cat === 'All') {
      navigate('/');
    } else {
      navigate(`/${createSlug(cat)}`);
    }
    window.scrollTo(0, 0);
  };

  // Keep dropdown synced with URL correctly
  let currentCategory = 'All';
  if (location.pathname !== '/' && location.pathname !== '/cart' && location.pathname !== '/search') {
    const rawSlug = location.pathname.substring(1); // remove leading slash
    const matched = categories.find(c => createSlug(c) === rawSlug);
    if (matched) currentCategory = matched;
  }

  // Seamless handling of search typing initiating a route change
  useEffect(() => {
    if (searchTerm.trim() !== '' && location.pathname === '/') {
      navigate('/search');
    }
  }, [searchTerm, navigate, location.pathname]);

  const isHomeActive = location.pathname === '/' && searchTerm.trim() === '';

  return (
    <div className="app-container">
      <Header
        navigateTo={navigateTo}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        category={currentCategory}
        setCategory={setCategoryWrapper}
        categories={categories}
      />

      <main className="main-content" style={{ padding: isHomeActive ? '0' : '20px', maxWidth: isHomeActive ? '100%' : '1500px' }}>
        <Routes>
          <Route path="/" element={
            searchTerm.trim() !== ''
              ? <SearchPage searchTerm={searchTerm} />
              : <Home products={products} setCategory={setCategoryWrapper} navigateTo={navigateTo} />
          } />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/search" element={<SearchPage searchTerm={searchTerm} />} />
          <Route path="/product/:id" element={<ProductDetails products={products} setCategory={setCategoryWrapper} />} />

          {/* Dynamic Category Slugs e.g. /clothing or /electronics */}
          <Route path="/:categorySlug" element={<CategoryPage searchTerm={searchTerm} />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App

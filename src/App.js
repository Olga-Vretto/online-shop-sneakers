import Card from './components/Card/Card/Card';
import magnifier from './assets/svg/search.svg';
import Header from './components/Card/Header/Header';
import Drawer from './components/Card/Drawer/Drawer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import clear from './assets/svg/remove.svg';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    axios.get('https://647a51fba455e257fa64991e.mockapi.io/sneakers/items').then((response) => {
      setItems(response.data);
    });

    axios.get('https://647a51fba455e257fa64991e.mockapi.io/sneakers/cart').then((response) => {
      setCartItems(response.data);
    });
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://647a51fba455e257fa64991e.mockapi.io/sneakers/cart', obj);

    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    // axios.delete(`https://647a51fba455e257fa64991e.mockapi.io/sneakers/cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id));
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };
  const handleClear = () => {
    setSearchValue('');
  };

  return (
    <div className='wrapper'>
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/>}
      <Header onOpenCart={() => setCartOpened(true)} />
      <div className='content'>
        <div className='content-top'>
          <h1 className='content-title'>
            {searchValue ? `Пошук за запитом: "${searchValue}"` : 'Всі кросівки'}
          </h1>
          <div className='search'>
            <img className='search-svg' src={magnifier} alt='magnifier' />
            <input
              type='text'
              name='search'
              className='search-input'
              placeholder='Пошук за назвою...'
              onChange={handleSearch}
              value={searchValue}
            />
            {searchValue && <img onClick={handleClear} src={clear} alt='close' />}
          </div>
        </div>
        <div className='sneakers'>
          {items
            .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((item) => (
              <Card
                key={item.id}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onClickHeart={() => console.log('Добавили в закладки')}
                onClickPlus={(obj) => onAddToCart(obj)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;

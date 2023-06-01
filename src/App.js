import Card from './components/Card/Card';
import search from './assets/svg/search.svg';
import Header from './components/Card/Header/Header';
import Drawer from './components/Card/Drawer/Drawer';

function App() {
  return (
    <div className='wrapper'>
      <Drawer />
      <Header />
      <div className='content'>
        <div className='content-top'>
          <h1 className='content-title'>Всі кросівки</h1>
          <div className='search'>
            <img className='search-svg' src={search} alt='search' />
            <input
              type='text'
              name='search'
              className='search-input'
              placeholder='Пошук за назвою...'
            />
          </div>
        </div>
        <div className='sneakers'>
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;

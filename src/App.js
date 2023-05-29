import headerLogo from './assets/images/header-logo.png';
import cart from './assets/svg/cart.svg';
import user from './assets/svg/user.svg';
import plus from './assets/svg/plus-button.svg';
import img1 from './assets/sneakers-img/1.png';

function App() {
  return (
    <div className='wrapper'>
      <div className='container'>
        <header className='header'>
          <div className='header-left'>
            <img className='header-logo' src={headerLogo} alt='header-logo' />
            <div className='header-info'>
              <h3 className='header-title'>Super sneakers</h3>
              <p>Магазин найкращих кросівок</p>
            </div>
          </div>
          <ul className='header-right'>
            <li className='header-right__li'>
              <img src={cart} alt='cart icon' width={18} height={18} />
              <span>750 грн.</span>
            </li>
            <li>
              <img src={user} alt='user icon' width={18} height={18} />
            </li>
          </ul>
        </header>
        <div className='content'>
          <h1 className='content-title'>Всі кросівки</h1>

          <div className='card'>
            <img className='card-image' src={img1} alt='' />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='card-bottom'>
              <div className='card-text'>
                <span className=' card-text__txt grey'>Ціна:</span>
                <span className='bold'>3000 грн.</span>
              </div>
              <button className='card-button'>
                <img src={plus} alt='plus' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

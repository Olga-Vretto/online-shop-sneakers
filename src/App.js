import headerLogo from "./assets/images/header-logo.png"
import cart from './assets/svg/cart.svg'
import user from "./assets/svg/user.svg"

function App() {
  return (
    <div className='wrapper'>
      <header className="header">
        <div className='header-left'>
          <img className="header-logo" src={headerLogo} alt="header-logo"/>
          <div className="header-info">
            <h3>Super sneakers</h3>
            <p>Магазин найкращих кросівок</p>
          </div>
        </div>
        <ul className="header-right">
          <li>
          <img src={cart} alt="cart icon" width={18} height={18}/>
            <span>750 грн.</span>
          </li>
          <li>
          <img src={user} alt="user icon" width={18} height={18}/>
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>Всі кросівки</h1>
      </div>
    </div>
  );
}

export default App;

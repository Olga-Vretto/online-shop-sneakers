import React from 'react'
import img1 from '../../../assets/sneakers-img/1.png';
import remove from '../../../assets/svg/remove.svg';

const Drawer = () => {
  return (
    <div style={{ display: 'none' }} className='overlay'>
    <div className='drawer'>
      <div>
        <div className='cart-top'>
          <h2 className='drawer-title'>Кошик обраних товарів</h2>
          <button className='card-button close-btn'>
            <img src={remove} alt='remove' />
          </button>
        </div>

        <div className='cart-items'>
          <div className='cart'>
            <img className='cart-img' src={img1} alt='img1' />
            <div className='cart-content'>
              <h5 className='cart-title'>Мужские Кроссовки Nike Air Max 270 </h5>
              <span className='cart-price'>3000 грн.</span>
            </div>
            <button className='card-button remove'>
              <img src={remove} alt='remove' />
            </button>
          </div>
        </div>
      </div>
      <div>
        <ul className='cart-bottom'>
          <li className='cart-total'>
            <span>Підсумок:</span>
            <div className='dashed-line'></div>
            <span className='bold'>3000грн.</span>
          </li>
          <li className='cart-total'>
            <span>Податок 5%:</span>
            <div className='dashed-line'></div>
            <span className='bold'>150грн.</span>
          </li>
        </ul>
        <button className='button-green'>Зробити замовлення</button>
      </div>
    </div>
  </div>
  )
}

export default Drawer
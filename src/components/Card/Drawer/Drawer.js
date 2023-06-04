import React from 'react';
import remove from '../../../assets/svg/remove.svg';
import empty from '../../../assets/svg/empty-box.svg';

const Drawer = ({ onClose, items = [], onRemove }) => {
  const newLocal = 'cart-bottom';
  return (
    <div className='overlay'>
      <div className='drawer'>
        <div>
          <div className='cart-top'>
            <h2 className='drawer-title'>Кошик обраних товарів</h2>
            <button onClick={onClose} className='card-button close-btn'>
              <img src={remove} alt='remove' />
            </button>
          </div>

          {items.length > 0 ? (
            <>
              <div className='cart-items'>
                {items.map((obj) => (
                  <div key={obj.id} className='cart'>
                    <img className='cart-img' src={obj.imageUrl} alt='img1' />
                    <div className='cart-content'>
                      <h5 className='cart-title'>{obj.title} </h5>
                      <span className='cart-price'>{obj.price} грн.</span>
                    </div>
                    <button className='card-button remove'>
                      <img onClick={() => onRemove(obj.id)} src={remove} alt='remove' />
                    </button>
                  </div>
                ))}
              </div>
              <div>
                <ul className={newLocal}>
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
            </>
          ) : (
            <div className='empty-cart'>
              <img src={empty} alt='empty-box' />
              <h2>Кошик пустий</h2>
              <p>Будь-ласка додайте обрану пару кросівок.</p>
              <button onClick={onClose} className='button-green '>Назад до меню</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Drawer;

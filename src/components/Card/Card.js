import React from 'react';
import heart from '../../assets/svg/heart-non-active.svg';
import img1 from '../../assets/sneakers-img/1.png';
import plus from '../../assets/svg/plus-button.svg';
import img2 from '../../assets/sneakers-img/2.png';
import img3 from '../../assets/sneakers-img/3.png';
import img4 from '../../assets/sneakers-img/4.png';

const Card = () => {
  return (
    <div className='card'>
      <div>
        <img src={heart} className='heart' alt='heart-non-active' />
        <img className='card-image' src={img1} alt='' />
      </div>
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
  );
};

export default Card;

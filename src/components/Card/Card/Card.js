import React, { useState } from 'react';
import heart from '../../../assets/svg/heart-non-active.svg';
import plus from '../../../assets/svg/plus-button.svg';
import done from '../../../assets/svg/btn-done.svg';
import styles from './Card.module.scss';


const Card = ({onClickHeart, onClickPlus, imageUrl, title, price}) => {
  const [isAdded, setIsAdd] = useState(false);

  const handlePlus = () => {
    onClickPlus({imageUrl,title,price});  
    setIsAdd(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div>
        <img
          src={heart}
          onClick={onClickHeart}
          className={styles.heart}
          alt='heart-non-active'
        />
        <img className={styles.cardImage} src={imageUrl} alt='sneakers' />
      </div>
      <h5>{title}</h5>
      <div className={styles.bottom}>
        <div className={styles.cardText}>
          <span>Ціна:</span>
          <b>{price}</b>
        </div>
        <button onClick={handlePlus} className={styles.button}>
          <img className={styles.btn} src={isAdded ? done : plus} alt='plus' />
        </button>
      </div>
    </div>
  );
};

export default Card;

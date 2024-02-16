import React from 'react';
import { useActions } from '../../Redux/hooks/actions';
import { Item } from '../../Redux/types';
import { Like } from '../../img/Like';
import Dislike from '../../img/Dislike';
import S from './components.module.scss';
import { useAppSelector } from '../../Redux/hooks/redux';
import { AiOutlineDelete } from 'react-icons/ai';
import { useLocation, useNavigate } from 'react-router-dom';

type PropsType = {
  el: Item;
};

const Card = (props: PropsType) => {
  const { el } = props;
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const favorites = useAppSelector((state) => state.product.favorites);

  const { addFavorites, removeFavorites, removeCard } = useActions();

  const handleClickCard = () => {
    navigate(`/product/${el.id}`);
  };

  const handleLikeClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    favorites.includes(el) ? removeFavorites(el) : addFavorites(el);
    //Добавление или удаление карточки из избранного
  };

  const handleClickRemove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    removeCard(el);
    //Удаление карточки из стора
  };

  return (
    <div
      onClick={() => handleClickCard()}
      key={el.id}
      className={S.card}>
      <img
        alt="avatar"
        src={el.image}
      />
      <h3>{el.title}</h3>

      <div className={S.card__info}>
        <p>{el.price}$</p>
        <p>rating: {el.rating.rate}</p>
      </div>
      <div
        className={S.card__btn}
        onClick={(event) => handleLikeClick(event)}>
        {favorites.includes(el) ? <Like /> : <Dislike />}
      </div>
      {pathname !== '/favorites' && (
        <div
          className={S.card__delete}
          onClick={(event) => handleClickRemove(event)}>
          <AiOutlineDelete />
        </div>
      )}
    </div>
  );
};

export default Card;

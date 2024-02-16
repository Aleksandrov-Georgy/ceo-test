import { useNavigate } from 'react-router-dom';
import S from './components.module.scss';
import { useAppSelector } from '../../Redux/hooks/redux';

const ButtonShowLikes = () => {
  const navigate = useNavigate();
  const favorites = useAppSelector((state) => state.product.favorites);

  const handleExitClick = () => {
    navigate('/favorites');
  };

  return (
    <>
      <button
        className={S.button}
        onClick={handleExitClick}>
        {favorites.length !== 0 ? `в избранном ${favorites.length} товаров` : 'Показать избранное'}
      </button>
    </>
  );
};

export default ButtonShowLikes;

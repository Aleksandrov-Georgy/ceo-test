import { useAppSelector } from '../../Redux/hooks/redux';
import Card from '../Components/Card';
import S from '../Home/home.module.scss';

const Favorites = () => {
  const favorites = useAppSelector((state) => state.product.favorites);

  return (
    <div className={S.products}>
      {favorites.length ? (
        favorites?.map((item) => (
          <Card
            el={item}
            key={item.id}
          />
        ))
      ) : (
        <h3>Тут пока ничего нет :(</h3>
      )}
    </div>
  );
};

export default Favorites;

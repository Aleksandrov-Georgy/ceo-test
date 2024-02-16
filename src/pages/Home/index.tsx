import S from './home.module.scss';
import Card from '../Components/Card';
import { useAppSelector } from '../../Redux/hooks/redux';

type RequestProps = {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
};

export const Home = (props: RequestProps) => {
  const { isLoading, isError, isSuccess } = props;

  const cards = useAppSelector((state) => state.product.items);

  return (
    <>
      {isLoading && <h2>loading...</h2>}
      {isError && <h2>Ошибка, повторите запрос </h2>}

      <div className={S.products}>
        {isSuccess &&
          cards?.map((item) => (
            <Card
              el={item}
              key={item.id}
            />
          ))}
      </div>
    </>
  );
};

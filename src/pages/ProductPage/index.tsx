// import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useLazyGetInfoProductQuery } from '../../Redux/RTKQuery/getAllProducts.api';
import { useEffect } from 'react';
import S from './product.module.scss';

const ProductPage = () => {
  const product = useParams();
  const navigate = useNavigate();
  const [fetchData, { data, isLoading, isError, isSuccess }] = useLazyGetInfoProductQuery();

  useEffect(() => {
    fetchData(product.id!);
  }, [fetchData, product.id]);

  return (
    <div>
      {isLoading && <h2>loading...</h2>}
      {isError && <h2>Ошибка, повторите запрос </h2>}
      {isSuccess && (
        <div className={S.wrapper}>
          <div className={S.content}>
            <img
              src={data?.image}
              alt="photo"
            />
          </div>
          <div className={S.content_info}>
            <h3>{data?.title}</h3>
            <h4>Category: {data?.category}</h4>
            <p>{data?.description}</p>
            <p>Rating: {data?.rating.rate}</p>
            <p>Purchased {data?.rating.count} times</p>
            <p>Price: {data?.price}$</p>
          </div>
        </div>
      )}
      <button
        className={S.btnExit}
        onClick={() => navigate('/')}>
        Вернуться на главную
      </button>
    </div>
  );
};

export default ProductPage;

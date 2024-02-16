import { useNavigate } from 'react-router-dom';
import ButtonShowLikes from './ButtonShowLikes';
import S from './components.module.scss';

const Cup = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={S.wrapper}>
        <div className={S.wrapper__content}>
          <h3 onClick={() => navigate('/')}>FAKE STORE</h3>
          <ButtonShowLikes />
        </div>
      </div>
    </>
  );
};

export default Cup;

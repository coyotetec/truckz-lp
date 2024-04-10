import { Link } from 'react-scroll';
import { ButtonTop } from './style';

import arrowTop from '../../assets/arrowTop.svg';

type BackToTopButtonProps = {
  onVisible: string;
};

export function BackToTopButton({ onVisible }: BackToTopButtonProps) {
  return (
    <Link to="home" smooth duration={500}>
      <ButtonTop $show={onVisible}>
        <span>Voltar ao topo</span>
        <img src={arrowTop} alt="" />
      </ButtonTop>
    </Link>
  );
}

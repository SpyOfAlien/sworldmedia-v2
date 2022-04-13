import { FC } from 'react';
import Thumbnail from '../thumnail/thumbnail';

interface Props {
  img?: any;
  cl?: string;
}

const HeroBanner: FC<Props> = ({ img, cl }) => {
  return (
    <div className="sw-relative">
      <div className="sw-w-full sw-absolute sw-inset-0"></div>
      <Thumbnail img="/assets/images/others/thumbnail.jpg" cl="sw-rounded-md" />
    </div>
  );
};

export default HeroBanner;

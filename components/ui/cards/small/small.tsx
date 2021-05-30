import { FC } from 'react';
import cn from 'classnames';
import Paragraph from '../../typo/paragraph';
import Image from 'next/image';
import Arrow from '../../../icons/arrow';
import { useMediaQuery } from 'react-responsive';

interface Props {
  cl?: string;
  icon: any;
  content: string;
  onClick: () => void;
}

const SmallCard: FC<Props> = ({ cl, icon, content, onClick }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 768px)',
  });

  return (
    <div
      className={cn(
        'sw-bg-background hover:sw-bg-modal sw-rounded-sm sw-flex sw-items-center sw-cursor-pointer sw-justify-between',
        cl
      )}
      onClick={onClick}
    >
      <div className="sw-mx-xsm">
        <Image src={icon} width={120} height={120} alt="Brand communication" />
      </div>
      <Paragraph cl="sw-text-gradient sw-text-h5 sw-font-bold sw-flex-auto">
        {content}
      </Paragraph>

      <div className="sw-mx-xsm">
        <Arrow />
      </div>
    </div>
  );
};

export default SmallCard;

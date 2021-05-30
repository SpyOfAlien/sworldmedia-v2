import { FC } from 'react';
import cn from 'classnames';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import Heading from '../../../common/typo/heading';
import Paragraph from '../../../common/typo/paragraph';

interface Props {
  cl?: string;
  icon: any;
  title?: string;
  content: string;
}

const Medium: FC<Props> = ({ cl, icon, content, title }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 768px)',
  });

  return (
    <div
      className={cn(
        'sw-flex sw-flex-col sw-items-center',
        cl
      )}
    >
        <div>
            <Image src={icon} width={120} height={120} />
        </div>
        <div>
            <Heading h="h5" cl="sw-text-gradient"> {title} </Heading>
        </div>
        <div>
            <Paragraph>{content}</Paragraph>
        </div>
    </div>
  );
};

export default Medium;
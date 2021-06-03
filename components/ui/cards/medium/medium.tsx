import { FC } from 'react';
import cn from 'classnames';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import Heading from '../../typo/heading';
import Paragraph from '../../typo/paragraph';
import { useTranslation } from 'react-i18next';

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

  const { t } = useTranslation('common');

  return (
    <div
      className={cn(
        'sw-flex sw-flex-col sw-items-center sw-px-4 3xl:sw-px-24',
        cl
      )}
    >
      <div className="sw-mb-2">
        <Image src={icon} width={120} height={120} />
      </div>
      {title ? (
        <div>
          <Heading h="h6" cl="sw-text-gradient">
            {t(title)}
          </Heading>
        </div>
      ) : null}

      <div className="sw-text-center">
        <Paragraph>{t(content)}</Paragraph>
      </div>
    </div>
  );
};

export default Medium;

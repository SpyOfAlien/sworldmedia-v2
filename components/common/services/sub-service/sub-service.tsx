import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import Heading from '../../../ui/typo/heading';
import Paragraph from '../../../ui/typo/paragraph';

interface Props {
  data: any;
}

const SubService: FC<Props> = ({ data }) => {
  const { strength, provide } = data;
  const { t } = useTranslation('common');

  return (
    <div className="sw-p-8">
      <div className="sw-mb-8">
        <Heading cl="sw-mb-4" h="h6">
          {t('home__sub_service__strength')}
        </Heading>
        {strength.map((item, idx) => (
          <Paragraph key={idx}>{t(item)}</Paragraph>
        ))}
      </div>
      <div className="sw-mb-8">
        <Heading cl="sw-mb-4" h="h6">
          {t('home__sub_service__provide')}
        </Heading>
        {provide.map((item, idx) => (
          <Paragraph key={idx}>{t(item)}</Paragraph>
        ))}
      </div>
    </div>
  );
};

export default SubService;

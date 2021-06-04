import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  tag: string;
}

const Tag = ({ tag }) => {
  const { t } = useTranslation('blog');
  return (
    <span
      style={{ height: '50px', borderRadius: '59px' }}
      className="sw-flex sw-justify-center sw-font-bold sw-cursor-pointer sw-items-center sw-px-2 sw-bg-blue sw-mr-2 sw-mb-2"
    >
      {t(tag)}
    </span>
  );
};

export default Tag;

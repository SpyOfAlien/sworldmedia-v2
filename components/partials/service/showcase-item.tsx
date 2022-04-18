import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import cn from 'classnames';
import s from './service.module.scss';
import { useTranslation } from 'next-i18next';
import { useWindowSize } from '../../../lib/hook';

const ShowcaseItem = ({ showcase, isGlass }) => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [summary, setSummary] = useState('');
  const [isVn, setIsVn] = useState(false);
  const { width } = useWindowSize();

  const { t } = useTranslation('common');

  useEffect(() => {
    if (router.locale === 'vn') {
      setName(showcase.vnName);
      setSummary(showcase.vnSummary);
    } else {
      setName(showcase.enName);
      setSummary(showcase.enSummary);
    }

    setIsVn(router.locale === 'vn');
  }, [router.locale]);

  const onReadmore = () => {
    console.log('showcase', showcase);
    isVn
      ? router.push(`/vn/blogs/${showcase.vnSlug}`)
      : router.push(`/en/blogs/${showcase.enSlug}`);
  };

  return (
    <div
      className={cn(
        'sw-text-white xl:sw-p-12 sw-mb-12 sw-rounded-sm sw-relative',
        isGlass && width >= 1280 && 'sw-glass'
      )}
    >
      <div className="sw-flex sw-flex-col-reverse lg:sw-flex-row sw-mb-12">
        <div className="sw-w-full sw-flex sw-flex-col sw-justify-between lg:sw-w-1/2 sw-pr-12">
          <div>
            <h6 className="sw-font-bold sw-text-barlow sw-mb-4 sw-text-h6">
              {name}
            </h6>
            <p className="sw-gilroy-thin sw-mb-4">{summary}</p>
          </div>
          <span
            className="sw-cursor-pointer sw-underline sw-mb-4 lg:sw-mb-0"
            onClick={onReadmore}
          >
            {t('action__findoutmore')}
          </span>
        </div>
        <div className="sw-w-full sw-mb-4 lg:sw-mb-0 lg:sw-w-1/2">
          <div className="sw-w-full">
            <Image
              src={showcase.thumbnail.url}
              width={showcase.thumbnail.width}
              height={showcase.thumbnail.height}
              layout="responsive"
            />
          </div>
        </div>
      </div>
      <hr className={s.hr} />
    </div>
  );
};

export default ShowcaseItem;

import cn from 'classnames';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import s from './service.module.scss';
import { useHover } from '../../../lib/hook';

const SubService = ({ subService, isOdd }) => {
  const router = useRouter();

  const [hoverRef, isHovered] = useHover<HTMLDivElement>();

  const [name, setName] = useState('');
  const [summary, setSummary] = useState('');

  useEffect(() => {
    if (router.locale === 'vn') {
      setName(subService.vnName);
      setSummary(subService.vnSummary);
    } else {
      setName(subService.enName);
      setSummary(subService.enSummary);
    }
  }, [router.locale]);

  return (
    <div
      ref={hoverRef}
      className={cn(
        'sw-rounded-sm sw-p-6 sw-text-white sw-w-full lg:sw-w-4/5 sw-cursor-pointer',
        isOdd && 'sw-glass'
      )}
    >
      <div className="sw-flex sw-items-center sw-mb-4">
        <div className="sw-w-8 sw-h-8 sw-mr-3">
          <Image
            src={subService.icon.url}
            width={subService.icon.width}
            height={subService.icon.height}
            layout="responsive"
          />
        </div>
        <p className="sw-font-bold">{name}</p>
      </div>
      {/* <p className="sw-gilroy-thin">{summary}</p> */}
      <p className={cn('sw-gilroy-thin sw-text-xs')}>
        All base UI elements are made using Nested Symbols and shared styles
        that are logically connected with one another.
      </p>
    </div>
  );
};
export default SubService;

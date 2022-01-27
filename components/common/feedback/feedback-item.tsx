import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const FeedbackItem = ({ feedback }) => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [company, setCompany] = useState('');

  useEffect(() => {
    if (router.locale === 'vn') {
      setName(feedback.vnName);
      setMessage(feedback.vnMessage);
      setCompany(feedback.vnCompany);
    } else {
      setName(feedback.enName);
      setMessage(feedback.enMessage);
      setCompany(feedback.enCompany);
    }
  }, [router.locale]);

  return (
    <div className="sw-p-8 sw-text-white">
      <p className="sw-mb-4">"{message}"</p>
      <div className="sw-flex sw-items-center">
        <div className="sw-w-8 sw-h-8  sw-mr-4">
          <Image
            src={feedback.avatar.url}
            width={feedback.avatar.width}
            height={feedback.avatar.height}
            layout="responsive"
            className="sw-rounded-full"
          />
        </div>
        <div className="sw-flex sw-flex-col">
          <p className="sw-font-bold">{name}</p>
          <p className="sw-gilroy-thin sw-text-xs">{company}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackItem;

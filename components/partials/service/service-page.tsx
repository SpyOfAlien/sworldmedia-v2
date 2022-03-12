import ShowcaseItem from './showcase-item';
import Profile from '../../common/profile/profile';
import SubService from './sub-service';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ServiceFeedback from './service-feedback';
import Image from 'next/image';

const ServicePage = ({ service, profile }) => {
  const router = useRouter();
  const [summary, setSummary] = useState('');

  useEffect(() => {
    if (router.locale === 'vn') {
      setSummary(service.vnSummary);
    } else {
      setSummary(service.enSummary);
    }
  }, [router.locale]);

  return (
    <div className="sw-w-4/5 sw-mx-auto sw-my-32">
      <section className="sw-flex sw-flex-col lg:sw-flex-row sw-mb-24 sw-justify-between sw-relative">
        {/* <div className="sw-absolute sw-inset-0">
          <Image
            src="/assets/images/common/globe.png"
            width={1905}
            height={1580}
            layout="responsive"
            className="sw-mix-blend-screen"
          />
        </div> */}
        <div className="sw-w-full lg:sw-w-4/5">
          <div></div>
          <h1 className="sw-text-h5 lg:sw-text-h3 sw-font-bold sw-text-white sw-mb-12">
            {summary}
          </h1>
        </div>
        <div className="sw-flex sw-justify-end lg:sw-justify-start">
          <div className="sw-text-white sw-w-40 sw-h-40 sw-flex sw-items-center sw-justify-center sw-border-2 sw-rounded-full sw-p-4 sw-border-dashed">
            <span className="sw-mr-2 sw-cursor-pointer">
              S-WORLD INFOMATION DOWNLOAD
            </span>
            <span className="sw-w-full">
              <Image
                src="/assets/images/others/arrow-down.png"
                width={33}
                height={68}
                layout="responsive"
              />
            </span>
          </div>
        </div>
      </section>
      <section>
        <h3 className="sw-text-h4 lg:sw-text-h3 sw-text-center sw-font-bold sw-text-white sw-mb-12">
          Khám phá dịch vụ
        </h3>
        <div className="sw-flex sw-flex-wrap">
          {service?.subServiceCollection &&
            service?.subServiceCollection.map((sub, idx) => (
              <div className="sw-w-full md:sw-w-1/2 lg:sw-w-1/3" key={sub.name}>
                <SubService subService={sub} />
              </div>
            ))}
        </div>
      </section>
      <section className="sw-my-24 lg:sw-my-40">
        {service?.showcaseCollection &&
          service?.showcaseCollection.map((showcase, idx) => (
            <ShowcaseItem
              isGlass={idx % 2 !== 0}
              key={showcase.name}
              showcase={showcase}
            />
          ))}
      </section>

      <section className="sw-my-16 lg:sw-my-40">
        <div className="sw-text-center sw-text-white sw-mb-12 lg:sw-mb-24">
          <h3 className="sw-text-h4 lg:sw-text-h3 sw-font-bold">
            Đánh giá của Khách Hàng
          </h3>
          <p className="sw-gilroy-thin sw-text-sm sw-w-full lg:sw-w-3/5 sw-mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non aliquam
            donec turpis pretium senectus. Cras mollis tincidunt donec aenean.{' '}
          </p>
        </div>
        <ServiceFeedback feedbacks={service?.feedbackCollection} />
      </section>

      <section>
        <Profile profile={profile} />
      </section>
    </div>
  );
};

export default ServicePage;

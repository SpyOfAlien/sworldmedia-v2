import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getServiceByName } from '../../../lib/api';
import { promises as fs } from 'fs';
import path from 'path';
import ServicePage from '../../../components/partials/service/service-page';

export const getStaticProps = async ({ locale, preview }) => {
  const service = await getServiceByName('Events');
  const pdfProductsDirectory = path.join(process.cwd(), 'public/pdf');
  const productsFilenames = await fs.readdir(pdfProductsDirectory);
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      service: service,
      profile: productsFilenames,
    },
    revalidate: 10,
  };
};

const EventsPage = ({ service, profile }) => {
  return (
    <ServicePage
      service={service}
      profile={profile}
      seo={{
        vnName: 'S-world | Events',
        enName: 'S-world | Sự kiện',
        vnDesc:
          'Để thu hút sự quan tâm từ khách hàng và tạo nên sự cộng hưởng tích cực về thương hiệu cho các doanh nghiệp, S-World mang lại những dịch vụ truyền thông sự kiện đa dạng trên cả 2 nền tảng',
        enDesc:
          'In order to attract customer attention and create a positive brand resonance for businesses, S-World offers a diverse range of event communication services on both online and offline platforms',
        url: 'http://localhost:3000/vn/services/events',
      }}
    />
  );
};

export default EventsPage;

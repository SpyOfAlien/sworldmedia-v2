import Image from 'next/image';
import { Container } from '../components/layout';
import Heading from '../components/ui/typo/heading';
import Paragraph from '../components/ui/typo/paragraph';
import { Media, MediaContextProvider } from '../lib/media';

const AboutUs = () => {
  return (
    <MediaContextProvider>
      <Container cl="sw-my-header">
        <section className="sw-text-center sw-py-4">
          <Media greaterThanOrEqual="lg">
            <Heading h="h3">Câu chuyện của chúng tôi</Heading>
          </Media>
          <Media lessThan="lg">
            <Heading h="h5">Câu chuyện của chúng tôi</Heading>
          </Media>
        </section>
        <section className="sw-flex sw-flex-col-reverse sw-justify-between xl:sw-flex-row sw-my-8 xl:sw-my-32 2xl:sw-my-40">
          <div className="sw-w-full xl:sw-w-48">
            <div className="sw-mb-6">
              <Heading cl="sw-mb-4" h="h5">
                Giá trị kết nối khác biệt
              </Heading>
              <Paragraph>
                Khiêm tốn đặt bước chân lên bản đồ truyền thông Việt Nam và khát
                vọng xa hơn là thế giới, S-World mong muốn nhân những giá trị
                kết nối và kiến tạo những giá trị mới khác biệt từ multimedia
                (đa phương tiện).
              </Paragraph>
            </div>
            <div className="sw-mb-6">
              <Heading cl="sw-mb-4" h="h5">
                Lan Tỏa
              </Heading>
              <Paragraph>
                Chúng tôi luôn sẵn sàng mang những ý tưởng, dự án, sản phẩm,
                thương hiệu của bạn lan tỏa. Không chỉ với lượng mà còn là chất
                riêng; không chỉ cho hiện tại mà còn tùy tương lai bền vững.
                Bằng sự cầu toàn và tràn đầy khát vọng như hình ảnh một chú ngựa
                phi nước đại, sẵn sàng tiến vào một thế giới rộng lớn còn ẩn
                chứa vô số điều kỳ diệu để khám phá.
              </Paragraph>
            </div>
            <div className="sw-mb-6">
              <Heading cl="sw-mb-4" h="h5">
                Cam kết
              </Heading>
              <Paragraph>
                S-World sẽ luôn đến với bạn bằng trái tim chân thành, nhiệt
                huyết, bền bỉ và sáng tạo trên con đường bước tới tương lai.
              </Paragraph>
            </div>
          </div>
          <div className="sw-w-full xl:sw-w-48 sw-mb-12 xl:sw-mb-0 sw-flex sw-items-center">
            <div className="sw-w-full">
              <Image
                src="/assets/svg/team.svg"
                width={774}
                height={492}
                layout="responsive"
                quality={100}
              />
            </div>
          </div>
        </section>
        <section className="sw-flex sw-flex-col xl:sw-flex-row sw-justify-between sw-my-8 xl:sw-my-32 2xl:sw-my-40">
          <div className="sw-w-full xl:sw-w-48">
            <Image
              src="/assets/svg/ceo.svg"
              width={466}
              height={593}
              layout="responsive"
              quality={100}
            />
          </div>
          <div className="sw-w-full xl:sw-w-48">
            <div className="sw-my-6">
              <Media greaterThanOrEqual="lg">
                <Heading h="h3">
                  Đặng Soan - Nhà sáng lập và giám đốc điều hành
                </Heading>
              </Media>
              <Media lessThan="lg">
                <Heading h="h5">
                  Đặng Soan - Nhà sáng lập và giám đốc điều hành
                </Heading>
              </Media>
            </div>
            <Paragraph>
              “Đối ngoại” là cơ duyên và “kết nối” là khát vọng Với 10 năm kinh
              nghiệm làm việc trong lĩnh vực truyền thông báo chí và 8 năm làm
              việc trong lĩnh vực truyền thông đối ngoại, Founder S-World có cơ
              hội tác nghiệp trên 20 quốc gia trên thế giới, đặc biệt là nhiều ở
              Mỹ. Nguyên là Giám đốc Chi nhánh miền Nam kênh truyền hình Văn hoá
              Đối ngoại VTC10 NETVIET Với thế mạnh đối ngoại, Soan Đặng cùng các
              cộng sự đã thực hiện nhiều chương trình để truyền thông, thúc đẩy,
              truyền cảm hứng cho khởi nghiệp; trong đó, nổi bật với vai trò
              Giám đốc điều hành Hội thảo quốc tế về khởi nghiệp: “Kết nối và
              phát huy các nguồn lực để Startup Việt ra thế giới Là đối tác thân
              thiết với các Bộ, Ban, Ngành, địa phương. Trong đó đặc biệt là Uỷ
              ban Nhà nước về người Việt Nam ở nước ngoài, Bộ Khoa học công nghệ
              và Bộ thông tin truyền thông.
            </Paragraph>
          </div>
        </section>
        <section></section>
      </Container>
    </MediaContextProvider>
  );
};

export default AboutUs;

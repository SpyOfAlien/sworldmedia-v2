import Accordion from '../../common/accordion';

const AboutWhyUs = () => {
  const reasons = [
    {
      question: 'Năng lực sản xuất và truyền thông là nền tảng mạnh nhất',
      answer:
        'Đội ngũ của chúng tôi xuất thân là các nhà báo, phóng viên và truyền thông có nhiều kinh nghiệm ở Việt Nam và quốc tế. Với phong cách hiện đại, sáng tạo, và năng động, chúng tôi luôn không ngừng tạo nên những sản phẩm đa dạng, “chạm” đến khách hàng, và có giá trị lan tỏa lớn. ',
    },
    {
      question: 'Khả năng kết nối tạo giá trị bền vững',
      answer:
        'Chúng tôi luôn chú trọng đến việc kết nối con người và các lọai hình đa phương tiện; kết nối các đơn vị và các tổ chức uy tín; kết nối đồng nghiệp và cộng đồng hơn 100 media Việt Nam và 20 Media quốc tế. Những giá trị tích cực từ đó được lan tỏa tự nhiên và bền vững.',
    },
    {
      question: ' Bức tranh dịch vụ tổng thể giúp tối ưu hoá ngân sách',
      answer:
        ' Xuất phát từ một ý tưởng và một lần triển khai, chúng tôi  có thể phát triển và hình thành nên các dịch vụ, và phủ sóng trên các nền tảng khác nhau, giúp khách hàng có hiệu quả truyền thông tối ưu nhất.',
    },
    {
      question: 'Tiên phong truyền thông trong các ngành mới, công nghệ mới',
      answer:
        'Chúng tôi tiên phong đi đầu trong việc truyền thông và lan tỏa những ngành mới, những công nghệ mới từ nền tảng kiến thức, khả năng phân tích thị trường, data; tốc độ và khả năng sáng tạo của đội ngũ tại S-World.',
    },
  ];

  return (
    <section className="sw-text-white sw-w-4/5 sw-mx-auto">
      <h3 className="sw-text-h4 sw-text-center sw-text-barlow sw-font-bold sw-mb-12">
        Vì sao chọn S-World
      </h3>
      <div className="sw-w-3/5 sw-mb-8">
        <h6 className="sw-text-h5 sw-text-barlow sw-font-bold sw-mb-6">
          Con người S-World
        </h6>
        <p className="sw-gilroy-thin sw-text-sm">
          Tập hợp những con người cùng tầm nhìn, được đào tạo bài bản, nhiều
          kinh nghiệm truyền thông, có năng lực quốc tế và đam mê sáng tạo.
        </p>
      </div>
      <div className="sw-w-3/5 sw-mb-8">
        <h6 className="sw-text-h5 sw-text-barlow sw-font-bold sw-mb-6">
          Kết nối của S-World
        </h6>
        <p className="sw-gilroy-thin sw-text-sm">
          S-World có mối quan hệ sâu rộng, uy tín. Nhằm tạo ra nhiều mô hình mới
          của kết nối và sáng tạo, để: CÙNG NHAU MẠNH HƠN.
        </p>
      </div>
      <div className="sw-w-3/5 sw-mb-8">
        <h6 className="sw-text-h5 sw-text-barlow sw-font-bold sw-mb-6">
          Văn hoá của S-World
        </h6>
        <p className="sw-gilroy-thin sw-text-sm">
          Kết nối đồng đội, đối tác, khách hàng đi NHANH và đi XA cùng nhau.
        </p>
      </div>
      <div className="sw-w-3/5 sw-mb-8">
        <h6 className="sw-text-h5 sw-text-barlow sw-font-bold sw-mb-6">
          Điều đặc biệt của S-World
        </h6>
        <div>
          <Accordion data={reasons} size="sm" />
        </div>
      </div>
    </section>
  );
};

export default AboutWhyUs;

import img from '../../assets/Rectangle 164188.png';
import img2 from '../../assets/Rectangle 164188@2x.png';
import img4 from '../../assets/Rectangle 164190.png';
import img5 from '../../assets/Rectangle 164190@2x.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from 'react-bootstrap';

export default function CardSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    // rtl: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Container className="mt-5" fluid dir="rtl">
      <div className="text-center mb-4 mt-5">
        <h2 className="fw-bold title_section">استكشف الوجهات</h2>
        <p className="fw-bold text-muted">استمتع باستكشاف الرحلات الممتعة معنا</p>
      </div>

      <div className="w-100 container" dir='ltr'>
        <Slider {...settings}>
          {[{
            src: img, title: "ولاية بوشر"
          }, {
            src: img2, title: "ولاية صلالة"
          }, {
            src: img4, title: "ولاية مسقط"
          }, {
            src: img5, title: "ولاية العامرات"
          }, {
            src: img2, title: "ولاية صلالة"
          }].map((dest, idx) => (
            <div key={idx} className="cardslider text-center px-2 position-relative">
              <img src={dest.src} alt={`Destination ${idx + 1}`} className="img-fluid  w-100" />
              <div className="bg-card"></div>
              <h4 className="fw-bold mt-2 title_section">{dest.title}</h4>
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
}

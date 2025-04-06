import { Container, Row, Col } from 'react-bootstrap';
import img from '../../assets/Screenshot 2025-04-05 142327.png';

export default function Footer() {
  return (
    <footer className="footer  text-white " >
      <Container>
        <Row className="gy-4">
          <Col md={3} className="text-center text-md-end">
            <img src={img} alt="Logo" />
            <p className=" small fw-bold">
              موقع Round هو منصة إلكترونية تهدف إلى تقديم مجموعة متنوعة من الخيارات للسياح والمقيمين لاستكشاف الجمال 
            </p>
            <ul className="d-flex footer-social justify-content-center justify-content-md-start gap-3 mt-4 list-unstyled">
              <li><a href="#"><i className="fa-brands fa-facebook text-white fs-5"></i></a></li>
              <li><a href="#"><i className="fa-brands fa-instagram text-white fs-5"></i></a></li>
              <li><a href="#"><i className="fa-brands fa-tiktok text-white fs-5"></i></a></li>
              <li><a href="#"><i className="fa-brands fa-x-twitter text-white fs-5"></i></a></li>
            </ul>
          </Col>

          <Col md={6}>
            <Row>
              <Col xs={6}>
                <h5 className="fw-bold  mx-4 px-3">الصفحات</h5>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-white d-block mb-2 fw-bold">خدماتنا</a></li>
                  <li><a href="#" className="text-white d-block mb-2 fw-bold">عن الشركة</a></li>
                  <li><a href="#" className="text-white d-block mb-2 fw-bold">الوجهات السياحية</a></li>
                  <li><a href="#" className="text-white d-block mb-2 fw-bold">العضوية</a></li>
                  <li><a href="#" className="text-white d-block mb-2 fw-bold">اليوم السياحي</a></li>
                </ul>
              </Col>
              <Col xs={6}>
                <ul className="list-unstyled mt-4 pt-2">
                  <li><a href="#" className="text-white d-block mb-2 fw-bold">الأحكام والشروط</a></li>
                  <li><a href="#" className="text-white d-block mb-2 fw-bold">سياسة الخصوصية</a></li>
                  <li><a href="#" className="text-white d-block mb-2 fw-bold">الأسئلة الشائعة</a></li>
                  <li><a href="#" className="text-white d-block mb-2 fw-bold">تواصل معنا</a></li>
                </ul>
              </Col>
            </Row>
          </Col>

          <Col md={3}>
            <h5 className="fw-bold mb-3">بيانات التواصل</h5>
            <ul className="list-unstyled">
              <li className="d-flex align-items-center mb-2">
                <i className="fa-solid fa-phone ms-2 bg-light text-primary rounded-circle p-2"></i>
                <span>+2 1235 1235 123</span>
              </li>
              <li className="d-flex align-items-center mb-2">
                <i className="fa-solid fa-envelope ms-2 bg-light text-primary rounded-circle p-2"></i>
                <span>Info@mail.com</span>
              </li>
              <li className="d-flex align-items-center mb-2">
                <i className="fa-solid fa-location-dot ms-2 bg-light text-primary rounded-circle p-2"></i>
                <span>Egypt - Cairo</span>
              </li>
            </ul>
          </Col>

        </Row>

        <hr className="border-light " />

        <div className="d-flex flex-column flex-md-row justify-content-between text-center pt-4">
          <span className="small">جميع الحقوق محفوظة Round © 2024</span>
          <span className="small">
            صنع بـ ❤️ بواسطة <strong>APEX</strong>
          </span>
        </div>
      </Container>
    </footer>
  );
}

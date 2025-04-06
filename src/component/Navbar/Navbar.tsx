import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { BsSnapchat } from "react-icons/bs";
import { FaBars, FaGlobe, FaInstagram, FaRegUser, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import img from '../../assets/Screenshot 2025-04-05 142327.png';

export default function CustomNavbar() {
  return (
    <div className="bg-navbar">
      <Container>
        <div className="d-flex justify-content-between align-items-center px-3 text-white pt-3">
          <div className="d-flex gap-2">
            <BsSnapchat size={15} />
            <FaTiktok size={15} />
            <FaInstagram size={15} />
            <FaXTwitter size={15} />
          </div>
          <div className="d-flex align-items-center gap-1">
            <span>AR</span>
            <FaGlobe size={12} />
          </div>
        </div>

        <hr className="text-white my-2" />

        <Navbar expand="lg" variant="dark">
          <Container fluid>
            <Navbar.Brand href="#">
              <img src={img} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="main-navbar" className="text-white border-0">
              <FaBars />
            </Navbar.Toggle>
            <Navbar.Collapse id="main-navbar" className="justify-content-between">
              <Nav className="mx-auto mb-2 mb-lg-0 gap-lg-3 text-center text-lg-end">
                <Nav.Link href="#" className="text-white fw-bold active">الرئيسية</Nav.Link>
                <Nav.Link href="#" className="text-white fw-bold">خدماتنا</Nav.Link>
                <Nav.Link href="#" className="text-white fw-bold">عن الشركة</Nav.Link>
                <Nav.Link href="#" className="text-white fw-bold">الوجهات السياحية</Nav.Link>
                <Nav.Link href="#" className="text-white fw-bold">المدونة</Nav.Link>
                <Nav.Link href="#" className="text-white fw-bold">ألبوم الصور</Nav.Link>
              </Nav>
              <Button className="btn cusstom-btn bg-center text-white btn-navbar px-3 fw-bold d-flex align-items-center gap-2" type="button">
                <FaRegUser size={15} /> التسجيل
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
}

import Breadcrumbs from "../components/breadcrumb";
import NavBar from "../components/navbar";
import Services from "../components/services";
import AboutUsCoverImage from '../assets/img/page-title-bg.jpg';
import Footer from "../components/footer";

function OurServices() {
  const links = [
    {
      title: 'Home',
      href: '/'
    },
    {
      title: 'Services',
      href: ''
    }
  ]

  return (
    <>
      <NavBar currentPage='services' />
      <Breadcrumbs pageTitle='Services' links={links} image={AboutUsCoverImage} />
      <Services />
      <Footer />
    </>
  );
}

export default OurServices;
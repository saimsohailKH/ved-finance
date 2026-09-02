import Breadcrumbs from "../components/breadcrumb";
import NavBar from "../components/navbar";
import backgroud from '../assets/img/page-title-bg.jpg';
import Footer from "../components/footer";
import OurProcess from "../components/ourProcess";
import usePageTitle from '../hooks/usePageTitle';

function Process() {
  usePageTitle('Our Process')
  const links = [
    {
      title: 'Home',
      href: '/'
    },
    {
      title: 'Contact',
      href: ''
    }
  ]

  return (
    <>
      <NavBar currentPage='process' />
      <Breadcrumbs pageTitle='Our Process' links={links} image={backgroud} />
      <OurProcess />
      <Footer />
    </>
  );
}

export default Process;
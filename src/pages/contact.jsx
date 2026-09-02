import NavBar from "../components/navbar";
import backgroud from '../assets/img/page-title-bg.jpg';
import Footer from "../components/footer";
import Breadcrumbs from "../components/breadcrumb";
import Map from "../components/map";
import usePageTitle from '../hooks/usePageTitle';

function Contact() {
  usePageTitle('Contact Us')
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
      <NavBar currentPage='contact' />

      <main class="main">
        <Breadcrumbs pageTitle='Contact' links={links} image={backgroud} />

        <section id="contact" class="contact section">
          <div class="container" data-aos="fade-up" data-aos-delay="100">
            <div class="row gy-4">
              <div class="col-lg-6">
                <div class="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="200">
                  <i class="bi bi-geo-alt"></i>
                  <h3>Address</h3>
                  <p>1042 Western Hwy, Caroline Springs, VIC - 3023</p>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="300">
                  <i class="bi bi-telephone"></i>
                  <h3>Call us</h3>
                  <p><a href="tel:+61433892312">0433 892 312</a></p>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="400">
                  <i class="bi bi-envelope"></i>
                  <h3>Email us</h3>
                  <p><a href="mailto:info@vedfinancegroup.com">info@vedfinancegroup.com</a></p>
                </div>
              </div>
            </div>

            <Map />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Contact;
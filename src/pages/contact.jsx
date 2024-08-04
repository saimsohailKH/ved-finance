import NavBar from "../components/navbar";
import backgroud from '../assets/img/page-title-bg.jpg';
import Footer from "../components/footer";
import Breadcrumbs from "../components/breadcrumb";

function Contact() {
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
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="300">
                  <i class="bi bi-telephone"></i>
                  <h3>Call Us</h3>
                  <p>0433892312</p>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="400">
                  <i class="bi bi-envelope"></i>
                  <h3>Email Us</h3>
                  <p>Info@vedfinancegroup.com</p>
                </div>
              </div>

            </div>

            <div class="row gy-4 mt-1">
              <div class="col-lg-12" data-aos="fade-up" data-aos-delay="300">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.330600428275!2d144.74552947628618!3d-37.75884567198935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad68ad33f53a1dd%3A0x397b74a42a9e913a!2s1042%20Western%20Hwy%2C%20Caroline%20Springs%20VIC%203023%2C%20Australia!5e0!3m2!1sen!2s!4v1722763706350!5m2!1sen!2s" frameborder="0" style={{border: 0, width: '100%', height: '400px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Contact;
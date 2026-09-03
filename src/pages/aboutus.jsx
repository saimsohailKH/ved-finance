import NavBar from "../components/navbar";
import AboutUsCoverImage from '../assets/img/page-title-bg.jpg';
import onwerPic from '../assets/img/owner.jpeg';
import Footer from "../components/footer";
import Solutions from "../components/solutions";
import Breadcrumbs from "../components/breadcrumb";
import Stats from "../components/stats";
import usePageTitle from '../hooks/usePageTitle';

function AboutUs() {
  usePageTitle('About Us')
  const links = [
    {
      title: 'Home',
      href: '/'
    },
    {
      title: 'About',
      href: ''
    }
  ]

  return (
    <>
      <NavBar currentPage='about' />

      <Breadcrumbs pageTitle='About' links={links} image={AboutUsCoverImage} />

      <section id="about" class="about section">
        <div class="container">
          <div class="row position-relative">
            <div class="col-lg-7 about-img" data-aos="zoom-out" data-aos-delay="200"><img src={onwerPic} alt="Amrinder Singh, VED Finance Group" /></div>

            <div class="col-lg-7" data-aos="fade-up" data-aos-delay="100">
              <h2 class="inner-title">Director/ Mortgage Broker</h2>
              <div class="our-story">
                {/* <h4>Est 1988</h4> */}
                <h3>Our Story</h3>
                <p>After facing several obstacles due to the miscommunication during my loan process for my first home, I decided to become a mortgage broker and make a difference in a clients journey. 
                   Started over eight years ago, I decided to apply and work for some of the well known investment firms to learn the craft and understand the versatility of products and suitability. 
                   Still hasn’t stopped learning, with 8+ years of experience I have been serving my own clients and feeling more motivated year after year. Empathy with people and understanding of emotions has helped me achieve results and grow in the process. 
                </p>
                <ul>
                  <li><i class="bi bi-check-circle"></i> <span>Quality solutions that add value</span></li>
                  <li><i class="bi bi-check-circle"></i> <span>Wide range of loan options Australia-wide</span></li>
                  <li><i class="bi bi-check-circle"></i> <span>Vision, education, and passion for finance</span></li>
                </ul>
                <p>Bonding with people, winning their trust and delivering the results is our ultimate goal with every client.</p>

              </div>
            </div>
          </div>
        </div>
      </section>

      <Stats />
      <Solutions />
      <Footer />
    </>
  );
}

export default AboutUs;
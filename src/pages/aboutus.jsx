import NavBar from "../components/navbar";
import AboutUsCoverImage from '../assets/img/page-title-bg.jpg';
import onwerPic from '../assets/img/owner.jpeg';
import Footer from "../components/footer";
import { PureIncrement } from 'pure_counter';
import Solutions from "../components/solutions";
import Breadcrumbs from "../components/breadcrumb";

function AboutUs() {
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
            <div class="col-lg-7 about-img" data-aos="zoom-out" data-aos-delay="200"><img src={onwerPic} /></div>

            <div class="col-lg-7" data-aos="fade-up" data-aos-delay="100">
              <h2 class="inner-title">Mortgage broker</h2>
              <div class="our-story">
                <h4>Est 1988</h4>
                <h3>Our Story</h3>
                <p>The VED Finance Group is based in Australia and prides itself on its vision, education, and passion for finding the right solution for clients' financial needs. Our priority is to provide quality solutions that add value to our clients' lives. With our experience, we aim to choose and structure loan products that are suitable to our clients' requirements. We offer a range of loan options including new home loans, re-financing, investment loans, construction loans, SMSF lending, development funding, and asset finance. Our services are available Australia-wide. If you would like more information, please feel free to contact us</p>
                <ul>
                  <li><i class="bi bi-check-circle"></i> <span>Quality solutions that add value</span></li>
                  <li><i class="bi bi-check-circle"></i> <span>Wide range of loan options Australia-wide</span></li>
                  <li><i class="bi bi-check-circle"></i> <span>Vision, education, and passion for finance</span></li>
                </ul>
                <p>Providing tailored financial solutions with expertise, passion, and nationwide reach.</p>

                <div class="watch-video d-flex align-items-center position-relative">
                  <i class="bi bi-play-circle"></i>
                  <a href="https://www.youtube.com" class="glightbox stretched-link">Watch Video</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="stats-counter" class="stats-counter section">
        <div class="container section-title" data-aos="fade-up">
          <h2>Stats</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>

        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <div class="row gy-4">
            <div class="col-lg-3 col-md-6">
              <div class="stats-item d-flex align-items-center w-100 h-100">
                <i class="bi bi-emoji-smile color-blue flex-shrink-0"></i>
                <div>
                  <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" class="purecounter"></span>
                  <PureIncrement start={0} end={232} duration={3} className="purecounter" />
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="stats-item d-flex align-items-center w-100 h-100">
                <i class="bi bi-journal-richtext color-orange flex-shrink-0"></i>
                <div>
                  <PureIncrement start={0} end={521} duration={3} className="purecounter" />
                  <p>Projects</p>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="stats-item d-flex align-items-center w-100 h-100">
                <i class="bi bi-headset color-green flex-shrink-0"></i>
                <div>
                  <PureIncrement start={0} end={1463} duration={3} className="purecounter" />
                  <p>Hours Of Support</p>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="stats-item d-flex align-items-center w-100 h-100">
                <i class="bi bi-people color-pink flex-shrink-0"></i>
                <div>
                  <PureIncrement start={0} end={15} duration={3} className="purecounter" />
                  <p>Hard Workers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Solutions />
      <Footer />
    </>
  );
}

export default AboutUs;
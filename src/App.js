import './App.css';
import c1 from './assets/img/c1.jpg';
import c2 from './assets/img/hero-carousel/c2.jpeg';
import c4 from './assets/img/hero-carousel/c4.jpeg';
import loanService from './assets/img/loan.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import "bootstrap-icons/font/bootstrap-icons.css";
import '@fortawesome/fontawesome-free/css/all.css';
import Services from './components/services';
import Testimonials from './components/testimonials';
import Footer from './components/footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import './main';

function mobileNavToogle() {
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
  document.querySelector('body').classList.toggle('mobile-nav-active');
  mobileNavToggleBtn.classList.toggle('bi-list');
  mobileNavToggleBtn.classList.toggle('bi-x');
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
    mobileNavToogle()
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

    document.querySelectorAll('#navmenu a').forEach(navmenu => {
      navmenu.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
          mobileNavToogle();
        }
      });
    });
  }, [])

  return (
    <div className="App">
      <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

          <a href="index.html" className="logo d-flex align-items-center">
            <h1 className="sitename">VED Finance Group</h1> <span>.</span>
          </a>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li><a href="index.html" className="active">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="projects.html">Projects</a></li>
              <li><a href="blog.html">Blog</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>
        </div>
      </header>

      <main class="main">
        <section id="hero" class="hero section dark-background">
          <div class="info d-flex align-items-center">
            <div class="container">
              <div class="row justify-content-center" data-aos="fade-up" data-aos-delay="100">
                <div class="col-lg-6 text-center">
                  <h2>VED Finance Group</h2>
                  <p>The VED Finance Group is based in Australia and prides itself on its vision, education, and passion for finding the right solution for clients' financial needs. If you would like more information, please feel free to contact us</p>
                  <a href="#get-started" class="btn-get-started">Get Started</a>
                </div>
              </div>
            </div>
          </div>

          <div id="hero-carousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
            <div class="carousel-item">
              <img src={c1} alt=""/>
            </div>

            <div class="carousel-item active">
              <img src={c2} alt=""/>
            </div>

            <div class="carousel-item">
              <img src={c4} alt=""/>
            </div>

            <a class="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
              <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
            </a>

            <a class="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
              <span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
            </a>
          </div>
        </section>
      </main>

      <Services />

      <section id="alt-services" class="alt-services section">
        <div class="container">
          <div class="row justify-content-around gy-4">
            <div class="features-image col-lg-6" data-aos="fade-up" data-aos-delay="100"><img src={loanService} alt=""/></div>
            <div class="col-lg-5 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
              <h3>Your One Stop Loan Solutions</h3>
              <p>Comprehensive loan solutions for all your financial needs in one place.</p>

              <div class="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="300">
                <i class="bi bi-easel flex-shrink-0"></i>
                <div>
                  <h4><a href="" class="stretched-link">No Hidden Fees</a></h4>
                  <p>Unlike others, we believe in transparency. Rest assured, there are no hidden fees or unexpected charges. What you see is what you get.</p>
                </div>
              </div>

              <div class="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="400">
                <i class="bi bi-patch-check flex-shrink-0"></i>
                <div>
                  <h4><a href="" class="stretched-link">Excellent Customer Support</a></h4>
                  <p>Our dedicated customer support team is here to assist you throughout your loan journey. Feel free to reach out to us for any queries or assistance.</p>
                </div>
              </div>

              <div class="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="500">
                <i class="bi bi-brightness-high flex-shrink-0"></i>
                <div>
                  <h4><a href="" class="stretched-link">Wide Range of Loan Products</a></h4>
                  <p>Explore a diverse range of loan products to find the one that best fits your needs. From personal loans to specialized financing, we've got you covered.</p>
                </div>
              </div>

              <div class="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="600">
                <i class="bi bi-brightness-high flex-shrink-0"></i>
                <div>
                  <h4><a href="" class="stretched-link">Industry Expertise</a></h4>
                  <p>With years of industry expertise, we bring a deep understanding of financial challenges. Trust us to be your reliable financial partner.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;

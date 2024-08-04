import { useEffect } from 'react';
import Services from '../components/services';
import Testimonials from '../components/testimonials';
import Footer from '../components/footer';
import NavBar from '../components/navbar';

import AOS from 'aos';

import 'aos/dist/aos.css';

import c1 from '../assets/img/c1.jpg';
import c2 from '../assets/img/hero-carousel/c2.jpeg';
import c4 from '../assets/img/hero-carousel/c4.jpeg';
import Solutions from '../components/solutions';
import Stats from '../components/stats';

function Landing() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, [])

  return(
    <>
      <NavBar currentPage='home' />
      <main class="main">
        <section id="hero" class="hero section dark-background">
          <div class="info d-flex align-items-center">
            <div class="container">
              <div class="row justify-content-center" data-aos="fade-up" data-aos-delay="100">
                <div class="col-lg-6 text-center">
                  <h2>VED - Vision, Education, Driven</h2>
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

        <Services />
        <Solutions />
        <Stats />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
}

export default Landing;
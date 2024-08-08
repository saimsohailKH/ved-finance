import loanService from '../assets/img/loan.jpeg';

function Solutions() {
  return (
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
  );
}

export default Solutions;
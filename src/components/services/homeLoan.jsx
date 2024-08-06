import Breadcrumbs from "../breadcrumb";
import NavBar from "../navbar";
import HomeLoanBg from '../../assets/img/hero-carousel/c2.jpeg'

function HomeLoan() {
  const links = [
    {
      title: 'Home',
      href: '/'
    },
    {
      title: 'Home Loan',
      href: ''
    }
  ]

  return (
    <>
      <NavBar currentPage='services' />
      <Breadcrumbs pageTitle='Home Loan' links={links} image={HomeLoanBg} />

      <section id="features" class="features section">
        <div class="container">
          <div class="tab-content" data-aos="fade-up" data-aos-delay="200">
            <div class="tab-pane fade active show" id="features-tab-1" role="tabpanel">
              <div class="row">
                <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                  <h3>Home Loan</h3>
                  <p class="fst-italic">
                    We understand that buying your first home is one of the biggest financial decisions you'll ever make. It's valuable to have someone by your side to guide you through the following steps.
                    <br/>
                     - Your borrowing capacity
                    <br/>
                     - The deposit you need
                    <br/>
                     - The government incentives you are eligible for
                    <br/>
                     - Mistakes to avoid
                    <br/>
                    Our clients often have questions, and we believe no question is silly. We're here to answer them all.
                  </p>

                  <ul>
                    <li><i class="bi bi-check2-all"></i> <span>Can I afford a home?</span></li>
                    <li><i class="bi bi-check2-all"></i> <span>Do I need 20% deposit?</span></li>
                    <li><i class="bi bi-check2-all"></i> <span>Can I get a home loan with a low credit score?</span></li>
                  </ul>

                  <p>
                    It's important to know that the bank you currently use might not be the best option for securing your first home. Banks have varying policies—some require a 20% deposit, while others might lend you up to 95% of the property's value. That's where we come in. We work with over 30 banks, ensuring they compete for your business.
                  </p>
                </div>
                <div class="col-lg-6 order-1 order-lg-2 text-center">
                  <img src={HomeLoanBg} alt="" class="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeLoan;
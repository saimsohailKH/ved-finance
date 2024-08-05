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
                    We understand that buying your first home is one the biggest financial decisions you will make, and it is worth to have someone by your side who will guide you with the following.
                    <br/>
                     - Your borrowing capacity
                    <br/>
                     - The deposit you need
                    <br/>
                     - The government incentives you are eligible for
                    <br/>
                     - Mistakes to avoid
                    <br/>
                    We always get clients asking us questions and no question is silly. We are here to answer them all.
                  </p>

                  <ul>
                    <li><i class="bi bi-check2-all"></i> <span>Can I afford a home?</span></li>
                    <li><i class="bi bi-check2-all"></i> <span>Do I need 20% deposit?</span></li>
                    <li><i class="bi bi-check2-all"></i> <span>Can I get a home loan with a low credit score?</span></li>
                    <li><i class="bi bi-check2-all"></i> <span>Do you think pineapple and pizza go together?</span></li>
                  </ul>

                  <p>
                    You must understand that the bank you bank with might not be your best bet in securing your first home.
                    Different banks have different policies. Some banks need 20% deposit saved whereas some will lend you up to 95% of the property.
                    This is where we come into play, we deal with 30 plus banks, making them fight for your business.
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
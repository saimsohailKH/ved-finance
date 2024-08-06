import Breadcrumbs from "../breadcrumb";
import NavBar from "../navbar";
import CommercialLoansPic from '../../assets/img/loans/ccl.jpg';
import CommercialLoansCoverPic from '../../assets/img/loans/ccl-cover.jpg';

function CommercialLoans() {
  const links = [
    {
      title: 'Home',
      href: '/'
    },
    {
      title: 'Commercial Loans',
      href: ''
    }
  ]

  return (
    <>
      <NavBar currentPage='services' />
      <Breadcrumbs pageTitle='Commercial Loans' links={links} image={CommercialLoansCoverPic} />

      <section id="features" class="features section">
        <div class="container">
          <div class="tab-content" data-aos="fade-up" data-aos-delay="200">
            <div class="tab-pane fade active show" id="features-tab-1" role="tabpanel">
              <div class="row">
                <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                  <h3>Commercial Loans</h3>
                  <p class="fst-italic">
                    Whether you're planning to start a new business, buy a franchise, or expand an existing one, we can assist you.
                  </p>

                  <p class="fst-italic">
                    At VED, we are committed to your success. We collaborate with a panel of tier 1 and tier 2 lenders, presenting your business plan in line with your specific situation to turn your vision into reality.
                  </p>

                  <p>
                    Depending on the type of business and whether the borrowers have property backing, a lender may determine a specific loan-to-value ratio (LVR). Ultimately, when assessing a business loan application, lenders consider your experience, your business plan, and how effectively your case is presented. As brokers, we can help you present your case in the most compelling way possible.
                  </p>

                  <h5>What factors influence your business loan?</h5>

                  <ul>
                    <li><i class="bi bi-check2-all"></i> <span>Security you offer</span></li>
                    <li><i class="bi bi-check2-all"></i> <span>The serviceability and viability of the business</span></li>
                    <li><i class="bi bi-check2-all"></i> <span>Loan term</span></li>
                    <li><i class="bi bi-check2-all"></i> <span>The type of business matters; some lenders may not consider certain franchised businesses.</span></li>
                  </ul>
                </div>
                <div class="col-lg-6 order-1 order-lg-2 text-center">
                  <img src={CommercialLoansPic} alt="" class="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CommercialLoans;
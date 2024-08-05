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
                    Are you planning to start a new business, buy a franchise or expand a current business, we can help you.
                  </p>

                  <p class="fst-italic">
                    At VED, we will make sure you and your business win. We partner with a panel of tier 1 and tier 2 lenders, who we present your business plan with according to your situations to make sure we give your plan a reality.
                  </p>

                  <p>
                    Depending on the type of business and if the borrowers are property backed or not, a lender might decide to lend a certain LVR. At the end of the day, while assessing a business loan application, a lender also sees your experience, your business plan and us as brokers can help you present your case in the best way possible.
                  </p>

                  <h5>What affects your business loan?</h5>

                  <ul>
                    <li><i class="bi bi-check2-all"></i> <span>Security you offer</span></li>
                    <li><i class="bi bi-check2-all"></i> <span>Serviceability and viability of the business</span></li>
                    <li><i class="bi bi-check2-all"></i> <span>Loan term</span></li>
                    <li><i class="bi bi-check2-all"></i> <span>Type of business, there are certain franchised businesses that some lenders won’t entertain.</span></li>
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
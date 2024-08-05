import Breadcrumbs from "../breadcrumb";
import NavBar from "../navbar";
import CashFlowLendingPic from '../../assets/img/loans/cfl.jpg';
import CashFlowLendingCoverPic from '../../assets/img/loans/ccl-cover.jpg';

function CashFlowLending() {
  const links = [
    {
      title: 'Home',
      href: '/'
    },
    {
      title: 'Cash Flow lending',
      href: ''
    }
  ]

  return (
    <>
      <NavBar currentPage='services' />
      <Breadcrumbs pageTitle='Cash Flow lending' links={links} image={CashFlowLendingCoverPic} />

      <section id="features" class="features section">
        <div class="container">
          <div class="tab-content" data-aos="fade-up" data-aos-delay="200">
            <div class="tab-pane fade active show" id="features-tab-1" role="tabpanel">
              <div class="row">
                <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                  <h3>Cash Flow lending</h3>
                  <p class="fst-italic">
                    Cash flow is an issue that keeps a lot of business owners awake at night.
                  </p>

                  <p class="fst-italic">
                    Aussie small businesses, going through a rough patch or a seasonal downturn can have access to help. Cash flow lending is an answer to a lot of those problems.
                  </p>

                  <p>
                    It comes in the form of short-term loans which can be used to pay wages, buying an equipment or grab an opportunity. 
                  </p>

                  <h5>Why would you as a business, prefer Cash Flow lending?</h5>

                  <ul>
                    <li><i class="bi bi-check2-all"></i> <span>Fast – Time to apply and get a decision is fast</span></li>
                    <li><i class="bi bi-check2-all"></i> <span>Simpler – no need to provide complex documents</span></li>
                    <li><i class="bi bi-check2-all"></i> <span>Structured as per your business – Repayments work as per your cash flow</span></li>
                    <li><i class="bi bi-check2-all"></i> <span>Clear – Total payout is clear at the start with no penalties to payout</span></li>
                  </ul>

                  <p>If your business needs an urgent cash injection , Hit us up at VED and leave it to us</p>
                </div>

                <div class="col-lg-6 order-1 order-lg-2 text-center">
                  <img src={CashFlowLendingPic} alt="" class="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CashFlowLending;
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
                    Cash flow is a concern that often keeps many business owners up at night.
                  </p>

                  <p class="fst-italic">
                    Australian small businesses facing a rough patch or seasonal downturn can find support through cash flow lending, which can address many of these challenges.
                  </p>

                  <p>
                    It takes the form of short-term loans that can be used for paying wages, purchasing equipment, or seizing opportunities.
                  </p>

                  <h5>Why might your business prefer cash flow lending?</h5>

                  <ul>
                    <li><i class="bi bi-check2-all"></i> <span>Quick – The application process and decision time are both fast.</span></li>
                    <li><i class="bi bi-check2-all"></i> <span>Simpler – No need to submit complex documents.</span></li>
                    <li><i class="bi bi-check2-all"></i> <span>Tailored to your business – Repayments align with your cash flow.</span></li>
                    <li><i class="bi bi-check2-all"></i> <span>Transparent – The total payout is clear from the beginning, with no penalties for early repayment.</span></li>
                  </ul>

                  <p>If your business needs an urgent cash injection, reach out to us at VED and let us handle it for you.</p>
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
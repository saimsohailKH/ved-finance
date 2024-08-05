import Breadcrumbs from "../breadcrumb";
import NavBar from "../navbar";
import LineOfCreditPic from '../../assets/img/loans/loc.jpg';
import LineOfCreditCoverPic from '../../assets/img/loans/ccl-cover.jpg';

function LineOfCredit() {
  const links = [
    {
      title: 'Home',
      href: '/'
    },
    {
      title: 'Line of credit / Business Overdraft',
      href: ''
    }
  ]

  return (
    <>
      <NavBar currentPage='services' />
      <Breadcrumbs pageTitle='Line of credit / Business Overdraft' links={links} image={LineOfCreditCoverPic} />

      <section id="features" class="features section">
        <div class="container">
          <div class="tab-content" data-aos="fade-up" data-aos-delay="200">
            <div class="tab-pane fade active show" id="features-tab-1" role="tabpanel">
              <div class="row">
                <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                  <h3>Line of credit / Business Overdraft</h3>
                  <p class="fst-italic">
                    Lines of credit are approved “loan” facilities that you can draw down on at any time that suits your business, without any further approvals. Cash flow line of credit is very common among businesses. It sits open in your business until you need to use it to pay bills, wages, purchase etc. It does not cost you anything unless you use it. It is a safety net, but unlike a large pile of expensive cash sitting in your account and slowly dwindling from repayments and interest, it sits costing nothing until its needed. When the opportunity to use the cash to grow or trade more arises, the facility is available to draw on, at the opportune time for your business. The repayment terms are often shorter, in the 2-6 months, meaning that the facility is paid off with the cashflow generated from the increased trade, and ready to draw down upon again when opportunity or need arises.
                  </p>

                  <p>
                    At VED, we partner with majority of lenders assisting businesses out there with a cash flow issue and providing them that much needed safety net.
                  </p>
                </div>
                <div class="col-lg-6 order-1 order-lg-2 text-center">
                  <img src={LineOfCreditPic} alt="" class="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LineOfCredit;
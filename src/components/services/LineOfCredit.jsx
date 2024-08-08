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
                    Lines of credit are flexible loan facilities that allow you to draw funds as needed without requiring additional approvals. A cash flow line of credit is commonly used by businesses and remains available until you need it for paying bills, wages, or making purchases. It incurs no cost unless you use it, serving as a safety net. Unlike a large sum of cash that depletes over time due to repayments and interest, a line of credit costs nothing until drawn upon. When opportunities for growth or increased trade arise, you can access the funds as needed. Repayment terms are typically short, ranging from 2 to 6 months, and are designed to be repaid with the cash flow generated from increased business activity, allowing you to use the facility again when required.
                  </p>

                  <p>
                    At VED, we partner with a wide range of lenders to help businesses address cash flow issues and provide the essential safety net they need.
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
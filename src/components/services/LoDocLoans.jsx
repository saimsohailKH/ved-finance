import Breadcrumbs from "../breadcrumb";
import NavBar from "../navbar";
import LoDocLoansPic from '../../assets/img/loans/ld.jpg';
import LoDocLoansCoverPic from '../../assets/img/loans/ccl-cover.jpg';

function LoDocLoans() {
  const links = [
    {
      title: 'Home',
      href: '/'
    },
    {
      title: 'LOW DOC LOANS',
      href: ''
    }
  ]

  return (
    <>
      <NavBar currentPage='services' />
      <Breadcrumbs pageTitle='LOW DOC LOANS' links={links} image={LoDocLoansCoverPic} />

      <section id="features" class="features section">
        <div class="container">
          <div class="tab-content" data-aos="fade-up" data-aos-delay="200">
            <div class="tab-pane fade active show" id="features-tab-1" role="tabpanel">
              <div class="row">
                <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                  <h3>LOW DOC LOANS</h3>
                  <h6>What is a Low Doc Loan?</h6>

                  <p>
                    Low Documentation (Low Doc) loans offer flexible financing solutions for self-employed individuals. These loans are tailored for customers who have income and assets but are unable to provide the typical verification documentation, such as financial statements and, in some cases, tax returns.
                  </p>

                  <p>Low Doc loans offer a swift solution, allowing you to seize opportunities without waiting for financial documentation.</p>
                  <p>At VED, we partner with numerous lenders who will evaluate your application based on accountants' statements and self-declarations, ensuring you don't miss out on opportunities.</p>
                  <p>To learn more about the fine print and terms and conditions, let’s get in touch.</p>
                </div>
                <div class="col-lg-6 order-1 order-lg-2 text-center">
                  <img src={LoDocLoansPic} alt="" class="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoDocLoans;
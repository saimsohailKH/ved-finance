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
      title: 'LO DOC LOANS',
      href: ''
    }
  ]

  return (
    <>
      <NavBar currentPage='services' />
      <Breadcrumbs pageTitle='LO DOC LOANS' links={links} image={LoDocLoansCoverPic} />

      <section id="features" class="features section">
        <div class="container">
          <div class="tab-content" data-aos="fade-up" data-aos-delay="200">
            <div class="tab-pane fade active show" id="features-tab-1" role="tabpanel">
              <div class="row">
                <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                  <h3>LO DOC LOANS</h3>
                  <h6>What is a Lo Doc Loan?</h6>

                  <p>
                    Low Documentation (Low Doc) loans provide flexible financing solutions for self-employed people. Low Doc loans are designed for customers who have an income and assets, but are unable to provide the usual verification documentation like financial statements and in some cases, tax returns.
                  </p>

                  <p>Lo Doc loans provide a quick solution rather than waiting for the financials and losing a potential opportunity.</p>
                  <p>At VED, we partner with a lot of lenders who will assess your application just on accountants and self-declaration, so you do not miss out on a opportunity.</p>
                  <p>To know more about the fine print and T&C’s , let’s get in touch</p>
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
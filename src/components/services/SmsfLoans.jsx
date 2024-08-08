import Breadcrumbs from "../breadcrumb";
import NavBar from "../navbar";
import SmsfLoansPic from '../../assets/img/loans/smfs.jpg';
import SmsfLoansCoverPic from '../../assets/img/loans/ccl-cover.jpg';

function SmsfLoans() {
  const links = [
    {
      title: 'Home',
      href: '/'
    },
    {
      title: 'SMSF Loans',
      href: ''
    }
  ]

  return (
    <>
      <NavBar currentPage='services' />
      <Breadcrumbs pageTitle='SMSF Loans' links={links} image={SmsfLoansCoverPic} />

      <section id="features" class="features section">
        <div class="container">
          <div class="tab-content" data-aos="fade-up" data-aos-delay="200">
            <div class="tab-pane fade active show" id="features-tab-1" role="tabpanel">
              <div class="row">
                <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                  <h3>SMSF Loans</h3>
                  <p class="fst-italic">
                    As a property investor (including investing through super funds (SMSF)), we have experts who work with you to understand your immediate and longer term financing needs. We'll find suitable options and manage the application process.
                  </p>
                </div>
                <div class="col-lg-6 order-1 order-lg-2 text-center">
                  <img src={SmsfLoansPic} alt="" class="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SmsfLoans;
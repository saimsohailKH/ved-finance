import Breadcrumbs from "../breadcrumb";
import NavBar from "../navbar";
import DebtRemovalPic from '../../assets/img/loans/dr.jpg';
import DebtRemovalCoverPic from '../../assets/img/loans/ccl-cover.jpg';

function DebtRemoval() {
  const links = [
    {
      title: 'Home',
      href: '/'
    },
    {
      title: 'Debt Removal',
      href: ''
    }
  ]

  return (
    <>
      <NavBar currentPage='services' />
      <Breadcrumbs pageTitle='Debt Removal' links={links} image={DebtRemovalCoverPic} />

      <section id="features" class="features section">
        <div class="container">
          <div class="tab-content" data-aos="fade-up" data-aos-delay="200">
            <div class="tab-pane fade active show" id="features-tab-1" role="tabpanel">
              <div class="row">
                <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                  <h3>Debt Removal</h3>
                  <p class="fst-italic">
                    If you have bad credit, you know how hard life can become! From everyday purchases to investments in your future, your credit history can come back to haunt you. The good news is, at VED we partner with one of the best Debt Removal Agencies who can remove your bad credit, regardless of   the account is outstanding or paid. This is achieved by stating the legislation the company had breached before the negative listing was against you.
                  </p>

                  <p class="fst-italic">
                    Once these defaults are removed, it becomes easier for you to get back to financial security.
                  </p>

                  <h6>
                    The benefits of repairing your credit report can possibly include:
                  </h6>

                  <ul>
                    <li><i class="bi bi-check2-all"></i> <span>Loan approval</span></li>
                    <li><i class="bi bi-check2-all"></i> <span>Increased credit score</span></li>
                    <li><i class="bi bi-check2-all"></i> <span>Lower interest rates</span></li>
                    <li><i class="bi bi-check2-all"></i> <span>Lower fees</span></li>
                    <li><i class="bi bi-check2-all"></i> <span>Reduced repayments</span></li>
                    <li><i class="bi bi-check2-all"></i> <span>Thousands in savings</span></li>
                  </ul>
                </div>
                <div class="col-lg-6 order-1 order-lg-2 text-center">
                  <img src={DebtRemovalPic} alt="" class="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DebtRemoval;
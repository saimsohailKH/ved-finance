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
                    If you have bad credit, you understand how challenging it can be. From everyday purchases to future investments, your credit history can be a significant obstacle. The good news is that at VED, we work with a leading Debt Removal Agency that can help eliminate your bad credit, whether the account is outstanding or paid. They achieve this by identifying any breaches of legislation by the company that led to the negative listing against you.
                  </p>

                  <p class="fst-italic">
                    Once these defaults are removed, it becomes easier for you to regain financial security.
                  </p>

                  <h6>
                    The benefits of repairing your credit report may include:
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
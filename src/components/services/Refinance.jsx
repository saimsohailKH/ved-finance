import Breadcrumbs from "../breadcrumb";
import NavBar from "../navbar";
import RefinancePic from '../../assets/img/loans/rf.jpg'

function Refinance() {
  const links = [
    {
      title: 'Home',
      href: '/'
    },
    {
      title: 'Refinance / Debt Consolidation',
      href: ''
    }
  ]

  return (
    <>
      <NavBar currentPage='services' />
      <Breadcrumbs pageTitle='Refinance / Debt Consolidation' links={links} image={RefinancePic} />

      <section id="features" class="features section">
        <div class="container">
          <div class="tab-content" data-aos="fade-up" data-aos-delay="200">
            <div class="tab-pane fade active show" id="features-tab-1" role="tabpanel">
              <div class="row">
                <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                  <h3>Refinance / Debt Consolidation</h3>
                  <p class="fst-italic">
                    Do it again for your own good. Doing a health check on your current home loan and comparing it with what’s in the market can save you thousands. You stop paying more interest, rather we will find you a lender that’s got your best interest.
                  </p>

                  <h5>How does refinancing save you thousands?</h5>

                  <p>
                    Lesser repayments – You go on a better interest rate, meaning reduced repayments and more cashflow in the household.
                    Paying debt faster – Making sure your goals are aligned to your home loans, allowing you to make extra repayments and paying the debt off faster. Access to equity – With time, your home goes up in value. Refinancing can allow you access equity and use it to renovate your home, invest in another home, go on a holiday etc Consolidate Debts – This one is our favourite. Refinancing can allow you to consolidate debts like car loans, personal loans, credit cards into your home loan resulting in one payment a month and freed up cash.
                  </p>

                  <h5>A good example – Mr and Mrs A paying</h5>

                  <ul>
                    <li><i class="bi bi-check2-all"></i> <span>$2187 on a $500k home loan (@3.29%)</span></li>
                    <li><i class="bi bi-check2-all"></i> <span>$770 for a car loan ($45k balance)</span></li>
                    <li><i class="bi bi-check2-all"></i> <span>$900 for a personal loan ($40k balance)</span></li>
                    <li><i class="bi bi-check2-all"></i> <span>After refinancing all their debts at 2.49%</span></li>
                    <li><i class="bi bi-check2-all"></i> <span>$585k @2.49% = $2308 per month</span></li>
                    <li><i class="bi bi-check2-all"></i> <span>Freeing up $1549 per month or $18588 a year</span></li>
                  </ul>
                </div>
                <div class="col-lg-6 order-1 order-lg-2 text-center">
                  <img src={RefinancePic} alt="" class="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Refinance;
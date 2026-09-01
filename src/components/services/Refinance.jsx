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
                    Try again for your benefit. Conducting a health check on your current home loan and comparing it with market options may help reduce your interest costs. We can help you compare lenders on our panel to find an option suited to your circumstances.
                  </p>

                  <h5>How could refinancing help?</h5>

                  <p>
                    <b>Lower repayments:</b> Securing a better interest rate means reduced repayments, increasing your household cash flow.
                  </p>

                  <p>
                    <b>Faster debt repayment:</b> Aligning your goals with your home loan allows for extra repayments, helping you pay off the debt quicker.
                  </p>

                  <p>
                    <b>Access to equity:</b> Over time, your home's value increases. Refinancing can provide access to this equity, which can be used for renovations, investing in another property, or even taking a vacation.
                  </p>

                  <p>
                    <b>Debt consolidation:</b> This is our favorite. Refinancing can consolidate debts like car loans, personal loans, and credit cards into your home loan, resulting in a single monthly payment and freeing up cash.
                  </p>

                  <h5>A good example: Mr. and Mrs. A are paying</h5>

                  <ul>
                    <li><i class="bi bi-check2-all"></i> <span>A good example would be if you can combine all your repayments into one simple repayment and potentially increase your cashflow every month.</span></li>
                    <li><i class="bi bi-check2-all"></i> <span>In this process, we work towards a competitive rate and, where appropriate, consolidating debts to help you manage your repayments.</span></li>
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
import Breadcrumbs from "../breadcrumb";
import NavBar from "../navbar";
import personalLoanBg from '../../assets/img/loans/pl.jpg'
import LoanBg from '../../assets/img/hero-carousel/c2.jpeg'

function PersonalLoan() {
  const links = [
    {
      title: 'Home',
      href: '/'
    },
    {
      title: 'Personal Loans',
      href: ''
    }
  ]

  return (
    <>
      <NavBar currentPage='services' />
      <Breadcrumbs pageTitle='Personal Loans' links={links} image={LoanBg} />

      <section id="features" class="features section">
        <div class="container">
          <div class="tab-content" data-aos="fade-up" data-aos-delay="200">
            <div class="tab-pane fade active show" id="features-tab-1" role="tabpanel">
              <div class="row">
                <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                  <h3>Personal Loans</h3>
                  <p class="fst-italic">
                    Whatever stage of life we might be in, sometimes we need funds in a quick turnaround time.They could be for fixing a broken heater, buying household goods, funding a holiday, wedding, or an emergency medical expense. Personal loans are a quick solution and can help you get access to funds without touching your savings.
                  </p>

                  <p>
                    <b>Benefits – </b>
                    <br/>
                    – Not secured against any personal assets
                    <br/>
                    – Easy repayment options
                    <br/>
                    – No penalty (mostly) for paying it out early
                  </p>
                </div>
                <div class="col-lg-6 order-1 order-lg-2 text-center">
                  <img src={personalLoanBg} alt="" class="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PersonalLoan;
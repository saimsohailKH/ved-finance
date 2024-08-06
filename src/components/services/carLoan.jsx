import Breadcrumbs from "../breadcrumb";
import NavBar from "../navbar";
import carLoan from '../../assets/img/loans/cl.jpg';

function CarLoan() {
  const links = [
    {
      title: 'Home',
      href: '/'
    },
    {
      title: 'Car Loans',
      href: ''
    }
  ]

  return (
    <>
      <NavBar currentPage='services' />
      <Breadcrumbs pageTitle='Car Loans' links={links} image={carLoan} />

      <section id="features" class="features section">
        <div class="container">
          <div class="tab-content" data-aos="fade-up" data-aos-delay="200">
            <div class="tab-pane fade active show" id="features-tab-1" role="tabpanel">
              <div class="row">
                <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                  <h3>Car Loans</h3>
                  <p class="fst-italic">
                    It's wise to obtain pre-approval before visiting a dealership or committing to buying a vehicle. At VED, we have access to numerous lenders and can negotiate to secure the best deal for you, free from hidden costs and dealer pressure. With various car loans available for different customer and vehicle types, our panel of lenders ensures you get the best terms and a product tailored to your needs.
                  </p>

                  <p>
                    It’s good to get a pre-approval before you go to the dealer or commit someone to purchase their vehicle At VED, we have access to many lenders with whom we can negotiate and get you the best deal possible without any hidden costs and pressure from dealers.There are different car loans for different customer and vehicle types.This is where we and our panel of lenders come in to play. We make sure you are on the best terms and product suited to your needs. Loans can be Business or Personal (Consumer)
                  </p>
                </div>

                <div class="col-lg-6 order-1 order-lg-2 text-center">
                  <img src={carLoan} alt="" class="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CarLoan;
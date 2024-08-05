import Breadcrumbs from "../breadcrumb";
import NavBar from "../navbar";
import EquipmentLoanCover from '../../assets/img/loans/aq.jpg';
import EquipmentPic from '../../assets/img/loans/aqc.jpg';

function Equipment() {
  const links = [
    {
      title: 'Home',
      href: '/'
    },
    {
      title: 'ASSET / EQUIPMENT FINANCE',
      href: ''
    }
  ]

  return (
    <>
      <NavBar currentPage='services' />
      <Breadcrumbs pageTitle='ASSET / EQUIPMENT FINANCE' links={links} image={EquipmentLoanCover} />

      <section id="features" class="features section">
        <div class="container">
          <div class="tab-content" data-aos="fade-up" data-aos-delay="200">
            <div class="tab-pane fade active show" id="features-tab-1" role="tabpanel">
              <div class="row">
                <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                  <h3>ASSET/EQUIPMENT FINANCE</h3>
                  <p class="fst-italic">
                    Equipment Finance enables you to obtain financing for business equipment, machinery and vehicles (trucks and tractors). You can borrow up to 100 percent of the asset value over a fixed term and rate. It’s perfect for companies that are looking for flexible financing to improve productivity and expand their business.
                  </p>

                  <p class="fst-italic">
                    When it comes to purchasing assets or equipment’s for your business, it is really important to do your research with regards to the best suitable product as this will effect your business operations. A lot of businesses need machinery, equipment’s or vehicles to run their business and financing them can be the best option rather than using your working capital. Interest on business assets is an allowable expense.
                  </p>

                  <p>There are different document requirements from lenders depending on the asset (new or used) and age of the asset.</p>

                  <p>A lot of lenders these days do Lo-doc asset/equipment loans for businesses where loans are assessed just on self declaration. If you’re looking for secured finance for transport, construction, materials handling or earthmoving equipment, connect with us and we can get you an outcome with in 24 hours.</p>
                </div>

                <div class="col-lg-6 order-1 order-lg-2 text-center">
                  <img src={EquipmentPic} alt="" class="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Equipment;
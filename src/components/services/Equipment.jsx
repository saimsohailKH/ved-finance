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
                    Equipment Finance allows you to secure funding for business equipment, machinery, and vehicles (such as trucks and tractors). You can borrow up to 100% of the asset's value over a fixed term and rate. It's an ideal solution for companies seeking flexible financing to enhance productivity and grow their business.
                  </p>

                  <p class="fst-italic">
                    When purchasing assets or equipment for your business, it's crucial to research and choose the most suitable product, as this will impact your operations. Many businesses rely on machinery, equipment, or vehicles to operate effectively, and financing these assets can be a better option than depleting your working capital. Additionally, interest on business assets is considered an allowable expense.
                  </p>

                  <p>Lenders have varying document requirements based on the asset's type (new or used) and its age.</p>

                  <p>Many lenders now offer low-doc asset and equipment loans for businesses, where loans are evaluated based on self-declaration. If you need secured financing for transport, construction, materials handling, or earthmoving equipment, get in touch with us, and we can provide an outcome within 24 hours.</p>
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
import { services } from "../data/services";

function Services() {
  return (
    <section id="services" class="services section light-background">
      <div class="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>Our priority is to provide quality solutions that add value to our clients' lives.</p>
      </div>

      <div class="container">
        <div class="row d-flex justify-content-center gy-4">
          {
            services.map((service, index) => (
              <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100" key={index}>
                <div class="service-item  position-relative">
                  <div class="icon">
                    <i class={service.icon}></i>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href={`/service/${service.id}`} class="readmore stretched-link">Read more <i class="bi bi-arrow-right"></i></a>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Services;
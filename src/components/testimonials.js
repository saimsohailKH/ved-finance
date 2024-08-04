import { useEffect, useRef } from 'react';
// import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

function Testimonials() {
  const swiperContainerRef = useRef(null);
  const list = [
    {
      title: 'Singhwithclass',
      description: 'VED Finance Group has been an absolute game-changer for me. Amrinders expertise and dedication has made navigating complex financial decisions a breeze. Amrinder is not only knowledgeable but also incredibly supportive.'
    },
    {
      title: 'Manjoot Kooner',
      description: 'VED Finance Group has been an absolute game-changer for me. Amrinders expertise and dedication has made navigating complex financial decisions a breeze. Amrinder is not only knowledgeable but also incredibly supportive.'
    },
    {
      title: 'Charan Kamal',
      description: 'I recently had the pleasure of working with Amrinder Singh Broker from VED Finance Group, and I can confidently say that VED Finance Group have exceeded all my expectations.'
    },
    {
      title: 'Pushpinder Kaur',
      description: "Amrinder Singh has recently helped us secure our second home loan and I can't recommend him highly enough. He makes the whole process stress-free with very clear and timely communications."
    },
    {
      title: 'harman dhindsa',
      description: "My experience with VED finance was fantastic and Amrinder is so nice and very passionate towards his work. He always answer calls and ensures everyone must be clear about terms and conditions. I would highly recommend Amrinder as mortage broker. Best services ever"
    },
    {
      title: 'Ranjit Randhawa',
      description: 'Amrinder is professional and thorough and is always there to answer your questions! He endured to find us the best of options and helped us navigate the loan process smoothly.'
    },
    {
      title: 'Gagan Dhiman',
      description: 'Amrinder and the team at VED Finance Group are exceptional to work with and have a great understanding of lending and can tailor solutions accordingly. Highly recommend their services to anyone!'
    }
  ]

  useEffect(() => {
    // if (swiperContainerRef.current) {
    //   new Swiper(swiperContainerRef.current, {
    //     loop: true,
    //     speed: 600,
    //     autoplay: {
    //       delay: 5000,
    //     },
    //     slidesPerView: 'auto',
    //     pagination: {
    //       el: '.swiper-pagination',
    //       type: 'bullets',
    //       clickable: true,
    //     },
    //     breakpoints: {
    //       320: {
    //         slidesPerView: 1,
    //         spaceBetween: 40,
    //       },
    //       1200: {
    //         slidesPerView: 2,
    //         spaceBetween: 20,
    //       },
    //     },
    //   });
    // }
  }, [])

  return (
    <section id="testimonials" class="testimonials section">
      <div class="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>Read our Clients Feedback</p>
      </div>

      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="swiper init-swiper" ref={swiperContainerRef}>
          <div className="swiper-wrapper">
              < Swiper
                slidesPerView={2}
                modules={[Navigation, Pagination, Autoplay]}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                  type: 'bullets',
                }}
                loop={true}
              >
                {
                  list.map((element, index) => (
                    <SwiperSlide>
                      <div className="swiper-slide" key={index}>
                        <div className="testimonial-wrap">
                          <div className="testimonial-item">
                            <h3>{element.title}</h3>
                            <div className="stars">
                              <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                            </div>
                            <p>
                              <i className="bi bi-quote quote-icon-left"></i>
                              <span>{element.description}</span>
                              <i className="bi bi-quote quote-icon-right"></i>
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials;
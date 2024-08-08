import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

function Testimonials() {
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
    },
    {
      title: 'Shahmir Naqvi',
      description: 'Amrinder has been absolutely incredible with helping us with our first home loan. Everything from answering all questions, replying to emails very quickly and always making us feel important. I honestly cannot recommend him enough.'
    },
    {
      title: 'Srinivas R',
      description: 'Very professional Amrinder made  home buying process so easy and helped me understand what was happening every step of the way and got  best rates deal in the best possible way.'
    },
    {
      title: 'Preet Nafri',
      description: 'Couldn’t ask for a more helpful and supportive broker team! Interest rate increases were really getting to us, so we reached back out to Amrinder and the team at VED Finance Group who helped us to get a better deal. Super easy and very happy with their service!'
    },
    {
      title: 'Navkirat kaur',
      description: 'Amrinder and his team is professional and will get the job done. He got me the best deal in home loan and I would highly recommend him for any mortgage related services.'
    },
    {
      title: 'Gurpreet Kaur',
      description: 'Amrinder is a highly reliable and professional broker.He has provided us with timely assistance and always patiently responds to our questions promptly. People in need of loans can confidently work with him.He will go to the extra mile to assist you.'
    },
    {
      title: 'Yadwindr Aulakh',
      description: 'Mr. Singh has extensive knowledge of his industry. He has amazing service, he is supportive and provides hassle free service. Highly recommend to anyone who needs a finance broker.'
    },
    {
      title: 'shubham Thakur',
      description: 'We had a  great experience with  Amrinder. He is very professional and happily answered all our questions. Will definitely recommend him for finance requirements.'
    },
    {
      title: 'Goma Dangal',
      description: 'Just would like to say thank you for everything.you are the best.don’t have enough words to describe how wonderful you are.you deserve all the best.good luck for your future.once again thank you so much.'
    },
    {
      title: 'Navneet “Nav” Deo',
      description: 'Excellent service and competitive fee on my home loan. This guy will take your case professionally and give you the best advice during the process.  I have recommended several of my friends and they are all very very happy with the service and results.'
    },
    {
      title: 'Jaswinder Khurana',
      description: 'Not one actually many of my friends used their service. Amrinder and his team is very professional and they like to get the best deal for their clients. Keep up the good work guys. All the best.'
    },
    {
      title: 'GURPREET SINGH',
      description: 'I am very pleased with the service of VED finance group. They helped me a lot at every step. I highly recommend that if you need any support to get your loan done contact them asap.'
    },
    {
      title: 'Prajjun Reddy Nelakurthi',
      description: 'Such a great Team. Processed my home & Construction loan in 2 weeks time. They guided me step by step. I would definitely recommend VED Finance.'
    },
    {
      title: 'Ravi Bhatia',
      description: 'Amazing! The whole process was smooth and got car loan approved in no time. Thank you so much. Highly recommend if someone is looking for car loan.'
    },
    {
      title: 'Sunny Singh',
      description: 'Mr amrinder is best guy to deal with. The way he explains about every situation is so easy to understand every expect of loans and market. Will recommened to everyone and will go back to him in future.'
    }
  ]

  return (
    <section id="testimonials" class="testimonials section">
      <div class="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>Read our Clients Feedback</p>
      </div>

      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="swiper init-swiper">
          <div className="swiper-wrapper">
              < Swiper
                loop={true}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                  },
                  640: {
                    slidesPerView: 1,
                  },
                  1024: {
                    slidesPerView: 2,
                  },
                }}
                modules={[Navigation, Pagination, Autoplay]}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                  type: 'bullets',
                }}
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
function OurProcess() {
  const list = [
    {
      title: 'Step 1',
      description: 'Contact us via the form.',
    },
    {
      title: 'Step 2',
      description: 'Book a meeting.​'
    },
    {
      title: 'Step 3',
      description: 'Ask tons of questions.'
    },
    {
      title: 'Step 4',
      description: 'Get straight forward answers.'
    },
    {
      title: 'Step 5',
      description: 'Formulate a winning strategy.'
    }
  ]

  return (
    <section id="stats-counter" class="stats-counter section light-background">
      <div class="container section-title" data-aos="fade-up">
        <h2>Our Process</h2>
        <p>Right from the initial consultation , you will feel you dealt with someone who knows what they are doing and understand your scenario. Your best interests are our priority.</p>
      </div>

      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row d-flex justify-content-center gy-4">
          {
            list.map((element, index) => (
              <div class="col-lg-3 col-md-6" key={index}>
                <div class="stats-item w-100 h-100">
                  <h5 class="color-blue flex-shrink-0">{element.title}</h5>
                  <p>{element.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default OurProcess;
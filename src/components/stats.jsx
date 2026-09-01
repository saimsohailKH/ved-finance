import { PureIncrement } from 'pure_counter';

function Stats() {
  return (
    <section id="stats-counter" class="stats-counter section">
      <div class="container section-title" data-aos="fade-up">
        <h2>Stats</h2>
        <p>A snapshot of our experience and the clients we have supported.</p>
      </div>

      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row d-flex justify-content-center gy-4">
          <div class="col-lg-3 col-md-6">
            <div class="stats-item d-flex align-items-center w-100 h-100">
              <i class="bi bi-emoji-smile color-blue flex-shrink-0"></i>
              <div>
                <PureIncrement start={0} end={8} duration={3} className="purecounter purecounter-plus" />
                <p>Years of Experience</p>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div class="stats-item d-flex align-items-center w-100 h-100">
              <i class="bi bi-headset color-green flex-shrink-0"></i>
              <div>
                <PureIncrement start={0} end={300} duration={3} className="purecounter purecounter-plus" />
                <p>Happy Customers</p>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div class="stats-item d-flex align-items-center w-100 h-100">
              <i class="bi bi-people color-pink flex-shrink-0"></i>
              <div>
                <p>Access to a panel of lenders</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
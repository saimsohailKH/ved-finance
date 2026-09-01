import { services } from '../data/services';

function Footer() {
  return (
    <footer id="footer" class="footer dark-background">
      <div class="container footer-top">
        <div class="row gy-4">
          <div class="col-lg-3 col-md-6 footer-about">
            <a href="index.html" class="logo d-flex align-items-center">
              <span class="sitename">VED Finance</span>
            </a>
            <div class="footer-contact pt-3">
              <p>Address - 1042 Western Hwy</p>
              <p>Caroline Springs, VIC - 3023</p>
              <p class="mt-3"><strong>Phone:</strong> <a href="tel:+61433892312">0433 892 312</a></p>
              <p><strong>Email:</strong> <a href="mailto:info@vedfinancegroup.com">info@vedfinancegroup.com</a></p>
            </div>
            <div class="social-links d-flex mt-4">
              <a href="https://www.facebook.com/profile.php?id=61577894364261" target="_blank" rel="noreferrer"><i class="bi bi-facebook"></i></a>
              <a href="https://www.instagram.com/vedfinancegroup/" target="_blank" rel="noreferrer"><i class="bi bi-instagram"></i></a>
              <a href="https://www.linkedin.com/in/amrinder-singh-3285565a/" target="_blank" rel="noreferrer"><i class="bi bi-linkedin"></i></a>
            </div>
          </div>

          <div class="col-lg-3 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About us</a></li>
              <li><a href="/services">Services</a></li>
              {/* TODO: Terms of service still needs a real page */}
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <li><a href="#">Terms of service</a></li>
              <li><a href="/privacy-policy">Privacy policy</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-3 footer-links">
            <h4>Our Services</h4>
            <ul>
              {
                services.map((s, index) => (
                  <li key={index}><a href={`/service/${s.id}`}>{s.title}</a></li>
                ))
              }
            </ul>
          </div>

          <div class="col-lg-3 col-md-3 footer-links">
            <div className="footer-contact pt-3">
              <p><b>Disclaimer: </b>VED Finance Group is a registered business name of The Trustee for Aneja Family Trust (ABN 44 570 871 137). Amrinder Singh, Credit Representative Number 504743, is authorised under Australian Credit Licence 384324 held by outsource Financial Pty Ltd (ACN 131 090 705). Your complete financial situation will need to be assessed before acceptance of any proposal or product.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="container copyright text-center mt-4">
        <p>© <span>Copyright</span> <strong class="px-1 sitename">{new Date().getFullYear()} VED Finance Group | ABN 44 570 871 137</strong> <span>All Rights Reserved</span></p>
        <div class="credits">
          Designed by Sprial Square
        </div>
      </div>
    </footer>
  )
}

export default Footer;
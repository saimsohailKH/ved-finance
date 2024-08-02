function Footer() {
  return (
    <footer id="footer" class="footer dark-background">
      <div class="container footer-top">
        <div class="row gy-4">
          <div class="col-lg-5 col-md-6 footer-about">
            <a href="index.html" class="logo d-flex align-items-center">
              <span class="sitename">VED Finance</span>
            </a>
            <div class="footer-contact pt-3">
              <p>A108 Adam Street</p>
              <p>New York, NY 535022</p>
              <p class="mt-3"><strong>Phone:</strong> <span>+61 433 892 312</span></p>
              <p><strong>Email:</strong> <span>info@vedfinancegroup.com</span></p>
            </div>
            <div class="social-links d-flex mt-4">
              <a href=""><i class="bi bi-twitter-x"></i></a>
              <a href=""><i class="bi bi-facebook"></i></a>
              <a href=""><i class="bi bi-instagram"></i></a>
              <a href=""><i class="bi bi-linkedin"></i></a>
            </div>
          </div>

          <div class="col-lg-3 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="#">Terms of service</a></li>
              <li><a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-3 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><a href="/services">Hospital Loans</a></li>
              <li><a href="/services">Contractor Loans</a></li>
              <li><a href="/services">Unsecured Business Loans</a></li>
              <li><a href="/services">Supplier Fianance</a></li>
              <li><a href="/services">Home Loans</a></li>
              <li><a href="/services">Loan Against Special Properties</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="container copyright text-center mt-4">
        <p>© <span>Copyright</span> <strong class="px-1 sitename">VED Finance</strong> <span>All Rights Reserved</span></p>
        <div class="credits">
          Designed by Sprial Square
        </div>
      </div>
    </footer>
  )
}

export default Footer;
import { useEffect } from 'react';
import '../App.css';
import Logo from '../assets/img/logo.png'

const toggleScrolled = () => {
  const selectBody = document.querySelector('body');
  const selectHeader = document.querySelector('#header');
  if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
  window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
}

const mobileNavToogle = () => {
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
  document.querySelector('body').classList.toggle('mobile-nav-active');
  mobileNavToggleBtn.classList.toggle('bi-list');
  mobileNavToggleBtn.classList.toggle('bi-x');
}

function NavBar(props) {
  const { currentPage } = props;

  useEffect(() => {
    document.addEventListener('scroll', toggleScrolled);
    window.addEventListener('load', toggleScrolled);

    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
    mobileNavToogle()
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

    document.querySelectorAll('#navmenu a').forEach(navmenu => {
      navmenu.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
          mobileNavToogle();
        }
      });
    });

    document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
      navmenu.addEventListener('click', function(e) {
        e.preventDefault();
        this.parentNode.classList.toggle('active');
        this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
        e.stopImmediatePropagation();
      });
    });
  }, [])

  const activePage = (path) => {
    return path === currentPage ? 'active' : ''
  }

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

        <a href="/" className="logo d-flex align-items-center">
          <img src={Logo} alt="" />
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li><a href="/" className={activePage('home')}>Home</a></li>
            <li class="dropdown"><a href="#" className={activePage('services')}><span>Our Services</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
              <ul>
                <li class="dropdown"><a href="#"><span>For Individuals</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                  <ul>
                    <li><a href="/service/1">Home Loan</a></li>
                    <li><a href="/service/2">Personal Loan</a></li>
                    <li><a href="/service/3">Car Loan</a></li>
                    <li><a href="/service/4">Refinance / Debt Consolidation</a></li>
                  </ul>
                </li>
                <li class="dropdown"><a href="#"><span>For Corporates</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                  <ul>
                    <li><a href="/service/5">Commercial Loans</a></li>
                    <li><a href="/service/6">Cash Flow Lending</a></li>
                    <li><a href="/service/7">Asset / Equipment Finance</a></li>
                    <li><a href="/service/8">Line of credit / Business Overdraft</a></li>
                    <li><a href="/service/9">LO Doc Loan</a></li>
                  </ul>
                </li>
                <li><a href="/service/10">Debt Removal</a></li>
                <li><a href="/service/11">SMSF Loans</a></li>
              </ul>
            </li>
            <li><a href="/about" className={activePage('about')}>About</a></li>
            <li><a href="/process" className={activePage('process')}>Our process</a></li>
            <li><a href="/contact" className={activePage('contact')}>Contact</a></li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
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
  }, [])

  const activePage = (path) => {
    return path === currentPage ? 'active' : ''
  }

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

        <a href="/" className="logo d-flex align-items-center">
          <img src={Logo} alt="" />
          {/* <h1 className="sitename">VED Finance Group</h1> <span>.</span> */}
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li><a href="/" className={activePage('home')}>Home</a></li>
            <li><a href="/about" className={activePage('about')}>About</a></li>
            <li><a href="/services" className={activePage('services')}>Our Services</a></li>
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
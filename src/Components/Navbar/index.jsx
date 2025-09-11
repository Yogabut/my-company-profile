import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const navigation = [
  { name: 'Home', id: '/', section: 'hero', current: false },
  { name: 'About', id: '/#about', section: 'about', current: false },
  { name: 'Services', id: '/#services', section: 'services', current: false },
  { name: 'Project', id: '/#project', section: 'project', current: false },
  { name: 'Contact', id: '/#contact', section: 'contact', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('hero');

  const handleNavigation = (item) => {
    // Jika sudah di halaman home dan item memiliki section
    if (location.pathname === '/' && item.section) {
      const element = document.getElementById(item.section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Update URL hash tanpa reload
        window.history.pushState(null, '', `#${item.section}`);
        return;
      }
    }

    // Jika tidak di halaman home tapi item memiliki section
    if (location.pathname !== '/' && item.section) {
      navigate('/', { replace: false });
      // Set timeout untuk menunggu halaman load
      setTimeout(() => {
        const element = document.getElementById(item.section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          window.history.pushState(null, '', `#${item.section}`);
        }
      }, 100);
      return;
    }
  };

  // Intersection Observer untuk mendeteksi section yang sedang aktif
  useEffect(() => {
    // Hanya jalankan di halaman home
    if (location.pathname !== '/') {
      setActiveSection('');
      return;
    }

    const sections = navigation
      .filter((item) => item.section)
      .map((item) => item.section);

    const observerOptions = {
      // Ubah rootMargin agar lebih fleksibel
      rootMargin: '-10% 0px -60% 0px',
      // Naikkan threshold untuk deteksi yang lebih baik
      threshold: [0, 0.1, 0.25, 0.5],
    };

    const observerCallback = (entries) => {
      // Cari entry yang paling visible
      const visibleEntries = entries.filter(entry => entry.isIntersecting);
      
      if (visibleEntries.length > 0) {
        // Ambil section yang paling banyak terlihat
        const mostVisible = visibleEntries.reduce((prev, current) => {
          return current.intersectionRatio > prev.intersectionRatio ? current : prev;
        });
        
        setActiveSection(mostVisible.target.id);
        window.history.replaceState(null, '', `#${mostVisible.target.id}`);
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    // Handle scroll untuk hero section dan fallback detection
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Jika di paling atas, set ke hero
      if (scrollY < 100) {
        setActiveSection('hero');
        window.history.replaceState(null, '', '/');
        return;
      }

      // Fallback manual detection jika observer gagal
      let currentSection = 'hero';
      
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + scrollY;
          
          // Jika section ini sudah terlewati sebagian, anggap aktif
          if (scrollY >= elementTop - 200) {
            currentSection = sectionId;
          }
        }
      });

      // Update jika berbeda dari yang sekarang
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
        if (currentSection === 'hero') {
          window.history.replaceState(null, '', '/');
        } else {
          window.history.replaceState(null, '', `#${currentSection}`);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname, activeSection]);

  // Handle hash navigation saat component mount
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const sectionId = location.hash.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setActiveSection(sectionId);
        }, 100);
      }
    } else if (location.pathname === '/' && !location.hash) {
      setActiveSection('hero');
    }
  }, [location.pathname, location.hash]);

  const isActive = (item) => {
    if (location.pathname === '/') {
      if (item.section === 'hero' || (item.name === 'Home' && !activeSection)) {
        return activeSection === 'hero' || activeSection === '';
      }
      return item.section === activeSection;
    }

    // Untuk halaman lain, check berdasarkan pathname
    return location.pathname === item.id;
  };

  return (
    <Disclosure as="nav" className="bg-[#050119]/20 fixed top-0 z-50 w-full backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Desktop */}
          <div className="hidden sm:flex md:flex-1 md:items-end md:justify-end">
            <div className="absolute left-0 flex items-center pl-2">
              <button 
                onClick={() => {
                  navigate('/');
                  setActiveSection('');
                }}
                className="focus:outline-none"
              >
                <img
                  className="h-40 w-auto cursor-pointer"
                  src="/asset/logo-Navbar.png"
                  alt="Your Company"
                />
              </button>
            </div>

            <div className="flex space-x-6 items-center justify-center">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item)}
                  className={classNames(
                    isActive(item)
                      ? 'text-white bg-white/10 backdrop-blur-md border border-white/20 shadow-lg'
                      : 'text-[#bcbcbc] hover:text-[#ffffff] hover:bg-white/5',
                    'transition duration-300 rounded-lg px-4 py-2 text-sm font-medium focus:outline-none'
                  )}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile */}
          <div className="flex sm:hidden w-full items-end justify-end">
            <div className="absolute left-2 flex items-center">
              <button 
                onClick={() => {
                  navigate('/');
                  setActiveSection('hero');
                }}
                className="focus:outline-none"
              >
                <img
                  className="h-30 w-auto cursor-pointer"
                  src="/asset/logo-Navbar.png"
                  alt="Your Company"
                />
              </button>
            </div>

            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white focus:outline-none">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      {/* Mobile panel */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3 bg-[#19123d]/90 backdrop-blur-md">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="button"
              onClick={() => handleNavigation(item)}
              className={classNames(
                isActive(item)
                  ? 'text-white bg-white/10 backdrop-blur-md border border-white/20 shadow-lg'
                  : 'text-[#bcbcbc] hover:text-[#ffffff] hover:bg-white/5',
                'transition duration-300 w-full text-left block rounded-lg px-3 py-2 text-base font-medium focus:outline-none'
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
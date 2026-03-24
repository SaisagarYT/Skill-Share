import Container from '../common/Container';
import { Icon } from '@iconify/react';
import { useState } from 'react';

export default function Navbar() {
  const [pagesOpen, setPagesOpen] = useState(false);

  const pagesMenu = [
    'About Us',
    'Our Services',
    'Single Service',
    'Our Team',
    'Single Team',
    'Pricing Table',
    'Career Page',
    'Career Details',
    'Shop',
    'Contact Us',
    'FAQs',
    '404 Error',
    'Coming Soon',
  ];

  return (
    <header className="w-full absolute top-0 left-0 z-20">
      <div className="w-full flex justify-center pt-6">
        <Container className="flex items-center justify-between p-0 min-w-0">
          <div className="flex items-center gap-2 min-w-0">
            <span className="inline-block w-8 h-8 rounded-full bg-dark shrink-0" />
            <span className="text-2xl font-bold text-heading tracking-tight whitespace-nowrap">
              Sasico
            </span>
          </div>

          {/* Nav tabs */}
          <nav className="hidden md:flex gap-2 text-base font-medium text-dark/80">
            <div className="flex gap-2 bg-white/95 border border-white rounded-full px-2 py-1 shadow-sm relative">

              <a
                href="#"
                className="bg-dark/10 text-dark px-6 py-2 rounded-full font-semibold transition border-2 border-white shadow-sm"
                style={{ boxShadow: '0 0 0 3px #f3f3f3' }}
              >
                Home
              </a>

              {/* Pages Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setPagesOpen(true)}
                onMouseLeave={() => setPagesOpen(false)}
              >
                <button
                  type="button"
                  className="hover:bg-dark/5 hover:text-dark px-6 py-2 rounded-full transition flex items-center gap-1"
                  aria-haspopup="true"
                  aria-expanded={pagesOpen}
                >
                  Pages <span className="ml-1">▼</span>
                </button>

                {pagesOpen && (
                  <div className="absolute left-1/2 top-[110%] -translate-x-1/2 w-64 rounded-2xl bg-white/90 shadow-xl border border-[#ededed] py-4 px-0 flex flex-col gap-1 z-50 backdrop-blur">
                    {pagesMenu.map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="px-6 py-2 text-[1rem] text-dark/90 hover:bg-dark/5 rounded-lg text-left transition flex items-center justify-between"
                      >
                        {item}
                        {item === 'Shop' && (
                          <Icon
                            icon="ic:round-arrow-forward-ios"
                            width={16}
                            height={16}
                            className="text-dark/40 ml-2"
                          />
                        )}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="#"
                className="px-6 py-2 rounded-full transition border-2 border-transparent hover:bg-dark/10 hover:text-dark hover:border-[#e5e5e5] hover:shadow-md focus:outline-none"
              >
                Blog <span className="ml-1">▼</span>
              </a>

              <a
                href="#"
                className="px-6 py-2 rounded-full transition border-2 border-transparent hover:bg-dark/10 hover:text-dark hover:border-[#e5e5e5] hover:shadow-md focus:outline-none"
              >
                Portfolio <span className="ml-1">▼</span>
              </a>

              <a
                href="#"
                className="px-6 py-2 rounded-full transition border-2 border-transparent hover:bg-dark/10 hover:text-dark hover:border-[#e5e5e5] hover:shadow-md focus:outline-none"
              >
                Solutions
              </a>

              <a
                href="#"
                className="px-6 py-2 rounded-full transition border-2 border-transparent hover:bg-dark/10 hover:text-dark hover:border-[#e5e5e5] hover:shadow-md focus:outline-none"
              >
                Pricing
              </a>
            </div>
          </nav>

          <div className="flex gap-2 items-center">
            <a
              href="#"
              className="flex items-center h-9 px-4 rounded-full border border-[#ededed] bg-white font-normal text-dark transition hover:bg-gray-50 text-base"
            >
              Log In
              <span className="inline-flex items-center justify-center w-7 h-7 ml-2 rounded-full bg-[#b0ffb3]">
                <Icon
                  icon="ic:round-arrow-forward"
                  className="text-dark"
                  width={16}
                  height={16}
                />
              </span>
            </a>

            <a
              href="#"
              className="flex items-center h-9 px-4 rounded-full bg-[#b0ffb3] font-semibold text-dark transition hover:bg-accent/80 text-base"
            >
              Sign Up
              <span className="inline-flex items-center justify-center w-7 h-7 ml-2 rounded-full bg-black">
                <Icon
                  icon="ic:round-arrow-forward"
                  className="text-white"
                  width={16}
                  height={16}
                />
              </span>
            </a>
          </div>
        </Container>
      </div>
    </header>
  );
}
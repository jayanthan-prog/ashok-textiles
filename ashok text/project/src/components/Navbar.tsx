import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const navItems = [
  { href: '#about', label: 'Home' },
  {
    label: 'About Us',
    submenu: [
      { href: '#management', label: 'Management' },
      { href: '#ashok-textile', label: 'About Ashok Textile' },
      { href: '#why-ashok-textiles', label: 'Why Ashok Textiles' },
    ],
  },
  {
    label: 'Infrastructure',
    submenu: [
      { href: '#spinning', label: 'Spinning' },
      { href: '#sizing', label: 'Sizing' },
      { href: '#weaving', label: 'Weaving' },
      { href: '#made-ups', label: 'Made-ups' },
    ],
  },
  { href: '#products', label: 'Products' },
  { href: '#quality', label: 'Quality' },
  { href: '#csr', label: 'CSR' },
  { href: '#career', label: 'Career' },
  { href: '#contact', label: 'Contact Us' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});
  const [activeLink, setActiveLink] = useState('');
  const [activeSection, setActiveSection] = useState(''); // Track active section

  const toggleDropdown = (index) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleLinkClick = (href) => {
    setActiveLink(href);
    setActiveSection(href); // Set the active section
    setIsOpen(false); // Close the menu on mobile after selecting a link
  };

  return (
    <nav className="bg-[#001f3d] shadow-lg fixed w-full z-50 border-b border-[#FFD700]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-start items-center h-24">
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#001f3d] to-[#4b6c8f] shadow-lg">
              <img
                src="https://ashoktextilemills.com/file/wp-content/uploads/2023/03/Ashok-Final-Logo-2.png"
                alt="Ashok Textile Mills Logo"
                className="w-12 h-12 object-contain"
              />
            </div>
            <span className="text-lg font-medium text-white tracking-wide">
              Ashok Textile Mills
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-10 ml-auto">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <button
                  onClick={() => {
                    if (item.submenu) {
                      toggleDropdown(index); // Toggle the dropdown if submenu exists
                    } else {
                      handleLinkClick(item.href || ''); // Handle regular links
                    }
                  }}
                  className={`text-white text-lg font-medium tracking-wide hover:text-[#FFD700] transition-all duration-300 flex items-center ${
                    activeLink === item.href ? 'text-[#FFD700] glitter-effect' : ''
                  }`}
                >
                  {item.label}
                  {item.submenu && <ChevronDown className="ml-2 transition-all duration-300 transform group-hover:rotate-180" />}
                </button>

                {/* Dropdown submenu */}
                {item.submenu && dropdownOpen[index] && (
                  <div className="absolute mt-2 w-48 bg-[#001f3d] bg-opacity-90 border border-[#FFD700] rounded-lg shadow-xl py-2 z-50 transform scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-in-out">
                    {item.submenu.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.href}
                        className={`block px-4 py-3 text-white hover:text-[#FFD700] hover:bg-[#4b6c8f] rounded-lg transition-all duration-300 ${
                          activeLink === subItem.href ? 'text-[#FFD700]' : ''
                        }`}
                        onClick={() => handleLinkClick(subItem.href)}
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="md:hidden flex items-center ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#FFD700] transition duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-10 w-10 transition-all duration-300 transform rotate-180" /> : <Menu className="h-10 w-10 transition-all duration-300" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-[#001f3d] bg-opacity-90 border-t border-[#FFD700] shadow-xl">
          <div className="px-6 pt-6 pb-8 space-y-6">
            {navItems.map((item, index) => (
              <div key={index}>
                <a
                  href={item.href}
                  className={`block text-lg font-medium text-white hover:text-[#FFD700] hover:bg-[#4b6c8f] px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeLink === item.href ? 'text-[#FFD700] glitter-effect' : ''
                  }`}
                  onClick={() => {
                    handleLinkClick(item.href);
                    setIsOpen(false);
                  }}
                >
                  {item.label}
                </a>
                {item.submenu && (
                  <div className="pl-4 space-y-3">
                    {item.submenu.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.href}
                        className={`block text-lg font-medium text-white hover:text-[#FFD700] hover:bg-[#4b6c8f] px-4 py-3 rounded-lg transition-all duration-300 ${
                          activeLink === subItem.href ? 'text-[#FFD700]' : ''
                        }`}
                        onClick={() => {
                          handleLinkClick(subItem.href);
                          setIsOpen(false);
                        }}
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

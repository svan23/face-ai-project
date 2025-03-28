import { Link } from "react-router-dom";
import { FaRegFaceSmile, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container">
        {/* Gradient Accent */}
        <div className="position-relative mb-4">
          <div className="position-absolute w-100" style={{ height: "3px", top: "-10px", 
            background: "linear-gradient(to right, #8F87F1, #C68EFD, #E9A5F1)" }}></div>
        </div>
        
        <div className="row g-4">
          {/* Brand Column */}
          <div className="col-md-5 mb-3 mb-md-0">
            <div className="d-flex align-items-center mb-2">
              <FaRegFaceSmile className="fs-4 text-primary me-2" />
              <h5 className="fw-bold mb-0">TwinFace AI</h5>
            </div>
            <p className="text-white-50 mb-3 small">
              Find your celebrity doppelgänger with our advanced AI facial comparison technology.
            </p>
            <div className="d-flex gap-2">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.link} className="social-icon-link">
                  <social.icon />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-md-3 mb-3 mb-md-0">
            <h6 className="mb-2 fw-bold small text-uppercase">Navigation</h6>
            <ul className="list-unstyled mb-0 small">
              {quickLinks.map((link, index) => (
                <li key={index} className="mb-1">
                  <Link to={link.to} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="col-md-4">
            <h6 className="mb-2 fw-bold small text-uppercase">Contact Us</h6>
            <ul className="list-unstyled mb-0 small">
              <li className="mb-1">
                <a href="mailto:hello@twinface.ai" className="footer-link">hello@twinface.ai</a>
              </li>
              <li className="mb-1">
                <a href="tel:+11234567890" className="footer-link">+1 (123) 456-7890</a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-secondary my-3 opacity-25" />
        
        <div className="text-center">
          <p className="small mb-0 text-white-50">&copy; {currentYear} TwinFace AI. All rights reserved.</p>
        </div>
      </div>
      
      {/* Simplified CSS */}
      <style>
        {`
        .footer-link {
          color: rgba(255, 255, 255, 0.5);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        
        .footer-link:hover {
          color: white;
        }
        
        .social-icon-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.6);
          transition: all 0.2s ease;
        }
        
        .social-icon-link:hover {
          background-color: rgba(198, 142, 253, 0.3);
          color: white;
        }
        `}
      </style>
    </footer>
  );
};

// Simplified data arrays
const socialLinks = [
  { icon: FaFacebook, link: "#" },
  { icon: FaTwitter, link: "#" },
  { icon: FaInstagram, link: "#" },
  { icon: FaLinkedin, link: "#" }
];

const quickLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Pricing", to: "/pricing" },
  { name: "Contact", to: "/contact" },
  { name: "Privacy Policy", to: "/privacy" }
];

export default Footer;
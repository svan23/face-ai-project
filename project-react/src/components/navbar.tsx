import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-gradient-hero shadow-sm fixed-top">
      <div className="container">
        <Link to="/" className="navbar-brand d-flex align-items-center">
        <i className="bi bi-stars fs-3 text-gradient-pink me-2"></i>
          <span className="fw-bold">FaceAI Comparison</span>
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="/pricing" className="nav-link">Pricing</Link>
            </li>
            <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
              <Link to="/try-now" className="btn btn-light btn-sm rounded-pill px-3 fw-medium text-indigo-700">
                Try Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
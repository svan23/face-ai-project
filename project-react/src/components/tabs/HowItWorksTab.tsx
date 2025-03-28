import React from 'react';

const HowItWorksTab: React.FC = () => {
  return (
    <div className="mb-4">
      <h2 className="d-flex align-items-center">
        <i className="bi bi-cpu text-purple-500 me-2"></i>
        How Our AI Face Comparison Works
      </h2>
      <div className="gradient-divider"></div>
      <p className="lead text-secondary">
        Our advanced AI technology analyzes your uploaded face image, extracting unique facial features 
        to identify similar faces from our database. The system maps facial landmarks to create a 
        digital signature, then compares it against thousands of entries to find potential matches 
        with similar facial characteristics.
      </p>
      
      <div className="text-center mb-4">
        <i className="bi bi-github fs-1 text-dark opacity-75 mb-3"></i>
        <p className="text-muted">
          This project is open source and available on GitHub.<br/>
          Feel free to contribute or explore the codebase.
        </p>
      </div>
    </div>
  );
};

export default HowItWorksTab;
import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <div className="text-center py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h3 className="mb-4">Ready to Get Started?</h3>
          <p className="text-muted mb-4">Join thousands of users who are already using our facial recognition technology.</p>
          <a href="#upload-section" className="btn btn-primary rounded-pill px-4 py-2">
            Try Now For Free
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
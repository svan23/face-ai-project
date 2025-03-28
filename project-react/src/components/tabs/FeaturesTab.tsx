import React from 'react';

const FeaturesTab: React.FC = () => {
  return (
    <div className="row g-4">
      <div className="col-md-4">
        <div className="card h-100 border-0 bg-gradient-to-br from-periwinkle-50 to-periwinkle-100 rounded-3 feature-card">
          <div className="card-body p-4">
            <div className="rounded-circle d-flex align-items-center justify-content-center mb-3 bg-primary bg-opacity-10 feature-icon-wrapper">
              <i className="bi bi-search fs-4 text-primary"></i>
            </div>
            <h3 className="h5 fw-semibold mb-2">Advanced Recognition</h3>
            <p className="card-text text-secondary mb-0">Our AI identifies and maps 128 unique facial features with precision for accurate matching</p>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card h-100 border-0 bg-gradient-to-br from-purple-50 to-purple-100 rounded-3 feature-card">
          <div className="card-body p-4">
            <div className="rounded-circle d-flex align-items-center justify-content-center mb-3 bg-purple-500 bg-opacity-10 feature-icon-wrapper">
              <i className="bi bi-cpu fs-4 text-purple-600"></i>
            </div>
            <h3 className="h5 fw-semibold mb-2">Neural Networks</h3>
            <p className="card-text text-secondary mb-0">Deep learning models trained on millions of faces ensure high accuracy and performance</p>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card h-100 border-0 bg-gradient-to-br from-pink-50 to-pink-100 rounded-3 feature-card">
          <div className="card-body p-4">
            <div className="rounded-circle d-flex align-items-center justify-content-center mb-3 bg-indigo-500 bg-opacity-10 feature-icon-wrapper">
              <i className="bi bi-shield-lock fs-4 text-indigo-600"></i>
            </div>
            <h3 className="h5 fw-semibold mb-2">Privacy Focused</h3>
            <p className="card-text text-secondary mb-0">Your images are processed securely and never stored, ensuring complete privacy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesTab;
import React from 'react';

const ApplicationsTab: React.FC = () => {
  return (
    <>
      <div className="mb-4">
        <h2>Real-World Applications</h2>
        <div className="gradient-divider"></div>
        <p className="lead text-secondary">
          Our face comparison technology can be applied in various domains including:
        </p>
      </div>

      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card h-100 border-0 bg-light rounded-3 feature-card">
            <div className="card-body p-4">
              <div className="d-flex">
                <div className="flex-shrink-0 me-3 text-primary">
                  <i className="bi bi-patch-check fs-4"></i>
                </div>
                <div>
                  <h5 className="fw-semibold">Identity Verification</h5>
                  <p className="text-secondary small mb-0">Secure access to buildings, devices, and applications using facial verification</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 border-0 bg-light rounded-3 feature-card">
            <div className="card-body p-4">
              <div className="d-flex">
                <div className="flex-shrink-0 me-3 text-primary">
                  <i className="bi bi-people fs-4"></i>
                </div>
                <div>
                  <h5 className="fw-semibold">Find Similar Faces</h5>
                  <p className="text-secondary small mb-0">Locate similar-looking individuals in large databases or photo collections</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="alert alert-warning border-start border-warning border-4 mt-4">
        <div className="d-flex">
          <div className="flex-shrink-0">
            <i className="bi bi-exclamation-triangle text-warning fs-5"></i>
          </div>
          <div className="ms-3">
            <h5 className="alert-heading h6">Ethical Use Note</h5>
            <p className="mb-0 small">
              This technology should be used responsibly and with proper consent from individuals whose faces are being analyzed. Always adhere to applicable privacy laws and regulations in your jurisdiction.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicationsTab;
import React, { useState } from 'react';
import HowItWorksTab from './tabs/HowItWorksTab';
import FeaturesTab from './tabs/FeaturesTab';
import ApplicationsTab from './tabs/ApplicationsTab';

const InformationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("how-it-works");

  return (
    <div className="card border-0 rounded-4 shadow">
      <div className="card-body p-4 p-md-5">
        {/* Tabs Navigation */}
        <ul className="nav nav-tabs mb-4">
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 'how-it-works' ? 'active' : ''}`}
              onClick={() => setActiveTab('how-it-works')}
            >
              How It Works
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 'features' ? 'active' : ''}`}
              onClick={() => setActiveTab('features')}
            >
              Features
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 'applications' ? 'active' : ''}`}
              onClick={() => setActiveTab('applications')}
            >
              Applications
            </button>
          </li>
        </ul>

        {/* Tab Content */}
        <div className="tab-content">
          <div className={`tab-pane fade ${activeTab === 'how-it-works' ? 'show active' : ''}`}>
            <HowItWorksTab />
          </div>
          <div className={`tab-pane fade ${activeTab === 'features' ? 'show active' : ''}`}>
            <FeaturesTab />
          </div>
          <div className={`tab-pane fade ${activeTab === 'applications' ? 'show active' : ''}`}>
            <ApplicationsTab />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationSection;
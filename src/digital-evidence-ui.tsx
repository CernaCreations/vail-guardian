import React, { useState } from 'react';
import { Shield, HardDrive, Database, Search } from 'lucide-react';
import DashboardView from './DashboardView';
import CollectionView from './CollectionView';
import AnalysisView from './AnalysisView';

const DigitalEvidenceUI = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-xl font-semibold text-gray-900">VAIL Guardian</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">Officer: John Smith</span>
              <span className="text-sm text-gray-500">Badge: 12345</span>
            </div>
          </div>
        </div>
      </nav>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6 flex space-x-4">
          <button
            className={`px-4 py-2 rounded-md font-medium focus:outline-none ${activeTab === 'dashboard' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-600'}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <Database className="inline-block h-5 w-5 mr-2" /> Dashboard
          </button>
          <button
            className={`px-4 py-2 rounded-md font-medium focus:outline-none ${activeTab === 'collection' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-600'}`}
            onClick={() => setActiveTab('collection')}
          >
            <HardDrive className="inline-block h-5 w-5 mr-2" /> Collection
          </button>
          <button
            className={`px-4 py-2 rounded-md font-medium focus:outline-none ${activeTab === 'analysis' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-600'}`}
            onClick={() => setActiveTab('analysis')}
          >
            <Search className="inline-block h-5 w-5 mr-2" /> Activity
          </button>
        </div>
        <div>
          {activeTab === 'dashboard' && <DashboardView />}
          {activeTab === 'collection' && <CollectionView />}
          {activeTab === 'analysis' && <AnalysisView />}
        </div>
      </div>
    </div>
  );
}

export default DigitalEvidenceUI;
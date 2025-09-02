import React, { useState } from 'react';
import { Database, Play, Pause } from 'lucide-react';

const cases = [
  { id: 'C2024-001', title: 'Financial Fraud Investigation', priority: 'High', evidence: 12, status: 'Active' },
  { id: 'C2024-002', title: 'Cybersecurity Breach', priority: 'Critical', evidence: 8, status: 'Processing' },
  { id: 'C2024-003', title: 'Internal Investigation', priority: 'Medium', evidence: 5, status: 'Review' },
];


type CaseType = {
  id: string;
  title: string;
  priority: string;
  evidence: number;
  status: string;
};

const DashboardView = () => {
  const [selectedCase, setSelectedCase] = useState<CaseType | null>(null);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* ...existing code... case stats ... */}
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <div className="flex items-center">
            <Database className="h-8 w-8 text-blue-600" />
            <div className="ml-3">
              <p className="text-sm font-medium text-blue-800">Active Cases</p>
              <p className="text-2xl font-bold text-blue-900">24</p>
            </div>
          </div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <div className="flex items-center">
            <Play className="h-8 w-8 text-green-600" />
            <div className="ml-3">
              <p className="text-sm font-medium text-green-800">Completed</p>
              <p className="text-2xl font-bold text-green-900">156</p>
            </div>
          </div>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <div className="flex items-center">
            <Pause className="h-8 w-8 text-yellow-600" />
            <div className="ml-3">
              <p className="text-sm font-medium text-yellow-800">Processing</p>
              <p className="text-2xl font-bold text-yellow-900">8</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow border mt-6">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Recent Cases</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {cases.map((case_) => (
            <button
              key={case_.id}
              className="w-full text-left px-6 py-4 hover:bg-gray-50 focus:outline-none"
              onClick={() => setSelectedCase(case_)}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">{case_.title}</h4>
                  <p className="text-sm text-gray-500">Case ID: {case_.id} • {case_.evidence} evidence items</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    case_.priority === 'Critical' ? 'bg-red-100 text-red-800' :
                    case_.priority === 'High' ? 'bg-orange-100 text-orange-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {case_.priority}
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {case_.status}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      {selectedCase && (
        <div className="bg-white rounded-lg shadow border mt-6">
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-900">Case Details</h3>
            <button
              className="text-blue-600 hover:underline text-sm"
              onClick={() => setSelectedCase(null)}
            >Back to Cases</button>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <span className="font-semibold">Case ID:</span> {selectedCase.id}
            </div>
            <div>
              <span className="font-semibold">Title:</span> {selectedCase.title}
            </div>
            <div>
              <span className="font-semibold">Priority:</span> {selectedCase.priority}
            </div>
            <div>
              <span className="font-semibold">Status:</span> {selectedCase.status}
            </div>
            <div>
              <span className="font-semibold">Evidence Items:</span> {selectedCase.evidence}
            </div>
            <p>Add addtional case evidence items here...</p>

          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardView;

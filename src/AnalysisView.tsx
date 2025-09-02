import React from 'react';
import { Search } from 'lucide-react';

const AnalysisView = () => (
  <div className="space-y-6">
    <div className="bg-white rounded-lg shadow border">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Evidence Analysis</h3>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Search className="h-5 w-5 text-gray-400" />
              <input type="text" placeholder="Search across all evidence..." className="flex-1 px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Quick Analysis</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Total Files:</span>
                  <span className="font-medium">127,432</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Images:</span>
                  <span className="font-medium">8,234</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Documents:</span>
                  <span className="font-medium">2,156</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Communications:</span>
                  <span className="font-medium">15,678</span>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium text-gray-900">Timeline View</h4>
            <div className="space-y-3">
              {/* Timeline events for demo */}
              <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Email sent to external domain</p>
                  <p className="text-xs text-gray-500">2024-08-28 14:23:45</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">File deletion detected</p>
                  <p className="text-xs text-gray-500">2024-08-28 14:18:12</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Suspicious login attempt</p>
                  <p className="text-xs text-gray-500">2024-08-28 14:15:33</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">USB device connected</p>
                  <p className="text-xs text-gray-500">2024-08-28 13:55:10</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Document printed</p>
                  <p className="text-xs text-gray-500">2024-08-28 13:50:02</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Cloud sync completed</p>
                  <p className="text-xs text-gray-500">2024-08-28 13:45:30</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Password changed</p>
                  <p className="text-xs text-gray-500">2024-08-28 13:40:18</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Failed login attempt</p>
                  <p className="text-xs text-gray-500">2024-08-28 13:35:44</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">File uploaded to cloud</p>
                  <p className="text-xs text-gray-500">2024-08-28 13:30:21</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">New user created</p>
                  <p className="text-xs text-gray-500">2024-08-28 13:25:09</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Antivirus scan completed</p>
                  <p className="text-xs text-gray-500">2024-08-28 13:20:00</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">File shared externally</p>
                  <p className="text-xs text-gray-500">2024-08-28 13:15:42</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Account locked due to suspicious activity</p>
                  <p className="text-xs text-gray-500">2024-08-28 13:10:05</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AnalysisView;

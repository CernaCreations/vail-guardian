import React, { useState, useEffect } from 'react';
import { Smartphone, HardDrive, Camera, FileText, Play, Pause, Download } from 'lucide-react';

const evidenceItems = [
  {
    id: 'E001',
    type: 'Mobile',
    device: 'iPhone 14 Pro',
    status: 'Complete',
    hash: 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6',
    size: '128 GB',
    collectedBy: 'John Doe',
    collectedOn: '2025-08-30',
    notes: 'Device seized during search warrant.',
  },
  {
    id: 'E002',
    type: 'Laptop',
    device: 'MacBook Pro',
    status: 'Processing',
    hash: 'Calculating...',
    size: '512 GB',
    collectedBy: 'Jane Miller',
    collectedOn: '2025-08-29',
    notes: 'Encrypted drive, imaging in progress.',
  },
  {
    id: 'E003',
    type: 'Cloud',
    device: 'Google Drive',
    status: 'Pending',
    hash: '-',
    size: '2.3 GB',
    collectedBy: 'Maria Lopez',
    collectedOn: '2025-09-01',
    notes: 'Awaiting cloud access approval.',
  },
  {
    id: 'E004',
    type: 'Web',
    device: 'https://example.com',
    status: 'Complete',
    hash: 'web1234567890abcdef',
    size: '42 items',
    collectedBy: 'Demo User',
    collectedOn: '2025-09-02',
    notes: 'Web scraping completed.',
  },
  {
    id: 'E005',
    type: 'Video',
    device: 'Security Footage.mp4',
    status: 'Complete',
    hash: 'vid4567890abcdef123456',
    size: '1.2 GB',
    collectedBy: 'John Doe',
    collectedOn: '2025-08-31',
    notes: 'Footage from lobby camera.',
  },
  {
    id: 'E006',
    type: 'Document',
    device: 'Contract.pdf',
    status: 'Pending',
    hash: '-',
    size: '2.3 MB',
    collectedBy: 'Jane Miller',
    collectedOn: '2025-09-01',
    notes: 'Document upload pending.',
  },
];

type EvidenceItemType = {
  id: string;
  type: string;
  device: string;
  status: string;
  hash: string;
  size: string;
  collectedBy: string;
  collectedOn: string;
  notes: string;
};

const CollectionView = () => {
  const [collectionProgress, setCollectionProgress] = useState(0);
  const [isCollecting, setIsCollecting] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (isCollecting) {
      interval = setInterval(() => {
        setCollectionProgress(prev => prev < 100 ? prev + 2 : 100);
      }, 200);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isCollecting]);

  const [openItemId, setOpenItemId] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      {/* ...existing code... New Evidence Collection ... */}
      <div className="bg-white rounded-lg shadow border">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">New Evidence Collection</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* ...existing code... form fields ... */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Case Number</label>
              <input type="text" value="C2024-004" className="w-full px-3 py-2 border border-gray-300 bg-gray-200 rounded-md" readOnly />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Evidence Type</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                <option>Network Data</option>
                <option>Cloud Service</option>
                <option>Web Page</option>
                <option>Video</option>
                <option>Document</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Device / Source Information</label>
              <div className="flex space-x-2">
                <Smartphone className="h-5 w-5 text-gray-400 mt-2" />
                <input type="text" placeholder="Device, URL, or File Name" className="flex-1 px-3 py-2 border border-gray-300 rounded-md" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Custodian</label>
              <input type="text" placeholder="John Doe - Employee ID: 12345" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
          </div>
          {isCollecting && (
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-blue-800">Collection in Progress</span>
                <span className="text-sm text-blue-600">{collectionProgress}%</span>
              </div>
              <div className="w-full bg-blue-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-200"
                  style={{ width: `${collectionProgress}%` }}
                ></div>
              </div>
              <div className="mt-2 text-sm text-blue-700">
                Estimated time remaining: {Math.max(0, Math.floor((100 - collectionProgress) * 0.5))} minutes
              </div>
            </div>
          )}
          <div className="mt-6 flex space-x-3">
            <button 
              onClick={() => setIsCollecting(!isCollecting)}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              {isCollecting ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
              {isCollecting ? 'Pause Collection' : 'Start Full Imaging'}
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow border">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Evidence Inventory</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {evidenceItems.map((item) => (
            <div key={item.id}>
              <button
                className="w-full text-left px-6 py-4 hover:bg-gray-50 focus:outline-none"
                onClick={() => setOpenItemId(openItemId === item.id ? null : item.id)}
                aria-expanded={openItemId === item.id}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {item.type === 'Mobile' && <Smartphone className="h-5 w-5 text-gray-400 mr-3" />}
                    {item.type === 'Laptop' && <HardDrive className="h-5 w-5 text-gray-400 mr-3" />}
                    {item.type === 'Video' && <Camera className="h-5 w-5 text-pink-400 mr-3" />}
                    {item.type === 'Document' && <FileText className="h-5 w-5 text-green-400 mr-3" />}
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">{item.id} - {item.device}</h4>
                      <p className="text-sm text-gray-500">Size: {item.size} • Hash: {item.hash}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      item.status === 'Complete' ? 'bg-green-100 text-green-800' :
                      item.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {item.status}
                    </span>
                    <button className="text-blue-600 hover:text-blue-800">
                      <Download className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </button>
              {openItemId === item.id && (
                <div className="bg-gray-50 px-6 py-4 border-t">
                  <div className="space-y-2">
                    <div><span className="font-semibold">ID:</span> {item.id}</div>
                    <div><span className="font-semibold">Type:</span> {item.type}</div>
                    <div><span className="font-semibold">Device/Source:</span> {item.device}</div>
                    <div><span className="font-semibold">Status:</span> {item.status}</div>
                    <div><span className="font-semibold">Size:</span> {item.size}</div>
                    <div><span className="font-semibold">Full Hash:</span> {item.hash}</div>
                    <div><span className="font-semibold">Collected By:</span> {item.collectedBy}</div>
                    <div><span className="font-semibold">Collected On:</span> {item.collectedOn}</div>
                    <div><span className="font-semibold">Notes:</span> {item.notes}</div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionView;

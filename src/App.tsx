import React from 'react';
import { Calculator, Info, Mail } from 'lucide-react';
import { useState } from 'react';
import PercentageCalculator from './components/PercentageCalculator';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [activeTab, setActiveTab] = useState<'calculator' | 'about' | 'contact'>('calculator');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-indigo-600">Pourcentagix</h1>
            </div>
            <div className="flex">
              <button
                onClick={() => setActiveTab('calculator')}
                className={`inline-flex items-center px-4 py-2 text-sm font-medium ${
                  activeTab === 'calculator'
                    ? 'text-indigo-600 border-b-2 border-indigo-600'
                    : 'text-gray-500 hover:text-indigo-600'
                }`}
              >
                <Calculator className="w-5 h-5 mr-1" />
                Accueil
              </button>
              <button
                onClick={() => setActiveTab('about')}
                className={`inline-flex items-center px-4 py-2 text-sm font-medium ${
                  activeTab === 'about'
                    ? 'text-indigo-600 border-b-2 border-indigo-600'
                    : 'text-gray-500 hover:text-indigo-600'
                }`}
              >
                <Info className="w-5 h-5 mr-1" />
                À propos
              </button>
              <button
                onClick={() => setActiveTab('contact')}
                className={`inline-flex items-center px-4 py-2 text-sm font-medium ${
                  activeTab === 'contact'
                    ? 'text-indigo-600 border-b-2 border-indigo-600'
                    : 'text-gray-500 hover:text-indigo-600'
                }`}
              >
                <Mail className="w-5 h-5 mr-1" />
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'calculator' && <PercentageCalculator />}
        {activeTab === 'about' && <About />}
        {activeTab === 'contact' && <Contact />}
      </main>
    </div>
  );
}

export default App;
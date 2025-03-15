import React from 'react';
import { Calculator } from 'lucide-react';

function About() {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
      <div className="flex items-center justify-center mb-6">
        <Calculator className="w-12 h-12 text-indigo-600" />
      </div>
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        À propos de Pourcentagix
      </h2>
      <div className="space-y-4 text-gray-600">
        <p>
          Pourcentagix est un outil en ligne ultra-simple conçu pour réaliser des
          calculs de pourcentage instantanément. Notre mission est de fournir une
          solution rapide, efficace et sans complications pour tous vos besoins en
          calculs de pourcentage.
        </p>
        <p>
          Que vous soyez étudiant, professionnel ou simplement à la recherche
          d'un outil de calcul rapide, Pourcentagix est là pour vous aider.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Caractéristiques principales
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Calculs instantanés sans rechargement de page</li>
          <li>Interface épurée et intuitive</li>
          <li>Aucune publicité ni distraction</li>
          <li>Accessible sur tous les appareils</li>
          <li>Aucun stockage de données personnelles</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
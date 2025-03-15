import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';

function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Dans un cas réel, nous traiterions le formulaire ici
    alert('Message envoyé ! (Simulation)');
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
      <div className="flex items-center justify-center mb-6">
        <MessageSquare className="w-12 h-12 text-indigo-600" />
      </div>
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Contactez-nous
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Adresse e-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700"
          >
            Sujet
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Envoyer
        </button>
      </form>
      <div className="mt-8 text-center">
        <p className="text-gray-600">Ou écrivez-nous directement à :</p>
        <a
          href="mailto:contact@pourcentagix.com"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mt-2"
        >
          <Mail className="w-5 h-5 mr-2" />
          contact@pourcentagix.com
        </a>
      </div>
    </div>
  );
}

export default Contact;
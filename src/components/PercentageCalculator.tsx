import React, { useState } from 'react';

interface CalculationResult {
  value: number;
  text: string;
}

function PercentageCalculator() {
  const [results, setResults] = useState<Record<string, CalculationResult>>({
    percentToNumber: { value: 0, text: '' },
    numberToPercent: { value: 0, text: '' },
    percentageChange: { value: 0, text: '' },
    percentageVariation: { value: 0, text: '' },
  });

  const calculatePercentToNumber = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const percentage = Number(formData.get('percentage'));
    const total = Number(formData.get('total'));
    const result = (percentage / 100) * total;
    setResults({
      ...results,
      percentToNumber: {
        value: result,
        text: `${percentage}% de ${total} = ${result.toFixed(2)}`,
      },
    });
  };

  const calculateNumberToPercent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const value = Number(formData.get('value'));
    const total = Number(formData.get('total'));
    const result = (value / total) * 100;
    setResults({
      ...results,
      numberToPercent: {
        value: result,
        text: `${value} sur ${total} = ${result.toFixed(2)}%`,
      },
    });
  };

  const calculatePercentageChange = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const value = Number(formData.get('value'));
    const percentage = Number(formData.get('percentage'));
    const increase = formData.get('type') === 'increase';
    const result = increase
      ? value * (1 + percentage / 100)
      : value * (1 - percentage / 100);
    setResults({
      ...results,
      percentageChange: {
        value: result,
        text: `${value} ${increase ? '+' : '-'} ${percentage}% = ${result.toFixed(
          2
        )}`,
      },
    });
  };

  const calculatePercentageVariation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const oldValue = Number(formData.get('oldValue'));
    const newValue = Number(formData.get('newValue'));
    const result = ((newValue - oldValue) / oldValue) * 100;
    setResults({
      ...results,
      percentageVariation: {
        value: result,
        text: `De ${oldValue} à ${newValue} = ${result.toFixed(2)}% d'évolution`,
      },
    });
  };

  const CalculatorSection = ({
    title,
    onSubmit,
    children,
    result,
  }: {
    title: string;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    children: React.ReactNode;
    result: CalculationResult;
  }) => (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
      <form onSubmit={onSubmit} className="space-y-4">
        {children}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Calculer
        </button>
        {result.text && (
          <div className="mt-4 p-4 bg-gray-50 rounded-md">
            <p className="text-lg font-medium text-gray-800">{result.text}</p>
          </div>
        )}
      </form>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <CalculatorSection
        title="Convertir un pourcentage en nombre"
        onSubmit={calculatePercentToNumber}
        result={results.percentToNumber}
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Pourcentage (%)
          </label>
          <input
            type="number"
            name="percentage"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Total
          </label>
          <input
            type="number"
            name="total"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
      </CalculatorSection>

      <CalculatorSection
        title="Convertir un nombre en pourcentage"
        onSubmit={calculateNumberToPercent}
        result={results.numberToPercent}
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Valeur
          </label>
          <input
            type="number"
            name="value"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Total
          </label>
          <input
            type="number"
            name="total"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
      </CalculatorSection>

      <CalculatorSection
        title="Augmentation / Réduction d'un nombre en pourcentage"
        onSubmit={calculatePercentageChange}
        result={results.percentageChange}
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Valeur
          </label>
          <input
            type="number"
            name="value"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Pourcentage (%)
          </label>
          <input
            type="number"
            name="percentage"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Type</label>
          <select
            name="type"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="increase">Augmentation</option>
            <option value="decrease">Réduction</option>
          </select>
        </div>
      </CalculatorSection>

      <CalculatorSection
        title="Variation en pourcentage entre deux nombres"
        onSubmit={calculatePercentageVariation}
        result={results.percentageVariation}
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Ancien nombre
          </label>
          <input
            type="number"
            name="oldValue"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nouveau nombre
          </label>
          <input
            type="number"
            name="newValue"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
      </CalculatorSection>
    </div>
  );
}

export default PercentageCalculator;
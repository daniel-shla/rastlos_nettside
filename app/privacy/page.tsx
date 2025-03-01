import React from 'react';
import PageTemplate from '@/components/PageTemplate';
import Link from 'next/link';

const PrivacyPage = () => {
  return (
    <PageTemplate title="Personvernerklæring">
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold mb-4 font-anton text-buldreoransj">Personvernerklæring</h2>
        <p className="text-lg leading-relaxed text-[#fef6da]">
          Denne nettsiden samler ikke inn noen personlige data. Vi respekterer ditt personvern og sørger for at ingen informasjon blir lagret eller delt.
        </p>
      </div>
      <div className="mt-6">
        {/* Removed the IFI-RASTLØS Retningslinjer button */}
      </div>
    </PageTemplate>
  );
};

export default PrivacyPage;
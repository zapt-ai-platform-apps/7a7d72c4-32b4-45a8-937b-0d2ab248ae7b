import React, { useEffect } from 'react';
import { coreApi } from '@/modules/index';

export default function PolicyPage() {
  useEffect(() => {
    // Track page view
    coreApi.trackPageView('usage_based_cost_recovery_policy');
  }, []);

  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-white">ZAPT Limited Usage-Based Cost Recovery Policy</h1>
      
      <div className="bg-dark-navy p-8 rounded-lg shadow-lg text-light-gray">
        <h2 className="text-2xl font-semibold mb-6">Ongoing Usage Costs and Variable Charges</h2>
        
        <div className="space-y-4">
          <p>
            The Services provided by ZAPT LIMITED may incur variable, usage-based costs, including but not limited to AI processing fees, token consumption charges, cloud hosting, bandwidth, storage, and compute resources (collectively, "Ongoing Usage Costs"). While we strive to offer transparent pricing, these Ongoing Usage Costs may fluctuate based on third-party provider rates, system demands, or the scale of usage by individual Customers.
          </p>
          
          <p>
            The Customer acknowledges and agrees that ZAPT LIMITED reserves the right, at its sole discretion, to charge additional fees to recover any such Ongoing Usage Costs that arise due to the Customer's use of the Services, including where such usage significantly exceeds typical or anticipated levels, or where it materially impacts the operational cost of delivering the Services.
          </p>
          
          <p>
            In the event that such additional charges are to be applied, ZAPT LIMITED will provide the Customer with reasonable prior notice (which may be electronic) specifying the nature and basis of the charges. Continued use of the Services following such notice will constitute acceptance of these additional charges.
          </p>
          
          <p>
            ZAPT LIMITED also reserves the right to implement a fair usage policy and/or usage caps at its sole discretion to ensure sustainable and equitable service provision to all Customers.
          </p>
        </div>
      </div>
    </div>
  );
}
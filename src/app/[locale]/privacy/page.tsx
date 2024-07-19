import React from 'react';
import '@/src/privacy-&-terms/styles/Privacy.css';

function Page () {
  return (
    <main>
      <section className='privacy'>
        <h1 className='privacy_title'>
        Privacy Policy
        </h1>

        <div className='privacy_matters'>
          <h2>Your Privacy Matters</h2>
          <p>At Luna News, we are committed to protecting your privacy. This privacy policy outlines how we collect, use, share, and protect your personal information when you access and use our digital pay-per-view service.</p>
        </div>

        <div className='privacy_collect'>
          <h3>Information We Collect:</h3>
          <ul>
            <li>Account Information: Name, email address, billing information, and payment method.</li>
            <li>Viewing History: Content viewed, purchase history, and viewing preferences.</li>
            <li>Device Information: Device type, operating system, IP address, and unique device identifiers.</li>
          </ul>
        </div>
      
        <div className='privacy_information'>
          <h3>How We Use Your Information:</h3>
          <ul>
            <li>Providing Services: Delivering the pay-per-view content you purchase.</li>
            <li>Processing Payments: Handling your payment transactions securely.</li>
            <li>Improving Our Service: Analyzing viewing habits to enhance content recommendations and user experience.</li>
            <li>Marketing and Promotions: Sending you relevant offers and updates (with your consent).</li>
          </ul>
        </div>

        <small>By using our digital pay-per-view service, you consent to the collection and use of your information as described in this privacy policy.</small>
      </section>
    </main>
  );
}

export default Page;
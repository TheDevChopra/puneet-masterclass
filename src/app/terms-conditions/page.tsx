import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function TermsConditionsPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24 min-h-screen bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-foreground">Terms & Conditions</h1>
          <div className="prose prose-sm md:prose-base prose-slate max-w-none text-muted-foreground space-y-6">
            <p><strong>Effective Date:</strong> {new Date().toLocaleDateString()}</p>
            
            <p>These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Puneet Kaur Saluja ("we," "us" or "our"), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.</p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">1. Masterclass Registration</h2>
            <p>By registering for the Masterclass, you agree to pay the stated fee. All payments are securely processed through our third-party payment providers. Once payment is successful, you will receive access details for the live online session.</p>
            
            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">2. Intellectual Property Rights</h2>
            <p>Unless otherwise indicated, the Site and Masterclass materials are our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.</p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">3. Refund Policy</h2>
            <p>Due to the digital and live nature of the Masterclass, all sales are final and non-refundable. Please ensure you are available to attend the session or watch the recording (if provided) before making a purchase.</p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">4. User Representations</h2>
            <p>By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms and Conditions.</p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">5. Modifications and Interruptions</h2>
            <p>We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Site or Masterclass.</p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">6. Contact Us</h2>
            <p>In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at support@puneetkaursaluja.com.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24 min-h-screen bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-foreground">Privacy Policy</h1>
          <div className="prose prose-sm md:prose-base prose-slate max-w-none text-muted-foreground space-y-6">
            <p><strong>Effective Date:</strong> {new Date().toLocaleDateString()}</p>
            
            <p>Welcome to Puneet Kaur Saluja's Masterclass. Your privacy is critically important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or purchase our masterclass.</p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">1. Information We Collect</h2>
            <p>We may collect information about you in a variety of ways. The information we may collect includes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and phone number, that you voluntarily give to us when you register for the masterclass.</li>
              <li><strong>Payment Information:</strong> Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) is collected and processed by our payment processors (like Razorpay or Stripe). We do not store this data.</li>
              <li><strong>Usage Data:</strong> Information our servers automatically collect when you access the site, such as your IP address, your browser type, your operating system, and your access times.</li>
            </ul>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">2. Use of Your Information</h2>
            <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Deliver the masterclass link and related materials to you.</li>
              <li>Email you regarding your purchase or order.</li>
              <li>Fulfill and manage purchases, orders, payments, and other transactions related to the website.</li>
              <li>Respond to customer service requests and support needs.</li>
            </ul>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">3. Disclosure of Your Information</h2>
            <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.</p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">4. Security of Your Information</h2>
            <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.</p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">5. Contact Us</h2>
            <p>If you have questions or comments about this Privacy Policy, please contact us at support@puneetkaursaluja.com.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

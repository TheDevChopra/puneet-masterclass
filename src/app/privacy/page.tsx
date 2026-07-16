import { Metadata } from 'next';
import LegalPageLayout from '@/components/layout/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Privacy Policy | Puneet Kaur Saluja',
  description: 'Read our Privacy Policy to understand how your information is collected, used and protected.',
};

export default function PrivacyPolicyPage() {
  const toc = [
    { id: 'section-1', title: '1. Information We Collect' },
    { id: 'section-2', title: '2. How We Use Your Information' },
    { id: 'section-3', title: '3. Marketing Communication' },
    { id: 'section-4', title: '4. Payment Information' },
    { id: 'section-5', title: '5. Workshop Platforms' },
    { id: 'section-6', title: '6. Cookies' },
    { id: 'section-7', title: '7. Data Security' },
    { id: 'section-8', title: '8. Data Sharing' },
    { id: 'section-9', title: '9. Data Retention' },
    { id: 'section-10', title: '10. Your Rights' },
    { id: 'section-11', title: '11. Third-Party Links' },
    { id: 'section-12', title: "12. Children's Privacy" },
    { id: 'section-13', title: '13. Changes to this Privacy Policy' },
    { id: 'section-14', title: '14. Contact Us' },
  ];

  return (
    <LegalPageLayout
      title="Privacy Policy"
      effectiveDate="16 July 2026"
      subtitle={<>At <strong>Puneet Kaur Saluja</strong> (operated under the registered business name <strong>Contentatia</strong>) ("we", "our", "us"), we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and protect your information when you visit <strong>puneetkaursaluja.com</strong>, register for our workshops, or use any of our products or services.</>}
      toc={toc}
    >
      <p>
        By accessing our website or registering for any workshop, you agree to the practices described in this Privacy Policy.
      </p>

      <h2 id="section-1">1. Information We Collect</h2>
      <p>When you register for a workshop or contact us, we may collect the following information:</p>
      <ul>
        <li>Full Name</li>
        <li>Email Address</li>
        <li>Phone Number</li>
        <li>Company or Business Name (if provided)</li>
        <li>Payment confirmation and transaction details processed through our payment partner</li>
        <li>Any information voluntarily shared through forms, emails, or customer support</li>
      </ul>
      <p>
        We do <strong>not</strong> collect or store your debit card, credit card, UPI PIN, banking credentials, or other sensitive payment information. Payments are securely processed through our payment partner, PhonePe.
      </p>

      <h2 id="section-2">2. How We Use Your Information</h2>
      <p>Your information may be used to:</p>
      <ul>
        <li>Process your workshop registration</li>
        <li>Verify successful payments</li>
        <li>Share webinar access details</li>
        <li>Send important workshop-related updates</li>
        <li>Respond to your queries and provide customer support</li>
        <li>Improve our workshops, services, and website experience</li>
        <li>Send future educational resources, newsletters, webinars, offers, and promotional communications</li>
      </ul>

      <h2 id="section-3">3. Marketing Communication</h2>
      <p>
        By registering for our workshops or submitting your details, you consent to receive communication from <strong>Puneet Kaur Saluja (Contentatia)</strong> through:
      </p>
      <ul>
        <li>Email</li>
        <li>WhatsApp</li>
        <li>SMS (where applicable)</li>
        <li>Phone calls</li>
      </ul>
      <p>
        These communications may include workshop reminders, educational content, product updates, special offers, and future events.
      </p>
      <p>
        You may opt out of promotional emails at any time by using the unsubscribe option available in our emails or by contacting us directly.
      </p>

      <h2 id="section-4">4. Payment Information</h2>
      <p>All payments are securely processed through trusted third-party payment providers.</p>
      <p>
        <strong>Contentatia (Puneet Kaur Saluja)</strong> does not store your payment card details, banking credentials, or UPI PIN.
      </p>
      <p>
        Please refer to your payment provider's privacy policy for information regarding their data handling practices.
      </p>

      <h2 id="section-5">5. Workshop Platforms</h2>
      <p>Our live workshops are conducted through Zoho Webinar.</p>
      <p>
        By registering for a workshop, you acknowledge that your name and email address may be shared with Zoho Webinar solely for the purpose of enabling your participation in the event.
      </p>

      <h2 id="section-6">6. Cookies</h2>
      <p>Our website may use cookies and similar technologies to:</p>
      <ul>
        <li>Improve website functionality</li>
        <li>Remember user preferences</li>
        <li>Analyse website traffic</li>
        <li>Enhance user experience</li>
      </ul>
      <p>
        You may disable cookies through your browser settings. However, certain website features may not function properly.
      </p>

      <h2 id="section-7">7. Data Security</h2>
      <p>
        We implement reasonable technical and organisational measures to safeguard your personal information against unauthorised access, disclosure, misuse, alteration, or destruction.
      </p>
      <p>
        While we strive to protect your data, no method of electronic transmission or internet storage is completely secure. Therefore, we cannot guarantee absolute security.
      </p>

      <h2 id="section-8">8. Data Sharing</h2>
      <p>We do not sell, rent, or trade your personal information.</p>
      <p>Your information may only be shared with trusted service providers when necessary to:</p>
      <ul>
        <li>Process payments</li>
        <li>Deliver webinars</li>
        <li>Send communications</li>
        <li>Comply with legal obligations</li>
      </ul>
      <p>
        These third parties are authorised to use your information only for the services they perform on our behalf.
      </p>

      <h2 id="section-9">9. Data Retention</h2>
      <p>We retain your information only for as long as necessary to:</p>
      <ul>
        <li>Deliver our services</li>
        <li>Maintain business records</li>
        <li>Comply with legal obligations</li>
        <li>Resolve disputes</li>
        <li>Enforce our agreements</li>
      </ul>

      <h2 id="section-10">10. Your Rights</h2>
      <p>Subject to applicable law, you may request to:</p>
      <ul>
        <li>Access your personal information</li>
        <li>Correct inaccurate information</li>
        <li>Update your details</li>
        <li>Withdraw consent where legally applicable</li>
        <li>Request deletion of your personal information</li>
      </ul>
      <p>
        To exercise these rights, please contact us using the details below.
      </p>

      <h2 id="section-11">11. Third-Party Links</h2>
      <p>
        Our website may contain links to third-party websites or platforms.
      </p>
      <p>
        We are not responsible for the privacy practices or content of such external websites. We encourage you to review their respective privacy policies before sharing any personal information.
      </p>

      <h2 id="section-12">12. Children's Privacy</h2>
      <p>
        Our workshops and services are intended for individuals who are at least 18 years of age.
      </p>
      <p>We do not knowingly collect personal information from children.</p>

      <h2 id="section-13">13. Changes to this Privacy Policy</h2>
      <p>We may update this Privacy Policy from time to time.</p>
      <p>
        Any changes will be published on this page with the revised effective date. Continued use of our website or services constitutes acceptance of the updated Privacy Policy.
      </p>

      <h2 id="section-14">14. Contact Us</h2>
      <p>
        If you have any questions regarding this Privacy Policy or the way we handle your information, please contact us:
      </p>
      <p><strong>Puneet Kaur Saluja (Contentatia)</strong></p>
      <p>Website: puneetkaursaluja.com</p>
      <p>Email: <a href="mailto:support@puneetkaursaluja.com">support@puneetkaursaluja.com</a></p>
      <p>Phone: +91 74289 21087</p>
      <p>Location: New Delhi, India</p>
    </LegalPageLayout>
  );
}

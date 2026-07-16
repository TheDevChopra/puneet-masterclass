import { Metadata } from 'next';
import LegalPageLayout from '@/components/layout/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy | Puneet Kaur Saluja',
  description: 'Learn about our refund, cancellation and workshop registration policies.',
};

export default function RefundPolicyPage() {
  const toc = [
    { id: 'section-1', title: '1. No Refund Policy' },
    { id: 'section-2', title: '2. Workshop Rescheduling' },
    { id: 'section-3', title: '3. Participant Cancellation' },
    { id: 'section-4', title: '4. Webinar Access' },
    { id: 'section-5', title: '5. Recording Policy' },
    { id: 'section-6', title: '6. Duplicate Payments' },
    { id: 'section-7', title: '7. Failed Transactions' },
    { id: 'section-8', title: '8. Contact Us' },
  ];

  return (
    <LegalPageLayout
      title="Refund & Cancellation Policy"
      effectiveDate="16 July 2026"
      subtitle={<>At <strong>Puneet Kaur Saluja</strong> (operated under the registered business name <strong>Contentatia</strong>), we strive to deliver a valuable learning experience through our workshops and educational programs. Please read our Refund & Cancellation Policy carefully before completing your purchase.</>}
      toc={toc}
    >
      <p>
        By registering for any workshop, webinar, or digital event through <strong>puneetkaursaluja.com</strong>, you acknowledge that you have read, understood, and agreed to this policy.
      </p>

      <h2 id="section-1">1. No Refund Policy</h2>
      <p>All registrations for our workshops and webinars are <strong>final</strong>.</p>
      <p>
        Once a payment has been successfully processed, <strong>no refunds, cancellations, or partial refunds</strong> will be provided under any circumstances.
      </p>
      <p>This policy applies to all registrations, including but not limited to:</p>
      <ul>
        <li>Change of mind</li>
        <li>Inability to attend the workshop</li>
        <li>Scheduling conflicts</li>
        <li>Personal emergencies</li>
        <li>Technical issues on the participant's end</li>
        <li>Failure to join the live session</li>
        <li>Dissatisfaction after attending the workshop</li>
      </ul>
      <p>
        We encourage participants to review all workshop details before completing their registration.
      </p>

      <h2 id="section-2">2. Workshop Rescheduling</h2>
      <p>
        In the unlikely event that <strong>Contentatia</strong> reschedules a workshop due to unforeseen circumstances, your registration will automatically remain valid for the revised date.
      </p>
      <p>
        The updated schedule and joining details will be shared with your registered email address.
      </p>
      <p>No refunds will be issued due to such rescheduling.</p>

      <h2 id="section-3">3. Participant Cancellation</h2>
      <p>If you are unable to attend the workshop, your registration fee will not be refunded.</p>
      <p>
        Registrations are <strong>non-transferable</strong> and cannot be transferred, assigned, or resold to another individual.
      </p>

      <h2 id="section-4">4. Webinar Access</h2>
      <p>Participants are responsible for:</p>
      <ul>
        <li>Providing a valid email address during registration.</li>
        <li>Ensuring access to a stable internet connection.</li>
        <li>Joining the webinar using the access details shared before the event.</li>
      </ul>
      <p>
        Failure to attend due to incorrect contact information, internet issues, device incompatibility, or any other circumstances beyond our control will not qualify for a refund.
      </p>

      <h2 id="section-5">5. Recording Policy</h2>
      <p>Our live workshops are conducted exclusively through <strong>Zoho Webinar</strong>.</p>
      <p>Unless specifically stated otherwise, <strong>recordings of the workshop are not provided</strong>.</p>
      <p>
        Missing the live session does not entitle participants to a recording, replay, refund, or credit.
      </p>

      <h2 id="section-6">6. Duplicate Payments</h2>
      <p>
        If you are charged more than once for the same registration due to a technical error or payment gateway issue, please contact us within <strong>7 days</strong> of the transaction.
      </p>
      <p>
        After verification, the duplicate payment amount will be refunded through the original payment method.
      </p>

      <h2 id="section-7">7. Failed Transactions</h2>
      <p>
        If your payment is unsuccessful but the amount is debited from your account, the refund process will be governed by your bank or payment service provider.
      </p>
      <p>
        Please contact your bank or payment provider first. If further assistance is required, you may contact us with your transaction details.
      </p>

      <h2 id="section-8">8. Contact Us</h2>
      <p>
        For any questions regarding this Refund & Cancellation Policy, please contact us:
      </p>
      <p><strong>Puneet Kaur Saluja (Contentatia)</strong></p>
      <p>Website: puneetkaursaluja.com</p>
      <p>Email: <a href="mailto:support@puneetkaursaluja.com">support@puneetkaursaluja.com</a></p>
      <p>Phone: +91 74289 21087</p>
      <p>Location: New Delhi, India</p>
    </LegalPageLayout>
  );
}

export default function TermsOfUse() {
  return (
    <div className="py-12 px-6 md:px-16 max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-12 text-[#201A16] dark:text-[#EAE1D9] tracking-tight">Terms of Use</h1>
      
      <div className="prose prose-xl prose-strong:text-[#201A16] dark:prose-strong:text-[#EAE1D9] text-[#50453D] dark:text-[#D1C5B4] max-w-none">
        <p className="lead font-medium text-[#201A16] dark:text-[#EAE1D9]">
          These terms and conditions apply to the <strong>Naspend</strong> app (hereby referred to as "Application") created by <strong>Us Alone</strong> (hereby referred to as "Service Provider"). By downloading or using the Application, you are automatically agreeing to the following terms.
        </p>

        <h2 className="text-3xl font-bold text-[#201A16] dark:text-[#EAE1D9] mt-16 mb-6">1. License and Intellectual Property</h2>
        <p>Unauthorized copying, modification of the Application, any part of the Application, or our trademarks is strictly prohibited. You may not extract the source code, translate it, or create derivative versions. All intellectual property rights related to the Application remain the property of the Service Provider.</p>

        <h2 className="text-3xl font-bold text-[#201A16] dark:text-[#EAE1D9] mt-16 mb-6">2. Nature of the Service (Local Data Storage)</h2>
        <p>The Application operates primarily as an offline, locally stored expense manager. You acknowledge and agree that:</p>
        <ul className="list-disc pl-8 space-y-4 my-6">
          <li><strong>Local Storage:</strong> All financial data entered into the Application is stored solely on your device's internal memory. The Service Provider does not store or backup your data on external servers.</li>
          <li><strong>Data Responsibility:</strong> You are solely responsible for backing up your data. If you uninstall the Application, clear its storage, or lose your device, <strong>your data will be permanently lost</strong> and cannot be recovered by the Service Provider.</li>
        </ul>

        <h2 className="text-3xl font-bold text-[#201A16] dark:text-[#EAE1D9] mt-16 mb-6">3. In-App Purchases (Naspend Premium)</h2>
        <p>The Application offers an optional one-time In-App Purchase to upgrade to "Naspend Premium" (which removes advertisements and supports the developer).</p>
        <ul className="list-disc pl-8 space-y-4 my-6">
          <li><strong>Billing:</strong> All transactions are securely processed and managed by the Google Play Store.</li>
          <li><strong>Restoration:</strong> If you change devices or reinstall the Application using the same Google account, you can restore your Premium purchase using the "Restore" button within the Application.</li>
          <li><strong>Refunds:</strong> Refund requests are subject to the standard refund policies of the Google Play Store.</li>
        </ul>

        <h2 className="text-3xl font-bold text-[#201A16] dark:text-[#EAE1D9] mt-16 mb-6">4. Limitation of Liability</h2>
        <p>The Application is provided on an "AS IS" and "AS AVAILABLE" basis.</p>
        <ul className="list-disc pl-8 space-y-4 my-6">
          <li><strong>Accuracy:</strong> While we strive for accuracy, we do not guarantee the Application is free from errors. It is a tool for personal reference and is not a substitute for professional financial or accounting advice.</li>
          <li><strong>Loss:</strong> The Service Provider accepts <strong>no liability</strong> for any direct or indirect loss (financial or data-related) resulting from reliance on the Application, data loss caused by device failure, or uninstallation.</li>
        </ul>

        <h2 className="text-3xl font-bold text-[#201A16] dark:text-[#EAE1D9] mt-16 mb-6">5. Connectivity and Updates</h2>
        <p>Certain features (such as loading advertisements, verifying Premium purchases, or viewing this policy) require an internet connection. The Service Provider is not responsible for any mobile data charges incurred. We may update the Application, and you agree to accept these updates to continue using the service.</p>

        <h2 className="text-3xl font-bold text-[#201A16] dark:text-[#EAE1D9] mt-16 mb-6">6. Termination</h2>
        <p>We may cease providing the Application or terminate your use at any time without notice. Upon termination, you must stop using the Application and delete it from your device.</p>

        <h2 className="text-3xl font-bold text-[#201A16] dark:text-[#EAE1D9] mt-16 mb-6">7. Changes to These Terms</h2>
        <p>The Service Provider may periodically update these Terms and Conditions. You are advised to review this page regularly.</p>
        
        <p className="bg-[#F5EFE6] dark:bg-[#211B16] p-4 rounded-xl border border-[#EBE1D9] dark:border-[#352D27] font-bold text-[#201A16] dark:text-[#EAE1D9] mt-12 mb-8">These terms and conditions are effective as of March 2026</p>

        <h2 className="text-3xl font-bold text-[#201A16] dark:text-[#EAE1D9] mt-16 mb-6">Contact Us</h2>
        <p>If you have any questions or suggestions about the Terms and Conditions, please contact the Service Provider at <a href="mailto:tuannam2505@gmail.com" className="text-[#8D4F00] dark:text-[#FFB870] font-bold hover:underline">tuannam2505@gmail.com</a>.</p>
      </div>
    </div>
  );
}
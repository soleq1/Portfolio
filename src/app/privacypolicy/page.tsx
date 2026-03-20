export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <main className="max-w-3xl mx-auto py-16 px-6">
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-gray-400 text-sm mb-10">Last updated: March 20, 2026</p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Overview</h2>
          <p className="text-gray-300 leading-relaxed">
            This privacy policy describes how we handle your information when you use our mobile application.
            We are committed to protecting your privacy and being transparent about our practices.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            When you sign in with Google, we receive basic profile information provided by Google, which may include:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-1 pl-2">
            <li>Your name</li>
            <li>Email address</li>
            <li>Profile picture</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">How We Use Your Information</h2>
          <p className="text-gray-300 leading-relaxed">
            The information collected through Google Sign-In is used solely to authenticate your identity and
            provide you access to the app. We do not use your information for advertising, analytics, or any
            other purpose beyond core app functionality.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Data Sharing</h2>
          <p className="text-gray-300 leading-relaxed">
            We do not sell, trade, or share your personal data with any third parties. Your information stays
            within the app and is never transmitted to external services beyond what is required for Google
            authentication.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Data Storage</h2>
          <p className="text-gray-300 leading-relaxed">
            Any data stored is kept securely and is only accessible within the app. We take reasonable
            precautions to protect your information from unauthorized access or disclosure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Your Rights</h2>
          <p className="text-gray-300 leading-relaxed">
            You may revoke Google Sign-In access at any time through your Google account settings at{' '}
            <a
              href="https://myaccount.google.com/permissions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              myaccount.google.com/permissions
            </a>
            . If you would like your data removed from the app, please contact us.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Contact</h2>
          <p className="text-gray-300 leading-relaxed">
            If you have any questions about this privacy policy, you can reach us at{' '}
            <a href="mailto:soleqgod@gmail.com" className="text-blue-400 hover:text-blue-300 underline">
              soleqgod@gmail.com
            </a>
            .
          </p>
        </section>
      </main>
    </div>
  );
}

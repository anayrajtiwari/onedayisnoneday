import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-shri-black text-shri-offwhite">
      <Navbar />

      <section className="relative pt-40 pb-20 px-8 overflow-hidden">
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-shri-gold/[0.02] blur-[150px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-shri-gold/[0.03] blur-[120px] rounded-full" />
        </div>

        <div
          className="fixed inset-0 pointer-events-none opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="mb-16 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-shri-gold/40" />
              <span className="text-shri-gold text-[10px] uppercase tracking-[0.8em]">Policy</span>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-shri-gold/40" />
            </div>
            <h1 className="text-5xl md:text-7xl font-thin text-white mb-6 uppercase">
              Privacy <span className="italic metallic-text font-light">Policy</span>
            </h1>
            <p className="text-gray-500 text-xs uppercase tracking-[0.4em] font-light">
              Last updated: June 2026
            </p>
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-shri-gold to-transparent mx-auto mt-8" />
          </div>

          <div className="space-y-12 text-gray-400 font-light leading-relaxed tracking-wide text-sm md:text-base">
            <section>
              <h2 className="text-2xl md:text-3xl font-light text-white mb-6 tracking-tight">1. Information We Collect</h2>
              <div className="space-y-4">
                <p>We collect information you provide directly to us when you use the SHRI ecosystem, including when you submit an inquiry, create an account, or communicate with us. This may include your name, email address, and any messages or content you submit.</p>
                <p>We also collect certain information automatically when you visit our website, including your IP address, browser type, device information, and usage data through cookies and similar technologies.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-light text-white mb-6 tracking-tight">2. How We Use Your Information</h2>
              <div className="space-y-4">
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Authenticate your identity and maintain your account</li>
                  <li>Improve and personalize your experience within the ecosystem</li>
                  <li>Send occasional communications about updates and developments (only with your consent)</li>
                  <li>Ensure the security and integrity of our platform</li>
                </ul>
                <p>We do not sell your personal information to third parties. We do not use your data for advertising purposes.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-light text-white mb-6 tracking-tight">3. Data Storage and Security</h2>
              <div className="space-y-4">
                <p>Your data is stored on secure servers using industry-standard encryption protocols. We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
                <p>We retain your personal data only as long as necessary to fulfill the purposes for which it was collected, or as required by applicable law.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-light text-white mb-6 tracking-tight">4. Third-Party Services</h2>
              <div className="space-y-4">
                <p>SHRI uses the following third-party services that may process your data:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Supabase</strong> — Authentication and database services</li>
                  <li><strong>Resend</strong> — Email delivery for notifications and inquiries</li>
                  <li><strong>Vercel</strong> — Hosting and infrastructure</li>
                  <li><strong>MongoDB</strong> — Data storage</li>
                </ul>
                <p>Each of these providers has their own privacy and security practices. We have selected them for their commitment to data protection and compliance with applicable regulations.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-light text-white mb-6 tracking-tight">5. Cookies</h2>
              <div className="space-y-4">
                <p>We use essential cookies for authentication and security purposes. These are necessary for the operation of the ecosystem. We do not use tracking cookies or third-party advertising cookies.</p>
                <p>You can control cookie preferences through your browser settings. Please note that disabling certain cookies may affect the functionality of our services.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-light text-white mb-6 tracking-tight">6. Your Rights</h2>
              <div className="space-y-4">
                <p>Depending on your jurisdiction, you may have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access the personal data we hold about you</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to or restrict processing of your data</li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-light text-white mb-6 tracking-tight">7. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on this page and updating the &ldquo;Last updated&rdquo; date.</p>
            </section>


          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

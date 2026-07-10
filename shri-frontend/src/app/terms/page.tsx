import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
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
              <span className="text-shri-gold text-[10px] uppercase tracking-[0.8em]">Terms</span>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-shri-gold/40" />
            </div>
            <h1 className="text-5xl md:text-7xl font-thin text-white mb-6 uppercase">
              Terms of <span className="italic metallic-text font-light">Service</span>
            </h1>
            <p className="text-gray-500 text-xs uppercase tracking-[0.4em] font-light">
              Last updated: June 2026
            </p>
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-shri-gold to-transparent mx-auto mt-8" />
          </div>

          <div className="space-y-12 text-gray-400 font-light leading-relaxed tracking-wide text-sm md:text-base">
            <section>
              <h2 className="text-2xl md:text-3xl font-light text-white mb-6 tracking-tight">1. Acceptance of Terms</h2>
              <div className="space-y-4">
                <p>By accessing or using the SHRI ecosystem, including our website, applications, and services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not access or use our services.</p>
                <p>We reserve the right to update or modify these terms at any time. Continued use of the services after any changes constitutes acceptance of the updated terms.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-light text-white mb-6 tracking-tight">2. Use of Services</h2>
              <div className="space-y-4">
                <p>You agree to use the SHRI ecosystem only for lawful purposes and in accordance with these terms. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
                <p>You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use the services in any way that violates applicable laws or regulations</li>
                  <li>Attempt to gain unauthorized access to any part of the ecosystem</li>
                  <li>Interfere with or disrupt the security, integrity, or performance of the services</li>
                  <li>Submit false or misleading information through inquiries or account registration</li>
                  <li>Use the services for unsolicited communications or spam</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-light text-white mb-6 tracking-tight">3. Account Registration</h2>
              <div className="space-y-4">
                <p>Certain features of the ecosystem may require account registration. You agree to provide accurate, current, and complete information during the registration process and to update such information as necessary.</p>
                <p>We reserve the right to suspend or terminate accounts that violate these terms or engage in unauthorized activity.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-light text-white mb-6 tracking-tight">4. Intellectual Property</h2>
              <div className="space-y-4">
                <p>The SHRI brand, name, logo, ecosystem design, and all related content, including text, graphics, images, and software, are the exclusive property of SHRI and are protected by intellectual property laws.</p>
                <p>You may not reproduce, distribute, modify, create derivative works from, or exploit any part of the ecosystem without our prior written consent.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-light text-white mb-6 tracking-tight">5. User-Generated Content</h2>
              <div className="space-y-4">
                <p>By submitting content to the SHRI ecosystem, including discussion posts, feedback, or inquiries, you grant us a non-exclusive, royalty-free license to use, store, and display that content for the purpose of operating and improving our services.</p>
                <p>You represent that your content does not violate any third-party rights or applicable laws. We reserve the right to remove any content that we deem inappropriate or in violation of these terms.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-light text-white mb-6 tracking-tight">6. Limitation of Liability</h2>
              <div className="space-y-4">
                <p>The SHRI ecosystem is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. We make no warranties, expressed or implied, regarding the availability, reliability, or suitability of the services for any particular purpose.</p>
                <p>In no event shall SHRI be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the services.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-light text-white mb-6 tracking-tight">7. Data Usage</h2>
              <div className="space-y-4">
                <p>Your use of the ecosystem is also governed by our Privacy Policy, which describes how we collect, use, and protect your personal information.</p>
                <p>By using our services, you consent to the data practices described in our Privacy Policy, including the transfer and processing of your data by our third-party service providers.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-light text-white mb-6 tracking-tight">8. Termination</h2>
              <p>We reserve the right to suspend or terminate your access to the ecosystem at any time, without prior notice, for conduct that we believe violates these terms or is harmful to the ecosystem or other users.</p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-light text-white mb-6 tracking-tight">9. Governing Law</h2>
              <p>These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which SHRI operates, without regard to its conflict of law provisions.</p>
            </section>


          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

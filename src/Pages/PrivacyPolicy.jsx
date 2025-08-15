// Style
import "/src/index.css";
import "./Pages.css";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="legal-page">
        <header className="legal-header">
          <h1>Privacy Policy</h1>
          <p className="last-updated">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </header>

        <main className="legal-content">
          <section className="legal-section">
            <h2>1. Information We Collect</h2>
            <p>
              We collect information to provide better services to our users:
            </p>
            <ul>
              <li>Personal information you provide (name, email, etc.)</li>
              <li>Usage data and analytics</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>2. How We Use Information</h2>
            <p>Your information is used to:</p>
            <ul>
              <li>Provide and maintain our service</li>
              <li>Improve user experience</li>
              <li>Communicate with you</li>
              <li>Ensure platform security</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Data Sharing</h2>
            <p>
              We do not sell your personal data. We may share information with:
            </p>
            <ul>
              <li>Service providers who assist our operations</li>
              <li>Legal authorities when required by law</li>
              <li>Business partners in anonymized, aggregated form</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Request correction or deletion</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent where applicable</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your
              personal information.
            </p>
          </section>
        </main>

        <footer className="legal-footer">
          <p>
            Contact us if you have any questions about our privacy practices.
          </p>
        </footer>
      </div>
    </>
  );
};

export default PrivacyPolicy;

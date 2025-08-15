// Style
import "/src/index.css";
import "./Pages.css";

const TermsOfService = () => {
  return (
    <>
      <div className="legal-page">
        <header className="legal-header">
          <h1>Terms of Service</h1>
          <p className="last-updated">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </header>

        <main className="legal-content">
          <section className="legal-section">
            <h2>1. Introduction</h2>
            <p>
              Welcome to our platform. These Terms of Service govern your use of
              our website and services.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. User Responsibilities</h2>
            <p>
              You agree to use our services responsibly and in accordance with
              all applicable laws.
            </p>
            <ul>
              <li>You must be at least 18 years old to use our services</li>
              <li>
                You are responsible for maintaining the confidentiality of your
                account
              </li>
              <li>You agree not to engage in any illegal activities</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Content Ownership</h2>
            <p>
              You retain ownership of any content you submit, but grant us a
              license to use it for service provision.
            </p>
          </section>

          <section className="legal-section">
            <h2>4. Termination</h2>
            <p>
              We reserve the right to terminate or suspend access to our service
              for violations of these terms.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Changes to Terms</h2>
            <p>
              We may modify these terms at any time. Continued use constitutes
              acceptance of the new terms.
            </p>
          </section>
        </main>

        <footer className="legal-footer">
          <p>If you have any questions about these Terms, please contact us.</p>
        </footer>
      </div>
    </>
  );
};

export default TermsOfService;

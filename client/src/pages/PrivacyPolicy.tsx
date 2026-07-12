import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function PrivacyPolicy() {
  const lastUpdated = "July 2026";

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <a className="text-xl font-bold text-primary hover:opacity-80 transition-opacity">
              nandooxz web
            </a>
          </Link>
          <Link href="/">
            <a>
              <Button variant="outline" size="sm">
                Back to Home
              </Button>
            </a>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12 max-w-4xl">
        <div className="space-y-8">
          {/* Title */}
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
            <p className="text-muted-foreground">
              Last updated: {lastUpdated}
            </p>
          </div>

          {/* Introduction */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Introduction</h2>
            <p className="text-foreground/90 leading-relaxed">
              Welcome to nandooxz.com ("we," "us," "our," or "Company"). We are committed to protecting your privacy and ensuring you have a positive experience on our website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our website. By accessing and using nandooxz.com, you acknowledge that you have read, understood, and agree to be bound by all the provisions of this Privacy Policy.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
            
            <div className="space-y-4 ml-4">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-primary">1.1 Automatically Collected Information</h3>
                <p className="text-foreground/90 leading-relaxed">
                  When you visit our website, we automatically collect certain information about your device and interaction with our site through Google Analytics, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/90 ml-2">
                  <li><strong>New Users:</strong> Information about new visitors to our site</li>
                  <li><strong>Active Users:</strong> Data about returning and engaged users</li>
                  <li><strong>User Events:</strong> Interactions with our website, including:
                    <ul className="list-circle list-inside space-y-1 text-foreground/90 ml-4 mt-1">
                      <li>Page views and navigation patterns</li>
                      <li>Clicks on buttons, links, and interactive elements</li>
                      <li>Exit events (when you leave our website)</li>
                      <li>Time spent on pages</li>
                      <li>Device type and browser information</li>
                      <li>Geographic location (country/region level)</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-primary">1.2 Cookies and Tracking Technologies</h3>
                <p className="text-foreground/90 leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our website and hold certain information. These may include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/90 ml-2">
                  <li>Google Analytics cookies for website analytics</li>
                  <li>Session cookies to maintain your browsing session</li>
                  <li>Persistent cookies to remember your preferences</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-primary">1.3 Information You Provide</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Currently, we do not collect personal information such as names, email addresses, or contact details through our website. However, if we implement contact forms or other data collection methods in the future, we will update this Privacy Policy accordingly.
                </p>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
            <p className="text-foreground/90 leading-relaxed">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/90 ml-2">
              <li>To understand how visitors use our website and improve user experience</li>
              <li>To analyze website traffic and usage patterns</li>
              <li>To identify technical issues and optimize website performance</li>
              <li>To measure the effectiveness of our marketing efforts</li>
              <li>To create aggregated, anonymized reports about website usage</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          {/* Google Analytics */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">3. Google Analytics</h2>
            <p className="text-foreground/90 leading-relaxed">
              Our website uses Google Analytics, a web analytics service provided by Google, Inc. ("Google"). Google Analytics uses cookies to help us analyze how users use our site. The information generated by the cookie about your use of the website (including your IP address) will be transmitted to and stored by Google on servers in the United States.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Google will use this information for the purpose of evaluating your use of the website, compiling reports on website activity for website operators, and providing other services relating to website activity and internet usage.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Google may also transfer this information to third parties where required to do so by law, or where such third parties process the information on Google's behalf. Google will not associate your IP address with any other data held by Google. You may refuse the use of cookies by selecting the appropriate settings on your browser, however, please note that if you do this you may not be able to use the full functionality of this website.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              For more information about Google Analytics, please visit:{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Google Privacy Policy
              </a>
            </p>
          </section>

          {/* Data Security */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">4. Data Security</h2>
            <p className="text-foreground/90 leading-relaxed">
              We implement appropriate technical and organizational measures to protect the information we collect against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.
            </p>
          </section>

          {/* Data Retention */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">5. Data Retention</h2>
            <p className="text-foreground/90 leading-relaxed">
              We retain the analytics data collected through Google Analytics for as long as necessary to fulfill the purposes outlined in this Privacy Policy. Google Analytics typically retains user-level data for 26 months. For more information about Google's data retention policies, please visit the Google Analytics support page.
            </p>
          </section>

          {/* Your Rights */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">6. Your Rights and Choices</h2>
            
            <div className="space-y-4 ml-4">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-primary">6.1 Cookie Management</h3>
                <p className="text-foreground/90 leading-relaxed">
                  You can control cookies through your browser settings. Most browsers allow you to refuse cookies or alert you when cookies are being sent. Please note that blocking cookies may affect the functionality of our website.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-primary">6.2 Opt-Out of Google Analytics</h3>
                <p className="text-foreground/90 leading-relaxed">
                  You can opt-out of Google Analytics tracking by installing the Google Analytics Opt-out Browser Add-on. Visit:{" "}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Google Analytics Opt-out Add-on
                  </a>
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-primary">6.3 Do Not Track</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Some browsers include a "Do Not Track" feature. Our website currently does not respond to Do Not Track signals, but you may disable tracking through your browser settings or the Google Analytics Opt-out Add-on.
                </p>
              </div>
            </div>
          </section>

          {/* Third-Party Links */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">7. Third-Party Links</h2>
            <p className="text-foreground/90 leading-relaxed">
              Our website may contain links to third-party websites. This Privacy Policy applies only to our website. We are not responsible for the privacy practices of other websites. We encourage you to review the privacy policies of any third-party sites before providing your information.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">8. Children's Privacy</h2>
            <p className="text-foreground/90 leading-relaxed">
              Our website is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected information from a child under 13, we will take steps to delete such information promptly.
            </p>
          </section>

          {/* Changes to Privacy Policy */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">9. Changes to This Privacy Policy</h2>
            <p className="text-foreground/90 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by updating the "Last Updated" date of this Privacy Policy. Your continued use of our website following the posting of revised Privacy Policy means that you accept and agree to the changes.
            </p>
          </section>

          {/* Contact Information */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">10. Contact Us</h2>
            <p className="text-foreground/90 leading-relaxed">
              If you have questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="bg-card border border-border rounded-lg p-6 space-y-2">
              <p className="text-foreground/90">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:nandooxz23@gmail.com"
                  className="text-primary hover:underline"
                >
                  nandooxz23@gmail.com
                </a>
              </p>
              <p className="text-foreground/90">
                <strong>Instagram:</strong>{" "}
                <a
                  href="https://instagram.com/prod.nandooxz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  @prod.nandooxz
                </a>
              </p>
              <p className="text-foreground/90">
                <strong>Website:</strong>{" "}
                <a
                  href="https://www.nandooxz.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  www.nandooxz.com
                </a>
              </p>
            </div>
          </section>

          {/* Acceptance */}
          <section className="space-y-4 border-t border-border pt-8">
            <p className="text-foreground/90 leading-relaxed italic">
              By using nandooxz.com, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 mt-12">
        <div className="container py-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} nandooxz. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

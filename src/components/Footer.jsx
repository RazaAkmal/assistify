
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-6">
            <img src="/img/logo.svg" alt="logo" width={139} height={32} />
            <p>
              Step into the future of effortless assistance, where innovation
              meets simplicity.
            </p>
          </div>
          <div className="col-md-6">
            <div className="row gy-4">
              <div className="col-md-4">
                <div className="footer-item">
                  <h2>Product</h2>
                  <ul>
                    <li>
                      <a href="/examples">Examples</a>
                    </li>
                    <li>
                      <a href="/integrations">Integrations</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="footer-item">
                  <h2>Company</h2>
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/pricing">Pricing</a>
                    </li>
                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="footer-item">
                  <h2>Connect</h2>
                  <ul>
                    <li>
                      <a href="#">Twitter</a>
                    </li>
                    <li>
                      <a href="#">Github</a>
                    </li>
                    <li>
                      <a href="#">Discord</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          <div className="row gy-2">
            <div className="col-md-6 align-self-center">
              <p>Copyright © 2023 Assistify. All rights reserved.</p>
            </div>
            <div className="col-md-6">
              <ul>
                <li>
                  <a href="/terms-of-service">Terms of Service</a>
                </li>
                <li>
                  <a href="/privacy-policy">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

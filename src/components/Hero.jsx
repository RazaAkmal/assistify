import Chat from './Chat';

export default function Hero() {
  return (
    <div className="hero-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="title">
              Craft an AI Assistant <br />
              <span>in Minutes!</span>
            </h1>
            <p className="mx-850 text-center">
              Rapidly Develop a Tailored AI Assistant with OpenAI GPT-3.5:
              Seamlessly Connect to Resources and Upload Files for Comprehensive
              Assistance.
            </p>
            <div className="hero-btn">
              <a href="/contact" className="btn btn-primary">
                Get Started
              </a>
              <a href="/pricing" className="btn btn-tertiary">
                View Pricing
              </a>
            </div>
            <Chat />
          </div>
        </div>
      </div>
    </div>
  );
}

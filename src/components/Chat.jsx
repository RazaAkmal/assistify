
export default function Chat() {
  return (
    <div className="hero-chat mx-850">
      <div className="hero-chat-list">
        <div className="hero-chat-item">
          <img src="/img/user.svg" alt="user" width={32} height={32} />
          <div className="hero-chat-item-content">
            <h3>
              You <span>1:17 PM</span>
            </h3>
            <p>
              What was the revenue generated during the Black Friday Sale 2022
              campaign?
            </p>
          </div>
        </div>
        <div className="hero-chat-item">
          <img
            src="/img/user-assistify.svg"
            alt="user"
            width={32}
            height={32}
          />
          <div className="hero-chat-item-content">
            <h3>
              Assistify <span>1:17 PM</span>
            </h3>
            <p>
              The revenue generated during the Black Friday Sale 2022 campaign
              was $20,000.
            </p>
          </div>
        </div>
        <div className="hero-chat-item">
          <img src="/img/user.svg" alt="user" width={32} height={32} />
          <div className="hero-chat-item-content">
            <h3>
              You <span>1:17 PM</span>
            </h3>
            <p>
              What was the open rate for the Black Friday Sale 2022 campaign?
            </p>
          </div>
        </div>
        <div className="hero-chat-item">
          <img
            src="/img/user-assistify.svg"
            alt="user"
            width={32}
            height={32}
          />
          <div className="hero-chat-item-content">
            <h3>
              Assistify <span>1:17 PM</span>
            </h3>
            <p>
              The open rate for the Black Friday Sale 2022 campaign was 25%.
            </p>
          </div>
        </div>
      </div>
      <div className="hero-chat-input">
        <input type="text" placeholder="Type your message" />
        <button>
          <img src="/img/mail.svg" alt="mail" width={24} height={24} />
        </button>
      </div>
    </div>
  );
}

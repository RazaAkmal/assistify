
export default function FeatureItem({ img, title, content, link }) {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="feature-item">
        <img src={`/img/icon/${img}.svg`} alt="icon" width={80} height={80} />
        <h3>{title}</h3>
        <p>{content}</p>
        {link && (
          <a className="btn btn-secondary" href={`/${link}`}>
            View examples
          </a>
        )}
      </div>
    </div>
  );
}

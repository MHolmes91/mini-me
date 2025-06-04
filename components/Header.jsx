import ReactMarkdown from 'react-markdown';

export default function Header({ title, description, pictureUrl, pictureText }) {
  return (
    <div className="header">
      <div className="header__text">
        <h1 className="header__title">{title}</h1>
        <ReactMarkdown>{description}</ReactMarkdown>
      </div>
      {pictureUrl && (
        <div className="header__picture">
          <img src={pictureUrl} alt={pictureText || ''} title={pictureText || ''} />
        </div>
      )}
    </div>
  );
}

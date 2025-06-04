import ReactMarkdown from 'react-markdown';

export default function Footer({ content }) {
  return (
    <div className="footer">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

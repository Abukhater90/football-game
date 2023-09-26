import '/src/App.css'; 


function Footer({ onPositiveClick, onNegativeClick }) {
  return (
    <div className="footer">
      <button onClick={onPositiveClick}>True</button>
      <button onClick={onNegativeClick}>False</button>
    </div>
  );
}

export default Footer;

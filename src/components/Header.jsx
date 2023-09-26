
import '/src/App.css'; 


trueCount
falseCount

function Header({trueCount, falseCount }) {
  return (
    <div className="header">
      <div>
        <span>true: {trueCount}</span>
        <span>false: {falseCount}</span>
      </div>
    </div>
  );
}

export default Header;

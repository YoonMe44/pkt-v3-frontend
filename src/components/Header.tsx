import Nav from "./Nav"; 

const Header: React.FC = () => {
  return (
    <div className=" overflow-hidden">
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      {/* <Mainvisual /> */}
      <Nav />
    </div>
  );
};

export default Header;

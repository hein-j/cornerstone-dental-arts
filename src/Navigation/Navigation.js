import './Navigation.css';
import {
  NavLink
} from "react-router-dom";

const Break1 = 760;

function BrandContainer (props) {
  const {width} = props;

  
  if (width > Break1) {
    return (
      <div className="brand-container">
        <div className="logo-container">logo{width}</div>
        <div className="name">Cornerstone Dental Arts</div>
      </div>
    )
  } else {
    return null
  }
}

function Navigation (props) {
  const {
    width,
  } = props;

  return (
    <div className={"Navigation" + (width <= Break1 ? " small" : "")}>
      <BrandContainer width={width} />
      <nav className={"tabs-container" + (width <= Break1 ? " small" : "")}>
        <NavLink exact to="/" activeClassName="selected">
          <div className="tab">Home</div>
        </NavLink>
        <NavLink exact to='/team' activeClassName="selected">
          <div className="tab">Team</div>
        </NavLink>
        <NavLink exact to='/services' activeClassName="selected">
          <div className="tab">Services</div>
        </NavLink>
        <NavLink exact to='/contact' activeClassName="selected">
          <div className="tab">Contact</div>
        </NavLink>
      </nav>
    </div>
  )
}

export default Navigation;
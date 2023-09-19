import { useState } from "react";
import { FaTh, FaUserAlt, FaThList, FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo1.png";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/create",
      name: "Create",
      icon: <FaUserAlt />,
    },
    {
      path: "/questionnaire",
      name: "Questionnaires",
      icon: <FaThList />,
    },
  ];

  return (
    <div className="container">
      <div className="sidebar" style={{ width: isOpen ? "200px" : "50px" }}>
        <div className="top_section">
          <div className="logo_img">
            <img
              src={logo}
              alt="logo"
              style={{
                display: isOpen ? "block" : "none",
                width: "40px",
                height: "40px",
              }}
            />
          </div>
          <h1 className="logo" style={{ display: isOpen ? "block" : "none" }}>
            TH
          </h1>
          <div className="bars" style={{ marginLeft: isOpen ? "50px" : "0px" }}>
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              className="link_text"
              style={{ display: isOpen ? "block" : "none" }}
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;

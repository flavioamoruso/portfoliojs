import React from "react";
import { LinkComponent, SocialComponent } from "../utils/links";
import { TiDelete } from "react-icons/ti";
import { useGlobalContext } from "../context";
import Switch from "./Switch";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <>
      <aside
        className={`${isSidebarOpen ? "show-sidebar sidebar" : "sidebar"}`}
        style={{ backgroundColor: "gray" }}
      >
        <div className="sidebar-content">
          <header className="nav-header container">
            <div className="nav-brand">
              <h3 className="nav-brand">MyPortfolio</h3>
            </div>
            <button className="nav-toggler btn icon-btn" onClick={closeSidebar}>
              <TiDelete className="nav-icon" />
            </button>
          </header>
          <div className="container">
            <LinkComponent classLink="sidebar-link" />
          </div>

          <Switch />
          <SocialComponent classSocial="sidebar-social" />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

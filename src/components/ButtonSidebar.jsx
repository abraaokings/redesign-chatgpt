import { IconButtonSidebar } from "../assets/images/iconsSidebar";
const ButtonSidebar = () => {
  return (
    <div className="sidebar-button">
      <div className="sidebar-button-content">
        <IconButtonSidebar />
        <a href="http://">Start a new chat</a>
      </div>
    </div>
  );
};

export default ButtonSidebar;

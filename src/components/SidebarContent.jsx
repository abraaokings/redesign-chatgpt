import { SidebarContainer } from "../styles/Sidebar.style";
import ChatHistoric from "./ChatHistoric";
import { IconStarProfile } from "../assets/images/iconsSidebar";
import SidebarRodape from "./SidebarRodape";

const SidebarContent = () => {
  return (
    <SidebarContainer>
      <div>
        <div className="profile">
          <span className="card-image dot">
            <IconStarProfile />
          </span>
          <div className="profile-body">
            <h2 className="profile-name">Antoine Piedanna</h2>
            <p className="profile-account-type">Free account</p>
          </div>
        </div>
        <ChatHistoric />
      </div>
      <SidebarRodape />
    </SidebarContainer>
  );
};

export default SidebarContent;

import {
  IconClearFooter,
  IconSwitchFooter,
  IconUpgradeFooter,
  IconUpdateFooter,
} from "../assets/images/iconsSidebar";

import IconLogOutFooter from "../assets/images/iconLogOutFooter";

const SidebarRodape = () => {
  const data = [
    { image: <IconClearFooter />, phrase: "Clear all conversations" },
    { image: <IconSwitchFooter />, phrase: "Switch Light Mode" },
    { image: <IconUpgradeFooter />, phrase: "Upgrade to GPT Pro" },
    { image: <IconUpdateFooter />, phrase: "Updates & FAQ" },
    { image: <IconLogOutFooter color="#FF5555" />, phrase: "Log out" },
  ];

  return (
    <div className="rodape-container">
      <hr />
      {data.map((item, index) => (
        <div key={index} className="rodape-content">
          {item.image}
          <p className={index === data.length - 1 ? "last-color-font" : ""}>
            {item.phrase}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SidebarRodape;

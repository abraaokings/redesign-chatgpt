import { styled } from "styled-components";

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #222222;
  height: 100vh;
  padding: 16px;
  border-right: 1px solid #383838;

  .profile {
    display: flex;
    gap: 12px;
    margin: 0 0 24px 0;
    cursor: pointer;
  }

  .card-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .dot {
    width: 40px;
    height: 40px;
    background-color: #019a5a;
    border-radius: 50%;
  }

  .profile {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    padding: 12px 16px;
  }

  .profile-name {
    color: #e5e5e5;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }

  .profile-account-type {
    font-size: 14px;
    font-weight: 400;
    color: rgba(229, 229, 229, 0.4);
  }

  .chat-container,
  .rodape-container {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .chat-content,
  .rodape-content {
    display: flex;
    gap: 12px;
    align-items: center;
    padding: 12px 16px;
    cursor: pointer;
  }

  .rodape-container hr {
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  .chat-content:hover,
  .rodape-content:hover {
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
  }

  .chat-content p,
  .rodape-content p {
    color: #e5e5e5;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
  }

  .rodape-content > .last-color-font {
    color: #ff5555;
  }

  .sidebar-button {
    padding: 16px 0 0 0;
  }

  .sidebar-button-content {
    display: flex;
    gap: 12px;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    background: linear-gradient(
      91.96deg,
      rgba(1, 154, 90, 0.7) -16.64%,
      rgba(1, 154, 90, 0.8) 117.28%
    );
    border: 1px solid #019a5a;
    border-radius: 10px;
    padding: 12px 16px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
  }

  .sidebar-button a {
    text-decoration: none;
    line-height: 24px;
    color: #e5e5e5;
  }
`;

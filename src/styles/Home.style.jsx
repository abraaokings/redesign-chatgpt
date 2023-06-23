import { styled } from "styled-components";

export const HomeContainer = styled.div`
  padding: 12px 15px 12px 15px;
  background-color: #000000;
  color: #e5e5e5;

  .home-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #222222;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    border: 1px solid #383838;
  }

  .home-intro {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 189px 0 64px 0;
  }
  .home-intro h1 > span {
    border-left: 3px solid #097e4d;
    padding-left: 3px;
    background: linear-gradient(
      90deg,
      rgba(9, 127, 77, 0.5) 0%,
      rgba(9, 127, 77, 0) 100%
    );
  }
  .home-intro > h1 {
    font-size: 48px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: 0.96px;
  }
  .home-intro > p {
    font-size: 16px;
    line-height: 150%;
  }
  .input-container form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 719px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    border: 1px solid #6c6d6b;
    padding: 6px 6px 6px 16px;
  }
  .input-container form > input[type="text"] {
    width: 100%;
    outline: none;
    border: none;
    background: none;
    font-size: 16px;
    color: #e5e5e5;
  }
  .input-container form > input[type="text"]::placeholder {
    color: rgba(229, 229, 229, 0.3);
  }
  .input-container form > button {
    width: 44px;
    height: 44px;
    color: rgba(229, 229, 229, 0.3);
    padding: 12px;
    border: none;
    border-radius: 10px;
    background: linear-gradient(
      139deg,
      rgba(1, 154, 90, 0.7) 0%,
      rgba(1, 154, 90, 0.8) 100%
    );
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
  }

  /* .input-content {
    max-width: 100%;
    position: relative;
  }

  .input-container {
    width: 100%;
    max-width: 719px;
    height: 56px;
  }

  .input-content input {
    padding: 16px;
    outline: none;
    border: 1px solid #6d6e6c;
    color: #e5e5e5;
    width: 100%;
    border-radius: 10px;
    font-size: 16px;
    background: rgba(255, 255, 255, 0.05);
  }

  .input-content input::placeholder {
    color: rgba(229, 229, 229, 0.3);
    font-size: 16px;
    font-weight: 500;
  }

  .input-content button {
    position: absolute;
    top: 4px;
    right: 4px;
    bottom: 4px;
    width: 44px;
    height: 44px;
    padding: 12px;
    border-radius: 10px;
    background: linear-gradient(
      139deg,
      rgba(1, 154, 90, 0.7) 0%,
      rgba(1, 154, 90, 0.8) 100%
    );
    border: 1px solid #039558;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
  } */

  .funct-container {
    display: flex;
    gap: 47px;
    padding: 104px 0 0 0;
  }

  .funct-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    width: 202px;
  }

  .funct-body {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 4px;
  }
  .funct-body h2 {
    color: #e5e5e5;
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
  }
  .funct-body p {
    font-size: 14px;
    font-weight: 300;
    line-height: 150%;
  }
`;

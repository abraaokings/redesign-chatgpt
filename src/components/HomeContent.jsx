import { HomeContainer } from "../styles/Home.style";
import HomeInput from "./HomeInput";
import HomeFunct from "./HomeFunct";

const HomeContent = () => {
  return (
    <HomeContainer>
      <div className="home-wrapper">
        <div className="home-intro">
          <h1>
            Welcome to <span>ChatGPT</span>
          </h1>
          <p>The power of AI at your service - Tame the knowledge!</p>
        </div>
        <HomeInput />
        <HomeFunct />
      </div>
    </HomeContainer>
  );
};

export default HomeContent;

import { IconUpdateFooter } from "../assets/images/iconsSidebar";
import { IconLocationHome, IconTrendingHome } from "../assets/images/iconsHome";

const HomeFunct = () => {
  const data = [
    {
      image: <IconUpdateFooter />,
      title: "Clear and precise",
      phrase: "Pariatur sint laborum cillum aute consectetur irure.",
    },
    {
      image: <IconLocationHome />,
      title: "Personalized answers",
      phrase: "Pariatur sint laborum cillum aute consectetur irure.",
    },
    {
      image: <IconTrendingHome />,
      title: "Increased efficiency",
      phrase: "Pariatur sint laborum cillum aute consectetur irure.",
    },
  ];
  return (
    <div className="funct-container">
      {data.map((item) => (
        <div key={item} className="funct-content">
          {item.image}
          <div className="funct-body">
            <h3>{item.title}</h3>
            <p>{item.phrase}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeFunct;

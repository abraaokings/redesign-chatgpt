import { IconChatBubble } from "../assets/images/iconsSidebar";
import ButtonSidebar from "./ButtonSidebar";

const ChatHistoric = () => {
  const data = [
    { image: <IconChatBubble />, phrase: "How to write an impacting..." },
    { image: <IconChatBubble />, phrase: "Web accessibility" },
    { image: <IconChatBubble />, phrase: "Design inspiration" },
    { image: <IconChatBubble />, phrase: "What is machine learning" },
  ];
  return (
    <div className="chat-container">
      {data.map((item) => (
        <div key={item} className="chat-content">
          {item.image}
          <p>{item.phrase}</p>
        </div>
      ))}
      <ButtonSidebar />
    </div>
  );
};

export default ChatHistoric;

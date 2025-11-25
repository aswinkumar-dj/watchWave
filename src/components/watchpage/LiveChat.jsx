import { useEffect, useState } from "react";
import ChatMsg from "./ChatMsg";
import { useChatStore } from "../../utils/useChatStore";
import { generateName } from "../../utils/constants";

const LiveChat = () => {
  const [liveMsg, setLiveMsg] = useState("");

  const messages = useChatStore((state) => state.messages);
  const addMessage = useChatStore((state) => state.addMessage);

  useEffect(() => {
    const i = setInterval(() => {
      addMessage({
        name: generateName(),
        message: "Lorum ipsum good",
      });
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="ml-2 w-full  rounded-lg p-4 h-[495px] bg-black/30 overflow-y-scroll flex flex-col-reverse">
        {messages.map((c, i) => (
          <ChatMsg key={i} name={c.name} message={c.message} />
        ))}
      </div>

      <form
        className="flex"
        onSubmit={(e) => {
          e.preventDefault();
          addMessage({
            name: "Ashwin",
            message: liveMsg,
          });
          setLiveMsg("");
        }}
      >
        <input
          type="text"
          className="w-full p-2 ml-2 border border-gray-600 rounded-l-lg bg-black/30 my-2"
          value={liveMsg}
          onChange={(e) => setLiveMsg(e.target.value)}
        />

        <button className="bg-gray-900 px-6 my-2 rounded-r-lg hover:bg-gray-900/30">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;

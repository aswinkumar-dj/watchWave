import { useEffect, useState } from "react";
import ChatMsg from "./ChatMsg";
import { useChatStore } from "../../utils/useChatStore";
import { generateName } from "../../utils/constants";

const LiveChat = () => {
  const [liveMsg, setLiveMsg] = useState("");

  const messages = useChatStore((state) => state.messages);
  const addMessage = useChatStore((state) => state.addMessage);

  useEffect(() => {
    const intervalId = setInterval(() => {
      addMessage({
        name: generateName(),
        message: "Lorum ipsum good",
      });
    }, 2000);

    return () => clearInterval(intervalId);
  }, [addMessage]);

  return (
    <section className="rounded-2xl bg-black/20 p-3 sm:p-4">
      <h2 className="mb-3 text-lg font-semibold sm:text-xl">Live chat</h2>
      <div className="flex h-72 w-full flex-col-reverse overflow-y-scroll rounded-xl bg-black/30 p-4 md:h-80 xl:h-[495px]">
        {messages.map((c, i) => (
          <ChatMsg key={i} name={c.name} message={c.message} />
        ))}
      </div>

      <form
        className="mt-3 flex flex-col gap-2 sm:flex-row"
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
          className="w-full rounded-lg border border-gray-600 bg-black/30 p-2 sm:rounded-l-lg sm:rounded-r-none"
          value={liveMsg}
          onChange={(e) => setLiveMsg(e.target.value)}
        />

        <button className="rounded-lg bg-gray-900 px-6 py-2 hover:bg-gray-900/30 sm:rounded-l-none sm:rounded-r-lg">
          Send
        </button>
      </form>
    </section>
  );
};

export default LiveChat;

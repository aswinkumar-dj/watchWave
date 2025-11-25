import { create } from "zustand";
import { OFFSET_LIVE_CHAT } from "./constants";

export const useChatStore = create((set) => ({
  messages: [],

  addMessage: (newMessage) =>
    set((state) => {
      const updated = [...state.messages];

      // remove oldest live chat message
      updated.splice(OFFSET_LIVE_CHAT, 1);

      // add new message at the beginning
      updated.unshift(newMessage);

      return { messages: updated };
    }),
}));

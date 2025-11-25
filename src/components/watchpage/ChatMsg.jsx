import { PROFILE_URL } from "../../utils/constants";

const ChatMsg = ({ name, message }) => {
  return (
    <div className="flex items-center p-2 border-b border-b-gray-700 hover:bg-gray-800">
      <img
        alt="user"
        src={PROFILE_URL}
        className="h-10 w-10 rounded-full cursor-pointer"
      />
      <div className="pl-2 space-x-2 ">
        <span className="font-bold">{name}</span>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default ChatMsg;

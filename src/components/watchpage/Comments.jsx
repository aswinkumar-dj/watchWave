import { PROFILE_URL } from "../../utils/constants";

const Comments = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="my-2 flex items-start gap-3 rounded-xl bg-black/30 p-3 shadow-sm">
      <img
        alt="comments"
        src={PROFILE_URL}
        className="w-10 rounded-full sm:w-12"
      />
      <div className="min-w-0">
        <p className="font-bold">{name}</p>
        <p className="break-words text-sm text-gray-300 sm:text-base">{text}</p>
      </div>
    </div>
  );
};

export default Comments;

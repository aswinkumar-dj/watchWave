import { PROFILE_URL } from "../../utils/constants";

const Comments = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-black/30 p-2 rounded-lg my-2 space-x-4">
      <img alt="comments" src={PROFILE_URL} className="w-12 rounded-full " />
      <div>
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comments;

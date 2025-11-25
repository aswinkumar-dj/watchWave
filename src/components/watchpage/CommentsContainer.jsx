import Comments from "./Comments";

const commentsData = [
  {
    name: "Ashwin",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    replies: [
      {
        name: "Ashwin",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        replies: [
          {
            name: "Ashwin",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
            replies: [
              {
                name: "Ashwin",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
                replies: [
                  {
                    name: "Ashwin",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
                    replies: [
                      {
                        name: "Ashwin",
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
                        replies: [
                          {
                            name: "Ashwin",
                            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
                            replies: [],
                          },
                          {
                            name: "Ashwin",
                            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
                            replies: [
                              {
                                name: "Ashwin",
                                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
                                replies: [],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Ashwin",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    replies: [],
  },
  {
    name: "Ashwin",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    replies: [],
  },
  {
    name: "Ashwin",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    replies: [],
  },
  {
    name: "Ashwin",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    replies: [],
  },
];

const CommentsList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => (
        <div key={index}>
          <Comments data={comment} />
          <div className="pl-5 border-l-2 border-l-black ml-1">
            <CommentsList comments={comment.replies} />
          </div>
        </div>
      ))}
    </div>
  );
};
const CommentsContainer = () => {
  return (
    <div className="m-2 w-223 p-2">
      <h1 className="text-2xl font-bold mb-6">Comments</h1>
      <div>
        <CommentsList comments={commentsData} />
      </div>
    </div>
  );
};

export default CommentsContainer;

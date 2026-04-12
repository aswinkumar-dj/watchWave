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
          <div className="ml-2 border-l border-white/10 pl-3 sm:ml-4 sm:pl-5">
            <CommentsList comments={comment.replies} />
          </div>
        </div>
      ))}
    </div>
  );
};
const CommentsContainer = () => {
  return (
    <div className="mt-6 w-full px-1 sm:px-0">
      <h1 className="mb-6 text-xl font-bold sm:text-2xl">Comments</h1>
      <div>
        <CommentsList comments={commentsData} />
      </div>
    </div>
  );
};

export default CommentsContainer;

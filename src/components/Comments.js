import React from "react";
import User from "./icons/User";

const Comments = ({ comments }) => {
  return (
    <div className="mb-24">
      <h2 className="text-2xl pb-6 text-center">Comments</h2>
      {comments?.map((comment) => (
        <div className="p-4 shadow-md rounded-md mb-4" key={comment.id}>
          <div className="flex gap-x-2">
            <User className={"h-6 w-6"} />
            <div className="font-bold text-lg">
              {comment.name} ({comment.email})
            </div>
          </div>
          <p>{comment.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;

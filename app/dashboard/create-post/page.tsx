"use client";

import { useState } from "react";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleTitleChange(e : React.FormEvent<HTMLFormElement>) {
    setTitle(e.target.value);
  }

  function handleContentChange(e: React.FormEvent<HTMLFormElement>) {
    setContent(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <>
      <form>
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold">Create Post</h1>
          <button>Close x</button>
        </div>

        <div>
          {/* title */}
          <div>
            <h1 className="text-xl">Title</h1>

            <input
              type="text"
              value={title}
              onChange={handleTitleChange}
              onSubmit={handleSubmit}
              placeholder="Title here"
              className="border w-1/2 h-10 rounded-2xl"
            ></input>
            {/* <p>Title: {title}</p> */}
          </div>

          {/* content */}
          <div>
            <h1>Content</h1>

            <input
              type="text"
              value={content}
              onChange={handleContentChange}
              onSubmit={handleSubmit}
              placeholder="Content here"
              className="border w-1/2 h-20 rounded-2xl"
            ></input>
          </div>

          {/* image */}
          <div>
            <h1>Upload Image</h1>
            <p>image area here</p>
          </div>

          {/* tags */}
          <div>
            <h1>Tags/Categories</h1>
            <p>Tags input here</p>
          </div>

          {/* buttons */}
          <div className="flex justify-center">
            <button type="button">Cancel</button>
            <button type="submit">Publish</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default CreatePost;

"use client"

import PacmanLoader from "react-spinners/PacmanLoader";

function Loading() {
  return (
    <div className="flex h-screen w-full justify-center pt-20">
      <PacmanLoader loading={true} color="#333333" />
    </div>
  )
}

export default Loading

import React from "react";

export default function Home(props) {
  return (
    <div>
      Home
      <button
        onClick={() =>
          props.history.push('/xxx', {name:1})
        }
      >
        goto user
      </button>
      <button onClick={() => props.history.push("/profile")}>
        goto profile
      </button>
    </div>
  );
}

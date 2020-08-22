import React, { useEffect } from "react";
import { Link } from "react-router-dom";


export default function Page2() {

  return (
    <div className="App">
      <h1>Hello CodeSandbox Page 2</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
}

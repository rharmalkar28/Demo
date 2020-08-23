import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";

export default function Page2() {
  const [processing, setProcessing] = useState();
  function handleSubmit() {
    console.log("stest");

  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox Page 2</h1>
      <div>
        <TextField
          className="mr-tp-one"
          variant="outlined"
          label="Email"
        // fullWidth
        />
      </div>
      <div>
        <TextField
          className="mr-tp-one"
          variant="outlined"
          label="Comment"
        // fullWidth
        />
      </div>
      <div>
        <Button
          variant="contained"
          color="primary"
          className="mr-tp-one"
          onClick={!processing ? handleSubmit() : null}
          disabled={processing}
        >
          save
      </Button>
      </div>

    </div>
  );
}

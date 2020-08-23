import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";
import axios from 'axios';
import useGlobalState from '../Context';
import { useHistory } from 'react-router-dom';


export default function Page2() {
  const store = useGlobalState();

  const history = useHistory();

  const [feedbackObj, setFeedbackObj] = useState({
    'comments': '',
    tags: []
  })

  const submitForm = async () => {
    const res = await axios.post('http://localhost:3000/addFeedback', feedbackObj);
    store.addFeedback(res.data);
    history.push('/page1')
  }

  return (
    <div className="App">
      <div>
        <TextField
          className="mr-tp-one"
          variant="outlined"
          label="Email"
          value={feedbackObj.comments}
          onChange={(e) => setFeedbackObj({ ...feedbackObj, comments: e.target.value })}
        // fullWidth
        />
      </div>
      <div>
        <TextField
          className="mr-tp-one"
          variant="outlined"
          label="Comment"
          value={feedbackObj.tags}
          onChange={(e) => setFeedbackObj({ ...feedbackObj, tags: e.target.value.split(" ") })}
        // fullWidth
        />
      </div>
      <div>
        <Button
          variant="contained"
          color="primary"
          className="mr-tp-one"
          onClick={submitForm}
        >
          save
      </Button>
      </div>
    </div>
  );
}

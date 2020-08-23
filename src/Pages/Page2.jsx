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

  const submitForm = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:3000/addFeedback', feedbackObj);
    store.addFeedback(res.data);
    history.push('/page2')
  }

  return (
    <div className="App">
      <form onSubmit={submitForm}>
        <div>
          <TextField
            className="mr-tp-one"
            variant="outlined"
            label="Comments"
            multiline
            rows={3}
            value={feedbackObj.comments}
            onChange={(e) => setFeedbackObj({ ...feedbackObj, comments: e.target.value })}
            required
          />
        </div>
        <div>
          <TextField
            className="mr-tp-one"
            variant="outlined"
            label="Tags"
            value={feedbackObj.tags}
            onChange={(e) => setFeedbackObj({ ...feedbackObj, tags: e.target.value.split(" ") })}
            required
          />
        </div>
        <div>
          <input type="submit" value="Save" className="submitBtn" />
        </div>
      </form>
    </div>
  );
}

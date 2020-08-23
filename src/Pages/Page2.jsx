import React, { useEffect, useState } from "react";
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
      <input type="text" value={feedbackObj.comments} onChange={(e) => setFeedbackObj({ ...feedbackObj, comments : e.target.value}) } />
      <input type="text" value={feedbackObj.tags} onChange={(e) => setFeedbackObj({ ...feedbackObj, tags : e.target.value.split(" ")}) } />
      <button onClick={submitForm}>Add</button>
    </div>
  );
}

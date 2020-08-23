import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useObserver } from 'mobx-react-lite';
import FormPage1 from "../Components/FormPage1";
import useGlobalState from '../Context';


const Page1 = () => {

  const store = useGlobalState();

  useEffect(() => {
    (async () => {
      const res = await axios.get('http://localhost:3000/fetchFeedback');
      store.saveFeedback(res.data);
    })();
  }, []);

  return useObserver(() => (
    <div className="App">
      {store.feedbacks.map(feedback => (
        <div>
          <p>{feedback.comments}</p>
          <p>{feedback.tags}</p>
          <p>{feedback.id}</p>
        </div>
      ))}
    </div>
  ));
};

export default Page1;

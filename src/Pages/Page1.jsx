import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useObserver } from 'mobx-react-lite';
import { Table, TableHead, TableCell, TableRow, TableBody } from "@material-ui/core";
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
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Comments</TableCell>
            <TableCell>Tags</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {store.feedbacks.map(feedback => (
            <TableRow key={`tableKey_${feedback.id}`}>
              <TableCell>{feedback.id}</TableCell>
              <TableCell>{feedback.comments}</TableCell>
              <TableCell>{feedback.tags}</TableCell>
            </TableRow>
          ))}
          {!store.feedbacks.length ? (
            <TableRow>
              <TableCell colSpan={3}>No data found</TableCell>
            </TableRow>
          ) : null}

        </TableBody>
      </Table>
    </div>
  ));
};

export default Page1;

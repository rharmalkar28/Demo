import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { observer } from 'mobx-react-lite';
import { TextField, Table, TableHead, TableCell, TableRow, TableBody, Button } from "@material-ui/core";
import FormPage1 from "../Components/FormPage1";
import useGlobalState from '../Context';


const Page1 = observer(() => {

  const store = useGlobalState();

  const [currentFeedback, setCurrentFeedback] = useState({});

  useEffect(() => {
    (async () => {
      const res = await axios.get('http://localhost:3000/fetchFeedback');
      store.saveFeedback(res.data);
    })();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const res = await axios.put(`http://localhost:3000/updateFeedback/${currentFeedback.id}`, currentFeedback);
    console.log(res, 'AAAAAA');
    store.updateFeedback(res.data);
    setCurrentFeedback({});
  }

  return (
    <div className="App">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Comments</TableCell>
            <TableCell>Tags</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {store.feedbacks.map(feedback => (
            <TableRow key={`tableKey_${feedback.id}`} >
              <TableCell>{feedback.id}</TableCell>
              <TableCell>{feedback.comments}</TableCell>
              <TableCell>{feedback.tags}</TableCell>
              <TableCell>
                <Button onClick={() => setCurrentFeedback(feedback)}>Update</Button>
              </TableCell>
            </TableRow>
          ))}

          {!store.feedbacks.length ? (
            <TableRow>
              <TableCell colSpan={3}>No data found</TableCell>
            </TableRow>
          ) : null}

        </TableBody>
      </Table>
      {Object.keys(currentFeedback).length ? (<form onSubmit={handleUpdate}>
        <div>
          <TextField
            className="mr-tp-one"
            variant="outlined"
            label="Comments"
            multiline
            rows={3}
            value={currentFeedback.comments}
            onChange={(e) => setCurrentFeedback({ ...currentFeedback, comments: e.target.value })}
            required
          />
        </div>
        <div>
          <TextField
            className="mr-tp-one"
            variant="outlined"
            label="Tags"
            value={currentFeedback.tags}
            onChange={(e) => setCurrentFeedback({ ...currentFeedback, tags: e.target.value.split(" ") })}
            required
          />
        </div>
        <div>
          <input type="submit" value="Update" />
        </div>
      </form>) : ''}

    </div>
  );
});

export default Page1;

import React, { useEffect } from "react";
import { TextField, Button } from "@material-ui/core";
import Page1Form from "../Forms/Page1/Page1Form";

const FormPage1 = () => {
  const form = Page1Form();
  const name = form.$("name");

  function handleSubmit() {
    form.validate({ showErrors: true }).then(async ({ isValid }) => {
      if (isValid) {
        console.log({ processing: true });
        try {
          console.log({ processing: false });
        } catch (err) {
          console.log({ processing: false });
        }
      }
    });
  }

  return (
    <>
      <TextField
        className="onehalf-rem-mt"
        variant="outlined"
        fullWidth
        {...name.bind()}
        error={name.hasError}
        helperText={name.error}
      />
      <Button onClick={handleSubmit} color="primary" autoFocus>
        Submit
      </Button>
    </>
  );
};

export default FormPage1;

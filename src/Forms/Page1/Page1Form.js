import { Form } from "mobx-react-form";
import validatorjs from "validatorjs";

const fields = ["name"];

const labels = {
  username: "Name"
};

const rules = {
  username: "required|string"
};

const options = {
  validateOnInit: false,
  validateOnChange: true
};

const plugins = {
  dvr: {
    package: validatorjs
  }
};
export default function Page1Form() {
  return new Form({ fields, labels, rules }, { plugins, options });
}

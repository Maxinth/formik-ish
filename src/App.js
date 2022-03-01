import "./App.css";
import CustomField from "./components/CustomField";
import { useFormik } from "formik";
import { Button } from "./components/Button";

function App() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
    onSubmit: (values) => {
      console.log("Form data", values);
    },
  });

  // console.log("Form values : ", formik.values);
  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit}>
        <CustomField
          label="name"
          value={formik.values.name}
          handleChange={formik.handleChange}
        />
        <CustomField
          label="email"
          value={formik.values.email}
          handleChange={formik.handleChange}
        />
        <CustomField
          label="channel"
          value={formik.values.channel}
          handleChange={formik.handleChange}
        />
        <Button type="primary">Submit</Button>
      </form>
    </div>
  );
}

export default App;

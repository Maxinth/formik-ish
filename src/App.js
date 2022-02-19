import "./App.css";
import CustomField from "./components/CustomField";
import { useFormik } from "formik";

function App() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
  });

  console.log("Form values : ", formik.values);
  return (
    <div className="App">
      <form>
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
        <button type="button">Submit</button>
      </form>
    </div>
  );
}

export default App;

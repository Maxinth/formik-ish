import PropTypes from "prop-types";

const CustomField = ({ label, value, type = "text", handleChange }) => {
  return (
    <div className="field">
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        value={value}
        name={label}
        id={label}
        onChange={handleChange}
      />
    </div>
  );
};

CustomField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  handleChange: PropTypes.func,
};
export default CustomField;

/* 
formik needs either an id or name attribute matching the values 
     
supplied in the initial values object

*/

import PropTypes from "prop-types";

const CustomField = ({ label, value, type }) => {
  return (
    <div className="field">
      <label htmlFor={label}>{label}</label>
      <input type={type} value={value} name={label} id={label} />
    </div>
  );
};

CustomField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
};
export default CustomField;

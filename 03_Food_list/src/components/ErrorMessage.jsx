const ErrorMessage = ({ items }) => {
  return <>{items.length == 0 && <h3>There is No Menu Here.</h3>}</>;
};

export default ErrorMessage;

import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    
    return (
      <div className="error-container">
        <h1>Oops!!</h1>
        <h1>Something Went Wrong!!</h1>
        <h2>{err.status + " : " + err.statusText}</h2>
        <h2>{err?.data}</h2>
      </div>
    );
}
export default Error;
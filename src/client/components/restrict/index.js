// component imports
import { React } from "react";
// style imports
import "./index.scss";

// restrict component
const Restrict = () => {
  return (
    <div className="restrict">
      <div className="wrapper text-center">
        <div className="title">View on Desktop</div>
        <div className="subtitle mt-1">Only a desktop device is supported</div>
      </div>
    </div>
  );
};

// restrict component export
export default Restrict;

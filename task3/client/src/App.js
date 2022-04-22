import "./index.css";
import React, { Component } from "react";
import Folder from "./components/Folder";
import { connect } from "react-redux";
import { request_data } from "./redux/actions/action";
import "bootstrap/dist/css/bootstrap.min.css";

const mapStateToProps = ({ dataReducer }) => {
  return { dataReducer };
};

export default connect(mapStateToProps, null)(
  class App extends Component {
    componentDidMount() {
      this.props.dispatch(request_data());
    }

    render() {
      const { folderData } = this.props.dataReducer;

      return (
        <div className="container">
          {folderData.map((data) => {
            return <Folder  key={data.name} data={data} nestedIndex={1} />;
          })}
        </div>
      );
    }
  }
);

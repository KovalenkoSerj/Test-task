import "./index.css";
import React, { Component } from "react";
import Folder from "./components/Folder";
import { connect } from "react-redux";
import { request_data, search_data } from "./redux/actions/action";
import "bootstrap/dist/css/bootstrap.min.css";

const mapStateToProps = ({ dataReducer }) => {
  return { dataReducer };
};

export default connect(
  mapStateToProps,
  null
)(
  class App extends Component {
    state = {
      searchText: "",
      isSearch : false,
    };

    initialRequest = () => {
      this.props.dispatch(request_data());
    };

    componentDidMount() {
      this.initialRequest();
    }

    handleChange = (e) => {
      this.setState({ searchText: e.target.value });
    };
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.dispatch(search_data(this.state.searchText));
      this.setState({
        searchText: "",
        isSearch: !this.state.isSearch
      });
    };

    render() {
      const { folderData } = this.props.dataReducer;

      return (
        <div className="container">
          <form onSubmit={this.handleSubmit} className="d-flex flex-row form-group">
            <div >
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                onChange={this.handleChange}
                value={this.state.searchText}
              />
            </div>
            <button type="submit" className="btn btn-primary" disabled={!this.state.searchText}>
              Search
            </button>
          </form>
          
          {folderData.length ? (
            folderData.map((data) => {
              return (
                <Folder
                  key={data.name}
                  data={data}
                  nestedIndex={1}
                  expanded={data.expanded}
                  isSearch={this.state.isSearch}
                />
              );
            })
          ) : (
            <h2>No Files Found</h2>
          )}
        </div>
      );
    }
  }
);

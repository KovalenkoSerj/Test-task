import React, { Component } from "react";
import File from "./File";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faFolderOpen } from "@fortawesome/free-solid-svg-icons";

export default class Folder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    };
  }

 
  componentDidUpdate(prevProps, prevState) {
    const { expanded, isSearch } = this.props;
    if (expanded && isSearch && prevProps.expanded !== prevState.expanded) {
      this.setState({ expanded });
    }
  }

  toggleExpandFolder = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { name, children } = this.props.data;
    return (
      <div className="p-2 bd-highlight">
        <div onClick={this.toggleExpandFolder} style={{ cursor: "pointer" }}>
          {this.state.expanded ? (
            <FontAwesomeIcon icon={faFolderOpen} />
          ) : (
            <FontAwesomeIcon icon={faFolder} />
          )}
          &nbsp;
          <span>{name}</span>
        </div>
        {this.state.expanded && (
          <div>
            {children.map((child) => {
              return child.type === "FOLDER" ? (
                <Folder
                  key={child.name}
                  data={child}
                  expanded={this.state.expanded}
                  isSearch={this.props.isSearch}
                />
              ) : (
                <File key={child.name} file={child} />
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

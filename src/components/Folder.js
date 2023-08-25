import { useState } from "react";

const Folder = ({ explorer, visible }) => {
  const [isVisible, setIsVisible] = useState(false);

  const expand = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div
      className={explorer.isFolder ? "folder" : "file"}
      style={{ display: visible ? "block" : "none" }}
    >
      <span className="path" onClick={expand}>
        {explorer.isFolder ? "📁" : "📃"}
        {explorer.name}

        {/* <button> + Add Folder</button>
        <button> + Add file</button> */}
      </span>
      {explorer.items.map((item) => {
        return (
          <Folder
            key={item.name}
            visible={isVisible}
            element={this}
            explorer={item}
          />
        );
      })}
    </div>
  );
};

export default Folder;

const Folder = ({ explorer }) => {
  const toggleFolder = (event) => {
    const parentElement = event.nativeEvent.target;
    const childFolders = Array.from(parentElement?.children).filter((child) =>
      child.classList.contains("folder")
    );

    childFolders.forEach((element) => {
      element.classList.toggle("open");
    });
  };

  return (
    <div
      className={explorer.id === "1" ? "folder parent" : "folder"}
      onClick={toggleFolder}
      style={{ marginTop: 5, marginLeft: 15 }}
    >
      <span>
        {explorer.isFolder ? "📁" : "📃"}
        {explorer.name}
      </span>

      {explorer.items.map((item) => {
        return <Folder key={item.name} explorer={item} />;
      })}
    </div>
  );
};

export default Folder;

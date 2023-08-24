const explorer = {
  id: "1",
  name: "root",
  isFolder: true,
  items: [
    {
      id: "2",
      name: "public",
      isFolder: true,
      items: [
        {
          id: "3",
          name: "public nested 1",
          isFolder: true,
          items: [
            {
              id: "3",
              name: "public nested 1_1",
              isFolder: true,
              items: [
                {
                  id: "4",
                  name: "index.html",
                  isFolder: false,
                  items: [],
                },
              ],
            },
            {
              id: "4",
              name: "index.html",
              isFolder: false,
              items: [],
            },
            {
              id: "4",
              name: "hello.html",
              isFolder: false,
              items: [],
            },
            {
              id: "4",
              name: "about.html",
              isFolder: false,
              items: [],
            },
          ],
        },
        {
          id: "6",
          name: "public_nested_file",
          isFolder: false,
          items: [],
        },
      ],
    },
    {
      id: "7",
      name: "src",
      isFolder: true,
      items: [
        {
          id: "8_1",
          name: "Components",
          isFolder: true,
          items: [
            {
              id: "8_1_1",
              name: "Folder.js",
              isFolder: false,
              items: [],
            },
          ],
        },
        {
          id: "8",
          name: "App.js",
          isFolder: false,
          items: [],
        },
        {
          id: "9",
          name: "Index.js",
          isFolder: false,
          items: [],
        },
        {
          id: "10",
          name: "style.css",
          isFolder: false,
          items: [],
        },
      ],
    },
    {
      id: "11",
      name: "package.json",
      isFolder: false,
      items: [],
    },
  ],
};

export default explorer;

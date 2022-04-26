const fs = require("fs");
const path = require("path");
const rootDir = require("../util/path");
const data = path.join(rootDir, "data", "data.json");

exports.getData = (req, res, next) => {
  fs.readFile(data, (err, fileContent) => {
    if (err) {
      console.error(err);
      return;
    }
    res.json(JSON.parse(fileContent));
  });
};

exports.searchData = (req, res, next) => {
  const { searchText } = req.body;
  fs.readFile(data, (err, fileContent) => {
    if (err) {
      console.error(err);
      return;
    }

    const file = JSON.parse(fileContent);

    function searchData(folder, searchingName) {
      return folder.flatMap((obj) => {
        const objIncludesSearchFile = Object.entries(obj).some(
          ([key, value]) =>
            key !== "children" &&
            value.toLowerCase().includes(searchingName.toLowerCase())
        );

        if (objIncludesSearchFile && !obj.children) return [obj];

        const childrenExist = searchData(obj.children ?? [], searchingName);
        return objIncludesSearchFile || childrenExist.length > 0
          ? [
              {
                ...obj,
                children: childrenExist,
                expanded: true
              }
            ]
          : [];
      });
    }
    const result = searchData(file, searchText);
    res.json(result);
  });
};

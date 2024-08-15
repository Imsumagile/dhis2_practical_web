const data = {
  "id": "UDSMDHIS2LB",
  "name": "UDSM DHIS2 Lab",
  "parent": {
    "id": "CSE12345678",
    "name": "CSE",
    "parent": {
      "id": "CoICT78767",
      "name": "CoICT",
      "parent": {
        "id": "UDSM1234567",
        "name": "UDSM"
      }
    }
  }
};

const generateHierarchyString = (obj) => {
  let hierarchy = obj.name;
  
  while (obj.parent) {
    obj = obj.parent;
    hierarchy += '/' + obj.name;
  }

  return hierarchy;
};

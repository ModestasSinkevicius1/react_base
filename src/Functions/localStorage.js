//Prevents previous ID to be used
//Generates new ID
function getId(key) {
  let id = localStorage.getItem(key + "_id");
  if (id === null) {
    id = 0;
  } else {
    id = parseInt(id);
  }
  id++;
  localStorage.setItem(key + "_id", id);
  return id;
}

function readData(key){
    const data = localStorage.getItem(key);

    //we return empty array if storage is empty
    if(null === data){
        localStorage.setItem(key, JSON.stringify([]));
        return [];
    }
    return JSON.parse(data);
}

function write(key, data){
    localStorage.setItem(key, JSON.stringify(data));
}

// CRUD

export function create(key, data) {
    const d = readData(key);

    //assign id for item
    data.id = getId(key);

    //adding item to list
    d.push(data);

    //calling function to write list to local storage
    write(key, d);
}

export function read(key) {
    //returns all items from local storage
    return readData(key);
}

export function update(key, data, newKey) {
    const d = readData(key);

    //writes new record with same ID
    write(key, d.map(row => row.id !== newKey ? {...row} : {...data}));
}

export function erase(key, id){
    const d = readData(key);

    //rewrites items except corresponding id
    write(key, d.filter(row => row.id !== id));
}
function generateId(key) {
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

function readLS(key){
    const data = localStorage.getItem(key);
    if(data === null){
        localStorage.setItem(key, JSON.stringify([]));
        return [];
    }
    return JSON.parse(data);
}

function writeKolt(key, data){
    localStorage.setItem(key, JSON.stringify(data));
}

export function createKolt(key, data){
    const d = readLS(key);
    data.id = generateId(key);
    d.push(data);
    writeKolt(key, d);
}

export function readKolt(key) {
    return readLS(key);
}

export function update(key, data, newKey) {
  const d = readLS(key);
  writeKolt(key, d.map(row => row.id !== newKey ? {...row} : {...row, ...data, id: newKey}));
}

export function erase(key, id){
  const d = readLS(key);
  writeKolt(key, d.filter(row => row.id !== id));
}
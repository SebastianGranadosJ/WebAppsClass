import fs from 'fs';

const data = async  () => {
  return JSON.parse(fs.readFileSync('../data/data.json', 'utf8'));
}

const sum = (a, b) => a + b;

export default data; // por defecto

export { sum }; // exportar otras cosas :p
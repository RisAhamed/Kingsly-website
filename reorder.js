const fs = require('fs');

const file = fs.readFileSync('lib/doctors.tsx', 'utf8');

const startIdx = file.indexOf('export const services = [');
const endIdx = file.indexOf('];', startIdx);
const before = file.substring(0, startIdx + 'export const services = ['.length);
const after = file.substring(endIdx);
const arrayContent = file.substring(startIdx + 'export const services = ['.length, endIdx);

let items = arrayContent.trim().split(/\n\s*},\n\s*\{/g);
items = items.map((item, index) => {
  let res = item;
  if (!res.startsWith('{')) res = '{' + res;
  if (!res.endsWith('}')) res = res + '}';
  if (res.startsWith('{{')) res = res.substring(1);
  return res;
});

const order = [
  "Root Canal Therapy",
  "Dental Implants",
  "Braces and Aligners",
  "Dentures & Bridges",
];

const sortedItems = [];
const remainingItems = [];

items.forEach(item => {
  const match = item.match(/title:\s*"([^"]+)"/);
  if (match) {
    const title = match[1];
    const index = order.indexOf(title);
    if (index !== -1) {
      sortedItems[index] = item;
    } else {
      remainingItems.push(item);
    }
  } else {
    remainingItems.push(item);
  }
});

const finalItems = [...sortedItems.filter(Boolean), ...remainingItems];

let finalContent = finalItems.join(',\n  ');
let idCounter = 1;
finalContent = finalContent.replace(/id:\s*\d+,/g, () => `id: ${idCounter++},`);

const newFile = before + '\n  ' + finalContent + '\n' + after;

fs.writeFileSync('lib/doctors.tsx', newFile);
console.log("Successfully reordered services!");

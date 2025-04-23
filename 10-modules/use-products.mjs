import product from "./products.mjs";

const p = [];
const p1 = new product('macbook air', 70000, 'i5', 60);
const p2 = new product('Apple iphone', 75000, '17', 50);
const p3 = new product('Asus Intel', 80000, 'i5', 30);
const p4 = new product('sumsung', 100000, 'android', 20);
p.push(p1,p2,p3,p4);
p.forEach(p => p.display() );
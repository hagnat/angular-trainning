
import { MonumentCollection } from './interfaces';

var collection = new MonumentCollection();

collection.monuments.push({
    name: 'dam square',
    height: 30
})

collection.monuments.push({
    name: 'yo momma',
    height: 2000
});

collection.monuments.push({
    name: "amsterdam cannal's",
    height: 0
});

var tallestMonument = collection.getTallestMonument();

console.log("tallest monument: " + (tallestMonument ? tallestMonument.name : 'none'));

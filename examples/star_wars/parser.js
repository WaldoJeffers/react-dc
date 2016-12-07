const fs = require('fs');
const data = require('./ships.json');

fs.writeFile('ships.js', JSON.stringify(data.data.allStarships.edges.filter(e => e.node.MGLT && e.node.costInCredits && e.node.cargoCapacity).map(e => e.node), null, 2))

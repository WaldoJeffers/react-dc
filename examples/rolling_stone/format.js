const data = require('./datapre.json');
const fs = require('fs');

fs.writeFileSync('data.js', JSON.stringify(data.map(record => ({
  rank: record.Number,
  year: record.Year,
  title: record.Album,
  artist: record.Artist,
  genres: record.Genre.split(', ').map(genre => genre.replace(/^\&\s/, '')),
  subgenres: record.Subgenre.split(', ').map(genre => genre.replace(/^\&\s/, ''))
})), null, 2 ));

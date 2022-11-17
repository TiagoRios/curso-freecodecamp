const { watchList } = require("./watchList");

function getRating(watchList) {
    let averageRating = watchList
    .filter(a => a.Director === 'Christopher Nolan')
    .map(b => Number(b.imdbRating))
    .reduce((soma, item) => soma + item) / watchList.filter(a => a.Director === 'Christopher Nolan').length;
    return averageRating;
}

function getRating2(watchList) {
const nolanData = watchList
    .reduce((data, { Director: director, imdbRating: rating }) => {
      if (director === 'Christopher Nolan') {
        data.count++;
        data.sum += Number(rating);
      }
      return data;
    }, { sum: 0, count: 0 });
  return nolanData.sum / nolanData.count;
}

module.exports = {
    getRating,
    getRating2
}
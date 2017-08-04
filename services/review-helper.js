require('isomorphic-fetch');
require('dotenv').config();

const GOOGLE_KEY = process.env.GOOGLE_KEY;
// gets the result from search name


function getGoogleByName(req, res, next) {
  fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=40.761025,-73.983264&radius=20000&type=restaurant&name=${req.body.res_name}&key=${GOOGLE_KEY}`)
    .then((fetchRes) => 
      fetchRes.json()
    ).then((jsonFetchRes) => {
      res.locals.googleData = jsonFetchRes.results;
      next(); 
    }).catch(err => {
      console.log(err);
      next();
    })
}

// // adjusts the legislator data to make it easier to put
// // into the database. sometimes you do have to have some kind
// // of data-massaging middleware like this
// function adjustLegislatorData(req, res, next) {
//   res.locals.officials = res.locals.googleResult.map((leg) => {
//     let bioguide_id = ' ';
//     if (leg.hasOwnProperty('photoUrl') && leg.photoUrl.includes('bioguide')) {
//       let urlArr = leg.photoUrl.split('/');
//       bioguide_id = urlArr[urlArr.length - 1].split('.')[0];
//     }
//     return {
//       name: leg.name,
//       bioguide_id: bioguide_id
//     };
//   });
//   next();
// }

module.exports = {
  getGoogleByName,
};
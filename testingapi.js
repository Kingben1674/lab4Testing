
window.onload = pageLoad;
function pageLoad() {
    
}

const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://coronavirus-smartable.p.rapidapi.com/stats/v1/US/",
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      "x-rapidapi-host": "coronavirus-smartable.p.rapidapi.com"
    }
  };
  
  $.ajax(settings).done(function (response) {
    const stats = response.stats;
    const totalConfirmedCases = stats.totalConfirmedCases;
    const totalDeaths = stats.totalDeaths;
    const totalRecoveredCases = stats.totalRecoveredCases;
    console.log(`Total confirmed cases: ${totalConfirmedCases}`);
    console.log(`Total deaths: ${totalDeaths}`);
    console.log(`Total recovered cases: ${totalRecoveredCases}`);
  });
  
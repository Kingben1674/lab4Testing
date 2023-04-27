
window.onload = pageLoad;
function pageLoad() {
    
}

const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://coronavirus-smartable.p.rapidapi.com/stats/v1/US/",
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "e8b338f219msh590d67a44b8fd39p1cc21ejsnce460ec2e198",
      "x-rapidapi-host": "coronavirus-smartable.p.rapidapi.com"
    }
  };
  
  jQuery.ajax(settings).done(function (response) {
    const stats = response.stats;
    const totalConfirmedCases = stats.totalConfirmedCases;
    const totalDeaths = stats.totalDeaths;
    const totalRecoveredCases = stats.totalRecoveredCases;
    console.log(`Total confirmed cases: ${totalConfirmedCases}`);
    console.log(`Total deaths: ${totalDeaths}`);
    console.log(`Total recovered cases: ${totalRecoveredCases}`);
  });
  
import fs from 'fs';
import API_KEY from '../api-libs/ApiKey.js';
import sendApiRequest from '../api-libs/ApiHelper.js';

async function getLeagueByCountry(country) {
  console.log(`Getting ${country}'s league`);
  console.log(API_KEY);
  const url = `https://api-football-v1.p.rapidapi.com/v3/leagues?country=${country}`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': `${API_KEY}`,
      'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
    },
  };

  return await sendApiRequest(url, options);
}

async function fetchAndSaveLeaguesByCountryName(country) {
  try {
    // Fetch data from the API
    const response = await getLeagueByCountry(country);

    // Assuming data.leagues is an array of league objects

    const leagues = response.response;
    let leagueData = [];
    for (let i = 0; i < leagues.length; i++) {
      leagueData.push({
        id: leagues[i].league.id,
        name: leagues[i].league.name,
      });
    }

    // Write the extracted data to a JSON file
    fs.writeFile('lib/ids/leagueData.json', JSON.stringify(leagueData, null, 2), (err) => {
      if (err) {
        console.error('Error writing JSON file:', err);
      } else {
        console.log('JSON file has been written successfully.');
      }
    });
  } catch (error) {
    console.error('Error fetching data from the API:', error);
  }
}

export default fetchAndSaveLeaguesByCountryName;

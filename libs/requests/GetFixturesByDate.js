import API_KEY from '../api-libs/ApiKey.js';
import sendApiRequest from '../api-libs/ApiHelper.js';
import leagueData from '../ids/leagues.json' assert { type: 'json' };

async function getFixturesByDate(date) {
  const url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?date=${date}`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': `${API_KEY}`,
      'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
    },
  };
  const response = await sendApiRequest(url, options);
  const responseData = response.response;

  const leaguesToFilter = leagueData.map((league) => league.id);
  const fixtures = responseData.filter((item) => leaguesToFilter.includes(item.league.id));
  console.log(fixtures);
}

export { getFixturesByDate };

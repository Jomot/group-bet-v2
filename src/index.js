import fetchAndSaveLeaguesByCountryName from '../libs/requests/GetLeagueByCountry.js';
import getFixturesByDate from '../libs/requests/GetFixturesByDate.js';

// await fetchAndSaveLeaguesByCountryName('England');
const date = '2024-08-17';
await getFixturesByDate(date);

export default async function specificCountry(countryName) {
  let res = await fetch(
    `https://contact.mediusware.com/api/country-contacts/${countryName}/`
  );
  let data = await res.json();

  return data.results;
}

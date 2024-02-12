export default async function allCountryList() {
  let res = await fetch("https://contact.mediusware.com/api/contacts/");
  let data = await res.json();

  return data.results;
}

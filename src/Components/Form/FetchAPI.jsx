export const fetchShelters = async (searchParams) => {
  const { state, city, zipcode } = searchParams;

  let url = import.meta.env.VITE_API_HOST;

  if (zipcode) {
    url += `findShelters?zip=${zipcode}`;
  } else if (state && city) {
    url += `findShelters?state=${state}&city=${city}`;
  } else {
    throw new Error("Invalid search parameters");
  }

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
      "X-RapidAPI-Host": import.meta.env.VITE_API_HOST.replace('https://', ''),
    },
  });

  if (!response.ok) {
    throw new Error("Network response was not ok " + response.statusText);
  }

  const data = await response.json();
  return data;
};

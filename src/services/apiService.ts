/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
const apiBaseUrl = process.env.REACT_APP_API_BASE_URL; // Read from .env file

if (!apiBaseUrl) {
  throw new Error('API base URL is not defined');
}
export const fetchProviders = async (): Promise<string[]> => {
  const response = await fetch(`${apiBaseUrl}/providers.json`); // Updated URL

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  // Extracting the API names from the response data array
  return data.data || []; // Return the data array directly
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchProviderDetails = async (
  providerName: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> => {
  try {
    const response = await fetch(`${apiBaseUrl}/${providerName}.json`);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    const findByKey = (obj: any, key: string) => {
      if (key in obj) return obj[key];
      for (let n of Object.values(obj)
        .filter(Boolean)
        .filter((v) => typeof v === 'object')) {
        let found: any = findByKey(n, key);
        if (found) return found;
      }
    };
    const mData: any = {
      title: findByKey(data, 'title'),
      description: findByKey(data, 'description'),
      swaggerUrl: findByKey(data, 'swaggerUrl'),
      email: findByKey(data, 'email'),
      name: findByKey(data, 'name'),
      url: findByKey(data, 'url'),
    };
    // Assuming the data you want to return is in the structure of the API response
    return mData; // Adjust this line based on the actual response structure
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : 'Failed to fetch provider details'
    );
  }
};

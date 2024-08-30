interface Props {
  url: string;
  method?: string;
  data?: object | null;
  headers?: object;
}
const fetchRequest = ({ url, method = 'GET', data = null, headers = {} }: Props) => {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers
    },
    body: data ? JSON.stringify(data) : null
  };

  return fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .catch(error => {
      console.error('Fetch error:', error);
      throw error;
    });
};
export default fetchRequest;

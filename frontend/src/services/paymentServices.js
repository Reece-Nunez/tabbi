import axios from 'axios';

const API_URL = '/api/payments';

const getPayments = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export default { getPayments };

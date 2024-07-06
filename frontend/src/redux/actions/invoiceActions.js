import axios from 'axios';

export const addInvoice = (invoiceData) => async (dispatch) => {
  try {
    const response = await axios.post('/api/invoices', invoiceData);
    dispatch({ type: 'ADD_INVOICE_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'ADD_INVOICE_FAIL', payload: error.message });
  }
};
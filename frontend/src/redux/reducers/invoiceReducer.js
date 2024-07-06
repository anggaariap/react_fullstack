const initialState = {
    invoices: [],
    error: null,
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case 'ADD_INVOICE_SUCCESS':
        return { ...state, invoices: [...state.invoices, action.payload] };
      case 'ADD_INVOICE_FAIL':
        return { ...state, error: action.payload };
      default:
        return state;
    }
  }
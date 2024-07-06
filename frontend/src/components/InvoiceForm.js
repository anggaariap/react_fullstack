import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addInvoice } from '../redux/actions/invoiceActions';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import products from '../data/products.json'; // Example JSON data

const InvoiceForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    customerName: '',
    salespersonName: '',
    notes: '',
    products: [],
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleProductChange = (event, newValue) => {
    setFormData({ ...formData, products: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.date || !formData.customerName || !formData.salespersonName || !formData.products.length) {
      alert('Please fill in all fields');
      return;
    }
    dispatch(addInvoice(formData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField name="date" label="Date" type="date" onChange={handleChange} InputLabelProps={{ shrink: true }} required />
      <TextField name="customerName" label="Customer Name" onChange={handleChange} required />
      <TextField name="salespersonName" label="Salesperson Name" onChange={handleChange} required />
      <TextField name="notes" label="Notes" onChange={handleChange} multiline rows={4} />
      <Autocomplete
        multiple
        options={products}
        getOptionLabel={(option) => option.name}
        onChange={handleProductChange}
        renderInput={(params) => <TextField {...params} label="Products" />}
      />
      <Button type="submit" variant="contained" color="primary">Submit Invoice</Button>
    </form>
  );
};

export default InvoiceForm;
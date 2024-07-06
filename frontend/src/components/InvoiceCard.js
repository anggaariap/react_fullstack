import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const InvoiceCard = () => {
  const [invoices, setInvoices] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchInvoices = async () => {
      const response = await axios.get('/api/invoices', { params: { page } });
      setInvoices(response.data);
    };
    fetchInvoices();
  }, [page]);

  return (
    <div>
      {invoices.map((invoice) => (
        <Card key={invoice.id}>
          <CardContent>
            <Typography variant="h5">{invoice.customerName}</Typography>
            <Typography variant="subtitle1">{invoice.salespersonName}</Typography>
            <Typography variant="body2">Total: ${invoice.totalAmount}</Typography>
            <Typography variant="body2">Notes: {invoice.notes}</Typography>
          </CardContent>
        </Card>
      ))}
      <Button onClick={() => setPage((prev) => prev + 1)}>Load More</Button>
    </div>
  );
};

export default InvoiceCard;
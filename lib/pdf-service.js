import { Document, Page, Text, View, StyleSheet, pdf } from '@react-pdf/renderer';

// PDF Styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 30,
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 20,
    borderBottom: '2 solid #333333',
    paddingBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    marginBottom: 10,
    color: '#333333',
    fontWeight: 'bold',
  },
  companyName: {
    fontSize: 24,
    color: '#666666',
    marginBottom: 5,
  },
  companyAddress: {
    fontSize: 12,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 1.5,
  },
  section: {
    marginBottom: 20,
  },
  customerInfo: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
  },
  customerDetails: {
    fontSize: 12,
    lineHeight: 1.5,
    color: '#333333',
  },
  bookingDetails: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    marginBottom: 20,
    borderLeft: '4 solid #28a745',
  },
  bookingTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#28a745',
    marginBottom: 10,
  },
  bookingText: {
    fontSize: 12,
    lineHeight: 1.5,
    color: '#333333',
  },
  table: {
    display: 'table',
    width: 'auto',
    marginBottom: 20,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottom: '1 solid #dddddd',
  },
  tableHeader: {
    backgroundColor: '#f8f9fa',
    borderBottom: '2 solid #dddddd',
  },
  tableCell: {
    padding: 10,
    fontSize: 12,
    flex: 1,
  },
  tableCellRight: {
    padding: 10,
    fontSize: 12,
    flex: 1,
    textAlign: 'right',
  },
  tableCellCenter: {
    padding: 10,
    fontSize: 12,
    flex: 1,
    textAlign: 'center',
  },
  tableHeaderText: {
    fontWeight: 'bold',
    color: '#333333',
  },
  totalRow: {
    backgroundColor: '#f8f9fa',
    borderTop: '2 solid #dddddd',
    borderBottom: 'none',
  },
  totalText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#333333',
  },
  paymentStatus: {
    backgroundColor: '#e8f5e9',
    padding: 15,
    marginBottom: 20,
    borderRadius: 5,
  },
  paymentStatusTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
  },
  paymentStatusText: {
    fontSize: 11,
    color: '#333333',
    lineHeight: 1.5,
  },
  footer: {
    marginTop: 30,
    paddingTop: 20,
    borderTop: '1 solid #eeeeee',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 11,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 1.5,
  },
});

// PDF Document Component
const InvoicePDF = ({ session, bookingData }) => {
  const customerName = session.customer_details.name || bookingData?.name || 'Customer';
  const totalAmount = session.amount_total / 100;

  // Generate line items
  const getLineItems = () => {
    if (session.line_items && session.line_items.data) {
      return session.line_items.data;
    } else {
      // Create a simple line item from the session amount
      const description = bookingData 
        ? `Dumpster Rental Service - ${bookingData.service_date}`
        : 'Purchase';
      
      return [{
        description: description,
        quantity: 1,
        amount_total: session.amount_total
      }];
    }
  };

  const lineItems = getLineItems();

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>INVOICE</Text>
          <Text style={styles.companyName}>Kletz Contracting</Text>
          <Text style={styles.companyAddress}>
            1468 Old Steubenville Pike, Suite D{'\n'}
            Pittsburgh, PA 15205{'\n'}
            (412) 200-2475
          </Text>
        </View>

        {/* Customer Information */}
        <View style={styles.customerInfo}>
          <Text style={styles.sectionTitle}>Bill To:</Text>
          <Text style={styles.customerDetails}>
            {customerName}{'\n'}
            {session.customer_details.email}
          </Text>
        </View>

        {/* Booking Details (if applicable) */}
        {bookingData && (
          <View style={styles.bookingDetails}>
            <Text style={styles.bookingTitle}>Booking Details</Text>
            <Text style={styles.bookingText}>
              Service Date: {bookingData.service_date}{'\n'}
              Delivery Address: {bookingData.address}{'\n'}
              Booking ID: {bookingData.id}
            </Text>
          </View>
        )}

        {/* Invoice Table */}
        <View style={styles.table}>
          {/* Table Header */}
          <View style={[styles.tableRow, styles.tableHeader]}>
            <Text style={[styles.tableCell, styles.tableHeaderText]}>Description</Text>
            <Text style={[styles.tableCellCenter, styles.tableHeaderText]}>Quantity</Text>
            <Text style={[styles.tableCellRight, styles.tableHeaderText]}>Amount</Text>
          </View>

          {/* Table Rows */}
          {lineItems.map((item, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.tableCell}>{item.description}</Text>
              <Text style={styles.tableCellCenter}>{item.quantity || 1}</Text>
              <Text style={styles.tableCellRight}>${(item.amount_total / 100).toFixed(2)}</Text>
            </View>
          ))}

          {/* Total Row */}
          <View style={[styles.tableRow, styles.totalRow]}>
            <Text style={[styles.tableCell, styles.totalText]}>TOTAL</Text>
            <Text style={styles.tableCellCenter}></Text>
            <Text style={[styles.tableCellRight, styles.totalText]}>${totalAmount.toFixed(2)}</Text>
          </View>
        </View>

        {/* Payment Status */}
        <View style={styles.paymentStatus}>
          <Text style={styles.paymentStatusTitle}>Payment Status: PAID</Text>
          <Text style={styles.paymentStatusText}>
            Payment ID: {session.payment_intent}{'\n'}
            Invoice Date: {new Date(session.created * 1000).toLocaleDateString()}{'\n'}
            Invoice #: INV-{session.id.slice(-8).toUpperCase()}
          </Text>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Thank you for your business!{'\n'}
            Contact us: (412) 200-2475 | john@kletzcontracting.com
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export async function generateInvoicePDF(session, bookingData = null) {
  try {
    console.log('Generating PDF invoice...');

    // Create the PDF document
    const doc = <InvoicePDF session={session} bookingData={bookingData} />;
    
    // Generate PDF buffer
    const pdfBuffer = await pdf(doc).toBuffer();

    // Generate filename
    const filename = bookingData 
      ? `invoice-booking-${bookingData.id.slice(0, 8)}.pdf`
      : `invoice-${session.id.slice(-8)}.pdf`;

    console.log('PDF generated successfully:', filename);

    return {
      pdfBuffer,
      filename
    };

  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
}
import Layout from '@/common/components/supermarket/Layout';
import '@fontsource/inter/500.css';
import { Box } from '@mui/material';
import OrderPanel from '../../components/orders/OrderPanel';
import OrderTable from '../../components/orders/order-table/OrderTable';
import ProductsTabs from '../../components/orders/orders-tabs/OrdersTabs';

const InPreparationOrders = () => {
  return (
    <Layout title="Painel de pedidos">
      <Box
        sx={{
          padding: '136px 30px 33px 124px',
          maxHeight: '90vh',
          height: '85vh',
        }}
      >
        <OrderPanel />
        <ProductsTabs />
        <OrderTable status="Em separação" />
      </Box>
    </Layout>
  );
};

export default InPreparationOrders;

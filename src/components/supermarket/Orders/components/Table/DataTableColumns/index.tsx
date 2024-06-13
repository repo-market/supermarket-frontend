import { ordersColumns } from '@/types/Order';
import { formatNumberToHash } from '@/utils/formatOrderNumber';
import { statusColors } from '@/utils/formatStatusColor';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<ordersColumns>[] = [
  {
    accessorKey: 'id',
    header: () => (
      <div className="font-semibold text-lg w-[120px] h-[22px]">Pedido</div>
    ),
    cell: ({ row }) => {
      const id = parseFloat(row.getValue('id'));
      const formatted = formatNumberToHash(id);

      return (
        <div className="font-normal text-lg leading-[1.2] tracking-normal h-[22px] cursor-pointer">
          {formatted}
        </div>
      );
    },
  },
  {
    accessorKey: 'name',
    header: () => (
      <div className="font-semibold text-lg w-[250px] h-[22px] cursor-pointer">
        Nome do cliente
      </div>
    ),
    cell: ({ row }) => {
      const name = String(row.getValue('name'));

      return (
        <div className="font-normal text-lg w-[250px] leading-[1.2] whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer">
          {name}
        </div>
      );
    },
  },
  {
    accessorKey: 'adress',
    header: () => (
      <div className="font-semibold text-lg w-[321px] h-[22px]">Endereço</div>
    ),
    cell: ({ row }) => {
      const adress = String(row.getValue('adress'));

      return (
        <div className="font-normal text-lg leading-[1.2] w-[321px] whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer">
          {adress}
        </div>
      );
    },
  },
  {
    accessorKey: 'value',
    header: () => (
      <div className="font-semibold text-lg w-[130px] h-[22px]">Valor</div>
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('value'));
      const formatted = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(amount);

      return (
        <div className="font-normal text-lg leading-[1.2] cursor-pointer">
          {formatted}
        </div>
      );
    },
  },
  {
    accessorKey: 'quantify',
    header: () => (
      <div className="font-semibold text-lg w-[50px] h-[22px]">Qtd.</div>
    ),
    cell: ({ row }) => {
      const quantify = String(row.getValue('quantify'));

      return (
        <div className="font-normal text-lg leading-[1.2] cursor-pointer">
          {quantify}
        </div>
      );
    },
  },
  {
    accessorKey: 'payMethod',
    header: () => (
      <div className="font-semibold text-lg sm:w-[187px] h-[22px]">
        Forma de Pagamento
      </div>
    ),
    cell: ({ row }) => {
      const payMethod = String(row.getValue('payMethod'));

      return (
        <div className={`font-medium text-lg leading-[1.2] cursor-pointer`}>
          {payMethod}
        </div>
      );
    },
  },
  {
    accessorKey: 'status',
    header: () => (
      <div className="font-semibold text-lg w-[160px] h-[22px] cursor-pointer">
        Status
      </div>
    ),
    cell: ({ row }) => {
      const status = String(row.getValue('status'));
      const statusClass = statusColors[status] || '';

      return (
        <div
          className={`font-medium text-lg leading-[1.2] ${statusClass} cursor-pointer`}
        >
          {status}
        </div>
      );
    },
  },
  {
    accessorKey: 'action',
    header: () => (
      <div className="font-semibold text-lg text-center w-[80px] h-[22px]">
        Ação
      </div>
    ),
    cell: () => {
      return <div className="text-center">icone</div>;
    },
  },
];

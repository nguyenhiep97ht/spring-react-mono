import { Table, TableColumn } from 'Frontend/components/cores';
interface Props {
  items: any[];
}
export default function TableExample({ items }: Props) {
  return (
    <>
      <Table items={items}>
        <TableColumn path="phone"></TableColumn>
        <TableColumn path="email"></TableColumn>
        <TableColumn path="price"></TableColumn>
        <TableColumn header={'Action'}></TableColumn>
      </Table>
    </>
  );
}

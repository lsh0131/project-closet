import { Table } from 'react-bootstrap';
const Order = () => {
  return (
    <div>
      <h2>주문/배송</h2>
      <p>주문/배송 페이지 입니다.</p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Header</th>
            <th>Header</th>
            <th>Header</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Order;

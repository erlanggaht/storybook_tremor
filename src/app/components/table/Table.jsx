import { StatusOnlineIcon } from "@heroicons/react/outline";
import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Title,
  Badge,
} from "@tremor/react";
import datas from "./TableData";



export default function TableData() {
  return (
    <Card>
    <Title>List of Swiss Federal Councillours</Title>
    <Table className="mt-5">
      <TableHead>
        <TableRow className="Table-Row">
          <TableHeaderCell className="Table-Header">Name</TableHeaderCell>
          <TableHeaderCell className="Table-Header">Position</TableHeaderCell>
          <TableHeaderCell className="Table-Header">Department</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {datas.map((item) => (
          <TableRow key={item.name}>
            <TableCell className="Table-Cell-Name">{item.name}</TableCell>
            <TableCell>
              <Text>{item.Role}</Text>
            </TableCell>
            <TableCell>
              <Text>{item.departement}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card>
  )
}

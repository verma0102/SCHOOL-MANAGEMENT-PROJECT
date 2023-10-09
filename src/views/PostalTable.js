import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// function createData(name, address, date, phone, email) {
//   return { name, address, date, phone, email };
// }

// const rows = [
//   createData('Shyam', 159, '6/9/2023', 9987469489, "shyam@gmail.com"),
//   createData('Dinesh', 237, '9/9/2023', 8760978456, "dinesh@gmail.com"),
//   createData('Supriya', 262, '16/9/2023', 9874903748, "supriya@gmail.com"),
//   createData('Aman', 305, '3/9/2023', 9783674985, "aman@gmail.com"),
//   createData('Kirti', 356, '16/9/2023', 9874048926, "kirti@gmail.com"),
// ];

export default function PostalTable( {records} ) {
 console.log(records);
  // function createData(name, address, date, phone, email) {
  //   return { name, address, date, phone, email };
  // }

  // const rows = [
  //   createData('Shyam', 159, '6/9/2023', 9987469489, "shyam@gmail.com"),
  //   createData('Dinesh', 237, '9/9/2023', 8760978456, "dinesh@gmail.com"),
  //   createData('Supriya', 262, '16/9/2023', 9874903748, "supriya@gmail.com"),
  //   createData('Aman', 305, '3/9/2023', 9783674985, "aman@gmail.com"),
  //   createData('Kirti', 356, '16/9/2023', 9874048926, "kirti@gmail.com"),
  // ];

  return (
    <TableContainer sx={{ mt: 9 }} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* {Object.enteries(props.rows[0])}   */}
            <TableCell>Title</TableCell>
            <TableCell align="right">Reference</TableCell>
            <TableCell align="right"> Address</TableCell>
            <TableCell align="right">Note</TableCell>
            {/* <TableCell align="right">Date</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
           {records?.map((item, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                
                {item?.title}
              </TableCell>
              <TableCell align="right">{item?.reference}</TableCell>
              <TableCell align="right">{item?.address}</TableCell>
              <TableCell align="right">{item?.note}</TableCell>
              {/* <TableCell align="right">{item?.email}</TableCell> */}
            </TableRow>
          ))} 
        
         
           
        </TableBody>
      </Table>
    </TableContainer>
  );
}
import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  IconButton,
  TextField,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';



function AddRows() {

  const [rows, setRows] = useState([]);

  const [subject, setSubject] = useState('');
  const [teacher, setTeacher] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const addRow = () => {

    const newRow = {
      id: rows.length + 1,
      subject: subject,
      teacher: teacher,
      startTime: startTime,
      endTime: endTime
    };
    setRows([...rows, newRow]);
    // setNewName('');
    // setNewValue('');
    setSubject('');
    setTeacher('');
    setStartTime('');
    setEndTime('');
  };

  const deleteRow = (id) => {
    const updatedRows = rows.filter((row) => row.id !== id);
    setRows(updatedRows);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <div>
          <TextField
            label="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <TextField
            label="Teacher"
            value={teacher}
            onChange={(e) => setTeacher(e.target.value)}
          />
          <TextField
            label="Start Time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
          <TextField
            label="End Time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
          <Button variant="contained" style={{ marginTop: '10px', marginLeft: '10px' }} startIcon={<AddIcon />} onClick={addRow}>
            Add New
          </Button>
        </div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Subject</TableCell>
              <TableCell>Teacher</TableCell>
              <TableCell>Start Time</TableCell>
              <TableCell>End Time</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.subject}</TableCell>
                <TableCell>{row.teacher}</TableCell>
                <TableCell>{row.startTime}</TableCell>
                <TableCell>{row.endTime}</TableCell>
                <TableCell>
                  <IconButton
                    color="secondary"
                    onClick={() => deleteRow(row.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </>
  );
}

export default AddRows;

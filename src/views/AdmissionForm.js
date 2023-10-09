import React from "react";
import AdmissionTable from "./AdmissionTable";

import {
  Grid,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
  Icon,
  Modal,
  Box,
  Input
} from "@mui/material";

// function (name, address, date, phone, email) {
//   return { name, address, date, phone, email };
// }
const rows = [
  { name: 'Shyam', address: 159, date: '6/9/2023', phone: 9987469489, email: "shyam@gmail.com" },
  { name: 'Dinesh', address: 237, date: '9/9/2023', phone: 8760978456, email: "dinesh@gmail.com" },
  { name: 'Supriya', address: 262, date: '16/9/2023', phone: 9874903748, email: "supriya@gmail.com" },
  { name: 'Aman', address: 305, date: '3/9/2023', phone: 9783674985, email: "aman@gmail.com" },
  { name: 'Kirti', address: 356, date: '16/9/2023', phone: 9874048926, email: "kirti@gmail.com" },
];

const style = {
  position: "absolute",
  top: "68%",
  left: "58%",
  transform: "translate(-50%, -50%)",
  width: 1100,
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
};

const fieldStyle = {
  width: 300,
  mt: 2,
};

const AdmissionForm = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="content">
      <Button
        color="primary"
        variant="contained"
        type="submit"
        sx={{ float: "right" }}
        onClick={handleOpen}>

        Add
      </Button>


      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Grid container spacing={4}>

            <Grid item lg={4} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
              <TextField
                type="text"
                name="name"
                id="standard-basic"
                size="small"
                errorMessages={["this field is required"]}
                label="Name"
                sx={fieldStyle}
              />
              <TextField
                type="number"
                name="phone"
                label="Phone"
                size="small"
                sx={fieldStyle}
                errorMessages={["this field is required"]}
              />
              <TextField
                type="text"
                name="email"
                size="small"
                label="Email"
                sx={fieldStyle}
                errorMessages={["this field is required"]}
              />

              <FormControl sx={fieldStyle}>
                <InputLabel id="demo-simple-select-label">Source</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  size="small"
                  label="Source"

                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>


            <Grid item lg={4} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
              <TextField
                type="text"
                name="address"
                size="small"
                label="Address"
                sx={fieldStyle}
                // validators={["required"]}
                errorMessages={["this field is required"]}
              />
              <TextField
                type="text"
                name="description"
                label="Description"
                size="small"
                sx={fieldStyle}
                // validators={["required"]}
                errorMessages={["this field is required"]}
              />


              <FormControl sx={fieldStyle}>
                <InputLabel id="demo-simple-select-label">Class</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  size="small"
                  label="Class"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>

              <TextField
                type="number"
                name="follow up date"
                label="Follow Up Date"
                size="small"
                sx={fieldStyle}
                // validators={["required"]}
                errorMessages={["this field is required"]}
              />
            </Grid>


            <Grid item lg={4} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
              <FormControl sx={fieldStyle}>
                <InputLabel id="demo-simple-select-label">Assigned</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  size="small"
                  label="Assigned"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={fieldStyle}>
                <InputLabel id="demo-simple-select-label">Refrence</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  size="small"
                  label="Refrence"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>

              <TextField
                rows={4}
                type="text"
                name="note"
                label="Note"
                size="small"
                multiline
                sx={fieldStyle}
                // validators={["required"]}
                errorMessages={["this field is required"]}
              />

            </Grid>
          </Grid>

          <Grid sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              className="btn-fill"
              color="primary"
              variant="contained"
              type="submit"

              sx={{ mt: 2 }}
            >
              Save
            </Button>
          </Grid>


        </Box>
      </Modal>

      <AdmissionTable rows={rows} />
    </div>
  );
};

export default AdmissionForm;

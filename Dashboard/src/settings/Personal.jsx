import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { CardContent } from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';
const top100Films = [
    {label : 'Sys Admin'},
    {label : 'Admin'},
    {label : 'Manager'},
    {label : 'User'}

]
function Personal() {
  return (
    <Grid container>
      <Stack spacing={2} direction="row">
        <Card sx={{ minWidth: 40 + "vw" }}>
          <CardContent>
            <TextField
              id="standard-basic"
              label="Personal Information"
              variant="standard"
              disabled
              sx={{ marginBottom: 5 }}
            />

            <div sx={{
                display: "grid",
                gridTemplateColumns: { md: "1fr 1fr", gap: 2 },
              }}>
              <TextField
                label="Name"
                id="outlined-size-normal"
                defaultValue="John Doe"
                sx={{ marginBottom: 3 }}
              />
            
              <TextField
                label="Location"
                id="outlined-size-normal"
                defaultValue="Himachal"
                sx={{ marginBottom: 3 }}
              />
            </div>
            <div>
              <TextField
                id="filled-multiline-static"
                multiline
                rows={4}
                defaultValue="Bio"
                variant="filled"
              />
            </div>
            <Autocomplete
  disablePortal
  id="combo-box-demo"
  options={top100Films}
  sx={{ width: 300, marginTop: 3  }}
  renderInput={(params) => <TextField {...params} label="User Type" />}
/>
          </CardContent>
        </Card>
        <Card  sx={{ minWidth: 35 + "vw" }}>
          <CardContent>
            <TextField
              id="standard-basic"
              label="Contact Information"
              variant="standard"
              disabled
              sx={{ marginBottom: 5 }}
            />
            
            <div
              sx={{
                display: "grid",
                gridTemplateColumns: { md: "1fr 1fr", gap: 2 },
              }}
            >
              <TextField
                label="Contact"
                id="outlined-size-normal"
                defaultValue="91999999999"
                sx={{ marginBottom: 3 }}
              />

              <TextField
                label="Email"
                id="outlined-size-normal"
                defaultValue="code@codingmstr.com"
                sx={{ marginBottom: 3 }}
              />
            </div>
            <TextField
              label="Profile URL"
              id="outlined-size-normal"
              defaultValue="https://codingmstr.com"
              sx={{ marginBottom: 3 }}
            />
            <br />
            <div>
              <TextField
                id="filled-multiline-static"
                multiline
                rows={4}
                defaultValue="Address"
                variant="filled"
              />
            </div>
          </CardContent>
        </Card>
      </Stack>
    </Grid>
  );
}

export default Personal;

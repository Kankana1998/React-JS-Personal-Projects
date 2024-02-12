import React from 'react'
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import TextField from '@mui/material/TextField';
import { CardContent } from '@mui/material';
import { Select } from '@mui/base/Select';
import { Option } from '@mui/base/Option';

function Personal() {
  return (

    <Grid container>
    <Stack spacing={2} direction='row'>
    <Card>
        
          <CardContent sx={{height: 80 + 'vh'}}>
          <TextField id="standard-basic" label="Personal Information" variant="standard" disabled />
          <br />
          <br />
           <div>
           <TextField label="Name" id="outlined-size-normal" defaultValue="Name" />
          
          <TextField label="Location" id="outlined-size-normal" defaultValue="Location" />

           </div>
           <br />
          <div>
          <TextField
          id="filled-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="filled"
        />
          </div>

            </CardContent>
        </Card>
        <Card>
          <CardContent sx={{height: 80 + 'vh'}}>
          <TextField id="standard-basic" label="Contact Information" variant="standard" disabled />
          <br />
          <br />
          <div sx={{display: 'flex'}}> 
           <TextField label="Name" id="outlined-size-normal" defaultValue="Name" />
          
          <TextField label="Location" id="outlined-size-normal" defaultValue="Location" />

           </div>
           <TextField label="Location" id="outlined-size-normal" defaultValue="Location" />
           <br/>
           <div>
          <TextField
          id="filled-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="filled"
        />
          </div>

            </CardContent>
        </Card>
    </Stack>
    </Grid>
  )
}

export default Personal
import React from 'react'
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import TextField from '@mui/material/TextField';
import { CardContent } from '@mui/material';
function Profile() {
  return (

    <Grid container>
    <Stack spacing={2} direction='row'>
    <Card>
        
          <CardContent>
           <TextField id="standard-basic" label="K Nath" variant="standard" disabled />
           <TextField id="standard-basic" label="code@adminUI.com" variant="standard" disabled />
           <TextField id="standard-basic" label="(+919090909090" variant="standard" disabled />
           <TextField id="standard-basic" label="code@newjersey.com" variant="standard" disabled />
           
            </CardContent>
        </Card>
        <Card>
          <CardContent>
          <TextField id="standard-basic" label="About me" variant="standard" disabled />
          <p>
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
          </p>
          <TextField id="standard-basic" label="Details" variant="standard" disabled />
          <br />
          <TextField id="standard-basic" label="Full Name: John Doe" disabled variant="standard" />
          <br />
          <TextField id="standard-basic" label="Father's Name: Jonathan Doe" disabled variant="standard" />
          <br />
          <TextField id="standard-basic" label="Address: Himachal, India" disabled variant="standard" />
          <br />
          <TextField id="standard-basic" label="Zip Code: 900000" disabled variant="standard" />
          <br />
          <TextField id="standard-basic" label="Website: http://trickuweb.com" disabled variant="standard" />
            </CardContent>
        </Card>
    </Stack>
    </Grid>
  )
}

export default Profile
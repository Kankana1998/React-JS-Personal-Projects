import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import '../Dash.css';

function About() {
  return (
    <>
     <div className="bgColor">
     <Navbar />
    <Box height={90}/>
    <Box sx={{ display: 'flex' }}>
    <Sidebar/>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    <Grid container spacing={1}>
            <Grid item xs={8}>
            <h1>About</h1>
            <Card sx={{ height: 80 + 'vh', width: 80 + 'vw'}}>
               <CardContent>
                  <p>Creating an admin dashboard involves designing a user interface that allows administrators to manage and monitor various aspects of a system, such as user data, analytics, settings, and more.</p>
                  <h3>Home</h3>
                  <p>The main section of the dashboard displays an overview of important metrics and insights.Includes charts and graphs representing user activity, system performance, and other relevant data.</p>
                  <h3>Products</h3>
                  <p>Create, edit, and delete content such as products.Organize content into categories or tags.</p>
                  <h3>Analytics</h3>
                  <p>Offers detailed analytics and reports on system usage, user behavior, and performance metrics.Enables administrators to track trends, identify patterns, and make data-driven decisions.</p>
<h3>Settings</h3>
<p>Provides configuration options for customizing the system according to administrative preferences.
Includes settings for account management, security, notifications, and more.</p>
                  </CardContent>
                </Card>
      </Grid>
      {/* <Grid item xs={4}>
            <Card sx={{ height: 80 + 'vh' }}>
                  <CardContent>
                  <div className="paddingall">
                    <span className="pricesubtitle"> Popular Products</span>
                    </div>
                  </CardContent>
                </Card>
            </Grid> */}
      </Grid>
    </Box>
</Box>

     </div>
    
    </>
   
  )
}

export default About
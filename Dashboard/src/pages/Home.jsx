import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import '../Dash.css';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import AccordionDash from "../components/AccordionDash";
import Barchart from "../charts/Barchart";
import CountUp from 'react-countup';

function Home() {
  return (
    <>
    <div className="bgColor">
    <Navbar />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Stack spacing={2} direction="row">
                <Card className="gradient" sx={{ minWidth: 49 + '%', height: 150}} >
                  <CardContent>
                    <div  className="iconstyle">
                    <CreditCardIcon />
                    </div>
                    <Typography gutterBottom variant="h5" component="div" sx={{color: "#fff"}}>
                      $<CountUp delay={0.5} end={500} duration={1.9} />
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div" sx={{color: "#ccd1d1"}}>
                      Total Earnings
                    </Typography> 
                  </CardContent>
                </Card>
                <Card className="gradientlight" sx={{ minWidth: 49 + '%', height: 150}}>
                  <CardContent>
                  <div className="iconstyle">
                    <CardTravelIcon />
                    </div>
                    <Typography gutterBottom variant="h5" component="div" sx={{color: "#fff"}}>
                    $<CountUp delay={0.5} end={900} duration={2} />
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div" sx={{color: "#ccd1d1"}}>
                      Total Order
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>

            <Grid item xs={4}>
            <Stack spacing={2}>
            <Card className="gradientlight">
                  <Stack spacing={2} direction="row">
                    <div className="iconstyle">
                    <StorefrontIcon />
                    </div>
                    <div className="paddingall">
                    <span className="pricetitle">$<CountUp delay={0.2} end={100} duration={0.3} />k</span>
                    <br />
                    <span className="pricesubtitle">Total Income</span>
                    </div>
                    </Stack>
                </Card>
                <Card>
                  <Stack spacing={2} direction="row">
                    <div className="iconstyleBlack">
                    <StorefrontIcon />
                    </div>
                    <div className="paddingall">
                    <span className="pricetitle">$<CountUp delay={0.2} end={203} duration={1} />k</span>
                    <br />
                    <span className="pricesubtitle">Total Revenue</span>
                    </div>
                    </Stack>
                </Card>
            </Stack>
            </Grid>
          </Grid>
          <Box height={20} />
          <Grid container spacing={2}>
            <Grid item xs={8}>
            <Card sx={{ height: 60 + 'vh' }}>
                  <CardContent>
                    <Barchart />
                  </CardContent>
                </Card>
            </Grid>
            <Grid item xs={4}>
            <Card sx={{ height: 60 + 'vh' }}>
                  <CardContent>
                  <div className="paddingall">
                    <span className="pricesubtitle"> Popular Products</span>
                    </div>
                    <AccordionDash />
                  </CardContent>
                </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
     
    </>
  );
}

export default Home;

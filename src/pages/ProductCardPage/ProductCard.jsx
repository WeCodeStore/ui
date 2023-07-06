import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Theme";

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});
export default function ProductCard() {
    return (
        <ThemeProvider theme={theme}>
        <Card sx={{ maxWidth: 1200}}>
        
        <Grid className='productWrapper'container spacing={2}>
            <Grid className='productGallery' item xs={2} container direction="column" spacing={2}>
                    <Grid item  container direction="column" spacing={2}>
                        <Grid item >
                            <Img alt="complex" src="https://i.imgur.com/58rvHxE.jpg"   style={{ width: '105px', height: '105px' }}/>
                        </Grid>
                        <Grid item >
                            <Img alt="complex" src="https://i.imgur.com/58rvHxE.jpg"  style={{ width: '105px', height: '105px' }}/>
                        </Grid>
                        <Grid item >
                            <Img alt="complex" src="https://i.imgur.com/58rvHxE.jpg"   style={{ width: '105px', height: '105px' }}/>
                            
                        </Grid>
                    </Grid>
            </Grid>
            <Grid className='productImg' item xs={5} container direction="column" spacing={2}>
                        <Grid item >
                            <Img alt="complex" src="https://i.imgur.com/58rvHxE.jpg" />
                        </Grid>
            </Grid>
            <Grid className='productForm' item  xs={5} container direction="column" spacing={2}>
                        <Grid item  sx={{ textAlign: 'left' }}>
                        <Typography variant="title1_bold"   >
                        Luxe Core Sheet Set
                        </Typography>
                        <Grid item  container direction="row" spacing={2}>
                        <Typography sx={{ cursor: 'pointer' }} variant="body1-medium" >
                            <Stack spacing={1}>
                                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                            </Stack>
                            </Typography>
                        <Typography sx={{ cursor: 'pointer' }} variant="body2" color="text.secondary" >
                        5555,55 Reviews
                        </Typography>
                        </Grid>
                        <Grid item>
                        <Typography variant="body1_medium" color="text.secondary">
                        From $456
                        </Typography>
                        </Grid>
                        <Grid item>
                        <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                        </Typography>
                        </Grid>
                    
                        </Grid>
            </Grid>
         </Grid>
        </Card>
        </ThemeProvider>
    )}

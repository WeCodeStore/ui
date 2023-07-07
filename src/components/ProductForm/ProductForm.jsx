import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';


export default function ProductForm() {
    return (
        <div className='productForm'>
        <Grid  container direction="column" >
             <Grid item  sx={{ textAlign: 'left' }}>
                <Typography variant="title1_bold"   >
                 Luxe Core Sheet Set
                </Typography>
                <Grid item  container direction="row" spacing={2}>
                <Grid item  sx={{ textAlign: 'left' }}>
                <Typography sx={{ cursor: 'pointer' }} variant="body2-medium" >
                    <Stack spacing={2}>
                        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                    </Stack>
                </Typography>
                </Grid>
                <Grid item  sx={{ textAlign: 'left' }}>
                <Typography sx={{ cursor: 'pointer' }} variant="body2-medium" color="text.secondary" >
                5555,55 Reviews
                </Typography>
                </Grid>
                </Grid>
                <Grid item>
                <Typography variant="body1_medium" color="text.secondary">
                From $456
                 </Typography>
                </Grid>
                <Grid item>
                 <Typography variant="body1-medium" color="text.secondary">
                 Featuring a rich, buttery-smooth weave, our best-selling Luxe Sateen 
                 Sheets are the ultimate bedding upgrade. Perfect for elevating your 
                 sheet game, these sheets feature a luxurious 480 thread count and a 
                 slightly luminous finish. All our Pillowcases have discreet envelope 
                 closures, making sure there’s no frustrating pillow spillage.
                 </Typography>
                </Grid>
            </Grid>
        </Grid>
        </div>
)}
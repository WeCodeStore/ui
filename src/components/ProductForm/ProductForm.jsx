import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import StarRatings from '../Stars/StarRatings';
import "./ProductForm.css";


export default function ProductForm() {
    return (
        <div className='productForm' data-testid="product-form">
        <Grid  container direction="column" >
             <Grid item  sx={{ textAlign: 'left' }}>
                <Typography variant="title1_bold"   >
                 Luxe Core Sheet Set
                </Typography>
                <Grid item  container direction="row" spacing={2}>
                <Grid item  sx={{ textAlign: 'left' }}>
                < StarRatings/>
                </Grid>
                </Grid> 
                {/* </Grid> */}
                <Grid item>
                <Typography variant="body1_medium" color="text.secondary">
                From $456
                 </Typography>
                </Grid>
                <Grid item>
                 <Typography variant="body_roboto" color="text.secondary">
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
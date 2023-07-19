import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import './ProductGallery.css'

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });
export default function ProductGallery() {
    return (
       
        <Grid className='productGallery' data-testid="product-gallery" >
                    <Grid item  container direction="row" spacing={2}>
                    <Grid item container direction="column" spacing={2} xs={3} >
                        <Grid item >
                            <Img alt="complex" src="https://i.imgur.com/58rvHxE.jpg"   style={{ width: '85px', height: '85px' }}/>
                        </Grid>
                        <Grid item >
                            <Img alt="complex" src="https://i.imgur.com/58rvHxE.jpg"  style={{ width: '85px', height: '85px' }}/>
                        </Grid>
                        <Grid item >
                            <Img alt="complex" src="https://i.imgur.com/58rvHxE.jpg"   style={{ width: '85px', height: '85px' }}/>
                            
                        </Grid>
                    </Grid>
                    <Grid item xs={8}>
                        <Grid item >
                            <Img alt="complex" src="https://i.imgur.com/58rvHxE.jpg" style={{ width: '750px', height: '750px' }}/>
                        </Grid>
                    </Grid>
                    </Grid>
                    </Grid>
                    

    )}
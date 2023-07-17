import * as React from 'react';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Theme";
import ProductGallery from '../../components/ProductGallery/ProductGallery';
import ProductForm from '../../components/ProductForm/ProductForm';
import './ProductCardPage.css'

export default function ProductCardPage() {
    return (
        <div className='product-card-page'>
        <ThemeProvider theme={theme}> 
        <Grid  className='productCardPage' container spacing={2}>
            <Grid item xs={8}>
            <   ProductGallery />
            </Grid>
            <Grid item xs={4}>
                 <ProductForm /> 
            </Grid>  
        </Grid>         
        </ThemeProvider>
        </div>
       
    )}

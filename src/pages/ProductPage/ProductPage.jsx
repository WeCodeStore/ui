import * as React from 'react';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Theme";
import ProductGallery from '../../components/ProductGallery/ProductGallery';
import ProductForm from '../../components/ProductForm/ProductForm';
import './ProductPage.css'
import { useSelector } from "react-redux";

export default function ProductPage() {

    const product = useSelector((state) => state.actions.product);
    console.log("My product: ", product)

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

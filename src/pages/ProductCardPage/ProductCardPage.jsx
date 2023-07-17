import * as React from 'react';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Theme";
import ProductGallery from '../../components/ProductGallery/ProductGallery';
import ProductForm from '../../components/ProductForm/ProductForm';
import { useSelector } from "react-redux";

export default function ProductCardPage() {

    const product = useSelector((state) => state.actions.product);
    console.log("My product: ", product)

    return (
        <ThemeProvider theme={theme}> 
        <Grid container spacing={2}>
            <Grid item xs={8}>
            <   ProductGallery />
            </Grid>
            <Grid item xs={3}>
                 <ProductForm /> 
            </Grid>  
        </Grid>         
        </ThemeProvider>
    )}

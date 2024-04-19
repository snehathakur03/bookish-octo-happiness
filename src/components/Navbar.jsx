import { Box, Stack, Typography, styled } from "@mui/material";
import React from "react";



const Logo = styled("img")(({theme}) => ({
    width:"100px",
    height:"70px",
    

}));

export default function Navbar(){

    return(
        <>
        <Stack direction="row" width="100%" height="80px">
            <Box flex={1} p={1} display="flex" justifyContent="flex-start">
                <Logo  src="data:image/png;base64,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"></Logo>
            </Box>
            <Box sx={{display:{xs:"none", sm:"block"},     borderBottomLeftRadius: "150px" }} flex={10} p={1} bgcolor="#0091d7" alignContent="center">
                <Typography color="#fff" variant="h5" textAlign="center" > Daily Industry News </Typography>
            </Box>
        </Stack>
        </>
    )
}
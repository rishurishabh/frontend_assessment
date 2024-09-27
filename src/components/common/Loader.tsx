import { Box, CircularProgress } from "@mui/material";

const Loader = () => {
    return <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="50vh"
    >
        <CircularProgress />
    </Box>
}

export default Loader;
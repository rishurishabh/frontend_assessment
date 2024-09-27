import React from "react";
import { IPagination } from "../../interfaces/IPagination.interface";
import { Box, Button } from "@mui/material";

const Pagination: React.FC<IPagination> = (props) => {
    const { currentPage, totalPages, onPageChange } = props;

    //PreviousPage
    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    }

    //NextPage
    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    }

    return <>
        <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
            <Button
                onClick={handlePrevious}
                size="small"
                disabled={currentPage === 1}
                variant="outlined"
                sx={{ margin: '0 5px' }}
            >
                Prev
            </Button>
            {
                [...Array(totalPages)]?.map((item: any, idx: number) => (
                    <Button
                        key={idx + 1}
                        size="small"
                        onClick={() => onPageChange(idx + 1)}
                        variant={currentPage === idx + 1 ? "contained" : "outlined"}
                        sx={{ margin: '0 5px' }}
                    >
                        {idx + 1}
                    </Button>
                ))
            }

            <Button
                onClick={handleNext}
                size="small"
                disabled={currentPage === totalPages}
                variant="outlined"
                sx={{ margin: '0 5px' }}
            >
                Next
            </Button>
        </Box>
    </>
}

export default Pagination;
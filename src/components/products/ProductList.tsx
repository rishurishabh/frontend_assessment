import { useEffect, useState } from "react"
import { getProducts } from "../../apis/services/productApi";
import { Box, Container, Typography } from "@mui/material";
import { IProduct } from "../../interfaces/IProduct.interface";
import ProductCard from "./ProductCard";
import Pagination from "../common/Pagination";
import Loader from "../common/Loader";

//Product List
const ProductList = () => {
    const [prouducts, setProducts] = useState<Array<IProduct>>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage: number = 5;
    const totalPages: number = Math.ceil(prouducts.length / itemsPerPage);

    const currentProducts: IProduct[] = prouducts?.slice((currentPage - 1) * itemsPerPage, itemsPerPage * currentPage);

    const getProductList = async () => {
        setIsLoading(true);
        try {
            const list = await getProducts();
            setProducts(list);
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false);
        }

    }

    useEffect(() => {
        getProductList()
    }, [])


    return <Container maxWidth={'xl'}>
        <Box component={'div'}>
            <Typography variant="h5" align="center">Products</Typography>
            {
                isLoading ?
                    <Loader /> :
                    <>
                        <Box display={'flex'} flexWrap={"wrap"} justifyContent={'center'}>
                            {
                                currentProducts?.map((product: IProduct) => {
                                    return <ProductCard key={product?.id} product={product} />
                                })
                            }
                        </Box>
                        <Box display={'flex'} flexWrap={"wrap"} justifyContent={'center'}>
                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={setCurrentPage}
                            />
                        </Box>
                    </>
            }

        </Box>
    </Container>
}

export default ProductList;
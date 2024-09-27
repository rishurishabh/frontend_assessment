import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import { IProduct } from "../../interfaces/IProduct.interface";

interface IProductCardProps {
    product: IProduct
}

const ProductCard: React.FC<IProductCardProps> = ({ product }) => {
    const { id = 0, name = 'N/A', description = 'N/A', price = 0, image } = product;

    const truncateDescription = (text: string, maxLength: number) => {
        return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
    };

    return <Card variant="outlined" sx={{ margin: 2, borderRadius: 2, maxWidth: 150, padding: 1, display: 'flex', flexDirection: 'column', height: '100%' }} >
        <CardMedia component={'img'} height={'150'} sx={{ objectFit: 'contain' }} image={image} alt={name} />
        <CardContent sx={{ flexGrow: 1 }}>
            <Typography variant="body2" gutterBottom>
                {name}
            </Typography>
            <Typography
                variant="subtitle2"
                color="text.secondary"
                noWrap
            >
                {truncateDescription(description, 50)}
            </Typography>
            <Typography variant="body2">${price.toFixed(2)}</Typography>
        </CardContent>
    </Card>
}

export default ProductCard;
 

import { notFound } from "next/navigation"
import { Metadata } from "next"

function getRandomNumber(count: number) {
    return Math.floor(Math.random() * count);
}

type Props = {
    params: {
        productId: number
    }
}

export const generateMetadata = ({ params }: Props): Metadata => {
    return {
        title: `Product ${params.productId} Details`
    }
}


export default function ProductDetails({ params }: Props) {
    const random = getRandomNumber(2)
    if (random === 1) {
        return <div>Random Error</div>
    }
    if (params.productId > 100) {
        return notFound()
    }
    return (
        <div>
            <h1>Product Details {params.productId}</h1>
            <p>Product {params.productId} description</p>
        </div>
    )
}
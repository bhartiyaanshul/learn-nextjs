import { notFound } from "next/navigation"
import { Metadata } from "next"

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
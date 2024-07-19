import { notFound } from "next/navigation"


export default function ProductDetails({ params }: { params: { productId: number } }) {

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
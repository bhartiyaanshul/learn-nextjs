export default function Review({ params }: { params: { reviewId: String } }) {
    return <h1>Review Details {params.reviewId}</h1>
}
export default function Docs({ params }: { params: { slugs: String[] } }) {
    if (params.slugs?.length === 1) {
        return <h1>Docs Page {params.slugs[0]}</h1>
    }
    if (params.slugs?.length === 2) {
        return <h1>Docs Page {params.slugs[0]} {params.slugs[1]}</h1>
    }
    return <h1>Docs Home Page</h1>
}
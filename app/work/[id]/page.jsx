export default async function ProjectDetails({ params }) {
    const { id } = await params

    return (
        <main
            style={{
                position: 'absolute',
                top: '15%',
                left: '50%',
                transform: 'translateX(-50%)',
                textAlign: 'center',
                zIndex: '-1'
            }}
        >
            <h1>Project Details Page</h1>
            <h3>{id}</h3>
        </main>
    )
}

import { useRouteError } from 'react-router-dom'
export default function ErrorPage() {
    const error = useRouteError()
    console.error(error)
    console.log('data', error.data)

    return (
        <div className="error--page">
            <h1>Ooops!</h1>
            <p>
                Sorry, an unexpected error has occured.
            </p>
            <p>
                <i> {error.statusText || error.message} </i>
            </p>
        </div>
    )
}
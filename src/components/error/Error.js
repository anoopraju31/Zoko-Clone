import './error.css'

const Error = () => {
    return (
        <div className='errorPage container'>
            <div className="errorContainer">
                <h1> OOPs! </h1>
            </div>
            <h2> 404 - Page not found </h2>
            <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
        </div>
    )
}

export default Error
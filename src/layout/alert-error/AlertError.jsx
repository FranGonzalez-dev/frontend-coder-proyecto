export const AlertError = ({ message = 'Error' }) => {
    return (
        <div className="w-1/2 alert alert-error">
            <i className="ri-error-warning-fill"></i>
            <span>{ message }</span>
        </div>
    )
}
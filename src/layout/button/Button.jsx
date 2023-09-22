export const Button = ({ type = 'action', action = null, children }) => {
    if(  type === 'action' ) {
        return (
            <button className="btn btn-primary normal-case" onClick={ action }>
                { children }
            </button>
        )
    }
}
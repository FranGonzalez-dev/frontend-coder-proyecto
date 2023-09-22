export const FormInput = ({ type, name, value, placeholder, action }) => {
    return (
        <div className="flex flex-col gap-2 w-full">
            <label htmlFor={ name }>
                { placeholder }
            </label>
            <input 
                type={ type }
                name={ name }
                value={ value }
                onChange={ action }
                className='input input-bordered w-full'
                placeholder={ placeholder }
                required
            />
        </div>
        
    )
}
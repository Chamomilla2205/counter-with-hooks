import React from 'react';

const Input = ({value, onChange}) => {

    const onMyChange = ({target: {value}}) => {
        onChange(value)
    }

    return (
        <div>
            <input
                type="number"
                name={'numbers'}
                onChange={onMyChange}
                value={value}
            />
        </div>
    );
}

export default Input;

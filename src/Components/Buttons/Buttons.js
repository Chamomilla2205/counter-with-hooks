import React from 'react';

const Buttons = ({onClickChange,array}) => {

    const myOnClick = (num) => {
        onClickChange(num)
    }

        return (
            <div>
                {
                    array.map((value) =>
                        <button
                            value = {value}
                            key = {value.id}
                            onClick={() => myOnClick(value)}>
                            {value}
                        </button>)
                }
            </div>
        );
}

export default Buttons;

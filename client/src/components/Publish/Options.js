import React from 'react'

// Styling
import OptionsStying from '../../style//Publish/Options.module.css'

const Options = ({ children, style }) => {
    return ( 
        <div className={OptionsStying}>
            <div>
                Publish Later
            </div>

            {/* ??? Find a way to input dates */}
            <form>
                <label>
                    <input  />
                </label>
            </form>
        </div>
    )
};

export default Options;
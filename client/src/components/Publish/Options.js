import React from 'react';

// Styling
import OptionsStying from '../../style/Publish/Options.module.css';

const Options = () => (
  <div className={OptionsStying}>
    <div>
      Publish Later
    </div>

    {/* ??? Find a way to input dates */}
    <form>
      <label htmlFor="input">
        <input />
      </label>
    </form>
  </div>
);

export default Options;

import { ReactElement } from 'react';

function Checkbox(): ReactElement {
  return (
    <>
      <input type="checkbox" id="checkbox" />
      <label htmlFor="checkbox">checkbox</label>
    </>
  );
}

export default Checkbox;

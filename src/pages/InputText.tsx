import { ReactElement } from 'react';
import AutoResizeTextArea from '../components/AutoResizeTextArea';

function InputText(): ReactElement {
  return (
    <div className="flex flex-col flex-wrap items-start">
      <input />
      <input type="text" placeholder="id" />
      <input type="password" placeholder="pw" />
      <textarea placeholder="normal textarea" />
      <AutoResizeTextArea placeholder="Auto Resize TextArea" rows={2} />
    </div>
  );
}

export default InputText;

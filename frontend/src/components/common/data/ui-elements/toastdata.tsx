import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SpkButton from '../../../../@spk-reusable-components/reusable-uielements/spk-button';

const notify = () => toast("I'm a toast message.");

export const Customtoaster = () => {
  return (
    <>
      <SpkButton Buttonvariant="primary" Id="toast-button" onClickfunc={notify}>Click For Live Toast</SpkButton>
      <ToastContainer />
    </>
  );
};
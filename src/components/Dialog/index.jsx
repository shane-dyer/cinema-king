import styles from './styles.module.scss';

const Dialog = ({ children, open, handleClose }) => (
  <dialog className={styles.dialog} open={open}>
    {children}
    <button type="button" onClick={handleClose}>
      Close
    </button>
  </dialog>
);

export default Dialog;

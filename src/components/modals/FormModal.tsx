import Modal from './Modal';
import OptInForm from '../OptInForm';

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FormModal({ isOpen, onClose }: FormModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="700px">
      <div className="modal-form-wrapper">
        <OptInForm />
      </div>
    </Modal>
  );
}

import {
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
} from 'react';
import './ProfilePhoto.css';

function ProfilePhoto() {
  const [isOpen, setIsOpen] = useState(false);

  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousFocusedElement = document.activeElement as HTMLElement;
    const previousBodyOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent): void {
      if (event.key === 'Escape') {
        setIsOpen(false);
        return;
      }

      if (event.key !== 'Tab' || !dialogRef.current) {
        return;
      }

      const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );

      const focusableItems = Array.from(focusableElements);

      if (focusableItems.length === 0) {
        event.preventDefault();
        return;
      }

      const firstElement = focusableItems[0];
      const lastElement = focusableItems[focusableItems.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }

      if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      window.removeEventListener('keydown', handleKeyDown);

      if (previousFocusedElement?.isConnected) {
        previousFocusedElement.focus();
      } else {
        triggerRef.current?.focus();
      }
    };
  }, [isOpen]);

  function closeModal(): void {
    setIsOpen(false);
  }

  function handleBackdropClick(
    event: ReactMouseEvent<HTMLDivElement>,
  ): void {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  }

  return (
    <>
      <button
        ref={triggerRef}
        className='profile-photo-button'
        type='button'
        onClick={() => setIsOpen(true)}
        aria-label='Ampliar foto de Angelita Santos'
      >
        <img
          className='profile-photo'
          src='/angel.png'
          alt='Angelita Santos'
        />
      </button>

      {isOpen && (
        <div className='image-modal' onClick={handleBackdropClick}>
          <section
            ref={dialogRef}
            className='image-modal-content'
            role='dialog'
            aria-modal='true'
            aria-label='Foto ampliada de Angelita Santos'
          >
            <button
              ref={closeButtonRef}
              className='icon-button close-modal-button'
              type='button'
              onClick={closeModal}
              aria-label='Fechar foto ampliada'
            >
              ×
            </button>

            <img
              className='profile-photo-expanded'
              src='/angel.png'
              alt='Angelita Santos ampliada'
            />
          </section>
        </div>
      )}
    </>
  );
}

export default ProfilePhoto;

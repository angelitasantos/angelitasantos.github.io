import { useEffect, useState } from 'react';
import './ProfilePhoto.css';

function ProfilePhoto() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent): void {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  function closeModal(): void {
    setIsOpen(false);
  }

  function preventModalClose(event: React.MouseEvent<HTMLDivElement>): void {
    event.stopPropagation();
  }

  return (
    <>
      <button
        className='profile-photo-button'
        type='button'
        onClick={() => setIsOpen(true)}
        aria-label='Ampliar foto de Angelita Santos'
      >
        <img className='profile-photo' src='/angel.png' alt='Angelita Santos' />
      </button>

      {isOpen && (
        <div
          className='image-modal'
          role='dialog'
          aria-modal='true'
          aria-label='Foto ampliada de Angelita Santos'
          onClick={closeModal}
        >
          <div className='image-modal-content' onClick={preventModalClose}>
            <button
              className='close-modal-button'
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
          </div>
        </div>
      )}
    </>
  );
}

export default ProfilePhoto;

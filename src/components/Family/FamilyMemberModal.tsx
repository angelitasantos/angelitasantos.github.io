import {
  useEffect,
  useRef,
  type MouseEvent as ReactMouseEvent,
} from 'react';
import type { FamilyMember } from '../../types';
import { relationshipIcons, relationshipLabels } from '../../types';

interface FamilyMemberModalProps {
  member: FamilyMember;
  onClose: () => void;
}

function FamilyMemberModal({ member, onClose }: FamilyMemberModalProps) {
  const dialogRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousFocusedElement = document.activeElement as HTMLElement;
    const previousBodyOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent): void {
      if (event.key === 'Escape') {
        onClose();
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
      }
    };
  }, [onClose]);

  function handleBackdropClick(event: ReactMouseEvent<HTMLDivElement>): void {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  return (
    <div className='family-modal-backdrop' onClick={handleBackdropClick}>
      <section
        ref={dialogRef}
        className='family-member-modal'
        role='dialog'
        aria-modal='true'
        aria-labelledby='family-member-modal-title'
        aria-describedby='family-member-modal-description'
      >
        <button
          ref={closeButtonRef}
          className='icon-button family-modal-close-button'
          type='button'
          onClick={onClose}
          aria-label='Fechar detalhes'
        >
          ×
        </button>

        <div className='family-modal-header'>
          <div className='family-modal-avatar' aria-hidden='true'>
            {member.photo ? (
              <img src={member.photo} alt='' />
            ) : (
              relationshipIcons[member.relationship]
            )}
          </div>

          <div>
            <p className='hero-eyebrow'>
              {relationshipLabels[member.relationship]}
            </p>

            <h2 id='family-member-modal-title'>{member.name}</h2>

            {member.birthYear && (
              <p className='family-modal-birth-year'>
                Nascimento: {member.birthYear}
              </p>
            )}

            {member.deathYear && (
              <p className='family-death-year'>
                Falecimento: {member.deathYear} †
              </p>
            )}
          </div>
        </div>

        <div className='family-modal-content'>
          <h3>Sobre</h3>

          <p id='family-member-modal-description'>
            {member.description ??
              'Nenhuma informação adicional foi cadastrada para esta pessoa.'}
          </p>
        </div>
      </section>
    </div>
  );
}

export default FamilyMemberModal;

import { useEffect } from 'react';
import type { FamilyMember } from '../../types';
import { relationshipIcons, relationshipLabels } from '../../types';

interface FamilyMemberModalProps {
  member: FamilyMember;
  onClose: () => void;
}

function FamilyMemberModal({ member, onClose }: FamilyMemberModalProps) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent): void {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  function handleBackdropClick(
    event: React.MouseEvent<HTMLDivElement>,
  ): void {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  return (
    <div className='family-modal-backdrop' role='presentation' onClick={handleBackdropClick} >
      <section className='family-member-modal' role='dialog' aria-modal='true' aria-labelledby='family-member-modal-title'>
        <button className='family-modal-close-button' type='button' onClick={onClose} aria-label='Fechar detalhes'>×</button>

        <div className='family-modal-header'>
          <div className='family-modal-avatar' aria-hidden='true'>
            {member.photo ? (
              <img src={member.photo} alt='' />
            ) : (
              relationshipIcons[member.relationship]
            )}
          </div>

          <div>
            <p className='hero-eyebrow'>{relationshipLabels[member.relationship]}</p>
            <h2 id='family-member-modal-title'>{member.name}</h2>
            {member.birthYear && (<p className='family-modal-birth-year'>Nascimento: {member.birthYear}</p>)}
            {member.deathYear && (<p className='family-death-year'>Falecimento: {member.deathYear} †</p>)}
          </div>
        </div>

        <div className='family-modal-content'>
          <h3>Sobre</h3>
          <p>{member.description ?? 'Nenhuma informação adicional foi cadastrada para esta pessoa.'}</p>
        </div>
      </section>
    </div>
  );
}

export default FamilyMemberModal;

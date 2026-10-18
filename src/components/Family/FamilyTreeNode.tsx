import { useState } from 'react';
import type { FamilyMember } from '../../types';
import { relationshipIcons, relationshipLabels } from '../../types';

interface FamilyTreeNodeProps {
  member: FamilyMember;
  depth?: number;
  onSelectMember: (member: FamilyMember) => void;
}

function FamilyTreeNode({
  member,
  depth = 0,
  onSelectMember,
}: FamilyTreeNodeProps) {
  const hasChildren = Boolean(member.children?.length);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const childrenId = `${member.id}-children`;

  function toggleChildren(): void {
    setIsExpanded((currentValue) => !currentValue);
  }

  return (
    <li className={`family-tree-node family-tree-node-depth-${depth}`}>
      <div className='family-node-card'>
        {/* Trigger: avatar + conteúdo (nome + relação + descrição) */}
        <button type='button' className='family-member-trigger' onClick={() => onSelectMember(member)}>
          <span className='family-node-avatar' aria-hidden='true'>
            {member.photo ? (
              <img src={member.photo} alt='' />
            ) : (
              relationshipIcons[member.relationship]
            )}
          </span>

          <span className='family-node-content'>
            <span className='family-node-heading'>
              <h3 className='family-node-name'>{member.name}</h3>
              <span className='family-relationship'>{relationshipLabels[member.relationship]}</span>
            </span>

            {member.description && (<span className='family-node-description'>{member.description}</span>)}
            {member.birthYear && (<span className='family-birth-year'>Nascimento: {member.birthYear}</span>)}
            {member.deathYear && (<span className='family-death-year'>Falecimento: {member.deathYear} †</span>)}
          </span>
        </button>

        {/* Botão de expandir/recolher — só aparece se tiver filhos */}
        {hasChildren && (
          <button type='button' className='family-toggle-button' onClick={toggleChildren}
            aria-expanded={isExpanded} aria-controls={childrenId}>
            {isExpanded ? 'Ocultar' : 'Mostrar'}
            <span aria-hidden='true'>{isExpanded ? '−' : '+'}</span>
          </button>
        )}
      </div>

      {hasChildren && isExpanded && (
        <ul id={childrenId} className='family-children'>
          {member.children!.map((child) => (
            <FamilyTreeNode key={child.id} member={child} depth={depth + 1} onSelectMember={onSelectMember} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default FamilyTreeNode;

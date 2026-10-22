import { useState } from 'react';
import { Link } from 'react-router-dom';
import FamilyMemberModal from '../../components/Family/FamilyMemberModal';
import FamilyTreeNode from '../../components/Family/FamilyTreeNode';
import { familyGroups } from '../../data/family/family';
import type { FamilyMember } from '../../types';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import './Family.css';

function countFamilyMembers(member: FamilyMember): number {
  const childrenCount =
    member.children?.reduce(
      (total, child) => total + countFamilyMembers(child),
      0,
    ) ?? 0;

  return 1 + childrenCount;
}

function getGenerationDepth(member: FamilyMember): number {
  if (!member.children || member.children.length === 0) {
    return 1;
  }

  return (
    1 + Math.max(...member.children.map((child) => getGenerationDepth(child)))
  );
}

function Family() {
  useDocumentTitle('Família | Angelita Santos');

  const [selectedMember, setSelectedMember] = useState<FamilyMember | null>(
    null,
  );

  const totalMembers = familyGroups.reduce((total, group) => {
    const groupMembers = group.members.reduce(
      (membersTotal, member) => membersTotal + countFamilyMembers(member),
      0,
    );

    return total + groupMembers;
  }, 0);

  const totalGenerations = Math.max(
    ...familyGroups.flatMap((group) =>
      group.members.map((member) => getGenerationDepth(member)),
    ),
  );

  return (
    <main className='page family-page'>
      <header className='page-header family-header'>
        <Link className='back-link' to='/'>
          <span aria-hidden='true'>←</span>
          Voltar ao início
        </Link>

        <p className='hero-eyebrow'>Histórias e conexões</p>

        <h1 className='page-title'>
          Laços de
          <span className='page-title__accent'>família</span>
        </h1>

        <p className='page-introduction'>
          Uma árvore familiar organizada por núcleos e gerações. Cada card
          representa uma pessoa ou casal, e os descendentes podem ser expandidos
          ou recolhidos conforme necessário.
        </p>
      </header>

      <section
        className='notice notice--green family-privacy-note'
        aria-label='Aviso de privacidade'
      >
        <span aria-hidden='true'>🛡️</span>

        <p>
          Publique apenas informações que você deseja tornar públicas e que
          tenham consentimento das pessoas envolvidas. Você pode usar apelidos,
          fotos genéricas ou omitir detalhes pessoais.
        </p>
      </section>

      <section className='summary-grid' aria-label='Resumo familiar'>
        <article className='summary-card'>
          <strong>{familyGroups.length}</strong>
          <span>Núcleos familiares</span>
        </article>

        <article className='summary-card'>
          <strong>{totalMembers}</strong>
          <span>Membros cadastrados</span>
        </article>

        <article className='summary-card'>
          <strong>{totalGenerations}</strong>
          <span>Gerações representadas</span>
        </article>
      </section>

      <section className='family-groups' aria-label='Árvore familiar'>
        {familyGroups.map((group) => (
          <article key={group.id} className='card family-group'>
            <header className='family-group-header'>
              <div>
                <p className='hero-eyebrow'>Núcleo familiar</p>
                <h2>{group.title}</h2>
              </div>

              {group.description && <p>{group.description}</p>}
            </header>

            <ul className='family-tree-root'>
              {group.members.map((member) => (
                <FamilyTreeNode
                  key={member.id}
                  member={member}
                  onSelectMember={setSelectedMember}
                />
              ))}
            </ul>
          </article>
        ))}
      </section>

      {selectedMember && (
        <FamilyMemberModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </main>
  );
}

export default Family;

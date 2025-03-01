import * as S from '@/components/Home/Features/features-styles';
import Logo from '@/assets/images/features/To do list-amico.svg';

const listFeatures = [
  {
    title: 'Recursos Incríveis para sua Lista de Tarefas',
    items: [
      'Crie sua lista de tarefas',
      'Marque suas tarefas como concluídas',
      'Exclua tarefas que não deseja mais',
      'Organização intuitiva e fácil de usar',
      'Acompanhamento de Progresso',
    ],
  },
];

export const FeaturesHome: React.FC = () => {
  return (
    <S.Container>
      <S.Main>
        <S.Image src={Logo} alt="features" />
        {listFeatures.map((feature) => (
          <S.Section key={feature.title}>
            <S.ListContainer>
              <S.Title>{feature.title}</S.Title>
              {feature.items.map((item, index) => (
                <S.List key={index}>
                  <S.CheckCircleIcon />
                  {item}
                </S.List>
              ))}
            </S.ListContainer>
          </S.Section>
        ))}
      </S.Main>
    </S.Container>
  );
};

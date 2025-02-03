// Ant Design Components
import { Skeleton } from 'antd';

// Validators
import { CreateTodoValidationType } from '@/components/Todo/Add/validators';

// Custom Components
import { BreadCrumb, BreadcrumbItems } from '@/components/shared/BreadCrumb';

// Hooks
import { FC } from 'react';
import { useTodoForm } from '@/components/Todo/Add/hooks';

import { Category } from '@/api/service/category/types';
import { Tag } from '@/api/service/tag/types';
import { TodoForm } from '@/components/Todo/Add/organisms';

// Styles
import * as G from '@/styles/global-styles';

const items: BreadcrumbItems = [
  { title: 'Todo', href: '/todo' },
  { title: 'Adicionar Tarefa' },
];

type AddTodoTemplateProps = {
  isSaving: boolean;
  categories: Category[];
  tags: Tag[];
  isLoadingCategoriesAndTags: boolean;
  onFormSubmitHandler: (data: CreateTodoValidationType) => void;
  goToTodoPage: () => void;
};

export const AddTodoTemplate: FC<AddTodoTemplateProps> = ({
  isSaving,
  onFormSubmitHandler,
  categories,
  tags,
  isLoadingCategoriesAndTags,
  goToTodoPage,
}) => {
  const {
    control,
    handleSubmit,
    errors,
    setValue,
    isExpirationEnabled,
    reset,
  } = useTodoForm(onFormSubmitHandler);
  console.log('errors', errors);
  const handleCancel = () => {
    reset();
    goToTodoPage();
  };

  return (
    <G.StyledContainer>
      <BreadCrumb items={items} />
      <G.CardMain title="Adicionar Tarefa" hoverable>
        <Skeleton active loading={isLoadingCategoriesAndTags}>
          <TodoForm
            control={control}
            errors={errors}
            onFormSubmit={onFormSubmitHandler}
            isExpirationVisible={isExpirationEnabled}
            isSaving={isSaving}
            tags={tags}
            categories={categories}
            setValue={setValue}
            onCancel={handleCancel}
            handleSubmitForm={handleSubmit}
          />
        </Skeleton>
      </G.CardMain>
    </G.StyledContainer>
  );
};

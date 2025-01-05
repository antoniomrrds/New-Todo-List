import AppFooter from '@/components/Footer';
import { AppHeader } from '@/components/Header';
import { AddTodoTemplate } from '@/components/Todo/Add';

import {
  useAddTodo,
  useCategoriesAndTags,
  useErrorHandling,
} from '@/components/Todo/Add/hooks';
// Hooks
import { useCallback } from 'react';

import { StyledLayout } from '@/styles/global-styles';

import { App as AppAntd } from 'antd';
import { Content } from 'antd/es/layout/layout';

import { useNavigate } from 'react-router-dom';

export const AddTodoPage = () => {
  const { notification } = AppAntd.useApp();
  const navigate = useNavigate();
  const goToTodoPage = useCallback(() => navigate('/todo'), [navigate]);

  const { isSaving, handleFormSubmit } = useAddTodo({
    goToTodoPage,
    notification,
  });

  const {
    categories,
    tags,
    errorCategories,
    errorTags,
    isLoadingCategoriesAndTags,
  } = useCategoriesAndTags();

  useErrorHandling({
    errorCategories,
    errorTags,
    notification,
    goToTodoPage,
  });

  return (
    <StyledLayout>
      <AppHeader />
      <Content>
        <AddTodoTemplate
          isSaving={isSaving}
          onFormSubmitHandler={handleFormSubmit}
          categories={categories}
          tags={tags}
          isLoadingCategoriesAndTags={isLoadingCategoriesAndTags}
          goToTodoPage={goToTodoPage}
        />
      </Content>
      <AppFooter />
    </StyledLayout>
  );
};

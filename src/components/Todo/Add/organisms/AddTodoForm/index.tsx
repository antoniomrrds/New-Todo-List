import { Category } from '@/api/service/category/types';
import { Tag } from '@/api/service/tag/types';
import { DescriptionEditorField } from '@/components/Todo/Add/molecules';
import {
  ActionButtonGroup,
  CategoriesAndTags,
  ShowExpirationAndIsCompleted,
  TimerPickerAndDatePicker,
  TitleAndStatus,
} from '@/components/Todo/Add/organisms';
import { CreateTodoFieldWithSetValuesProps } from '@/components/Todo/Add/types';
import { CreateTodoValidationType } from '@/components/Todo/Add/validators';
import { Form, Spin } from 'antd';
import { FieldValues, UseFormHandleSubmit } from 'react-hook-form';

type BaseProps = CreateTodoFieldWithSetValuesProps;
type TodoTemplateProps<T extends FieldValues> = {
  isSaving: boolean;
  onFormSubmit: (data: T) => void;
  isExpirationVisible: boolean;
  onCancel: () => void;
  handleSubmitForm: UseFormHandleSubmit<T>;
  tags: Tag[];
  categories: Category[];
} & BaseProps;

export const TodoForm = ({
  isSaving,
  onFormSubmit,
  isExpirationVisible,
  onCancel,
  handleSubmitForm,
  control,
  errors,
  setValue,
  categories,
  tags,
}: TodoTemplateProps<CreateTodoValidationType>) => (
  <Spin spinning={isSaving} tip="Salvando os dados..." size="large" delay={500}>
    <Form layout="vertical" onFinish={handleSubmitForm(onFormSubmit)}>
      <TitleAndStatus control={control} errors={errors} />
      <DescriptionEditorField
        control={control}
        errors={errors}
        setValue={setValue}
      />
      <ShowExpirationAndIsCompleted control={control} errors={errors} />
      {isExpirationVisible && (
        <TimerPickerAndDatePicker control={control} errors={errors} />
      )}
      <CategoriesAndTags
        control={control}
        tags={tags}
        categories={categories}
        errors={errors}
      />
      <ActionButtonGroup onCancel={onCancel} isLoading={isSaving} />
    </Form>
  </Spin>
);

import { SelectFieldCustom } from '@/components/shared/Form';
import { CategoriesProps } from '@/components/Todo/Add/organisms/CategoriesAndTags/types';

export const CategoriesSelectField = ({
  control,
  errors,
  categories,
}: CategoriesProps) => (
  <SelectFieldCustom
    name="categories"
    control={control}
    errors={errors}
    label="Categorias"
    options={categories}
    placeholder="Selecione as categorias"
  />
);

import { SelectFieldCustom } from "@/components/shared/Form";
import { TagsProps } from "@/components/Todo/Add/organisms/CategoriesAndTags/types";

export const TagsSelectField = ({ control, tags, errors }: TagsProps) => (
  <SelectFieldCustom
    name="tags"
    control={control}
    errors={errors}
    label="Tags"
    options={tags}
    placeholder="Selecione as tags"
  />
);

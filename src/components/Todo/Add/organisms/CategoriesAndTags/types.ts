import {
  CreateTodoFieldPropsWithoutName,
  WithCategories,
  WithTags,
} from '@/components/Todo/Add/types'
type BaseProps = CreateTodoFieldPropsWithoutName

export type CategoriesProps = BaseProps & WithCategories

export type TagsProps = BaseProps & WithTags

export type CategoriesAndTagsProps = BaseProps & WithCategories & WithTags

import {
  CategoriesField,
  TagsSelectField,
} from '@/components/Todo/Add/molecules'
import { CategoriesAndTagsProps } from '@/components/Todo/Add/organisms/CategoriesAndTags/types'
import { Col, Row } from 'antd'

export const CategoriesAndTags = ({
  control,
  errors,
  categories,
  tags,
}: CategoriesAndTagsProps) => (
  <Row gutter={[8, 8]}>
    <Col xs={24} md={12}>
      <CategoriesField
        control={control}
        errors={errors}
        categories={categories}
      />
    </Col>
    <Col xs={24} md={12}>
      <TagsSelectField control={control} errors={errors} tags={tags} />
    </Col>
  </Row>
)

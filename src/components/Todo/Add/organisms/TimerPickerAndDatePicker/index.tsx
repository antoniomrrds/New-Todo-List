import { DatePickerField } from '@/components/Todo/Add/molecules/date-picker-field';
import { TimerPickerField } from '@/components/Todo/Add/molecules/timer-picker-field';
import { CreateTodoFieldPropsWithoutName } from '@/components/Todo/Add/types';
import { Col, Row } from 'antd';

export type TimerPickerAndDatePickerProps = CreateTodoFieldPropsWithoutName;

export const TimerPickerAndDatePicker = ({
  control,
  errors,
}: TimerPickerAndDatePickerProps) => (
  <Row gutter={16}>
    <Col xs={24} md={12}>
      <DatePickerField control={control} errors={errors} />
    </Col>
    <Col xs={24} md={12}>
      <TimerPickerField control={control} errors={errors} />
    </Col>
  </Row>
);

import { QuestionCircleOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import * as S from './label-styles';
import { FC } from 'react';
import { theme } from '@/styles/Theme';

type LabelFormProps = {
  id?: string;
  className?: string; // Tornar o className opcional para maior flexibilidade
  title: string;
  tooltipTitle?: string;
  required?: boolean;
  tooltipActive?: boolean;
  icon?: React.ReactNode; // Permite passar um ícone personalizado
};

export const LabelForm: FC<LabelFormProps> = ({
  id,
  className = '',
  title,
  tooltipTitle = 'Este campo é obrigatório!',
  required = false,
  icon = <QuestionCircleOutlined />, // Ícone padrão
  tooltipActive = false,
}) => {
  return (
    <S.TodoLabel
      id={`${id}-label`}
      htmlFor={id}
      className={`${className} ${required ? 'required' : ''}`}
      $tooltipActive={tooltipActive}
    >
      {title}
      {(required || tooltipActive) && (
        <Tooltip
          color={tooltipActive ? '' : theme.colors.error.errorRed600}
          className="required-tooltip "
          autoAdjustOverflow
          title={tooltipTitle}
        >
          {icon}
        </Tooltip>
      )}
    </S.TodoLabel>
  );
};

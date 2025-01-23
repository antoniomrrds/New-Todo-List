import { ToDoFilter } from '@/api/service/toDo/types';
import { TodoStatus } from '@/components/Todo/Add/enum';
import { Modal, Select, Input } from 'antd';
import { FC, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';

type ModalProps = {
  onClose: () => void;
  open: boolean;
  filters: ToDoFilter;
  onApplyFilters: (filters: ToDoFilter) => void;
};

export const ModalCustom: FC<ModalProps> = ({
  onClose,
  open,
  filters,
  onApplyFilters,
}) => {
  const { control, handleSubmit, reset } = useForm<ToDoFilter>({
    defaultValues: filters, // Inicializa com os filtros recebidos do pai
  });

  // Quando o modal for aberto, resetamos os valores do formulário
  useEffect(() => {
    reset(filters);
  }, [open, filters, reset]);

  const handleApplyFilters = (data: ToDoFilter) => {
    onApplyFilters(data); // Passa os dados para o pai
    onClose();
  };

  return (
    <Modal
      title="Filtrar Tarefas"
      open={open}
      onCancel={onClose}
      onOk={handleSubmit(handleApplyFilters)} // Usa handleSubmit para validar e passar os dados
      centered
      styles={{
        mask: {
          backdropFilter: 'blur(10px)',
        },
      }}
    >
      <form onSubmit={handleSubmit(handleApplyFilters)}>
        <div>
          <label>Título</label>
          <Controller
            name="Title"
            control={control}
            render={({ field }) => (
              <Input {...field} placeholder="Digite o título" allowClear />
            )}
          />
        </div>

        <div>
          <label>Status</label>
          <Controller
            name="Active"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={[
                  { value: TodoStatus.Inactive, label: 'Inativo' },
                  { value: TodoStatus.Active, label: 'Ativo' },
                ]}
              />
            )}
          />
        </div>
      </form>
    </Modal>
  );
};

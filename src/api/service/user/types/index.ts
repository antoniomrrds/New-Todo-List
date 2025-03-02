import { ActivationState } from '@/api/core/types';

type Base = {
  name: string;
  email: string;
};

// Usuário completo com identificadores e datas
export type User = Base & {
  id: string;
  idImage?: string; // ID da imagem pode ser opcional
  urlImage?: string; // URL da imagem pode ser opcional
  active: ActivationState;
  createdAt: string;
  updatedAt: string;
  createdAtFormatted: string;
  updatedAtFormatted: string;
};

// Usuário sem senha, equivalente ao User
export type UserWithoutPassword = User;

// DTO para atualizar o perfil do usuário
export type UpdateUserProfile = {
  name: string;
};

// DTO para alteração de imagem, utilizando FormData para upload correto
export type UserChangeImageRequestDTO = FormData;

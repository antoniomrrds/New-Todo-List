import { ActivationState, PagedResponse } from '@/api/core/types';

type TagBase = {
  name: string;
  description: string;
  active: ActivationState;
};

export type CreateTag = TagBase;

export type Tag = TagBase & {
  id: number;
  createdAt: string;
  updatedAt: string;
  createdAtFormatted: string;
  updatedAtFormatted: string;
};

export type TagFilter = {
  name: string;
  PageSize: number;
  Page: number;
  Active: ActivationState;
};

export type FilteredTagResponse = PagedResponse<Tag>;

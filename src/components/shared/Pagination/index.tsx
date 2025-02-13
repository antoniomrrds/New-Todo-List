import * as S from '@/components/shared/Pagination/pagination-styles';

type isNumberORUndefined = number | undefined;

type PaginationCustomProps = {
  totalItems: isNumberORUndefined;
  pageDefault: isNumberORUndefined;
  pageSize: isNumberORUndefined;
  onChange: (page: number) => void;
};
export const PaginationCustom = ({
  pageDefault = 1,
  totalItems = 0,
  pageSize = 20,
  onChange,
}: PaginationCustomProps) => (
  <S.PaginationStyled
    align="center"
    defaultCurrent={pageDefault}
    total={totalItems}
    hideOnSinglePage
    responsive
    current={pageDefault}
    showPrevNextJumpers={true}
    pageSize={pageSize}
    showSizeChanger={false}
    onChange={(page) => onChange(page)}
  />
);

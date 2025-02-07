import * as S from '@/components/shared/BreadCrumb/bread-crumb-styles';
import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb, ConfigProvider } from 'antd';
import { BreadcrumbProps } from 'antd/lib';

export type BreadcrumbItems = BreadcrumbProps['items'];

export const BreadCrumb: React.FC<BreadcrumbProps> = (props) => {
  const { items, params } = props;
  return (
    <S.Nav>
      <ConfigProvider theme={S.themeAntdConfigBreadCrumb}>
        <Breadcrumb
          items={[{ title: <HomeOutlined />, href: '/' }, ...(items || [])]}
          params={params}
        />
      </ConfigProvider>
    </S.Nav>
  );
};

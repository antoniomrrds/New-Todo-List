import React, { useEffect, useState } from 'react';
import { HomeOutlined, AppstoreAddOutlined, BookOutlined } from '@ant-design/icons';
import logo from '@/assets/images/logo/checklist (1).png';
import * as S from '@/components/Header/AppHeader.styles';
import { useLocation, useNavigate } from 'react-router-dom';

const items = [
  {
    key: 'home',
    icon: <HomeOutlined />,
    label: 'Home',
  },
  {
    key: 'features',
    icon: <AppstoreAddOutlined />,
    label: 'Features',
  },
  {
    key: 'learn',
    icon: <BookOutlined />,
    label: 'Learn',
  },
];


export const AppHeader: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [selectedKey, setSelectedKey] = useState('home');
  const navigate = useNavigate(); 
  const location = useLocation(); 

  const showDrawer = () => setVisible(true);
  const onClose = () => setVisible(false);


  useEffect(() => {
    const path = location.pathname.replace('/', ''); 
    if (path === '') {
      setSelectedKey('home'); 
    } else {
      setSelectedKey(path); 
    }
  }, [location]);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && visible) {
        onClose();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [visible]);

  const handleMenuClick = (key: string) => {
    setSelectedKey(key);
    onClose();
    navigate(`/${key === 'home' ? '' : key}`);
  };
  const handleNavigateHome = () => {
    navigate('/');
}

  return (
    <S.Container>
      <S.Header>
        <S.Logo src={logo} onClick={handleNavigateHome} alt="Logo" />
        <S.Menu
          selectedKeys={[selectedKey]}
          items={items.map(item => ({
            ...item,
            onClick: () => handleMenuClick(item.key),
          }))}
        />
        <S.MenuButton type="text" icon={<HomeOutlined />} onClick={showDrawer} />
        <S.Drawer
          title="Menu"
          placement="right"
          onClose={onClose}
          open={visible}
          styles={{
            mask: {
              backdropFilter: 'blur(10px)',
            }
          }}
        >
          <S.MenuResponsive
            selectedKeys={[selectedKey]}
            items={items.map(item => ({
              ...item,
              onClick: () => handleMenuClick(item.key),
            }))}
          />
        </S.Drawer>
      </S.Header>
    </S.Container>
  );
};

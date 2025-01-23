import { useNavigateFunction } from '@/helpers/use-navigation';
import { useLocation } from 'react-router-dom';

export const useNavigateToPath = () => {
  const navigate = useNavigateFunction();
  const location = useLocation();

  const navigateToPath = (path: string) => {
    const currentPath = location.pathname;
    const newPath = `${currentPath}/${path}`;
    navigate(newPath);
  };

  return navigateToPath;
};

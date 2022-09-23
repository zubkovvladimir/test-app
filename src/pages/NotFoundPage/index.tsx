import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Result } from 'antd';
import { Routes } from 'constants/routes';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Result
      extra={
        <Button onClick={() => navigate(Routes.main)} type="primary">
          Вернуться на главную
        </Button>
      }
      status="404"
      subTitle="Запрашиваемая страница не найдена"
      title="404"
    />
  );
};

export default NotFoundPage;

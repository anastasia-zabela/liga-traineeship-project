import React, { useEffect, useState } from 'react';
import './Header.css';
import { NavLink, useLocation } from 'react-router-dom';

export const Header = (): JSX.Element => {
  const { pathname } = useLocation();
  const [to, setTo] = useState('/task_form');
  const [linkDesc, setLinkDesc] = useState('Создать задачу');

  useEffect(() => {
    if (pathname === '/tasks_list') {
      setTo('/task_form');
      setLinkDesc('Создать задачу');
    }
    if (pathname !== '/tasks_list') {
      setTo('/tasks_list');
      setLinkDesc('Вернуться на главную');
    }
  }, [pathname]);

  return (
    <header className="header">
      <NavLink to={to}>{linkDesc}</NavLink>
    </header>
  );
};

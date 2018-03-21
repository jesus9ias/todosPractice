import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

export default () => <header className="header">
  <Link className="header__title" to="/">TODOS App Practice</Link>
  <Link className="header__link" to="/todos">All Todos</Link>
  <Link className="header__link" to="/history">History</Link>
</header>;

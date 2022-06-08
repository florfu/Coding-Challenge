import React from 'react';
import { Link } from 'react-router-dom';
import emptyTrash from '../images/empty-trash.png';
import fullTrash from '../images/full-trash.png';

function Header({ isTrashFull }) {
  return (
    <header className="flex items-center justify-between p-4 bg-gradient-to-l from-teal-custom to-teal-600">
      <Link to="/" className="text-white font-medium text-3xl">Post it app</Link>
      <Link to="/TrashBin">
        { isTrashFull
          ? (<img className="trash-icon" src={fullTrash} alt="full-trash" />)
          : (<img className="trash-icon" src={emptyTrash} alt="empty-trash" />) }
      </Link>
    </header>
  );
}

export default Header;

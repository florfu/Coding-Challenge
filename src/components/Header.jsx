import React from 'react';
import { Link } from 'react-router-dom';
import { TbNote } from 'react-icons/tb';
import emptyTrash from '../images/empty-trash.png';
import fullTrash from '../images/full-trash.png';

function Header({ isTrashFull }) {
  return (
    <header
      className="mb-6 flex justify-between items-center p-4 bg-gradient-to-l from-teal-custom to-teal-600"
      data-testid="Header"
    >
      <Link to="/" className="text-white font-medium text-3xl">
        <TbNote className="inline-block align-top" color="#ffffff" size="1.1em" />
        <div className="inline-block ">Post it app</div>
      </Link>
      <Link to="/TrashBin">
        {/* conditional render of empty or full trashbin icon.
        isTrashFull comes from App component */}
        { isTrashFull
          ? (<img className="trash-icon" src={fullTrash} alt="full-trash" />)
          : (<img className="trash-icon" src={emptyTrash} alt="empty-trash" />) }
      </Link>
    </header>
  );
}

export default Header;

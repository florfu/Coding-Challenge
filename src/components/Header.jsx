import React from 'react';
import { Link } from 'react-router-dom';
import emptyTrash from '../images/empty-trash.png';
import fullTrash from '../images/full-trash.png';

function Header({ isTrashFull }) {
  return (
    <header>
      <h1>Post it</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/TrashBin">
              { isTrashFull
                ? (<img className="trash-icon" src={fullTrash} alt="full-trash" />)
                : (<img className="trash-icon" src={emptyTrash} alt="empty-trash" />) }
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

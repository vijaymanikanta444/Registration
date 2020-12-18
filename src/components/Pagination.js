import React from 'react';

export default function Pagination({ currentPage, totalPages, pagination }) {
  const numbers = [];
  for (var i = 1; i <= totalPages; i++) {
    numbers.push(i);
  }
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {numbers.length == 0 ? (
          <li className="page-item">
            <a className="active page-link" href="#">
              {'NO USERS'}
            </a>
          </li>
        ) : (
          numbers.map((number, i) => (
            <li className="page-item" key={number}>
              <a
                className={
                  i + 1 == currentPage ? 'active page-link' : 'page-link'
                }
                onClick={() => pagination(number)}
                href="#"
              >
                {number}
              </a>
            </li>
          ))
        )}
      </ul>
    </nav>
  );
}

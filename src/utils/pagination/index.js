const centerRule = ({ total, activePage }) => (activePage - 1 <= 0 ? 1 : activePage === total ? activePage - 2 : activePage - 1);

const isNumber = number => typeof number === 'number';

const pagination = ({ total = 1, activePage = 1 } = {}) => {
  if (!isNumber(total)) {
    throw new TypeError('total should be a number');
  }

  if (!isNumber(total)) {
    throw new TypeError('activePage should be a number');
  }

  if (total <= 5) {
    return Array.from({ length: total }, (_, index) => index + 1);
  }

  const visiblePage = 3;

  let pages = [
    1,
    ...Array.from({ length: visiblePage }, (_, index) => index + centerRule({ total, activePage })),
    total,
  ];

  pages = pages.filter((page, index, array) => array.indexOf(page) === index);

  let [firstPage, secondPage] = pages;

  if ((firstPage + 2) === secondPage) {
    pages = [
      firstPage,
      firstPage + 1,
      ...pages.slice(1),
    ];
  }

  [firstPage, secondPage] = pages;

  if ((firstPage + 2) < secondPage) {
    pages = [
      firstPage,
      '...',
      ...pages.slice(1),
    ];
  }
  let penultimePage = pages[pages.length - 2];
  let lastPage = pages[pages.length - 1];

  if (penultimePage === (lastPage - 2)) {
    pages = [
      ...pages.slice(0, -1),
      lastPage - 1,
      lastPage,
    ];
  }

  penultimePage = pages[pages.length - 2];
  lastPage = pages[pages.length - 1];

  if (penultimePage < (lastPage - 2)) {
    pages = [
      ...pages.slice(0, -1),
      '...',
      lastPage,
    ];
  }

  return pages;
};

export default pagination;

import pagination from '../../src/utils/pagination';

it('should be a function', () => {
  expect(pagination).toBeInstanceOf(Function);
});


it('should return [1] with pagination({total: 1, activePage: 1 })', () => {
  const params = { total: 1, activePage: 1 };
  expect(pagination(params)).toEqual([1]);
});

it('should return [1, 2, 3] with pagination({total: 3, activePage: 1 })', () => {
  const params = { total: 3, activePage: 1 };
  expect(pagination(params)).toEqual([1, 2, 3]);
});


it('should return [1, 2, 3, 4, 5] with pagination({total: 5, activePAge: 1})', () => {
  const params = { total: 5, activePage: 1 };
  expect(pagination(params)).toEqual([1, 2, 3, 4, 5]);
});

it('should return [1, 2, 3, 4, \'...\', 6] with pagination({total: 6, activePAge: 1})', () => {
  const params = { total: 6, activePage: 1 };
  expect(pagination(params)).toEqual([1, 2, 3, '...', 6]);
});

it('should return [1, 2, 3, 4, \'...\', 6] with pagination({total: 6, activePAge: 2})', () => {
  const params = { total: 6, activePage: 2 };
  expect(pagination(params)).toEqual([1, 2, 3, '...', 6]);
});

it('should return [1, 2, 3, 4, 5, 6] with pagination({total: 6, activePAge: 3})', () => {
  const params = { total: 6, activePage: 3 };
  expect(pagination(params)).toEqual([1, 2, 3, 4, 5, 6]);
});

it('should return [1, 2, 3, 4, 5, 6] with pagination({total: 6, activePAge: 4})', () => {
  const params = { total: 6, activePage: 4 };
  expect(pagination(params)).toEqual([1, 2, 3, 4, 5, 6]);
});

it('should return [1, \'...\', 4, 5, 6] with pagination({total: 6, activePAge: 5})', () => {
  const params = { total: 6, activePage: 5 };
  expect(pagination(params)).toEqual([1, '...', 4, 5, 6]);
});

it('should return [1, \'...\', 4, 5, 6] with pagination({total: 6, activePAge: 6})', () => {
  const params = { total: 6, activePage: 6 };
  expect(pagination(params)).toEqual([1, '...', 4, 5, 6]);
});

it('should return [1, 2, 3, \'...\', 7] with pagination({total: 7, activePAge: 1})', () => {
  const params = { total: 7, activePage: 1 };
  expect(pagination(params)).toEqual([1, 2, 3, '...', 7]);
});

it('should return [1, 2, 3, 4, \'...\', 7] with pagination({total: 7, activePAge: 3})', () => {
  const params = { total: 7, activePage: 3 };
  expect(pagination(params)).toEqual([1, 2, 3, 4, '...', 7]);
});

it('should return [1, 2, 3, 4, 5, 6, 7] with pagination({total: 7, activePAge: 4})', () => {
  const params = { total: 7, activePage: 4 };
  expect(pagination(params)).toEqual([1, 2, 3, 4, 5, 6, 7]);
});

it('should return [1, \'...\', 4, 5, 6, 7] with pagination({total: 7, activePAge: 5})', () => {
  const params = { total: 7, activePage: 5 };
  expect(pagination(params)).toEqual([1, '...', 4, 5, 6, 7]);
});

it('should return [1, \'...\', 5, 6, 7] with pagination({total: 7, activePAge: 7})', () => {
  const params = { total: 7, activePage: 7 };
  expect(pagination(params)).toEqual([1, '...', 5, 6, 7]);
});

it('should return [1, \'...\', 7, 8, 9, \'...\', 15] with pagination({total: 15, activePAge: 8})', () => {
  const params = { total: 15, activePage: 8 };
  expect(pagination(params)).toEqual([1, '...', 7, 8, 9, '...', 15]);
});

it('should return [1, 2, 3, \'...\', 15] with pagination({total: 15})', () => {
  const params = { total: 15 };
  expect(pagination(params)).toEqual([1, 2, 3, '...', 15]);
});

it('should return [1] with pagination({})', () => {
  const params = {};
  expect(pagination(params)).toEqual([1]);
});

it('should return [1] with pagination()', () => {
  expect(pagination()).toEqual([1]);
});

it('should return exeption with pagination({total: \'xxx\', activePage: 1})', () => {
  try {
    const params = { total: 'xxx', activePage: 1 };
    pagination(params);
  } catch (e) {
    expect(e.message).toBe('total should be a number');
  }
});


it('should return exeption with pagination({total: 1, activePage: \'xxx\'})', () => {
  try {
    const params = { total: 1, activePage: 'xxx' };
    pagination(params);
  } catch (e) {
    expect(e.message).toBe('activePage should be a number');
  }
});

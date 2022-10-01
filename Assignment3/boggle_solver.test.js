const boggle_solver = require('/home/codio/workspace/Boggle_Testing/boggle_solver.js');

/** Lowercases a string array in-place. (Used for case-insensitive string array
 *  matching).
 * @param {string[]} stringArray - String array to be lowercase.
 */
function lowercaseStringArray(stringArray) {
  for (let i = 0; i < stringArray.length; i++)
    stringArray[i] = stringArray[i].toLowerCase();
}

describe('Boggle Solver tests suite:', () => {
  describe('Normal input', () => {
    test('From problem description', () => {
      let grid = [
        ['t', 'w', 'y', 'r'],
        ['e', 'n', 'p', 'h'],
        ['g', 'z', 'qu', 'r'],
        ['o', 'n', 't', 'a'],
      ];
      let dictionary = [
        'art',
        'ego',
        'gent',
        'get',
        'net',
        'new',
        'newt',
        'prat',
        'pry',
        'qua',
        'quart',
        'quartz',
        'rat',
        'tar',
        'tarp',
        'ten',
        'went',
        'wet',
        'arty',
        'egg',
        'not',
        'quar',
      ];
      let expected = [
        'ten',
        'wet',
        'went',
        'ego',
        'net',
        'new',
        'newt',
        'pry',
        'prat',
        'get',
        'gent',
        'qua',
        'quar',
        'quart',
        'quartz',
        'rat',
        'tar',
        'tarp',
        'art',
      ];
      let solutions = boggle_solver.findAllSolutions(grid, dictionary);
      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });
    test('3x3', () => {
      const grid = [
        ['A', 'B', 'C'],
        ['D', 'E', 'F'],
        ['G', 'H', 'I'],
      ];
      const dictionary = ['efhi', 'heb', 'gec', 'ifc'];
      const expected = ['efhi', 'heb', 'gec', 'ifc'];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);
      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });

    test('7x7', () => {
      const grid = [
        ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
        ['H', 'I', 'J', 'K', 'L', 'M', 'N'],
        ['O', 'P', 'X', 'R', 'X', 'X', 'X'],
        ['V', 'W', 'I', 'C', 'A', 'F', 'K'],
        ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
        ['V', 'W', 'I', 'C', 'A', 'F', 'K'],
        ['H', 'I', 'J', 'K', 'L', 'M', 'N'],
      ];
      const dictionary = ['pxr', 'hello', 'nkg', 'toptoptop', 'rxxx'];
      const expected = ['pxr', 'nkg', 'rxxx'];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);
      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });

    test('word fills entire Grid', () => {
      const grid = [
        ['A', 'B', 'C'],
        ['D', 'E', 'F'],
        ['G', 'H', 'I'],
      ];
      const dictionary = ['abcdefghi', 'a'];
      const expected = ['abcdefghi'];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);
      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions == expected);
    });
  });
  describe('Problem contraints', () => {
    test('Handle qu correctly', () => {
      const grid = [
        ['Qu', 'A', 'B'],
        ['D', 'E', 'F'],
        ['G', 'H', 'I'],
      ];
      const dictionary = ['quab', 'quei'];
      const expected = ['quab', 'quei'];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);
      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });

    test('Handle st correctly', () => {
      const grid = [
        ['St', 'A', 'B'],
        ['D', 'E', 'F'],
        ['G', 'H', 'I'],
      ];
      const dictionary = ['stab', 'stei'];
      const expected = ['stab', 'stei'];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);
      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });

    test('Only use adjacent tiles', () => {
      const grid = [
        ['T', 'A', 'B'],
        ['D', 'E', 'F'],
        ['G', 'H', 'I'],
      ];
      const dictionary = ['tab', 'tabfi', 'tabi'];
      const expected = ['tab', 'tabfi'];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);
      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });

    test('No tile used twice for same word', () => {
      const grid = [
        ['T', 'A', 'B'],
        ['D', 'E', 'F'],
        ['G', 'H', 'I'],
      ];
      const dictionary = ['tab', 'tabfi', 'taba'];
      const expected = ['tab', 'tabfi'];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);
      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });

    test('Only return word.length>=3', () => {
      const grid = [
        ['T', 'A', 'B'],
        ['D', 'E', 'F'],
        ['G', 'H', 'I'],
      ];
      const dictionary = ['tab', 'tabfi', 'a', 'ae'];
      const expected = ['tab', 'tabfi'];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);
      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });
  });
  describe('Input edge cases', () => {
    // Example Test using Jess
    test('Dictionary is empty', () => {
      // (Edge case) Since there are no possible solutiona, it should return an
      // empty list.
      let grid = [
        ['A', 'B', 'C', 'D'],
        ['E', 'F', 'G', 'H'],
        ['I', 'J', 'K', 'L'],
        ['M', 'N', 'O', 'P'],
      ];
      let dictionary = [];
      let expected = [];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);

      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });

    test('Empty grid', () => {
      let grid = [];
      let dictionary = ['test'];
      let expected = [];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);

      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });

    test('Grid not NxN', () => {
      let grid = ['A', 'A', 'B'];
      let dictionary = ['test'];
      let expected = [];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);

      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });

    test('2 character tile in grid except st or qu', () => {
      let grid = [
        ['AB', 'B', 'CH', 'D'],
        ['E', 'F', 'G', 'H'],
        ['I', 'J', 'K', 'L'],
        ['M', 'N', 'O', 'P'],
      ];
      let dictionary = ['achb'];
      let expected = [];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);

      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });

    test('return empty list when "s" in grid', () => {
      const grid = [
        ['S', 'A', 'B'],
        ['D', 'E', 'F'],
        ['G', 'H', 'I'],
      ];
      const dictionary = ['stab', 'stei'];
      const expected = [];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);
      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });

    test('return empty list when "t" in grid', () => {
      const grid = [
        ['T', 'A', 'B'],
        ['D', 'E', 'F'],
        ['G', 'H', 'I'],
      ];
      const dictionary = ['stab', 'stei'];
      const expected = [];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);
      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });

    test('1x1 grid', () => {
      const grid = ['A'];
      const dictionary = ['stab', 'stei'];
      const expected = [];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);
      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });
  });
});

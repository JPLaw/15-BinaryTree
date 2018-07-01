'use strict';

import binaryTree from '../model/binary-tree';

import { preOrderTraversal, postOrderTraversal, inOrderTraversal } from '../lib/traversal';

describe('PRE-ORDER', () => {
  test('Expecting a string of visited nodes as 1, 2, 6, 7, 8, 9, 3, 4, 5, ', () => {
    // remember that I made my traversal signatures accept a callback so I can apply 
    // any kind of logic to each visited node in the test environment

    let str = '';
    preOrderTraversal(binaryTree.root, (nodeValue) => {
      str += `${nodeValue}, `;
    });
    expect(str.trim()).toEqual('1, 2, 6, 7, 8, 9, 3, 4, 5,');
  });
});

describe('POST-ORDER', () => {
  test('Expect a string of visited nodes as 2, 6, 7, 8, 9, 3, 4, 5, 1, ', () => {
    let str = '';
    postOrderTraversal(binaryTree.root, (nodeValue) => {
      str += `${nodeValue}, `;
    });
    expect(str.trim()).toEqual('2, 6, 7, 8, 9, 3, 4, 5, 1,');
  });
});
  
describe('IN-ORDER', () => {
  test('Expect a string of visited nodes as 2, 6, 7, 8, 9, 1, 3, 4, 5, ', () => {
    let str = '';
    inOrderTraversal(binaryTree.root, (nodeValue) => {
      str += `${nodeValue}, `;
    });
    expect(str.trim()).toEqual('2, 6, 7, 8, 9, 1, 3, 4, 5,');
  });
});

/**
 *  Adds a new item to an array.
 *  this returns a *new* array with the appended value,
 *  and does not modify the original array.
 **/
export const addToArray = (array, newItem) => [...array, newItem];

/**
 *  Removes an item from an array
 *  this returns a *new* array with the removed value,
 *  and does not modify the original array.
 **/
export const removeFromArray = (array, itemToRemove) =>
  array.filter(item => {
    if (item === itemToRemove) return false;
    return true;
  });

/**
 *  Checks to see if an item exists in an array.
 *  Returns `true` or `false`
 **/
export const arrayIncludes = (array, item) => array.includes(item);

/**
 *  Checks to see if an item exists in an array.
 *  Returns `true` or `false`
 **/
export const getRepoById = (repos, id) => repos.find(repo => repo.id === id);

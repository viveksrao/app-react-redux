# Building Applications with React and Redux in ES6

1. Intro
2. Environment Setup (Demo)
3. React Component Approaches
4. Initial App Structure (Demo)
5. Redux Intro
6. Actions, Stores, and Reducers
7. Connecting React to Redux
8. Redux Flow (Demo)
9. Async in Redux (Demo)
10. Async Writes in Redux (Demo)
11. Async Status (Demo)
12. Testing React (Demo)
13. Testing Redux (Demo)
14. Production Build (Demo)

ES6 with Babel and Webpack have become practically the de facto way to build React apps.

### ES6/ES2015 Features

Modules  
Let and Const  
Enhanced Object literals  
Default Parameters  
Template Strings  
Classes  
Arrow Functions  
Promises  
Destructuring  
Spread Operator

### Why Redux?

1. One Store
2. Reduced Boilerplate
3. Isomorphic/Universal Friendly
4. Immutable Store
5. Hot Reloading
6. Time-travel debugging
7. Small

### Development Environment

1. Automated Testing
2. Linting
3. Minification
4. Bundling
5. JSX Compilation
6. ES6 Transpilation

We'll use Babel to transpile ES6 Code to ES5 so that it runs in the browser.

```javascript
export function deleteAuthor(authorId) {
  return (dispatch, getState) => {
    return AuthorApi.deleteAuthor(authorId)
      .then(() => {
        dispatch(deletedAuthor(authorId));
      })
      .catch(handleError);
  };
}
```

```javascript
export function deleteAuthor(dispatch, authorId) {
  return AuthorApi.deleteAuthor(authorId)
    .then(() => {
      dispatch(deletedAuthor(authorId));
    })
    .catch(handleError);
}
```

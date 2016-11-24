import delay from './delay';

const authors = [
  {
    id: 'cory-house',
    firstName: 'Cory',
    lastName: 'House'
  },
  {
    id: 'scott-allen',
    firstName: 'Scott',
    lastName: 'Allen'
  },
  {
    id: 'dan-wahlin',
    firstName: 'Dan',
    lastName: 'Wahlin'
  },
  {
    id: 'craig-campbell',
    firstName: 'Craig',
    lastName: 'Campbell'
  },
  {
    id: 'jeremy-mcPeak',
    firstName: 'Jeremy',
    lastName: 'McPeak'
  }
];

const generateId = (author) => {
  return author.firstName.toLowerCase() + '-' + author.lastName.toLowerCase();
};

class AuthorApi{
  static getAllAuthors(){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], authors));
      }, delay);
    });
  }

  static saveAuthor(author){
    author = Object.assign({}, author);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const minAuthorNameLength = 3;
        if(author.firstName.length < minAuthorNameLength){
          reject(`First Name must be atleast ${minAuthorNameLength} characters.`);
        }
        if(author.lastName.length < minAuthorNameLength){
          reject(`Last Name must be atleast ${minAuthorNameLength} characters.`);
        }
        if(author.id){
          const existingAuthorIndex = authors.findIndex(a => a.id == author.id);
          authors.splice(existingAuthorIndex, 1, author);
        }else{
          author.id = generateId(author);
          authors.push(author);
        }
        resolve(author);

      }, delay);
    });
  }

  static delayAuthor(authorId){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfAuthorToDelete = authors.findIndex(author => {
          author.authorId == authorId;
        });
        authors.splice(indexOfAuthorToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default AuthorApi;

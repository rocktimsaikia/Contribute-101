# Contributors Style Guide (feature/improvement)

Currently we are following a set of style rules and a basic test suite for maintaining a clean and organized code base. It is very important for to follow these style guide before you push your feature or enhancements to the master branch .

## Our linting tools

- `Eslint` : For linting and style related errors checks.
- `Prettier` : For linting fix and formatting.

## Our Testing tools

- `Chai and Mocha` : For the basic unit testing
- `Supertest` : for unit test with `http` assertions.

## Steps :

### Linting -

- For checking errors :

```
npm run lint
```

- For fixing all possible errors

```
npm run lint:fix
```

### Unit Test

```
npm run test
```

##### > Make sure to test your code with the above script before making a pull request

##### > Happy Coding :)

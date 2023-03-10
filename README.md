# React Dependency Injection Module

**A way to connect Dependency Injection Container to React applications**

(This package is using @dmytromykhailiuk/dependency-injection-container package)

## Installation

```sh
npm i @dmytromykhailiuk/react-di-module
```

## Example of usage

```typescript

import { Module, useInject, useObservable } from 'condition-flow-engine-with-di';

const providers = [
  // ...
  UserStoreFacade,
  // ...
];

function App() {
  return (
    <Module providers={providers}>
      <UsersComponent/>
    </Module>
  );
}

function UsersComponent() {

  const userStoreFacade = useInject<UserStoreFacade>(UserStoreFacade);

  const users = useObservable<User[]>(userStoreFacade.users$);

  return // ... render users
}

```

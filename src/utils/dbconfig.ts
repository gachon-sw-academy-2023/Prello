export const DBConfig = {
  name: 'MyDB',
  version: 1,
  objectStoresMeta: [
    {
      store: 'user',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'email', keypath: 'email', options: { unique: false } },
        { name: 'password', keypath: 'password', options: { unique: false } },
        { name: 'nickname', keypath: 'nickname', options: { unique: true } },
      ],
    },
    {
      store: 'workspace',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'owner', keypath: 'owner', options: { unique: false } },
        { name: 'name', keypath: 'name', options: { unique: false } },
        { name: 'summary', keypath: 'summary', options: { unique: false } },
        {
          name: 'memberInfo',
          keypath: 'memberInfo',
          options: { unique: false },
        },
      ],
    },
    {
      store: 'card',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'title', keypath: 'title', options: { unique: false } },
        { name: 'order', keypath: 'order', options: { unique: false } },
      ],
    },
    {
      store: 'item',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'title', keypath: 'title', options: { unique: false } },
        { name: 'order', keypath: 'order', options: { unique: false } },
        { name: 'cardId', keypath: 'cardId', options: { unique: false } },
        {
          name: 'description',
          keypath: 'description',
          options: { unique: false },
        },
        { name: 'date', keypath: 'date', options: { unique: false } },
        { name: 'members', keypath: 'members', options: { unique: false } },
      ],
    },
    {
      store: 'board',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'name', keypath: 'name', options: { unique: false } },
        {
          name: 'workspaceId',
          keypath: 'workspaceId',
          options: { unique: false },
        },
      ],
    },
  ],
};

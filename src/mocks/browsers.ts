import { setupWorker } from 'msw';
import { boardHandlers } from './boardHandlers';
import { dataHandlers } from './boardHandlers';
import { handlers } from './handlers';
import { workspaceHandlers } from './workspaceHandlers';

export const worker = setupWorker(

  ...handlers,
  ...dataHandlers,

  ...workspaceHandlers,
,
  ...boardHandlers,
);

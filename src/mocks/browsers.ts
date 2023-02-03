import { setupWorker } from 'msw';
import { boardHandlers } from './boardHandlers';
import { handlers } from './handlers';
import { workspaceHandlers } from './workspaceHandlers';

export const worker = setupWorker(
  ...handlers,
  ...workspaceHandlers,
  ...boardHandlers,
);

import { setupWorker } from 'msw';
import { dataHandlers } from './dataHandlers';
import { handlers } from './handlers';
import { workspaceHandlers } from './workspaceHandlers';

export const worker = setupWorker(
  ...handlers,
  ...dataHandlers,
  ...workspaceHandlers,
);

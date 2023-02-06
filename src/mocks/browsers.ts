import { setupWorker } from 'msw';
import { cardHandlers } from './Board/cardHandlers';
import { handlers } from './handlers';
import { workspaceHandlers } from './workspaceHandlers';
import { itemHandlers } from './Board/itemHandlers';

export const worker = setupWorker(
  ...handlers,
  ...workspaceHandlers,
  ...cardHandlers,
  ...itemHandlers,
);

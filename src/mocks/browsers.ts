import { setupWorker } from 'msw';
import { handlers } from './handlers';
import { workspaceHandlers } from './workspaceHandlers';
import { itemHandlers } from './Board/itemHandlers';
import { cardHandlers } from './Board/cardHandlers';
export const worker = setupWorker(
  ...handlers,
  ...workspaceHandlers,
  ...itemHandlers,
  ...cardHandlers,
);

import { setupWorker } from 'msw';
import { handlers } from './handlers';
import { workspaceHandlers } from './workspaceHandlers';
import { itemHandlers } from './Board/itemHandlers';
import { cardHandlers } from './Board/cardHandlers';
import { boardHandlers } from './boardHandlers';
export const worker = setupWorker(
  ...handlers,
  ...workspaceHandlers,
  ...boardHandlers,
  ...itemHandlers,
  ...cardHandlers,
);

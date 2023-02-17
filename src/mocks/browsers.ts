import { setupWorker } from 'msw';
import { userHandlers } from './userHandlers';
import { workspaceHandlers } from './workspaceHandlers';
import { itemHandlers } from './Board/itemHandlers';
import { cardHandlers } from './Board/CardHandlers';
import { boardHandlers } from './boardHandlers';
export const worker = setupWorker(
  ...userHandlers,
  ...workspaceHandlers,
  ...boardHandlers,
  ...itemHandlers,
  ...cardHandlers,
);

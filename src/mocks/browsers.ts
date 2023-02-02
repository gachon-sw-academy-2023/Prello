import { setupWorker } from 'msw';
import { handlers } from './handlers';
import { workspaceHandlers } from './workspaceHandlers';

export const worker = setupWorker(...handlers, ...workspaceHandlers);

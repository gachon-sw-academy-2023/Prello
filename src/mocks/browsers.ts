import { setupWorker } from 'msw';
import { dataHandlers } from './dataHandlers';
import { handlers } from './handlers';

export const worker = setupWorker(...handlers, ...dataHandlers);

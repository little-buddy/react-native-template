import EE, { EventEmitter } from 'eventemitter3';

const eventBus = new EE() as EventEmitter & {
  EVENT_NAME: Record<string, string>;
};
eventBus.EVENT_NAME = {
  LANG: '_ee_lang',
};

export default eventBus;

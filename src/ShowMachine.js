import { Machine, assign, interpret } from 'xstate';
import { inspect } from '@xstate/inspect';

inspect({ iframe: false });

export const ShowMachine = Machine({
  id: 'show',
  initial: 'idle',
  context: {
    groupslength: 0,
    cycleCount: 0,
  },
  states: {
    idle: {
      on: {
        START: {
          target: 'bug_up',
          actions: [
            assign({ groupslength: (context, event) => context.groupsLength = event.value })
          ]
        },
      }
    },
    bug_up: {
      after: {
        5000: 'lower_third_up',
      },
    },
    lower_third_up: {
      actions: [
        assign({cycleCount: (context) => context.cycleCount = context.cycleCount++})
      ],
      after: {
        10000: 'lower_third_down'
      },
    },
    lower_third_down: {
      after: {
        1000: 'carousel_up'
      },
    },
    carousel_up: {
      after: {
        GROUPS_DELAY: 'carousel_down',
      }
    },
    carousel_down: {
      after: {
        1000: 'lower_third_up',
      }
    }
  }
}, {
  delays: {
    GROUPS_DELAY: (context, event) => {
      return context.groupslength * 20000;
    }
  }
});

const service = interpret(ShowMachine, {
  devTools: true,
});

service.start();

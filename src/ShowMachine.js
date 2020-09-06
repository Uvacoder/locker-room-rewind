import { Machine, assign } from 'xstate';

export const ShowMachine = Machine({
  id: 'show',
  initial: 'idle',
  context: {},
  states: {
    idle: {
      on: {
        START: 'bug_up',
      }
    },
    bug_up: {
      after: {
        5000: 'lower_third_up',
      },
    },
    lower_third_up: {
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
        360000: 'carousel_down', //be sure to check (groups.length * 20000) so this plays all groups before transitioning
      }
    },
    carousel_down: {
      after: {
        1000: 'lower_third_up',
      }
    }
  }
});
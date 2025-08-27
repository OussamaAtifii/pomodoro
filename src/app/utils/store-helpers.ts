import { Phase, PomodoroState } from '@customTypes/store.types';

const PHASE_DURATIONS: Record<Phase, number> = {
  work: 25 * 60,
  shortBreak: 5 * 60,
  longBreak: 15 * 60,
};

export function getPhaseTimeLeft(phase: Phase): number {
  return PHASE_DURATIONS[phase];
}

export function getNextPhase(state: PomodoroState): {
  phase: Phase;
  sessionsCompleted: number;
} {
  if (state.phase === 'work') {
    const newPhase: Phase =
      (state.sessionsCompleted + 1) % 4 === 0 ? 'longBreak' : 'shortBreak';

    return { phase: newPhase, sessionsCompleted: state.sessionsCompleted + 1 };
  }

  return { phase: 'work', sessionsCompleted: state.sessionsCompleted };
}

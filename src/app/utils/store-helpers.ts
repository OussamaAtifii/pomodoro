import { Phase, PhaseStatus, PomodoroState } from '@customTypes/store.types';

const PHASE_DURATIONS: Record<Phase, number> = {
  work: 25 * 60,
  shortBreak: 5 * 60,
  longBreak: 15 * 60,
};

const PHASE_COLORS: Record<Phase, string> = {
  work: '#008000',
  shortBreak: '#1E90FF',
  longBreak: '#9370DB',
};

export function getPhaseTimeLeft(phase: Phase): number {
  return PHASE_DURATIONS[phase];
}

export function getPhaseColor(phase: Phase): string {
  return PHASE_COLORS[phase];
}

export function getNextPhase(state: PomodoroState): PhaseStatus {
  const { phase, sessionsCompleted } = state;

  if (phase === 'work') {
    const newPhase = getNextBreak(sessionsCompleted);
    return { phase: newPhase, sessionsCompleted: sessionsCompleted + 1 };
  }

  return { phase: 'work', sessionsCompleted };
}

export function getNextBreak(
  sessionsCompleted: PomodoroState['sessionsCompleted'],
): Phase {
  const isLongBreak = (sessionsCompleted + 1) % 4 === 0;
  return isLongBreak ? 'longBreak' : 'shortBreak';
}

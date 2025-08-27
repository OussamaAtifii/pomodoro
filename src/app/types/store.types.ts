export type Phase = 'work' | 'shortBreak' | 'longBreak';

export type PomodoroState = {
  timeLeft: number;
  isRunning: boolean;
  phase: Phase;
  sessionsCompleted: number;
};

export type PhaseStatus = Pick<PomodoroState, 'phase' | 'sessionsCompleted'>;

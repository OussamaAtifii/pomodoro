export type Phase = 'work' | 'shortBreak' | 'longBreak';

export type PomodoroState = {
  timeLeft: number;
  isRunning: boolean;
  phase: Phase;
  sessionsCompleted: number;
};

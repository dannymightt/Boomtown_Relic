const SCENE_NAMES = [
  "Loading",
  "RotatePhone",
  "WizardIntro",
  "MiniGame",
  "Unlock",
  "MusicReveal",
];

const ORIENTATION = {
  LANDSCAPE: "landscape",
  PORTRAIT: "portrait",
};

const LOADING_TYPE_SPEED_MS = 42;
const LOADING_LINE_PAUSE_MS = 420;
const INITIAL_BLACK_SCREEN_MS = 2500;
const POST_ROTATION_DELAY_MS = 2000;
const QUESTION_RESULT_HOLD_MS = 1000;
const QUESTION_FADE_OUT_MS = 600;
const TITLE_ONLY_DELAY_MS = 1000;
const TERMINAL_FADE_IN_MS = 900;
const TEMPORAL_BRIDGE_PAUSE_MS = 1600;
const SIGNAL_FLUCTUATE_MS = 2000;
const SIGNAL_LOCK_DELAY_MS = 1000;
const TRANSMISSION_BLINK_COUNT = 3;
const TRANSMISSION_BLINK_INTERVAL_MS = 1000;
const WIZARD_HOLOGRAM_DELAY_MS = 450;
const WIZARD_HOLOGRAM_ARRIVAL_MS = 1150;
const WIZARD_SPEECH_TYPE_SPEED_MS = 85;
const WIZARD_SPEECH_PAUSE_MS = 1100;
const WIZARD_EXIT_DELAY_MS = 1000;
const WIZARD_EXIT_FADE_MS = 800;
const WIZARD_SPEECH_TEXT = "oi mate";
const WIZARD_SECOND_SPEECH_TEXT = "Shoot these fucking things will ya..";
const TYPING_SOUND_URL = "assets/code-typing-soundfx.wav";
const RETRO_FX_SOUND_URL = "assets/retro-fx-2.mp3";
const RETRO_FX_SPRITES = {
  menuStart: { start: 0.05, duration: 0.28, volume: 0.9 },
  shoot: { start: 0.42, duration: 0.16, volume: 0.78 },
  applePop: { start: 0.82, duration: 0.22, volume: 0.82 },
  explosion: { start: 1.3, duration: 0.4, volume: 0.88 },
  levelUp: { start: 1.95, duration: 0.5, volume: 0.86 },
  frogBounce: { start: 2.62, duration: 0.24, volume: 0.78 },
};
const TYPING_SOUND_VOLUME = 0.38;
const MINI_GAME_FIRE_COOLDOWN_MS = 500;
const MINI_GAME_BULLET_SPEED = 760;
const MINI_GAME_GOBLIN_SPEED = 38;
const MINI_GAME_GOBLIN_SPAWN_MS = 1080;
const MINI_GAME_DEATH_ANIMATION_MS = 420;
const MINI_GAME_DIFFICULTY_RAMP_MS = 60000;
const MINI_GAME_OBSTACLE_COUNT = 8;
const MINI_GAME_OBSTACLE_HEALTH = 5;
const MINI_GAME_OBSTACLE_RESPAWN_MS = 5000;
const MINI_GAME_DURATION_MS = 60000;
const MINI_GAME_APPLE_SPAWN_MS = 3600;
const MINI_GAME_GOLDEN_APPLE_COUNT = 2;
const MINI_GAME_GOLDEN_APPLE_RADIUS = 120;
const MINI_GAME_GOLDEN_APPLE_START_MS = 30000;
const MINI_GAME_FAIL_RESTART_MS = 1000;
const MINI_GAME_FINISH_EFFECT_MS = 2200;
const MINI_GAME_BIG_GOBLIN_START_MS = 15000;
const MINI_GAME_LEVEL_REQUIREMENTS = [0, 2, 3, 4, 5];
const MINI_GAME_BOSS_HEALTH = 80;
const MINI_GAME_BOSS_SPEED = 34;
const MINI_GAME_BOSS_TREE_KNOCK_MS = 520;
const MINI_GAME_FAIRY_BOMB_COUNT = 5;
const MINI_GAME_FAIRY_BOMB_RADIUS = 108;
const MINI_GAME_FROG_EVENT_START_MS = 18000;
const MINI_GAME_FROG_EVENT_GAP_MS = 19000;
const MINI_GAME_MAX_FROG_EVENTS = 2;
const MINI_GAME_INTRO_FADE_MS = 700;
const MINI_GAME_INSTRUCTION_SEQUENCE_MS = 11800;
const TEST_START_AT_MINI_GAME_INTRO = true;

// Edit this array to change the opening terminal sequence.
const LOADING_MESSAGES = [
  { text: "Searching for Retro Wizard..." },
  { text: "Last seen:", tone: "muted" },
  { text: "1986" },
  { text: "Current year:", tone: "muted" },
  { text: "2026" },
  { text: "Temporal bridge required...", pauseAfter: TEMPORAL_BRIDGE_PAUSE_MS, clearAfter: true },
  { text: "Connecting you with..." },
  { text: "THE RETRO WIZARD", tone: "final" },
];

const loadingState = {
  activeSurface: null,
  isLandscape: false,
  sequenceStarted: false,
  terminalStarted: false,
  wizardSpeechStarted: false,
};

const audioState = {
  context: null,
  masterGain: null,
  sfxGain: null,
  typingBuffer: null,
  retroFxBuffer: null,
  retroFxLoadPromise: null,
  typingSource: null,
  isTypingSoundActive: false,
  resumePromise: null,
  lastSfxTimes: {},
};

const miniGameState = {
  animationFrame: null,
  bullets: [],
  goblins: [],
  explosions: [],
  obstacles: [],
  apples: [],
  scorchMarks: [],
  pulses: [],
  fairyBombs: [],
  levelMessages: [],
  hitMarkers: [],
  appleSplatters: [],
  lake: null,
  frogs: [],
  trails: [],
  shells: [],
  goldenAppleSpawnTimes: [],
  canvas: null,
  context: null,
  lastFrameTime: 0,
  lastFireTime: -MINI_GAME_FIRE_COOLDOWN_MS,
  lastSpawnTime: 0,
  lastAppleSpawnTime: 0,
  nextFrogSpawnAt: 0,
  frogSpawnCount: 0,
  startedAt: 0,
  level: 1,
  applesTowardNextLevel: 0,
  status: "ready",
  bossSpawned: false,
  preludeStartedAt: 0,
  preludeTimerGlitchSoundPlayed: false,
  preludeObstacles: [],
  gameplayFadeStartedAt: 0,
  shakeUntil: 0,
  shakeIntensity: 0,
  finishEffect: null,
  isRunning: false,
  turretAngle: -Math.PI / 2,
  aimTarget: null,
};

class SceneManager {
  constructor(rootElement) {
    this.rootElement = rootElement;
    this.scenes = new Map();
    this.currentSceneName = null;
  }

  register(sceneName, sceneElement) {
    if (!SCENE_NAMES.includes(sceneName)) {
      throw new Error(`Unknown scene: ${sceneName}`);
    }

    this.scenes.set(sceneName, sceneElement);
    sceneElement.classList.remove("is-active");
    sceneElement.setAttribute("aria-hidden", "true");
  }

  show(sceneName) {
    const nextScene = this.scenes.get(sceneName);

    if (!nextScene) {
      throw new Error(`Scene has not been registered: ${sceneName}`);
    }

    if (this.currentSceneName) {
      const currentScene = this.scenes.get(this.currentSceneName);
      currentScene.classList.remove("is-active");
      currentScene.setAttribute("aria-hidden", "true");
    }

    nextScene.classList.add("is-active");
    nextScene.setAttribute("aria-hidden", "false");
    this.currentSceneName = sceneName;
  }

  getCurrentSceneName() {
    return this.currentSceneName;
  }
}

function updateViewportSize() {
  document.documentElement.style.setProperty("--viewport-width", `${window.innerWidth}px`);
  document.documentElement.style.setProperty("--viewport-height", `${window.innerHeight}px`);
}

function getOrientation() {
  return window.innerWidth >= window.innerHeight
    ? ORIENTATION.LANDSCAPE
    : ORIENTATION.PORTRAIT;
}

function lockViewportInput() {
  const blockDefault = (event) => {
    event.preventDefault();
  };

  // iOS Safari gesture events are separate from standard touch events.
  document.addEventListener("gesturestart", blockDefault);
  document.addEventListener("gesturechange", blockDefault);
  document.addEventListener("gestureend", blockDefault);
  document.addEventListener("dblclick", blockDefault);

  // Prevent page scrolling, pinch zoom, and browser bounce without stopping game input.
  document.addEventListener("touchmove", blockDefault, { passive: false });
}

function getAudioContextConstructor() {
  return window.AudioContext || window.webkitAudioContext;
}

function ensureAudioContext() {
  const AudioContextConstructor = getAudioContextConstructor();

  if (!AudioContextConstructor) {
    return null;
  }

  if (!audioState.context) {
    audioState.context = new AudioContextConstructor();
  }

  if (!audioState.masterGain) {
    audioState.masterGain = audioState.context.createGain();
    audioState.masterGain.gain.value = TYPING_SOUND_VOLUME;
    audioState.masterGain.connect(audioState.context.destination);
  }

  if (!audioState.sfxGain) {
    audioState.sfxGain = audioState.context.createGain();
    audioState.sfxGain.gain.value = 0.78;
    audioState.sfxGain.connect(audioState.context.destination);
  }

  return audioState.context;
}

function unlockGameAudio() {
  const context = ensureAudioContext();

  if (!context) {
    return Promise.resolve();
  }

  if (context.state === "suspended") {
    audioState.resumePromise = context.resume().catch(() => {});
  } else {
    audioState.resumePromise = Promise.resolve();
  }

  loadRetroFxSound();
  return audioState.resumePromise;
}

function loadRetroFxSound() {
  const context = ensureAudioContext();

  if (!context || audioState.retroFxBuffer || audioState.retroFxLoadPromise) {
    return audioState.retroFxLoadPromise;
  }

  audioState.retroFxLoadPromise = fetch(RETRO_FX_SOUND_URL)
    .then((response) => response.arrayBuffer())
    .then((audioData) => context.decodeAudioData(audioData))
    .then((buffer) => {
      audioState.retroFxBuffer = buffer;
      return buffer;
    })
    .catch(() => {
      audioState.retroFxLoadPromise = null;
      return null;
    });

  return audioState.retroFxLoadPromise;
}

// Web Audio is created from the answer tap so mobile browsers allow sound.
async function unlockTypingAudio() {
  const context = ensureAudioContext();

  if (!context) {
    return;
  }

  if (context.state === "suspended") {
    await context.resume();
  }

  if (!audioState.typingBuffer) {
    const response = await fetch(TYPING_SOUND_URL);
    const audioData = await response.arrayBuffer();
    audioState.typingBuffer = await context.decodeAudioData(audioData);
  }
}

function startTypingSound() {
  if (
    !audioState.context ||
    !audioState.masterGain ||
    !audioState.typingBuffer ||
    audioState.isTypingSoundActive
  ) {
    return;
  }

  const source = audioState.context.createBufferSource();
  source.buffer = audioState.typingBuffer;
  source.loop = true;
  source.connect(audioState.masterGain);
  source.start();

  audioState.typingSource = source;
  audioState.isTypingSoundActive = true;
}

function stopTypingSound() {
  if (!audioState.typingSource || !audioState.isTypingSoundActive) {
    return;
  }

  audioState.typingSource.stop();
  audioState.typingSource.disconnect();
  audioState.typingSource = null;
  audioState.isTypingSoundActive = false;
}

function playTone({ frequency, endFrequency, duration, type = "square", volume = 0.14, when = 0 }) {
  const context = audioState.context;

  if (!context || !audioState.sfxGain || context.state !== "running") {
    return;
  }

  const startAt = context.currentTime + when;
  const oscillator = context.createOscillator();
  const gain = context.createGain();

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, startAt);

  if (endFrequency) {
    oscillator.frequency.exponentialRampToValueAtTime(Math.max(20, endFrequency), startAt + duration);
  }

  gain.gain.setValueAtTime(0.0001, startAt);
  gain.gain.exponentialRampToValueAtTime(volume, startAt + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, startAt + duration);
  oscillator.connect(gain);
  gain.connect(audioState.sfxGain);
  oscillator.start(startAt);
  oscillator.stop(startAt + duration + 0.03);
}

function playNoise({ duration, volume = 0.12, lowpass = 900, when = 0 }) {
  const context = audioState.context;

  if (!context || !audioState.sfxGain || context.state !== "running") {
    return;
  }

  const startAt = context.currentTime + when;
  const buffer = context.createBuffer(1, Math.max(1, Math.floor(context.sampleRate * duration)), context.sampleRate);
  const data = buffer.getChannelData(0);

  for (let index = 0; index < data.length; index += 1) {
    data[index] = (Math.random() * 2 - 1) * (1 - index / data.length);
  }

  const source = context.createBufferSource();
  const filter = context.createBiquadFilter();
  const gain = context.createGain();

  source.buffer = buffer;
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(lowpass, startAt);
  gain.gain.setValueAtTime(volume, startAt);
  gain.gain.exponentialRampToValueAtTime(0.0001, startAt + duration);
  source.connect(filter);
  filter.connect(gain);
  gain.connect(audioState.sfxGain);
  source.start(startAt);
}

function playRetroFxSprite(spriteName, options = {}) {
  const context = audioState.context;
  const buffer = audioState.retroFxBuffer;
  const sprite = RETRO_FX_SPRITES[spriteName];

  if (!context || !audioState.sfxGain || !buffer || !sprite || context.state !== "running") {
    return false;
  }

  const source = context.createBufferSource();
  const gain = context.createGain();
  const startOffset = Math.min(sprite.start, Math.max(0, buffer.duration - 0.02));
  const duration = Math.min(sprite.duration, Math.max(0.02, buffer.duration - startOffset));
  const startAt = context.currentTime + 0.001;
  const volume = options.volume ?? sprite.volume;
  const playbackRate = options.playbackRate ?? 1;

  source.buffer = buffer;
  source.playbackRate.value = playbackRate;
  gain.gain.setValueAtTime(volume, startAt);
  gain.gain.exponentialRampToValueAtTime(0.0001, startAt + duration + 0.045);
  source.connect(gain);
  gain.connect(audioState.sfxGain);
  source.start(startAt, startOffset, duration);

  return true;
}

function playSoundEffect(name, options = {}) {
  const context = ensureAudioContext();

  if (!context) {
    return;
  }

  if (context.state !== "running") {
    unlockGameAudio()?.then(() => {
      if (!options.retried) {
        playSoundEffect(name, { ...options, retried: true });
      }
    });
    return;
  }

  const now = performance.now();
  const minGap = options.minGap ?? 0;

  if (minGap > 0 && now - (audioState.lastSfxTimes[name] ?? -Infinity) < minGap) {
    return;
  }

  audioState.lastSfxTimes[name] = now;

  switch (name) {
    case "menuStart":
      if (playRetroFxSprite("menuStart")) {
        break;
      }
      playTone({ frequency: 220, endFrequency: 660, duration: 0.12, type: "triangle", volume: 0.16 });
      playTone({ frequency: 440, endFrequency: 990, duration: 0.16, type: "square", volume: 0.08, when: 0.08 });
      break;
    case "shoot":
      playTone({
        frequency: options.golden ? 520 : 390,
        endFrequency: options.golden ? 700 : 300,
        duration: 0.075,
        type: "sine",
        volume: options.golden ? 0.055 : 0.04,
      });
      playTone({
        frequency: options.golden ? 780 : 585,
        endFrequency: options.golden ? 920 : 650,
        duration: 0.045,
        type: "triangle",
        volume: options.golden ? 0.028 : 0.018,
        when: 0.012,
      });
      break;
    case "obstacleHit":
      playTone({ frequency: 150, endFrequency: 92, duration: 0.06, type: "triangle", volume: 0.08, when: 0 });
      playNoise({ duration: 0.055, volume: 0.045, lowpass: 520 });
      break;
    case "obstacleBreak":
      playTone({ frequency: 118, endFrequency: 52, duration: 0.22, type: "triangle", volume: 0.1 });
      playTone({ frequency: 236, endFrequency: 104, duration: 0.16, type: "sine", volume: 0.045, when: 0.025 });
      playNoise({ duration: 0.18, volume: 0.08, lowpass: 520 });
      break;
    case "applePop":
      playTone({ frequency: 660, endFrequency: 1320, duration: 0.08, type: "sine", volume: 0.08 });
      playTone({ frequency: 990, endFrequency: 1480, duration: 0.06, type: "triangle", volume: 0.045, when: 0.045 });
      break;
    case "goldenApple":
      playTone({ frequency: 185, endFrequency: 54, duration: 0.36, type: "sine", volume: 0.13 });
      playTone({ frequency: 420, endFrequency: 1260, duration: 0.2, type: "triangle", volume: 0.1, when: 0.02 });
      playTone({ frequency: 840, endFrequency: 1680, duration: 0.14, type: "sine", volume: 0.055, when: 0.12 });
      playNoise({ duration: 0.26, volume: 0.08, lowpass: 1500, when: 0.03 });
      break;
    case "fairyBomb":
      playTone({ frequency: 92, endFrequency: 24, duration: 0.52, type: "sine", volume: 0.28 });
      playTone({ frequency: 184, endFrequency: 38, duration: 0.42, type: "sawtooth", volume: 0.18, when: 0.015 });
      playTone({ frequency: 46, endFrequency: 28, duration: 0.62, type: "triangle", volume: 0.16, when: 0.04 });
      playNoise({ duration: 0.34, volume: 0.18, lowpass: 520 });
      break;
    case "fairyFall":
      playTone({ frequency: 2200, endFrequency: 110, duration: 1.18, type: "sawtooth", volume: 0.26 });
      playTone({ frequency: 1100, endFrequency: 56, duration: 1.18, type: "sine", volume: 0.22, when: 0.025 });
      playTone({ frequency: 140, endFrequency: 42, duration: 1.05, type: "triangle", volume: 0.14, when: 0.08 });
      playNoise({ duration: 0.95, volume: 0.18, lowpass: 3600 });
      break;
    case "goblinSmallDeath":
      playTone({ frequency: 460, endFrequency: 135, duration: 0.15, type: "sine", volume: 0.07 });
      playTone({ frequency: 690, endFrequency: 230, duration: 0.13, type: "triangle", volume: 0.045, when: 0.025 });
      playNoise({ duration: 0.075, volume: 0.028, lowpass: 1800 });
      break;
    case "goblinBigDeath":
      playTone({ frequency: 170, endFrequency: 42, duration: 0.34, type: "sawtooth", volume: 0.13 });
      playTone({ frequency: 340, endFrequency: 120, duration: 0.22, type: "triangle", volume: 0.06, when: 0.04 });
      playNoise({ duration: 0.2, volume: 0.08, lowpass: 760 });
      break;
    case "bossDeath":
      playTone({ frequency: 120, endFrequency: 32, duration: 0.7, type: "sawtooth", volume: 0.2 });
      playTone({ frequency: 520, endFrequency: 1180, duration: 0.38, type: "triangle", volume: 0.1, when: 0.12 });
      playNoise({ duration: 0.72, volume: 0.18, lowpass: 980 });
      break;
    case "bossLaugh":
      [130, 112, 138, 96].forEach((frequency, index) => {
        playTone({
          frequency,
          endFrequency: frequency * 0.72,
          duration: 0.16,
          type: "sawtooth",
          volume: 0.095,
          when: index * 0.14,
        });
      });
      playTone({ frequency: 260, endFrequency: 180, duration: 0.7, type: "triangle", volume: 0.035 });
      break;
    case "frogActivate":
      playTone({ frequency: 160, endFrequency: 520, duration: 0.2, type: "triangle", volume: 0.15 });
      playTone({ frequency: 240, endFrequency: 760, duration: 0.18, type: "square", volume: 0.08, when: 0.08 });
      break;
    case "frogBounce":
      playSoundEffect("frogLand", { minGap: 0 });
      playSoundEffect("frogJump", { minGap: 0 });
      break;
    case "frogJump":
      playTone({ frequency: 54, endFrequency: 220, duration: 0.28, type: "sawtooth", volume: 0.22 });
      playTone({ frequency: 108, endFrequency: 330, duration: 0.22, type: "triangle", volume: 0.14, when: 0.03 });
      playNoise({ duration: 0.12, volume: 0.09, lowpass: 680 });
      break;
    case "frogLand":
      playTone({ frequency: 58, endFrequency: 18, duration: 0.34, type: "sine", volume: 0.34 });
      playTone({ frequency: 116, endFrequency: 26, duration: 0.25, type: "sawtooth", volume: 0.2, when: 0.015 });
      playNoise({ duration: 0.24, volume: 0.2, lowpass: 360 });
      break;
    case "frogEat":
      playTone({ frequency: 150, endFrequency: 48, duration: 0.2, type: "sawtooth", volume: 0.14 });
      playTone({ frequency: 78, endFrequency: 42, duration: 0.16, type: "sine", volume: 0.09, when: 0.035 });
      playNoise({ duration: 0.09, volume: 0.06, lowpass: 720 });
      break;
    case "frogBurp":
      playTone({ frequency: 96, endFrequency: 58, duration: 0.28, type: "sawtooth", volume: 0.11 });
      playTone({ frequency: 360, endFrequency: 240, duration: 0.18, type: "sine", volume: 0.055, when: 0.1 });
      break;
    case "levelUp":
      [392, 588, 784, 1176, 1568].forEach((frequency, index) => {
        playTone({ frequency, endFrequency: frequency * 1.12, duration: 0.13, type: "sine", volume: 0.082, when: index * 0.06 });
      });
      playTone({ frequency: 196, endFrequency: 392, duration: 0.42, type: "triangle", volume: 0.045 });
      break;
    case "failed":
      playTone({ frequency: 240, endFrequency: 35, duration: 1.05, type: "sawtooth", volume: 0.16 });
      playTone({ frequency: 120, endFrequency: 28, duration: 1.25, type: "sine", volume: 0.11, when: 0.08 });
      playNoise({ duration: 0.5, volume: 0.07, lowpass: 560, when: 0.04 });
      break;
    case "victory":
      playTone({ frequency: 165, endFrequency: 55, duration: 0.65, type: "sine", volume: 0.1 });
      [392, 523, 659, 784, 1046, 1318].forEach((frequency, index) => {
        playTone({ frequency, endFrequency: frequency * 1.05, duration: 0.2, type: "triangle", volume: 0.1, when: 0.18 + index * 0.085 });
      });
      break;
    case "timeWarp":
      playTone({ frequency: 520, endFrequency: 58, duration: 0.9, type: "sine", volume: 0.11 });
      playTone({ frequency: 1040, endFrequency: 116, duration: 0.9, type: "triangle", volume: 0.045, when: 0.02 });
      playNoise({ duration: 0.65, volume: 0.045, lowpass: 900, when: 0.08 });
      break;
    case "timerGlitch":
      playTone({ frequency: 1200, endFrequency: 90, duration: 0.13, type: "square", volume: 0.18 });
      playTone({ frequency: 190, endFrequency: 1800, duration: 0.11, type: "square", volume: 0.12, when: 0.05 });
      playTone({ frequency: 420, endFrequency: 210, duration: 0.16, type: "triangle", volume: 0.09, when: 0.11 });
      playNoise({ duration: 0.22, volume: 0.16, lowpass: 3400 });
      break;
    default:
      break;
  }
}

function wait(duration) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, duration);
  });
}

function waitForLandscape() {
  if (loadingState.isLandscape) {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    const checkOrientation = () => {
      if (!loadingState.isLandscape) {
        return;
      }

      window.removeEventListener("lostrelic:landscape", checkOrientation);
      resolve();
    };

    window.addEventListener("lostrelic:landscape", checkOrientation);
  });
}

async function waitWhileLandscape(duration) {
  const checkInterval = 50;
  let elapsed = 0;

  while (elapsed < duration) {
    await waitForLandscape();
    await wait(Math.min(checkInterval, duration - elapsed));

    if (loadingState.isLandscape) {
      elapsed += checkInterval;
    }
  }
}

function createTerminalLine(message) {
  const line = document.createElement("p");
  line.className = "terminal-line";

  if (message.tone === "muted") {
    line.classList.add("is-muted");
  }

  if (message.tone === "final") {
    line.classList.add("is-final");
  }

  return line;
}

function createCursor() {
  const cursor = document.createElement("span");
  cursor.className = "loading-cursor";
  cursor.setAttribute("aria-hidden", "true");

  return cursor;
}

function showElement(element) {
  element.hidden = false;
}

function hideElement(element) {
  element.hidden = true;
}

function showActiveSurface() {
  const terminalPanel = document.querySelector(".terminal-panel");
  const transmissionMessage = document.querySelector("#transmission-message");
  const wizardHologram = document.querySelector("#wizard-hologram");
  const wizardSpeech = document.querySelector("#wizard-speech");
  const wizardQuestion = document.querySelector("#wizard-question");
  const miniGameIntro = document.querySelector("#mini-game-intro");
  const miniGameCanvas = document.querySelector("#mini-game-canvas");

  if (
    !terminalPanel ||
    !transmissionMessage ||
    !wizardHologram ||
    !wizardSpeech ||
    !wizardQuestion ||
    !miniGameIntro ||
    !miniGameCanvas
  ) {
    return;
  }

  if (loadingState.activeSurface === "question") {
    showElement(wizardQuestion);
    hideElement(terminalPanel);
    hideElement(transmissionMessage);
    hideElement(wizardHologram);
    hideElement(wizardSpeech);
    hideElement(miniGameIntro);
    hideElement(miniGameCanvas);
    return;
  }

  if (loadingState.activeSurface === "title" || loadingState.activeSurface === "terminal") {
    hideElement(wizardQuestion);
    showElement(terminalPanel);
    hideElement(transmissionMessage);
    hideElement(wizardHologram);
    hideElement(wizardSpeech);
    hideElement(miniGameIntro);
    hideElement(miniGameCanvas);
    return;
  }

  if (loadingState.activeSurface === "transmission") {
    hideElement(wizardQuestion);
    hideElement(terminalPanel);
    showElement(transmissionMessage);
    hideElement(wizardHologram);
    hideElement(wizardSpeech);
    hideElement(miniGameIntro);
    hideElement(miniGameCanvas);
    return;
  }

  if (loadingState.activeSurface === "wizard") {
    hideElement(wizardQuestion);
    hideElement(terminalPanel);
    hideElement(transmissionMessage);
    showElement(wizardHologram);

    if (loadingState.wizardSpeechStarted) {
      showElement(wizardSpeech);
    } else {
      hideElement(wizardSpeech);
    }

    hideElement(miniGameIntro);
    hideElement(miniGameCanvas);
    return;
  }

  if (loadingState.activeSurface === "miniGameIntro") {
    hideElement(wizardQuestion);
    hideElement(terminalPanel);
    hideElement(transmissionMessage);
    hideElement(wizardHologram);
    hideElement(wizardSpeech);
    showElement(miniGameIntro);
    hideElement(miniGameCanvas);
    return;
  }

  if (loadingState.activeSurface === "miniGame") {
    hideElement(wizardQuestion);
    hideElement(terminalPanel);
    hideElement(transmissionMessage);
    hideElement(wizardHologram);
    hideElement(wizardSpeech);
    hideElement(miniGameIntro);
    showElement(miniGameCanvas);
  }
}

function hideLoadingSurfaces() {
  const terminalPanel = document.querySelector(".terminal-panel");
  const transmissionMessage = document.querySelector("#transmission-message");
  const wizardHologram = document.querySelector("#wizard-hologram");
  const wizardSpeech = document.querySelector("#wizard-speech");
  const wizardQuestion = document.querySelector("#wizard-question");
  const miniGameIntro = document.querySelector("#mini-game-intro");
  const miniGameCanvas = document.querySelector("#mini-game-canvas");

  if (wizardQuestion) {
    hideElement(wizardQuestion);
  }

  if (miniGameIntro) {
    hideElement(miniGameIntro);
  }

  if (miniGameCanvas) {
    hideElement(miniGameCanvas);
  }

  if (terminalPanel) {
    hideElement(terminalPanel);
  }

  if (transmissionMessage) {
    hideElement(transmissionMessage);
  }

  if (wizardHologram) {
    hideElement(wizardHologram);
  }

  if (wizardSpeech) {
    hideElement(wizardSpeech);
  }
}

function revealElementWithFade(element) {
  showElement(element);

  window.requestAnimationFrame(() => {
    element.classList.add("is-visible");
  });
}

function addAnimatedEllipsis(line, text) {
  if (!text.endsWith("...")) {
    return;
  }

  line.textContent = text.slice(0, -3);

  const ellipsis = document.createElement("span");
  ellipsis.className = "animated-ellipsis";
  ellipsis.setAttribute("aria-label", "...");

  for (let index = 0; index < 3; index += 1) {
    const dot = document.createElement("span");
    dot.textContent = ".";
    dot.setAttribute("aria-hidden", "true");
    ellipsis.append(dot);
  }

  line.append(ellipsis);
}

function waitForWizardAnswer() {
  return new Promise((resolve) => {
    const buttons = document.querySelectorAll("[data-wizard-answer]");

    const handleAnswer = () => {
      unlockGameAudio();

      buttons.forEach((button) => {
        button.removeEventListener("click", handleAnswer);
      });

      unlockTypingAudio().finally(resolve);
    };

    buttons.forEach((button) => {
      button.addEventListener("click", handleAnswer);
    });
  });
}

function waitForScreenPress() {
  return new Promise((resolve) => {
    const handlePress = () => {
      if (!loadingState.isLandscape) {
        return;
      }

      unlockGameAudio();
      playSoundEffect("menuStart");
      document.removeEventListener("pointerdown", handlePress);
      resolve();
    };

    document.addEventListener("pointerdown", handlePress);
  });
}

async function playWizardQuestionSequence() {
  const wizardQuestion = document.querySelector("#wizard-question");
  const questionText = document.querySelector("#wizard-question-text");
  const choices = document.querySelector(".wizard-question__choices");
  const result = document.querySelector("#wizard-question-result");

  if (!wizardQuestion || !questionText || !choices || !result) {
    return;
  }

  loadingState.activeSurface = "question";
  wizardQuestion.classList.remove("is-fading");
  showActiveSurface();
  showElement(questionText);
  showElement(choices);
  hideElement(result);

  await waitForWizardAnswer();
  await waitForLandscape();

  hideElement(questionText);
  hideElement(choices);
  showElement(result);
  await waitWhileLandscape(QUESTION_RESULT_HOLD_MS);

  wizardQuestion.classList.add("is-fading");
  await waitWhileLandscape(QUESTION_FADE_OUT_MS);
  hideElement(wizardQuestion);
  wizardQuestion.classList.remove("is-fading");
}

function createSignalStrength() {
  const signal = document.createElement("div");
  signal.className = "signal-strength";

  const label = document.createElement("p");
  label.className = "signal-strength__label";
  label.textContent = "SIGNAL STRENGTH";

  const bars = document.createElement("div");
  bars.className = "signal-strength__bars";
  bars.setAttribute("aria-hidden", "true");

  for (let index = 0; index < 4; index += 1) {
    const bar = document.createElement("span");
    bar.className = "signal-strength__bar";
    bars.append(bar);
  }

  signal.append(label, bars);

  return signal;
}

async function playSignalStrengthSequence(output) {
  await waitForLandscape();

  const signal = createSignalStrength();
  output.append(signal);

  await waitWhileLandscape(SIGNAL_FLUCTUATE_MS);
  signal.classList.add("is-locked");
  await waitWhileLandscape(SIGNAL_LOCK_DELAY_MS);

  loadingState.activeSurface = "transmission";
  hideLoadingSurfaces();
  showActiveSurface();
  await playTransmissionBlinkSequence();
}

async function playTransmissionBlinkSequence() {
  const transmissionMessage = document.querySelector("#transmission-message");

  if (!transmissionMessage) {
    return;
  }

  for (let blink = 0; blink < TRANSMISSION_BLINK_COUNT; blink += 1) {
    await waitForLandscape();
    transmissionMessage.classList.add("is-visible");
    await waitWhileLandscape(TRANSMISSION_BLINK_INTERVAL_MS / 2);

    transmissionMessage.classList.remove("is-visible");
    await waitWhileLandscape(TRANSMISSION_BLINK_INTERVAL_MS / 2);
  }

  hideLoadingSurfaces();
  await playWizardHologramSequence();
}

async function playWizardHologramSequence() {
  const wizardHologram = document.querySelector("#wizard-hologram");
  const wizardSpeech = document.querySelector("#wizard-speech");

  if (!wizardHologram || !wizardSpeech) {
    return;
  }

  await waitWhileLandscape(WIZARD_HOLOGRAM_DELAY_MS);

  loadingState.activeSurface = "wizard";
  wizardHologram.classList.remove("is-visible");
  wizardSpeech.classList.remove("is-visible");
  showActiveSurface();
  hideElement(wizardSpeech);

  window.requestAnimationFrame(() => {
    wizardHologram.classList.add("is-visible");
  });

  await waitWhileLandscape(WIZARD_HOLOGRAM_ARRIVAL_MS);
  await playWizardSpeechSequence();
}

async function playWizardSpeechSequence() {
  const loadingScene = document.querySelector('[data-scene="Loading"]');
  const wizardSpeech = document.querySelector("#wizard-speech");
  const speechText = document.querySelector("#wizard-speech-text");

  if (!loadingScene || !wizardSpeech || !speechText) {
    return;
  }

  speechText.textContent = "";
  loadingState.wizardSpeechStarted = true;
  showElement(wizardSpeech);

  window.requestAnimationFrame(() => {
    wizardSpeech.classList.add("is-visible");
  });

  await waitWhileLandscape(260);

  await typeWizardSpeech(speechText, WIZARD_SPEECH_TEXT);
  await waitWhileLandscape(WIZARD_SPEECH_PAUSE_MS);

  speechText.textContent = "";
  await typeWizardSpeech(speechText, WIZARD_SECOND_SPEECH_TEXT);
  await waitWhileLandscape(WIZARD_EXIT_DELAY_MS);

  loadingScene.classList.add("is-ending");
  await waitWhileLandscape(WIZARD_EXIT_FADE_MS);
  hideLoadingSurfaces();
  await playMiniGameIntroSequence();
}

async function typeWizardSpeech(speechText, text) {
  for (const character of text) {
    await waitForLandscape();
    startTypingSound();
    speechText.textContent += character;
    await waitWhileLandscape(WIZARD_SPEECH_TYPE_SPEED_MS);
  }

  stopTypingSound();
}

async function playMiniGameIntroSequence() {
  const loadingScene = document.querySelector('[data-scene="Loading"]');
  const miniGameIntro = document.querySelector("#mini-game-intro");

  if (!loadingScene || !miniGameIntro) {
    return;
  }

  loadingScene.classList.remove("is-ending");
  loadingState.activeSurface = "miniGameIntro";
  showActiveSurface();
  loadRetroFxSound();

  await waitForScreenPress();
  await waitForLandscape();

  miniGameIntro.classList.add("is-exiting");
  await waitWhileLandscape(MINI_GAME_INTRO_FADE_MS);
  hideElement(miniGameIntro);
  miniGameIntro.classList.remove("is-exiting");
  startMiniGamePrelude();
}

function startMiniGamePrelude() {
  const canvas = document.querySelector("#mini-game-canvas");

  if (!canvas) {
    return;
  }

  if (miniGameState.animationFrame) {
    window.cancelAnimationFrame(miniGameState.animationFrame);
  }

  canvas.removeEventListener("pointerdown", handleMiniGamePress);
  canvas.removeEventListener("pointermove", handleMiniGameAim);
  miniGameState.canvas = canvas;
  miniGameState.context = canvas.getContext("2d");
  miniGameState.status = "prelude";
  miniGameState.isRunning = true;
  miniGameState.preludeStartedAt = performance.now();
  miniGameState.preludeTimerGlitchSoundPlayed = false;
  miniGameState.preludeObstacles = createForestObstacles();
  miniGameState.lake = createMiniGameLake(miniGameState.preludeObstacles);
  loadingState.activeSurface = "miniGame";
  showActiveSurface();
  resizeMiniGameCanvas();
  miniGameState.animationFrame = window.requestAnimationFrame(updateMiniGamePrelude);
}

function updateMiniGamePrelude(timestamp) {
  const elapsed = timestamp - miniGameState.preludeStartedAt;

  drawMiniGamePrelude(elapsed);

  if (elapsed >= MINI_GAME_INSTRUCTION_SEQUENCE_MS) {
    window.cancelAnimationFrame(miniGameState.animationFrame);
    startMiniGame();
    return;
  }

  miniGameState.animationFrame = window.requestAnimationFrame(updateMiniGamePrelude);
}

function startMiniGame() {
  const canvas = document.querySelector("#mini-game-canvas");

  if (!canvas) {
    return;
  }

  if (miniGameState.animationFrame) {
    window.cancelAnimationFrame(miniGameState.animationFrame);
  }

  canvas.removeEventListener("pointerdown", handleMiniGamePress);
  canvas.removeEventListener("pointermove", handleMiniGameAim);

  miniGameState.canvas = canvas;
  miniGameState.context = canvas.getContext("2d");
  miniGameState.bullets = [];
  miniGameState.goblins = [];
  miniGameState.explosions = [];
  miniGameState.apples = [];
  miniGameState.scorchMarks = [];
  miniGameState.pulses = [];
  miniGameState.fairyBombs = [];
  miniGameState.levelMessages = [];
  miniGameState.hitMarkers = [];
  miniGameState.appleSplatters = [];
  miniGameState.frogs = [];
  miniGameState.trails = [];
  miniGameState.shells = [];
  miniGameState.obstacles = miniGameState.preludeObstacles.length > 0 ? miniGameState.preludeObstacles : createForestObstacles();
  miniGameState.lake = miniGameState.lake || createMiniGameLake(miniGameState.obstacles);
  miniGameState.preludeObstacles = [];
  miniGameState.lastFrameTime = performance.now();
  miniGameState.lastSpawnTime = miniGameState.lastFrameTime;
  miniGameState.lastAppleSpawnTime = miniGameState.lastFrameTime;
  miniGameState.startedAt = miniGameState.lastFrameTime;
  miniGameState.nextFrogSpawnAt =
    miniGameState.startedAt + MINI_GAME_FROG_EVENT_START_MS + Math.random() * 6000;
  miniGameState.frogSpawnCount = 0;
  miniGameState.gameplayFadeStartedAt = miniGameState.preludeStartedAt + 11200;
  miniGameState.lastFireTime = -MINI_GAME_FIRE_COOLDOWN_MS;
  miniGameState.goldenAppleSpawnTimes = createGoldenAppleSpawnTimes(miniGameState.startedAt);
  miniGameState.level = 1;
  miniGameState.applesTowardNextLevel = 0;
  miniGameState.status = "playing";
  miniGameState.bossSpawned = false;
  miniGameState.shakeUntil = 0;
  miniGameState.shakeIntensity = 0;
  miniGameState.finishEffect = null;
  miniGameState.turretAngle = -Math.PI / 2;
  miniGameState.aimTarget = {
    x: window.innerWidth / 2,
    y: 0,
  };
  miniGameState.isRunning = true;
  loadingState.activeSurface = "miniGame";
  showActiveSurface();
  resizeMiniGameCanvas();

  canvas.addEventListener("pointerdown", handleMiniGamePress);
  canvas.addEventListener("pointermove", handleMiniGameAim);
  miniGameState.animationFrame = window.requestAnimationFrame(updateMiniGame);
}

function resizeMiniGameCanvas() {
  const canvas = miniGameState.canvas;

  if (!canvas) {
    return;
  }

  const pixelRatio = window.devicePixelRatio || 1;
  canvas.width = Math.floor(window.innerWidth * pixelRatio);
  canvas.height = Math.floor(window.innerHeight * pixelRatio);
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  miniGameState.context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
}

function drawMiniGamePrelude(elapsed) {
  const context = miniGameState.context;

  if (!context) {
    return;
  }

  context.clearRect(0, 0, window.innerWidth, window.innerHeight);
  drawPreludeInstructions(context, elapsed);
  drawPreludeArenaReveal(context, elapsed);
  drawPreludeTimer(context, elapsed);
}

function getFadeWindow(elapsed, start, end, fade = 350) {
  if (elapsed < start || elapsed > end) {
    return 0;
  }

  return Math.min(1, (elapsed - start) / fade, (end - elapsed) / fade);
}

function getStayVisibleWindow(elapsed, start, end, fade = 450) {
  if (elapsed < start || elapsed > end) {
    return 0;
  }

  return Math.min(1, (elapsed - start) / fade, (end - elapsed) / fade);
}

function drawPreludeInstructions(context, elapsed) {
  const instructionWindows = [
    {
      start: 400,
      end: 8900,
      text: "Use your mushroom cannon to fire mushrooms at the goblins",
      drawIcon: drawTutorialTurret,
    },
    {
      start: 2050,
      end: 8900,
      text: "Collect apples to level up your mushroom cannon",
      drawIcon: drawTutorialApple,
    },
    {
      start: 3700,
      end: 8900,
      text: "Golden apples clear a huge magic blast",
      drawIcon: drawTutorialGoldenApple,
    },
    {
      start: 5350,
      end: 8900,
      text: "Use your finger to point your cannon in the direction needed",
      drawIcon: drawTutorialGoblin,
    },
  ];

  instructionWindows.forEach((instruction, index) => {
    const opacity = getStayVisibleWindow(elapsed, instruction.start, instruction.end);

    if (opacity <= 0) {
      return;
    }

    const y = window.innerHeight * 0.22 + index * 46;
    const centerX = window.innerWidth / 2;
    const boxWidth = Math.min(460, window.innerWidth - 36);
    const iconX = centerX - boxWidth / 2 + 34;
    const textX = centerX - boxWidth / 2 + 76;

    context.save();
    context.globalAlpha = opacity;
    context.fillStyle = "rgba(4, 18, 8, 0.72)";
    context.strokeStyle = "rgba(156, 255, 156, 0.46)";
    context.lineWidth = 1;
    context.fillRect(centerX - boxWidth / 2, y - 19, boxWidth, 34);
    context.strokeRect(centerX - boxWidth / 2, y - 19, boxWidth, 34);
    instruction.drawIcon(context, iconX, y - 2);
    context.fillStyle = "#ffffff";
    context.font = `${window.innerHeight < 390 ? 10 : 12}px 'Courier New', monospace`;
    context.textAlign = "left";
    context.textBaseline = "middle";
    context.fillText(instruction.text, textX, y);
    context.restore();
  });
}

function drawPreludeTimer(context, elapsed) {
  const fadeStart = 8900;
  const holdEnd = 9900;
  const moveEnd = 11200;

  if (elapsed < fadeStart) {
    return;
  }

  const fade = Math.min((elapsed - fadeStart) / 500, 1);
  const progress = elapsed <= holdEnd ? 0 : Math.min((elapsed - holdEnd) / (moveEnd - holdEnd), 1);
  const eased = 1 - Math.pow(1 - progress, 3);
  const x = window.innerWidth / 2;
  const y = window.innerHeight / 2 + (25 - window.innerHeight / 2) * eased;
  const scale = 2.4 + (1 - 2.4) * eased;
  const glitchActive = elapsed > 9300 && elapsed < 9700;
  const glitchOffset = glitchActive ? (Math.random() - 0.5) * 5 : 0;

  if (elapsed > 9250 && !miniGameState.preludeTimerGlitchSoundPlayed) {
    miniGameState.preludeTimerGlitchSoundPlayed = true;
    playSoundEffect("timerGlitch", { minGap: 500 });
  }

  context.save();
  context.globalAlpha = fade;
  context.translate(x + glitchOffset, y);
  context.scale(scale, scale);
  context.strokeStyle = glitchActive ? "#ffffff" : "#9cff9c";
  context.fillStyle = glitchActive ? "rgba(18, 4, 30, 0.9)" : "rgba(4, 18, 8, 0.84)";
  context.lineWidth = 2;
  context.fillRect(-43, -17, 86, 34);
  context.strokeRect(-43, -17, 86, 34);
  if (glitchActive) {
    context.fillStyle = "rgba(255, 70, 255, 0.55)";
    context.fillRect(-39, -9, 78, 3);
    context.fillStyle = "rgba(96, 207, 255, 0.55)";
    context.fillRect(-36, 8, 76, 2);
  }
  context.fillStyle = glitchActive ? "#ffffff" : "#9cff9c";
  context.shadowColor = "rgba(156, 255, 156, 0.45)";
  context.shadowBlur = 10;
  context.font = "bold 18px 'Courier New', monospace";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(glitchActive ? "4:20" : "60", glitchActive ? 1 : 0, 1);
  context.restore();
}

function drawPreludeArenaReveal(context, elapsed) {
  const opacity = Math.min(Math.max((elapsed - 11200) / 600, 0), 1);

  if (opacity <= 0) {
    return;
  }

  context.save();
  context.globalAlpha = opacity;
  drawLake(context);
  drawLevelPulses(context);
  miniGameState.preludeObstacles.forEach((obstacle) => {
    if (obstacle.type === "tree") {
      drawPixelTree(context, obstacle);
      return;
    }

    drawPixelMushroom(context, obstacle);
  });
  drawTurret(context);
  context.restore();
}

function drawTutorialTurret(context, x, y) {
  context.save();
  context.translate(x, y);
  context.fillStyle = "#d93131";
  context.fillRect(-14, -9, 28, 8);
  context.fillRect(-10, -16, 20, 8);
  context.fillStyle = "#ffffff";
  context.fillRect(-8, -12, 5, 4);
  context.fillRect(5, -15, 4, 4);
  context.fillStyle = "rgba(245, 232, 198, 0.96)";
  context.fillRect(-5, -1, 10, 15);
  context.strokeStyle = "#ffffff";
  context.lineWidth = 2;
  context.beginPath();
  context.moveTo(0, -10);
  context.lineTo(20, -24);
  context.stroke();
  context.restore();
}

function drawTutorialApple(context, x, y) {
  context.save();
  context.translate(x, y);
  drawAppleIconOnCanvas(context, false, 1.2);
  context.restore();
}

function drawTutorialGoldenApple(context, x, y) {
  context.save();
  context.translate(x, y);
  drawAppleIconOnCanvas(context, true, 1.2);
  context.restore();
}

function drawTutorialGoblin(context, x, y) {
  context.save();
  context.translate(x, y);
  context.fillStyle = "#9cff9c";
  context.fillRect(-12, -8, 24, 17);
  context.fillRect(-18, -1, 6, 6);
  context.fillRect(12, -1, 6, 6);
  context.fillRect(-10, -15, 6, 8);
  context.fillRect(4, -15, 6, 8);
  context.fillStyle = "#000";
  context.fillRect(-6, -2, 4, 4);
  context.fillRect(3, -2, 4, 4);
  context.restore();
}

function getMiniGameDifficulty(now = performance.now()) {
  return Math.min((now - miniGameState.startedAt) / MINI_GAME_DIFFICULTY_RAMP_MS, 1);
}

function createGoldenAppleSpawnTimes(startedAt) {
  return Array.from({ length: MINI_GAME_GOLDEN_APPLE_COUNT }, (_, index) => {
    const windowSize = (MINI_GAME_DURATION_MS - MINI_GAME_GOLDEN_APPLE_START_MS) / MINI_GAME_GOLDEN_APPLE_COUNT;
    return startedAt + MINI_GAME_GOLDEN_APPLE_START_MS + index * windowSize + Math.random() * (windowSize * 0.72);
  });
}

function createForestObstacles() {
  const turret = getTurretPosition();
  const obstacles = [];
  const minDistanceFromTurret = 96;

  for (let index = 0; index < MINI_GAME_OBSTACLE_COUNT; index += 1) {
    let obstacle = null;
    let attempts = 0;

    while (!obstacle && attempts < 80) {
      attempts += 1;

      const candidate = {
        x: 42 + Math.random() * (window.innerWidth - 84),
        y: 38 + Math.random() * (window.innerHeight - 130),
        radius: 16 + Math.random() * 12,
        type: Math.random() > 0.48 ? "tree" : "mushroom",
        sway: Math.random() * Math.PI * 2,
      };
      candidate.health = MINI_GAME_OBSTACLE_HEALTH;
      candidate.maxHealth = MINI_GAME_OBSTACLE_HEALTH;
      const farFromTurret = Math.hypot(candidate.x - turret.x, candidate.y - turret.y) > minDistanceFromTurret;
      const farFromOthers = obstacles.every(
        (existing) => Math.hypot(candidate.x - existing.x, candidate.y - existing.y) > candidate.radius + existing.radius + 28
      );

      if (farFromTurret && farFromOthers) {
        obstacle = candidate;
      }
    }

    if (obstacle) {
      obstacles.push(obstacle);
    }
  }

  return obstacles;
}

function createMiniGameLake(obstacles) {
  const turret = getTurretPosition();
  let lake = null;
  let attempts = 0;

  while (!lake && attempts < 80) {
    attempts += 1;

    const candidate = {
      x: 70 + Math.random() * (window.innerWidth - 140),
      y: 58 + Math.random() * Math.max(60, window.innerHeight - 220),
      radiusX: 58 + Math.random() * 18,
      radiusY: 32 + Math.random() * 10,
    };
    const farFromTurret = Math.hypot(candidate.x - turret.x, candidate.y - turret.y) > 130;
    const clearOfObstacles = obstacles.every(
      (obstacle) =>
        Math.hypot(candidate.x - obstacle.x, candidate.y - obstacle.y) >
        candidate.radiusX + obstacle.radius + 18
    );

    if (farFromTurret && clearOfObstacles) {
      lake = candidate;
    }
  }

  return lake || {
    x: window.innerWidth * 0.22,
    y: window.innerHeight * 0.34,
    radiusX: 62,
    radiusY: 36,
  };
}

function getTurretPosition() {
  return {
    x: window.innerWidth / 2,
    y: window.innerHeight - Math.max(26, window.innerHeight * 0.08),
  };
}

function handleMiniGamePress(event) {
  if (!loadingState.isLandscape || !miniGameState.isRunning || miniGameState.status !== "playing") {
    return;
  }

  unlockGameAudio();
  const canvasRect = miniGameState.canvas.getBoundingClientRect();
  miniGameState.aimTarget = {
    x: event.clientX - canvasRect.left,
    y: event.clientY - canvasRect.top,
  };
  updateTurretAim();

  fireMiniGameBullet(performance.now(), true);
}

function handleMiniGameAim(event) {
  if (!miniGameState.canvas || miniGameState.status !== "playing") {
    return;
  }

  const canvasRect = miniGameState.canvas.getBoundingClientRect();
  miniGameState.aimTarget = {
    x: event.clientX - canvasRect.left,
    y: event.clientY - canvasRect.top,
  };

  updateTurretAim();
}

function getFireCooldown() {
  const cooldowns = [500, 320, 220, 140, 78];
  return cooldowns[miniGameState.level - 1] ?? cooldowns[cooldowns.length - 1];
}

function updateTurretAim() {
  const turret = getTurretPosition();
  const muzzle = {
    x: turret.x,
    y: turret.y - 16,
  };
  const direction = getClampedTurretDirection(muzzle, miniGameState.aimTarget);

  miniGameState.turretAngle = direction.angle;
  return direction;
}

function fireMiniGameBullet(now, force = false) {
  const cooldown = force ? Math.max(90, getFireCooldown() * 0.55) : getFireCooldown();

  if (now - miniGameState.lastFireTime < cooldown) {
    return;
  }

  const turret = getTurretPosition();
  const muzzle = {
    x: turret.x,
    y: turret.y - 16,
  };
  const direction = updateTurretAim();

  miniGameState.lastFireTime = now;
  miniGameState.bullets.push({
    x: muzzle.x + direction.x * 24,
    y: muzzle.y + direction.y * 24,
    vx: direction.x * MINI_GAME_BULLET_SPEED,
    vy: direction.y * MINI_GAME_BULLET_SPEED,
    damage: miniGameState.level >= 4 ? 2 : 1,
    isGolden: miniGameState.level >= 5,
    radius: 7,
  });
  ejectMushroomShell(muzzle, direction);
  triggerCannonFireShake();
  playSoundEffect("shoot", { golden: miniGameState.level >= 5, minGap: miniGameState.level >= 5 ? 42 : 70 });
}

function ejectMushroomShell(muzzle, direction) {
  const side = {
    x: -direction.y,
    y: direction.x,
  };

  miniGameState.shells.push({
    x: muzzle.x + side.x * 13,
    y: muzzle.y + side.y * 13,
    vx: side.x * 135 + (Math.random() - 0.5) * 35,
    vy: side.y * 135 + 85 + Math.random() * 30,
    rotation: Math.random() * Math.PI,
    spin: (Math.random() - 0.5) * 12,
    startedAt: performance.now(),
  });
}

function triggerCannonFireShake() {
  const shakeByLevel = [0.35, 2.2, 2.9, 3.65, 5.25];
  const durationByLevel = [46, 92, 104, 118, 148];
  const levelIndex = Math.max(0, Math.min(miniGameState.level - 1, shakeByLevel.length - 1));

  triggerScreenShake(durationByLevel[levelIndex], shakeByLevel[levelIndex]);
}

function getClampedTurretDirection(origin, target) {
  const dx = target.x - origin.x;
  const rawDy = target.y - origin.y;
  const dy = Math.min(rawDy, -1);
  const length = Math.hypot(dx, dy) || 1;

  return {
    angle: Math.atan2(dy, dx),
    x: dx / length,
    y: dy / length,
  };
}

function updateMiniGame(timestamp) {
  if (!miniGameState.isRunning) {
    return;
  }

  const deltaSeconds = Math.min((timestamp - miniGameState.lastFrameTime) / 1000, 0.033);
  miniGameState.lastFrameTime = timestamp;

  if (loadingState.isLandscape && miniGameState.status === "finishing") {
    updateMiniGameFinish(timestamp, deltaSeconds);
  } else if (loadingState.isLandscape && miniGameState.status === "playing") {
    if (timestamp - miniGameState.startedAt >= MINI_GAME_DURATION_MS) {
      startBossPhase();
    }

    if (miniGameState.level >= 2) {
      fireMiniGameBullet(timestamp);
    }

    maybeSpawnGoblin(timestamp);
    maybeSpawnApples(timestamp);
    maybeSpawnFrogEvent(timestamp);
    respawnDestroyedObstacles(timestamp);
    moveBullets(deltaSeconds);
    moveFairyBombs(deltaSeconds);
    updateFrogs(timestamp);
    moveGoblins(deltaSeconds);
    checkMiniGameHits();
    checkGoblinContact();
    trimMiniGameObjects();
  }

  drawMiniGame();
  miniGameState.animationFrame = window.requestAnimationFrame(updateMiniGame);
}

function maybeSpawnGoblin(timestamp) {
  if (miniGameState.bossSpawned || timestamp - miniGameState.startedAt >= MINI_GAME_DURATION_MS) {
    return;
  }

  const difficulty = getMiniGameDifficulty(timestamp);
  const spawnInterval = MINI_GAME_GOBLIN_SPAWN_MS - difficulty * 760;

  if (timestamp - miniGameState.lastSpawnTime < spawnInterval) {
    return;
  }

  const margin = 32;
  const spawnFromSide = Math.random() > 0.58;
  const x = spawnFromSide
    ? (Math.random() > 0.5 ? window.innerWidth + margin : -margin)
    : margin + Math.random() * (window.innerWidth - margin * 2);
  const y = spawnFromSide
    ? margin + Math.random() * window.innerHeight * 0.42
    : -margin;

  miniGameState.lastSpawnTime = timestamp;
  const elapsed = timestamp - miniGameState.startedAt;
  const canSpawnBig = elapsed >= MINI_GAME_BIG_GOBLIN_START_MS;
  const isBig = canSpawnBig && Math.random() < 0.14 + difficulty * 0.28;
  const maxHealth = isBig ? Math.min(6, 3 + Math.floor(difficulty * 4)) : 1;

  miniGameState.goblins.push({
    x,
    y,
    size: isBig ? 32 + Math.random() * 8 + difficulty * 12 : 18 + Math.random() * 7 + difficulty * 3,
    speed: isBig
      ? MINI_GAME_GOBLIN_SPEED + difficulty * 32
      : MINI_GAME_GOBLIN_SPEED + difficulty * 56 + Math.random() * difficulty * 18,
    health: maxHealth,
    maxHealth,
    isBig,
    wobble: Math.random() * Math.PI * 2,
  });
}

function updateMiniGameFinish(timestamp, deltaSeconds) {
  const effect = miniGameState.finishEffect;
  const slowDeltaSeconds = deltaSeconds * 0.16;

  moveBullets(slowDeltaSeconds);
  moveFairyBombs(slowDeltaSeconds);
  updateFrogs(timestamp);
  moveGoblins(slowDeltaSeconds);
  trimMiniGameObjects();

  if (!effect || effect.resolved || timestamp - effect.startedAt < MINI_GAME_FINISH_EFFECT_MS) {
    return;
  }

  effect.resolved = true;
  miniGameState.status = effect.kind === "victory" ? "victory" : "failed";
  miniGameState.bullets = [];

  if (effect.kind === "victory") {
    miniGameState.goblins = [];
    miniGameState.apples = [];
    return;
  }

  window.setTimeout(() => {
    if (miniGameState.status === "failed") {
      startMiniGame();
    }
  }, MINI_GAME_FAIL_RESTART_MS);
}

function startMiniGameFinish(kind, x, y) {
  if (miniGameState.status !== "playing") {
    return;
  }

  const turret = getTurretPosition();

  miniGameState.status = "finishing";
  miniGameState.bullets = [];
  miniGameState.finishEffect = {
    kind,
    x: Number.isFinite(x) ? x : turret.x,
    y: Number.isFinite(y) ? y : turret.y,
    startedAt: performance.now(),
    resolved: false,
  };
  playSoundEffect("timeWarp", { minGap: 1200 });
  playSoundEffect(kind === "victory" ? "victory" : "failed", { minGap: 1200 });
  triggerScreenShake(MINI_GAME_FINISH_EFFECT_MS, kind === "victory" ? 13 : 16);
}

function maybeSpawnApples(timestamp) {
  if (miniGameState.bossSpawned || timestamp - miniGameState.startedAt >= MINI_GAME_DURATION_MS) {
    return;
  }

  if (miniGameState.level < 5 && timestamp - miniGameState.lastAppleSpawnTime >= MINI_GAME_APPLE_SPAWN_MS) {
    miniGameState.lastAppleSpawnTime = timestamp;
    spawnApple("normal");
  }

  for (let index = miniGameState.goldenAppleSpawnTimes.length - 1; index >= 0; index -= 1) {
    if (timestamp >= miniGameState.goldenAppleSpawnTimes[index]) {
      miniGameState.goldenAppleSpawnTimes.splice(index, 1);
      spawnApple("golden");
    }
  }
}

function maybeSpawnFrogEvent(timestamp) {
  if (
    !miniGameState.lake ||
    miniGameState.bossSpawned ||
    miniGameState.frogSpawnCount >= MINI_GAME_MAX_FROG_EVENTS ||
    timestamp - miniGameState.startedAt >= MINI_GAME_DURATION_MS
  ) {
    return;
  }

  if (timestamp < miniGameState.nextFrogSpawnAt) {
    return;
  }

  miniGameState.frogSpawnCount += 1;
  miniGameState.nextFrogSpawnAt = timestamp + MINI_GAME_FROG_EVENT_GAP_MS + Math.random() * 8000;
  miniGameState.frogs.push({
    x: miniGameState.lake.x + miniGameState.lake.radiusX * 0.26,
    y: miniGameState.lake.y - miniGameState.lake.radiusY * 0.08,
    originX: miniGameState.lake.x + miniGameState.lake.radiusX * 0.26,
    originY: miniGameState.lake.y - miniGameState.lake.radiusY * 0.08,
    radius: 12,
    state: "waiting",
    hasEaten: false,
    lastBounceStep: -1,
    eatenGoblinIds: new Set(),
    bubbles: [],
    phase: Math.random() * Math.PI * 2,
    startedAt: timestamp,
  });
}

function startBossPhase() {
  if (miniGameState.bossSpawned) {
    return;
  }

  miniGameState.bossSpawned = true;
  playSoundEffect("bossLaugh", { minGap: 1000 });
  miniGameState.apples = [];
  miniGameState.goblins.push({
    x: window.innerWidth / 2,
    y: -58,
    size: 58,
    speed: MINI_GAME_BOSS_SPEED,
    health: MINI_GAME_BOSS_HEALTH,
    maxHealth: MINI_GAME_BOSS_HEALTH,
    isBig: true,
    isBoss: true,
    wobble: Math.random() * Math.PI * 2,
  });
}

function spawnApple(type) {
  const turret = getTurretPosition();
  let apple = null;
  let attempts = 0;

  while (!apple && attempts < 80) {
    attempts += 1;

    const candidate = {
      x: 40 + Math.random() * (window.innerWidth - 80),
      y: 32 + Math.random() * (window.innerHeight - 130),
      radius: type === "golden" ? 13 : 10,
      type,
      pulse: Math.random() * Math.PI * 2,
    };
    const farFromTurret = Math.hypot(candidate.x - turret.x, candidate.y - turret.y) > 100;
    const clearOfObstacles = miniGameState.obstacles.every(
      (obstacle) =>
        obstacle.isKnocked ||
        obstacle.isDestroyed ||
        Math.hypot(candidate.x - obstacle.x, candidate.y - obstacle.y) > candidate.radius + obstacle.radius + 12
    );
    const hasOpenShot = miniGameState.obstacles.every(
      (obstacle) =>
        obstacle.isKnocked ||
        obstacle.isDestroyed ||
        distancePointToSegment(obstacle, turret, candidate) > obstacle.radius + candidate.radius + 8
    );

    if (farFromTurret && clearOfObstacles && hasOpenShot) {
      apple = candidate;
    }
  }

  if (apple) {
    miniGameState.apples.push(apple);
  }
}

function distancePointToSegment(point, segmentStart, segmentEnd) {
  const dx = segmentEnd.x - segmentStart.x;
  const dy = segmentEnd.y - segmentStart.y;
  const lengthSquared = dx * dx + dy * dy;

  if (lengthSquared === 0) {
    return Math.hypot(point.x - segmentStart.x, point.y - segmentStart.y);
  }

  const t = Math.max(
    0,
    Math.min(1, ((point.x - segmentStart.x) * dx + (point.y - segmentStart.y) * dy) / lengthSquared)
  );
  const closest = {
    x: segmentStart.x + t * dx,
    y: segmentStart.y + t * dy,
  };

  return Math.hypot(point.x - closest.x, point.y - closest.y);
}

function moveBullets(deltaSeconds) {
  miniGameState.bullets.forEach((bullet) => {
    bullet.x += bullet.vx * deltaSeconds;
    bullet.y += bullet.vy * deltaSeconds;
  });

  miniGameState.shells.forEach((shell) => {
    shell.x += shell.vx * deltaSeconds;
    shell.y += shell.vy * deltaSeconds;
    shell.vy += 360 * deltaSeconds;
    shell.rotation += shell.spin * deltaSeconds;
  });
}

function moveFairyBombs(deltaSeconds) {
  miniGameState.fairyBombs.forEach((bomb) => {
    if (bomb.state !== "falling") {
      return;
    }

    bomb.phase += deltaSeconds * 8;
    bomb.x += Math.sin(bomb.phase) * bomb.drift * deltaSeconds;
    bomb.y += bomb.vy * deltaSeconds;

    if (bomb.y >= bomb.targetY) {
      explodeFairyBomb(bomb);
    }
  });
}

function updateFrogs(timestamp) {
  miniGameState.frogs.forEach((frog) => {
    frog.phase += 0.14;

    if (frog.state !== "giant") {
      return;
    }

    const age = timestamp - frog.hitAt;
    const rampageDuration = 6200;

    if (age < rampageDuration) {
      updateRampagingFrog(frog, age, rampageDuration);
      return;
    }

    if (!frog.hasBurped) {
      frog.hasBurped = true;
      frog.burpAt = timestamp;
      triggerScreenShake(220, 4.5);
      playSoundEffect("frogBurp", { minGap: 500 });
      frog.bubbles = Array.from({ length: 3 }, (_, index) => ({
        x: 8 + index * 5,
        y: -5 - Math.random() * 6,
        vx: 12 + index * 7 + Math.random() * 7,
        vy: -10 - Math.random() * 12,
        size: 2.5 + Math.random() * 1.8,
        delay: index * 120,
      }));
    }
  });
}

function updateRampagingFrog(frog, age, duration) {
  const bounceDuration = 720;
  const bounceStep = Math.floor(age / bounceDuration);
  const bounceProgress = (age % bounceDuration) / bounceDuration;
  const floorY = Math.min(window.innerHeight - 70, Math.max(72, frog.groundY || frog.originY));
  const arc = Math.sin(bounceProgress * Math.PI);
  const stomp = bounceProgress < 0.12 ? (0.12 - bounceProgress) * 32 : 0;

  if (bounceStep !== frog.lastBounceStep) {
    frog.lastBounceStep = bounceStep;
    frog.hopStartX = frog.x;
    frog.hopStartY = floorY;
    frog.direction = getFrogSafeDirection(frog);
    frog.hopTarget = getFrogHopTarget(frog);
    frog.direction = frog.hopTarget.x >= frog.x ? 1 : -1;
    triggerScreenShake(230, 8.5);
    createGroundBounce(frog.x, floorY + 18);
    playSoundEffect("frogBounce", { minGap: 0 });
  }

  const target = frog.hopTarget || getFrogHopTarget(frog);
  const eased = 1 - Math.pow(1 - bounceProgress, 2);
  frog.x = Math.max(34, Math.min(window.innerWidth - 34, (frog.hopStartX ?? frog.x) + (target.x - (frog.hopStartX ?? frog.x)) * eased));
  frog.y = Math.max(54, Math.min(window.innerHeight - 66, (frog.hopStartY ?? floorY) + (target.y - (frog.hopStartY ?? floorY)) * eased - arc * 38 + stomp));

  frogEatGoblins(frog, 84);
}

function getFrogHopTarget(frog) {
  const margin = 72;
  const safeDirection = getFrogSafeDirection(frog);

  if (safeDirection !== (frog.direction || 1)) {
    frog.direction = safeDirection;
    return {
      x: Math.min(window.innerWidth - margin, Math.max(margin, frog.x + safeDirection * 118)),
      y: Math.min(window.innerHeight - 78, Math.max(70, frog.y + (Math.random() - 0.5) * 36)),
    };
  }

  const candidates = miniGameState.goblins
    .filter((goblin) => !goblin.isBoss)
    .map((goblin) => ({
      goblin,
      distance: Math.hypot(goblin.x - frog.x, goblin.y - frog.y),
    }))
    .sort((a, b) => a.distance - b.distance);

  if (candidates.length > 0 && candidates[0].distance < 260) {
    const targetX = Math.min(window.innerWidth - margin, Math.max(margin, candidates[0].goblin.x));
    return {
      x: targetX,
      y: Math.min(window.innerHeight - 78, Math.max(70, candidates[0].goblin.y + 16)),
    };
  }

  const direction = frog.direction || 1;
  return {
    x: Math.min(window.innerWidth - margin, Math.max(margin, frog.x + direction * 86)),
    y: Math.min(window.innerHeight - 78, Math.max(70, frog.y + (Math.random() - 0.5) * 44)),
  };
}

function getFrogSafeDirection(frog) {
  const margin = 72;

  if (frog.x <= margin) {
    return 1;
  }

  if (frog.x >= window.innerWidth - margin) {
    return -1;
  }

  return frog.direction || 1;
}

function explodeFairyBomb(bomb) {
  bomb.state = "exploded";
  bomb.explodedAt = performance.now();
  triggerScreenShake(360, 8);
  playSoundEffect("fairyBomb", { minGap: 0 });

  const blastRadius = MINI_GAME_FAIRY_BOMB_RADIUS;

  for (let goblinIndex = miniGameState.goblins.length - 1; goblinIndex >= 0; goblinIndex -= 1) {
    const goblin = miniGameState.goblins[goblinIndex];

    if (goblin.isBoss) {
      continue;
    }

    if (Math.hypot(goblin.x - bomb.x, goblin.y - bomb.y) <= blastRadius + goblin.size) {
      miniGameState.goblins.splice(goblinIndex, 1);
      createGoblinDeath(goblin.x, goblin.y, goblin.size);
    }
  }
}

function createHitMarker(x, y, text = "HIT", color = "#ffffff", size = 16) {
  miniGameState.hitMarkers.push({
    x,
    y,
    text,
    color,
    size,
    startedAt: performance.now(),
  });
}

function createAppleSplatter(x, y, isGolden = false) {
  miniGameState.appleSplatters.push({
    x,
    y,
    color: "#e04444",
    startedAt: performance.now(),
    drops: Array.from({ length: isGolden ? 7 : 6 }, () => ({
      angle: Math.random() * Math.PI * 2,
      speed: 7 + Math.random() * 12,
      size: 2 + Math.random() * 2.5,
    })),
  });
}

function frogEatGoblins(frog, biteRadius = 92) {
  for (let goblinIndex = miniGameState.goblins.length - 1; goblinIndex >= 0; goblinIndex -= 1) {
    const goblin = miniGameState.goblins[goblinIndex];

    if (goblin.isBoss || frog.eatenGoblinIds.has(goblin)) {
      continue;
    }

    if (Math.hypot(goblin.x - frog.x, goblin.y - frog.y) <= biteRadius + goblin.size) {
      frog.eatenGoblinIds.add(goblin);
      miniGameState.goblins.splice(goblinIndex, 1);
      createGoblinDeath(goblin.x, goblin.y, goblin.size);
    }
  }
}

function createGroundBounce(x, y, type = "dust") {
  miniGameState.scorchMarks.push({
    x,
    y,
    radius: 18,
    type,
    createdAt: performance.now(),
  });
}

function moveGoblins(deltaSeconds) {
  const turret = getTurretPosition();

  miniGameState.goblins.forEach((goblin) => {
    if (goblin.isBoss) {
      goblin.wobble += deltaSeconds * 4;
      goblin.y += goblin.speed * deltaSeconds;
      createGoblinTrail(goblin, "fire");
      knockTreesInBossPath(goblin);
      return;
    }

    let dx = turret.x - goblin.x;
    let dy = turret.y - goblin.y;

    miniGameState.obstacles.forEach((obstacle) => {
      if (obstacle.isKnocked || obstacle.isDestroyed) {
        return;
      }

      const awayX = goblin.x - obstacle.x;
      const awayY = goblin.y - obstacle.y;
      const distance = Math.hypot(awayX, awayY) || 1;
      const avoidRadius = obstacle.radius + goblin.size + 28;

      if (distance < avoidRadius) {
        const force = (avoidRadius - distance) / avoidRadius;
        dx += (awayX / distance) * force * 220;
        dy += (awayY / distance) * force * 220;
      }
    });

    const length = Math.hypot(dx, dy) || 1;

    goblin.wobble += deltaSeconds * 6;
    goblin.x += (dx / length) * goblin.speed * deltaSeconds;
    goblin.y += (dy / length) * goblin.speed * deltaSeconds;

    if (goblin.isBig && Math.random() < 0.16) {
      createGoblinTrail(goblin);
    }
  });
}

function createGoblinTrail(goblin, forcedType = null) {
  const types = ["slime", "ember", "magic"];
  const type = forcedType || types[Math.floor(Math.random() * types.length)];

  miniGameState.trails.push({
    x: goblin.x + (Math.random() - 0.5) * goblin.size * 0.35,
    y: goblin.y + goblin.size * 0.28,
    size: goblin.isBoss ? 24 : Math.max(8, goblin.size * 0.32),
    type,
    startedAt: performance.now(),
    duration: goblin.isBoss ? 1800 : 1200 + Math.random() * 700,
  });
}

function knockTreesInBossPath(boss) {
  miniGameState.obstacles.forEach((obstacle) => {
    if (obstacle.type !== "tree" || obstacle.isKnocked) {
      return;
    }

    if (Math.hypot(obstacle.x - boss.x, obstacle.y - boss.y) <= boss.size * 0.66 + obstacle.radius) {
      obstacle.isKnocked = true;
      obstacle.knockStartedAt = performance.now();
      obstacle.knockDirection = obstacle.x < boss.x ? -1 : 1;
      playSoundEffect("obstacleBreak", { minGap: 120 });
    }
  });
}

function damageForestObstacle(obstacle) {
  if (obstacle.isKnocked || obstacle.isDestroyed) {
    return;
  }

  obstacle.health = Math.max(0, (obstacle.health ?? MINI_GAME_OBSTACLE_HEALTH) - 1);
  createHitMarker(obstacle.x, obstacle.y - obstacle.radius * 1.5, `-${1}`, "#9cff9c", 11);
  playSoundEffect("obstacleHit", { minGap: 45 });

  if (obstacle.health <= 0) {
    obstacle.isDestroyed = true;
    obstacle.isKnocked = true;
    obstacle.destroyedAt = performance.now();
    obstacle.respawnAt = obstacle.destroyedAt + MINI_GAME_OBSTACLE_RESPAWN_MS;
    obstacle.knockStartedAt = obstacle.destroyedAt;
    obstacle.knockDirection = Math.random() > 0.5 ? 1 : -1;
    createGoblinDeath(obstacle.x, obstacle.y, obstacle.radius, "obstacle");
    playSoundEffect("obstacleBreak", { minGap: 80 });
  }
}

function respawnDestroyedObstacles(timestamp) {
  miniGameState.obstacles.forEach((obstacle) => {
    if (!obstacle.isDestroyed || timestamp < obstacle.respawnAt) {
      return;
    }

    const replacement = createObstacleAwayFromObjects(obstacle);
    obstacle.x = replacement.x;
    obstacle.y = replacement.y;
    obstacle.radius = replacement.radius;
    obstacle.sway = replacement.sway;
    obstacle.health = MINI_GAME_OBSTACLE_HEALTH;
    obstacle.maxHealth = MINI_GAME_OBSTACLE_HEALTH;
    obstacle.isDestroyed = false;
    obstacle.isKnocked = false;
    obstacle.destroyedAt = null;
    obstacle.respawnAt = null;
    obstacle.knockStartedAt = null;
    obstacle.knockDirection = 1;
  });
}

function createObstacleAwayFromObjects(fallbackObstacle) {
  const turret = getTurretPosition();
  let candidate = null;
  let attempts = 0;

  while (!candidate && attempts < 80) {
    attempts += 1;
    const possible = {
      x: 42 + Math.random() * (window.innerWidth - 84),
      y: 38 + Math.random() * (window.innerHeight - 130),
      radius: 16 + Math.random() * 12,
      sway: Math.random() * Math.PI * 2,
    };
    const farFromTurret = Math.hypot(possible.x - turret.x, possible.y - turret.y) > 96;
    const farFromObstacles = miniGameState.obstacles.every(
      (obstacle) =>
        obstacle === fallbackObstacle ||
        obstacle.isDestroyed ||
        Math.hypot(possible.x - obstacle.x, possible.y - obstacle.y) > possible.radius + obstacle.radius + 28
    );
    const farFromLake =
      !miniGameState.lake ||
      Math.hypot(possible.x - miniGameState.lake.x, possible.y - miniGameState.lake.y) >
        possible.radius + miniGameState.lake.radiusX + 16;

    if (farFromTurret && farFromObstacles && farFromLake) {
      candidate = possible;
    }
  }

  return candidate || {
    x: fallbackObstacle.x,
    y: fallbackObstacle.y,
    radius: fallbackObstacle.radius,
    sway: Math.random() * Math.PI * 2,
  };
}

function checkMiniGameHits() {
  for (let bulletIndex = miniGameState.bullets.length - 1; bulletIndex >= 0; bulletIndex -= 1) {
    const bullet = miniGameState.bullets[bulletIndex];
    const blockedObstacle = miniGameState.obstacles.find(
      (obstacle) =>
        !obstacle.isKnocked &&
        !obstacle.isDestroyed &&
        Math.hypot(obstacle.x - bullet.x, obstacle.y - bullet.y) <= obstacle.radius + bullet.radius
    );

    if (blockedObstacle) {
      damageForestObstacle(blockedObstacle);
      miniGameState.bullets.splice(bulletIndex, 1);
    }
  }

  for (let appleIndex = miniGameState.apples.length - 1; appleIndex >= 0; appleIndex -= 1) {
    const apple = miniGameState.apples[appleIndex];

    for (let bulletIndex = miniGameState.bullets.length - 1; bulletIndex >= 0; bulletIndex -= 1) {
      const bullet = miniGameState.bullets[bulletIndex];

      if (Math.hypot(apple.x - bullet.x, apple.y - bullet.y) <= apple.radius + bullet.radius) {
        miniGameState.apples.splice(appleIndex, 1);
        miniGameState.bullets.splice(bulletIndex, 1);
        createAppleSplatter(apple.x, apple.y, apple.type === "golden");

        if (apple.type === "golden") {
          triggerGoldenAppleBlast(apple.x, apple.y);
        } else {
          playSoundEffect("applePop", { minGap: 80 });
          collectUpgradeApple();
        }

        break;
      }
    }
  }

  for (let frogIndex = miniGameState.frogs.length - 1; frogIndex >= 0; frogIndex -= 1) {
    const frog = miniGameState.frogs[frogIndex];

    if (frog.state !== "waiting") {
      continue;
    }

    for (let bulletIndex = miniGameState.bullets.length - 1; bulletIndex >= 0; bulletIndex -= 1) {
      const bullet = miniGameState.bullets[bulletIndex];

      if (Math.hypot(frog.x - bullet.x, frog.y - bullet.y) <= frog.radius + bullet.radius) {
        miniGameState.bullets.splice(bulletIndex, 1);
        triggerScreenShake(180, 3.5);
        frog.state = "giant";
        frog.hitAt = performance.now();
        frog.direction = frog.x < window.innerWidth / 2 ? 1 : -1;
        frog.groundY = frog.y;
        createHitMarker(frog.x, frog.y - 18, "420", "#ff6dff", 18);
        playSoundEffect("frogActivate", { minGap: 250 });
        break;
      }
    }
  }

  for (let goblinIndex = miniGameState.goblins.length - 1; goblinIndex >= 0; goblinIndex -= 1) {
    const goblin = miniGameState.goblins[goblinIndex];

    for (let bulletIndex = miniGameState.bullets.length - 1; bulletIndex >= 0; bulletIndex -= 1) {
      const bullet = miniGameState.bullets[bulletIndex];
      const hitDistance = goblin.size * 0.72 + bullet.radius;

      if (Math.hypot(goblin.x - bullet.x, goblin.y - bullet.y) <= hitDistance) {
        miniGameState.bullets.splice(bulletIndex, 1);

        if (goblin.isBoss && miniGameState.level < 5) {
          createGoblinHitSpark(goblin.x, goblin.y, goblin.size);
          playSoundEffect("obstacleHit", { minGap: 60 });
          break;
        }

        goblin.health -= goblin.isBoss ? bullet.damage : bullet.damage;
        if (goblin.isBig || goblin.isBoss) {
          createHitMarker(goblin.x, goblin.y - goblin.size * 0.9, `-${bullet.damage}`, "#ff6dff", 14);
        }

        if (goblin.health <= 0) {
          miniGameState.goblins.splice(goblinIndex, 1);
          createGoblinDeath(goblin.x, goblin.y, goblin.size);

          if (goblin.isBoss) {
            endMiniGameWithVictory(goblin.x, goblin.y);
          }
        } else {
          createGoblinHitSpark(goblin.x, goblin.y, goblin.size);
          playSoundEffect("obstacleHit", { minGap: 70 });
        }

        break;
      }
    }
  }
}

function collectUpgradeApple() {
  if (miniGameState.level >= 5) {
    createLevelPulse(true);
    return;
  }

  miniGameState.applesTowardNextLevel += 1;

  if (miniGameState.applesTowardNextLevel >= MINI_GAME_LEVEL_REQUIREMENTS[miniGameState.level]) {
    miniGameState.level += 1;
    miniGameState.applesTowardNextLevel = 0;
    if (miniGameState.level >= 5) {
      miniGameState.apples = miniGameState.apples.filter((apple) => apple.type === "golden");
    }
    createLevelPulse(miniGameState.level >= 5);
    createLevelUpMessage();
    createFairyBombDrop();
  }
}

function createLevelPulse(isGolden) {
  const turret = getTurretPosition();

  triggerScreenShake(isGolden ? 640 : 420, isGolden ? 12 : 8);
  playSoundEffect("levelUp", { minGap: 450 });
  miniGameState.pulses.push({
    x: turret.x,
    y: turret.y - 16,
    isGolden,
    startedAt: performance.now(),
  });
}

function triggerScreenShake(duration, intensity) {
  const now = performance.now();
  miniGameState.shakeUntil = Math.max(miniGameState.shakeUntil, now + duration);
  miniGameState.shakeIntensity = Math.max(miniGameState.shakeIntensity, intensity);
}

function createLevelUpMessage() {
  miniGameState.levelMessages.push({
    text: `LEVEL ${miniGameState.level}`,
    startedAt: performance.now(),
  });
}

function createFairyBombDrop() {
  const turret = getTurretPosition();
  const spreadX = Math.min(window.innerWidth * 0.42, 260);
  const minX = Math.max(30, turret.x - spreadX);
  const maxX = Math.min(window.innerWidth - 30, turret.x + spreadX);
  const minY = Math.max(44, turret.y - window.innerHeight * 0.48);
  const maxY = Math.max(minY + 40, turret.y - 48);

  playSoundEffect("fairyFall", { minGap: 0 });

  for (let index = 0; index < MINI_GAME_FAIRY_BOMB_COUNT; index += 1) {
    const targetY = minY + Math.random() * (maxY - minY);

    miniGameState.fairyBombs.push({
      x: minX + Math.random() * (maxX - minX),
      y: -24 - Math.random() * 90,
      radius: 12,
      vy: 150 + Math.random() * 70,
      drift: (Math.random() - 0.5) * 35,
      phase: Math.random() * Math.PI * 2,
      state: "falling",
      startedAt: performance.now(),
      explodedAt: 0,
      targetY,
    });
  }
}

function createGoblinHitSpark(x, y, size) {
  miniGameState.explosions.push({
    x,
    y,
    size: size * 0.55,
    startedAt: performance.now(),
    pieces: Array.from({ length: 5 }, () => ({
      x: 0,
      y: 0,
      vx: (Math.random() - 0.5) * 70,
      vy: (Math.random() - 0.5) * 70,
    })),
  });
}

function triggerGoldenAppleBlast(x, y) {
  triggerScreenShake(760, 16);
  playSoundEffect("goldenApple", { minGap: 320 });
  miniGameState.explosions.push({
    x,
    y,
    size: MINI_GAME_GOLDEN_APPLE_RADIUS,
    type: "golden",
    startedAt: performance.now(),
    pieces: Array.from({ length: 18 }, () => ({
      x: 0,
      y: 0,
      vx: (Math.random() - 0.5) * 220,
      vy: (Math.random() - 0.5) * 220,
    })),
  });
  miniGameState.scorchMarks.push({
    x,
    y,
    radius: 24,
  });

  for (let goblinIndex = miniGameState.goblins.length - 1; goblinIndex >= 0; goblinIndex -= 1) {
    const goblin = miniGameState.goblins[goblinIndex];

    if (Math.hypot(goblin.x - x, goblin.y - y) <= MINI_GAME_GOLDEN_APPLE_RADIUS) {
      miniGameState.goblins.splice(goblinIndex, 1);
      createGoblinDeath(goblin.x, goblin.y, goblin.size);
    }
  }
}

function checkGoblinContact() {
  const turret = getTurretPosition();
  const hitRadius = 30;
  const touchedGoblin = miniGameState.goblins.find(
    (goblin) => Math.hypot(goblin.x - turret.x, goblin.y - turret.y) <= goblin.size + hitRadius
  );

  if (touchedGoblin) {
    failMiniGame(touchedGoblin.x, touchedGoblin.y);
  }
}

function failMiniGame(x, y) {
  if (miniGameState.status !== "playing") {
    return;
  }

  startMiniGameFinish("failed", x, y);
}

function endMiniGameWithVictory(x, y) {
  if (miniGameState.status !== "playing") {
    return;
  }

  startMiniGameFinish("victory", x, y);
}

function createGoblinDeath(x, y, size, soundType = "goblin") {
  if (soundType === "goblin") {
    if (size >= 52) {
      playSoundEffect("bossDeath", { minGap: 900 });
    } else if (size >= 30) {
      playSoundEffect("goblinBigDeath", { minGap: 90 });
    } else {
      playSoundEffect("goblinSmallDeath", { minGap: 55 });
    }
  }

  miniGameState.explosions.push({
    x,
    y,
    size,
    startedAt: performance.now(),
    pieces: Array.from({ length: 10 }, () => ({
      x: 0,
      y: 0,
      vx: (Math.random() - 0.5) * 90,
      vy: (Math.random() - 0.5) * 90,
    })),
  });
}

function trimMiniGameObjects() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const now = performance.now();

  miniGameState.bullets = miniGameState.bullets.filter(
    (bullet) => bullet.x > -30 && bullet.x < width + 30 && bullet.y > -30 && bullet.y < height + 30
  );
  miniGameState.shells = miniGameState.shells.filter((shell) => now - shell.startedAt < 650);
  miniGameState.pulses = miniGameState.pulses.filter((pulse) => now - pulse.startedAt < 650);
  miniGameState.fairyBombs = miniGameState.fairyBombs.filter(
    (bomb) => bomb.state !== "exploded" || now - bomb.explodedAt < 620
  );
  miniGameState.trails = miniGameState.trails.filter((trail) => now - trail.startedAt < trail.duration);
  miniGameState.levelMessages = miniGameState.levelMessages.filter((message) => now - message.startedAt < 1100);
  miniGameState.hitMarkers = miniGameState.hitMarkers.filter((marker) => now - marker.startedAt < 650);
  miniGameState.appleSplatters = miniGameState.appleSplatters.filter((splatter) => now - splatter.startedAt < 360);
  miniGameState.frogs = miniGameState.frogs.filter(
    (frog) => frog.state !== "giant" || now - frog.hitAt < 8600
  );
  miniGameState.scorchMarks = miniGameState.scorchMarks.filter(
    (mark) => !mark.createdAt || now - mark.createdAt < 620
  );
  miniGameState.goblins = miniGameState.goblins.filter((goblin) => goblin.y < height + 40);
  miniGameState.explosions = miniGameState.explosions.filter(
    (explosion) => now - explosion.startedAt < (explosion.type === "golden" ? 720 : MINI_GAME_DEATH_ANIMATION_MS)
  );
}

function drawMiniGame() {
  const context = miniGameState.context;

  if (!context) {
    return;
  }

  const gameplayOpacity = getMiniGameGameplayOpacity();

  context.clearRect(0, 0, window.innerWidth, window.innerHeight);
  context.save();
  context.globalAlpha = gameplayOpacity;
  applyScreenShake(context);
  drawLake(context);
  drawLevelPulses(context);
  drawTrails(context);
  drawScorchMarks(context);
  drawForestObstacles(context);
  drawApples(context);
  drawAppleSplatters(context);
  drawFrogs(context);
  drawFairyBombs(context);
  drawShells(context);
  drawBullets(context);
  drawGoblins(context);
  drawExplosions(context);
  drawHitMarkers(context);
  drawTurret(context);
  context.restore();
  drawMiniGameFinishEffect(context);
  drawMiniGameHud(context);
  drawLevelMessages(context);
}

function getMiniGameGameplayOpacity() {
  if (miniGameState.status !== "playing") {
    return 1;
  }

  return Math.min((performance.now() - miniGameState.gameplayFadeStartedAt) / 700, 1);
}

function applyScreenShake(context) {
  const now = performance.now();

  if (miniGameState.status === "finishing" && miniGameState.finishEffect) {
    const age = now - miniGameState.finishEffect.startedAt;
    const fade = Math.max(0, 1 - age / MINI_GAME_FINISH_EFFECT_MS);
    const strength = miniGameState.shakeIntensity * fade;
    context.translate(Math.sin(age / 78) * strength, Math.cos(age / 112) * strength * 0.7);
    return;
  }

  if (now >= miniGameState.shakeUntil) {
    miniGameState.shakeIntensity = 0;
    return;
  }

  const remaining = (miniGameState.shakeUntil - now) / 620;
  const strength = miniGameState.shakeIntensity * Math.max(0.18, remaining);
  context.translate((Math.random() - 0.5) * strength, (Math.random() - 0.5) * strength);
}

function drawMiniGameFinishEffect(context) {
  const effect = miniGameState.finishEffect;

  if (!effect || miniGameState.status !== "finishing") {
    return;
  }

  const age = performance.now() - effect.startedAt;
  const progress = Math.min(age / MINI_GAME_FINISH_EFFECT_MS, 1);
  const flashOpacity = Math.max(0, 1 - age / 1450);
  const bloomOpacity = Math.max(0, 1 - progress);
  const originX = Math.max(0, Math.min(window.innerWidth, effect.x));
  const originY = Math.max(0, Math.min(window.innerHeight, effect.y));
  const pulseRadius = 18 + progress * Math.max(window.innerWidth, window.innerHeight) * 1.65;

  context.save();
  context.globalCompositeOperation = "lighter";

  const burst = context.createRadialGradient(originX, originY, 0, originX, originY, pulseRadius);
  burst.addColorStop(0, `rgba(255, 255, 255, ${1 * bloomOpacity})`);
  burst.addColorStop(0.18, `rgba(255, 255, 255, ${0.66 * bloomOpacity})`);
  burst.addColorStop(0.52, `rgba(255, 255, 255, ${0.18 * bloomOpacity})`);
  burst.addColorStop(1, "rgba(255, 255, 255, 0)");
  context.fillStyle = burst;
  context.fillRect(0, 0, window.innerWidth, window.innerHeight);

  context.globalCompositeOperation = "source-over";
  context.globalAlpha = flashOpacity * 0.94;
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, window.innerWidth, window.innerHeight);
  context.restore();
}

function drawMiniGameHud(context) {
  const remainingSeconds = Math.max(
    0,
    Math.ceil((MINI_GAME_DURATION_MS - (performance.now() - miniGameState.startedAt)) / 1000)
  );

  context.save();
  context.font = "bold 18px 'Courier New', monospace";
  context.textAlign = "center";
  context.textBaseline = "top";
  context.shadowColor = "rgba(156, 255, 156, 0.45)";
  context.shadowBlur = 10;

  if (miniGameState.status === "failed") {
    context.font = "32px 'Courier New', monospace";
    context.fillStyle = "#ff4040";
    context.fillText("FAILED", window.innerWidth / 2, window.innerHeight / 2 - 18);
    context.restore();
    return;
  }

  if (miniGameState.status === "victory") {
    context.font = "32px 'Courier New', monospace";
    context.fillStyle = "#ffffff";
    context.fillText("VICTORY", window.innerWidth / 2, window.innerHeight / 2 - 18);
    context.restore();
    return;
  }

  const boxWidth = 86;
  const boxHeight = 34;
  const boxX = window.innerWidth / 2 - boxWidth / 2;
  const boxY = 8;
  context.strokeStyle = "#9cff9c";
  context.fillStyle = "rgba(4, 18, 8, 0.78)";
  context.lineWidth = 2;
  context.fillRect(boxX, boxY, boxWidth, boxHeight);
  context.strokeRect(boxX, boxY, boxWidth, boxHeight);
  context.fillStyle = "#9cff9c";
  context.fillText(`${remainingSeconds}`, window.innerWidth / 2, boxY + 7);
  context.globalAlpha = Math.min(context.globalAlpha, getMiniGameGameplayOpacity());
  drawMiniGameProgressHud(context);
  context.restore();
}

function drawMiniGameProgressHud(context) {
  const turret = getTurretPosition();
  const baseY = Math.min(window.innerHeight - 16, turret.y + 22);
  const isMaxLevel = miniGameState.level >= 5;

  context.save();
  context.font = "bold 12px 'Courier New', monospace";
  context.textBaseline = "middle";
  context.shadowBlur = isMaxLevel ? 12 : 7;
  context.shadowColor = isMaxLevel ? "rgba(255, 215, 82, 0.75)" : "rgba(156, 255, 156, 0.42)";

  context.textAlign = "right";
  context.fillStyle = isMaxLevel ? "#ffd64a" : "#9cff9c";
  context.fillText(`LEVEL ${miniGameState.level}`, turret.x - 62, baseY);

  context.textAlign = "left";
  context.fillStyle = "rgba(255, 255, 255, 0.82)";
  context.fillText("APPLES", turret.x + 56, baseY - 11);

  if (isMaxLevel) {
    drawAppleRequirementIcon(context, turret.x + 112, baseY - 11, true, true);
    context.fillStyle = "#ffd64a";
    context.fillText("N/A", turret.x + 130, baseY - 11);
    context.restore();
    return;
  }

  const requiredApples = MINI_GAME_LEVEL_REQUIREMENTS[miniGameState.level];
  for (let index = 0; index < requiredApples; index += 1) {
    drawAppleRequirementIcon(
      context,
      turret.x + 64 + index * 16,
      baseY + 8,
      index < miniGameState.applesTowardNextLevel,
      false
    );
  }

  context.restore();
}

function drawAppleRequirementIcon(context, x, y, isFilled, isGolden) {
  context.save();
  context.translate(x, y);
  context.scale(0.72, 0.72);
  context.shadowBlur = isFilled || isGolden ? 8 : 0;
  context.shadowColor = isGolden ? "rgba(255, 215, 82, 0.75)" : "rgba(255, 70, 70, 0.42)";
  context.fillStyle = isGolden ? "#ffd64a" : isFilled ? "#e94646" : "rgba(125, 125, 125, 0.42)";
  context.beginPath();
  context.arc(-4, 0, 7, 0, Math.PI * 2);
  context.arc(4, 0, 7, 0, Math.PI * 2);
  context.fill();
  context.fillRect(-7, 0, 14, 8);
  context.fillStyle = isFilled || isGolden ? "#6be46f" : "rgba(150, 150, 150, 0.44)";
  context.fillRect(2, -13, 9, 4);
  context.fillStyle = "#6d421f";
  context.fillRect(-1, -13, 3, 7);
  context.strokeStyle = isGolden ? "#fff4a4" : isFilled ? "#ffffff" : "rgba(220, 220, 220, 0.4)";
  context.lineWidth = 1;
  context.strokeRect(-8, -5, 16, 13);
  context.restore();
}

function drawHitMarkers(context) {
  const now = performance.now();

  miniGameState.hitMarkers.forEach((marker) => {
    const progress = Math.min((now - marker.startedAt) / 650, 1);
    const opacity = progress < 0.18 ? progress / 0.18 : Math.max(0, 1 - (progress - 0.55) / 0.45);
    const wobble = Math.sin(progress * Math.PI * 8) * 3;

    context.save();
    context.globalAlpha = opacity;
    context.translate(marker.x + wobble, marker.y - progress * 24);
    context.font = `bold ${marker.size}px 'Courier New', monospace`;
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillStyle = marker.color;
    context.shadowColor = marker.color;
    context.shadowBlur = 12;
    context.fillText(marker.text, 0, 0);
    context.strokeStyle = "rgba(255, 255, 255, 0.82)";
    context.lineWidth = 1;
    context.beginPath();
    context.moveTo(-10, -10);
    context.lineTo(-3, -3);
    context.moveTo(10, -10);
    context.lineTo(3, -3);
    context.moveTo(-10, 10);
    context.lineTo(-3, 3);
    context.moveTo(10, 10);
    context.lineTo(3, 3);
    context.stroke();
    context.restore();
  });
}

function drawLevelMessages(context) {
  const now = performance.now();

  miniGameState.levelMessages.forEach((message) => {
    const progress = (now - message.startedAt) / 1100;
    const opacity = progress < 0.2 ? progress / 0.2 : Math.max(0, 1 - (progress - 0.72) / 0.28);

    context.save();
    context.globalAlpha = opacity;
    context.font = "bold 18px 'Courier New', monospace";
    context.textAlign = "center";
    context.textBaseline = "top";
    context.fillStyle = miniGameState.level >= 5 ? "#ffd64a" : "#9cff9c";
    context.shadowColor = miniGameState.level >= 5 ? "rgba(255, 215, 82, 0.75)" : "rgba(156, 255, 156, 0.55)";
    context.shadowBlur = 12;
    context.fillText(message.text, window.innerWidth / 2, 50);
    context.restore();
  });
}

function drawLevelPulses(context) {
  const now = performance.now();

  miniGameState.pulses.forEach((pulse) => {
    const progress = Math.min((now - pulse.startedAt) / 650, 1);
    const radius = 24 + progress * Math.max(window.innerWidth, window.innerHeight) * 0.72;
    const opacity = 1 - progress;

    context.save();
    context.strokeStyle = pulse.isGolden ? `rgba(255, 215, 82, ${opacity})` : `rgba(156, 255, 156, ${opacity})`;
    context.lineWidth = pulse.isGolden ? 4 : 2;
    context.beginPath();
    context.arc(pulse.x, pulse.y, radius, 0, Math.PI * 2);
    context.stroke();
    context.restore();
  });
}

function drawLake(context) {
  const lake = miniGameState.lake;

  if (!lake) {
    return;
  }

  context.save();
  context.translate(lake.x, lake.y);
  context.shadowColor = "rgba(96, 207, 255, 0.42)";
  context.shadowBlur = 12;
  context.fillStyle = "rgba(28, 120, 255, 0.42)";
  [
    [0, 0, 1, 1],
    [-lake.radiusX * 0.42, lake.radiusY * 0.06, 0.68, 0.76],
    [lake.radiusX * 0.36, -lake.radiusY * 0.08, 0.72, 0.8],
    [lake.radiusX * 0.12, lake.radiusY * 0.42, 0.62, 0.5],
  ].forEach(([x, y, widthScale, heightScale]) => {
    context.beginPath();
    context.ellipse(x, y, lake.radiusX * widthScale, lake.radiusY * heightScale, -0.12, 0, Math.PI * 2);
    context.fill();
  });
  drawLilyPad(context, lake.radiusX * 0.26, -lake.radiusY * 0.08, 13);
  drawLilyPad(context, -lake.radiusX * 0.32, lake.radiusY * 0.2, 10);
  drawLilyPad(context, lake.radiusX * 0.02, lake.radiusY * 0.34, 8);
  context.restore();
}

function drawLilyPad(context, x, y, radius) {
  context.save();
  context.translate(x, y);
  context.fillStyle = "rgba(87, 214, 93, 0.82)";
  context.strokeStyle = "rgba(156, 255, 156, 0.7)";
  context.lineWidth = 1;
  context.beginPath();
  context.moveTo(0, 0);
  context.arc(0, 0, radius, 0.22, Math.PI * 1.84);
  context.closePath();
  context.fill();
  context.stroke();
  context.restore();
}

function drawScorchMarks(context) {
  const now = performance.now();

  miniGameState.scorchMarks.forEach((mark) => {
    const progress = mark.createdAt ? Math.min((now - mark.createdAt) / 620, 1) : 0;
    const opacity = mark.createdAt ? 1 - progress : 1;

    context.save();
    context.globalAlpha = opacity;
    context.translate(mark.x, mark.y);

    if (mark.type === "dust") {
      context.fillStyle = "rgba(255, 255, 255, 0.82)";
      context.shadowColor = "rgba(255, 255, 255, 0.35)";
      context.shadowBlur = 10;
    }

    if (mark.type === "dust") {
      for (let index = 0; index < 7; index += 1) {
        const angle = -Math.PI + (Math.PI * index) / 6;
        const distance = mark.radius * (0.35 + progress * 1.15);
        const size = Math.max(2, 5 - progress * 3);
        context.fillRect(Math.cos(angle) * distance - size / 2, Math.sin(angle) * distance * 0.34 - size / 2, size, size);
      }
    } else {
      context.fillStyle = "rgba(58, 36, 10, 0.72)";
      context.shadowColor = "rgba(255, 190, 58, 0.18)";
      context.shadowBlur = 12;
      context.beginPath();
      context.ellipse(0, 0, mark.radius * (1.15 + progress * 0.9), mark.radius * (0.72 + progress * 0.24), 0, 0, Math.PI * 2);
      context.fill();
      context.fillStyle = "rgba(0, 0, 0, 0.5)";
      context.fillRect(-mark.radius * 0.42, -2, mark.radius * 0.84, 4);
    }
    context.restore();
  });
}

function drawAppleSplatters(context) {
  const now = performance.now();

  miniGameState.appleSplatters.forEach((splatter) => {
    const progress = Math.min((now - splatter.startedAt) / 360, 1);
    const opacity = 1 - progress;

    context.save();
    context.globalAlpha = opacity;
    context.translate(splatter.x, splatter.y);
    context.fillStyle = splatter.color;
    context.shadowColor = splatter.color;
    context.shadowBlur = 8;
    splatter.drops.forEach((drop) => {
      const distance = drop.speed * progress;
      context.fillRect(
        Math.cos(drop.angle) * distance - drop.size / 2,
        Math.sin(drop.angle) * distance - drop.size / 2,
        drop.size,
        drop.size
      );
    });
    context.restore();
  });
}

function drawTrails(context) {
  const now = performance.now();

  miniGameState.trails.forEach((trail) => {
    const progress = (now - trail.startedAt) / trail.duration;
    const opacity = 1 - progress;

    context.save();
    context.globalAlpha = opacity;
    context.translate(trail.x, trail.y);

    if (trail.type === "fire") {
      context.fillStyle = "rgba(255, 74, 24, 0.85)";
      context.shadowColor = "rgba(255, 170, 40, 0.7)";
      context.shadowBlur = 16;
    } else if (trail.type === "magic") {
      context.fillStyle = "rgba(177, 92, 255, 0.72)";
      context.shadowColor = "rgba(96, 207, 255, 0.55)";
      context.shadowBlur = 12;
    } else {
      context.fillStyle = "rgba(72, 255, 116, 0.58)";
      context.shadowColor = "rgba(72, 255, 116, 0.42)";
      context.shadowBlur = 10;
    }

    context.beginPath();
    context.ellipse(0, 0, trail.size * (1 + progress), trail.size * 0.45, 0, 0, Math.PI * 2);
    context.fill();
    context.restore();
  });
}

function drawFrogs(context) {
  miniGameState.frogs.forEach((frog) => {
    const age = frog.state === "giant" ? performance.now() - frog.hitAt : 0;
    const grow = frog.state === "giant" ? Math.min(age / 520, 1) : 0;
    const shrink = frog.state === "giant" && age > 7900 ? Math.max(0, 1 - (age - 7900) / 700) : 1;
    const scale = (1 + grow * 2.8) * shrink;
    const hop = Math.sin(frog.phase) * (frog.state === "waiting" ? 3 : 1);
    const isGrowing = frog.state === "giant" && age < 620;
    const isRampaging = frog.state === "giant" && age >= 620 && age < 6200;
    const isBurping = frog.state === "giant" && age >= 6200 && age < 7900;
    const isTired = frog.state === "giant" && age >= 7000;
    const mouthOpen = isRampaging || isBurping;
    const eyes420 = isBurping;
    const purpleMix = getFrogPurpleFlicker(age, isRampaging);

    context.save();
    context.translate(frog.x, frog.y + hop);
    context.scale(scale, scale);
    context.globalAlpha = shrink;
    context.shadowColor = purpleMix > 0 ? `rgba(177, 92, 255, ${0.45 + 0.45 * purpleMix})` : "rgba(255, 109, 255, 0.42)";
    context.shadowBlur = frog.state === "giant" ? 18 + purpleMix * 18 : 10;

    if (frog.state === "giant") {
      if (isGrowing || isBurping || isTired) {
        drawFrontFrog(context, frog, { isGrowing, isBurping, isTired, eyes420, age, purpleMix });
      } else {
        drawSideFrog(context, frog, { isRampaging, mouthOpen, age, purpleMix });
      }
      context.restore();
      return;
    }

    context.fillStyle = "#57d65d";
    context.fillRect(-10, -5, 20, 12);
    context.fillRect(-15, 2, 7, 5);
    context.fillRect(8, 2, 7, 5);
    context.fillStyle = "#ffffff";
    context.fillRect(-8, -10, 6, 6);
    context.fillRect(2, -10, 6, 6);
    if (isRampaging) {
      context.strokeStyle = "#102b14";
      context.lineWidth = 1.5;
      context.beginPath();
      context.moveTo(-9, -13);
      context.lineTo(-2, -9);
      context.moveTo(9, -13);
      context.lineTo(2, -9);
      context.stroke();
    }
    context.fillStyle = eyes420 ? "#ff6dff" : "#000000";
    context.font = eyes420 ? "bold 4px 'Courier New', monospace" : "4px 'Courier New', monospace";
    context.textAlign = "center";
    context.textBaseline = "middle";
    if (eyes420) {
      context.fillText("420", -5, -7);
      context.fillText("420", 5, -7);
      context.strokeStyle = "rgba(255, 255, 255, 0.86)";
      context.beginPath();
      context.moveTo(-12, -13);
      context.lineTo(-7, -16);
      context.moveTo(8, -16);
      context.lineTo(13, -13);
      context.stroke();
    } else {
      context.fillRect(-6, -8, 2, 2);
      context.fillRect(4, -8, 2, 2);
    }
    context.fillStyle = "#000000";
    context.fillRect(-4, 4, 8, mouthOpen ? 7 : 2);
    if (mouthOpen) {
      context.fillStyle = "#000000";
      context.fillRect(-7, 4, 14, 7);
    }
    if (isBurping) {
      drawFrogBubbles(context, frog.bubbles, age - 6200);
    }
    if (isTired) {
      context.strokeStyle = "rgba(255, 255, 255, 0.72)";
      context.beginPath();
      context.moveTo(-7, -8);
      context.lineTo(-3, -8);
      context.moveTo(3, -8);
      context.lineTo(7, -8);
      context.stroke();
    }
    context.restore();
  });
}

function drawFrogBubbles(context, bubbles, age) {
  bubbles.forEach((bubble) => {
    const bubbleAge = Math.max(0, age - bubble.delay);
    const progress = Math.min(bubbleAge / 1900, 1);

    if (bubbleAge <= 0 || progress >= 1) {
      return;
    }

    const opacity = Math.max(0, 0.58 - progress * 0.5);
    const wobble = Math.sin(progress * Math.PI * 2 + bubble.delay) * 1.6;

    context.save();
    context.strokeStyle = `rgba(214, 190, 255, ${opacity})`;
    context.fillStyle = `rgba(255, 255, 255, ${opacity * 0.12})`;
    context.lineWidth = 1;
    context.beginPath();
    context.arc(
      bubble.x + bubble.vx * progress * 0.12 + wobble,
      bubble.y + bubble.vy * progress * 0.12 - progress * 4,
      bubble.size + progress * 1.8,
      0,
      Math.PI * 2
    );
    context.fill();
    context.stroke();
    context.restore();
  });
}

function drawFrontFrog(context, frog, mood) {
  const angry = mood.isGrowing;
  const tired = mood.isTired;
  const eyes420 = mood.isBurping && Math.floor(mood.age / 120) % 2 === 0;
  const frogColor = blendHexColors(tired ? "#78d86f" : "#57d65d", "#b15cff", mood.purpleMix || 0);

  context.fillStyle = frogColor;
  context.fillRect(-12, -7, 24, 15);
  context.fillRect(-17, 1, 8, 6);
  context.fillRect(9, 1, 8, 6);
  context.fillStyle = "#ffffff";
  context.fillRect(-8, -12, 6, 6);
  context.fillRect(2, -12, 6, 6);
  context.fillStyle = eyes420 ? "#ff6dff" : "#000000";
  context.font = eyes420 ? "bold 4px 'Courier New', monospace" : "4px 'Courier New', monospace";
  context.textAlign = "center";
  context.textBaseline = "middle";

  if (eyes420) {
    context.fillText("420", -5, -9);
    context.fillText("420", 5, -9);
  } else if (tired) {
    context.fillRect(-8, -9, 5, 1);
    context.fillRect(3, -9, 5, 1);
  } else {
    context.fillRect(-6, -10, 2, 2);
    context.fillRect(4, -10, 2, 2);
  }

  if (angry) {
    context.strokeStyle = "#102b14";
    context.lineWidth = 1.5;
    context.beginPath();
    context.moveTo(-10, -15);
    context.lineTo(-2, -11);
    context.moveTo(10, -15);
    context.lineTo(2, -11);
    context.stroke();
  }

  context.fillStyle = "#000000";
  context.fillRect(tired ? -4 : -6, 3, tired ? 8 : 12, mood.isBurping ? 6 : 2);

  if (mood.isBurping) {
    drawFrogBubbles(context, frog.bubbles, mood.age - 6200);
  }
}

function drawSideFrog(context, frog, mood) {
  const direction = frog.direction || 1;
  const frogColor = blendHexColors("#57d65d", "#b15cff", mood.purpleMix || 0);

  context.save();
  context.scale(direction, 1);
  context.fillStyle = frogColor;
  context.fillRect(-13, -6, 24, 14);
  context.fillRect(4, -11, 13, 11);
  context.fillRect(-16, 3, 11, 6);
  context.fillRect(3, 8, 15, 5);
  context.fillStyle = "#ffffff";
  context.fillRect(8, -15, 6, 6);
  context.fillStyle = mood.eyes420 ? "#ff6dff" : "#000000";
  context.font = mood.eyes420 ? "bold 4px 'Courier New', monospace" : "4px 'Courier New', monospace";
  context.textAlign = "center";
  context.textBaseline = "middle";
  if (mood.eyes420) {
    context.fillText("420", 11, -12);
  } else if (mood.isTired) {
    context.fillRect(9, -12, 5, 1);
  } else {
    context.fillRect(11, -13, 2, 2);
  }
  if (mood.isRampaging) {
    context.strokeStyle = "#102b14";
    context.lineWidth = 1.5;
    context.beginPath();
    context.moveTo(5, -16);
    context.lineTo(14, -13);
    context.stroke();
  }
  if (mood.mouthOpen) {
    context.fillStyle = frogColor;
    context.fillRect(14, -8, 13, 5);
    context.fillRect(23, -3, 5, 4);
    context.fillRect(14, 5, 13, 5);
    context.fillRect(23, 1, 5, 4);
    context.fillStyle = "#000000";
    context.fillRect(16, -3, 10, 8);
    context.fillStyle = "#ff1e1e";
    context.fillRect(18, 2, 5, 3);
  } else {
    context.fillStyle = "#000000";
    context.fillRect(15, -2, 6, 2);
  }
  context.restore();
}

function getFrogPurpleFlicker(age, isRampaging) {
  if (!isRampaging) {
    return 0;
  }

  const flickerWindows = [
    [1600, 2600],
    [4100, 5100],
  ];
  const isInsideWindow = flickerWindows.some(([start, end]) => age >= start && age <= end);

  if (!isInsideWindow) {
    return 0;
  }

  return Math.sin(age / 58) > 0 ? 0.82 : 0.18;
}

function blendHexColors(from, to, amount) {
  const clamped = Math.max(0, Math.min(amount, 1));
  const fromValue = Number.parseInt(from.slice(1), 16);
  const toValue = Number.parseInt(to.slice(1), 16);
  const fromRgb = [(fromValue >> 16) & 255, (fromValue >> 8) & 255, fromValue & 255];
  const toRgb = [(toValue >> 16) & 255, (toValue >> 8) & 255, toValue & 255];
  const mixed = fromRgb.map((value, index) => Math.round(value + (toRgb[index] - value) * clamped));

  return `rgb(${mixed[0]}, ${mixed[1]}, ${mixed[2]})`;
}

function drawApples(context) {
  miniGameState.apples.forEach((apple) => {
    const pulse = 1 + Math.sin(performance.now() / 220 + apple.pulse) * 0.08;

    context.save();
    context.translate(apple.x, apple.y);
    drawAppleIconOnCanvas(context, apple.type === "golden", pulse);
    context.restore();
  });
}

function drawAppleIconOnCanvas(context, isGolden, scale = 1) {
  const radius = 10 * scale;

  context.shadowColor = isGolden ? "rgba(255, 215, 82, 0.75)" : "rgba(255, 70, 70, 0.48)";
  context.shadowBlur = isGolden ? 18 : 10;
  context.fillStyle = isGolden ? "#ffd64a" : "#e04444";
  context.fillRect(-radius * 0.7, -radius * 0.55, radius * 1.4, radius * 1.3);
  context.fillRect(-radius * 0.35, -radius * 0.9, radius * 0.7, radius * 0.35);
  context.fillStyle = "#78b85a";
  context.fillRect(radius * 0.1, -radius * 1.15, radius * 0.55, radius * 0.25);
}

function drawFairyBombs(context) {
  miniGameState.fairyBombs.forEach((bomb) => {
    context.save();
    context.translate(bomb.x, bomb.y);

    if (bomb.state === "falling") {
      const glow = 0.65 + Math.sin(performance.now() / 90 + bomb.phase) * 0.25;
      context.shadowColor = "rgba(158, 116, 255, 0.9)";
      context.shadowBlur = 18;
      context.fillStyle = `rgba(96, 207, 255, ${glow * 0.72})`;
      context.beginPath();
      context.ellipse(-bomb.radius * 0.72, -bomb.radius * 0.1, bomb.radius * 0.72, bomb.radius * 0.36, -0.55, 0, Math.PI * 2);
      context.ellipse(bomb.radius * 0.72, -bomb.radius * 0.1, bomb.radius * 0.72, bomb.radius * 0.36, 0.55, 0, Math.PI * 2);
      context.fill();
      context.fillStyle = "rgba(190, 110, 255, 0.92)";
      context.fillRect(-bomb.radius * 0.24, -bomb.radius * 0.65, bomb.radius * 0.48, bomb.radius * 1.3);
      context.fillStyle = "#ffffff";
      context.fillRect(-bomb.radius * 0.15, -bomb.radius * 0.94, bomb.radius * 0.3, bomb.radius * 0.3);
      context.fillStyle = "rgba(96, 207, 255, 0.84)";
      context.fillRect(-bomb.radius * 0.1, bomb.radius * 0.64, bomb.radius * 0.2, bomb.radius * 0.62);
    } else {
      const progress = Math.min((performance.now() - bomb.explodedAt) / 620, 1);
      const opacity = 1 - progress;
      const radius = 18 + progress * MINI_GAME_FAIRY_BOMB_RADIUS;
      context.strokeStyle = `rgba(96, 207, 255, ${opacity})`;
      context.lineWidth = 3;
      context.shadowColor = "rgba(190, 110, 255, 0.8)";
      context.shadowBlur = 16;
      context.beginPath();
      context.arc(0, 0, radius, 0, Math.PI * 2);
      context.stroke();
      context.fillStyle = `rgba(190, 110, 255, ${opacity})`;
      for (let index = 0; index < 8; index += 1) {
        const angle = (Math.PI * 2 * index) / 8;
        context.fillRect(Math.cos(angle) * radius * 0.65, Math.sin(angle) * radius * 0.65, 5, 5);
      }
    }

    context.restore();
  });
}

function drawForestObstacles(context) {
  miniGameState.obstacles.forEach((obstacle) => {
    if (obstacle.isDestroyed) {
      return;
    }

    if (obstacle.type === "tree") {
      drawPixelTree(context, obstacle);
      return;
    }

    drawPixelMushroom(context, obstacle);
  });
}

function drawPixelTree(context, obstacle) {
  const size = obstacle.radius;
  const unit = Math.max(3, size / 5);
  const knockProgress = obstacle.isKnocked
    ? Math.min((performance.now() - obstacle.knockStartedAt) / MINI_GAME_BOSS_TREE_KNOCK_MS, 1)
    : 0;
  const fallAngle = knockProgress * (Math.PI / 2.2) * (obstacle.knockDirection || 1);

  context.save();
  context.translate(obstacle.x, obstacle.y);
  context.rotate(fallAngle);
  context.shadowColor = "rgba(156, 255, 156, 0.25)";
  context.shadowBlur = 8;
  context.fillStyle = obstacle.isKnocked ? "rgba(92, 68, 38, 0.58)" : "rgba(92, 68, 38, 0.88)";
  context.fillRect(-unit * 0.7, -unit * 0.2, unit * 1.4, unit * 4);
  context.fillStyle = obstacle.isKnocked ? "rgba(156, 255, 156, 0.36)" : "rgba(156, 255, 156, 0.62)";
  context.fillRect(-unit * 2.3, -unit * 2.5, unit * 4.6, unit * 1.3);
  context.fillRect(-unit * 1.7, -unit * 3.5, unit * 3.4, unit * 1.2);
  context.fillRect(-unit * 1, -unit * 4.3, unit * 2, unit);
  context.strokeStyle = "rgba(156, 255, 156, 0.75)";
  context.lineWidth = 1;
  context.strokeRect(-unit * 2.3, -unit * 2.5, unit * 4.6, unit * 1.3);
  drawObstacleHealthBar(context, obstacle, unit, -unit * 5.3);
  context.restore();
}

function drawObstacleHealthBar(context, obstacle, unit, yOffset) {
  if (obstacle.isKnocked || obstacle.isDestroyed || obstacle.maxHealth <= 1) {
    return;
  }

  const width = unit * 5.2;
  const height = 3;
  const healthRatio = Math.max(0, (obstacle.health ?? obstacle.maxHealth) / obstacle.maxHealth);

  context.fillStyle = "rgba(0, 0, 0, 0.7)";
  context.fillRect(-width / 2, yOffset, width, height);
  context.fillStyle = "#9cff9c";
  context.fillRect(-width / 2, yOffset, width * healthRatio, height);
  context.strokeStyle = "rgba(255, 255, 255, 0.55)";
  context.lineWidth = 1;
  context.strokeRect(-width / 2, yOffset, width, height);
}

function drawPixelMushroom(context, obstacle) {
  const size = obstacle.radius;
  const unit = Math.max(3, size / 5);

  context.save();
  context.translate(obstacle.x, obstacle.y);
  context.shadowColor = "rgba(156, 255, 156, 0.25)";
  context.shadowBlur = 8;
  context.fillStyle = "rgba(228, 238, 190, 0.84)";
  context.fillRect(-unit, -unit * 0.2, unit * 2, unit * 2.4);
  context.fillStyle = "rgba(156, 255, 156, 0.72)";
  context.fillRect(-unit * 3, -unit * 2.2, unit * 6, unit * 1.3);
  context.fillRect(-unit * 2, -unit * 3, unit * 4, unit);
  context.fillStyle = "rgba(0, 0, 0, 0.62)";
  context.fillRect(-unit * 1.8, -unit * 2, unit, unit * 0.6);
  context.fillRect(unit * 0.8, -unit * 2.6, unit * 0.8, unit * 0.6);
  context.strokeStyle = "rgba(156, 255, 156, 0.78)";
  context.lineWidth = 1;
  context.strokeRect(-unit * 3, -unit * 2.2, unit * 6, unit * 1.3);
  drawObstacleHealthBar(context, obstacle, unit, -unit * 3.8);
  context.restore();
}

function drawTurret(context) {
  const turret = getTurretPosition();
  const muzzle = {
    x: turret.x,
    y: turret.y - 16,
  };
  const barrelLength = 34;
  const barrelWidth = 9;
  const barrelEnd = {
    x: muzzle.x + Math.cos(miniGameState.turretAngle) * barrelLength,
    y: muzzle.y + Math.sin(miniGameState.turretAngle) * barrelLength,
  };
  const isGolden = miniGameState.level >= 5;

  context.save();
  context.shadowColor = isGolden ? "rgba(255, 215, 82, 0.9)" : "rgba(255, 72, 72, 0.38)";
  context.shadowBlur = isGolden ? 24 : 12;

  if (isGolden) {
    const pulse = 1 + Math.sin(performance.now() / 120) * 0.06;
    context.strokeStyle = "rgba(255, 215, 82, 0.9)";
    context.lineWidth = 3;
    context.beginPath();
    context.ellipse(turret.x, turret.y - 4, 52 * pulse, 38 * pulse, 0, 0, Math.PI * 2);
    context.stroke();
  }

  context.fillStyle = "rgba(245, 232, 198, 0.96)";
  context.fillRect(turret.x - 13, turret.y - 2, 26, 30);
  context.fillStyle = isGolden ? "#ffd64a" : "#d93131";
  context.fillRect(turret.x - 38, turret.y - 16, 76, 16);
  context.fillRect(turret.x - 27, turret.y - 27, 54, 13);
  context.fillStyle = "#ffffff";
  context.fillRect(turret.x - 24, turret.y - 20, 10, 6);
  context.fillRect(turret.x + 12, turret.y - 26, 9, 7);
  context.fillRect(turret.x - 2, turret.y - 17, 7, 5);

  context.strokeStyle = "#ffffff";
  context.lineWidth = 2;
  context.strokeRect(turret.x - 38, turret.y - 16, 76, 16);
  context.strokeRect(turret.x - 12, turret.y - 2, 24, 28);
  context.beginPath();
  context.arc(turret.x, turret.y - 16, 15, 0, Math.PI * 2);
  context.stroke();
  context.beginPath();
  context.moveTo(turret.x, turret.y - 16);
  context.lineTo(barrelEnd.x, barrelEnd.y);
  context.lineWidth = barrelWidth;
  context.lineCap = "round";
  context.strokeStyle = "#eeeeee";
  context.stroke();
  context.beginPath();
  context.arc(turret.x, turret.y - 16, 6, 0, Math.PI * 2);
  context.lineWidth = 2;
  context.stroke();
  context.restore();
}

function drawShells(context) {
  miniGameState.shells.forEach((shell) => {
    const age = performance.now() - shell.startedAt;
    const opacity = Math.max(0, 1 - age / 650);

    context.save();
    context.translate(shell.x, shell.y);
    context.rotate(shell.rotation);
    context.globalAlpha = opacity;
    context.fillStyle = "rgba(255, 230, 150, 0.9)";
    context.fillRect(-3, -5, 6, 10);
    context.fillStyle = "rgba(255, 255, 255, 0.7)";
    context.fillRect(-2, -4, 4, 2);
    context.restore();
  });
}

function drawBullets(context) {
  context.save();
  context.shadowColor = "rgba(255, 255, 255, 0.65)";
  context.shadowBlur = 12;

  miniGameState.bullets.forEach((bullet) => {
    context.save();
    context.translate(bullet.x, bullet.y);
    context.rotate(Math.atan2(bullet.vy, bullet.vx) + Math.PI / 2);
    context.fillStyle = bullet.isGolden ? "#ffd64a" : "#d93131";
    context.fillRect(-5, -5, 10, 7);
    context.fillStyle = "#ffffff";
    context.fillRect(-2, -7, 4, 3);
    context.fillRect(-5, -2, 3, 2);
    context.fillRect(2, -3, 3, 2);
    context.fillStyle = "rgba(245, 232, 198, 0.96)";
    context.fillRect(-3, 2, 6, 8);
    context.restore();
  });

  context.restore();
}

function drawGoblins(context) {
  miniGameState.goblins.forEach((goblin) => {
    if (goblin.isBoss) {
      drawBossGoblin(context, goblin);
      return;
    }

    const step = Math.max(3, goblin.size / 5);
    const bounce = Math.sin(goblin.wobble) * 2;

    context.save();
    context.translate(goblin.x, goblin.y + bounce);
    context.fillStyle = "#9cff9c";
    context.shadowColor = "rgba(156, 255, 156, 0.45)";
    context.shadowBlur = 10;
    context.fillRect(-step * 2, -step, step * 4, step * 3);
    context.fillRect(-step * 3, 0, step, step);
    context.fillRect(step * 2, 0, step, step);
    context.fillRect(-step * 2, -step * 2, step, step);
    context.fillRect(step, -step * 2, step, step);
    context.fillStyle = "#000";
    if (goblin.isBig) {
      const mouthOpen = Math.sin(performance.now() / 120 + goblin.wobble) > 0;
      context.fillStyle = difficultyEyeColor(goblin);
      context.fillRect(-step * 1.35, -step * 0.1, step, step * 0.8);
      context.fillRect(step * 0.35, -step * 0.1, step, step * 0.8);
      context.fillStyle = "#000";
      context.fillRect(-step * 1.5, step * 1.1, step * 3, mouthOpen ? step * 1.2 : step * 0.45);
      context.fillStyle = "#ffffff";
      context.fillRect(-step, step * 1.1, step * 0.55, step * 0.45);
      context.fillRect(step * 0.45, step * 1.1, step * 0.55, step * 0.45);
    } else {
      context.fillRect(-step, 0, step, step);
      context.fillRect(step, 0, step, step);
    }
    context.fillStyle = "rgba(255, 255, 255, 0.82)";
    context.fillRect(-step * 2, step * 2, step, step);
    context.fillRect(step, step * 2, step, step);

    if (goblin.maxHealth > 1) {
      const barWidth = step * 5;
      const healthRatio = goblin.health / goblin.maxHealth;
      context.fillStyle = "rgba(255, 255, 255, 0.75)";
      context.fillRect(-barWidth / 2, -step * 4.2, barWidth, 3);
      context.fillStyle = "#ff4040";
      context.fillRect(-barWidth / 2, -step * 4.2, barWidth * healthRatio, 3);
    }

    context.restore();
  });
}

function drawBossGoblin(context, boss) {
  const step = Math.max(6, boss.size / 7);
  const mouthOpen = Math.sin(performance.now() / 90 + boss.wobble) > -0.25;

  context.save();
  context.translate(boss.x, boss.y);
  context.fillStyle = "#5dff82";
  context.shadowColor = "rgba(177, 92, 255, 0.8)";
  context.shadowBlur = 18;
  context.fillRect(-step * 3.6, -step * 1.6, step * 7.2, step * 4.4);
  context.fillRect(-step * 4.5, -step * 0.2, step, step * 1.2);
  context.fillRect(step * 3.5, -step * 0.2, step, step * 1.2);
  context.fillRect(-step * 2.8, -step * 3, step * 1.2, step * 1.5);
  context.fillRect(step * 1.6, -step * 3, step * 1.2, step * 1.5);
  context.fillStyle = "#b15cff";
  context.fillRect(-step * 2.2, -step * 0.65, step * 1.25, step);
  context.fillRect(step * 0.95, -step * 0.65, step * 1.25, step);
  context.fillStyle = "#ff4040";
  context.fillRect(-step * 1.95, -step * 0.38, step * 0.6, step * 0.45);
  context.fillRect(step * 1.25, -step * 0.38, step * 0.6, step * 0.45);
  context.fillStyle = "#000000";
  context.fillRect(-step * 2.1, step * 1.15, step * 4.2, mouthOpen ? step * 1.35 : step * 0.55);
  context.fillStyle = "#ffffff";
  context.fillRect(-step * 1.55, step * 1.15, step * 0.55, step * 0.55);
  context.fillRect(step, step * 1.15, step * 0.55, step * 0.55);

  const barWidth = Math.min(window.innerWidth * 0.42, 220);
  const healthRatio = boss.health / boss.maxHealth;
  context.shadowBlur = 0;
  context.fillStyle = "rgba(0, 0, 0, 0.78)";
  context.fillRect(-barWidth / 2, -step * 4.6, barWidth, 8);
  context.fillStyle = "#ff4040";
  context.fillRect(-barWidth / 2, -step * 4.6, barWidth * healthRatio, 8);
  context.strokeStyle = "#ffffff";
  context.lineWidth = 1;
  context.strokeRect(-barWidth / 2, -step * 4.6, barWidth, 8);
  context.restore();
}

function difficultyEyeColor(goblin) {
  if (goblin.maxHealth >= 5) {
    return "#b15cff";
  }

  if (goblin.maxHealth >= 4) {
    return "#ff4040";
  }

  return "#ffe45c";
}

function drawExplosions(context) {
  const now = performance.now();

  miniGameState.explosions.forEach((explosion) => {
    const age = now - explosion.startedAt;
    const duration = explosion.type === "golden" ? 720 : MINI_GAME_DEATH_ANIMATION_MS;
    const progress = age / duration;
    const isGolden = explosion.type === "golden";

    context.save();
    context.fillStyle = isGolden ? `rgba(255, 213, 74, ${1 - progress})` : `rgba(156, 255, 156, ${1 - progress})`;
    context.shadowColor = isGolden ? "rgba(255, 213, 74, 0.9)" : "rgba(156, 255, 156, 0.7)";
    context.shadowBlur = isGolden ? 24 : 12;

    if (isGolden) {
      context.beginPath();
      context.arc(explosion.x, explosion.y, MINI_GAME_GOLDEN_APPLE_RADIUS * progress, 0, Math.PI * 2);
      context.strokeStyle = `rgba(255, 213, 74, ${1 - progress})`;
      context.lineWidth = 4;
      context.stroke();
    }

    explosion.pieces.forEach((piece) => {
      const x = explosion.x + piece.vx * progress * (isGolden ? 0.75 : 0.55);
      const y = explosion.y + piece.vy * progress * (isGolden ? 0.75 : 0.55);
      context.fillRect(x, y, Math.max(2, explosion.size / (isGolden ? 18 : 5)), Math.max(2, explosion.size / (isGolden ? 18 : 5)));
    });

    context.restore();
  });
}

// Types the friendly wizard terminal messages into the Loading scene.
async function playLoadingSequence() {
  const loadingScene = document.querySelector('[data-scene="Loading"]');
  const output = document.querySelector("#loading-output");

  if (!loadingScene || !output) {
    return;
  }

  output.textContent = "";

  for (const message of LOADING_MESSAGES) {
    await waitForLandscape();

    const line = createTerminalLine(message);
    const cursor = createCursor();

    output.append(line);
    line.append(cursor);

    for (const character of message.text) {
      await waitForLandscape();
      startTypingSound();
      cursor.before(character);
      await waitWhileLandscape(LOADING_TYPE_SPEED_MS);
    }

    stopTypingSound();
    cursor.remove();
    addAnimatedEllipsis(line, message.text);
    await waitWhileLandscape(message.pauseAfter ?? LOADING_LINE_PAUSE_MS);

    if (message.clearAfter) {
      output.textContent = "";
      await waitWhileLandscape(LOADING_LINE_PAUSE_MS);
    }
  }

  loadingScene.classList.add("is-complete");
  await playSignalStrengthSequence(output);
}

async function prepareLoadingScene() {
  const terminalPanel = document.querySelector(".terminal-panel");
  const rotateMessage = document.querySelector("#rotate-phone-message");
  const transmissionMessage = document.querySelector("#transmission-message");
  const wizardHologram = document.querySelector("#wizard-hologram");
  const wizardSpeech = document.querySelector("#wizard-speech");
  const wizardQuestion = document.querySelector("#wizard-question");
  const miniGameIntro = document.querySelector("#mini-game-intro");
  const miniGameCanvas = document.querySelector("#mini-game-canvas");

  if (
    !terminalPanel ||
    !rotateMessage ||
    !transmissionMessage ||
    !wizardHologram ||
    !wizardSpeech ||
    !wizardQuestion ||
    !miniGameIntro ||
    !miniGameCanvas
  ) {
    return;
  }

  hideElement(terminalPanel);
  hideElement(rotateMessage);
  hideElement(transmissionMessage);
  hideElement(wizardHologram);
  hideElement(wizardSpeech);
  hideElement(wizardQuestion);
  hideElement(miniGameIntro);
  hideElement(miniGameCanvas);
  wizardHologram.classList.remove("is-visible");
  wizardSpeech.classList.remove("is-visible");
  wizardQuestion.classList.remove("is-fading");
  terminalPanel.classList.remove("is-visible");
  await wait(INITIAL_BLACK_SCREEN_MS);

  const updateLoadingOrientation = () => {
    loadingState.isLandscape = getOrientation() === ORIENTATION.LANDSCAPE;

    if (!loadingState.isLandscape) {
      stopTypingSound();
      showElement(rotateMessage);
      hideLoadingSurfaces();
      return;
    }

    hideElement(rotateMessage);

    if (loadingState.activeSurface) {
      showActiveSurface();
    }

    if (loadingState.activeSurface === "terminal") {
      terminalPanel.classList.add("is-visible");
    }

    window.dispatchEvent(new Event("lostrelic:landscape"));
  };

  const startWhenLandscape = async () => {
    if (loadingState.sequenceStarted || !loadingState.isLandscape) {
      return;
    }

    loadingState.sequenceStarted = true;

    if (TEST_START_AT_MINI_GAME_INTRO) {
      await playMiniGameIntroSequence();
      return;
    }

    await playWizardQuestionSequence();
    await waitWhileLandscape(POST_ROTATION_DELAY_MS);

    loadingState.terminalStarted = true;
    loadingState.activeSurface = "title";
    showElement(terminalPanel);
    await waitWhileLandscape(TITLE_ONLY_DELAY_MS);

    loadingState.activeSurface = "terminal";
    revealElementWithFade(terminalPanel);
    await waitWhileLandscape(TERMINAL_FADE_IN_MS);
    playLoadingSequence();
  };

  const handleOrientationChange = () => {
    updateLoadingOrientation();
    resizeMiniGameCanvas();
    startWhenLandscape();
  };

  window.addEventListener("resize", handleOrientationChange);
  window.addEventListener("orientationchange", handleOrientationChange);
  handleOrientationChange();
}

function bootstrap() {
  const app = document.querySelector("#app");
  const sceneManager = new SceneManager(app);

  updateViewportSize();
  window.addEventListener("resize", updateViewportSize);
  window.addEventListener("orientationchange", updateViewportSize);

  document.querySelectorAll("[data-scene]").forEach((sceneElement) => {
    sceneManager.register(sceneElement.dataset.scene, sceneElement);
  });

  sceneManager.show("Loading");
  prepareLoadingScene();

  lockViewportInput();
  document.addEventListener("pointerdown", unlockGameAudio, { passive: true });

  window.TheLostRelic = {
    audio: audioState,
    loadingMessages: LOADING_MESSAGES,
    sceneManager,
    getOrientation,
    scenes: SCENE_NAMES,
  };
}

document.addEventListener("DOMContentLoaded", bootstrap);

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
const TITLE_ONLY_DELAY_MS = 1000;
const TERMINAL_FADE_IN_MS = 900;
const TEMPORAL_BRIDGE_PAUSE_MS = 1600;
const SIGNAL_FLUCTUATE_MS = 2000;
const SIGNAL_LOCK_DELAY_MS = 1000;
const TRANSMISSION_BLINK_COUNT = 3;
const TRANSMISSION_BLINK_INTERVAL_MS = 1000;
const OPENING_WIZARD_RUN_MS = 2650;
const OPENING_WIZARD_IDLE_BEFORE_DIALOGUE_MS = 0;
const OPENING_WIZARD_DIALOGUE_PAUSE_MS = 1350;
const OPENING_MOUNTAIN_EXPLOSION_MS = 1200;
const OPENING_TAP_BUBBLE_DELAY_MS = 420;
const OPENING_TAP_BUBBLE_INTERVAL_MS = 1100;
const OPENING_TAP_BUBBLE_MIN_INTERVAL_MS = 560;
const OPENING_TAP_BUBBLE_WINDOW_MS = 2200;
const OPENING_TAP_TUTORIAL_READY_MS = 1500;
const OPENING_TAP_SUCCESS_START_MS = 700;
const OPENING_TRAVEL_HUD_AFTER_TUTORIAL_MS = 900;
const OPENING_TRAVEL_HUD_COMPLETE_MS = 22000;
const OPENING_GAME_START_FADE_MS = 800;
const OPENING_PATH_FAIL_RESTART_MS = 2800;
const OPENING_RECURRING_EXPLOSION_MIN_MS = 10000;
const OPENING_RECURRING_EXPLOSION_MAX_MS = 15000;
const WIZARD_HOLOGRAM_DELAY_MS = 450;
const WIZARD_HOLOGRAM_ARRIVAL_MS = 1150;
const WIZARD_SPEECH_TYPE_SPEED_MS = 85;
const OPENING_WIZARD_DIALOGUE_TYPE_SPEED_MS = 26;
const WIZARD_SPEECH_PAUSE_MS = 1100;
const WIZARD_EXIT_DELAY_MS = 1000;
const WIZARD_EXIT_FADE_MS = 800;
const WIZARD_SPEECH_TEXT = "oi mate";
const WIZARD_SECOND_SPEECH_TEXT = "Shoot these fucking things will ya..";
const OPENING_WIZARD_FIRST_DIALOGUE =
  "hello lad im the retro wizard, a gang of goblins stole my stash and i need your help getting to boomtown to retrieve it";
const OPENING_WIZARD_SECOND_DIALOGUE =
  "as you can see lad things are heating up quite quick, we best get going its just up ahead";
const OPENING_WIZARD_TRAVEL_DIALOGUE = [
  "this is the fifth time these goblins have taken my shit this week im gonna kill em",
  "oh and also there's a few challenges you gotta do to get me to boom quicker cheers, first ones coming up now",
];
const OPENING_WIZARD_RESTART_DIALOGUE = [
  "failed? ah its ok mate we all mistakes, even if it was absolutely stupid",
  "im high almost all the time and not even i fuck that up but ok",
  "are you fucking serious",
];
const TYPING_SOUND_URL = "assets/code-typing-soundfx.wav";
const RETRO_FX_SOUND_URL = "assets/retro-fx-2.mp3";
const PHONE_RING_SOUND_URL = "assets/phone-ring-sfx.wav";
const PHONE_PICKUP_SOUND_URL = "assets/phone-pickup-sfx.wav";
const GANG_GOBLINS_MUSIC_URL = "assets/lonely-for-game.m4a";
const RETRO_PHONE_IMAGE_URL = "assets/retro-phone.png";
const JOHN_CHARACTER_IMAGE_URL = "assets/redneck-scruff-character.png";
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
const MINI_GAME_SMOKE_DEATH_GAP_MS = 10000;
const MINI_GAME_SMOKE_DEATH_BLAST_RADIUS = 112;
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
const MINI_GAME_VICTORY_HOLD_MS = 1700;
const MINI_GAME_VICTORY_FADE_MS = 1200;
const POST_GAME_PHONE_TRANSITION_MS = 800;
const POST_GAME_PHONE_FADE_MS = 900;
const POST_GAME_PHONE_RING_INTERVAL_MS = 3600;
const POST_GAME_PHONE_RING_DURATION_MS = 1700;
const POST_GAME_PHONE_PICKUP_FADE_MS = 900;
const PHONE_DIALOGUE_LINE_DRAW_MS = 360;
const PHONE_DIALOGUE_TYPE_SPEED_MS = 14;
const PHONE_CHALLENGE_PROMPT_FADE_MS = 360;
const PHONE_CHALLENGE_ACCEPT_FADE_MS = 850;
const CUP_TABLE_SCENE_DELAY_MS = 1000;
const CUP_TABLE_SCENE_FADE_MS = 900;
const CUP_TABLE_COUNT = 20;
const CUP_TABLE_JOHN_DELAY_MS = 1000;
const CUP_TABLE_JOHN_TYPE_SPEED_MS = 20;
const CUP_TABLE_JOHN_LINE_HOLD_MS = 3200;
const CUP_TABLE_JOHN_FINAL_HOLD_MS = 900;
const CUP_TABLE_JOHN_FINAL_LINE = "Ok im just gonna pick a cup now quick";
const CUP_TABLE_SELECTION_DURATION_MS = 7200;
const CUP_TABLE_SELECTION_RED_START_MS = 3200;
const CUP_TABLE_SELECTION_RED_RAMP_MS = 2500;
const CUP_TABLE_SELECTION_FINAL_FLASH_MS = 500;
const CUP_TABLE_SELECTION_PEEK_MS = 2000;
const CUP_TABLE_PICK_PROMPT_LINE = "ok now time to pick yours";
const CUP_TABLE_DRINK_OPTIONS = ["Rio", "Rubicon", "Monster", "Red Bull", "Fanta", "Fanta Lemon", "Coke", "Diet Coke"];
const CUP_TABLE_POUR_MS = 2300;
const CUP_TABLE_POST_POUR_TYPE_SPEED_MS = 22;
const CUP_TABLE_POST_POUR_HOLD_MS = 4300;
const CUP_TABLE_DRINK_CHOICE_MS = 10000;
const CUP_TABLE_DRINK_ANIMATION_MS = 2000;
const CUP_TABLE_DRINK_RESULT_HOLD_MS = 1200;
const CUP_TABLE_JOHN_TURN_MS = 2000;
const CUP_TABLE_JOHN_DRINK_MS = 1800;
const CUP_TABLE_FAIL_FADE_MS = 900;
const CUP_TABLE_RETRY_INTRO_TYPE_SPEED_MS = 22;
const CUP_TABLE_RETRY_INTRO_HOLD_MS = 900;
const CUP_TABLE_JOHN_WIN_BLACKOUT_MS = 2000;
const CUP_TABLE_JOHN_WIN_TEXT_FADE_MS = 900;
const CUP_TABLE_RETURN_FADE_MS = 900;
const OPENING_SPEED_BOOST_DIALOGUE =
  "ok bro here's your speed boost get here quick bc LIONS DEN IS BACK";
const OPENING_SPEED_BOOST_TYPE_SPEED_MS = 20;
const OPENING_SPEED_BOOST_HOLD_MS = 850;
const OPENING_SPEED_BOOST_DURATION_MS = 5200;
const OPENING_SNIFFER_DOG_DIALOGUE = "\"Shit, sniffer dogs.\"";
const OPENING_SNIFFER_DOG_TYPE_SPEED_MS = 24;
const OPENING_DOG_TUTORIAL_TEXT = "Swipe to the left";
const OPENING_DOG_LANES = ["left", "middle", "right"];
const OPENING_DOG_SPAWN_INTERVAL_MS = 2700;
const OPENING_DOG_RUN_MS = 2100;
const OPENING_DOG_COLLISION_MS = 1640;
const OPENING_DOG_CHALLENGE_COMPLETE_MS = 30000;
const OPENING_DOG_CHALLENGE_BUBBLE_DELAY_MS = 1250;
const OPENING_DOG_CHALLENGE_BUBBLE_MIN_MS = 780;
const OPENING_AFTER_DOG_WIZARD_LINE_1 = "Oof, that was close";
const OPENING_AFTER_DOG_JOHN_LINE =
  "Oh, I forgot to mention, I put some crazy stuff into all of those cups, by the way, not just one.";
const OPENING_AFTER_DOG_WIZARD_LINE_2 = "ffs john";
const FINAL_CHALLENGE_TITLE = "the final challenge";
const FINAL_CHALLENGE_FADE_IN_MS = 3000;
const FINAL_FPS_ROOM_SIZE = 2.9;
const FINAL_FPS_LOOK_TUTORIAL_TEXT = "Swipe your finger to look around the screen";
const FINAL_FPS_MOVE_TUTORIAL_TEXT = "Use the cursor analog to move around";
const FINAL_FPS_WIZARD_DIALOGUE = "Well, where are we?";
const FINAL_FPS_GUN_DISCOVERY_DIALOGUE = "oh fuck yes";
const FINAL_FPS_WIZARD_TYPE_SPEED_MS = 24;
const FINAL_FPS_EYE_OPEN_MS = 1700;
const FINAL_FPS_FREE_LOOK_BEFORE_WIZARD_MS = 3000;
const FINAL_FPS_WIZARD_HOLD_MS = 2000;
const FINAL_FPS_DOOR_PRE_DELAY_MS = 2600;
const FINAL_FPS_DOOR_WARP_MS = 4700;
const FINAL_FPS_DOOR_WALL = "east";
const FINAL_FPS_DOOR_POSITION = FINAL_FPS_ROOM_SIZE * 0.38;
const FINAL_FPS_DOOR_HALF_WIDTH = FINAL_FPS_ROOM_SIZE * 0.075;
const FINAL_FPS_PAINTING_TEXTURE_WIDTH = 96;
const FINAL_FPS_PAINTING_TEXTURE_MAX_HEIGHT = 160;
const FINAL_FPS_INSPECTABLE_PAINTINGS = ["boomtownLionsDen", "boomtownHydro", "boomtownSpectrum", "boomtownGrandCentral"];
const FINAL_FPS_MAGAZINE_SIZE = 30;
const FINAL_FPS_SHOT_INTERVAL_MS = 92;
const FINAL_FPS_MUZZLE_FLASH_MS = 58;
const FINAL_FPS_BULLET_MARK_MS = 9000;
const FINAL_FPS_PORTAL_TRANSITION_MS = 450;
const FINAL_FPS_HEDGE_CORRIDOR_WIDTH = 1.45;
const FINAL_FPS_CORRIDOR_LIGHT_INTERVAL = 5.5;
const FINAL_FPS_PARTY_GOBLIN_SHEET_URL = "assets/party-goblin-run-sheet.png";
const FINAL_FPS_PARTY_GOBLIN_COLUMNS = 5;
const FINAL_FPS_PARTY_GOBLIN_ROWS = 3;
const FINAL_FPS_PARTY_GOBLIN_START_DELAY_MS = 5000;
const FINAL_FPS_PARTY_GOBLIN_SPAWN_MS = 1650;
const FINAL_FPS_PARTY_GOBLIN_WAVE_MS = 20000;
const FINAL_FPS_PARTY_GOBLIN_TUTORIAL_LOCK_MS = 2000;
const FINAL_FPS_PARTY_GOBLIN_DEATH_MS = 1000;
const FINAL_FPS_PARTY_GOBLIN_HEALTH = 5;
const FINAL_FPS_PARTY_GOBLIN_TOUCH_DISTANCE = 0.48;
const FINAL_FPS_CORRIDOR_FOREST_TRIGGER_Y = -50;
const FINAL_FPS_FOREST_TRANSITION_MS = 1800;
const FINAL_FPS_FOREST_PATH_HALF_WIDTH = 0.78;
const FINAL_FPS_FOREST_WALK_LIMIT = 2.9;
const FINAL_FPS_FOREST_VIEW_DISTANCE = 48;
const FINAL_FPS_FOREST_FIREWORK_MIN_MS = 5000;
const FINAL_FPS_FOREST_FIREWORK_MAX_MS = 10000;
const FINAL_FPS_FOREST_INTRO_LINES = ["Woah, where are we?", "Is that Boomtown up ahead?"];
const FINAL_FPS_FOREST_WIZARD_CHAOS_LINE = "Oh fuck yes. Fuck yes. I'm gonna kill all these fucking goblins right now.";
const FINAL_FPS_FOREST_DIALOGUE_TYPE_SPEED_MS = 22;
const FINAL_FPS_FOREST_DIALOGUE_HOLD_MS = 1800;
const FINAL_FPS_FOREST_INTRO_GOBLIN_COUNT = 4;
const FINAL_FPS_FOREST_GOBLIN_SPAWN_MS = 1250;
const FINAL_FPS_FOREST_CHAOS_GOBLIN_SPAWN_MS = 680;
const FINAL_FPS_FOREST_CHAOS_GOBLIN_HEALTH = 2;
const FINAL_FPS_FOREST_CHAOS_MAX_GOBLINS = 6;
const FINAL_FPS_FOREST_POWERUP_RADIUS = 0.72;
const FINAL_FPS_FOREST_POWERUP_ACTIVATED_HOLD_MS = 950;
const FINAL_FPS_FOREST_WAYPOINT_OPTIONS = [100, 125, 150];
const FINAL_FPS_FOREST_WAYPOINT_VISUAL_DISTANCE_MULTIPLIER = 2.25;
const FINAL_FPS_FOREST_WAYPOINT_REVEAL_MS = 900;
const FINAL_FPS_FOREST_BOSS_SHEET_URL = "assets/mushroom-boss-sheet.png";
const FINAL_FPS_FOREST_BOSS_ATTACK_SHEET_URL = "assets/mushroom-boss-attack-sheet.png";
const FINAL_FPS_FOREST_BOSS_JUMP_SHEET_URL = "assets/mushroom-boss-jump-sheet.png";
const FINAL_FPS_FOREST_BOSS_STUN_SHEET_URL = "assets/mushroom-boss-stun-sheet.png";
const FINAL_FPS_FOREST_BOSS_DEATH_SHEET_URL = "assets/mushroom-boss-death-sheet.png";
const FINAL_FPS_FOREST_BOSS_SHEET_FRAMES = 10;
const FINAL_FPS_FOREST_BOSS_ATTACK_SHEET_FRAMES = 6;
const FINAL_FPS_FOREST_BOSS_JUMP_SHEET_FRAMES = 4;
const FINAL_FPS_FOREST_BOSS_STUN_SHEET_FRAMES = 8;
const FINAL_FPS_FOREST_BOSS_DEATH_SHEET_FRAMES = 6;
const FINAL_FPS_FOREST_BOSS_STUN_FRAMES = 4;
const FINAL_FPS_FOREST_BOSS_GETUP_FRAMES = 4;
const FINAL_FPS_FOREST_BOSS_IDLE_FRAMES = 4;
const FINAL_FPS_FOREST_BOSS_WALK_FRAMES = 6;
const FINAL_FPS_FOREST_BOSS_WALK_SPEED = 1.15;
const FINAL_FPS_FOREST_BOSS_IDLE_DISTANCE = 2.45;
const FINAL_FPS_FOREST_BOSS_SCALE = 2.45;
const FINAL_FPS_FOREST_BOSS_BLOCK_DISTANCE = 2.25;
const FINAL_FPS_FOREST_BOSS_ATTACK_DELAY_MS = 4000;
const FINAL_FPS_FOREST_BOSS_TUTORIAL_LOCK_MS = 2000;
const FINAL_FPS_FOREST_BOSS_GRACE_MS = 1000;
const FINAL_FPS_FOREST_BOSS_ROCKET_INTERVAL_MS = 1000;
const FINAL_FPS_FOREST_BOSS_ROCKET_SPEED = 5.2;
const FINAL_FPS_FOREST_BOSS_ROCKET_HIT_DISTANCE = 0.46;
const FINAL_FPS_FOREST_BOSS_ROCKET_LIFETIME_MS = 3600;
const FINAL_FPS_FOREST_BOSS_MAX_HEALTH = 760;
const FINAL_FPS_FOREST_BOSS_HIT_DAMAGE = 1;
const FINAL_FPS_FOREST_BOSS_ATTACK_DURATION_MS = 13000;
const FINAL_FPS_FOREST_BOSS_POST_ATTACK_IDLE_MS = 5000;
const FINAL_FPS_FOREST_BOSS_STUN_MS = 5000;
const FINAL_FPS_FOREST_BOSS_GETUP_MS = 950;
const FINAL_FPS_FOREST_BOSS_DEATH_MS = 1800;
const FINAL_FPS_FOREST_BOSS_DEATH_HOLD_MS = 2300;
const FINAL_FPS_FOREST_BOSS_DEATH_FADE_MS = 800;
const FINAL_FPS_FOREST_BOSS_ATTACK_DELAY_BY_PHASE_MS = [4000, 3600, 3300];
const FINAL_FPS_FOREST_BOSS_JUMP_DELAY_BY_PHASE_MS = [3200, 2200, 1300];
const FINAL_FPS_FOREST_BOSS_JUMP_MS = 1120;
const FINAL_FPS_FOREST_BOSS_JUMP_TUTORIAL_LOCK_MS = 2000;
const FINAL_FPS_FOREST_BOSS_SHOCKWAVE_SPEED = 5.6;
const FINAL_FPS_FOREST_BOSS_SHOCKWAVE_CLOSE_DISTANCE = 1.4;
const FINAL_FPS_FOREST_BOSS_SHOCKWAVE_HIT_DISTANCE = 0.52;
const FINAL_FPS_FOREST_BOSS_SHOCKWAVE_DODGE_MS = 1250;
const FINAL_FPS_FOREST_BOSS_SHOCKWAVE_PROMPT_MS = 2000;
const FINAL_FPS_PLAYER_JUMP_MS = 760;
const FINAL_FPS_FOREST_KILL_COMBO_WINDOW_MS = 2600;
const FINAL_FPS_FOREST_KILL_COMBO_DISPLAY_MS = 1700;
const FINAL_FPS_FOREST_KILL_COMBO_LINES = [
  "DOING GREAT",
  "NOT BAD",
  "GETTING WARM",
  "PROPER SHOOTING",
  "GOBLIN PROBLEM",
  "NO MERCY",
  "WIZARD RAMPAGE",
  "ABSOLUTE CARNAGE",
  "GOBLIN EXTINCTION",
  "UNSTOPPABLE",
  "FILTHY WORK",
  "LEVELS TO THIS",
  "SIT DOWN",
  "UN-FUCKING-BELIEVABLE, GENUINELY SIT DOWN",
];
const FINAL_FPS_CORRIDOR_RAY_MAX_DISTANCE = 44;
const FINAL_FPS_CORRIDOR_RAY_STEP = 0.055;
const FINAL_FPS_HEDGE_PAINTING_INTERVAL = 3.7;
const FINAL_FPS_HEDGE_PAINTING_HALF_WIDTH = 0.36;
const FINAL_FPS_PAINTING_URLS = {
  mona: "assets/fps-painting-mona-lisa.jpg",
  starry: "assets/fps-painting-starry-night.jpg",
  garden: "assets/fps-painting-garden.jpg",
  rain: "assets/fps-painting-rain.jpg",
  boomtownLionsDen: "assets/fps-boomtown-lions-den.jpg",
  boomtownHydro: "assets/fps-boomtown-hydro.jpg",
  boomtownSpectrum: "assets/fps-boomtown-spectrum.jpg",
  boomtownGrandCentral: "assets/fps-boomtown-grand-central.jpg",
  hedge01: "assets/fps-hedge-painting-01.jpg",
  hedge02: "assets/fps-hedge-painting-02.jpg",
  hedge03: "assets/fps-hedge-painting-03.jpg",
  hedge04: "assets/fps-hedge-painting-04.jpg",
  hedge05: "assets/fps-hedge-painting-05.jpg",
  hedge06: "assets/fps-hedge-painting-06.jpg",
  hedge07: "assets/fps-hedge-painting-07.jpg",
  hedge08: "assets/fps-hedge-painting-08.jpg",
  hedge09: "assets/fps-hedge-painting-09.jpg",
  hedge10: "assets/fps-hedge-painting-10.jpg",
  hedge11: "assets/fps-hedge-painting-11.jpg",
  hedge12: "assets/fps-hedge-painting-12.jpg",
};
const FINAL_FPS_HEDGE_PAINTINGS = [
  "mona",
  "starry",
  "garden",
  "rain",
  "hedge01",
  "hedge02",
  "hedge03",
  "hedge04",
  "hedge05",
  "hedge06",
  "hedge07",
  "hedge08",
  "hedge09",
  "hedge10",
  "hedge11",
  "hedge12",
];
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
const MINI_GAME_VOLCANO_START_MS = 15000;
const MINI_GAME_FINAL_VOLCANO_START_MS = 45000;
const MINI_GAME_VOLCANO_DURATION_MS = 10000;
const MINI_GAME_VOLCANO_ROCK_INTERVAL_MS = 1250;
const MINI_GAME_FAIRY_HUT_START_MS = 30000;
const MINI_GAME_FAIRY_SPAWN_MS = 2000;
const MINI_GAME_MAX_HELPER_FAIRIES = 5;
const MINI_GAME_TIKI_START_MS = 40000;
const MINI_GAME_TIKI_SPAWN_MS = 1500;
const MINI_GAME_INTRO_FADE_MS = 700;
const MINI_GAME_INSTRUCTION_SEQUENCE_MS = 11800;
const MINI_GAME_WIZARD_TIP_TEXT =
  "alright g, you got this all you gotta do is shoot the apples to upgrade your mushrooms and kill the goblins, i believe in you";
const MINI_GAME_WIZARD_SPRITE_URL = "assets/cute-wizard-design-wave-staff-aligned.png";
const MINI_GAME_WIZARD_TIP_DELAY_MS = 650;
const MINI_GAME_WIZARD_TIP_TYPE_SPEED_MS = 17;
const MINI_GAME_WIZARD_TIP_HOLD_MS = 3200;
const MINI_GAME_WIZARD_TIP_EXIT_MS = 760;
const TEST_START_AT_TRANSMISSION = false;
const TEST_START_AT_MINI_GAME_INTRO = false;
const TEST_START_AT_SKIP_LEVEL_FAIL = false;
const TEST_START_AT_PHONE_CHALLENGE = false;
const TEST_START_AT_SPEED_BOOST = false;
const TEST_START_AT_FINAL_CHALLENGE = false;
const TEST_FINAL_FPS_START_WITH_GUN_AND_PORTAL = false;
const TEST_FINAL_FPS_START_NEAR_FOREST = false;
const TEST_CUP_TABLE_FORCE_PLAYER_WIN = false;

const PHONE_DIALOGUE_LINES = [
  { speaker: "wizard", text: "hello?" },
  { speaker: "john", text: "ayyyy retro wiz my guy how you beeeen" },
  { speaker: "wizard", text: "omg no way is that scatty john?" },
  { speaker: "john", text: "in the flesh g" },
  { speaker: "wizard", text: "no wayyy bro, i haven't seen you since..." },
  {
    speaker: "john",
    text: "oh yes my friend, ive returned to the homegrounds for.. another... ultimate scatty style boomtown.",
  },
  { speaker: "wizard", text: "oh yes its a messy one already i love it. im on my way there now" },
  {
    speaker: "john",
    text: "thats the reason i was calling mate, saw this nitty gang of goblins and could recognise my boys stash from a mile away.",
  },
  { speaker: "john", text: "they're around hydro rn" },
  { speaker: "wizard", text: "fuck man, im on my way but still so far to go" },
  { speaker: "john", text: "you and your guy yeah beat me at this game and ill give you a fat speed boost" },
];

const CUP_TABLE_JOHN_LINES = [
  "So in this game we will take turns editing one of these drinks whilst not letting the other person know which cup you have selected to do so.",
  "We will then go round for round, each selecting a cup that isn't our own, and drinking.",
  "If we select the opponents cup and drink from it, we are eliminated.",
  "So if i drink the cup you selected, i lose. And then vice versa, makes sense?",
];

const CUP_TABLE_SELECTION_JOHN_PEEKS = [
  "hmmm i wonderrr",
  "oh yes thats it... so very devious",
  "haha, good luck chud",
];

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

const OPENING_FOREST_PROPS = [
  { type: "tree", x: 5, y: -6, size: 42, scale: 2.4, z: 4, alpha: 1 },
  { type: "tree", x: 94, y: -5, size: 44, scale: 2.5, z: 4, alpha: 1 },
  { type: "rock", x: 13, y: 3, size: 28, scale: 1.8, z: 5, alpha: 0.95 },
  { type: "rock", x: 84, y: 4, size: 25, scale: 1.7, z: 5, alpha: 0.95 },
  { type: "mushroom", x: 18, y: 2, size: 22, scale: 1.4, z: 5, alpha: 0.95 },
  { type: "mushroom", x: 79, y: 2, size: 20, scale: 1.25, z: 5, alpha: 0.95 },
  { type: "tree", x: 22, y: 10, size: 30, scale: 1.45, z: 3, alpha: 0.92 },
  { type: "tree", x: 76, y: 11, size: 30, scale: 1.42, z: 3, alpha: 0.92 },
  { type: "rock", x: 28, y: 13, size: 16, scale: 1.05, z: 3, alpha: 0.85 },
  { type: "rock", x: 70, y: 14, size: 16, scale: 1, z: 3, alpha: 0.85 },
  { type: "tree", x: 34, y: 24, size: 20, scale: 0.9, z: 2, alpha: 0.76 },
  { type: "tree", x: 66, y: 24, size: 20, scale: 0.9, z: 2, alpha: 0.76 },
  { type: "tree", x: 41, y: 34, size: 13, scale: 0.7, z: 1, alpha: 0.62 },
  { type: "tree", x: 59, y: 34, size: 13, scale: 0.7, z: 1, alpha: 0.62 },
];

const OPENING_FOREST_RUN_PROPS = [
  { type: "tree", startX: 43.8, endShift: -152, startY: 33, endDrop: 168, size: 12, endScale: 6.75, delay: 0, duration: 9.2 },
  { type: "tree", startX: 56.2, endShift: 152, startY: 33, endDrop: 168, size: 12, endScale: 6.7, delay: 0.9, duration: 9.25 },
  { type: "rock", startX: 45.6, endShift: -108, startY: 35, endDrop: 154, size: 8, endScale: 4.1, delay: 1.7, duration: 8.75 },
  { type: "tree", startX: 42.2, endShift: -178, startY: 32, endDrop: 176, size: 12, endScale: 7.2, delay: 2.45, duration: 9.55 },
  { type: "mushroom", startX: 54.8, endShift: 96, startY: 36, endDrop: 148, size: 7, endScale: 3.7, delay: 3.25, duration: 8.85 },
  { type: "tree", startX: 57.8, endShift: 178, startY: 32, endDrop: 176, size: 12, endScale: 7.25, delay: 4.05, duration: 9.6 },
  { type: "tree", startX: 45.1, endShift: -126, startY: 34, endDrop: 160, size: 11, endScale: 5.95, delay: 4.9, duration: 9.05 },
  { type: "rock", startX: 55.6, endShift: 118, startY: 35, endDrop: 156, size: 8, endScale: 4.25, delay: 5.7, duration: 8.8 },
  { type: "tree", startX: 41.4, endShift: -198, startY: 32, endDrop: 182, size: 12, endScale: 7.45, delay: 6.55, duration: 9.8 },
  { type: "mushroom", startX: 44.4, endShift: -112, startY: 36, endDrop: 150, size: 7, endScale: 3.85, delay: 7.35, duration: 8.95 },
  { type: "tree", startX: 54.4, endShift: 132, startY: 34, endDrop: 162, size: 11, endScale: 6.05, delay: 8.2, duration: 9.1 },
  { type: "tree", startX: 58.7, endShift: 202, startY: 32, endDrop: 184, size: 12, endScale: 7.6, delay: 9.05, duration: 9.9 },
];

const OPENING_SKY_STARS = [
  [5, 10, 0.7], [9, 26, 0.45], [13, 17, 0.55], [17, 7, 0.4], [20, 31, 0.5],
  [24, 20, 0.65], [28, 11, 0.45], [31, 30, 0.55], [35, 15, 0.5], [39, 6, 0.42],
  [43, 25, 0.58], [47, 12, 0.5], [51, 19, 0.62], [55, 7, 0.45], [59, 29, 0.54],
  [63, 15, 0.48], [67, 23, 0.6], [71, 8, 0.44], [75, 31, 0.5], [79, 17, 0.58],
  [83, 11, 0.46], [88, 26, 0.52], [92, 15, 0.4], [96, 30, 0.56], [11, 38, 0.38],
  [22, 42, 0.44], [33, 36, 0.36], [72, 39, 0.42], [86, 40, 0.34], [3, 34, 0.32],
  [7, 45, 0.3], [15, 41, 0.36], [18, 52, 0.28], [26, 47, 0.34], [30, 4, 0.3],
  [37, 44, 0.32], [42, 37, 0.34], [49, 43, 0.28], [53, 34, 0.35], [57, 47, 0.31],
  [62, 41, 0.33], [68, 4, 0.28], [73, 46, 0.34], [78, 5, 0.3], [82, 35, 0.33],
  [90, 43, 0.3], [95, 6, 0.35], [98, 21, 0.28],
];

const OPENING_CONSTELLATION_PATHS = [
  "M3 24 L3 6 L8 6 L11 9 L8 12 L3 12 M8 12 L12 16 L9 24 L3 24",
  "M16 8 L21 6 L26 8 L28 15 L26 22 L21 24 L16 22 L14 15 Z",
  "M32 8 L37 6 L42 8 L44 15 L42 22 L37 24 L32 22 L30 15 Z",
  "M47 24 L47 6 L52 17 L57 6 L57 24",
  "M61 6 L67 6 M64 6 L64 24",
  "M71 8 L76 6 L81 8 L83 15 L81 22 L76 24 L71 22 L69 15 Z",
  "M86 6 L89 24 L93 11 L97 24 L100 6",
  "M104 24 L104 6 L114 24 L114 6",
];

const loadingState = {
  activeSurface: null,
  isLandscape: false,
  disclaimerAccepted: false,
  chapterMenuShown: false,
  selectedChapterTarget: null,
  sequenceStarted: false,
  terminalStarted: false,
  wizardSpeechStarted: false,
  loadingRunId: 0,
  openingWizardRunId: 0,
  miniGameIntroRunId: 0,
  orientationRecoveryMode: null,
  tapBubbleTimer: null,
  tapBubbleTutorialTimer: null,
  tapBubbleTutorialSeen: false,
  travelHudTimer: null,
  travelHudCompleteTimer: null,
  travelHudStarted: false,
  travelHudStartedAt: 0,
  travelDialogueStarted: false,
  travelDialogueRunId: 0,
  pathChallengeActive: false,
  pathChallengeFailed: false,
  pathFailRestartCount: 0,
  dogDodgeActive: false,
  dogDodgeTutorialActive: false,
  dogDodgeStarted: false,
  dogDodgeLane: "middle",
  dogDodgeNextDogTimer: null,
  dogDodgeSwipeStart: null,
  dogDodgeWarningTimer: null,
  dogChallengeMode: false,
  dogChallengeComplete: false,
  dogChallengeFailCount: 0,
  mountainExplosionTimer: null,
};

const finalFpsState = {
  canvas: null,
  context: null,
  animationFrame: null,
  isRunning: false,
  orientationRecoveryMode: null,
  orientationWasPaused: false,
  startedAt: 0,
  blinkStartedAt: 0,
  player: { x: 5, y: 6.8, angle: -Math.PI / 2, pitch: 0 },
  keys: { forward: 0, strafe: 0 },
  joystick: {
    active: false,
    pointerId: null,
    startX: 0,
    startY: 0,
    x: 0,
    y: 0,
  },
  look: {
    active: false,
    pointerId: null,
    lastX: 0,
    lastY: 0,
  },
  doorOpenProgress: 0,
  doorSpawnProgress: 0,
  tutorialPhase: "look",
  tutorialPhaseStartedAt: 0,
  wizardDialogueStartedAt: 0,
  wizardDialogueTypingActive: false,
  doorWarpStartedAt: 0,
  wallDecorations: [],
  paintingImages: {},
  paintingTextures: {},
  furniture: null,
  activeInteraction: null,
  interactionButtonRect: null,
  inspectedImageKey: null,
  inspectedPaintingFlipped: false,
  inspectionFlipStartedAt: 0,
  inspectionPointer: null,
  gunPaintingKey: null,
  inspectedBoomtownPaintings: [],
  gunDiscoveryStartedAt: 0,
  gunDiscoveryTypingActive: false,
  hasGun: false,
  gunPickupButtonRect: null,
  ammo: FINAL_FPS_MAGAZINE_SIZE,
  isShooting: false,
  shootPointerId: null,
  shootButtonPressed: false,
  shootButtonRect: null,
  reloadButtonRect: null,
  autoFire: false,
  autoFireButtonRect: null,
  lastShotAt: -Infinity,
  muzzleFlashAt: 0,
  bulletMarks: [],
  recoilUntil: 0,
  recoilIntensity: 0,
  gunTutorialPhase: null,
  environmentMode: "room",
  portalTransitionStartedAt: 0,
  forestTransitionStartedAt: 0,
  forestStartedAt: 0,
  portalEntered: false,
  corridorStartedAt: 0,
  corridorPostWaveDialogueShown: false,
  forestFireworks: [],
  nextForestFireworkAt: 0,
  forestIntroStartedAt: 0,
  forestIntroLineIndex: 0,
  forestIntroComplete: false,
  forestDialogueTypingActive: false,
  forestOneOffDialogue: null,
  forestIntroGoblinSpawned: 0,
  forestIntroGoblinKills: 0,
  forestWaypointMilestonesShown: [],
  forestPowerUp: null,
  forestWaypoint: null,
  forestBoss: null,
  forestBossCheckpointPhase: 0,
  forestBossImage: null,
  forestBossAttackImage: null,
  forestBossJumpImage: null,
  forestBossStunImage: null,
  forestBossDeathImage: null,
  forestBossComplete: false,
  forestBossScorePopups: [],
  forestBossDialogue: null,
  forestBossOutroStartedAt: 0,
  forestBossOutroFadeStartedAt: 0,
  forestBossRockets: [],
  forestBossMuzzleBursts: [],
  forestBossLandingBursts: [],
  forestBossShockwave: null,
  forestBossDodgePromptActive: false,
  forestBossDodgePromptStartedAt: 0,
  forestBossAttackGraceUntil: 0,
  forestBossDodgePromptSeen: false,
  forestBossJumpPromptActive: false,
  forestBossJumpPromptStartedAt: 0,
  forestBossJumpPromptSeen: false,
  forestBossShockwavePromptActive: false,
  forestBossShockwavePromptStartedAt: 0,
  forestBossShockwavePromptSeen: false,
  forestBossShockwavePromptTutorial: false,
  forestBossJumpButtonRect: null,
  playerJumpActive: false,
  playerJumpStartedAt: 0,
  playerJumpHeight: 0,
  shockwaveDodgedUntil: 0,
  forestComboKills: 0,
  forestLastKillAt: 0,
  forestComboAnnounceAt: 0,
  forestComboAnnounceText: "",
  infiniteAmmo: false,
  infiniteAmmoActivatedAt: 0,
  forestAutoFirePromptActive: false,
  forestChaosDialogueStartedAt: 0,
  forestChaosDialogueTypingActive: false,
  forestChaosActive: false,
  partyGoblinImage: null,
  partyGoblins: [],
  partyGoblinBursts: [],
  lastPartyGoblinSpawnAt: 0,
  lastPartyGoblinLane: -1,
  hasShownPartyGoblinTutorial: false,
  partyGoblinTutorialActive: false,
  partyGoblinTutorialId: null,
  partyGoblinTutorialStartedAt: 0,
  corridorFailedAt: 0,
  corridorFailedButtons: null,
  corridorFailedMode: null,
};

const audioState = {
  context: null,
  masterGain: null,
  sfxGain: null,
  typingBuffer: null,
  typingLoadPromise: null,
  retroFxBuffer: null,
  retroFxLoadPromise: null,
  phoneRingBuffer: null,
  phonePickupBuffer: null,
  gangGoblinsMusicBuffer: null,
  phoneSoundLoadPromises: {},
  typingSource: null,
  isTypingSoundActive: false,
  assetsReadyPromise: null,
  isUnlocked: false,
  pendingMusicRequest: undefined,
  pendingAmbienceRequest: undefined,
  gangGoblinsMusicSource: null,
  gangGoblinsMusicGain: null,
  gangGoblinsMusicRequested: false,
  lastSfxTimes: {},
  music: {
    current: null,
    gain: null,
    sources: [],
    nextStepAt: 0,
  },
  ambience: {
    current: null,
    gain: null,
    sources: [],
    nextStepAt: 0,
  },
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
  smokeDeaths: [],
  herbBursts: [],
  volcano: null,
  volcanoWave: 0,
  lavaRocks: [],
  lavaSnakes: [],
  lavaPools: [],
  fairyHut: null,
  helperFairies: [],
  tikiMen: [],
  droppedSpears: [],
  magicBursts: [],
  trails: [],
  shells: [],
  goldenAppleSpawnTimes: [],
  canvas: null,
  context: null,
  lastFrameTime: 0,
  lastFireTime: -MINI_GAME_FIRE_COOLDOWN_MS,
  lastSpawnTime: 0,
  lastAppleSpawnTime: 0,
  lastTikiSpawnTime: 0,
  lastSmokeDeathAt: -MINI_GAME_SMOKE_DEATH_GAP_MS,
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
  wizardTipStartedAt: 0,
  wizardTipTypingActive: false,
  wizardTipImage: null,
  shakeUntil: 0,
  shakeIntensity: 0,
  finishEffect: null,
  victoryStartedAt: 0,
  phoneTransitionStartedAt: 0,
  phoneStartedAt: 0,
  phoneRingStartedAt: 0,
  phoneAnsweredAt: 0,
  phoneRect: null,
  phoneImage: null,
  phoneDialogueStartedAt: 0,
  phoneDialogueLineIndex: 0,
  phoneDialogueLineStartedAt: 0,
  phoneDialogueTypingActive: false,
  phoneDialogueLastAdvanceAt: 0,
  phoneChallengePromptAt: 0,
  phoneChallengeAcceptedAt: 0,
  phoneChallengeButton: null,
  cupTableStartedAt: 0,
  cupTableCups: [],
  cupTableDecor: [],
  cupTableJohnStartedAt: 0,
  cupTableJohnLineIndex: 0,
  cupTableJohnLineStartedAt: 0,
  cupTableJohnTypingActive: false,
  cupTableJohnButtons: null,
  cupTableJohnAccepted: false,
  cupTablePhase: "waiting",
  cupTableJohnFinalStartedAt: 0,
  cupTableSelectionStartedAt: 0,
  cupTableSelectionIndex: -1,
  cupTableNextSelectionAt: 0,
  cupTableSelectionFlashAt: 0,
  cupTableSelectionPeeks: [],
  cupTablePickPromptStartedAt: 0,
  cupTableDrinkOptions: [],
  cupTableDrinkButtons: null,
  cupTableSelectedDrink: "",
  cupTablePourColor: "",
  cupTableSelectedCupIndex: -1,
  cupTableCupHitBoxes: [],
  cupTableConfirmButton: null,
  cupTablePourStartedAt: 0,
  cupTablePostPourDialogueStartedAt: 0,
  cupTablePostPourLineIndex: 0,
  cupTablePostPourLineStartedAt: 0,
  cupTablePostPourTypingActive: false,
  cupTableBadCupIndex: -1,
  cupTableDrinkChoiceStartedAt: 0,
  cupTableDrinkSelectedCupIndex: -1,
  cupTableDrinkConfirmButton: null,
  cupTableDrinkStartedAt: 0,
  cupTableDrinkResultAt: 0,
  cupTableDrinkFailed: false,
  cupTableIsRetryRound: false,
  cupTableRetryIntroStartedAt: 0,
  cupTableRetryIntroTypingActive: false,
  cupTableFailedAt: 0,
  cupTableFailButtons: null,
  cupTableJohnTurnStartedAt: 0,
  cupTableJohnTurnSelectionIndex: -1,
  cupTableJohnTurnNextSelectionAt: 0,
  cupTableJohnSelectedCupIndex: -1,
  cupTableJohnDrinkStartedAt: 0,
  cupTableJohnLost: false,
  cupTableJohnResultAt: 0,
  cupTableReturnTriggered: false,
  cupTableReturnTimer: null,
  johnImage: null,
  failedAt: 0,
  failedButtons: null,
  failedRetryCount: 0,
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
  if (finalFpsState.isRunning) {
    resizeFinalFpsCanvas();
  }
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
    audioState.context.addEventListener?.("statechange", () => {
      audioState.isUnlocked = audioState.context?.state === "running";
      if (audioState.isUnlocked) {
        flushPendingGameAudio();
      }
    });
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

function flushPendingGameAudio() {
  if (!audioState.context || audioState.context.state !== "running") {
    return;
  }

  if (audioState.pendingMusicRequest !== undefined) {
    const musicRequest = audioState.pendingMusicRequest;
    audioState.pendingMusicRequest = undefined;
    setFinalFpsMusic(musicRequest);
  }

  if (audioState.pendingAmbienceRequest !== undefined) {
    const ambienceRequest = audioState.pendingAmbienceRequest;
    audioState.pendingAmbienceRequest = undefined;
    setFinalFpsAmbience(ambienceRequest);
  }
}

function kickMobileAudioGraph(context) {
  if (!context || !audioState.sfxGain || context.state !== "running") {
    return;
  }

  try {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const now = context.currentTime;
    oscillator.frequency.value = 20;
    gain.gain.setValueAtTime(0.0001, now);
    oscillator.connect(gain);
    gain.connect(audioState.sfxGain);
    oscillator.start(now);
    oscillator.stop(now + 0.025);
  } catch (error) {
    // The context state is authoritative; this pulse is only a WebKit wake-up.
  }
}

async function unlockGameAudio() {
  const context = ensureAudioContext();

  if (!context) {
    return false;
  }

  if (context.state !== "running" && context.state !== "closed") {
    try {
      // Do not cache this promise. Mobile Safari may leave an early resume
      // pending/interrupted; every subsequent user gesture must be able to retry.
      await context.resume();
    } catch (error) {
      audioState.isUnlocked = false;
    }
  }

  const unlocked = context.state === "running";
  audioState.isUnlocked = unlocked;

  if (unlocked) {
    kickMobileAudioGraph(context);
    flushPendingGameAudio();
  }

  loadRetroFxSound();
  loadPhoneSounds();
  return unlocked;
}

function loadRetroFxSound() {
  const context = ensureAudioContext();

  if (!context || audioState.retroFxBuffer || audioState.retroFxLoadPromise) {
    return audioState.retroFxLoadPromise;
  }

  audioState.retroFxLoadPromise = fetch(RETRO_FX_SOUND_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Audio request failed (${response.status}): ${RETRO_FX_SOUND_URL}`);
      }
      return response.arrayBuffer();
    })
    .then((audioData) => context.decodeAudioData(audioData))
    .then((buffer) => {
      audioState.retroFxBuffer = buffer;
      return buffer;
    })
    .catch((error) => {
      console.error("Could not load retro sound effects", error);
      audioState.retroFxLoadPromise = null;
      return null;
    });

  return audioState.retroFxLoadPromise;
}

function loadDecodedSound(key, url) {
  const context = ensureAudioContext();

  if (!context) {
    return Promise.resolve(null);
  }

  if (audioState[key]) {
    return Promise.resolve(audioState[key]);
  }

  if (audioState.phoneSoundLoadPromises[key]) {
    return audioState.phoneSoundLoadPromises[key];
  }

  audioState.phoneSoundLoadPromises[key] = fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Audio request failed (${response.status}): ${url}`);
      }
      return response.arrayBuffer();
    })
    .then((audioData) => context.decodeAudioData(audioData))
    .then((buffer) => {
      audioState[key] = buffer;
      return buffer;
    })
    .catch((error) => {
      console.error(`Could not load audio asset: ${url}`, error);
      audioState.phoneSoundLoadPromises[key] = null;
      return null;
    });

  return audioState.phoneSoundLoadPromises[key];
}

function loadPhoneSounds() {
  return Promise.all([
    loadDecodedSound("phoneRingBuffer", PHONE_RING_SOUND_URL),
    loadDecodedSound("phonePickupBuffer", PHONE_PICKUP_SOUND_URL),
  ]);
}

function playDecodedSound(bufferKey, options = {}) {
  const context = audioState.context;
  const buffer = audioState[bufferKey];

  if (!context || !audioState.sfxGain || !buffer || context.state !== "running") {
    return false;
  }

  const source = context.createBufferSource();
  const gain = context.createGain();
  const startAt = context.currentTime + 0.001;
  const volume = options.volume ?? 0.82;

  source.buffer = buffer;
  gain.gain.setValueAtTime(volume, startAt);
  gain.gain.exponentialRampToValueAtTime(0.0001, startAt + buffer.duration + 0.08);
  source.connect(gain);
  gain.connect(audioState.sfxGain);
  source.start(startAt);

  return true;
}

function startGangGoblinsMusic(fadeSeconds = 1.6) {
  const wasRequested = audioState.gangGoblinsMusicRequested;
  audioState.gangGoblinsMusicRequested = true;
  const context = ensureAudioContext();

  if (!context) {
    return;
  }

  if (context.state !== "running") {
    unlockGameAudio().then((unlocked) => {
      if (unlocked && audioState.gangGoblinsMusicRequested) {
        startGangGoblinsMusic(fadeSeconds);
      }
    });
    return;
  }

  if (!audioState.gangGoblinsMusicBuffer) {
    loadDecodedSound("gangGoblinsMusicBuffer", GANG_GOBLINS_MUSIC_URL).then(() => {
      if (audioState.gangGoblinsMusicRequested) {
        startGangGoblinsMusic(fadeSeconds);
      }
    });
    return;
  }

  if (audioState.gangGoblinsMusicSource && wasRequested) {
    return;
  }

  if (audioState.gangGoblinsMusicSource) {
    try {
      audioState.gangGoblinsMusicSource.stop();
    } catch (error) {
      // The previous fading source may already have ended.
    }
  }

  const source = context.createBufferSource();
  const gain = context.createGain();
  const startAt = context.currentTime + 0.01;
  source.buffer = audioState.gangGoblinsMusicBuffer;
  source.loop = true;
  gain.gain.setValueAtTime(0.0001, startAt);
  gain.gain.linearRampToValueAtTime(0.62, startAt + fadeSeconds);
  source.connect(gain);
  gain.connect(audioState.sfxGain);
  source.onended = () => {
    if (audioState.gangGoblinsMusicSource === source) {
      audioState.gangGoblinsMusicSource = null;
      audioState.gangGoblinsMusicGain = null;
    }
  };
  audioState.gangGoblinsMusicSource = source;
  audioState.gangGoblinsMusicGain = gain;
  source.start(startAt);
}

function stopGangGoblinsMusic(fadeSeconds = 1.6) {
  audioState.gangGoblinsMusicRequested = false;
  const context = audioState.context;
  const source = audioState.gangGoblinsMusicSource;
  const gain = audioState.gangGoblinsMusicGain;

  if (!context || !source || !gain) {
    return;
  }

  const now = context.currentTime;
  gain.gain.cancelScheduledValues(now);
  gain.gain.setValueAtTime(Math.max(0.0001, gain.gain.value), now);
  gain.gain.linearRampToValueAtTime(0.0001, now + fadeSeconds);

  try {
    source.stop(now + fadeSeconds + 0.05);
  } catch (error) {
    // The source may already have stopped during a scene transition.
  }
}

function loadTypingSound() {
  const context = ensureAudioContext();

  if (!context) {
    return Promise.resolve(null);
  }

  if (audioState.typingBuffer) {
    return Promise.resolve(audioState.typingBuffer);
  }

  if (audioState.typingLoadPromise) {
    return audioState.typingLoadPromise;
  }

  audioState.typingLoadPromise = fetch(TYPING_SOUND_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Audio request failed (${response.status}): ${TYPING_SOUND_URL}`);
      }
      return response.arrayBuffer();
    })
    .then((audioData) => context.decodeAudioData(audioData))
    .then((buffer) => {
      audioState.typingBuffer = buffer;
      return buffer;
    })
    .catch((error) => {
      console.error("Could not load typing sound", error);
      audioState.typingLoadPromise = null;
      return null;
    });

  return audioState.typingLoadPromise;
}

function unlockAllGameAudio() {
  const unlockPromise = unlockGameAudio();

  if (!audioState.assetsReadyPromise) {
    audioState.assetsReadyPromise = Promise.all([
      loadTypingSound(),
      loadRetroFxSound(),
      loadPhoneSounds(),
      loadDecodedSound("gangGoblinsMusicBuffer", GANG_GOBLINS_MUSIC_URL),
    ]).catch(() => {
      audioState.assetsReadyPromise = null;
      return null;
    });
  }

  return Promise.all([unlockPromise, audioState.assetsReadyPromise]).then(([unlocked]) => Boolean(unlocked));
}

// All audio shares the same unlock established by the opening disclaimer tap.
async function unlockTypingAudio() {
  const unlocked = await unlockGameAudio();

  if (!unlocked) {
    return null;
  }

  return loadTypingSound();
}

function startTypingSound() {
  if (
    !audioState.context ||
    audioState.context.state !== "running" ||
    !audioState.masterGain ||
    !audioState.typingBuffer ||
    audioState.isTypingSoundActive
  ) {
    return false;
  }

  const source = audioState.context.createBufferSource();
  source.buffer = audioState.typingBuffer;
  source.loop = true;
  source.connect(audioState.masterGain);
  source.start();

  audioState.typingSource = source;
  audioState.isTypingSoundActive = true;
  return true;
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

function stopProceduralLoop(loopState, fadeSeconds = 0.45) {
  const context = audioState.context;

  if (!context || !loopState.gain) {
    loopState.current = null;
    loopState.sources = [];
    loopState.nextStepAt = 0;
    return;
  }

  const now = context.currentTime;
  loopState.gain.gain.cancelScheduledValues(now);
  loopState.gain.gain.setValueAtTime(loopState.gain.gain.value, now);
  loopState.gain.gain.linearRampToValueAtTime(0.0001, now + fadeSeconds);
  loopState.sources.forEach((source) => {
    try {
      source.stop(now + fadeSeconds + 0.08);
    } catch (error) {
      // Source may already be stopped.
    }
  });
  loopState.current = null;
  loopState.sources = [];
  loopState.nextStepAt = 0;
}

function setFinalFpsMusic(name) {
  const context = ensureAudioContext();

  if (!context) {
    return;
  }

  if (context.state !== "running") {
    audioState.pendingMusicRequest = name;
    unlockGameAudio();
    return;
  }

  audioState.pendingMusicRequest = undefined;

  if (audioState.music.current === name) {
    return;
  }

  stopProceduralLoop(audioState.music, 0.65);

  if (!name) {
    return;
  }

  audioState.music.current = name;
  audioState.music.gain = context.createGain();
  audioState.music.gain.gain.value = 0.0001;
  audioState.music.gain.connect(audioState.sfxGain);
  audioState.music.gain.gain.linearRampToValueAtTime(getFinalFpsMusicVolume(name), context.currentTime + 0.8);
  audioState.music.nextStepAt = context.currentTime;
  scheduleFinalFpsMusicLoop(name);
}

function setFinalFpsAmbience(name) {
  const context = ensureAudioContext();

  if (!context) {
    return;
  }

  if (context.state !== "running") {
    audioState.pendingAmbienceRequest = name;
    unlockGameAudio();
    return;
  }

  audioState.pendingAmbienceRequest = undefined;

  if (audioState.ambience.current === name) {
    return;
  }

  stopProceduralLoop(audioState.ambience, 0.9);

  if (!name) {
    return;
  }

  audioState.ambience.current = name;
  audioState.ambience.gain = context.createGain();
  audioState.ambience.gain.gain.value = 0.0001;
  audioState.ambience.gain.connect(audioState.sfxGain);
  audioState.ambience.gain.gain.linearRampToValueAtTime(name === "crickets" ? 0.12 : 0.08, context.currentTime + 1.2);
  audioState.ambience.nextStepAt = context.currentTime;
  scheduleFinalFpsAmbienceLoop(name);
}

function getFinalFpsMusicVolume(name) {
  if (name === "chapterMenu") {
    return 0.34;
  }

  if (name === "cupTableBar") {
    return 0.32;
  }

  if (name === "openingFunk") {
    return 0.34;
  }

  if (name === "openingDogAction") {
    return 0.37;
  }

  if (name === "roomMystery") {
    return 0.27;
  }
  if (name === "corridorAction") {
    return 0.31;
  }
  if (name === "forestAction") {
    return 0.33;
  }
  if (name === "bossBuild") {
    return 0.3;
  }
  if (name === "bossFight") {
    return 0.34;
  }
  if (name === "forestRamp") {
    return 0.31;
  }
  return 0.24;
}

function scheduleFinalFpsMusicLoop(name) {
  const context = audioState.context;
  const loopState = audioState.music;

  if (!context || loopState.current !== name || !loopState.gain) {
    return;
  }

  const pattern = getFinalFpsMusicPattern(name);
  const stepSeconds = pattern.step;
  const horizon = context.currentTime + 1.2;

  while (loopState.nextStepAt < horizon) {
    const stepIndex = Math.floor((loopState.nextStepAt * 1000) / (stepSeconds * 1000));
    const note = pattern.notes[stepIndex % pattern.notes.length];
    const accent = pattern.accents[stepIndex % pattern.accents.length];

    if (note) {
      scheduleProceduralTone(loopState, {
        frequency: note,
        duration: pattern.duration,
        type: pattern.type,
        volume: pattern.volume * accent,
        when: loopState.nextStepAt - context.currentTime,
      });
    }

    if (pattern.noise && stepIndex % pattern.noise.every === 0) {
      scheduleProceduralNoise(loopState, {
        duration: pattern.noise.duration,
        volume: pattern.noise.volume,
        lowpass: pattern.noise.lowpass,
        when: loopState.nextStepAt - context.currentTime,
      });
    }

    loopState.nextStepAt += stepSeconds;
  }

  window.setTimeout(() => scheduleFinalFpsMusicLoop(name), 500);
}

function getFinalFpsMusicPattern(name) {
  if (name === "chapterMenu") {
    return {
      step: 0.38,
      duration: 0.3,
      type: "sine",
      volume: 0.052,
      notes: [220, null, 330, 440, null, 392, 330, null, 247, null, 370, 494, null, 440, 370, 294],
      accents: [0.82, 0.5, 0.72, 1, 0.5, 0.82, 0.7, 0.5, 0.8, 0.5, 0.74, 0.96, 0.5, 0.84, 0.72, 0.78],
      noise: { every: 8, duration: 0.16, volume: 0.008, lowpass: 1100 },
    };
  }

  if (name === "cupTableBar") {
    return {
      step: 0.24,
      duration: 0.18,
      type: "triangle",
      volume: 0.042,
      notes: [196, 247, 294, 330, 294, 247, 220, 262, 330, 392, 330, 262, 196, 247, 294, 247],
      accents: [1, 0.68, 0.82, 0.72, 0.9, 0.68, 0.8, 0.7, 1, 0.7, 0.86, 0.72, 0.92, 0.66, 0.82, 0.7],
      noise: { every: 4, duration: 0.055, volume: 0.009, lowpass: 2400 },
    };
  }

  if (name === "openingFunk") {
    return {
      step: 0.2,
      duration: 0.13,
      type: "triangle",
      volume: 0.048,
      notes: [110, null, 165, 196, 110, 147, null, 220, 123, null, 185, 220, 123, 165, 147, 196],
      accents: [1, 0.62, 0.76, 0.92, 1, 0.72, 0.62, 0.88, 1, 0.62, 0.78, 0.94, 1, 0.72, 0.8, 0.9],
      noise: { every: 4, duration: 0.06, volume: 0.012, lowpass: 2100 },
    };
  }

  if (name === "openingDogAction") {
    return {
      step: 0.14,
      duration: 0.09,
      type: "sawtooth",
      volume: 0.047,
      notes: [110, 165, 196, 165, 123, 185, 220, 185, 130, 196, 247, 196, 123, 185, 220, 247],
      accents: [1, 0.7, 0.88, 0.72, 1, 0.74, 0.92, 0.76, 1, 0.72, 0.94, 0.75, 1, 0.74, 0.9, 0.82],
      noise: { every: 2, duration: 0.045, volume: 0.016, lowpass: 2800 },
    };
  }

  if (name === "roomMystery") {
    return {
      step: 0.42,
      duration: 0.22,
      type: "triangle",
      volume: 0.05,
      notes: [196, null, 233, null, 185, null, 220, 147],
      accents: [1, 0.7, 0.86, 0.7, 1, 0.72, 0.9, 0.65],
      noise: { every: 8, duration: 0.18, volume: 0.014, lowpass: 780 },
    };
  }

  if (name === "corridorAction") {
    return {
      step: 0.22,
      duration: 0.09,
      type: "sawtooth",
      volume: 0.038,
      notes: [110, 110, 147, 110, 165, 147, 110, 98],
      accents: [1, 0.74, 0.86, 0.74, 1, 0.8, 0.86, 0.7],
      noise: { every: 4, duration: 0.07, volume: 0.018, lowpass: 1200 },
    };
  }

  if (name === "forestRamp") {
    return {
      step: 0.28,
      duration: 0.18,
      type: "triangle",
      volume: 0.036,
      notes: [130, null, 164, 196, null, 220, 196, 164],
      accents: [0.78, 0.6, 0.82, 1, 0.6, 0.95, 0.82, 0.72],
      noise: { every: 6, duration: 0.08, volume: 0.014, lowpass: 1600 },
    };
  }

  if (name === "bossBuild") {
    return {
      step: 0.34,
      duration: 0.2,
      type: "triangle",
      volume: 0.042,
      notes: [82, null, 98, null, 110, 123, 98, null],
      accents: [0.8, 0.6, 0.88, 0.62, 1, 0.82, 0.9, 0.62],
      noise: { every: 4, duration: 0.09, volume: 0.018, lowpass: 900 },
    };
  }

  if (name === "bossFight") {
    return {
      step: 0.15,
      duration: 0.09,
      type: "sawtooth",
      volume: 0.046,
      notes: [98, 147, 98, 165, 110, 196, 147, 123],
      accents: [1, 0.72, 0.92, 0.78, 1, 0.86, 0.92, 0.78],
      noise: { every: 3, duration: 0.065, volume: 0.018, lowpass: 1700 },
    };
  }

  return {
    step: 0.18,
    duration: 0.11,
    type: "square",
    volume: 0.034,
    notes: [130, 196, 130, 220, 130, 247, 196, 165],
    accents: [1, 0.7, 0.86, 0.72, 1, 0.8, 0.9, 0.75],
    noise: { every: 4, duration: 0.075, volume: 0.016, lowpass: 1800 },
  };
}

function scheduleProceduralTone(loopState, { frequency, duration, type, volume, when }) {
  const context = audioState.context;

  if (!context || !loopState.gain) {
    return;
  }

  const startAt = context.currentTime + Math.max(0, when);
  const oscillator = context.createOscillator();
  const gain = context.createGain();

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, startAt);
  gain.gain.setValueAtTime(0.0001, startAt);
  gain.gain.exponentialRampToValueAtTime(volume, startAt + 0.018);
  gain.gain.exponentialRampToValueAtTime(0.0001, startAt + duration);
  oscillator.connect(gain);
  gain.connect(loopState.gain);
  oscillator.onended = () => {
    loopState.sources = loopState.sources.filter((source) => source !== oscillator);
  };
  oscillator.start(startAt);
  oscillator.stop(startAt + duration + 0.04);
  loopState.sources.push(oscillator);
}

function scheduleProceduralNoise(loopState, { duration, volume, lowpass, when }) {
  const context = audioState.context;

  if (!context || !loopState.gain) {
    return;
  }

  const startAt = context.currentTime + Math.max(0, when);
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
  gain.connect(loopState.gain);
  source.onended = () => {
    loopState.sources = loopState.sources.filter((item) => item !== source);
  };
  source.start(startAt);
  loopState.sources.push(source);
}

function scheduleFinalFpsAmbienceLoop(name) {
  const context = audioState.context;
  const loopState = audioState.ambience;

  if (!context || loopState.current !== name || !loopState.gain) {
    return;
  }

  const horizon = context.currentTime + 1.5;

  while (loopState.nextStepAt < horizon) {
    scheduleProceduralTone(loopState, {
      frequency: 2600 + Math.random() * 1800,
      duration: 0.035 + Math.random() * 0.035,
      type: "sine",
      volume: 0.024 + Math.random() * 0.016,
      when: loopState.nextStepAt - context.currentTime,
    });
    loopState.nextStepAt += 0.18 + Math.random() * 0.58;
  }

  window.setTimeout(() => scheduleFinalFpsAmbienceLoop(name), 650);
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
    unlockGameAudio()?.then((unlocked) => {
      if (unlocked && !options.retried) {
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
    case "tapPop":
      playTone({ frequency: 740, endFrequency: 1180, duration: 0.08, type: "sine", volume: 0.06 });
      playTone({ frequency: 1480, endFrequency: 1960, duration: 0.075, type: "triangle", volume: 0.035, when: 0.035 });
      playNoise({ duration: 0.055, volume: 0.018, lowpass: 4200, when: 0.01 });
      break;
    case "cupTableDrink":
      [0, 0.16, 0.32, 0.48].forEach((when, index) => {
        playTone({
          frequency: 185 - index * 12,
          endFrequency: 108 - index * 7,
          duration: 0.14,
          type: "sine",
          volume: 0.055,
          when,
        });
        playNoise({ duration: 0.12, volume: 0.024, lowpass: 720, when: when + 0.015 });
      });
      playNoise({ duration: 0.72, volume: 0.018, lowpass: 1250, when: 0.02 });
      break;
    case "openingSpeedBoost": {
      const duration = options.duration ?? OPENING_SPEED_BOOST_DURATION_MS / 1000;
      playNoise({ duration: Math.min(duration, 1.4), volume: 0.1, lowpass: 3600 });
      playTone({ frequency: 120, endFrequency: 880, duration: 0.72, type: "sawtooth", volume: 0.09 });
      playTone({ frequency: 240, endFrequency: 1320, duration: 0.82, type: "triangle", volume: 0.055, when: 0.04 });

      for (let when = 0.12, step = 0; when < duration; when += 0.13, step += 1) {
        playTone({
          frequency: step % 2 === 0 ? 104 : 86,
          endFrequency: step % 2 === 0 ? 62 : 52,
          duration: 0.075,
          type: "triangle",
          volume: 0.07,
          when,
        });
        playNoise({ duration: 0.055, volume: 0.045, lowpass: 650, when: when + 0.008 });
      }
      break;
    }
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
    case "finalFpsShoot":
      playNoise({ duration: 0.05, volume: options.volume ?? 0.03, lowpass: 1500 });
      playTone({ frequency: 92, endFrequency: 58, duration: 0.05, type: "sawtooth", volume: 0.018, when: 0 });
      playTone({ frequency: 260, endFrequency: 145, duration: 0.032, type: "square", volume: 0.01, when: 0.006 });
      break;
    case "finalFpsBossHitSweetener":
      playTone({ frequency: 430, endFrequency: 680, duration: 0.08, type: "triangle", volume: 0.05 });
      playTone({ frequency: 760, endFrequency: 980, duration: 0.06, type: "sine", volume: 0.028, when: 0.035 });
      playNoise({ duration: 0.06, volume: 0.018, lowpass: 4200, when: 0.012 });
      break;
    case "finalFpsBossStep":
      playTone({ frequency: 58, endFrequency: 34, duration: 0.2, type: "sine", volume: 0.11 });
      playNoise({ duration: 0.12, volume: 0.055, lowpass: 380, when: 0.015 });
      break;
    case "finalFpsBossRocket":
      playTone({ frequency: 86, endFrequency: 42, duration: 0.22, type: "sawtooth", volume: 0.13 });
      playTone({ frequency: 172, endFrequency: 74, duration: 0.18, type: "triangle", volume: 0.06, when: 0.015 });
      playNoise({ duration: 0.18, volume: 0.105, lowpass: 920 });
      break;
    case "finalFpsBossJump":
      playTone({ frequency: 180, endFrequency: 520, duration: 0.24, type: "triangle", volume: 0.09 });
      playTone({ frequency: 360, endFrequency: 760, duration: 0.18, type: "sine", volume: 0.045, when: 0.045 });
      break;
    case "finalFpsBossLand":
      playTone({ frequency: 48, endFrequency: 18, duration: 0.55, type: "sawtooth", volume: 0.22 });
      playTone({ frequency: 86, endFrequency: 26, duration: 0.46, type: "triangle", volume: 0.14, when: 0.025 });
      playNoise({ duration: 0.42, volume: 0.2, lowpass: 470 });
      break;
    case "finalFpsBossDeath":
      playTone({ frequency: 180, endFrequency: 46, duration: 0.76, type: "sawtooth", volume: 0.12 });
      playTone({ frequency: 90, endFrequency: 24, duration: 1.05, type: "triangle", volume: 0.14, when: 0.04 });
      playNoise({ duration: 0.75, volume: 0.13, lowpass: 820, when: 0.04 });
      break;
    case "finalFpsInspect":
      playTone({ frequency: 120, endFrequency: 72, duration: 0.18, type: "triangle", volume: 0.12 });
      playTone({ frequency: 82, endFrequency: 54, duration: 0.28, type: "sine", volume: 0.095, when: 0.04 });
      playNoise({ duration: 0.2, volume: 0.07, lowpass: 520, when: 0.01 });
      break;
    case "finalFpsFlip":
      playTone({ frequency: 96, endFrequency: 52, duration: 0.26, type: "triangle", volume: 0.13 });
      playNoise({ duration: 0.24, volume: 0.095, lowpass: 440 });
      playNoise({ duration: 0.08, volume: 0.052, lowpass: 1200, when: 0.22 });
      break;
    case "finalFpsGunEquip":
      playTone({ frequency: 190, endFrequency: 112, duration: 0.12, type: "square", volume: 0.09 });
      playNoise({ duration: 0.09, volume: 0.055, lowpass: 1800, when: 0.02 });
      playTone({ frequency: 86, endFrequency: 62, duration: 0.16, type: "triangle", volume: 0.075, when: 0.12 });
      break;
    case "finalFpsPortalOpen":
      playTone({ frequency: 220, endFrequency: 880, duration: 0.8, type: "sine", volume: 0.09 });
      playTone({ frequency: 330, endFrequency: 1320, duration: 0.9, type: "triangle", volume: 0.055, when: 0.08 });
      playNoise({ duration: 0.9, volume: 0.055, lowpass: 2600, when: 0.04 });
      break;
    case "finalFpsReload":
      playTone({ frequency: 150, endFrequency: 86, duration: 0.12, type: "triangle", volume: 0.08 });
      playNoise({ duration: 0.12, volume: 0.048, lowpass: 1600, when: 0.02 });
      playTone({ frequency: 220, endFrequency: 145, duration: 0.09, type: "square", volume: 0.055, when: 0.16 });
      playNoise({ duration: 0.08, volume: 0.034, lowpass: 2300, when: 0.18 });
      break;
    case "finalFpsKillCombo":
      playTone({ frequency: 392, endFrequency: 784, duration: 0.16, type: "triangle", volume: options.volume ?? 0.12 });
      playTone({ frequency: 587, endFrequency: 1174, duration: 0.18, type: "sine", volume: 0.09, when: 0.08 });
      playTone({ frequency: 784, endFrequency: 1568, duration: 0.22, type: "triangle", volume: 0.08, when: 0.17 });
      playNoise({ duration: 0.24, volume: 0.035, lowpass: 4800, when: 0.04 });
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
    case "mountainExplosion":
      playTone({ frequency: 46, endFrequency: 18, duration: 1.28, type: "sawtooth", volume: 0.18 });
      playTone({ frequency: 88, endFrequency: 24, duration: 1.08, type: "triangle", volume: 0.13, when: 0.04 });
      playTone({ frequency: 220, endFrequency: 64, duration: 0.56, type: "sawtooth", volume: 0.055, when: 0.1 });
      playNoise({ duration: 1.18, volume: 0.15, lowpass: 420 });
      playNoise({ duration: 0.48, volume: 0.075, lowpass: 1800, when: 0.12 });
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
    case "smokeGoblinFly":
      playTone({ frequency: 520, endFrequency: 180, duration: 0.22, type: "sawtooth", volume: 0.065 });
      playTone({ frequency: 260, endFrequency: 760, duration: 0.18, type: "triangle", volume: 0.04, when: 0.035 });
      playNoise({ duration: 0.2, volume: 0.045, lowpass: 1600 });
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
    case "phoneRing":
      loadDecodedSound("phoneRingBuffer", PHONE_RING_SOUND_URL);
      if (playDecodedSound("phoneRingBuffer", { volume: 1.35 })) {
        break;
      }

      [0, 0.42].forEach((when) => {
        playTone({ frequency: 880, endFrequency: 760, duration: 0.22, type: "triangle", volume: 0.13, when });
        playTone({ frequency: 440, endFrequency: 380, duration: 0.24, type: "sine", volume: 0.09, when });
      });
      [0.86, 1.14].forEach((when) => {
        playTone({ frequency: 980, endFrequency: 820, duration: 0.16, type: "triangle", volume: 0.08, when });
      });
      break;
    case "phonePickup":
      loadDecodedSound("phonePickupBuffer", PHONE_PICKUP_SOUND_URL);
      if (playDecodedSound("phonePickupBuffer", { volume: 0.9 })) {
        break;
      }

      playTone({ frequency: 580, endFrequency: 220, duration: 0.16, type: "triangle", volume: 0.1 });
      playTone({ frequency: 260, endFrequency: 520, duration: 0.14, type: "sine", volume: 0.07, when: 0.08 });
      playNoise({ duration: 0.12, volume: 0.025, lowpass: 1800, when: 0.02 });
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
    case "volcanoRockLaunch":
      playTone({ frequency: 88, endFrequency: 34, duration: 0.34, type: "sawtooth", volume: 0.18 });
      playTone({ frequency: 176, endFrequency: 62, duration: 0.25, type: "sine", volume: 0.1, when: 0.03 });
      playNoise({ duration: 0.22, volume: 0.08, lowpass: 520 });
      break;
    case "lavaWarning":
      playTone({ frequency: 240, endFrequency: 1180, duration: 0.9, type: "triangle", volume: 0.105 });
      playTone({ frequency: 120, endFrequency: 580, duration: 0.9, type: "sine", volume: 0.075, when: 0.04 });
      break;
    case "lavaImpact":
      playTone({ frequency: 110, endFrequency: 32, duration: 0.24, type: "sine", volume: 0.17 });
      playNoise({ duration: 0.16, volume: 0.11, lowpass: 650 });
      break;
    case "snakeHiss":
      playNoise({ duration: 0.28, volume: 0.1, lowpass: 2100 });
      playTone({ frequency: 520, endFrequency: 190, duration: 0.22, type: "triangle", volume: 0.055, when: 0.02 });
      break;
    case "fairySpawn":
      playTone({ frequency: 880, endFrequency: 1760, duration: 0.18, type: "sine", volume: 0.07 });
      playTone({ frequency: 1320, endFrequency: 1980, duration: 0.16, type: "triangle", volume: 0.045, when: 0.06 });
      break;
    case "fairyAttack":
      playTone({ frequency: 1480, endFrequency: 720, duration: 0.08, type: "triangle", volume: 0.06 });
      playNoise({ duration: 0.045, volume: 0.025, lowpass: 3200 });
      break;
    case "fairyDeath":
      playTone({ frequency: 1280, endFrequency: 440, duration: 0.24, type: "sine", volume: 0.09 });
      playTone({ frequency: 1900, endFrequency: 760, duration: 0.18, type: "triangle", volume: 0.055, when: 0.04 });
      playNoise({ duration: 0.18, volume: 0.055, lowpass: 2600 });
      break;
    case "tikiSpawn":
      playTone({ frequency: 620, endFrequency: 420, duration: 0.09, type: "square", volume: 0.07 });
      playTone({ frequency: 780, endFrequency: 520, duration: 0.1, type: "triangle", volume: 0.045, when: 0.07 });
      break;
    case "tikiAttack":
      playTone({ frequency: 860, endFrequency: 300, duration: 0.1, type: "square", volume: 0.07 });
      break;
    case "tikiDeath":
      playTone({ frequency: 680, endFrequency: 1240, duration: 0.11, type: "triangle", volume: 0.075 });
      playNoise({ duration: 0.09, volume: 0.04, lowpass: 2200 });
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

function setLoadingOrientationRecoveryMode() {
  if (!loadingState.disclaimerAccepted) {
    loadingState.orientationRecoveryMode = "disclaimer";
    return;
  }

  if (loadingState.activeSurface === "chapterSelect") {
    loadingState.orientationRecoveryMode = "chapterSelect";
    return;
  }

  if (loadingState.activeSurface === "title" || loadingState.activeSurface === "terminal" || loadingState.activeSurface === "transmission") {
    loadingState.orientationRecoveryMode = "restartLoading";
    loadingState.loadingRunId += 1;
    stopTypingSound();
    return;
  }

  if (loadingState.activeSurface === "openingWizard") {
    if (loadingState.pathChallengeActive) {
      loadingState.orientationRecoveryMode = "failOpeningPath";
      return;
    }

    loadingState.orientationRecoveryMode = "restartOpeningWizard";
    loadingState.openingWizardRunId += 1;
    loadingState.travelDialogueRunId += 1;
    stopTypingSound();
    return;
  }

  if (loadingState.activeSurface === "miniGameIntro") {
    loadingState.orientationRecoveryMode = null;
    return;
  }

  if (loadingState.activeSurface === "miniGame") {
    loadingState.orientationRecoveryMode = null;
    return;
  }

  loadingState.orientationRecoveryMode = null;
}

function recoverLoadingOrientation() {
  const mode = loadingState.orientationRecoveryMode;
  loadingState.orientationRecoveryMode = null;

  if (!mode || mode === "disclaimer" || mode === "chapterSelect") {
    if (loadingState.activeSurface) {
      showActiveSurface();
    }
    return;
  }

  if (mode === "restartLoading") {
    restartLoadingTerminalSequence();
    return;
  }

  if (mode === "restartOpeningWizard") {
    void restartOpeningWizardSequenceFromOrientation();
    return;
  }

  if (mode === "failOpeningPath") {
    showActiveSurface();
    failOpeningPathChallenge();
    return;
  }

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

function stopOpeningTapBubbleGame() {
  const bubbles = document.querySelectorAll(".opening-tap-bubble");
  const tutorial = document.querySelector("#opening-tap-tutorial");
  const openingWizard = document.querySelector("#opening-wizard");
  const speedBoost = document.querySelector("#opening-speed-boost");

  if (loadingState.tapBubbleTimer) {
    window.clearTimeout(loadingState.tapBubbleTimer);
    loadingState.tapBubbleTimer = null;
  }

  if (loadingState.tapBubbleTutorialTimer) {
    window.clearTimeout(loadingState.tapBubbleTutorialTimer);
    loadingState.tapBubbleTutorialTimer = null;
  }

  if (loadingState.travelHudTimer) {
    window.clearTimeout(loadingState.travelHudTimer);
    loadingState.travelHudTimer = null;
  }

  if (loadingState.travelHudCompleteTimer) {
    window.clearTimeout(loadingState.travelHudCompleteTimer);
    loadingState.travelHudCompleteTimer = null;
  }

  if (openingWizard) {
    openingWizard.classList.remove(
      "is-tap-tutorial-paused",
      "is-tap-tutorial-ready",
      "is-travel-hud-active",
      "is-path-failed",
      "is-path-complete",
      "is-starting-game",
      "is-speed-boosting",
      "is-boosted-close",
    );
  }

  if (speedBoost) {
    speedBoost.classList.remove("is-visible");
    hideElement(speedBoost);
  }

  bubbles.forEach((bubble) => {
    if (bubble.openingBubbleTimer) {
      window.clearTimeout(bubble.openingBubbleTimer);
      bubble.openingBubbleTimer = null;
    }

    bubble.classList.remove("is-visible", "is-left", "is-right", "is-popped", "is-tutorial-target");
    hideElement(bubble);
  });

  if (tutorial) {
    tutorial.classList.remove("is-visible", "is-left", "is-right", "is-ready");
    hideElement(tutorial);
  }
}

function hideOpeningBubbleOnly() {
  const bubbles = document.querySelectorAll(".opening-tap-bubble");

  if (loadingState.tapBubbleTimer) {
    window.clearTimeout(loadingState.tapBubbleTimer);
    loadingState.tapBubbleTimer = null;
  }

  if (loadingState.tapBubbleTutorialTimer) {
    window.clearTimeout(loadingState.tapBubbleTutorialTimer);
    loadingState.tapBubbleTutorialTimer = null;
  }

  bubbles.forEach((bubble) => {
    if (bubble.openingBubbleTimer) {
      window.clearTimeout(bubble.openingBubbleTimer);
      bubble.openingBubbleTimer = null;
    }

    bubble.classList.remove("is-visible", "is-left", "is-right", "is-popped", "is-tutorial-target");
    hideElement(bubble);
  });
}

function showOpeningDogSkipButton(options = {}) {
  const skipButton = document.querySelector("#opening-dog-skip");

  if (!skipButton) {
    return;
  }

  const mode = options.mode || "dog";
  skipButton.textContent = "Skip level";
  skipButton.onclick = (event) => {
    event?.preventDefault?.();

    if (mode === "path") {
      skipOpeningPathChallengeToPlayPrompt();
      return;
    }

    if (!loadingState.dogChallengeMode || !loadingState.pathChallengeActive || loadingState.pathChallengeFailed) {
      return;
    }

    completeOpeningPathChallenge();
  };
  showElement(skipButton);
  window.requestAnimationFrame(() => skipButton.classList.add("is-visible"));
}

function hideOpeningDogSkipButton() {
  const skipButton = document.querySelector("#opening-dog-skip");

  if (!skipButton) {
    return;
  }

  skipButton.classList.remove("is-visible");
  hideElement(skipButton);
}

function completeOpeningPathChallenge() {
  const openingWizard = document.querySelector("#opening-wizard");

  if (!openingWizard || loadingState.pathChallengeFailed) {
    return;
  }

  loadingState.pathChallengeActive = false;
  hideOpeningBubbleOnly();

  if (loadingState.travelHudCompleteTimer) {
    window.clearTimeout(loadingState.travelHudCompleteTimer);
    loadingState.travelHudCompleteTimer = null;
  }

  if (loadingState.dogChallengeMode) {
    loadingState.dogChallengeComplete = true;
    hideOpeningDogSkipButton();
    stopOpeningDogDodgeChallenge({ keepLane: true, keepMode: true });
    openingWizard.classList.remove("is-travel-hud-active", "is-dog-challenge");
    window.setTimeout(() => {
      playOpeningAfterDogChallengeSequence();
    }, 360);
    return;
  }

  openingWizard.classList.add("is-path-complete");
}

function skipOpeningPathChallengeToPlayPrompt() {
  const openingWizard = document.querySelector("#opening-wizard");

  if (!openingWizard) {
    return;
  }

  loadingState.pathChallengeFailed = false;
  loadingState.pathChallengeActive = false;
  loadingState.travelHudStarted = true;
  loadingState.travelDialogueStarted = true;
  loadingState.travelDialogueRunId += 1;
  hideOpeningBubbleOnly();
  hideOpeningDogSkipButton();
  stopOpeningMountainExplosionLoop();
  stopOpeningTapBubbleGame();

  if (loadingState.travelHudTimer) {
    window.clearTimeout(loadingState.travelHudTimer);
    loadingState.travelHudTimer = null;
  }

  if (loadingState.travelHudCompleteTimer) {
    window.clearTimeout(loadingState.travelHudCompleteTimer);
    loadingState.travelHudCompleteTimer = null;
  }

  openingWizard.classList.remove("is-path-failed", "is-travel-hud-active", "is-dog-challenge");
  openingWizard.classList.add("is-path-complete");
}

function resetOpeningWizardRuntime() {
  const openingWizard = document.querySelector("#opening-wizard");
  const openingDialogue = document.querySelector("#opening-dialogue");
  const openingDialogueText = document.querySelector("#opening-dialogue-text");
  const loadingScene = document.querySelector('[data-scene="Loading"]');

  if (loadingScene) {
    loadingScene.classList.remove("is-ending");
  }

  if (openingWizard) {
    openingWizard.classList.remove(
      "is-active",
      "is-path-running",
      "is-mountain-exploding",
      "is-travel-hud-active",
      "is-path-failed",
      "is-path-complete",
      "is-starting-game",
      "is-speed-boosting",
      "is-boosted-close",
      "is-cup-returning",
      "is-dog-challenge",
    );
  }

  if (openingDialogue) {
    openingDialogue.classList.remove("is-visible");
    hideElement(openingDialogue);
  }

  if (openingDialogueText) {
    openingDialogueText.textContent = "";
  }

  hideOpeningDogSkipButton();
  stopOpeningTapBubbleGame();
  stopOpeningMountainExplosionLoop();
  loadingState.travelHudStarted = false;
  loadingState.travelHudStartedAt = 0;
  loadingState.travelDialogueStarted = false;
  loadingState.travelDialogueRunId += 1;
  loadingState.pathChallengeActive = false;
  loadingState.pathChallengeFailed = false;
  loadingState.tapBubbleTutorialSeen = false;
  loadingState.dogChallengeMode = false;
  loadingState.dogChallengeComplete = false;
}

async function restartOpeningWizardSequenceFromOrientation() {
  resetOpeningWizardRuntime();
  loadingState.activeSurface = "openingWizard";
  showActiveSurface();
  await playOpeningWizardSequence();
}

async function startGanjaGoblinsFromOpening() {
  const loadingScene = document.querySelector('[data-scene="Loading"]');
  const openingWizard = document.querySelector("#opening-wizard");

  if (!loadingScene || !openingWizard || openingWizard.classList.contains("is-starting-game")) {
    return;
  }

  unlockGameAudio();
  unlockTypingAudio().catch(() => {});
  hideOpeningBubbleOnly();
  stopOpeningMountainExplosionLoop();
  loadingState.pathChallengeActive = false;
  stopProceduralLoop(audioState.music, OPENING_GAME_START_FADE_MS / 1000);
  openingWizard.classList.add("is-starting-game");
  loadingScene.classList.add("is-ending");
  await waitWhileLandscape(OPENING_GAME_START_FADE_MS);
  hideElement(openingWizard);
  openingWizard.classList.remove("is-active", "is-path-running", "is-travel-hud-active", "is-path-complete", "is-starting-game");
  await playMiniGameIntroSequence();
}

function failOpeningPathChallenge() {
  const openingWizard = document.querySelector("#opening-wizard");
  const openingDialogue = document.querySelector("#opening-dialogue");

  if (!openingWizard || loadingState.pathChallengeFailed || !loadingState.pathChallengeActive) {
    return;
  }

  loadingState.pathChallengeFailed = true;
  loadingState.pathChallengeActive = false;
  loadingState.travelDialogueRunId += 1;
  hideOpeningBubbleOnly();
  if (loadingState.dogChallengeMode) {
    loadingState.dogChallengeFailCount += 1;
    hideOpeningDogSkipButton();
    stopOpeningDogDodgeChallenge({ keepLane: true, keepMode: true });
  }
  openingWizard.classList.remove("is-travel-hud-active");
  openingWizard.classList.add("is-path-failed");
  if (!loadingState.dogChallengeMode) {
    showOpeningDogSkipButton({ mode: "path" });
  }

  if (openingDialogue) {
    openingDialogue.classList.remove("is-visible");
  }

  if (loadingState.travelHudCompleteTimer) {
    window.clearTimeout(loadingState.travelHudCompleteTimer);
    loadingState.travelHudCompleteTimer = null;
  }

  window.setTimeout(() => {
    restartOpeningPathChallenge();
  }, OPENING_PATH_FAIL_RESTART_MS);
}

async function playOpeningRestartDialogue() {
  const openingWizard = document.querySelector("#opening-wizard");
  const openingDialogue = document.querySelector("#opening-dialogue");
  const openingDialogueText = document.querySelector("#opening-dialogue-text");

  if (!openingWizard?.classList.contains("is-path-running") || !openingDialogue || !openingDialogueText) {
    return;
  }

  loadingState.travelDialogueRunId += 1;
  const dialogueRunId = loadingState.travelDialogueRunId;
  const restartIndex = Math.min(loadingState.pathFailRestartCount, OPENING_WIZARD_RESTART_DIALOGUE.length - 1);

  loadingState.pathFailRestartCount += 1;
  openingDialogueText.textContent = "";
  showElement(openingDialogue);
  window.requestAnimationFrame(() => openingDialogue.classList.add("is-visible"));
  await waitWhileLandscape(180);

  if (dialogueRunId !== loadingState.travelDialogueRunId || !openingWizard.classList.contains("is-path-running")) {
    return;
  }

  await typeWizardSpeech(
    openingDialogueText,
    OPENING_WIZARD_RESTART_DIALOGUE[restartIndex],
    OPENING_WIZARD_DIALOGUE_TYPE_SPEED_MS,
  );
  await waitWhileLandscape(2200);

  if (dialogueRunId !== loadingState.travelDialogueRunId) {
    return;
  }

  openingDialogue.classList.remove("is-visible");
  await waitWhileLandscape(240);
  hideElement(openingDialogue);
}

async function restartOpeningPathChallenge() {
  const openingWizard = document.querySelector("#opening-wizard");

  if (!openingWizard?.classList.contains("is-path-running")) {
    return;
  }

  hideOpeningDogSkipButton();
  openingWizard.classList.remove("is-path-failed", "is-travel-hud-active");
  openingWizard.classList.remove("is-path-complete", "is-starting-game");
  openingWizard.classList.remove("is-path-running");
  void openingWizard.offsetWidth;
  openingWizard.classList.add("is-path-running");

  loadingState.pathChallengeFailed = false;
  loadingState.travelHudStarted = false;
  loadingState.travelHudStartedAt = 0;
  loadingState.travelDialogueStarted = false;
  loadingState.travelDialogueRunId += 1;
  loadingState.pathChallengeActive = false;

  if (loadingState.dogChallengeMode) {
    startOpeningDogDodgeChallenge({ skipTutorial: true, resetProgress: true });
    return;
  }

  await playOpeningRestartDialogue();
  scheduleOpeningTravelHudSequence(OPENING_TRAVEL_HUD_AFTER_TUTORIAL_MS, { playDialogue: false });
}

function scheduleOpeningTravelHudSequence(delay = OPENING_TRAVEL_HUD_AFTER_TUTORIAL_MS, options = {}) {
  if (loadingState.travelHudStarted || loadingState.travelHudTimer) {
    return;
  }

  loadingState.travelHudTimer = window.setTimeout(async () => {
    const openingWizard = document.querySelector("#opening-wizard");

    loadingState.travelHudTimer = null;

    if (!openingWizard?.classList.contains("is-path-running")) {
      return;
    }

    const shouldPlayDialogue = options.playDialogue !== false;
    const dialogueComplete = shouldPlayDialogue ? await playOpeningTravelDialogue() : true;

    if (!dialogueComplete || !openingWizard.classList.contains("is-path-running") || loadingState.pathChallengeFailed) {
      return;
    }

    loadingState.travelHudStarted = true;
    loadingState.travelHudStartedAt = performance.now();
    loadingState.pathChallengeActive = true;
    openingWizard.style.setProperty(
      "--travel-hud-life",
      `${(loadingState.dogChallengeMode ? OPENING_DOG_CHALLENGE_COMPLETE_MS + 1500 : 23500) / 1000}s`,
    );
    openingWizard.style.setProperty(
      "--travel-marker-duration",
      `${(loadingState.dogChallengeMode ? OPENING_DOG_CHALLENGE_COMPLETE_MS - 900 : 21200) / 1000}s`,
    );
    openingWizard.classList.remove("is-travel-hud-active");
    void openingWizard.offsetWidth;
    openingWizard.classList.add("is-travel-hud-active");
    scheduleOpeningTapBubble(loadingState.dogChallengeMode ? OPENING_DOG_CHALLENGE_BUBBLE_DELAY_MS : OPENING_TAP_BUBBLE_DELAY_MS);

    if (loadingState.travelHudCompleteTimer) {
      window.clearTimeout(loadingState.travelHudCompleteTimer);
    }

    loadingState.travelHudCompleteTimer = window.setTimeout(() => {
      completeOpeningPathChallenge();
    }, loadingState.dogChallengeMode ? OPENING_DOG_CHALLENGE_COMPLETE_MS : OPENING_TRAVEL_HUD_COMPLETE_MS);
  }, delay);
}

async function playOpeningTravelDialogue() {
  const openingWizard = document.querySelector("#opening-wizard");
  const openingDialogue = document.querySelector("#opening-dialogue");
  const openingDialogueText = document.querySelector("#opening-dialogue-text");

  if (
    loadingState.travelDialogueStarted ||
    !openingWizard?.classList.contains("is-path-running") ||
    !openingDialogue ||
    !openingDialogueText
  ) {
    return;
  }

  loadingState.travelDialogueStarted = true;
  loadingState.travelDialogueRunId += 1;
  const dialogueRunId = loadingState.travelDialogueRunId;
  openingDialogueText.textContent = "";
  showElement(openingDialogue);
  window.requestAnimationFrame(() => openingDialogue.classList.add("is-visible"));
  await waitWhileLandscape(180);

  for (const line of OPENING_WIZARD_TRAVEL_DIALOGUE) {
    if (
      dialogueRunId !== loadingState.travelDialogueRunId ||
      loadingState.pathChallengeFailed ||
      !openingWizard.classList.contains("is-path-running")
    ) {
      return false;
    }

    openingDialogueText.textContent = "";
    await typeWizardSpeech(openingDialogueText, line, OPENING_WIZARD_DIALOGUE_TYPE_SPEED_MS);
    await waitForOpeningDialogueContinue(openingDialogue);
  }

  if (dialogueRunId !== loadingState.travelDialogueRunId || loadingState.pathChallengeFailed) {
    return false;
  }

  openingDialogue.classList.remove("is-visible");
  await waitWhileLandscape(240);
  hideElement(openingDialogue);
  return true;
}

function stopOpeningMountainExplosionLoop() {
  if (loadingState.mountainExplosionTimer) {
    window.clearTimeout(loadingState.mountainExplosionTimer);
    loadingState.mountainExplosionTimer = null;
  }
}

function triggerOpeningMountainExplosion() {
  const openingWizard = document.querySelector("#opening-wizard");
  const openingForest = document.querySelector("#opening-forest");

  if (!openingWizard || !openingForest) {
    return;
  }

  playSoundEffect("mountainExplosion", { minGap: 1200 });
  openingWizard.classList.remove("is-mountain-exploding");
  openingForest.classList.remove("is-mountain-exploding");
  void openingWizard.offsetWidth;
  openingWizard.classList.add("is-mountain-exploding");
  openingForest.classList.add("is-mountain-exploding");

  window.setTimeout(() => {
    openingWizard.classList.remove("is-mountain-exploding");
    openingForest.classList.remove("is-mountain-exploding");
  }, OPENING_MOUNTAIN_EXPLOSION_MS);
}

function scheduleOpeningMountainExplosionLoop() {
  const openingWizard = document.querySelector("#opening-wizard");

  if (!openingWizard?.classList.contains("is-path-running")) {
    return;
  }

  stopOpeningMountainExplosionLoop();

  const delay =
    OPENING_RECURRING_EXPLOSION_MIN_MS +
    Math.random() * (OPENING_RECURRING_EXPLOSION_MAX_MS - OPENING_RECURRING_EXPLOSION_MIN_MS);

  loadingState.mountainExplosionTimer = window.setTimeout(() => {
    triggerOpeningMountainExplosion();
    scheduleOpeningMountainExplosionLoop();
  }, delay);
}

function scheduleOpeningTapBubble(delay = OPENING_TAP_BUBBLE_INTERVAL_MS) {
  if (loadingState.tapBubbleTimer) {
    window.clearTimeout(loadingState.tapBubbleTimer);
  }

  loadingState.tapBubbleTimer = window.setTimeout(() => {
    showOpeningTapBubble();
  }, delay);
}

function getOpeningBubbleDelay() {
  if (!loadingState.travelHudStarted || !loadingState.pathChallengeActive) {
    return OPENING_TAP_BUBBLE_INTERVAL_MS;
  }

  const progress = getOpeningTravelProgress();
  const easedProgress = loadingState.dogChallengeMode ? Math.pow(progress, 1.28) : progress * progress;
  const startInterval = loadingState.dogChallengeMode ? OPENING_DOG_CHALLENGE_BUBBLE_DELAY_MS : OPENING_TAP_BUBBLE_INTERVAL_MS;
  const minInterval = loadingState.dogChallengeMode ? OPENING_DOG_CHALLENGE_BUBBLE_MIN_MS : OPENING_TAP_BUBBLE_MIN_INTERVAL_MS;
  const interval =
    startInterval -
    (startInterval - minInterval) * easedProgress;

  return Math.max(minInterval, interval);
}

function getOpeningTravelProgress() {
  if (!loadingState.travelHudStartedAt) {
    return 0;
  }

  const elapsed = Math.max(0, performance.now() - loadingState.travelHudStartedAt);
  const duration = loadingState.dogChallengeMode ? OPENING_DOG_CHALLENGE_COMPLETE_MS : OPENING_TRAVEL_HUD_COMPLETE_MS;
  return Math.min(elapsed / duration, 1);
}

function getOpeningBubbleActiveLimit() {
  if (loadingState.dogChallengeMode) {
    const progress = getOpeningTravelProgress();
    if (progress > 0.78) {
      return 3;
    }

    return progress > 0.46 ? 2 : 1;
  }

  return getOpeningTravelProgress() > 0.68 ? 3 : 2;
}

function getOpeningActiveBubblePositions(bubbles) {
  return bubbles
    .filter((candidate) => !candidate.hidden && candidate.classList.contains("is-visible"))
    .map((candidate) => ({
      x: Number.parseFloat(candidate.style.getPropertyValue("--bubble-x")) || 0,
      y: Number.parseFloat(candidate.style.getPropertyValue("--bubble-y")) || 0,
    }))
    .filter((position) => position.x > 0 && position.y > 0);
}

function createOpeningBubblePosition(bubbleSide, dialogueVisible, bubbles) {
  const activePositions = getOpeningActiveBubblePositions(bubbles);
  const minDistance = loadingState.dogChallengeMode ? 32 : 18;
  const minX = 14;
  const maxX = 86;
  const minY = 20;
  const maxY = 78;
  let fallbackPosition = null;

  for (let attempt = 0; attempt < 28; attempt += 1) {
    const isDogBubble = loadingState.dogChallengeMode;
    const candidate = {
      x:
        bubbleSide === "is-left"
          ? isDogBubble
            ? 9 + Math.random() * 16
            : 16 + Math.random() * 24
          : dialogueVisible
            ? 74 + Math.random() * 10
            : isDogBubble
              ? 75 + Math.random() * 16
              : 60 + Math.random() * 24,
      y: isDogBubble ? 23 + Math.random() * 50 : dialogueVisible ? 50 + Math.random() * 12 : 24 + Math.random() * 42,
    };

    candidate.x = Math.max(minX, Math.min(maxX, candidate.x));
    candidate.y = Math.max(minY, Math.min(maxY, candidate.y));
    fallbackPosition = candidate;

    const hasEnoughRoom = activePositions.every((position) => {
      const distance = Math.hypot(candidate.x - position.x, candidate.y - position.y);
      return distance >= minDistance;
    });

    if (hasEnoughRoom) {
      return candidate;
    }
  }

  return fallbackPosition || { x: bubbleSide === "is-left" ? 18 : 72, y: 38 };
}

function showOpeningTapBubble() {
  const openingWizard = document.querySelector("#opening-wizard");
  const bubbles = [...document.querySelectorAll(".opening-tap-bubble")];
  const activeBubbleCount = bubbles.filter((candidate) => !candidate.hidden && candidate.classList.contains("is-visible")).length;

  if (loadingState.tapBubbleTutorialSeen && activeBubbleCount >= getOpeningBubbleActiveLimit()) {
    if (loadingState.pathChallengeActive) {
      scheduleOpeningTapBubble(Math.max(220, getOpeningBubbleDelay() * 0.45));
    }

    return;
  }

  const bubble =
    !loadingState.tapBubbleTutorialSeen
      ? document.querySelector("#opening-tap-bubble")
      : bubbles.find((candidate) => candidate.hidden || !candidate.classList.contains("is-visible"));
  const button = bubble?.querySelector(".opening-tap-bubble__button");
  const tutorial = document.querySelector("#opening-tap-tutorial");
  const tutorialText = tutorial?.querySelector("p");
  const tutorialPrompt = tutorial?.querySelector("span");
  const openingDialogue = document.querySelector("#opening-dialogue");

  if (!openingWizard || !bubble || !button || !openingWizard.classList.contains("is-path-running")) {
    if (loadingState.pathChallengeActive) {
      scheduleOpeningTapBubble(getOpeningBubbleDelay());
    }

    return;
  }

  const dialogueVisible = openingDialogue?.classList.contains("is-visible");
  const bubbleSide = Math.random() < 0.5 ? "is-left" : "is-right";
  const bubblePosition = createOpeningBubblePosition(bubbleSide, dialogueVisible, bubbles);

  bubble.classList.remove("is-visible", "is-left", "is-right", "is-popped", "is-tutorial-target");
  bubble.classList.add(bubbleSide);
  bubble.style.setProperty("--bubble-x", `${bubblePosition.x}vw`);
  bubble.style.setProperty("--bubble-y", `${bubblePosition.y}vh`);
  tutorial?.style.setProperty("--bubble-x", `${bubblePosition.x}vw`);
  tutorial?.style.setProperty("--bubble-y", `${bubblePosition.y}vh`);
  showElement(bubble);

  const handleTap = () => {
    if (!loadingState.tapBubbleTutorialSeen && !openingWizard.classList.contains("is-tap-tutorial-ready")) {
      return;
    }

    const shouldStartTravelAfterPop =
      loadingState.tapBubbleTutorialSeen &&
      openingWizard.classList.contains("is-tap-tutorial-ready") &&
      !loadingState.travelHudStarted;
    const isTutorialReadyTap = openingWizard.classList.contains("is-tap-tutorial-ready");

    if (!isTutorialReadyTap) {
      const shownAt = Number(bubble.dataset.shownAt || 0);
      const bubbleAge = performance.now() - shownAt;

      if (!loadingState.pathChallengeActive || bubbleAge < OPENING_TAP_SUCCESS_START_MS) {
        failOpeningPathChallenge();
        return;
      }
    }

    if (loadingState.tapBubbleTimer) {
      if (isTutorialReadyTap) {
        window.clearTimeout(loadingState.tapBubbleTimer);
        loadingState.tapBubbleTimer = null;
      }
    }

    if (bubble.openingBubbleTimer) {
      window.clearTimeout(bubble.openingBubbleTimer);
      bubble.openingBubbleTimer = null;
    }

    if (isTutorialReadyTap && loadingState.tapBubbleTutorialTimer) {
      window.clearTimeout(loadingState.tapBubbleTutorialTimer);
      loadingState.tapBubbleTutorialTimer = null;
    }

    openingWizard.classList.remove("is-tap-tutorial-paused", "is-tap-tutorial-ready");
    tutorial?.classList.remove("is-visible", "is-ready");
    if (tutorial) {
      window.setTimeout(() => hideElement(tutorial), 180);
    }

    bubble.classList.add("is-popped");
    playSoundEffect("tapPop", { minGap: 60 });
    window.setTimeout(() => {
      bubble.classList.remove("is-popped", "is-visible", "is-tutorial-target");
      hideElement(bubble);
      if (shouldStartTravelAfterPop) {
        scheduleOpeningTravelHudSequence();
        return;
      }

      if (loadingState.pathChallengeActive) {
        scheduleOpeningTapBubble(getOpeningBubbleDelay());
      }
    }, 560);
  };

  const handleBubblePointer = (event) => {
    event.preventDefault();
    event.stopPropagation();
    handleTap();
  };

  bubble.onpointerdown = handleBubblePointer;
  button.onclick = handleTap;
  button.onpointerdown = handleBubblePointer;
  bubble.ontouchstart = handleBubblePointer;
  button.ontouchstart = handleBubblePointer;

  void bubble.offsetWidth;

  if (!loadingState.tapBubbleTutorialSeen && tutorial && tutorialText && tutorialPrompt) {
    openingWizard.classList.add("is-tap-tutorial-paused");
    bubble.classList.add("is-visible", "is-tutorial-target");
    tutorial.classList.remove("is-visible", "is-left", "is-right");
    tutorial.classList.add(bubbleSide);
    tutorialText.textContent = "Wait first. Pop the bubble only when the shrinking outer ring reaches the bubble's edge. Early taps fail.";
    tutorialPrompt.textContent = "Press anywhere to continue";
    tutorialPrompt.hidden = false;
    showElement(tutorial);

    const startBubble = () => {
      openingWizard.classList.remove("is-tap-tutorial-paused");
      tutorial.classList.remove("is-visible");
      window.setTimeout(() => hideElement(tutorial), 180);
      void bubble.offsetWidth;
      bubble.classList.remove("is-visible", "is-tutorial-target");
      void bubble.offsetWidth;
      bubble.dataset.shownAt = String(performance.now());
      bubble.classList.add("is-visible", "is-tutorial-target");

      loadingState.tapBubbleTutorialTimer = window.setTimeout(() => {
        loadingState.tapBubbleTutorialSeen = true;
        openingWizard.classList.add("is-tap-tutorial-paused", "is-tap-tutorial-ready");
        tutorial.classList.remove("is-visible", "is-left", "is-right");
        tutorial.classList.add(bubbleSide, "is-ready");
        tutorialText.textContent = "Pop the bubble now";
        tutorialPrompt.hidden = true;
        showElement(tutorial);
        window.requestAnimationFrame(() => tutorial.classList.add("is-visible"));
      }, OPENING_TAP_TUTORIAL_READY_MS);
    };

    tutorial.onclick = startBubble;
    window.setTimeout(() => tutorial.classList.add("is-visible"), 20);
    return;
  }

  bubble.dataset.shownAt = String(performance.now());
  bubble.classList.add("is-visible");

  if (loadingState.pathChallengeActive) {
    scheduleOpeningTapBubble(getOpeningBubbleDelay());
  }

  bubble.openingBubbleTimer = window.setTimeout(() => {
    bubble.openingBubbleTimer = null;

    if (loadingState.pathChallengeActive) {
      failOpeningPathChallenge();
      return;
    }

    bubble.classList.remove("is-visible");
    window.setTimeout(() => {
      hideElement(bubble);
    }, 220);
  }, OPENING_TAP_BUBBLE_WINDOW_MS);
}

function buildOpeningForestScene() {
  const forest = document.querySelector("#opening-forest");

  if (!forest || forest.dataset.generated === "true") {
    return;
  }

  forest.dataset.generated = "true";

  const sky = document.createElement("div");
  sky.className = "opening-forest__sky";

  const stars = document.createElement("div");
  stars.className = "opening-forest__stars";

  OPENING_SKY_STARS.forEach(([x, y, scale], index) => {
    const star = document.createElement("span");
    star.className = "opening-forest__star";
    star.style.setProperty("--x", `${x}%`);
    star.style.setProperty("--y", `${y}%`);
    star.style.setProperty("--scale", scale);
    star.style.setProperty("--delay", `${(index % 9) * -0.43}s`);
    stars.append(star);
  });

  const constellation = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  constellation.classList.add("opening-forest__constellation");
  constellation.classList.add(Math.random() < 0.5 ? "is-left" : "is-right");
  constellation.setAttribute("viewBox", "0 0 117 30");
  constellation.setAttribute("aria-hidden", "true");

  OPENING_CONSTELLATION_PATHS.forEach((pathData, index) => {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", pathData);
    path.setAttribute("pathLength", "1");
    path.style.setProperty("--draw-delay", `${index * 0.34}s`);
    constellation.append(path);
  });

  const constellationPoints = [...new Set(OPENING_CONSTELLATION_PATHS.join(" ").match(/\d+(?:\.\d+)? \d+(?:\.\d+)?/g) ?? [])];

  constellationPoints.forEach((point) => {
    const [cx, cy] = point.split(" ");
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", cx);
    circle.setAttribute("cy", cy);
    circle.setAttribute("r", "0.72");
    constellation.append(circle);
  });

  stars.append(constellation);

  const partyLights = document.createElement("div");
  partyLights.className = "opening-forest__party-lights";

  for (let index = 0; index < 4; index += 1) {
    const beam = document.createElement("span");
    beam.className = `opening-forest__party-light opening-forest__party-light--${index + 1}`;
    partyLights.append(beam);
  }

  const fireworks = document.createElement("div");
  fireworks.className = "opening-forest__fireworks";

  for (let index = 0; index < 5; index += 1) {
    const burst = document.createElement("span");
    burst.className = `opening-forest__firework opening-forest__firework--${index + 1}`;
    fireworks.append(burst);
  }

  const mountainExplosion = document.createElement("div");
  mountainExplosion.className = "opening-forest__mountain-explosion";

  const bigFireworks = document.createElement("div");
  bigFireworks.className = "opening-forest__big-fireworks";

  for (let index = 0; index < 2; index += 1) {
    const shell = document.createElement("span");
    shell.className = `opening-forest__big-firework opening-forest__big-firework--${index + 1}`;
    shell.innerHTML = '<span class="opening-forest__big-firework-rocket"></span><span class="opening-forest__big-firework-burst"></span>';
    bigFireworks.append(shell);
  }

  const horizon = document.createElement("div");
  horizon.className = "opening-forest__horizon";

  const path = document.createElement("div");
  path.className = "opening-forest__path";

  const speedLines = document.createElement("div");
  speedLines.className = "opening-forest__speed-lines";

  for (let index = 0; index < 14; index += 1) {
    const line = document.createElement("span");
    line.style.setProperty("--x", `${8 + ((index * 13) % 84)}vw`);
    line.style.setProperty("--delay", `${index * -0.19}s`);
    line.style.setProperty("--length", `${10 + (index % 5) * 4}vh`);
    speedLines.append(line);
  }

  const dogLayer = document.createElement("div");
  dogLayer.className = "opening-dog-layer";

  const dogTutorial = document.createElement("div");
  dogTutorial.className = "opening-dog-tutorial";
  dogTutorial.hidden = true;
  dogTutorial.innerHTML = `
    <span class="opening-dog-tutorial__arrow" aria-hidden="true"></span>
    <span class="opening-dog-tutorial__text">${OPENING_DOG_TUTORIAL_TEXT}</span>
  `;

  const dogWarning = document.createElement("div");
  dogWarning.className = "opening-dog-warning";
  dogWarning.hidden = true;
  dogWarning.innerHTML = `
    <span class="opening-dog-warning__arrow" aria-hidden="true"></span>
    <span class="opening-dog-warning__text">Swipe</span>
  `;

  const travelHud = document.createElement("div");
  travelHud.className = "opening-travel-hud";
  travelHud.innerHTML = `
    <span class="opening-travel-hud__line"></span>
    <span class="opening-travel-hud__post opening-travel-hud__post--start"></span>
    <span class="opening-travel-hud__post opening-travel-hud__post--end"></span>
    <span class="opening-travel-hud__treasure" aria-hidden="true"></span>
    <span class="opening-travel-hud__marker" aria-hidden="true"></span>
    <button type="button" class="opening-travel-hud__play">
      <span class="opening-travel-hud__goblin" aria-hidden="true"></span>
      <span>play</span>
    </button>
  `;
  const travelPlay = travelHud.querySelector(".opening-travel-hud__play");
  travelPlay?.addEventListener("click", startGanjaGoblinsFromOpening);
  travelPlay?.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    startGanjaGoblinsFromOpening();
  });
  travelPlay?.addEventListener("touchstart", (event) => {
    event.preventDefault();
    startGanjaGoblinsFromOpening();
  });

  forest.append(sky, stars, partyLights, fireworks, mountainExplosion, bigFireworks, horizon, path, speedLines, dogLayer, travelHud);
  forest.parentElement?.append(dogTutorial);
  forest.parentElement?.append(dogWarning);

  OPENING_FOREST_PROPS.forEach((prop, index) => {
    const model = document.createElement("div");
    model.className = `opening-forest__prop opening-forest__start-prop opening-forest__prop--${prop.type}`;
    const sideDirection = prop.x < 50 ? -1 : 1;
    const distanceFromCenter = Math.abs(prop.x - 50);
    const endShift = sideDirection * Math.max(86, distanceFromCenter * 2.25);
    const endDrop = Math.max(170, 202 - prop.y);
    const endScale = Math.max(prop.scale + 1.5, prop.scale * 2.15);
    model.style.setProperty("--x", `${prop.x}%`);
    model.style.setProperty("--y", `${prop.y}vh`);
    const sizeMultiplier = prop.type === "tree" ? 1.14 : 1.07;
    model.style.setProperty("--size", `${prop.size * sizeMultiplier}vmin`);
    model.style.setProperty("--scale", prop.scale);
    model.style.setProperty("--z", prop.z);
    model.style.setProperty("--alpha", prop.alpha);
    model.style.setProperty("--end-shift", `${endShift}vw`);
    model.style.setProperty("--end-drop", `${endDrop}vh`);
    model.style.setProperty("--early-shift", `${endShift * 0.16}vw`);
    model.style.setProperty("--early-drop", `${endDrop * 0.16}vh`);
    model.style.setProperty("--mid-shift", `${endShift * 0.48}vw`);
    model.style.setProperty("--mid-drop", `${endDrop * 0.48}vh`);
    model.style.setProperty("--near-shift", `${endShift * 0.78}vw`);
    model.style.setProperty("--near-drop", `${endDrop * 0.78}vh`);
    model.style.setProperty("--end-scale", endScale);
    model.style.setProperty("--early-scale", prop.scale + (endScale - prop.scale) * 0.16);
    model.style.setProperty("--mid-scale", prop.scale + (endScale - prop.scale) * 0.48);
    model.style.setProperty("--near-scale", prop.scale + (endScale - prop.scale) * 0.78);
    model.style.setProperty("--run-duration", `${5.25 + (index % 4) * 0.16}s`);
    model.style.setProperty("--run-delay", `${index * 0.025}s`);
    forest.append(model);
  });

  const createRunProp = (prop, index) => {
    const model = document.createElement("div");
    model.className = `opening-forest__run-prop opening-forest__prop--${prop.type}`;

    const sizeMultiplier = prop.type === "tree" ? 1.18 : 1.08;
    const endScale = prop.type === "tree" ? prop.endScale * 1.05 : prop.endScale;
    model.style.setProperty("--z", 40 - index);
    model.style.setProperty("--start-x", `${prop.startX}%`);
    model.style.setProperty("--start-y", `${prop.startY}vh`);
    model.style.setProperty("--end-shift", `${prop.endShift}vw`);
    model.style.setProperty("--end-drop", `${prop.endDrop}vh`);
    model.style.setProperty("--early-shift", `${prop.endShift * 0.16}vw`);
    model.style.setProperty("--early-drop", `${prop.endDrop * 0.16}vh`);
    model.style.setProperty("--mid-shift", `${prop.endShift * 0.48}vw`);
    model.style.setProperty("--mid-drop", `${prop.endDrop * 0.48}vh`);
    model.style.setProperty("--near-shift", `${prop.endShift * 0.78}vw`);
    model.style.setProperty("--near-drop", `${prop.endDrop * 0.78}vh`);
    model.style.setProperty("--base-size", `${prop.size * sizeMultiplier}vmin`);
    model.style.setProperty("--end-scale", endScale);
    model.style.setProperty("--early-scale", 0.12 + (endScale - 0.12) * 0.16);
    model.style.setProperty("--mid-scale", 0.12 + (endScale - 0.12) * 0.48);
    model.style.setProperty("--near-scale", 0.12 + (endScale - 0.12) * 0.78);
    model.style.setProperty("--run-duration", `${prop.duration}s`);
    model.style.setProperty("--run-delay", `${prop.delay}s`);
    forest.append(model);
  };

  OPENING_FOREST_RUN_PROPS.forEach((prop, index) => {
    createRunProp(prop, index);
  });

}

function showActiveSurface() {
  const terminalPanel = document.querySelector(".terminal-panel");
  const orientationWarning = document.querySelector("#orientation-warning");
  const transmissionMessage = document.querySelector("#transmission-message");
  const openingWizard = document.querySelector("#opening-wizard");
  const openingDialogue = document.querySelector("#opening-dialogue");
  const openingDialogueText = document.querySelector("#opening-dialogue-text");
  const wizardHologram = document.querySelector("#wizard-hologram");
  const wizardSpeech = document.querySelector("#wizard-speech");
  const chapterSelect = document.querySelector("#chapter-select");
  const miniGameIntro = document.querySelector("#mini-game-intro");
  const miniGameCanvas = document.querySelector("#mini-game-canvas");

  if (
    !terminalPanel ||
    !orientationWarning ||
    !transmissionMessage ||
    !openingWizard ||
    !openingDialogue ||
    !openingDialogueText ||
    !wizardHologram ||
    !wizardSpeech ||
    !chapterSelect ||
    !miniGameIntro ||
    !miniGameCanvas
  ) {
    return;
  }

  if (loadingState.activeSurface === "chapterSelect") {
    hideElement(orientationWarning);
    showElement(chapterSelect);
    restoreChapterSelectSurface();
    hideElement(terminalPanel);
    hideElement(transmissionMessage);
    hideElement(openingWizard);
    hideElement(wizardHologram);
    hideElement(wizardSpeech);
    hideElement(miniGameIntro);
    hideElement(miniGameCanvas);
    return;
  }

  if (loadingState.activeSurface === "title" || loadingState.activeSurface === "terminal") {
    hideElement(orientationWarning);
    hideElement(chapterSelect);
    showElement(terminalPanel);
    hideElement(transmissionMessage);
    hideElement(openingWizard);
    hideElement(wizardHologram);
    hideElement(wizardSpeech);
    hideElement(miniGameIntro);
    hideElement(miniGameCanvas);
    return;
  }

  if (loadingState.activeSurface === "transmission") {
    hideElement(orientationWarning);
    hideElement(chapterSelect);
    hideElement(terminalPanel);
    showElement(transmissionMessage);
    hideElement(openingWizard);
    hideElement(wizardHologram);
    hideElement(wizardSpeech);
    hideElement(miniGameIntro);
    hideElement(miniGameCanvas);
    return;
  }

  if (loadingState.activeSurface === "wizard") {
    hideElement(orientationWarning);
    hideElement(chapterSelect);
    hideElement(terminalPanel);
    hideElement(transmissionMessage);
    hideElement(openingWizard);
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

  if (loadingState.activeSurface === "openingWizard") {
    hideElement(orientationWarning);
    hideElement(chapterSelect);
    hideElement(terminalPanel);
    hideElement(transmissionMessage);
    showElement(openingWizard);
    hideElement(wizardHologram);
    hideElement(wizardSpeech);
    hideElement(miniGameIntro);
    hideElement(miniGameCanvas);
    return;
  }

  if (loadingState.activeSurface === "miniGameIntro") {
    hideElement(orientationWarning);
    hideElement(chapterSelect);
    hideElement(terminalPanel);
    hideElement(transmissionMessage);
    hideElement(openingWizard);
    hideElement(wizardHologram);
    hideElement(wizardSpeech);
    showElement(miniGameIntro);
    hideElement(miniGameCanvas);
    return;
  }

  if (loadingState.activeSurface === "miniGame") {
    hideElement(orientationWarning);
    hideElement(chapterSelect);
    hideElement(terminalPanel);
    hideElement(transmissionMessage);
    hideElement(openingWizard);
    hideElement(wizardHologram);
    hideElement(wizardSpeech);
    hideElement(miniGameIntro);
    showElement(miniGameCanvas);
  }
}

function restoreChapterSelectSurface() {
  const chapterSelect = document.querySelector("#chapter-select");
  const options = [...document.querySelectorAll(".chapter-select__option")];
  const playButton = chapterSelect?.querySelector(".chapter-select__play");

  if (!chapterSelect || !playButton) {
    return;
  }

  chapterSelect.classList.remove("is-exiting");
  chapterSelect.classList.add("is-visible", "is-ready");
  options.forEach((option) => {
    option.disabled = false;
    option.classList.toggle("is-selected", option.dataset.chapterTarget === loadingState.selectedChapterTarget);
  });
  playButton.disabled = !loadingState.selectedChapterTarget;
  playButton.style.opacity = "1";
}

function hideLoadingSurfaces(options = {}) {
  const terminalPanel = document.querySelector(".terminal-panel");
  const orientationWarning = document.querySelector("#orientation-warning");
  const transmissionMessage = document.querySelector("#transmission-message");
  const openingWizard = document.querySelector("#opening-wizard");
  const openingDialogue = document.querySelector("#opening-dialogue");
  const wizardHologram = document.querySelector("#wizard-hologram");
  const wizardSpeech = document.querySelector("#wizard-speech");
  const chapterSelect = document.querySelector("#chapter-select");
  const miniGameIntro = document.querySelector("#mini-game-intro");
  const miniGameCanvas = document.querySelector("#mini-game-canvas");
  const finalChallenge = document.querySelector("#final-challenge");
  const finalFpsCanvas = document.querySelector("#final-fps-canvas");

  stopOpeningTapBubbleGame();
  stopOpeningDogDodgeChallenge();
  stopOpeningMountainExplosionLoop();
  if (!options.preserveFinalFps) {
    stopFinalFpsChallenge();
  }

  if (orientationWarning) {
    hideElement(orientationWarning);
  }

  if (chapterSelect) {
    hideElement(chapterSelect);
  }

  if (miniGameIntro) {
    hideElement(miniGameIntro);
  }

  if (miniGameCanvas) {
    hideElement(miniGameCanvas);
  }

  if (finalChallenge) {
    hideElement(finalChallenge);
  }

  if (finalFpsCanvas) {
    hideElement(finalFpsCanvas);
  }

  if (terminalPanel) {
    hideElement(terminalPanel);
  }

  if (transmissionMessage) {
    hideElement(transmissionMessage);
  }

  if (openingWizard) {
    hideElement(openingWizard);
  }

  if (openingDialogue) {
    hideElement(openingDialogue);
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

function waitForScreenPress() {
  return new Promise((resolve) => {
    const handlePress = (event) => {
      if (!loadingState.isLandscape) {
        return;
      }

      event?.preventDefault?.();
      unlockGameAudio();
      unlockTypingAudio().catch(() => {});
      playSoundEffect("menuStart");
      document.removeEventListener("pointerdown", handlePress);
      document.removeEventListener("touchstart", handlePress);
      resolve();
    };

    document.addEventListener("pointerdown", handlePress);
    document.addEventListener("touchstart", handlePress, { passive: false });
  });
}

async function playChapterSelectSequence() {
  const chapterSelect = document.querySelector("#chapter-select");
  const options = [...document.querySelectorAll(".chapter-select__option")];
  const playButton = chapterSelect?.querySelector(".chapter-select__play");

  if (!chapterSelect || !playButton || options.length === 0) {
    await startSelectedChapter("start");
    return;
  }

  loadingState.activeSurface = "chapterSelect";
  loadingState.chapterMenuShown = true;
  loadingState.selectedChapterTarget = null;
  hideLoadingSurfaces({ preserveFinalFps: false });
  showElement(chapterSelect);
  chapterSelect.classList.remove("is-visible", "is-ready", "is-exiting");
  playButton.style.opacity = "";
  playButton.disabled = true;
  options.forEach((option) => {
    option.classList.remove("is-selected");
    option.disabled = true;
  });

  void chapterSelect.offsetWidth;
  chapterSelect.classList.add("is-visible");
  setFinalFpsMusic("chapterMenu");
  await waitWhileLandscape(220);
  chapterSelect.classList.add("is-ready");
  await waitWhileLandscape(2180);

  options.forEach((option) => {
    option.disabled = false;
  });

  let lastChapterOption = null;
  let lastChapterOptionPressAt = 0;

  const selectChapterOption = (option, event) => {
    event?.preventDefault?.();
    if (option.disabled) {
      return;
    }

    const now = performance.now();
    if (lastChapterOption === option && now - lastChapterOptionPressAt < 280) {
      return;
    }
    lastChapterOption = option;
    lastChapterOptionPressAt = now;

    unlockAllGameAudio().catch(() => {});
    playSoundEffect("tapPop", { minGap: 120, volume: 0.55 });
    loadingState.selectedChapterTarget = option.dataset.chapterTarget || "start";
    options.forEach((candidate) => candidate.classList.toggle("is-selected", candidate === option));
    playButton.disabled = false;
  };

  options.forEach((option) => {
    option.onclick = (event) => {
      selectChapterOption(option, event);
    };
    option.onpointerdown = (event) => {
      selectChapterOption(option, event);
    };
    option.ontouchstart = (event) => {
      selectChapterOption(option, event);
    };
  });

  const startSelectedChapterFromMenu = async (event) => {
    event?.preventDefault?.();
    if (chapterSelect.dataset.starting === "true") {
      return;
    }
    if (!loadingState.selectedChapterTarget || playButton.disabled) {
      return;
    }

    chapterSelect.dataset.starting = "true";
    unlockGameAudio();
    unlockTypingAudio().catch(() => {});
    playSoundEffect("menuStart", { minGap: 120, volume: 0.7 });
    setFinalFpsMusic(null);
    playButton.disabled = true;
    options.forEach((option) => {
      option.disabled = true;
    });
    chapterSelect.classList.add("is-exiting");
    try {
      await waitWhileLandscape(620);
      hideElement(chapterSelect);
      await startSelectedChapter(loadingState.selectedChapterTarget);
    } finally {
      chapterSelect.dataset.starting = "false";
    }
  };

  playButton.onclick = startSelectedChapterFromMenu;
  playButton.onpointerdown = startSelectedChapterFromMenu;
  playButton.ontouchstart = startSelectedChapterFromMenu;
}

async function startSelectedChapter(target) {
  loadingState.activeSurface = null;

  if (target === "chapter1") {
    await playMiniGameIntroSequence();
    return;
  }

  if (target === "chapter2") {
    startPhoneChapter();
    return;
  }

  if (target === "chapter3") {
    await showFinalChallengePrompt({ skipFade: true });
    return;
  }

  if (target === "chapter4") {
    startFinalFpsChallenge({ startNearForest: true });
    return;
  }

  await waitWhileLandscape(POST_ROTATION_DELAY_MS);
  const terminalPanel = document.querySelector(".terminal-panel");
  loadingState.terminalStarted = true;
  loadingState.activeSurface = "title";
  showElement(terminalPanel);
  await waitWhileLandscape(TITLE_ONLY_DELAY_MS);

  loadingState.activeSurface = "terminal";
  revealElementWithFade(terminalPanel);
  await waitWhileLandscape(TERMINAL_FADE_IN_MS);
  playLoadingSequence();
}

function restartLoadingTerminalSequence() {
  const loadingScene = document.querySelector('[data-scene="Loading"]');
  const terminalPanel = document.querySelector(".terminal-panel");
  const output = document.querySelector("#loading-output");
  const transmissionMessage = document.querySelector("#transmission-message");

  loadingState.loadingRunId += 1;
  loadingState.terminalStarted = true;
  loadingState.activeSurface = "title";
  stopTypingSound();

  if (loadingScene) {
    loadingScene.classList.remove("is-complete", "is-ending");
  }

  if (output) {
    output.textContent = "";
  }

  if (terminalPanel) {
    terminalPanel.classList.remove("is-visible");
    showElement(terminalPanel);
  }

  if (transmissionMessage) {
    transmissionMessage.classList.remove("is-visible");
    hideElement(transmissionMessage);
  }

  showActiveSurface();
  window.setTimeout(() => {
    if (loadingState.isLandscape && loadingState.activeSurface === "title") {
      loadingState.activeSurface = "terminal";
      if (terminalPanel) {
        revealElementWithFade(terminalPanel);
      }
      playLoadingSequence();
    }
  }, TITLE_ONLY_DELAY_MS);
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
  const runId = loadingState.loadingRunId;
  await waitForLandscape();
  if (runId !== loadingState.loadingRunId) {
    return;
  }

  const signal = createSignalStrength();
  output.append(signal);

  await waitWhileLandscape(SIGNAL_FLUCTUATE_MS);
  if (runId !== loadingState.loadingRunId) {
    return;
  }
  signal.classList.add("is-locked");
  await waitWhileLandscape(SIGNAL_LOCK_DELAY_MS);
  if (runId !== loadingState.loadingRunId) {
    return;
  }

  loadingState.activeSurface = "transmission";
  hideLoadingSurfaces();
  showActiveSurface();
  await playTransmissionBlinkSequence();
}

async function playTransmissionBlinkSequence() {
  const transmissionMessage = document.querySelector("#transmission-message");
  const runId = loadingState.loadingRunId;

  if (!transmissionMessage) {
    return;
  }

  for (let blink = 0; blink < TRANSMISSION_BLINK_COUNT; blink += 1) {
    await waitForLandscape();
    if (runId !== loadingState.loadingRunId) {
      return;
    }
    transmissionMessage.classList.add("is-visible");
    await waitWhileLandscape(TRANSMISSION_BLINK_INTERVAL_MS / 2);
    if (runId !== loadingState.loadingRunId) {
      return;
    }

    transmissionMessage.classList.remove("is-visible");
    await waitWhileLandscape(TRANSMISSION_BLINK_INTERVAL_MS / 2);
    if (runId !== loadingState.loadingRunId) {
      return;
    }
  }

  hideLoadingSurfaces();
  await playOpeningWizardSequence();
}

async function playOpeningWizardSequence() {
  const openingWizard = document.querySelector("#opening-wizard");
  const openingForest = document.querySelector("#opening-forest");
  const openingDialogue = document.querySelector("#opening-dialogue");
  const openingDialogueText = document.querySelector("#opening-dialogue-text");

  if (!openingWizard || !openingForest || !openingDialogue || !openingDialogueText) {
    return;
  }

  const runId = loadingState.openingWizardRunId;
  buildOpeningForestScene();
  await waitWhileLandscape(240);
  if (runId !== loadingState.openingWizardRunId) {
    return;
  }

  loadingState.activeSurface = "openingWizard";
  openingWizard.classList.remove("is-active");
  openingWizard.classList.remove("is-path-running");
  openingWizard.classList.remove("is-mountain-exploding");
  openingWizard.classList.remove("is-travel-hud-active");
  openingWizard.classList.remove("is-path-complete", "is-starting-game", "is-speed-boosting", "is-boosted-close", "is-cup-returning");
  openingForest.classList.remove("is-mountain-exploding");
  stopOpeningTapBubbleGame();
  stopOpeningMountainExplosionLoop();
  loadingState.travelHudStarted = false;
  loadingState.travelHudStartedAt = 0;
  loadingState.travelDialogueStarted = false;
  loadingState.travelDialogueRunId += 1;
  loadingState.pathChallengeActive = false;
  loadingState.pathChallengeFailed = false;
  loadingState.pathFailRestartCount = 0;
  loadingState.tapBubbleTutorialSeen = false;
  openingDialogue.classList.remove("is-visible");
  openingDialogueText.textContent = "";
  hideElement(openingDialogue);
  showActiveSurface();
  setFinalFpsMusic("openingFunk");

  // Restart the CSS animation whenever this sequence is replayed.
  void openingWizard.offsetWidth;
  openingWizard.classList.add("is-active");

  await waitWhileLandscape(OPENING_WIZARD_RUN_MS);
  await waitWhileLandscape(OPENING_WIZARD_IDLE_BEFORE_DIALOGUE_MS);
  if (runId !== loadingState.openingWizardRunId) {
    return;
  }

  showElement(openingDialogue);
  window.requestAnimationFrame(() => {
    openingDialogue.classList.add("is-visible");
  });

  await waitWhileLandscape(260);
  await typeWizardSpeech(openingDialogueText, OPENING_WIZARD_FIRST_DIALOGUE, OPENING_WIZARD_DIALOGUE_TYPE_SPEED_MS);
  if (runId !== loadingState.openingWizardRunId) {
    return;
  }
  await waitForOpeningDialogueContinue(openingDialogue, { runId });
  if (runId !== loadingState.openingWizardRunId) {
    return;
  }

  triggerOpeningMountainExplosion();
  await waitWhileLandscape(OPENING_MOUNTAIN_EXPLOSION_MS);
  if (runId !== loadingState.openingWizardRunId) {
    return;
  }

  openingDialogueText.textContent = "";
  await waitWhileLandscape(220);
  await typeWizardSpeech(openingDialogueText, OPENING_WIZARD_SECOND_DIALOGUE, OPENING_WIZARD_DIALOGUE_TYPE_SPEED_MS);
  if (runId !== loadingState.openingWizardRunId) {
    return;
  }
  await waitForOpeningDialogueContinue(openingDialogue, { runId });
  if (runId !== loadingState.openingWizardRunId) {
    return;
  }

  openingDialogue.classList.remove("is-visible");
  await waitWhileLandscape(240);
  hideElement(openingDialogue);
  openingWizard.classList.add("is-path-running");
  scheduleOpeningTapBubble(OPENING_TAP_BUBBLE_DELAY_MS);
  scheduleOpeningMountainExplosionLoop();
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

async function typeWizardSpeech(speechText, text, speed = WIZARD_SPEECH_TYPE_SPEED_MS) {
  // Mobile browsers can hold audio resume until a real tap; never let that freeze dialogue.
  await Promise.race([
    unlockTypingAudio().catch(() => {}),
    wait(120),
  ]);

  for (const character of text) {
    await waitForLandscape();
    startTypingSound();
    speechText.textContent += character;
    await waitWhileLandscape(speed);
  }

  stopTypingSound();
}

async function playMiniGameIntroSequence() {
  const runId = ++loadingState.miniGameIntroRunId;
  const loadingScene = document.querySelector('[data-scene="Loading"]');
  const miniGameIntro = document.querySelector("#mini-game-intro");

  if (!loadingScene || !miniGameIntro) {
    return;
  }

  loadingScene.classList.remove("is-ending");
  miniGameIntro.classList.add("is-entering");
  loadingState.activeSurface = "miniGameIntro";
  showActiveSurface();
  loadRetroFxSound();
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      miniGameIntro.classList.remove("is-entering");
    });
  });

  await waitForScreenPress();
  if (runId !== loadingState.miniGameIntroRunId) {
    return;
  }

  await waitForLandscape();
  if (runId !== loadingState.miniGameIntroRunId) {
    return;
  }

  miniGameIntro.classList.add("is-exiting");
  await waitWhileLandscape(MINI_GAME_INTRO_FADE_MS);
  if (runId !== loadingState.miniGameIntroRunId) {
    return;
  }

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

  removeMiniGamePressListeners(canvas);
  canvas.removeEventListener("pointermove", handleMiniGameAim);
  miniGameState.canvas = canvas;
  miniGameState.context = canvas.getContext("2d");
  miniGameState.status = "prelude";
  miniGameState.isRunning = true;
  miniGameState.failedRetryCount = 0;
  miniGameState.preludeStartedAt = performance.now();
  miniGameState.preludeTimerGlitchSoundPlayed = false;
  miniGameState.preludeObstacles = createForestObstacles();
  miniGameState.lake = createMiniGameLake(miniGameState.preludeObstacles);
  loadMiniGameWizardSprite();
  loadingState.activeSurface = "miniGame";
  showActiveSurface();
  resizeMiniGameCanvas();
  miniGameState.animationFrame = window.requestAnimationFrame(updateMiniGamePrelude);
}

function restartMiniGameIntroFromOrientation() {
  const miniGameIntro = document.querySelector("#mini-game-intro");
  const miniGameCanvas = document.querySelector("#mini-game-canvas");

  stopTypingSound();
  stopGangGoblinsMusic(0.8);

  if (miniGameState.animationFrame) {
    window.cancelAnimationFrame(miniGameState.animationFrame);
    miniGameState.animationFrame = null;
  }

  if (miniGameCanvas) {
    removeMiniGamePressListeners(miniGameCanvas);
    miniGameCanvas.removeEventListener("pointermove", handleMiniGameAim);
    hideElement(miniGameCanvas);
  }

  miniGameState.isRunning = false;
  miniGameState.status = "idle";
  miniGameState.failedButtons = null;

  if (miniGameIntro) {
    miniGameIntro.classList.remove("is-entering", "is-exiting");
  }

  void playMiniGameIntroSequence();
}

function restartPostGamePhoneFromOrientation() {
  const canvas = document.querySelector("#mini-game-canvas");

  stopTypingSound();

  if (!canvas) {
    return;
  }

  if (miniGameState.animationFrame) {
    window.cancelAnimationFrame(miniGameState.animationFrame);
    miniGameState.animationFrame = null;
  }

  removeMiniGamePressListeners(canvas);
  canvas.removeEventListener("pointermove", handleMiniGameAim);

  const now = performance.now();
  miniGameState.canvas = canvas;
  miniGameState.context = canvas.getContext("2d");
  miniGameState.status = "phone";
  miniGameState.isRunning = true;
  miniGameState.lastFrameTime = now;
  miniGameState.phoneTransitionStartedAt = 0;
  miniGameState.phoneStartedAt = now;
  miniGameState.phoneRingStartedAt = 0;
  miniGameState.phoneAnsweredAt = 0;
  miniGameState.phoneRect = null;
  miniGameState.phoneDialogueStartedAt = 0;
  miniGameState.phoneDialogueLineIndex = 0;
  miniGameState.phoneDialogueLineStartedAt = 0;
  miniGameState.phoneDialogueTypingActive = false;
  miniGameState.phoneChallengePromptAt = 0;
  miniGameState.phoneChallengeAcceptedAt = 0;
  miniGameState.phoneChallengeButton = null;
  miniGameState.cupTableStartedAt = 0;
  miniGameState.cupTableCups = [];
  miniGameState.cupTableDecor = [];
  miniGameState.cupTableJohnStartedAt = 0;
  miniGameState.cupTableJohnLineIndex = 0;
  miniGameState.cupTableJohnLineStartedAt = 0;
  miniGameState.cupTableJohnTypingActive = false;
  miniGameState.cupTableJohnButtons = null;
  miniGameState.cupTableJohnAccepted = false;
  miniGameState.cupTablePhase = null;
  miniGameState.failedButtons = null;
  miniGameState.finishEffect = null;
  loadingState.activeSurface = "miniGame";
  showActiveSurface();
  resizeMiniGameCanvas();
  loadMiniGameWizardSprite();
  loadJohnCharacterImage();

  addMiniGamePressListeners(canvas);
  canvas.addEventListener("pointermove", handleMiniGameAim);
  miniGameState.animationFrame = window.requestAnimationFrame(updateMiniGame);
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

  removeMiniGamePressListeners(canvas);
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
  miniGameState.smokeDeaths = [];
  miniGameState.herbBursts = [];
  miniGameState.volcano = null;
  miniGameState.volcanoWave = 0;
  miniGameState.lavaRocks = [];
  miniGameState.lavaSnakes = [];
  miniGameState.lavaPools = [];
  miniGameState.fairyHut = null;
  miniGameState.helperFairies = [];
  miniGameState.tikiMen = [];
  miniGameState.droppedSpears = [];
  miniGameState.magicBursts = [];
  miniGameState.trails = [];
  miniGameState.shells = [];
  miniGameState.obstacles = miniGameState.preludeObstacles.length > 0 ? miniGameState.preludeObstacles : createForestObstacles();
  miniGameState.lake = miniGameState.lake || createMiniGameLake(miniGameState.obstacles);
  miniGameState.preludeObstacles = [];
  miniGameState.lastFrameTime = performance.now();
  miniGameState.lastSpawnTime = miniGameState.lastFrameTime;
  miniGameState.lastAppleSpawnTime = miniGameState.lastFrameTime;
  miniGameState.lastTikiSpawnTime = miniGameState.lastFrameTime;
  miniGameState.lastSmokeDeathAt = miniGameState.startedAt - MINI_GAME_SMOKE_DEATH_GAP_MS;
  miniGameState.startedAt = miniGameState.lastFrameTime;
  miniGameState.nextFrogSpawnAt =
    miniGameState.startedAt + MINI_GAME_FROG_EVENT_START_MS + Math.random() * 6000;
  miniGameState.frogSpawnCount = 0;
  miniGameState.gameplayFadeStartedAt = miniGameState.preludeStartedAt + 11200;
  miniGameState.wizardTipStartedAt = miniGameState.lastFrameTime + MINI_GAME_WIZARD_TIP_DELAY_MS;
  miniGameState.wizardTipTypingActive = false;
  miniGameState.lastFireTime = -MINI_GAME_FIRE_COOLDOWN_MS;
  miniGameState.goldenAppleSpawnTimes = createGoldenAppleSpawnTimes(miniGameState.startedAt);
  miniGameState.level = 1;
  miniGameState.applesTowardNextLevel = 0;
  miniGameState.status = "playing";
  miniGameState.failedAt = 0;
  miniGameState.failedButtons = null;
  miniGameState.victoryStartedAt = 0;
  miniGameState.phoneTransitionStartedAt = 0;
  miniGameState.phoneStartedAt = 0;
  miniGameState.phoneRingStartedAt = 0;
  miniGameState.phoneAnsweredAt = 0;
  miniGameState.phoneRect = null;
  miniGameState.phoneDialogueStartedAt = 0;
  miniGameState.phoneDialogueLineIndex = 0;
  miniGameState.phoneDialogueLineStartedAt = 0;
  miniGameState.phoneDialogueTypingActive = false;
  miniGameState.phoneChallengePromptAt = 0;
  miniGameState.phoneChallengeAcceptedAt = 0;
  miniGameState.phoneChallengeButton = null;
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
  unlockTypingAudio().catch(() => {});
  loadMiniGameWizardSprite();
  startGangGoblinsMusic(1.6);

  addMiniGamePressListeners(canvas);
  canvas.addEventListener("pointermove", handleMiniGameAim);
  miniGameState.animationFrame = window.requestAnimationFrame(updateMiniGame);
}

function startMiniGameAtLockedSkipFail() {
  const canvas = document.querySelector("#mini-game-canvas");

  if (!canvas) {
    return;
  }

  if (miniGameState.animationFrame) {
    window.cancelAnimationFrame(miniGameState.animationFrame);
  }

  removeMiniGamePressListeners(canvas);
  canvas.removeEventListener("pointermove", handleMiniGameAim);

  miniGameState.canvas = canvas;
  miniGameState.context = canvas.getContext("2d");
  miniGameState.bullets = [];
  miniGameState.goblins = [];
  miniGameState.explosions = [];
  miniGameState.apples = [];
  miniGameState.fairyBombs = [];
  miniGameState.levelMessages = [];
  miniGameState.hitMarkers = [];
  miniGameState.obstacles = [];
  miniGameState.lake = null;
  miniGameState.status = "failed";
  miniGameState.failedAt = performance.now() - 3200;
  miniGameState.failedRetryCount = 1;
  miniGameState.failedButtons = null;
  miniGameState.phoneTransitionStartedAt = 0;
  miniGameState.phoneStartedAt = 0;
  miniGameState.phoneRingStartedAt = 0;
  miniGameState.phoneAnsweredAt = 0;
  miniGameState.startedAt = performance.now();
  miniGameState.lastFrameTime = performance.now();
  miniGameState.isRunning = true;
  loadingState.activeSurface = "miniGame";
  showActiveSurface();
  resizeMiniGameCanvas();
  unlockGameAudio();
  loadPhoneSounds();
  loadRetroPhoneImage();

  addMiniGamePressListeners(canvas);
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

function addMiniGamePressListeners(canvas) {
  canvas.addEventListener("pointerdown", handleMiniGamePress);
  canvas.addEventListener("touchstart", handleMiniGamePress, { passive: false });
}

function removeMiniGamePressListeners(canvas) {
  canvas.removeEventListener("pointerdown", handleMiniGamePress);
  canvas.removeEventListener("touchstart", handleMiniGamePress);
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
  if (!miniGameState.isRunning) {
    return;
  }

  event.preventDefault?.();
  unlockGameAudio();
  unlockTypingAudio().catch(() => {});
  const canvasRect = miniGameState.canvas.getBoundingClientRect();
  const clientX = event.clientX ?? event.touches?.[0]?.clientX ?? event.changedTouches?.[0]?.clientX ?? 0;
  const clientY = event.clientY ?? event.touches?.[0]?.clientY ?? event.changedTouches?.[0]?.clientY ?? 0;
  const scaleX = canvasRect.width ? window.innerWidth / canvasRect.width : 1;
  const scaleY = canvasRect.height ? window.innerHeight / canvasRect.height : 1;
  const pressPoint = {
    x: (clientX - canvasRect.left) * scaleX,
    y: (clientY - canvasRect.top) * scaleY,
  };

  if (miniGameState.status === "failed") {
    handleFailedMiniGamePress(pressPoint);
    return;
  }

  if (!loadingState.isLandscape) {
    return;
  }

  if (miniGameState.status === "phone") {
    handlePostGamePhonePress(pressPoint);
    return;
  }

  if (miniGameState.status === "phoneDialogue") {
    handlePhoneDialoguePress(pressPoint);
    return;
  }

  if (miniGameState.status === "cupTable") {
    handleCupTablePress(pressPoint);
    return;
  }

  if (miniGameState.status !== "playing") {
    return;
  }

  miniGameState.aimTarget = {
    x: pressPoint.x,
    y: pressPoint.y,
  };
  updateTurretAim();

  fireMiniGameBullet(performance.now(), true);
}

function handleFailedMiniGamePress(point) {
  const buttons = miniGameState.failedButtons || getMiniGameFailedButtons();

  if (!buttons) {
    return;
  }

  if (isPointInsideMiniGameRect(point, buttons.retry)) {
    playSoundEffect("menuStart", { minGap: 120 });
    miniGameState.failedRetryCount += 1;
    startMiniGame();
    return;
  }

  if (isPointInsideMiniGameRect(point, buttons.skip)) {
    if (buttons.skip.disabled) {
      playSoundEffect("tapPop", { minGap: 120, volume: 0.45 });
      return;
    }

    playSoundEffect("menuStart", { minGap: 120 });
    startPostGamePhoneTransition(performance.now());
    miniGameState.failedButtons = null;
    return;
  }
}

function getMiniGameFailedButtons() {
  const failedSize = Math.max(36, Math.min(58, window.innerHeight * 0.16));
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2 - 30;
  const buttonWidth = Math.min(132, window.innerWidth * 0.24);
  const buttonHeight = 34;
  const gap = 14;
  const y = centerY + failedSize * 0.82;

  return {
    retry: {
      x: centerX - buttonWidth - gap / 2,
      y: y - buttonHeight / 2,
      width: buttonWidth,
      height: buttonHeight,
    },
    skip: {
      x: centerX + gap / 2,
      y: y - buttonHeight / 2,
      width: buttonWidth,
      height: buttonHeight,
      disabled: miniGameState.failedRetryCount < 1,
    },
  };
}

function handlePostGamePhonePress() {
  if (miniGameState.phoneAnsweredAt) {
    return;
  }

  miniGameState.phoneAnsweredAt = performance.now();
  playSoundEffect("phonePickup", { minGap: 300 });
}

function getPhoneChallengeButtonRect() {
  const promptWidth = Math.min(window.innerWidth * 0.58, 430);
  const promptHeight = Math.min(window.innerHeight * 0.36, 180);
  const promptY = window.innerHeight / 2 - promptHeight / 2;
  const buttonWidth = Math.min(promptWidth * 0.58, 190);
  const buttonHeight = Math.max(38, Math.min(52, window.innerHeight * 0.12));

  return {
    x: window.innerWidth / 2 - buttonWidth / 2,
    y: promptY + promptHeight - buttonHeight - 24,
    width: buttonWidth,
    height: buttonHeight,
  };
}

function handlePhoneDialoguePress(point) {
  const now = performance.now();

  // A single mobile tap can produce both pointerdown and touchstart.
  if (now - miniGameState.phoneDialogueLastAdvanceAt < 250) {
    return;
  }

  if (miniGameState.phoneChallengePromptAt && !miniGameState.phoneChallengeButton) {
    miniGameState.phoneChallengeButton = getPhoneChallengeButtonRect();
  }

  if (miniGameState.phoneChallengePromptAt) {
    if (
      miniGameState.phoneChallengeAcceptedAt ||
      !isPointInsideMiniGameRect(point, miniGameState.phoneChallengeButton)
    ) {
      return;
    }

    miniGameState.phoneDialogueLastAdvanceAt = now;
    miniGameState.phoneChallengeAcceptedAt = now;
    miniGameState.phoneChallengeButton = null;
    playSoundEffect("menuStart", { minGap: 120, volume: 0.72 });
    return;
  }

  const line = PHONE_DIALOGUE_LINES[miniGameState.phoneDialogueLineIndex];

  if (!line || now < miniGameState.phoneDialogueLineStartedAt + line.text.length * PHONE_DIALOGUE_TYPE_SPEED_MS) {
    return;
  }

  miniGameState.phoneDialogueLastAdvanceAt = now;
  miniGameState.phoneDialogueTypingActive = false;
  stopTypingSound();
  playSoundEffect("tapPop", { minGap: 120, volume: 0.42 });

  if (miniGameState.phoneDialogueLineIndex < PHONE_DIALOGUE_LINES.length - 1) {
    miniGameState.phoneDialogueLineIndex += 1;
    miniGameState.phoneDialogueLineStartedAt = now;
    return;
  }

  miniGameState.phoneChallengePromptAt = now;
}

function handleCupTablePress(point) {
  if (miniGameState.cupTablePhase === "failed" && miniGameState.cupTableFailButtons) {
    if (isPointInsideMiniGameRect(point, miniGameState.cupTableFailButtons.retry)) {
      startCupTableRetryRound(performance.now());
      playSoundEffect("menuStart", { minGap: 120, volume: 0.7 });
      return;
    }

    if (isPointInsideMiniGameRect(point, miniGameState.cupTableFailButtons.skip)) {
      startCupTablePathReturn(performance.now());
      miniGameState.cupTableFailButtons = null;
      playSoundEffect("menuStart", { minGap: 120, volume: 0.6 });
      return;
    }
  }

  if (miniGameState.cupTablePhase === "pickPrompt" && miniGameState.cupTableDrinkButtons) {
    const selectedButton = miniGameState.cupTableDrinkButtons.find((button) => isPointInsideMiniGameRect(point, button));

    if (selectedButton) {
      playSoundEffect("menuStart", { minGap: 120, volume: 0.68 });
      startCupTableCupChoice(selectedButton.label);
      return;
    }
  }

  if (miniGameState.cupTablePhase === "chooseCup") {
    if (
      miniGameState.cupTableConfirmButton &&
      miniGameState.cupTableSelectedCupIndex >= 0 &&
      isPointInsideMiniGameRect(point, miniGameState.cupTableConfirmButton)
    ) {
      if (miniGameState.cupTableIsRetryRound) {
        startCupTableJohnTurn(performance.now());
      } else {
        startCupTablePour(performance.now());
      }
      playSoundEffect("menuStart", { minGap: 120, volume: 0.74 });
      return;
    }

    const selectedCup = miniGameState.cupTableCupHitBoxes
      .filter(Boolean)
      .find((hitBox) => isPointInsideMiniGameRect(point, hitBox));

    if (selectedCup) {
      miniGameState.cupTableSelectedCupIndex = selectedCup.index;
      miniGameState.cupTableDrinkButtons = null;
      playSoundEffect("tapPop", { minGap: 80, volume: 0.52 });
      return;
    }
  }

  if (miniGameState.cupTablePhase === "drinkChoice") {
    if (
      miniGameState.cupTableDrinkConfirmButton &&
      miniGameState.cupTableDrinkSelectedCupIndex >= 0 &&
      isPointInsideMiniGameRect(point, miniGameState.cupTableDrinkConfirmButton)
    ) {
      startCupTableDrinkAnimation(performance.now());
      playSoundEffect("menuStart", { minGap: 120, volume: 0.74 });
      return;
    }

    const selectedCup = miniGameState.cupTableCupHitBoxes
      .filter(Boolean)
      .find((hitBox) => isPointInsideMiniGameRect(point, hitBox));

    if (selectedCup) {
      miniGameState.cupTableDrinkSelectedCupIndex = selectedCup.index;
      playSoundEffect("tapPop", { minGap: 80, volume: 0.52 });
      return;
    }
  }

  if (advanceCupTablePostPourDialogueIfReady(performance.now())) {
    return;
  }

  if (advanceCupTableJohnDialogueIfReady(performance.now())) {
    return;
  }

  const buttons = miniGameState.cupTableJohnButtons;

  if (!buttons || miniGameState.cupTableJohnAccepted) {
    return;
  }

  if (isPointInsideMiniGameRect(point, buttons.accept)) {
    startCupTableJohnFinalLine(performance.now());
    playSoundEffect("menuStart", { minGap: 120, volume: 0.68 });
    return;
  }

  if (isPointInsideMiniGameRect(point, buttons.repeat)) {
    playSoundEffect("tapPop", { minGap: 120, volume: 0.5 });
    restartCupTableJohnDialogue(performance.now());
  }
}

function advanceCupTableJohnDialogueIfReady(timestamp) {
  if (miniGameState.cupTablePhase !== "rules") {
    return false;
  }

  const line = CUP_TABLE_JOHN_LINES[miniGameState.cupTableJohnLineIndex];

  if (!line) {
    return false;
  }

  const typeDuration = line.length * CUP_TABLE_JOHN_TYPE_SPEED_MS;
  const lineAge = timestamp - miniGameState.cupTableJohnLineStartedAt;
  const isLastLine = miniGameState.cupTableJohnLineIndex >= CUP_TABLE_JOHN_LINES.length - 1;

  if (lineAge < typeDuration || isLastLine) {
    return false;
  }

  miniGameState.cupTableJohnLineIndex += 1;
  miniGameState.cupTableJohnLineStartedAt = timestamp;
  miniGameState.cupTableJohnButtons = null;
  playSoundEffect("tapPop", { minGap: 120, volume: 0.38 });
  return true;
}

function isPointInsideMiniGameRect(point, rect) {
  return (
    rect &&
    point.x >= rect.x &&
    point.x <= rect.x + rect.width &&
    point.y >= rect.y &&
    point.y <= rect.y + rect.height
  );
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

  try {
    updateMiniGameFrame(timestamp);
  } catch (error) {
    console.error("Gang Goblins frame failed", error);
    miniGameState.lastFrameTime = timestamp;
    miniGameState.wizardTipTypingActive = false;
    miniGameState.phoneDialogueTypingActive = false;
    miniGameState.cupTableJohnTypingActive = false;
    stopTypingSound();
  }

  if (miniGameState.isRunning) {
    miniGameState.animationFrame = window.requestAnimationFrame(updateMiniGame);
  }
}

function updateMiniGameFrame(timestamp) {
  const deltaSeconds = Math.min((timestamp - miniGameState.lastFrameTime) / 1000, 0.033);
  miniGameState.lastFrameTime = timestamp;

  if (loadingState.isLandscape && miniGameState.status === "finishing") {
    updateMiniGameFinish(timestamp, deltaSeconds);
  } else if (loadingState.isLandscape && miniGameState.status === "victory") {
    updateMiniGameVictory(timestamp);
  } else if (loadingState.isLandscape && miniGameState.status === "phoneTransition") {
    updatePostGamePhoneTransition(timestamp);
  } else if (loadingState.isLandscape && miniGameState.status === "phone") {
    updatePostGamePhone(timestamp);
  } else if (loadingState.isLandscape && miniGameState.status === "phoneDialogue") {
    updatePhoneDialogue(timestamp);
  } else if (loadingState.isLandscape && miniGameState.status === "cupTable") {
    updateCupTableScene(timestamp);
  } else if (loadingState.isLandscape && miniGameState.status === "playing") {
    updateMiniGameWizardTip(timestamp);

    if (timestamp - miniGameState.startedAt >= MINI_GAME_DURATION_MS) {
      startBossPhase();
    }

    if (miniGameState.level >= 2) {
      fireMiniGameBullet(timestamp);
    }

    maybeSpawnGoblin(timestamp);
    maybeSpawnApples(timestamp);
    maybeSpawnFrogEvent(timestamp);
    updateVolcanoEvents(timestamp, deltaSeconds);
    updateFairyHutAndHelpers(timestamp, deltaSeconds);
    updateTikiMen(timestamp, deltaSeconds);
    respawnDestroyedObstacles(timestamp);
    moveBullets(deltaSeconds);
    moveFairyBombs(deltaSeconds);
    updateFrogs(timestamp);
    updateSmokeDeaths(timestamp);
    moveLavaHazards(deltaSeconds, timestamp);
    moveGoblins(deltaSeconds);
    checkMiniGameHits();
    checkGoblinContact();
    trimMiniGameObjects();
  }

  if (miniGameState.status !== "playing" && miniGameState.wizardTipTypingActive) {
    miniGameState.wizardTipTypingActive = false;
    stopTypingSound();
  }

  if (miniGameState.status !== "phoneDialogue" && miniGameState.phoneDialogueTypingActive) {
    miniGameState.phoneDialogueTypingActive = false;
    stopTypingSound();
  }

  if (miniGameState.status !== "cupTable" && miniGameState.cupTableJohnTypingActive) {
    miniGameState.cupTableJohnTypingActive = false;
    stopTypingSound();
  }

  if (
    miniGameState.status === "cupTable" &&
    miniGameState.cupTablePhase !== "finalLine" &&
    miniGameState.cupTablePhase !== "pickPrompt" &&
    miniGameState.cupTablePhase !== "postPourDialogue" &&
    miniGameState.cupTableJohnTypingActive &&
    miniGameState.cupTablePhase !== "rules"
  ) {
    miniGameState.cupTableJohnTypingActive = false;
    stopTypingSound();
  }

  drawMiniGame();
}

function updateMiniGameVictory(timestamp) {
  if (
    miniGameState.victoryStartedAt &&
    timestamp - miniGameState.victoryStartedAt > MINI_GAME_VICTORY_HOLD_MS + MINI_GAME_VICTORY_FADE_MS
  ) {
    startPostGamePhone(timestamp);
  }
}

function updatePostGamePhoneTransition(timestamp) {
  if (
    miniGameState.phoneTransitionStartedAt &&
    timestamp - miniGameState.phoneTransitionStartedAt > POST_GAME_PHONE_TRANSITION_MS
  ) {
    startPostGamePhone(timestamp);
  }
}

function updatePostGamePhone(timestamp) {
  if (!miniGameState.phoneStartedAt) {
    miniGameState.phoneStartedAt = timestamp;
  }

  if (miniGameState.phoneAnsweredAt) {
    if (timestamp - miniGameState.phoneAnsweredAt > POST_GAME_PHONE_PICKUP_FADE_MS) {
      startPhoneDialogue(timestamp);
    }

    return;
  }

  if (!miniGameState.phoneRingStartedAt || timestamp - miniGameState.phoneRingStartedAt > POST_GAME_PHONE_RING_INTERVAL_MS) {
    miniGameState.phoneRingStartedAt = timestamp;
    playSoundEffect("phoneRing", { minGap: 800 });
  }
}

function startPhoneDialogue(timestamp) {
  miniGameState.status = "phoneDialogue";
  miniGameState.isRunning = true;
  miniGameState.phoneDialogueStartedAt = timestamp;
  miniGameState.phoneDialogueLineIndex = 0;
  miniGameState.phoneDialogueLineStartedAt = timestamp + PHONE_DIALOGUE_LINE_DRAW_MS + 180;
  miniGameState.phoneDialogueTypingActive = false;
  miniGameState.phoneDialogueLastAdvanceAt = 0;
  miniGameState.phoneChallengePromptAt = 0;
  miniGameState.phoneChallengeAcceptedAt = 0;
  miniGameState.phoneChallengeButton = null;
  loadMiniGameWizardSprite();
  loadJohnCharacterImage();
  unlockTypingAudio().catch(() => {});
}

function updatePhoneDialogue(timestamp) {
  if (miniGameState.phoneChallengeAcceptedAt) {
    if (timestamp - miniGameState.phoneChallengeAcceptedAt > PHONE_CHALLENGE_ACCEPT_FADE_MS) {
      startCupTableScene(timestamp);
    }

    return;
  }

  const line = PHONE_DIALOGUE_LINES[miniGameState.phoneDialogueLineIndex];

  if (!line || timestamp < miniGameState.phoneDialogueLineStartedAt) {
    return;
  }

  const lineAge = timestamp - miniGameState.phoneDialogueLineStartedAt;
  const typeDuration = line.text.length * PHONE_DIALOGUE_TYPE_SPEED_MS;
  const isTyping = lineAge < typeDuration;

  if (isTyping && !miniGameState.phoneDialogueTypingActive) {
    miniGameState.phoneDialogueTypingActive = startTypingSound();
  }

  if (!isTyping && miniGameState.phoneDialogueTypingActive) {
    miniGameState.phoneDialogueTypingActive = false;
    stopTypingSound();
  }

}

function startPostGamePhoneTransition(timestamp) {
  miniGameState.status = "phoneTransition";
  miniGameState.isRunning = true;
  miniGameState.phoneTransitionStartedAt = timestamp;
  miniGameState.failedAt = 0;
  miniGameState.failedButtons = null;
  miniGameState.bullets = [];
  miniGameState.goblins = [];
  miniGameState.apples = [];
  miniGameState.tikiMen = [];
  miniGameState.lavaSnakes = [];
  miniGameState.helperFairies = [];
  miniGameState.fairyBombs = [];
  miniGameState.explosions = [];
  miniGameState.hitMarkers = [];
}

function startCupTableScene(timestamp) {
  miniGameState.status = "cupTable";
  miniGameState.isRunning = true;
  miniGameState.cupTableStartedAt = timestamp;
  miniGameState.cupTableCups = createCupTableCups();
  miniGameState.cupTableDecor = createCupTableDecor(miniGameState.cupTableCups);
  miniGameState.cupTableJohnStartedAt = 0;
  miniGameState.cupTableJohnLineIndex = 0;
  miniGameState.cupTableJohnLineStartedAt = 0;
  miniGameState.cupTableJohnTypingActive = false;
  miniGameState.cupTableJohnButtons = null;
  miniGameState.cupTableJohnAccepted = false;
  miniGameState.cupTablePhase = "waiting";
  miniGameState.cupTableJohnFinalStartedAt = 0;
  miniGameState.cupTableSelectionStartedAt = 0;
  miniGameState.cupTableSelectionIndex = -1;
  miniGameState.cupTableNextSelectionAt = 0;
  miniGameState.cupTableSelectionFlashAt = 0;
  miniGameState.cupTableSelectionPeeks = [];
  miniGameState.cupTablePickPromptStartedAt = 0;
  miniGameState.cupTableDrinkOptions = [];
  miniGameState.cupTableDrinkButtons = null;
  miniGameState.cupTableSelectedDrink = "";
  miniGameState.cupTablePourColor = "";
  miniGameState.cupTableSelectedCupIndex = -1;
  miniGameState.cupTableCupHitBoxes = [];
  miniGameState.cupTableConfirmButton = null;
  miniGameState.cupTablePourStartedAt = 0;
  miniGameState.cupTablePostPourDialogueStartedAt = 0;
  miniGameState.cupTablePostPourLineIndex = 0;
  miniGameState.cupTablePostPourLineStartedAt = 0;
  miniGameState.cupTablePostPourTypingActive = false;
  miniGameState.cupTablePhase = "waiting";
  miniGameState.cupTableJohnFinalStartedAt = 0;
  miniGameState.cupTableSelectionStartedAt = 0;
  miniGameState.cupTableSelectionIndex = -1;
  miniGameState.cupTableNextSelectionAt = 0;
  miniGameState.cupTableSelectionFlashAt = 0;
  miniGameState.cupTableSelectionPeeks = [];
  miniGameState.cupTablePickPromptStartedAt = 0;
  miniGameState.cupTableDrinkOptions = [];
  miniGameState.cupTableDrinkButtons = null;
  miniGameState.cupTableSelectedDrink = "";
  miniGameState.cupTablePourColor = "";
  miniGameState.cupTableSelectedCupIndex = -1;
  miniGameState.cupTableCupHitBoxes = [];
  miniGameState.cupTableConfirmButton = null;
  miniGameState.cupTablePourStartedAt = 0;
  miniGameState.cupTablePostPourDialogueStartedAt = 0;
  miniGameState.cupTablePostPourLineIndex = 0;
  miniGameState.cupTablePostPourLineStartedAt = 0;
  miniGameState.cupTablePostPourTypingActive = false;
  miniGameState.cupTablePhase = "waiting";
  miniGameState.cupTableJohnFinalStartedAt = 0;
  miniGameState.cupTableSelectionStartedAt = 0;
  miniGameState.cupTableSelectionIndex = -1;
  miniGameState.cupTableNextSelectionAt = 0;
  miniGameState.cupTableSelectionFlashAt = 0;
  miniGameState.cupTableSelectionPeeks = [];
  miniGameState.cupTablePickPromptStartedAt = 0;
  miniGameState.cupTableDrinkOptions = [];
  miniGameState.cupTableDrinkButtons = null;
  miniGameState.cupTableSelectedDrink = "";
  miniGameState.cupTablePourColor = "";
  miniGameState.cupTableSelectedCupIndex = -1;
  miniGameState.cupTableCupHitBoxes = [];
  miniGameState.cupTableConfirmButton = null;
  miniGameState.cupTablePourStartedAt = 0;
  miniGameState.cupTablePostPourDialogueStartedAt = 0;
  miniGameState.cupTablePostPourLineIndex = 0;
  miniGameState.cupTablePostPourLineStartedAt = 0;
  miniGameState.cupTablePostPourTypingActive = false;
  miniGameState.cupTableBadCupIndex = -1;
  miniGameState.cupTableDrinkChoiceStartedAt = 0;
  miniGameState.cupTableDrinkSelectedCupIndex = -1;
  miniGameState.cupTableDrinkConfirmButton = null;
  miniGameState.cupTableDrinkStartedAt = 0;
  miniGameState.cupTableDrinkResultAt = 0;
  miniGameState.cupTableDrinkFailed = false;
  miniGameState.cupTableIsRetryRound = false;
  miniGameState.cupTableRetryIntroStartedAt = 0;
  miniGameState.cupTableRetryIntroTypingActive = false;
  miniGameState.cupTableFailedAt = 0;
  miniGameState.cupTableFailButtons = null;
  miniGameState.cupTableJohnTurnStartedAt = 0;
  miniGameState.cupTableJohnTurnSelectionIndex = -1;
  miniGameState.cupTableJohnTurnNextSelectionAt = 0;
  miniGameState.cupTableJohnSelectedCupIndex = -1;
  miniGameState.cupTableJohnDrinkStartedAt = 0;
  miniGameState.cupTableJohnLost = false;
  miniGameState.cupTableJohnResultAt = 0;
  miniGameState.cupTableReturnTriggered = false;
  clearCupTableReturnTimer();
  miniGameState.phoneChallengeButton = null;
  miniGameState.phoneChallengePromptAt = 0;
  miniGameState.phoneChallengeAcceptedAt = 0;
  loadJohnCharacterImage();
  unlockTypingAudio().catch(() => {});
  setFinalFpsMusic("cupTableBar");
}

function updateCupTableScene(timestamp) {
  const tableReadyAt = miniGameState.cupTableStartedAt + CUP_TABLE_SCENE_DELAY_MS + CUP_TABLE_SCENE_FADE_MS;

  if (!miniGameState.cupTableJohnStartedAt && timestamp >= tableReadyAt + CUP_TABLE_JOHN_DELAY_MS) {
    restartCupTableJohnDialogue(timestamp);
  }

  updateCupTableJohnDialogue(timestamp);
  updateCupTableJohnFinalLine(timestamp);
  updateCupTableSelectionSequence(timestamp);
  updateCupTablePour(timestamp);
  updateCupTablePostPourDialogue(timestamp);
  updateCupTableRetryIntro(timestamp);
  updateCupTableDrinkChoice(timestamp);
  updateCupTableDrinkAnimation(timestamp);
  updateCupTableJohnTurn(timestamp);
  updateCupTableJohnDrink(timestamp);
  updateCupTableJohnResult(timestamp);
}

function restartCupTableJohnDialogue(timestamp) {
  miniGameState.cupTableJohnStartedAt = timestamp;
  miniGameState.cupTableJohnLineIndex = 0;
  miniGameState.cupTableJohnLineStartedAt = timestamp;
  miniGameState.cupTableJohnButtons = null;
  miniGameState.cupTableJohnAccepted = false;
  miniGameState.cupTablePhase = "rules";
  miniGameState.cupTableJohnFinalStartedAt = 0;
  miniGameState.cupTableSelectionStartedAt = 0;
  miniGameState.cupTableSelectionIndex = -1;
  miniGameState.cupTableNextSelectionAt = 0;
  miniGameState.cupTableSelectionFlashAt = 0;
  miniGameState.cupTableSelectionPeeks = [];
  miniGameState.cupTablePickPromptStartedAt = 0;
  miniGameState.cupTableDrinkOptions = [];
  miniGameState.cupTableDrinkButtons = null;
  miniGameState.cupTableSelectedDrink = "";
  miniGameState.cupTableSelectedCupIndex = -1;
  miniGameState.cupTableConfirmButton = null;
  miniGameState.cupTablePourStartedAt = 0;
  miniGameState.cupTablePostPourDialogueStartedAt = 0;
  miniGameState.cupTableBadCupIndex = -1;
  miniGameState.cupTableDrinkChoiceStartedAt = 0;
  miniGameState.cupTableDrinkSelectedCupIndex = -1;
  miniGameState.cupTableDrinkConfirmButton = null;
  miniGameState.cupTableDrinkStartedAt = 0;
  miniGameState.cupTableDrinkResultAt = 0;
  miniGameState.cupTableDrinkFailed = false;

  if (miniGameState.cupTableJohnTypingActive) {
    miniGameState.cupTableJohnTypingActive = false;
    stopTypingSound();
  }
}

function updateCupTableJohnDialogue(timestamp) {
  if (!miniGameState.cupTableJohnStartedAt || miniGameState.cupTablePhase !== "rules") {
    if (miniGameState.cupTableJohnTypingActive) {
      miniGameState.cupTableJohnTypingActive = false;
      stopTypingSound();
    }

    return;
  }

  const line = CUP_TABLE_JOHN_LINES[miniGameState.cupTableJohnLineIndex];

  if (!line) {
    miniGameState.cupTableJohnButtons = miniGameState.cupTableJohnButtons || {};
    return;
  }

  const lineAge = timestamp - miniGameState.cupTableJohnLineStartedAt;
  const typeDuration = line.length * CUP_TABLE_JOHN_TYPE_SPEED_MS;
  const isTyping = lineAge < typeDuration;

  if (isTyping && !miniGameState.cupTableJohnTypingActive) {
    miniGameState.cupTableJohnTypingActive = startTypingSound();
  }

  if (!isTyping && miniGameState.cupTableJohnTypingActive) {
    miniGameState.cupTableJohnTypingActive = false;
    stopTypingSound();
  }

  // Rule lines wait for the player to tap once each line has finished typing.
}

function startCupTableJohnFinalLine(timestamp) {
  miniGameState.cupTablePhase = "finalLine";
  miniGameState.cupTableJohnAccepted = true;
  miniGameState.cupTableJohnFinalStartedAt = timestamp;
  miniGameState.cupTableJohnButtons = null;

  if (miniGameState.cupTableJohnTypingActive) {
    miniGameState.cupTableJohnTypingActive = false;
    stopTypingSound();
  }
}

function updateCupTableJohnFinalLine(timestamp) {
  if (miniGameState.cupTablePhase !== "finalLine") {
    return;
  }

  const lineAge = timestamp - miniGameState.cupTableJohnFinalStartedAt;
  const typeDuration = CUP_TABLE_JOHN_FINAL_LINE.length * CUP_TABLE_JOHN_TYPE_SPEED_MS;
  const isTyping = lineAge < typeDuration;

  if (isTyping && !miniGameState.cupTableJohnTypingActive) {
    miniGameState.cupTableJohnTypingActive = startTypingSound();
  }

  if (!isTyping && miniGameState.cupTableJohnTypingActive) {
    miniGameState.cupTableJohnTypingActive = false;
    stopTypingSound();
  }

  if (lineAge > typeDuration + CUP_TABLE_JOHN_FINAL_HOLD_MS) {
    startCupTableSelectionSequence(timestamp);
  }
}

function startCupTableSelectionSequence(timestamp) {
  miniGameState.cupTablePhase = "selecting";
  miniGameState.cupTableSelectionStartedAt = timestamp;
  miniGameState.cupTableSelectionIndex = Math.floor(Math.random() * miniGameState.cupTableCups.length);
  miniGameState.cupTableNextSelectionAt = timestamp;
  miniGameState.cupTableSelectionFlashAt = 0;
  miniGameState.cupTableSelectionPeeks = [];
  miniGameState.cupTablePickPromptStartedAt = 0;
  miniGameState.cupTableDrinkOptions = [];
  miniGameState.cupTableDrinkButtons = null;
  miniGameState.cupTableJohnButtons = null;
  miniGameState.cupTableJohnTypingActive = false;
  stopTypingSound();
}

function updateCupTableSelectionSequence(timestamp) {
  if (miniGameState.cupTablePhase !== "selecting") {
    return;
  }

  const age = timestamp - miniGameState.cupTableSelectionStartedAt;
  const progress = Math.min(age / CUP_TABLE_SELECTION_DURATION_MS, 1);
  const shakeIntensity = 0.7 + Math.pow(progress, 1.55) * 8.2;

  triggerScreenShake(110, shakeIntensity);

  if (age >= CUP_TABLE_SELECTION_DURATION_MS) {
    if (!miniGameState.cupTableSelectionFlashAt) {
      miniGameState.cupTableSelectionFlashAt = timestamp;
      miniGameState.cupTableSelectionIndex = -1;
      triggerScreenShake(760, 12);
      playSoundEffect("tapPop", { minGap: 0, volume: 0.9 });
      playSoundEffect("shoot", { minGap: 0, golden: true });
    }

    if (timestamp - miniGameState.cupTableSelectionFlashAt > CUP_TABLE_SELECTION_FINAL_FLASH_MS) {
      startCupTablePickPrompt(timestamp);
    }

    return;
  }

  if (timestamp >= miniGameState.cupTableNextSelectionAt) {
    const currentIndex = miniGameState.cupTableSelectionIndex;
    let nextIndex = Math.floor(Math.random() * miniGameState.cupTableCups.length);

    if (miniGameState.cupTableCups.length > 1) {
      while (nextIndex === currentIndex) {
        nextIndex = Math.floor(Math.random() * miniGameState.cupTableCups.length);
      }
    }

    miniGameState.cupTableSelectionIndex = nextIndex;
    miniGameState.cupTableNextSelectionAt = timestamp + getCupTableSelectionInterval(progress);
    playSoundEffect("shoot", { minGap: 0, golden: progress > 0.78, volume: 0.04 + progress * 0.035 });
  }
}

function getCupTableSelectionInterval(progress) {
  const eased = 1 - Math.pow(1 - progress, 2.8);
  return 380 - eased * 340;
}

function createCupTableSelectionPeeks() {
  const edges = shuffleArray(["top", "right", "bottom", "left"]);
  const timings = [2300, 5400, 8500].map((time) => time + Math.random() * 650 - 325);

  return CUP_TABLE_SELECTION_JOHN_PEEKS.map((text, index) => ({
    text,
    edge: edges[index % edges.length],
    offset: 0.18 + Math.random() * 0.64,
    startedAtOffset: timings[index],
  }));
}

function startCupTablePickPrompt(timestamp) {
  miniGameState.cupTablePhase = "pickPrompt";
  miniGameState.cupTableSelectionIndex = -1;
  miniGameState.cupTablePickPromptStartedAt = timestamp;
  miniGameState.cupTableDrinkOptions = shuffleArray(CUP_TABLE_DRINK_OPTIONS).slice(0, 4);
  miniGameState.cupTableDrinkButtons = null;
  miniGameState.cupTableJohnTypingActive = false;
  stopTypingSound();
}

function startCupTableCupChoice(drink) {
  miniGameState.cupTablePhase = "chooseCup";
  miniGameState.cupTableSelectedDrink = drink;
  miniGameState.cupTablePourColor = "";
  miniGameState.cupTableSelectedCupIndex = -1;
  miniGameState.cupTableDrinkButtons = null;
  miniGameState.cupTableConfirmButton = null;
  miniGameState.cupTableJohnTypingActive = false;
  stopTypingSound();
}

function startCupTablePour(timestamp) {
  miniGameState.cupTablePhase = "pouring";
  miniGameState.cupTablePourStartedAt = timestamp;
  miniGameState.cupTablePourColor = getRandomCupTablePourColor();
  miniGameState.cupTableConfirmButton = null;
}

function updateCupTablePour(timestamp) {
  if (miniGameState.cupTablePhase !== "pouring") {
    return;
  }

  if (timestamp - miniGameState.cupTablePourStartedAt > CUP_TABLE_POUR_MS) {
    startCupTablePostPourDialogue(timestamp);
  }
}

function startCupTablePostPourDialogue(timestamp) {
  miniGameState.cupTablePhase = "postPourDialogue";
  miniGameState.cupTablePostPourDialogueStartedAt = timestamp;
  miniGameState.cupTablePostPourLineIndex = 0;
  miniGameState.cupTablePostPourLineStartedAt = timestamp;
  miniGameState.cupTablePostPourTypingActive = false;
  loadMiniGameWizardSprite();
  loadJohnCharacterImage();
  unlockTypingAudio().catch(() => {});
}

function updateCupTablePostPourDialogue(timestamp) {
  if (miniGameState.cupTablePhase !== "postPourDialogue") {
    if (miniGameState.cupTablePostPourTypingActive) {
      miniGameState.cupTablePostPourTypingActive = false;
      stopTypingSound();
    }

    return;
  }

  const line = getCupTablePostPourLines()[miniGameState.cupTablePostPourLineIndex];

  if (!line) {
    return;
  }

  const lineAge = timestamp - miniGameState.cupTablePostPourLineStartedAt;
  const typeDuration = line.text.length * CUP_TABLE_POST_POUR_TYPE_SPEED_MS;
  const isTyping = lineAge < typeDuration;

  if (isTyping && !miniGameState.cupTablePostPourTypingActive) {
    miniGameState.cupTablePostPourTypingActive = startTypingSound();
  }

  if (!isTyping && miniGameState.cupTablePostPourTypingActive) {
    miniGameState.cupTablePostPourTypingActive = false;
    stopTypingSound();
  }

  // These lines advance by tap once typing has finished, so players control the pace.
}

function getCupTablePostPourLines() {
  return [
    { speaker: "john", text: "haha, so what kind of devious shit did you put in my cup" },
    { speaker: "wizard", text: `we just put in '${miniGameState.cupTableSelectedDrink || "that"}' why?` },
    { speaker: "john", text: "oh, uhhhh.. no reason. um, good luck." },
  ];
}

function advanceCupTablePostPourDialogueIfReady(timestamp) {
  if (miniGameState.cupTablePhase !== "postPourDialogue") {
    return false;
  }

  const lines = getCupTablePostPourLines();
  const line = lines[miniGameState.cupTablePostPourLineIndex];

  if (!line) {
    return false;
  }

  const typeDuration = line.text.length * CUP_TABLE_POST_POUR_TYPE_SPEED_MS;
  const lineAge = timestamp - miniGameState.cupTablePostPourLineStartedAt;

  if (lineAge < typeDuration) {
    return false;
  }

  if (miniGameState.cupTablePostPourLineIndex < lines.length - 1) {
    miniGameState.cupTablePostPourLineIndex += 1;
    miniGameState.cupTablePostPourLineStartedAt = timestamp;
    playSoundEffect("tapPop", { minGap: 120, volume: 0.38 });
    return true;
  }

  startCupTableDrinkChoice(timestamp);
  playSoundEffect("menuStart", { minGap: 120, volume: 0.55 });
  return true;
}

function startCupTableDrinkChoice(timestamp) {
  miniGameState.cupTablePhase = "drinkChoice";
  miniGameState.cupTableDrinkChoiceStartedAt = timestamp;
  miniGameState.cupTableBadCupIndex = pickCupTableBadCupIndex();
  miniGameState.cupTableDrinkSelectedCupIndex = -1;
  miniGameState.cupTableDrinkConfirmButton = null;
  miniGameState.cupTableDrinkStartedAt = 0;
  miniGameState.cupTableDrinkResultAt = 0;
  miniGameState.cupTableDrinkFailed = false;
  miniGameState.cupTablePostPourTypingActive = false;
  miniGameState.cupTableJohnTypingActive = false;
  stopTypingSound();
}

function updateCupTableDrinkChoice(timestamp) {
  if (miniGameState.cupTablePhase !== "drinkChoice") {
    return;
  }

  if (timestamp - miniGameState.cupTableDrinkChoiceStartedAt > CUP_TABLE_DRINK_CHOICE_MS) {
    miniGameState.cupTableDrinkFailed = true;
    startCupTableFailure(timestamp);
  }
}

function startCupTableDrinkAnimation(timestamp) {
  miniGameState.cupTablePhase = "drinking";
  miniGameState.cupTableDrinkStartedAt = timestamp;
  miniGameState.cupTableDrinkResultAt = 0;
  miniGameState.cupTableDrinkFailed =
    miniGameState.cupTableDrinkSelectedCupIndex === miniGameState.cupTableBadCupIndex;
  miniGameState.cupTableDrinkConfirmButton = null;
  playSoundEffect("tapPop", { minGap: 120, volume: 0.5 });
  playSoundEffect("cupTableDrink", { minGap: 500 });
}

function updateCupTableDrinkAnimation(timestamp) {
  if (miniGameState.cupTablePhase !== "drinking") {
    return;
  }

  if (timestamp - miniGameState.cupTableDrinkStartedAt <= CUP_TABLE_DRINK_ANIMATION_MS) {
    return;
  }

  const selectedCup = miniGameState.cupTableCups[miniGameState.cupTableDrinkSelectedCupIndex];

  if (miniGameState.cupTableDrinkFailed) {
    startCupTableFailure(timestamp);
    return;
  }

  if (selectedCup) {
    selectedCup.removed = true;
  }

  triggerScreenShake(220, 2.5);
  startCupTableJohnTurn(timestamp);
}

function pickCupTableBadCupIndex() {
  const availableIndexes = getCupTableAvailableDrinkIndexes(false);

  if (!availableIndexes.length) {
    return -1;
  }

  return availableIndexes[Math.floor(Math.random() * availableIndexes.length)];
}

function startCupTableFailure(timestamp) {
  miniGameState.cupTablePhase = "failed";
  miniGameState.cupTableFailedAt = timestamp;
  miniGameState.cupTableFailButtons = null;
  miniGameState.cupTableDrinkConfirmButton = null;
  miniGameState.cupTableJohnTurnSelectionIndex = -1;
  triggerScreenShake(900, 9);
  playSoundEffect("explosion", { minGap: 120, volume: 0.5, rate: 0.72 });
}

function startCupTableRetryRound(timestamp) {
  miniGameState.cupTableStartedAt = timestamp - CUP_TABLE_SCENE_DELAY_MS - CUP_TABLE_SCENE_FADE_MS;
  miniGameState.cupTableCups = createCupTableCups();
  miniGameState.cupTableDecor = createCupTableDecor(miniGameState.cupTableCups);
  miniGameState.cupTableIsRetryRound = true;
  miniGameState.cupTablePhase = "retryIntro";
  miniGameState.cupTableRetryIntroStartedAt = timestamp;
  miniGameState.cupTableRetryIntroTypingActive = false;
  miniGameState.cupTableFailedAt = 0;
  miniGameState.cupTableFailButtons = null;
  miniGameState.cupTableSelectedCupIndex = -1;
  miniGameState.cupTableBadCupIndex = -1;
  miniGameState.cupTableDrinkSelectedCupIndex = -1;
  miniGameState.cupTableDrinkConfirmButton = null;
  miniGameState.cupTableJohnSelectedCupIndex = -1;
  miniGameState.cupTableJohnTurnSelectionIndex = -1;
  miniGameState.cupTableJohnTurnStartedAt = 0;
  miniGameState.cupTableJohnDrinkStartedAt = 0;
  miniGameState.cupTableJohnLost = false;
  miniGameState.cupTableJohnResultAt = 0;
  miniGameState.cupTableReturnTriggered = false;
  stopTypingSound();
}

function updateCupTableRetryIntro(timestamp) {
  if (miniGameState.cupTablePhase !== "retryIntro") {
    if (miniGameState.cupTableRetryIntroTypingActive) {
      miniGameState.cupTableRetryIntroTypingActive = false;
      stopTypingSound();
    }

    return;
  }

  const text = "come back for more ay?";
  const age = timestamp - miniGameState.cupTableRetryIntroStartedAt;
  const typeDuration = text.length * CUP_TABLE_RETRY_INTRO_TYPE_SPEED_MS;
  const isTyping = age < typeDuration;

  if (isTyping && !miniGameState.cupTableRetryIntroTypingActive) {
    miniGameState.cupTableRetryIntroTypingActive = startTypingSound();
  }

  if (!isTyping && miniGameState.cupTableRetryIntroTypingActive) {
    miniGameState.cupTableRetryIntroTypingActive = false;
    stopTypingSound();
  }

  if (age > typeDuration + CUP_TABLE_RETRY_INTRO_HOLD_MS) {
    startCupTableCupChoice("");
    miniGameState.cupTableIsRetryRound = true;
  }
}

function startCupTableJohnTurn(timestamp) {
  miniGameState.cupTablePhase = "johnTurn";
  miniGameState.cupTableJohnTurnStartedAt = timestamp;
  miniGameState.cupTableJohnTurnNextSelectionAt = timestamp;
  miniGameState.cupTableJohnTurnSelectionIndex = -1;
  miniGameState.cupTableJohnSelectedCupIndex = -1;
  miniGameState.cupTableDrinkSelectedCupIndex = -1;
  miniGameState.cupTableDrinkConfirmButton = null;
  stopTypingSound();
}

function updateCupTableJohnTurn(timestamp) {
  if (miniGameState.cupTablePhase !== "johnTurn") {
    return;
  }

  const age = timestamp - miniGameState.cupTableJohnTurnStartedAt;
  const availableIndexes = getCupTableAvailableDrinkIndexes(true);

  if (!availableIndexes.length) {
    miniGameState.cupTablePhase = "johnWon";
    return;
  }

  if (age >= CUP_TABLE_JOHN_TURN_MS) {
    const chosenIndex =
      TEST_CUP_TABLE_FORCE_PLAYER_WIN && miniGameState.cupTableSelectedCupIndex >= 0
        ? miniGameState.cupTableSelectedCupIndex
        : availableIndexes[Math.floor(Math.random() * availableIndexes.length)];
    miniGameState.cupTableJohnSelectedCupIndex = chosenIndex;
    miniGameState.cupTableJohnTurnSelectionIndex = chosenIndex;
    miniGameState.cupTableJohnLost = chosenIndex === miniGameState.cupTableSelectedCupIndex;
    startCupTableJohnDrink(timestamp);
    return;
  }

  if (timestamp >= miniGameState.cupTableJohnTurnNextSelectionAt) {
    let nextIndex = availableIndexes[Math.floor(Math.random() * availableIndexes.length)];

    if (availableIndexes.length > 1) {
      while (nextIndex === miniGameState.cupTableJohnTurnSelectionIndex) {
        nextIndex = availableIndexes[Math.floor(Math.random() * availableIndexes.length)];
      }
    }

    miniGameState.cupTableJohnTurnSelectionIndex = nextIndex;
    miniGameState.cupTableJohnTurnNextSelectionAt = timestamp + 210;
    playSoundEffect("tapPop", { minGap: 80, volume: 0.24 });
  }
}

function startCupTableJohnDrink(timestamp) {
  miniGameState.cupTablePhase = "johnDrinking";
  miniGameState.cupTableJohnDrinkStartedAt = timestamp;
  triggerScreenShake(250, 2.4);
  playSoundEffect("cupTableDrink", { minGap: 500 });
}

function updateCupTableJohnDrink(timestamp) {
  if (miniGameState.cupTablePhase !== "johnDrinking") {
    return;
  }

  if (timestamp - miniGameState.cupTableJohnDrinkStartedAt <= CUP_TABLE_JOHN_DRINK_MS) {
    return;
  }

  if (miniGameState.cupTableJohnLost) {
    miniGameState.cupTablePhase = "johnLost";
    scheduleCupTablePathReturn(timestamp);
    triggerScreenShake(850, 9);
    playSoundEffect("levelUp", { minGap: 100, volume: 0.7 });
    return;
  }

  const johnCup = miniGameState.cupTableCups[miniGameState.cupTableJohnSelectedCupIndex];

  if (johnCup) {
    johnCup.removed = true;
  }

  startCupTableDrinkChoice(timestamp);
}

function getCupTableAvailableDrinkIndexes(includeOwnCup = false) {
  return miniGameState.cupTableCups
    .map((cup, index) => ({ cup, index }))
    .filter(({ cup, index }) => !cup.removed && (includeOwnCup || index !== miniGameState.cupTableSelectedCupIndex))
    .map(({ index }) => index);
}

function updateCupTableJohnResult(timestamp) {
  if (
    (miniGameState.cupTablePhase !== "johnLost" && miniGameState.cupTablePhase !== "pathReturn") ||
    !miniGameState.cupTableJohnResultAt
  ) {
    return;
  }

  const age = timestamp - miniGameState.cupTableJohnResultAt;
  const totalDuration = CUP_TABLE_JOHN_WIN_BLACKOUT_MS + CUP_TABLE_JOHN_WIN_TEXT_FADE_MS + CUP_TABLE_RETURN_FADE_MS;

  if (age > totalDuration && !miniGameState.cupTableReturnTriggered) {
    miniGameState.cupTableReturnTriggered = true;
    resumeOpeningPathFromCupTable();
  }
}

function startCupTablePathReturn(timestamp) {
  miniGameState.cupTablePhase = "pathReturn";
  scheduleCupTablePathReturn(timestamp);
  miniGameState.cupTableFailButtons = null;
  miniGameState.cupTableDrinkConfirmButton = null;
  triggerScreenShake(260, 2);
}

function scheduleCupTablePathReturn(timestamp) {
  if (miniGameState.cupTableReturnTimer || miniGameState.cupTableReturnTriggered) {
    return;
  }

  miniGameState.cupTableJohnResultAt = timestamp;
  miniGameState.cupTableReturnTriggered = false;
  miniGameState.cupTableReturnTimer = window.setTimeout(() => {
    if (!miniGameState.cupTableReturnTriggered) {
      miniGameState.cupTableReturnTriggered = true;
      resumeOpeningPathFromCupTable();
    }
  }, CUP_TABLE_JOHN_WIN_BLACKOUT_MS + CUP_TABLE_JOHN_WIN_TEXT_FADE_MS + CUP_TABLE_RETURN_FADE_MS);
}

function clearCupTableReturnTimer() {
  if (miniGameState.cupTableReturnTimer) {
    window.clearTimeout(miniGameState.cupTableReturnTimer);
    miniGameState.cupTableReturnTimer = null;
  }
}

function resumeOpeningPathFromCupTable() {
  const loadingScene = document.querySelector('[data-scene="Loading"]');
  const openingWizard = document.querySelector("#opening-wizard");
  const openingForest = document.querySelector("#opening-forest");
  const openingDialogue = document.querySelector("#opening-dialogue");

  clearCupTableReturnTimer();

  if (!loadingScene || !openingWizard || !openingForest) {
    stopProceduralLoop(audioState.music, 0.65);
    miniGameState.isRunning = false;
    miniGameState.status = "phoneDone";
    return;
  }

  setFinalFpsMusic("openingFunk");

  buildOpeningForestScene();
  hideOpeningBubbleOnly();
  stopOpeningMountainExplosionLoop();

  if (openingDialogue) {
    openingDialogue.classList.remove("is-visible");
    hideElement(openingDialogue);
  }

  loadingState.activeSurface = "openingWizard";
  loadingState.travelDialogueRunId += 1;
  loadingState.travelHudStarted = false;
  loadingState.travelHudStartedAt = 0;
  loadingState.travelDialogueStarted = false;
  loadingState.pathChallengeActive = false;
  loadingState.pathChallengeFailed = false;

  openingWizard.classList.remove(
    "is-active",
    "is-path-failed",
    "is-path-complete",
    "is-starting-game",
    "is-travel-hud-active",
    "is-mountain-exploding",
    "is-cup-returning",
  );
  openingForest.classList.remove("is-mountain-exploding");
  loadingScene.classList.remove("is-ending");
  showActiveSurface();
  void openingWizard.offsetWidth;
  openingWizard.classList.add("is-path-running", "is-cup-returning");
  scheduleOpeningMountainExplosionLoop();

  window.setTimeout(() => {
    openingWizard.classList.remove("is-cup-returning");
    playOpeningSpeedBoostSequence();
  }, CUP_TABLE_RETURN_FADE_MS + 120);

  miniGameState.status = "openingReturn";
  miniGameState.isRunning = false;
}

async function playOpeningSpeedBoostSequence() {
  const openingWizard = document.querySelector("#opening-wizard");
  const boost = document.querySelector("#opening-speed-boost");
  const boostText = document.querySelector("#opening-speed-boost-text");

  if (!openingWizard || !boost || !boostText || !openingWizard.classList.contains("is-path-running")) {
    return;
  }

  boostText.textContent = "";
  showElement(boost);
  window.requestAnimationFrame(() => boost.classList.add("is-visible"));
  await waitWhileLandscape(180);

  await typeWizardSpeech(boostText, OPENING_SPEED_BOOST_DIALOGUE, OPENING_SPEED_BOOST_TYPE_SPEED_MS);
  await waitWhileLandscape(OPENING_SPEED_BOOST_HOLD_MS);

  boost.classList.remove("is-visible");
  await waitWhileLandscape(220);
  hideElement(boost);

  if (!openingWizard.classList.contains("is-path-running")) {
    return;
  }

  openingWizard.classList.remove("is-speed-boosting");
  void openingWizard.offsetWidth;
  openingWizard.classList.add("is-speed-boosting");
  triggerScreenShake(OPENING_SPEED_BOOST_DURATION_MS, 8);
  playSoundEffect("levelUp", { minGap: 120, volume: 0.75 });
  playSoundEffect("openingSpeedBoost", {
    minGap: OPENING_SPEED_BOOST_DURATION_MS,
    duration: OPENING_SPEED_BOOST_DURATION_MS / 1000,
  });

  await waitWhileLandscape(OPENING_SPEED_BOOST_DURATION_MS);
  openingWizard.classList.remove("is-speed-boosting");
  openingWizard.classList.add("is-boosted-close");
  await playOpeningSnifferDogSequence();
}

async function playOpeningSnifferDogSequence() {
  const openingWizard = document.querySelector("#opening-wizard");
  const openingDialogue = document.querySelector("#opening-dialogue");
  const openingDialogueText = document.querySelector("#opening-dialogue-text");

  if (!openingWizard || !openingDialogue || !openingDialogueText || !openingWizard.classList.contains("is-path-running")) {
    return;
  }

  openingDialogueText.textContent = "";
  showElement(openingDialogue);
  window.requestAnimationFrame(() => openingDialogue.classList.add("is-visible"));
  await waitWhileLandscape(180);
  await typeWizardSpeech(openingDialogueText, OPENING_SNIFFER_DOG_DIALOGUE, OPENING_SNIFFER_DOG_TYPE_SPEED_MS);
  await waitWhileLandscape(900);
  openingDialogue.classList.remove("is-visible");
  await waitWhileLandscape(220);
  hideElement(openingDialogue);

  startOpeningDogDodgeChallenge();
}

function startOpeningSpeedBoostTest() {
  const loadingScene = document.querySelector('[data-scene="Loading"]');
  const openingWizard = document.querySelector("#opening-wizard");
  const openingForest = document.querySelector("#opening-forest");
  const boost = document.querySelector("#opening-speed-boost");
  const boostText = document.querySelector("#opening-speed-boost-text");
  const openingDialogue = document.querySelector("#opening-dialogue");
  const openingDialogueText = document.querySelector("#opening-dialogue-text");

  if (!loadingScene || !openingWizard || !openingForest) {
    return;
  }

  buildOpeningForestScene();
  hideOpeningBubbleOnly();
  stopOpeningMountainExplosionLoop();
  stopOpeningDogDodgeChallenge();
  loadingState.activeSurface = "openingWizard";
  loadingState.travelDialogueRunId += 1;
  loadingState.pathChallengeActive = false;
  loadingState.pathChallengeFailed = false;
  loadingState.dogChallengeMode = false;
  loadingState.dogChallengeComplete = false;
  loadingState.dogChallengeFailCount = 0;
  loadingState.travelHudStarted = false;
  loadingState.travelDialogueStarted = false;

  if (boost) {
    boost.classList.remove("is-visible");
    hideElement(boost);
  }

  if (boostText) {
    boostText.textContent = "";
  }

  if (openingDialogue) {
    openingDialogue.classList.remove("is-visible");
    hideElement(openingDialogue);
  }

  if (openingDialogueText) {
    openingDialogueText.textContent = "";
  }

  openingWizard.classList.remove(
    "is-active",
    "is-path-failed",
    "is-path-complete",
    "is-starting-game",
    "is-travel-hud-active",
    "is-mountain-exploding",
    "is-speed-boosting",
    "is-boosted-close",
    "is-cup-returning",
    "is-dog-tutorial-paused",
    "is-dog-challenge",
    "is-psychedelic-out",
  );
  openingWizard.style.removeProperty("--travel-hud-life");
  openingWizard.style.removeProperty("--travel-marker-duration");
  openingForest.classList.remove("is-mountain-exploding");
  loadingScene.classList.remove("is-ending");
  showActiveSurface();
  void openingWizard.offsetWidth;
  openingWizard.classList.add("is-path-running", "is-cup-returning");
  scheduleOpeningMountainExplosionLoop();

  window.setTimeout(() => {
    openingWizard.classList.remove("is-cup-returning");
    playOpeningSpeedBoostSequence();
  }, 420);
}

function startOpeningDogDodgeChallenge(options = {}) {
  const openingWizard = document.querySelector("#opening-wizard");
  const pathRunner = document.querySelector(".opening-wizard__path-runner");

  if (!openingWizard || !pathRunner) {
    return;
  }

  stopOpeningDogDodgeChallenge({ keepLane: false });
  loadingState.dogChallengeMode = true;
  loadingState.dogChallengeComplete = false;
  loadingState.tapBubbleTutorialSeen = true;
  loadingState.pathChallengeFailed = false;
  loadingState.pathChallengeActive = false;
  loadingState.travelHudStarted = false;
  loadingState.travelHudStartedAt = 0;
  openingWizard.classList.remove("is-path-complete", "is-travel-hud-active");
  openingWizard.classList.add("is-dog-challenge");

  if (options.resetProgress) {
    openingWizard.classList.remove("is-dog-challenge");
    void openingWizard.offsetWidth;
    openingWizard.classList.add("is-dog-challenge");
  }

  loadingState.dogDodgeActive = true;
  loadingState.dogDodgeTutorialActive = !options.skipTutorial;
  loadingState.dogDodgeStarted = Boolean(options.skipTutorial);
  loadingState.dogDodgeLane = "middle";
  pathRunner.dataset.lane = "middle";
  bindOpeningDogSwipe();
  setFinalFpsMusic("openingDogAction");

  if (loadingState.dogChallengeFailCount > 0) {
    showOpeningDogSkipButton();
  } else {
    hideOpeningDogSkipButton();
  }

  if (options.skipTutorial) {
    scheduleOpeningTravelHudSequence(850, { playDialogue: false });
    scheduleOpeningDogSpawn(760);
    return;
  }

  openingWizard.classList.add("is-dog-tutorial-paused");
  spawnOpeningDog("middle", { tutorial: true });
  showOpeningDogTutorial();
}

function stopOpeningDogDodgeChallenge(options = {}) {
  const dogLayer = document.querySelector(".opening-dog-layer");
  const dogTutorial = document.querySelector(".opening-dog-tutorial");
  const dogWarning = document.querySelector(".opening-dog-warning");
  const openingWizard = document.querySelector("#opening-wizard");
  const pathRunner = document.querySelector(".opening-wizard__path-runner");

  if (loadingState.dogDodgeNextDogTimer) {
    window.clearTimeout(loadingState.dogDodgeNextDogTimer);
    loadingState.dogDodgeNextDogTimer = null;
  }

  if (loadingState.dogDodgeWarningTimer) {
    window.clearTimeout(loadingState.dogDodgeWarningTimer);
    loadingState.dogDodgeWarningTimer = null;
  }

  loadingState.dogDodgeActive = false;
  loadingState.dogDodgeTutorialActive = false;
  loadingState.dogDodgeStarted = false;
  loadingState.dogDodgeSwipeStart = null;
  if (!options.keepMode) {
    loadingState.dogChallengeMode = false;
    loadingState.dogChallengeComplete = false;
  }
  unbindOpeningDogSwipe();

  if (dogLayer) {
    dogLayer.textContent = "";
  }

  if (!options.keepMode) {
    hideOpeningDogSkipButton();
  }

  if (dogTutorial) {
    dogTutorial.classList.remove("is-visible");
    hideElement(dogTutorial);
  }

  if (dogWarning) {
    dogWarning.classList.remove("is-visible", "is-left", "is-right");
    hideElement(dogWarning);
  }

  if (openingWizard) {
    openingWizard.classList.remove("is-dog-tutorial-paused");
    if (!options.keepMode) {
      openingWizard.classList.remove("is-dog-challenge");
    }
  }

  if (!options.keepLane && pathRunner) {
    pathRunner.dataset.lane = "middle";
  }
}

function bindOpeningDogSwipe() {
  document.addEventListener("pointerdown", handleOpeningDogSwipeStart);
  document.addEventListener("pointerup", handleOpeningDogSwipeEnd);
  document.addEventListener("pointercancel", handleOpeningDogSwipeCancel);
}

function unbindOpeningDogSwipe() {
  document.removeEventListener("pointerdown", handleOpeningDogSwipeStart);
  document.removeEventListener("pointerup", handleOpeningDogSwipeEnd);
  document.removeEventListener("pointercancel", handleOpeningDogSwipeCancel);
}

function handleOpeningDogSwipeStart(event) {
  if (!loadingState.dogDodgeActive) {
    return;
  }

  loadingState.dogDodgeSwipeStart = {
    x: event.clientX,
    y: event.clientY,
    time: performance.now(),
  };
}

function handleOpeningDogSwipeCancel() {
  loadingState.dogDodgeSwipeStart = null;
}

function handleOpeningDogSwipeEnd(event) {
  if (!loadingState.dogDodgeActive || !loadingState.dogDodgeSwipeStart) {
    return;
  }

  const start = loadingState.dogDodgeSwipeStart;
  loadingState.dogDodgeSwipeStart = null;
  const dx = event.clientX - start.x;
  const dy = event.clientY - start.y;

  if (Math.abs(dx) < 34 || Math.abs(dx) < Math.abs(dy) * 1.15) {
    return;
  }

  moveOpeningWizardLane(dx < 0 ? -1 : 1);
}

function moveOpeningWizardLane(direction) {
  const pathRunner = document.querySelector(".opening-wizard__path-runner");
  const openingWizard = document.querySelector("#opening-wizard");

  if (!pathRunner || !openingWizard) {
    return;
  }

  const currentIndex = OPENING_DOG_LANES.indexOf(loadingState.dogDodgeLane);
  const fallbackIndex = currentIndex >= 0 ? currentIndex : 1;
  const nextIndex = Math.max(0, Math.min(OPENING_DOG_LANES.length - 1, fallbackIndex + direction));
  const nextLane = OPENING_DOG_LANES[nextIndex];

  loadingState.dogDodgeLane = nextLane;
  pathRunner.dataset.lane = nextLane;
  playSoundEffect("tapPop", { minGap: 90, volume: 0.38 });
  hideOpeningDogLaneWarning();

  if (loadingState.dogDodgeTutorialActive) {
    loadingState.dogDodgeTutorialActive = false;
    loadingState.dogDodgeStarted = true;
    openingWizard.classList.remove("is-dog-tutorial-paused");
    hideOpeningDogTutorial();
    const tutorialDog = document.querySelector(".opening-dog.is-tutorial");
    tutorialDog?.classList.remove("is-paused", "is-tutorial");
    if (tutorialDog) {
      armOpeningDog(tutorialDog, "middle", { collisionDelay: 1180, removeDelay: 1500 });
    }
    scheduleOpeningTravelHudSequence(OPENING_DOG_CHALLENGE_BUBBLE_DELAY_MS, { playDialogue: false });
    scheduleOpeningDogSpawn(OPENING_DOG_SPAWN_INTERVAL_MS);
  }
}

function showOpeningDogTutorial() {
  const dogTutorial = document.querySelector(".opening-dog-tutorial");

  if (!dogTutorial) {
    return;
  }

  showElement(dogTutorial);
  window.requestAnimationFrame(() => dogTutorial.classList.add("is-visible"));
}

function hideOpeningDogTutorial() {
  const dogTutorial = document.querySelector(".opening-dog-tutorial");

  if (!dogTutorial) {
    return;
  }

  dogTutorial.classList.remove("is-visible");
  window.setTimeout(() => hideElement(dogTutorial), 220);
}

function scheduleOpeningDogSpawn(delay = OPENING_DOG_SPAWN_INTERVAL_MS) {
  if (!loadingState.dogDodgeActive || loadingState.dogDodgeTutorialActive) {
    return;
  }

  if (loadingState.dogDodgeNextDogTimer) {
    window.clearTimeout(loadingState.dogDodgeNextDogTimer);
  }

  loadingState.dogDodgeNextDogTimer = window.setTimeout(() => {
    loadingState.dogDodgeNextDogTimer = null;
    const lane = OPENING_DOG_LANES[Math.floor(Math.random() * OPENING_DOG_LANES.length)];
    spawnOpeningDog(lane);
    scheduleOpeningDogSpawn(getOpeningDogSpawnDelay());
  }, delay);
}

function getOpeningDogSpawnDelay() {
  const progress = loadingState.dogChallengeMode ? getOpeningTravelProgress() : 0;
  const ramp = Math.pow(progress, 1.25);
  const delay = OPENING_DOG_SPAWN_INTERVAL_MS - 780 * ramp;
  return Math.max(1780, delay + Math.random() * 420 - 90);
}

function spawnOpeningDog(lane, options = {}) {
  const dogLayer = document.querySelector(".opening-dog-layer");

  if (!dogLayer) {
    return;
  }

  const dog = document.createElement("div");
  dog.className = `opening-dog opening-dog--${lane}`;

  if (options.tutorial) {
    dog.classList.add("is-tutorial", "is-paused");
  }

  dog.innerHTML = `
    <span class="opening-dog__tail"></span>
    <span class="opening-dog__body"></span>
    <span class="opening-dog__head"></span>
    <span class="opening-dog__ear"></span>
    <span class="opening-dog__nose"></span>
    <span class="opening-dog__leg opening-dog__leg--front"></span>
    <span class="opening-dog__leg opening-dog__leg--back"></span>
  `;
  dogLayer.append(dog);

  if (!options.tutorial) {
    showOpeningDogLaneWarning(lane);
  }

  if (!options.tutorial) {
    armOpeningDog(dog, lane);
  }
}

function showOpeningDogLaneWarning(dogLane) {
  const warning = document.querySelector(".opening-dog-warning");

  if (!warning || !loadingState.dogDodgeActive || loadingState.dogDodgeLane !== dogLane) {
    return;
  }

  const currentIndex = OPENING_DOG_LANES.indexOf(loadingState.dogDodgeLane);
  const direction = currentIndex >= OPENING_DOG_LANES.length - 1 ? "left" : currentIndex <= 0 ? "right" : Math.random() < 0.5 ? "left" : "right";
  const text = warning.querySelector(".opening-dog-warning__text");

  if (text) {
    text.textContent = `Swipe ${direction}`;
  }

  if (loadingState.dogDodgeWarningTimer) {
    window.clearTimeout(loadingState.dogDodgeWarningTimer);
    loadingState.dogDodgeWarningTimer = null;
  }

  warning.classList.remove("is-visible", "is-left", "is-right");
  warning.classList.add(direction === "left" ? "is-left" : "is-right");
  showElement(warning);
  window.requestAnimationFrame(() => warning.classList.add("is-visible"));
}

function hideOpeningDogLaneWarning() {
  const warning = document.querySelector(".opening-dog-warning");

  if (loadingState.dogDodgeWarningTimer) {
    window.clearTimeout(loadingState.dogDodgeWarningTimer);
    loadingState.dogDodgeWarningTimer = null;
  }

  if (!warning) {
    return;
  }

  warning.classList.remove("is-visible", "is-left", "is-right");
  window.setTimeout(() => hideElement(warning), 180);
}

function armOpeningDog(dog, lane, options = {}) {
  const collisionDelay = options.collisionDelay ?? OPENING_DOG_COLLISION_MS;
  const removeDelay = options.removeDelay ?? OPENING_DOG_RUN_MS + 420;
  const collisionWindow = options.collisionWindow ?? 560;

  const checkCollision = () => {
    if (
      loadingState.dogDodgeActive &&
      loadingState.pathChallengeActive &&
      !loadingState.pathChallengeFailed &&
      loadingState.dogDodgeLane === lane
    ) {
      failOpeningPathChallenge();
    }
  };

  let collisionInterval = null;

  window.setTimeout(() => {
    checkCollision();
    collisionInterval = window.setInterval(checkCollision, 80);
  }, Math.max(0, collisionDelay - 180));

  window.setTimeout(() => {
    if (collisionInterval) {
      window.clearInterval(collisionInterval);
    }
  }, collisionDelay + collisionWindow);

  window.setTimeout(() => {
    if (collisionInterval) {
      window.clearInterval(collisionInterval);
    }
    dog.remove();
  }, removeDelay);
}

async function playOpeningAfterDogChallengeSequence() {
  const loadingScene = document.querySelector('[data-scene="Loading"]');
  const openingWizard = document.querySelector("#opening-wizard");
  const openingDialogue = document.querySelector("#opening-dialogue");
  const openingDialogueText = document.querySelector("#opening-dialogue-text");
  const boost = document.querySelector("#opening-speed-boost");
  const boostText = document.querySelector("#opening-speed-boost-text");

  if (!loadingScene || !openingWizard || !openingDialogue || !openingDialogueText || !boost || !boostText) {
    return;
  }

  loadingState.travelDialogueRunId += 1;
  const dialogueRunId = loadingState.travelDialogueRunId;

  // The dog challenge (including its skip route) ends as the wizard catches his breath.
  stopProceduralLoop(audioState.music, 0.9);

  await typeOpeningDialogueLine(openingDialogue, openingDialogueText, OPENING_AFTER_DOG_WIZARD_LINE_1);
  await waitWhileLandscape(850);
  openingDialogue.classList.remove("is-visible");
  await waitWhileLandscape(180);
  hideElement(openingDialogue);

  if (dialogueRunId !== loadingState.travelDialogueRunId) {
    return;
  }

  await typeOpeningJohnLine(boost, boostText, OPENING_AFTER_DOG_JOHN_LINE, { waitForContinue: true });
  boost.classList.remove("is-visible");
  await waitWhileLandscape(180);
  hideElement(boost);

  if (dialogueRunId !== loadingState.travelDialogueRunId) {
    return;
  }

  await typeOpeningDialogueLine(openingDialogue, openingDialogueText, OPENING_AFTER_DOG_WIZARD_LINE_2, { waitForContinue: true });

  openingDialogue.classList.remove("is-visible");
  boost.classList.remove("is-visible");
  await waitWhileLandscape(220);
  hideElement(openingDialogue);
  hideElement(boost);

  stopOpeningMountainExplosionLoop();
  openingWizard.classList.add("is-psychedelic-out");
  triggerScreenShake(2600, 9);
  playSoundEffect("levelUp", { minGap: 180, volume: 0.72 });
  await waitWhileLandscape(3000);
  loadingScene.classList.add("is-ending");
  hideElement(openingWizard);
  await waitWhileLandscape(2000);
  await showFinalChallengePrompt();
}

async function showFinalChallengePrompt(options = {}) {
  const loadingScene = document.querySelector('[data-scene="Loading"]');
  const finalChallenge = document.querySelector("#final-challenge");
  const finalChallengeTitle = finalChallenge?.querySelector(".final-challenge__title");
  const finalChallengePlay = finalChallenge?.querySelector(".final-challenge__play");

  if (!loadingScene || !finalChallenge || !finalChallengeTitle || !finalChallengePlay) {
    return;
  }

  loadingScene.classList.remove("is-ending");
  finalChallengeTitle.textContent = FINAL_CHALLENGE_TITLE;
  finalChallenge.classList.remove("is-visible", "is-play-ready", "is-fading-out");
  showElement(finalChallenge);
  void finalChallenge.offsetWidth;
  finalChallenge.classList.add("is-visible");
  if (options.skipFade) {
    finalChallenge.classList.add("is-test-ready");
  } else {
    finalChallenge.classList.remove("is-test-ready");
    await waitWhileLandscape(FINAL_CHALLENGE_FADE_IN_MS);
  }
  finalChallenge.classList.add("is-play-ready");

  finalChallengePlay.onclick = async () => {
    finalChallenge.classList.add("is-fading-out");
    await waitWhileLandscape(520);
    hideElement(finalChallenge);
    startFinalFpsChallenge({
      startWithGunAndPortal: TEST_FINAL_FPS_START_WITH_GUN_AND_PORTAL,
      startNearForest: TEST_FINAL_FPS_START_NEAR_FOREST,
    });
  };
}

function startFinalFpsChallenge(options = {}) {
  const canvas = document.querySelector("#final-fps-canvas");

  if (!canvas) {
    return;
  }

  if (finalFpsState.animationFrame) {
    window.cancelAnimationFrame(finalFpsState.animationFrame);
  }

  finalFpsState.canvas = canvas;
  finalFpsState.context = canvas.getContext("2d");
  finalFpsState.isRunning = true;
  finalFpsState.startedAt = performance.now();
  finalFpsState.blinkStartedAt = finalFpsState.startedAt;
  finalFpsState.lastFrameTime = finalFpsState.startedAt;
  finalFpsState.player = { x: FINAL_FPS_ROOM_SIZE / 2, y: FINAL_FPS_ROOM_SIZE - 1.25, angle: -Math.PI / 2, pitch: 0 };
  finalFpsState.keys = { forward: 0, strafe: 0 };
  finalFpsState.doorOpenProgress = 0;
  finalFpsState.doorSpawnProgress = 0;
  finalFpsState.tutorialPhase = "look";
  finalFpsState.tutorialPhaseStartedAt = finalFpsState.startedAt;
  finalFpsState.wizardDialogueStartedAt = 0;
  finalFpsState.wizardDialogueTypingActive = false;
  finalFpsState.doorWarpStartedAt = 0;
  finalFpsState.wallDecorations = createFinalFpsWallDecorations();
  finalFpsState.furniture = createFinalFpsFurniture();
  finalFpsState.activeInteraction = null;
  finalFpsState.interactionButtonRect = null;
  finalFpsState.inspectedImageKey = null;
  finalFpsState.inspectedPaintingFlipped = false;
  finalFpsState.inspectionPointer = null;
  finalFpsState.gunPaintingKey = null;
  finalFpsState.inspectedBoomtownPaintings = [];
  finalFpsState.gunDiscoveryStartedAt = 0;
  finalFpsState.gunDiscoveryTypingActive = false;
  finalFpsState.hasGun = false;
  finalFpsState.gunPickupButtonRect = null;
  finalFpsState.ammo = FINAL_FPS_MAGAZINE_SIZE;
  finalFpsState.isShooting = false;
  finalFpsState.shootPointerId = null;
  finalFpsState.shootButtonPressed = false;
  finalFpsState.shootButtonRect = null;
  finalFpsState.reloadButtonRect = null;
  finalFpsState.autoFire = false;
  finalFpsState.autoFireButtonRect = null;
  finalFpsState.lastShotAt = -Infinity;
  finalFpsState.muzzleFlashAt = 0;
  finalFpsState.bulletMarks = [];
  finalFpsState.recoilUntil = 0;
  finalFpsState.recoilIntensity = 0;
  finalFpsState.gunTutorialPhase = null;
  finalFpsState.environmentMode = "room";
  finalFpsState.portalTransitionStartedAt = 0;
  finalFpsState.forestTransitionStartedAt = 0;
  finalFpsState.forestStartedAt = 0;
  finalFpsState.portalEntered = false;
  finalFpsState.corridorStartedAt = 0;
  finalFpsState.corridorPostWaveDialogueShown = false;
  finalFpsState.forestFireworks = [];
  finalFpsState.nextForestFireworkAt = 0;
  finalFpsState.forestIntroStartedAt = 0;
  finalFpsState.forestIntroLineIndex = 0;
  finalFpsState.forestIntroComplete = false;
  finalFpsState.forestDialogueTypingActive = false;
  finalFpsState.forestOneOffDialogue = null;
  finalFpsState.forestIntroGoblinSpawned = 0;
  finalFpsState.forestIntroGoblinKills = 0;
  finalFpsState.forestWaypointMilestonesShown = [];
  finalFpsState.forestPowerUp = null;
  finalFpsState.forestWaypoint = null;
  finalFpsState.forestBoss = null;
  finalFpsState.forestBossCheckpointPhase = 0;
  finalFpsState.forestBossComplete = false;
  finalFpsState.forestBossScorePopups = [];
  finalFpsState.forestBossDialogue = null;
  finalFpsState.forestBossOutroStartedAt = 0;
  finalFpsState.forestBossOutroFadeStartedAt = 0;
  clearFinalFpsForestBossRuntime();
  finalFpsState.forestBossDodgePromptSeen = false;
  finalFpsState.forestComboKills = 0;
  finalFpsState.forestLastKillAt = 0;
  finalFpsState.forestComboAnnounceAt = 0;
  finalFpsState.forestComboAnnounceText = "";
  finalFpsState.infiniteAmmo = false;
  finalFpsState.infiniteAmmoActivatedAt = 0;
  finalFpsState.forestAutoFirePromptActive = false;
  finalFpsState.forestChaosDialogueStartedAt = 0;
  finalFpsState.forestChaosDialogueTypingActive = false;
  finalFpsState.forestChaosActive = false;
  finalFpsState.partyGoblins = [];
  finalFpsState.partyGoblinBursts = [];
  finalFpsState.lastPartyGoblinSpawnAt = 0;
  finalFpsState.lastPartyGoblinLane = -1;
  finalFpsState.hasShownPartyGoblinTutorial = false;
  finalFpsState.partyGoblinTutorialActive = false;
  finalFpsState.partyGoblinTutorialId = null;
  finalFpsState.partyGoblinTutorialStartedAt = 0;
  finalFpsState.forestTransitionStartedAt = 0;
  finalFpsState.corridorFailedAt = 0;
  finalFpsState.corridorFailedButtons = null;
  finalFpsState.corridorFailedMode = null;
  finalFpsState.corridorPostWaveDialogueShown = false;
  preloadFinalFpsPaintingImages();
  loadFinalFpsPartyGoblinImage();
  loadFinalFpsForestBossImage();
  loadFinalFpsForestBossAttackImage();
  loadFinalFpsForestBossJumpImage();
  loadFinalFpsForestBossStunImage();
  loadFinalFpsForestBossDeathImage();
  finalFpsState.joystick.active = false;
  finalFpsState.look.active = false;
  unlockTypingAudio().catch(() => {});
  resizeFinalFpsCanvas();
  showElement(canvas);
  canvas.classList.add("is-active");
  canvas.addEventListener("pointerdown", handleFinalFpsPointerDown);
  canvas.addEventListener("pointermove", handleFinalFpsPointerMove);
  canvas.addEventListener("pointerup", handleFinalFpsPointerUp);
  canvas.addEventListener("pointercancel", handleFinalFpsPointerUp);
  if (options.startNearForest) {
    finalFpsState.hasGun = true;
    finalFpsState.ammo = FINAL_FPS_MAGAZINE_SIZE;
    finalFpsState.gunTutorialPhase = null;
    finalFpsState.tutorialPhase = "playing";
    finalFpsState.environmentMode = "forest";
    finalFpsState.player = { x: 0, y: 0, angle: -Math.PI / 2, pitch: 0 };
    finalFpsState.forestStartedAt = finalFpsState.startedAt;
    finalFpsState.nextForestFireworkAt = finalFpsState.startedAt + 2400;
    finalFpsState.forestIntroStartedAt = finalFpsState.startedAt;
    finalFpsState.forestIntroLineIndex = 0;
    finalFpsState.forestIntroComplete = true;
    finalFpsState.forestOneOffDialogue = null;
    finalFpsState.forestWaypointMilestonesShown = [];
    finalFpsState.infiniteAmmo = true;
    finalFpsState.autoFire = false;
    finalFpsState.forestChaosActive = false;
    finalFpsState.forestWaypoint = {
      targetMeters: 5,
      remainingMeters: 5,
      startY: finalFpsState.player.y,
      bestProgress: 0,
      metersPerWorldUnit: 1,
      worldY: finalFpsState.player.y - 5,
      createdAt: finalFpsState.startedAt,
    };
    finalFpsState.forestBossCheckpointPhase = 0;
    finalFpsState.hasShownPartyGoblinTutorial = true;
    finalFpsState.partyGoblins = [];
    finalFpsState.partyGoblinBursts = [];
    finalFpsState.lastPartyGoblinSpawnAt = finalFpsState.startedAt;
    finalFpsState.lastPartyGoblinLane = -1;
    finalFpsState.partyGoblinTutorialActive = false;
    finalFpsState.partyGoblinTutorialId = null;
    finalFpsState.partyGoblinTutorialStartedAt = 0;
  } else if (options.startWithGunAndPortal) {
    finalFpsState.hasGun = true;
    finalFpsState.ammo = FINAL_FPS_MAGAZINE_SIZE;
    finalFpsState.gunTutorialPhase = null;
    finalFpsState.tutorialPhase = "doorWarp";
    finalFpsState.tutorialPhaseStartedAt = finalFpsState.startedAt;
    finalFpsState.doorWarpStartedAt = finalFpsState.startedAt;
    finalFpsState.doorSpawnProgress = 0;
    finalFpsState.doorOpenProgress = 0;
  }
  finalFpsState.animationFrame = window.requestAnimationFrame(updateFinalFps);
}

function stopFinalFpsChallenge() {
  const canvas = finalFpsState.canvas || document.querySelector("#final-fps-canvas");

  if (finalFpsState.animationFrame) {
    window.cancelAnimationFrame(finalFpsState.animationFrame);
    finalFpsState.animationFrame = null;
  }

  if (canvas) {
    canvas.removeEventListener("pointerdown", handleFinalFpsPointerDown);
    canvas.removeEventListener("pointermove", handleFinalFpsPointerMove);
    canvas.removeEventListener("pointerup", handleFinalFpsPointerUp);
    canvas.removeEventListener("pointercancel", handleFinalFpsPointerUp);
    canvas.classList.remove("is-active");
  }

  finalFpsState.isRunning = false;
  finalFpsState.joystick.active = false;
  finalFpsState.look.active = false;
  finalFpsState.wizardDialogueTypingActive = false;
  finalFpsState.keys.forward = 0;
  finalFpsState.keys.strafe = 0;
  stopTypingSound();
  stopProceduralLoop(audioState.music, 0.35);
  stopProceduralLoop(audioState.ambience, 0.35);
}

function isFinalFpsCheckpointedSection() {
  return (
    finalFpsState.environmentMode === "hedge" ||
    finalFpsState.environmentMode === "portalTransition" ||
    finalFpsState.environmentMode === "forest"
  );
}

function markFinalFpsOrientationFailure() {
  if (!finalFpsState.isRunning || finalFpsState.orientationWasPaused) {
    return;
  }

  finalFpsState.orientationWasPaused = true;
  finalFpsState.orientationRecoveryMode = isFinalFpsCheckpointedSection() ? "checkpoint" : "prompt";
  finalFpsState.keys.forward = 0;
  finalFpsState.keys.strafe = 0;
  finalFpsState.joystick.active = false;
  finalFpsState.look.active = false;
  finalFpsState.isShooting = false;
  finalFpsState.shootButtonPressed = false;
  finalFpsState.shootPointerId = null;
  stopTypingSound();
  stopProceduralLoop(audioState.music, 0.2);
  stopProceduralLoop(audioState.ambience, 0.2);

  if (finalFpsState.orientationRecoveryMode === "checkpoint") {
    failFinalFpsCorridor(performance.now());
  }
}

async function recoverFinalFpsOrientation() {
  if (!finalFpsState.orientationWasPaused) {
    return false;
  }

  const recoveryMode = finalFpsState.orientationRecoveryMode;
  finalFpsState.orientationWasPaused = false;
  finalFpsState.orientationRecoveryMode = null;

  if (recoveryMode === "prompt") {
    stopFinalFpsChallenge();
    loadingState.activeSurface = null;
    hideLoadingSurfaces({ preserveFinalFps: false });
    await showFinalChallengePrompt({ skipFade: true });
    return true;
  }

  if (recoveryMode === "checkpoint") {
    const canvas = finalFpsState.canvas || document.querySelector("#final-fps-canvas");
    hideElement(document.querySelector("#rotate-phone-message"));
    if (canvas) {
      showElement(canvas);
      canvas.classList.add("is-active");
      resizeFinalFpsCanvas();
    }
    finalFpsState.lastFrameTime = performance.now();
    return true;
  }

  return false;
}

function resizeFinalFpsCanvas() {
  const canvas = finalFpsState.canvas || document.querySelector("#final-fps-canvas");

  if (!canvas) {
    return;
  }

  const pixelRatio = window.devicePixelRatio || 1;
  canvas.width = Math.floor(window.innerWidth * pixelRatio);
  canvas.height = Math.floor(window.innerHeight * pixelRatio);
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  finalFpsState.context = canvas.getContext("2d");
  finalFpsState.context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
}

function handleFinalFpsPointerDown(event) {
  if (!finalFpsState.isRunning) {
    return;
  }

  if (handleFinalFpsInspectionTap(event)) {
    return;
  }

  if (handleFinalFpsCorridorOverlayTap(event)) {
    return;
  }

  if (handleFinalFpsTutorialTap(event)) {
    return;
  }

  if (handleFinalFpsGunTutorialTap(event)) {
    return;
  }

  if (handleFinalFpsBossDodgePromptTap(event)) {
    return;
  }

  if (handleFinalFpsBossJumpPromptTap(event)) {
    return;
  }

  if (handleFinalFpsBossShockwavePromptTap(event)) {
    return;
  }

  if (handleFinalFpsHudPointerDown(event)) {
    return;
  }

  const point = { x: event.clientX, y: event.clientY };
  const isJoystickZone = point.x < window.innerWidth * 0.42 && point.y > window.innerHeight * 0.34;

  if (isFinalFpsMovementEnabled() && isJoystickZone && !finalFpsState.joystick.active) {
    finalFpsState.joystick = {
      active: true,
      pointerId: event.pointerId,
      startX: point.x,
      startY: point.y,
      x: point.x,
      y: point.y,
    };
    event.preventDefault();
    return;
  }

  if (!finalFpsState.look.active) {
    finalFpsState.look = {
      active: true,
      pointerId: event.pointerId,
      lastX: point.x,
      lastY: point.y,
    };
    event.preventDefault();
  }
}

function handleFinalFpsPointerMove(event) {
  if (!finalFpsState.isRunning) {
    return;
  }

  if (isFinalFpsCorridorOverlayBlocking()) {
    event.preventDefault();
    return;
  }

  if (finalFpsState.joystick.active && event.pointerId === finalFpsState.joystick.pointerId) {
    finalFpsState.joystick.x = event.clientX;
    finalFpsState.joystick.y = event.clientY;
    const dx = finalFpsState.joystick.x - finalFpsState.joystick.startX;
    const dy = finalFpsState.joystick.y - finalFpsState.joystick.startY;
    const maxDistance = 54;
    finalFpsState.keys.strafe = Math.max(-1, Math.min(1, dx / maxDistance));
    finalFpsState.keys.forward = Math.max(-1, Math.min(1, -dy / maxDistance));
    event.preventDefault();
    return;
  }

  if (finalFpsState.look.active && event.pointerId === finalFpsState.look.pointerId) {
    const dx = event.clientX - finalFpsState.look.lastX;
    const dy = event.clientY - finalFpsState.look.lastY;
    finalFpsState.player.angle += dx * 0.006;
    finalFpsState.player.pitch = Math.max(-0.5, Math.min(0.5, finalFpsState.player.pitch - dy * 0.0052));
    finalFpsState.look.lastX = event.clientX;
    finalFpsState.look.lastY = event.clientY;
    event.preventDefault();
  }
}

function handleFinalFpsPointerUp(event) {
  if (handleFinalFpsInspectionSwipe(event)) {
    return;
  }

  if (finalFpsState.shootPointerId === event.pointerId) {
    finalFpsState.isShooting = false;
    finalFpsState.shootPointerId = null;
    finalFpsState.shootButtonPressed = false;
  }

  if (finalFpsState.joystick.active && event.pointerId === finalFpsState.joystick.pointerId) {
    finalFpsState.joystick.active = false;
    finalFpsState.keys.forward = 0;
    finalFpsState.keys.strafe = 0;
  }

  if (finalFpsState.look.active && event.pointerId === finalFpsState.look.pointerId) {
    finalFpsState.look.active = false;
  }
}

function handleFinalFpsHudPointerDown(event) {
  if (!finalFpsState.hasGun || finalFpsState.gunTutorialPhase || isFinalFpsInSceneTransition() || isFinalFpsCorridorOverlayBlocking()) {
    return false;
  }

  const pointX = event.clientX;
  const pointY = event.clientY;

  if (finalFpsState.autoFireButtonRect && isPointInsideRect(pointX, pointY, finalFpsState.autoFireButtonRect)) {
    finalFpsState.autoFire = !finalFpsState.autoFire;
    if (finalFpsState.forestAutoFirePromptActive && finalFpsState.autoFire) {
      finalFpsState.forestAutoFirePromptActive = false;
      finalFpsState.forestChaosDialogueStartedAt = performance.now();
      finalFpsState.lastPartyGoblinSpawnAt = finalFpsState.forestChaosDialogueStartedAt;
      finalFpsState.keys.forward = 1;
    }
    playSoundEffect("tapPop", { minGap: 80, volume: 0.38 });
    event.preventDefault();
    return true;
  }

  if (finalFpsState.forestAutoFirePromptActive) {
    event.preventDefault();
    return true;
  }

  if (finalFpsState.reloadButtonRect && isPointInsideRect(pointX, pointY, finalFpsState.reloadButtonRect)) {
    reloadFinalFpsGun();
    event.preventDefault();
    return true;
  }

  if (finalFpsState.shootButtonRect && isPointInsideRect(pointX, pointY, finalFpsState.shootButtonRect)) {
    finalFpsState.isShooting = true;
    finalFpsState.shootPointerId = event.pointerId;
    finalFpsState.shootButtonPressed = true;
    fireFinalFpsGun(performance.now());
    event.preventDefault();
    return true;
  }

  return false;
}

function handleFinalFpsGunTutorialTap(event) {
  if (!finalFpsState.gunTutorialPhase) {
    return false;
  }

  if (finalFpsState.gunTutorialPhase === "shoot") {
    finalFpsState.gunTutorialPhase = "reload";
  } else {
    finalFpsState.gunTutorialPhase = null;
    startFinalFpsDoorSpawn();
  }

  playSoundEffect("tapPop", { minGap: 80, volume: 0.34 });
  event.preventDefault();
  return true;
}

function handleFinalFpsBossDodgePromptTap(event) {
  if (!finalFpsState.forestBossDodgePromptActive) {
    return false;
  }

  const now = performance.now();

  if (now - finalFpsState.forestBossDodgePromptStartedAt < FINAL_FPS_FOREST_BOSS_TUTORIAL_LOCK_MS) {
    event.preventDefault();
    return true;
  }

  finalFpsState.forestBossDodgePromptActive = false;
  finalFpsState.forestBossAttackGraceUntil = now + FINAL_FPS_FOREST_BOSS_GRACE_MS;
  if (finalFpsState.forestBoss) {
    finalFpsState.forestBoss.lastRocketAt = now;
  }
  finalFpsState.keys.forward = 0;
  finalFpsState.keys.strafe = 0;
  finalFpsState.joystick.active = false;
  playSoundEffect("tapPop", { minGap: 80, volume: 0.36 });
  event.preventDefault();
  return true;
}

function handleFinalFpsBossJumpPromptTap(event) {
  if (!finalFpsState.forestBossJumpPromptActive) {
    return false;
  }

  const now = performance.now();

  if (now - finalFpsState.forestBossJumpPromptStartedAt < FINAL_FPS_FOREST_BOSS_JUMP_TUTORIAL_LOCK_MS) {
    event.preventDefault();
    return true;
  }

  finalFpsState.forestBossJumpPromptActive = false;
  landFinalFpsForestBoss(now);
  event.preventDefault();
  return true;
}

function handleFinalFpsBossShockwavePromptTap(event) {
  if (!finalFpsState.forestBossShockwavePromptActive) {
    return false;
  }

  const rect = finalFpsState.forestBossJumpButtonRect;

  if (rect && isPointInsideRect(event.clientX, event.clientY, rect)) {
    finalFpsState.forestBossShockwavePromptActive = false;
    finalFpsState.forestBossShockwavePromptTutorial = false;
    finalFpsState.forestBossJumpButtonRect = null;
    finalFpsState.playerJumpActive = true;
    finalFpsState.playerJumpStartedAt = performance.now();
    finalFpsState.playerJumpHeight = 0.01;
    finalFpsState.shockwaveDodgedUntil = performance.now() + FINAL_FPS_FOREST_BOSS_SHOCKWAVE_DODGE_MS;
    if (finalFpsState.forestBossShockwave) {
      finalFpsState.forestBossShockwave.dodged = true;
    }
    finalFpsState.keys.forward = 1;
    playSoundEffect("tapPop", { minGap: 90, volume: 0.44 });
  }

  event.preventDefault();
  return true;
}

function isFinalFpsCorridorOverlayBlocking() {
  return (
    finalFpsState.partyGoblinTutorialActive ||
    finalFpsState.corridorFailedAt > 0 ||
    finalFpsState.forestBossDodgePromptActive ||
    finalFpsState.forestBossJumpPromptActive ||
    (finalFpsState.forestBossShockwavePromptActive && finalFpsState.forestBossShockwavePromptTutorial)
  );
}

function handleFinalFpsCorridorOverlayTap(event) {
  if (finalFpsState.partyGoblinTutorialActive) {
    const now = performance.now();
    const hasHeldTutorial = now - finalFpsState.partyGoblinTutorialStartedAt >= FINAL_FPS_PARTY_GOBLIN_TUTORIAL_LOCK_MS;

    if (!hasHeldTutorial) {
      event.preventDefault();
      return true;
    }

    finalFpsState.partyGoblinTutorialActive = false;
    finalFpsState.partyGoblinTutorialId = null;
    finalFpsState.partyGoblinTutorialStartedAt = 0;
    finalFpsState.lastPartyGoblinSpawnAt = now;
    playSoundEffect("tapPop", { minGap: 80, volume: 0.34 });
    event.preventDefault();
    return true;
  }

  if (finalFpsState.corridorFailedAt > 0) {
    const buttons = finalFpsState.corridorFailedButtons;

    if (buttons?.skip && isPointInsideRect(event.clientX, event.clientY, buttons.skip)) {
      const now = performance.now();
      if (finalFpsState.corridorFailedMode === "forestRun") {
        skipFinalFpsForestRunToBoss(now);
      } else if (finalFpsState.corridorFailedMode === "hedge") {
        skipFinalFpsHedgeToForest(now);
      } else {
        skipFinalFpsForestBossAfterFailure(now);
      }
      playSoundEffect("tapPop", { minGap: 80, volume: 0.4 });
      event.preventDefault();
      return true;
    }

    if (buttons?.retry && isPointInsideRect(event.clientX, event.clientY, buttons.retry)) {
      resetFinalFpsCorridorAfterFailure(performance.now());
      playSoundEffect("tapPop", { minGap: 80, volume: 0.4 });
      event.preventDefault();
      return true;
    }

    event.preventDefault();
    return true;
  }

  return false;
}

function resetFinalFpsCorridorAfterFailure(timestamp) {
  if (finalFpsState.corridorFailedMode === "forestIntro" || finalFpsState.corridorFailedMode === "forestRun") {
    resetFinalFpsForestIntroAfterFailure(timestamp);
    return;
  }

  if (finalFpsState.corridorFailedMode === "forestBoss") {
    resetFinalFpsForestBossAfterFailure(timestamp);
    return;
  }

  finalFpsState.player = { x: 0, y: 0, angle: -Math.PI / 2, pitch: 0 };
  finalFpsState.keys.forward = 0;
  finalFpsState.keys.strafe = 0;
  finalFpsState.joystick.active = false;
  finalFpsState.look.active = false;
  finalFpsState.isShooting = false;
  finalFpsState.shootButtonPressed = false;
  finalFpsState.shootPointerId = null;
  finalFpsState.ammo = FINAL_FPS_MAGAZINE_SIZE;
  finalFpsState.partyGoblins = [];
  finalFpsState.partyGoblinBursts = [];
  clearFinalFpsForestBossRuntime();
  finalFpsState.lastPartyGoblinSpawnAt = timestamp;
  finalFpsState.lastPartyGoblinLane = -1;
  finalFpsState.partyGoblinTutorialActive = false;
  finalFpsState.partyGoblinTutorialId = null;
  finalFpsState.partyGoblinTutorialStartedAt = 0;
  finalFpsState.corridorFailedAt = 0;
  finalFpsState.corridorFailedButtons = null;
  finalFpsState.corridorFailedMode = null;
  finalFpsState.corridorPostWaveDialogueShown = false;
  finalFpsState.corridorStartedAt = timestamp - FINAL_FPS_PARTY_GOBLIN_START_DELAY_MS + 900;
}

function resetFinalFpsForestBossAfterFailure(timestamp) {
  const checkpointPhase = Math.max(0, Math.min(2, finalFpsState.forestBossCheckpointPhase || 0));

  stopTypingSound();
  finalFpsState.environmentMode = "forest";
  finalFpsState.player = { x: 0, y: 0, angle: -Math.PI / 2, pitch: 0 };
  finalFpsState.keys.forward = 0;
  finalFpsState.keys.strafe = 0;
  finalFpsState.joystick.active = false;
  finalFpsState.look.active = false;
  finalFpsState.isShooting = false;
  finalFpsState.shootButtonPressed = false;
  finalFpsState.shootPointerId = null;
  finalFpsState.hasGun = true;
  finalFpsState.infiniteAmmo = true;
  finalFpsState.ammo = FINAL_FPS_MAGAZINE_SIZE;
  finalFpsState.autoFire = true;
  finalFpsState.forestStartedAt = timestamp;
  finalFpsState.nextForestFireworkAt = timestamp + 2200;
  finalFpsState.forestIntroComplete = true;
  finalFpsState.forestOneOffDialogue = null;
  finalFpsState.forestWaypointMilestonesShown = [];
  finalFpsState.forestPowerUp = null;
  finalFpsState.forestWaypoint = null;
  finalFpsState.partyGoblins = [];
  finalFpsState.partyGoblinBursts = [];
  finalFpsState.forestChaosActive = false;
  finalFpsState.forestAutoFirePromptActive = false;
  finalFpsState.forestChaosDialogueStartedAt = 0;
  finalFpsState.forestChaosDialogueTypingActive = false;
  finalFpsState.forestComboKills = 0;
  finalFpsState.forestLastKillAt = 0;
  finalFpsState.forestComboAnnounceAt = 0;
  finalFpsState.forestComboAnnounceText = "";
  finalFpsState.forestBossComplete = false;
  finalFpsState.forestBossScorePopups = [];
  finalFpsState.forestBossDialogue = null;
  finalFpsState.forestBossOutroStartedAt = 0;
  finalFpsState.forestBossOutroFadeStartedAt = 0;
  clearFinalFpsForestBossRuntime({ keepShockwaveTutorial: true });
  finalFpsState.forestBossCheckpointPhase = checkpointPhase;
  finalFpsState.forestBoss = createFinalFpsForestBoss(timestamp, {
    state: "idle",
    stunPhase: checkpointPhase,
    nextStunThresholdIndex: checkpointPhase,
    health: FINAL_FPS_FOREST_BOSS_MAX_HEALTH * (1 - checkpointPhase / 3),
    stateStartedAt: timestamp - Math.max(0, getFinalFpsForestBossAttackDelayForPhase(checkpointPhase) - 1200),
  });
  finalFpsState.corridorFailedAt = 0;
  finalFpsState.corridorFailedButtons = null;
  finalFpsState.corridorFailedMode = null;
}

function skipFinalFpsForestBossAfterFailure(timestamp) {
  stopTypingSound();
  finalFpsState.environmentMode = "forest";
  finalFpsState.keys.forward = 0;
  finalFpsState.keys.strafe = 0;
  finalFpsState.joystick.active = false;
  finalFpsState.look.active = false;
  finalFpsState.isShooting = false;
  finalFpsState.shootButtonPressed = false;
  finalFpsState.shootPointerId = null;
  finalFpsState.hasGun = true;
  finalFpsState.infiniteAmmo = true;
  finalFpsState.ammo = FINAL_FPS_MAGAZINE_SIZE;
  finalFpsState.autoFire = true;
  finalFpsState.partyGoblins = [];
  finalFpsState.partyGoblinBursts = [];
  finalFpsState.forestChaosActive = false;
  finalFpsState.forestAutoFirePromptActive = false;
  finalFpsState.forestWaypoint = null;
  finalFpsState.forestOneOffDialogue = null;
  finalFpsState.forestBoss = null;
  finalFpsState.forestBossComplete = true;
  finalFpsState.forestBossScorePopups = [];
  startFinalFpsForestBossOutro(timestamp);
  clearFinalFpsForestBossRuntime({ keepShockwaveTutorial: true });
  finalFpsState.corridorFailedAt = 0;
  finalFpsState.corridorFailedButtons = null;
  finalFpsState.corridorFailedMode = null;
  triggerScreenShake(360, 3.4);
}

function skipFinalFpsForestRunToBoss(timestamp) {
  stopTypingSound();
  finalFpsState.environmentMode = "forest";
  finalFpsState.player = { x: 0, y: 0, angle: -Math.PI / 2, pitch: 0 };
  finalFpsState.keys.forward = 0;
  finalFpsState.keys.strafe = 0;
  finalFpsState.joystick.active = false;
  finalFpsState.look.active = false;
  finalFpsState.isShooting = false;
  finalFpsState.shootButtonPressed = false;
  finalFpsState.shootPointerId = null;
  finalFpsState.hasGun = true;
  finalFpsState.infiniteAmmo = true;
  finalFpsState.ammo = FINAL_FPS_MAGAZINE_SIZE;
  finalFpsState.autoFire = true;
  finalFpsState.forestStartedAt = timestamp;
  finalFpsState.nextForestFireworkAt = timestamp + 2200;
  finalFpsState.forestIntroComplete = true;
  finalFpsState.forestOneOffDialogue = null;
  finalFpsState.forestWaypointMilestonesShown = [];
  finalFpsState.forestPowerUp = null;
  finalFpsState.forestWaypoint = null;
  finalFpsState.forestBoss = null;
  finalFpsState.forestBossCheckpointPhase = 0;
  finalFpsState.forestBossComplete = false;
  finalFpsState.forestBossScorePopups = [];
  finalFpsState.forestBossDialogue = null;
  finalFpsState.forestBossOutroStartedAt = 0;
  finalFpsState.forestBossOutroFadeStartedAt = 0;
  finalFpsState.partyGoblins = [];
  finalFpsState.partyGoblinBursts = [];
  finalFpsState.forestChaosActive = false;
  finalFpsState.forestAutoFirePromptActive = false;
  finalFpsState.forestChaosDialogueStartedAt = 0;
  finalFpsState.forestChaosDialogueTypingActive = false;
  finalFpsState.forestComboKills = 0;
  finalFpsState.forestLastKillAt = 0;
  finalFpsState.forestComboAnnounceAt = 0;
  finalFpsState.forestComboAnnounceText = "";
  finalFpsState.corridorFailedAt = 0;
  finalFpsState.corridorFailedButtons = null;
  finalFpsState.corridorFailedMode = null;
  clearFinalFpsForestBossRuntime();
  spawnFinalFpsForestBoss(timestamp);
}

function skipFinalFpsHedgeToForest(timestamp) {
  stopTypingSound();
  finalFpsState.environmentMode = "hedge";
  finalFpsState.player = { x: 0, y: 0, angle: -Math.PI / 2, pitch: 0 };
  finalFpsState.keys.forward = 0;
  finalFpsState.keys.strafe = 0;
  finalFpsState.joystick.active = false;
  finalFpsState.look.active = false;
  finalFpsState.isShooting = false;
  finalFpsState.shootButtonPressed = false;
  finalFpsState.shootPointerId = null;
  finalFpsState.partyGoblins = [];
  finalFpsState.partyGoblinBursts = [];
  finalFpsState.corridorFailedAt = 0;
  finalFpsState.corridorFailedButtons = null;
  finalFpsState.corridorFailedMode = null;
  finalFpsState.corridorPostWaveDialogueShown = true;
  finalFpsState.corridorStartedAt = timestamp - FINAL_FPS_PARTY_GOBLIN_WAVE_MS - 1000;
  startFinalFpsForestTransition();
}

function startFinalFpsForestBossOutro(timestamp) {
  if (finalFpsState.forestBossOutroStartedAt) {
    return;
  }

  finalFpsState.forestBossOutroStartedAt = timestamp;
  finalFpsState.forestBossOutroFadeStartedAt = 0;
  showFinalFpsForestBossDialogue("WOO, OFF TO BOOMTOWN WE GO.", timestamp, 3000);
  finalFpsState.keys.forward = 0;
  finalFpsState.keys.strafe = 0;
  finalFpsState.joystick.active = false;
  finalFpsState.look.active = false;
  finalFpsState.isShooting = false;
  finalFpsState.shootButtonPressed = false;
  finalFpsState.shootPointerId = null;
}

function resetFinalFpsForestIntroAfterFailure(timestamp) {
  stopTypingSound();
  finalFpsState.environmentMode = "forest";
  finalFpsState.player = { x: 0, y: 0, angle: -Math.PI / 2, pitch: 0 };
  finalFpsState.keys.forward = 0;
  finalFpsState.keys.strafe = 0;
  finalFpsState.joystick.active = false;
  finalFpsState.look.active = false;
  finalFpsState.isShooting = false;
  finalFpsState.shootButtonPressed = false;
  finalFpsState.shootPointerId = null;
  finalFpsState.hasGun = true;
  finalFpsState.ammo = FINAL_FPS_MAGAZINE_SIZE;
  finalFpsState.forestStartedAt = timestamp;
  finalFpsState.nextForestFireworkAt = timestamp + 1800;
  finalFpsState.forestIntroStartedAt = timestamp + 350;
  finalFpsState.forestIntroLineIndex = 0;
  finalFpsState.forestIntroComplete = false;
  finalFpsState.forestDialogueTypingActive = false;
  finalFpsState.forestOneOffDialogue = null;
  finalFpsState.forestIntroGoblinSpawned = 0;
  finalFpsState.forestIntroGoblinKills = 0;
  finalFpsState.forestWaypointMilestonesShown = [];
  finalFpsState.forestPowerUp = null;
  finalFpsState.forestWaypoint = null;
  finalFpsState.forestBoss = null;
  clearFinalFpsForestBossRuntime();
  finalFpsState.forestComboKills = 0;
  finalFpsState.forestLastKillAt = 0;
  finalFpsState.forestComboAnnounceAt = 0;
  finalFpsState.forestComboAnnounceText = "";
  finalFpsState.infiniteAmmo = false;
  finalFpsState.infiniteAmmoActivatedAt = 0;
  finalFpsState.autoFire = false;
  finalFpsState.forestAutoFirePromptActive = false;
  finalFpsState.forestChaosDialogueStartedAt = 0;
  finalFpsState.forestChaosDialogueTypingActive = false;
  finalFpsState.forestChaosActive = false;
  finalFpsState.partyGoblins = [];
  finalFpsState.partyGoblinBursts = [];
  finalFpsState.lastPartyGoblinSpawnAt = timestamp;
  finalFpsState.lastPartyGoblinLane = -1;
  finalFpsState.partyGoblinTutorialActive = false;
  finalFpsState.partyGoblinTutorialId = null;
  finalFpsState.partyGoblinTutorialStartedAt = 0;
  finalFpsState.corridorFailedAt = 0;
  finalFpsState.corridorFailedButtons = null;
  finalFpsState.corridorFailedMode = null;
}

function updateFinalFps(timestamp) {
  if (!finalFpsState.isRunning || !finalFpsState.context) {
    return;
  }

  const deltaSeconds = Math.min((timestamp - (finalFpsState.lastFrameTime || timestamp)) / 1000, 0.04);
  finalFpsState.lastFrameTime = timestamp;
  updateFinalFpsTutorial(timestamp);
  updateFinalFpsPlayer(deltaSeconds);
  updateFinalFpsForestSequence(timestamp);
  updateFinalFpsForestBossOutro(timestamp);
  updateFinalFpsPartyGoblins(timestamp, deltaSeconds);
  updateFinalFpsForestOneOffDialogue(timestamp);
  updateFinalFpsShooting(timestamp);
  updateFinalFpsPortalTransition(timestamp);
  updateFinalFpsForestTransition(timestamp);
  updateFinalFpsForestFireworks(timestamp);
  updateFinalFpsAudioMood(timestamp);
  drawFinalFpsScene(timestamp);
  finalFpsState.animationFrame = window.requestAnimationFrame(updateFinalFps);
}

function updateFinalFpsAudioMood() {
  if (!finalFpsState.isRunning) {
    setFinalFpsMusic(null);
    setFinalFpsAmbience(null);
    return;
  }

  if (finalFpsState.environmentMode === "room") {
    setFinalFpsMusic("roomMystery");
    setFinalFpsAmbience(null);
    return;
  }

  if (finalFpsState.environmentMode === "hedge") {
    const hasLiveGoblins = finalFpsState.partyGoblins.some((goblin) => goblin.state === "run");
    setFinalFpsMusic(hasLiveGoblins ? "corridorAction" : "roomMystery");
    setFinalFpsAmbience(null);
    return;
  }

  if (finalFpsState.environmentMode === "forest") {
    setFinalFpsAmbience(null);
    const remainingMeters = finalFpsState.forestWaypoint?.remainingMeters ?? Infinity;
    if (finalFpsState.forestBoss?.state === "death" || finalFpsState.forestBossOutroStartedAt) {
      setFinalFpsMusic(null);
    } else if (finalFpsState.forestBoss?.state === "walk") {
      setFinalFpsMusic("bossBuild");
    } else if (finalFpsState.forestBoss) {
      setFinalFpsMusic("bossFight");
    } else if (finalFpsState.forestChaosActive || remainingMeters <= 60) {
      setFinalFpsMusic("forestAction");
    } else if (finalFpsState.forestIntroComplete) {
      setFinalFpsMusic("forestRamp");
    } else {
      setFinalFpsMusic(null);
    }
    return;
  }

  setFinalFpsMusic(null);
  setFinalFpsAmbience(null);
}

function updateFinalFpsPortalTransition(timestamp) {
  if (finalFpsState.environmentMode !== "portalTransition") {
    return;
  }

  const progress = (timestamp - finalFpsState.portalTransitionStartedAt) / FINAL_FPS_PORTAL_TRANSITION_MS;

  if (progress >= 1) {
    finalFpsState.environmentMode = "hedge";
    finalFpsState.player = { x: 0, y: 0, angle: -Math.PI / 2, pitch: 0 };
    finalFpsState.bulletMarks = [];
    finalFpsState.tutorialPhase = "playing";
    finalFpsState.corridorStartedAt = timestamp;
    finalFpsState.forestTransitionStartedAt = 0;
    finalFpsState.partyGoblins = [];
    finalFpsState.partyGoblinBursts = [];
    finalFpsState.lastPartyGoblinSpawnAt = timestamp;
    finalFpsState.lastPartyGoblinLane = -1;
    finalFpsState.partyGoblinTutorialActive = false;
    finalFpsState.partyGoblinTutorialId = null;
    finalFpsState.partyGoblinTutorialStartedAt = 0;
    finalFpsState.corridorFailedAt = 0;
    finalFpsState.corridorFailedButtons = null;
    finalFpsState.corridorFailedMode = null;
    finalFpsState.corridorPostWaveDialogueShown = false;
  }
}

function updateFinalFpsForestTransition(timestamp) {
  if (finalFpsState.environmentMode !== "forestTransition") {
    return;
  }

  const progress = (timestamp - finalFpsState.forestTransitionStartedAt) / FINAL_FPS_FOREST_TRANSITION_MS;

  if (progress >= 1) {
    finalFpsState.environmentMode = "forest";
    finalFpsState.player = { x: 0, y: 0, angle: -Math.PI / 2, pitch: 0 };
    finalFpsState.forestStartedAt = timestamp;
    finalFpsState.nextForestFireworkAt = timestamp + 1800;
    finalFpsState.forestIntroStartedAt = timestamp + 350;
    finalFpsState.forestIntroLineIndex = 0;
    finalFpsState.forestIntroComplete = false;
    finalFpsState.forestDialogueTypingActive = false;
    finalFpsState.forestOneOffDialogue = null;
    finalFpsState.forestIntroGoblinSpawned = 0;
    finalFpsState.forestIntroGoblinKills = 0;
    finalFpsState.forestWaypointMilestonesShown = [];
    finalFpsState.forestPowerUp = null;
    finalFpsState.forestWaypoint = null;
    finalFpsState.forestBoss = null;
    clearFinalFpsForestBossRuntime();
    finalFpsState.forestComboKills = 0;
    finalFpsState.forestLastKillAt = 0;
    finalFpsState.forestComboAnnounceAt = 0;
    finalFpsState.forestComboAnnounceText = "";
    finalFpsState.infiniteAmmo = false;
    finalFpsState.infiniteAmmoActivatedAt = 0;
    finalFpsState.forestAutoFirePromptActive = false;
    finalFpsState.forestChaosDialogueStartedAt = 0;
    finalFpsState.forestChaosDialogueTypingActive = false;
    finalFpsState.forestChaosActive = false;
    finalFpsState.keys.forward = 0;
    finalFpsState.keys.strafe = 0;
    finalFpsState.partyGoblins = [];
    finalFpsState.partyGoblinBursts = [];
    finalFpsState.lastPartyGoblinSpawnAt = timestamp;
    finalFpsState.lastPartyGoblinLane = -1;
    finalFpsState.corridorFailedAt = 0;
    finalFpsState.corridorFailedButtons = null;
    finalFpsState.corridorFailedMode = null;
  }
}

function updateFinalFpsForestFireworks(timestamp) {
  if (finalFpsState.environmentMode !== "forest" || !finalFpsState.forestStartedAt) {
    return;
  }

  if (!finalFpsState.nextForestFireworkAt) {
    finalFpsState.nextForestFireworkAt = timestamp + 1600;
  }

  if (timestamp >= finalFpsState.nextForestFireworkAt) {
    const side = (Math.random() - 0.5) * 0.54;
    const isBig = Math.random() < 0.55;
    finalFpsState.forestFireworks.push({
      createdAt: timestamp,
      side,
      arc: 0.04 + Math.random() * 0.08,
      height: isBig ? 0.44 + Math.random() * 0.08 : 0.36 + Math.random() * 0.06,
      color: ["#ffdf70", "#ff6b9e", "#8fffe2", "#bb8cff"][Math.floor(Math.random() * 4)],
      big: isBig,
    });
    finalFpsState.nextForestFireworkAt =
      timestamp + FINAL_FPS_FOREST_FIREWORK_MIN_MS + Math.random() * (FINAL_FPS_FOREST_FIREWORK_MAX_MS - FINAL_FPS_FOREST_FIREWORK_MIN_MS);
  }

  finalFpsState.forestFireworks = finalFpsState.forestFireworks.filter((firework) => timestamp - firework.createdAt < 2600);
}

function updateFinalFpsForestBossOutro(timestamp) {
  if (!finalFpsState.forestBossOutroStartedAt) {
    return;
  }

  finalFpsState.keys.forward = 0;
  finalFpsState.keys.strafe = 0;
  finalFpsState.joystick.active = false;
  finalFpsState.look.active = false;
  finalFpsState.isShooting = false;
  finalFpsState.shootButtonPressed = false;
  finalFpsState.shootPointerId = null;

  if (!finalFpsState.forestBossOutroFadeStartedAt && timestamp - finalFpsState.forestBossOutroStartedAt >= 3400) {
    finalFpsState.forestBossOutroFadeStartedAt = timestamp;
    finalFpsState.forestBossDialogue = null;
  }
}

function updateFinalFpsForestSequence(timestamp) {
  if (finalFpsState.environmentMode !== "forest" || !finalFpsState.forestStartedAt) {
    return;
  }

  updateFinalFpsForestIntroDialogue(timestamp);
  updateFinalFpsForestPowerUp(timestamp);
  updateFinalFpsForestWaypoint(timestamp);
  updateFinalFpsForestBoss(timestamp);
  updateFinalFpsForestChaosDialogue(timestamp);
}

function showFinalFpsForestOneOffDialogue(text, timestamp, holdMs = 3000) {
  finalFpsState.forestOneOffDialogue = {
    text,
    startedAt: timestamp,
    holdMs,
  };
  finalFpsState.forestDialogueTypingActive = false;
  stopTypingSound();
}

function updateFinalFpsForestOneOffDialogue(timestamp) {
  const dialogue = finalFpsState.forestOneOffDialogue;

  if (!dialogue) {
    return;
  }

  const typeDuration = dialogue.text.length * FINAL_FPS_FOREST_DIALOGUE_TYPE_SPEED_MS;
  const age = timestamp - dialogue.startedAt;

  if (age < typeDuration && !finalFpsState.forestDialogueTypingActive) {
    finalFpsState.forestDialogueTypingActive = startTypingSound();
  }

  if (age >= typeDuration && finalFpsState.forestDialogueTypingActive) {
    finalFpsState.forestDialogueTypingActive = false;
    stopTypingSound();
  }

  if (age > typeDuration + dialogue.holdMs) {
    finalFpsState.forestOneOffDialogue = null;
    finalFpsState.forestDialogueTypingActive = false;
    stopTypingSound();
  }
}

function ensureFinalFpsForestWaypoint(timestamp) {
  if (finalFpsState.environmentMode !== "forest" || finalFpsState.forestWaypoint) {
    return;
  }

  const targetMeters = FINAL_FPS_FOREST_WAYPOINT_OPTIONS[
    Math.floor(Math.random() * FINAL_FPS_FOREST_WAYPOINT_OPTIONS.length)
  ];
  const visualWorldDistance = targetMeters * FINAL_FPS_FOREST_WAYPOINT_VISUAL_DISTANCE_MULTIPLIER;

  finalFpsState.forestWaypoint = {
    targetMeters,
    remainingMeters: targetMeters,
    startY: finalFpsState.player.y,
    bestProgress: 0,
    metersPerWorldUnit: targetMeters / visualWorldDistance,
    worldY: finalFpsState.player.y - visualWorldDistance,
    createdAt: timestamp,
  };
}

function updateFinalFpsForestWaypoint(timestamp) {
  const waypoint = finalFpsState.forestWaypoint;

  if (!waypoint || finalFpsState.environmentMode !== "forest") {
    return;
  }

  waypoint.bestProgress = Math.max(waypoint.bestProgress, waypoint.startY - finalFpsState.player.y);
  waypoint.remainingMeters = Math.max(
    0,
    Math.ceil(waypoint.targetMeters - waypoint.bestProgress * waypoint.metersPerWorldUnit),
  );

  if (
    waypoint.remainingMeters <= 100 &&
    !finalFpsState.forestWaypointMilestonesShown.includes(100) &&
    !finalFpsState.forestOneOffDialogue
  ) {
    finalFpsState.forestWaypointMilestonesShown.push(100);
    showFinalFpsForestOneOffDialogue("keep going, almost there.", timestamp, 2700);
  }

  if (
    waypoint.remainingMeters <= 50 &&
    !finalFpsState.forestWaypointMilestonesShown.includes(50) &&
    !finalFpsState.forestOneOffDialogue
  ) {
    finalFpsState.forestWaypointMilestonesShown.push(50);
    showFinalFpsForestOneOffDialogue("quick, it's just up ahead.", timestamp, 2700);
  }

  if (waypoint.remainingMeters <= 0) {
    spawnFinalFpsForestBoss(timestamp);
  }
}

function clearFinalFpsForestBossRuntime(options = {}) {
  finalFpsState.forestBossRockets = [];
  finalFpsState.forestBossMuzzleBursts = [];
  finalFpsState.forestBossLandingBursts = [];
  finalFpsState.forestBossShockwave = null;
  finalFpsState.forestBossDodgePromptActive = false;
  finalFpsState.forestBossDodgePromptStartedAt = 0;
  finalFpsState.forestBossAttackGraceUntil = 0;
  finalFpsState.forestBossJumpPromptActive = false;
  finalFpsState.forestBossJumpPromptStartedAt = 0;
  finalFpsState.forestBossShockwavePromptActive = false;
  finalFpsState.forestBossShockwavePromptStartedAt = 0;
  if (!options.keepShockwaveTutorial) {
    finalFpsState.forestBossShockwavePromptSeen = false;
  }
  finalFpsState.forestBossShockwavePromptTutorial = false;
  finalFpsState.forestBossJumpButtonRect = null;
  finalFpsState.playerJumpActive = false;
  finalFpsState.playerJumpStartedAt = 0;
  finalFpsState.playerJumpHeight = 0;
  finalFpsState.shockwaveDodgedUntil = 0;
}

function createFinalFpsForestBoss(timestamp, overrides = {}) {
  return {
    x: 0,
    y: finalFpsState.player.y - 8.5,
    state: "walk",
    nextAction: "attack",
    health: FINAL_FPS_FOREST_BOSS_MAX_HEALTH,
    createdAt: timestamp,
    stateStartedAt: timestamp,
    lastUpdatedAt: timestamp,
    lastRocketAt: 0,
    lastHitAt: 0,
    lastStepSoundAt: 0,
    lastHitSweetenerAt: 0,
    jumpFreezeProgress: 0,
    stunPhase: 0,
    nextStunThresholdIndex: 0,
    jumpCountSinceAttack: 0,
    step: 0,
    ...overrides,
  };
}

function spawnFinalFpsForestBoss(timestamp) {
  if (finalFpsState.forestBoss) {
    finalFpsState.forestWaypoint = null;
    return;
  }

  finalFpsState.partyGoblins = [];
  finalFpsState.partyGoblinBursts = [];
  clearFinalFpsForestBossRuntime();
  finalFpsState.forestChaosActive = false;
  finalFpsState.forestAutoFirePromptActive = false;
  finalFpsState.lastPartyGoblinSpawnAt = timestamp;
  finalFpsState.forestBossCheckpointPhase = 0;
  finalFpsState.forestBossComplete = false;
  finalFpsState.forestBossScorePopups = [];
  finalFpsState.forestBoss = createFinalFpsForestBoss(timestamp);
  showFinalFpsForestBossDialogue("great, so you're the final boss.", timestamp, 3000);
  finalFpsState.forestWaypoint = null;
  finalFpsState.keys.forward = 0;
  finalFpsState.keys.strafe = 0;
  finalFpsState.joystick.active = false;
  triggerScreenShake(360, 3.2);
  playSoundEffect("finalFpsKillCombo", { minGap: 600, volume: 0.34 });
}

function updateFinalFpsForestBoss(timestamp) {
  const boss = finalFpsState.forestBoss;

  if (!boss || finalFpsState.environmentMode !== "forest") {
    return;
  }

  updateFinalFpsPlayerJump(timestamp);
  const deltaSeconds = Math.min((timestamp - (boss.lastUpdatedAt || timestamp)) / 1000, 0.04);
  boss.lastUpdatedAt = timestamp;
  const distanceToPlayer = Math.abs(boss.y - finalFpsState.player.y);

  if (boss.state === "death") {
    const age = timestamp - boss.stateStartedAt;
    boss.step = Math.min(FINAL_FPS_FOREST_BOSS_DEATH_SHEET_FRAMES - 1, Math.floor((age / FINAL_FPS_FOREST_BOSS_DEATH_MS) * FINAL_FPS_FOREST_BOSS_DEATH_SHEET_FRAMES));

    if (age >= FINAL_FPS_FOREST_BOSS_DEATH_MS + FINAL_FPS_FOREST_BOSS_DEATH_HOLD_MS + FINAL_FPS_FOREST_BOSS_DEATH_FADE_MS) {
      finalFpsState.forestBoss = null;
      finalFpsState.forestBossComplete = true;
      finalFpsState.partyGoblins = [];
      finalFpsState.partyGoblinBursts = [];
      finalFpsState.forestChaosActive = false;
      finalFpsState.forestBossRockets = [];
      finalFpsState.forestBossMuzzleBursts = [];
      finalFpsState.forestBossLandingBursts = [];
      finalFpsState.forestBossShockwave = null;
      startFinalFpsForestBossOutro(timestamp);
    }
    return;
  }

  if (boss.state === "stunned") {
    boss.step += deltaSeconds * 5.4;

    if (timestamp - boss.stateStartedAt >= FINAL_FPS_FOREST_BOSS_STUN_MS) {
      boss.state = "getup";
      boss.stateStartedAt = timestamp;
      boss.step = 0;
    }
    return;
  }

  if (boss.state === "getup") {
    const progress = Math.min(1, (timestamp - boss.stateStartedAt) / FINAL_FPS_FOREST_BOSS_GETUP_MS);
    boss.step = progress * FINAL_FPS_FOREST_BOSS_GETUP_FRAMES;

    if (progress >= 1) {
      boss.state = "idle";
      boss.nextAction = "attack";
      boss.jumpCountSinceAttack = 0;
      boss.stateStartedAt = timestamp - Math.max(0, getFinalFpsForestBossAttackDelay() - 800);
      boss.step = 0;
    }
    return;
  }

  if (boss.state === "walk") {
    boss.step += deltaSeconds * 7.2;
    boss.y += FINAL_FPS_FOREST_BOSS_WALK_SPEED * deltaSeconds;
    if (timestamp - boss.lastStepSoundAt >= 520) {
      boss.lastStepSoundAt = timestamp;
      playSoundEffect("finalFpsBossStep", { minGap: 180, volume: 0.76 });
      triggerScreenShake(120, 1.6);
    }

    if (distanceToPlayer <= FINAL_FPS_FOREST_BOSS_IDLE_DISTANCE) {
      boss.state = "idle";
      boss.stateStartedAt = timestamp;
      boss.y = finalFpsState.player.y - FINAL_FPS_FOREST_BOSS_IDLE_DISTANCE;
      boss.step = 0;
    }
  } else if (boss.state === "idle") {
    boss.step += 0.045;

    if (boss.nextAction === "attack" && timestamp - boss.stateStartedAt >= getFinalFpsForestBossAttackDelay()) {
      boss.state = "attack";
      boss.stateStartedAt = timestamp;
      boss.lastRocketAt = timestamp - FINAL_FPS_FOREST_BOSS_ROCKET_INTERVAL_MS;
      finalFpsState.forestBossDodgePromptActive = !finalFpsState.forestBossDodgePromptSeen;
      finalFpsState.forestBossDodgePromptStartedAt = timestamp;
      finalFpsState.forestBossDodgePromptSeen = true;
      finalFpsState.forestBossAttackGraceUntil = finalFpsState.forestBossDodgePromptActive ? Infinity : timestamp + FINAL_FPS_FOREST_BOSS_GRACE_MS;
      finalFpsState.keys.forward = 0;
      finalFpsState.keys.strafe = 0;
      finalFpsState.joystick.active = false;
      boss.step = 0;
    } else if (boss.nextAction === "jump" && timestamp - boss.stateStartedAt >= getFinalFpsForestBossJumpDelay()) {
      boss.state = "jump";
      boss.stateStartedAt = timestamp;
      boss.jumpFreezeProgress = 0;
      boss.step = 0;
      playSoundEffect("finalFpsBossJump", { minGap: 260, volume: 0.74 });
    }
  }

  if (boss.state === "attack") {
    if (timestamp - boss.stateStartedAt >= FINAL_FPS_FOREST_BOSS_ATTACK_DURATION_MS) {
      boss.state = "idle";
      boss.nextAction = "jump";
      boss.stateStartedAt = timestamp;
      boss.step = 0;
      updateFinalFpsForestBossRockets(timestamp, deltaSeconds);
      return;
    }

    if (finalFpsState.forestBossDodgePromptActive) {
      updateFinalFpsForestBossRockets(timestamp, deltaSeconds);
      return;
    }

    boss.step += deltaSeconds * 5.4;

    if (
      !finalFpsState.forestBossDodgePromptActive &&
      timestamp >= finalFpsState.forestBossAttackGraceUntil &&
      timestamp - boss.lastRocketAt >= FINAL_FPS_FOREST_BOSS_ROCKET_INTERVAL_MS
    ) {
      fireFinalFpsForestBossRocket(timestamp);
      boss.lastRocketAt = timestamp;
    }
  }

  if (boss.state === "jump") {
    updateFinalFpsForestBossJump(timestamp);
  }

  updateFinalFpsForestBossRockets(timestamp, deltaSeconds);
  updateFinalFpsForestBossShockwave(timestamp, deltaSeconds);
  finalFpsState.forestBossLandingBursts = finalFpsState.forestBossLandingBursts.filter((burst) => timestamp - burst.createdAt < 820);
}

function updateFinalFpsPlayerJump(timestamp) {
  if (!finalFpsState.playerJumpActive) {
    finalFpsState.playerJumpHeight = 0;
    return;
  }

  const progress = (timestamp - finalFpsState.playerJumpStartedAt) / FINAL_FPS_PLAYER_JUMP_MS;

  if (progress >= 1) {
    finalFpsState.playerJumpActive = false;
    finalFpsState.playerJumpHeight = 0;
    return;
  }

  finalFpsState.playerJumpHeight = Math.sin(progress * Math.PI);
}

function updateFinalFpsForestBossJump(timestamp) {
  const boss = finalFpsState.forestBoss;

  if (!boss || finalFpsState.forestBossJumpPromptActive) {
    return;
  }

  const progress = Math.min(1, (timestamp - boss.stateStartedAt) / FINAL_FPS_FOREST_BOSS_JUMP_MS);
  boss.step = progress * FINAL_FPS_FOREST_BOSS_IDLE_FRAMES;

  if (!finalFpsState.forestBossJumpPromptSeen && progress >= 0.58) {
    boss.jumpFreezeProgress = progress;
    finalFpsState.forestBossJumpPromptActive = true;
    finalFpsState.forestBossJumpPromptStartedAt = timestamp;
    finalFpsState.forestBossJumpPromptSeen = true;
    finalFpsState.keys.forward = 0;
    finalFpsState.keys.strafe = 0;
    finalFpsState.joystick.active = false;
    return;
  }

  if (progress >= 1) {
    landFinalFpsForestBoss(timestamp);
  }
}

function landFinalFpsForestBoss(timestamp) {
  const boss = finalFpsState.forestBoss;

  if (!boss) {
    return;
  }

  boss.state = "shockwave";
  boss.stateStartedAt = timestamp;
  boss.nextAction = "jump";
  boss.step = 0;
  finalFpsState.forestBossLandingBursts.push({ x: boss.x, y: boss.y, createdAt: timestamp });
  finalFpsState.forestBossShockwave = {
    x: boss.x,
    y: boss.y + 0.18,
    createdAt: timestamp,
    prompted: false,
    hit: false,
  };
  triggerScreenShake(420, 7.2);
  playSoundEffect("finalFpsBossLand", { minGap: 180, volume: 0.82 });
}

function updateFinalFpsForestBossShockwave(timestamp, deltaSeconds) {
  const shockwave = finalFpsState.forestBossShockwave;
  const boss = finalFpsState.forestBoss;

  if (!shockwave || !boss) {
    return;
  }

  if (finalFpsState.forestBossShockwavePromptActive) {
    if (finalFpsState.forestBossShockwavePromptTutorial) {
      return;
    }

    if (timestamp - finalFpsState.forestBossShockwavePromptStartedAt > FINAL_FPS_FOREST_BOSS_SHOCKWAVE_PROMPT_MS) {
      finalFpsState.forestBossShockwavePromptActive = false;
      finalFpsState.forestBossShockwavePromptTutorial = false;
      finalFpsState.forestBossJumpButtonRect = null;
      shockwave.hit = true;
      failFinalFpsCorridor(timestamp);
      return;
    }

    deltaSeconds *= 0.16;
  }

  if (shockwave.dodged) {
    deltaSeconds *= 1.35;
  }

  shockwave.y += FINAL_FPS_FOREST_BOSS_SHOCKWAVE_SPEED * deltaSeconds;
  const distance = finalFpsState.player.y - shockwave.y;

  if (!shockwave.prompted && distance <= FINAL_FPS_FOREST_BOSS_SHOCKWAVE_CLOSE_DISTANCE) {
    const hasSeenShockwavePrompt = finalFpsState.forestBossShockwavePromptSeen;
    shockwave.prompted = true;
    finalFpsState.forestBossShockwavePromptActive = true;
    finalFpsState.forestBossShockwavePromptStartedAt = timestamp;
    finalFpsState.forestBossShockwavePromptTutorial = !hasSeenShockwavePrompt;
    finalFpsState.forestBossShockwavePromptSeen = true;

    if (!hasSeenShockwavePrompt) {
      finalFpsState.keys.forward = 0;
      finalFpsState.keys.strafe = 0;
      finalFpsState.joystick.active = false;
    }
    return;
  }

  if (
    !shockwave.hit &&
    distance <= FINAL_FPS_FOREST_BOSS_SHOCKWAVE_HIT_DISTANCE &&
    !shockwave.dodged &&
    timestamp > finalFpsState.shockwaveDodgedUntil
  ) {
    shockwave.hit = true;
    failFinalFpsCorridor(timestamp);
    return;
  }

  if (shockwave.y > finalFpsState.player.y + 1.15) {
    finalFpsState.forestBossShockwave = null;
    boss.state = "idle";
    boss.jumpCountSinceAttack = (boss.jumpCountSinceAttack || 0) + 1;
    boss.nextAction = boss.jumpCountSinceAttack >= getFinalFpsForestBossJumpsBeforeAttack() ? "attack" : "jump";
    if (boss.nextAction === "attack") {
      boss.jumpCountSinceAttack = 0;
    }
    const delay = boss.nextAction === "attack" ? getFinalFpsForestBossAttackDelay() : getFinalFpsForestBossJumpDelay();
    boss.stateStartedAt = timestamp - Math.max(0, delay - 900);
  }
}

function getFinalFpsForestBossPhase() {
  return getFinalFpsForestBossPhaseValue(finalFpsState.forestBoss?.stunPhase || 0);
}

function getFinalFpsForestBossAttackDelay() {
  return getFinalFpsForestBossAttackDelayForPhase(getFinalFpsForestBossPhase());
}

function getFinalFpsForestBossJumpDelay() {
  return FINAL_FPS_FOREST_BOSS_JUMP_DELAY_BY_PHASE_MS[getFinalFpsForestBossPhase()] || FINAL_FPS_FOREST_BOSS_POST_ATTACK_IDLE_MS;
}

function getFinalFpsForestBossJumpsBeforeAttack() {
  return Math.max(1, 3 - getFinalFpsForestBossPhase());
}

function getFinalFpsForestBossPhaseValue(phase) {
  return Math.max(0, Math.min(2, phase || 0));
}

function getFinalFpsForestBossAttackDelayForPhase(phase) {
  return FINAL_FPS_FOREST_BOSS_ATTACK_DELAY_BY_PHASE_MS[getFinalFpsForestBossPhaseValue(phase)] || FINAL_FPS_FOREST_BOSS_ATTACK_DELAY_MS;
}

function fireFinalFpsForestBossRocket(timestamp) {
  const boss = finalFpsState.forestBoss;

  if (!boss) {
    return;
  }

  const targetX = finalFpsState.player.x;
  const targetY = finalFpsState.player.y;
  const startX = boss.x + (Math.random() - 0.5) * 0.16;
  const startY = boss.y + 0.16;
  const angle = Math.atan2(targetY - startY, targetX - startX);

  finalFpsState.forestBossRockets.push({
    x: startX,
    y: startY,
    z: 1.15,
    vx: Math.cos(angle) * FINAL_FPS_FOREST_BOSS_ROCKET_SPEED,
    vy: Math.sin(angle) * FINAL_FPS_FOREST_BOSS_ROCKET_SPEED,
    angle,
    createdAt: timestamp,
    hit: false,
  });
  finalFpsState.forestBossMuzzleBursts.push({
    x: startX,
    y: startY,
    createdAt: timestamp,
  });
  triggerScreenShake(180, 4.2);
  playSoundEffect("finalFpsBossRocket", { minGap: 220, volume: 0.72 });
}

function updateFinalFpsForestBossRockets(timestamp, deltaSeconds) {
  if (!finalFpsState.forestBossRockets.length) {
    return;
  }

  finalFpsState.forestBossRockets.forEach((rocket) => {
    rocket.x += rocket.vx * deltaSeconds;
    rocket.y += rocket.vy * deltaSeconds;
    rocket.z = Math.max(0.72, rocket.z + Math.sin((timestamp - rocket.createdAt) / 180) * 0.002);

    if (
      !rocket.hit &&
      Math.hypot(rocket.x - finalFpsState.player.x, rocket.y - finalFpsState.player.y) <= FINAL_FPS_FOREST_BOSS_ROCKET_HIT_DISTANCE
    ) {
      rocket.hit = true;
      failFinalFpsCorridor(timestamp);
    }
  });

  finalFpsState.forestBossRockets = finalFpsState.forestBossRockets.filter((rocket) => {
    return !rocket.hit && timestamp - rocket.createdAt < FINAL_FPS_FOREST_BOSS_ROCKET_LIFETIME_MS;
  });
  finalFpsState.forestBossMuzzleBursts = finalFpsState.forestBossMuzzleBursts.filter((burst) => timestamp - burst.createdAt < 720);
}

function registerFinalFpsForestGoblinKill(timestamp) {
  if (finalFpsState.environmentMode !== "forest") {
    return;
  }

  finalFpsState.forestComboKills =
    timestamp - finalFpsState.forestLastKillAt <= FINAL_FPS_FOREST_KILL_COMBO_WINDOW_MS
      ? finalFpsState.forestComboKills + 1
      : 1;
  finalFpsState.forestLastKillAt = timestamp;

  if (finalFpsState.forestComboKills >= 15 && finalFpsState.forestComboKills % 15 === 0) {
    const lineIndex = Math.min(
      FINAL_FPS_FOREST_KILL_COMBO_LINES.length - 1,
      Math.floor(finalFpsState.forestComboKills / 15) - 1,
    );
    finalFpsState.forestComboAnnounceText = FINAL_FPS_FOREST_KILL_COMBO_LINES[lineIndex];
    finalFpsState.forestComboAnnounceAt = timestamp;
    playSoundEffect("finalFpsKillCombo", { minGap: 650, volume: 0.72 });
  }
}

function updateFinalFpsForestIntroDialogue(timestamp) {
  if (finalFpsState.forestIntroComplete || !finalFpsState.forestIntroStartedAt) {
    return;
  }

  const line = FINAL_FPS_FOREST_INTRO_LINES[finalFpsState.forestIntroLineIndex];

  if (!line) {
    finalFpsState.forestIntroComplete = true;
    finalFpsState.forestDialogueTypingActive = false;
    finalFpsState.lastPartyGoblinSpawnAt = timestamp;
    stopTypingSound();
    return;
  }

  const age = timestamp - finalFpsState.forestIntroStartedAt;
  const typeDuration = line.length * FINAL_FPS_FOREST_DIALOGUE_TYPE_SPEED_MS;

  if (age < typeDuration && !finalFpsState.forestDialogueTypingActive) {
    finalFpsState.forestDialogueTypingActive = startTypingSound();
  }

  if (age >= typeDuration && finalFpsState.forestDialogueTypingActive) {
    finalFpsState.forestDialogueTypingActive = false;
    stopTypingSound();
  }

  if (age > typeDuration + FINAL_FPS_FOREST_DIALOGUE_HOLD_MS) {
    finalFpsState.forestIntroLineIndex += 1;
    finalFpsState.forestIntroStartedAt = timestamp;
  }
}

function updateFinalFpsForestPowerUp(timestamp) {
  const powerUp = finalFpsState.forestPowerUp;

  if (!powerUp || powerUp.collected || finalFpsState.infiniteAmmo) {
    return;
  }

  const distance = Math.hypot(powerUp.x - finalFpsState.player.x, powerUp.y - finalFpsState.player.y);

  if (distance > FINAL_FPS_FOREST_POWERUP_RADIUS) {
    return;
  }

  powerUp.collected = true;
  finalFpsState.infiniteAmmo = true;
  finalFpsState.ammo = FINAL_FPS_MAGAZINE_SIZE;
  finalFpsState.infiniteAmmoActivatedAt = timestamp;
  finalFpsState.forestAutoFirePromptActive = true;
  finalFpsState.autoFire = false;
  finalFpsState.keys.forward = 0;
  finalFpsState.keys.strafe = 0;
  finalFpsState.joystick.active = false;
  finalFpsState.look.active = false;
  finalFpsState.isShooting = false;
  finalFpsState.shootButtonPressed = false;
  triggerScreenShake(420, 5);
  playSoundEffect("levelUp", { minGap: 120, volume: 0.7 });
}

function updateFinalFpsForestChaosDialogue(timestamp) {
  if (!finalFpsState.forestChaosDialogueStartedAt || finalFpsState.forestChaosActive) {
    return;
  }

  const age = timestamp - finalFpsState.forestChaosDialogueStartedAt;
  const typeDuration = FINAL_FPS_FOREST_WIZARD_CHAOS_LINE.length * FINAL_FPS_FOREST_DIALOGUE_TYPE_SPEED_MS;

  if (age < typeDuration && !finalFpsState.forestChaosDialogueTypingActive) {
    finalFpsState.forestChaosDialogueTypingActive = startTypingSound();
  }

  if (age >= typeDuration && finalFpsState.forestChaosDialogueTypingActive) {
    finalFpsState.forestChaosDialogueTypingActive = false;
    stopTypingSound();
  }

  if (age > typeDuration + FINAL_FPS_FOREST_DIALOGUE_HOLD_MS) {
    finalFpsState.forestChaosActive = true;
    finalFpsState.lastPartyGoblinSpawnAt = timestamp - FINAL_FPS_FOREST_CHAOS_GOBLIN_SPAWN_MS;
    finalFpsState.forestChaosDialogueTypingActive = false;
    stopTypingSound();
  }
}

function updateFinalFpsShooting(timestamp) {
  if (
    !finalFpsState.hasGun ||
    finalFpsState.gunTutorialPhase ||
    isFinalFpsInSceneTransition() ||
    isFinalFpsCorridorOverlayBlocking() ||
    finalFpsState.forestAutoFirePromptActive ||
    finalFpsState.forestBossDodgePromptActive ||
    finalFpsState.forestBossJumpPromptActive ||
    finalFpsState.forestBossShockwavePromptActive
  ) {
    return;
  }

  finalFpsState.bulletMarks = finalFpsState.bulletMarks.filter((mark) => timestamp - mark.createdAt < FINAL_FPS_BULLET_MARK_MS);

  if (finalFpsState.isShooting) {
    fireFinalFpsGun(timestamp);
    return;
  }

  const bossAutoFire = finalFpsState.forestBoss && finalFpsState.forestBoss.state !== "walk" && finalFpsState.forestBoss.state !== "death";

  if ((finalFpsState.autoFire || bossAutoFire) && getFinalFpsVisibleEnemy()) {
    fireFinalFpsGun(timestamp);
  }
}

function getFinalFpsVisibleEnemy() {
  if (finalFpsState.environmentMode !== "hedge" && finalFpsState.environmentMode !== "forest") {
    return null;
  }

  const width = window.innerWidth;
  const height = window.innerHeight;
  const horizon = height * (0.42 + finalFpsState.player.pitch * 0.48);

  if (finalFpsState.forestBoss && finalFpsState.environmentMode === "forest") {
    const boss = finalFpsState.forestBoss;

    if (boss.state === "walk" || boss.state === "death") {
      return null;
    }

    const projection = projectFinalFpsForestGroundPoint(boss.x, boss.y, width, height, horizon);
    const bossHeight = projection
      ? Math.max(110, Math.min(height * 0.96, (height * FINAL_FPS_FOREST_BOSS_SCALE * 1.22) / Math.max(1.4, projection.depth)))
      : 0;
    const bossWidth = bossHeight * 0.88;

    if (
      projection &&
      Math.abs(projection.x - width / 2) < bossWidth * 0.34 &&
      Math.abs((projection.y - bossHeight * 0.48) - height / 2) < bossHeight * 0.42
    ) {
      return boss;
    }
  }

  return finalFpsState.partyGoblins
    .filter((goblin) => goblin.state === "run")
    .map((goblin) => ({ goblin, projection: getFinalFpsProjectedPartyGoblin(goblin, width, height, horizon) }))
    .filter(({ projection }) => projection && Math.abs(projection.centerX - width / 2) < projection.width * 0.42 && Math.abs(projection.centerY - height / 2) < projection.height * 0.42)
    .sort((a, b) => a.projection.depth - b.projection.depth)[0]?.goblin || null;
}

function fireFinalFpsGun(timestamp) {
  if (
    !finalFpsState.hasGun ||
    finalFpsState.gunTutorialPhase ||
    isFinalFpsInSceneTransition() ||
    (!finalFpsState.infiniteAmmo && finalFpsState.ammo <= 0) ||
    timestamp - finalFpsState.lastShotAt < FINAL_FPS_SHOT_INTERVAL_MS
  ) {
    return;
  }

  if (finalFpsState.infiniteAmmo) {
    finalFpsState.ammo = FINAL_FPS_MAGAZINE_SIZE;
  } else {
    finalFpsState.ammo -= 1;
  }
  finalFpsState.lastShotAt = timestamp;
  finalFpsState.muzzleFlashAt = timestamp;
  finalFpsState.recoilUntil = Math.max(finalFpsState.recoilUntil, timestamp + 110);
  finalFpsState.recoilIntensity = Math.min(9, finalFpsState.recoilIntensity + 2.4);
  finalFpsState.player.pitch = Math.max(-0.5, Math.min(0.5, finalFpsState.player.pitch - 0.012));
  finalFpsState.player.angle += (Math.random() - 0.5) * 0.006;
  if (!hitFinalFpsForestBoss(timestamp)) {
    hitFinalFpsPartyGoblin(timestamp);
  }
  createFinalFpsBulletMark(timestamp);
  playSoundEffect("finalFpsShoot", { minGap: 28, volume: 0.22 });
}

function hitFinalFpsForestBoss(timestamp) {
  if (!finalFpsState.forestBoss || finalFpsState.environmentMode !== "forest") {
    return false;
  }

  const visibleBoss = getFinalFpsVisibleEnemy() === finalFpsState.forestBoss;

  if (!visibleBoss) {
    return false;
  }

  finalFpsState.forestBoss.lastHitAt = timestamp;
  if (timestamp - (finalFpsState.forestBoss.lastHitSweetenerAt || 0) >= 2200) {
    finalFpsState.forestBoss.lastHitSweetenerAt = timestamp;
    playSoundEffect("finalFpsBossHitSweetener", { minGap: 900, volume: 0.58 });
  }
  finalFpsState.forestBoss.health = Math.max(0, finalFpsState.forestBoss.health - FINAL_FPS_FOREST_BOSS_HIT_DAMAGE);
  if (finalFpsState.forestBoss.health <= 0) {
    triggerFinalFpsForestBossDeath(timestamp);
    return true;
  }

  maybeTriggerFinalFpsForestBossStun(timestamp);
  return true;
}

function triggerFinalFpsForestBossDeath(timestamp) {
  const boss = finalFpsState.forestBoss;

  if (!boss || boss.state === "death") {
    return;
  }

  boss.health = 0;
  boss.state = "death";
  boss.stateStartedAt = timestamp;
  boss.step = 0;
  finalFpsState.forestBossRockets = [];
  finalFpsState.forestBossMuzzleBursts = [];
  finalFpsState.forestBossShockwave = null;
  finalFpsState.forestBossDodgePromptActive = false;
  finalFpsState.forestBossJumpPromptActive = false;
  finalFpsState.forestBossShockwavePromptActive = false;
  finalFpsState.forestBossShockwavePromptTutorial = false;
  finalFpsState.forestBossJumpButtonRect = null;
  finalFpsState.forestBossDialogue = null;
  setFinalFpsMusic(null);
  triggerScreenShake(900, 8.4);
  playSoundEffect("finalFpsBossDeath", { minGap: 400, volume: 0.88 });
}

function showFinalFpsForestBossDialogue(text, timestamp, duration = 3000) {
  finalFpsState.forestBossDialogue = {
    text,
    startedAt: timestamp,
    duration,
  };
}

function showFinalFpsForestBossScorePopup(timestamp) {
  const boss = finalFpsState.forestBoss;

  if (!boss) {
    return;
  }

  finalFpsState.forestBossScorePopups.push({
    x: boss.x,
    y: boss.y,
    createdAt: timestamp,
    text: "100,000",
  });
}

function maybeTriggerFinalFpsForestBossStun(timestamp) {
  const boss = finalFpsState.forestBoss;

  if (!boss || boss.state === "walk" || boss.state === "stunned" || boss.state === "getup") {
    return;
  }

  const thresholds = [
    FINAL_FPS_FOREST_BOSS_MAX_HEALTH * (2 / 3),
    FINAL_FPS_FOREST_BOSS_MAX_HEALTH * (1 / 3),
  ];
  const thresholdIndex = boss.nextStunThresholdIndex || 0;

  if (thresholdIndex >= thresholds.length || boss.health > thresholds[thresholdIndex]) {
    return;
  }

  boss.nextStunThresholdIndex = thresholdIndex + 1;
  boss.stunPhase = thresholdIndex + 1;
  finalFpsState.forestBossCheckpointPhase = Math.max(finalFpsState.forestBossCheckpointPhase || 0, boss.stunPhase);
  boss.state = "stunned";
  boss.stateStartedAt = timestamp;
  boss.step = 0;
  boss.jumpFreezeProgress = 0;
  boss.jumpCountSinceAttack = 0;
  finalFpsState.forestBossRockets = [];
  finalFpsState.forestBossMuzzleBursts = [];
  finalFpsState.forestBossShockwave = null;
  finalFpsState.forestBossDodgePromptActive = false;
  finalFpsState.forestBossJumpPromptActive = false;
  finalFpsState.forestBossShockwavePromptActive = false;
  finalFpsState.forestBossShockwavePromptTutorial = false;
  finalFpsState.forestBossJumpButtonRect = null;
  showFinalFpsForestBossScorePopup(timestamp);
  showFinalFpsForestBossDialogue(
    boss.stunPhase === 1
      ? "Okay, this guy's big, but he's not invincible."
      : "HE'S ALMOST DONE, FINISH THE JOB.",
    timestamp,
    3000
  );
  triggerScreenShake(480, 7.4);
  playSoundEffect("finalFpsBossDeath", { minGap: 500, volume: 0.5 });
  playSoundEffect("finalFpsKillCombo", { minGap: 250, volume: 0.38 });
}

function reloadFinalFpsGun() {
  if (!finalFpsState.hasGun || finalFpsState.infiniteAmmo || finalFpsState.ammo === FINAL_FPS_MAGAZINE_SIZE) {
    return;
  }

  finalFpsState.ammo = FINAL_FPS_MAGAZINE_SIZE;
  playSoundEffect("finalFpsReload", { minGap: 120, volume: 0.48 });
}

function createFinalFpsBulletMark(timestamp) {
  const width = window.innerWidth;
  const height = window.innerHeight;

  if (finalFpsState.environmentMode === "hedge") {
    return;
  } else if (finalFpsState.environmentMode === "room") {
    const horizon = height * (0.48 + finalFpsState.player.pitch * 0.5);
    const hit = castFinalFpsRay(finalFpsState.player.angle);
    const correctedDistance = Math.max(0.12, hit.distance);
    const wallHeight = Math.min(height * 1.6, height * 0.9 / correctedDistance);
    const top = horizon - wallHeight / 2;
    const verticalFraction = Math.max(0.08, Math.min(0.92, (height / 2 - top) / wallHeight));

    finalFpsState.bulletMarks.push({
      environment: "room",
      wall: hit.wall,
      coordinate: getFinalFpsWallCoordinate(hit),
      verticalFraction,
      createdAt: timestamp,
    });
  }

  if (finalFpsState.bulletMarks.length > 52) {
    finalFpsState.bulletMarks.shift();
  }
}

function updateFinalFpsPlayer(deltaSeconds) {
  if (finalFpsState.inspectedImageKey || finalFpsState.gunTutorialPhase || isFinalFpsInSceneTransition() || isFinalFpsCorridorOverlayBlocking() || !isFinalFpsMovementEnabled()) {
    finalFpsState.keys.forward = 0;
    finalFpsState.keys.strafe = 0;
    return;
  }

  if (finalFpsState.environmentMode === "hedge") {
    updateFinalFpsHedgePlayer(deltaSeconds);
    return;
  }

  if (finalFpsState.environmentMode === "forest") {
    updateFinalFpsForestPlayer(deltaSeconds);
    return;
  }

  const player = finalFpsState.player;
  const speed = 2.3 * deltaSeconds;
  const forwardX = Math.cos(player.angle);
  const forwardY = Math.sin(player.angle);
  const strafeX = Math.cos(player.angle + Math.PI / 2);
  const strafeY = Math.sin(player.angle + Math.PI / 2);
  const nextX = player.x + forwardX * finalFpsState.keys.forward * speed + strafeX * finalFpsState.keys.strafe * speed;
  const nextY = player.y + forwardY * finalFpsState.keys.forward * speed + strafeY * finalFpsState.keys.strafe * speed;
  const resolvedPosition = resolveFinalFpsFurnitureCollision(nextX, nextY, player.x, player.y);

  player.x = Math.max(0.12, Math.min(FINAL_FPS_ROOM_SIZE - 0.12, resolvedPosition.x));
  player.y = Math.max(0.12, Math.min(FINAL_FPS_ROOM_SIZE - 0.12, resolvedPosition.y));

  const doorPoint = getFinalFpsDoorWorldPoint();
  const doorX = doorPoint.x;
  const doorY = doorPoint.y;
  const doorDistance = Math.hypot(player.x - doorX, player.y - doorY);
  const doorTarget = finalFpsState.doorSpawnProgress >= 1 && doorDistance < 0.9 ? 1 : 0;
  const doorSpeed = (doorTarget > finalFpsState.doorOpenProgress ? 1.7 : 1.15) * deltaSeconds;
  finalFpsState.doorOpenProgress += (doorTarget - finalFpsState.doorOpenProgress) * Math.min(1, doorSpeed * 4);

  if (!finalFpsState.portalEntered && finalFpsState.doorSpawnProgress >= 1 && finalFpsState.doorOpenProgress > 0.55 && doorDistance < 0.28) {
    startFinalFpsPortalTransition();
  }
}

function updateFinalFpsHedgePlayer(deltaSeconds) {
  const player = finalFpsState.player;
  const speed = 4.2 * deltaSeconds;
  const forwardX = Math.cos(player.angle);
  const forwardY = Math.sin(player.angle);
  const strafeX = Math.cos(player.angle + Math.PI / 2);
  const strafeY = Math.sin(player.angle + Math.PI / 2);
  const nextX = player.x + forwardX * finalFpsState.keys.forward * speed + strafeX * finalFpsState.keys.strafe * speed;
  const nextY = player.y + forwardY * finalFpsState.keys.forward * speed + strafeY * finalFpsState.keys.strafe * speed;
  const elapsed = performance.now() - finalFpsState.corridorStartedAt;
  const goblinWaveDone = elapsed > FINAL_FPS_PARTY_GOBLIN_START_DELAY_MS + FINAL_FPS_PARTY_GOBLIN_WAVE_MS;
  const liveGoblinsGone = !finalFpsState.partyGoblins.some((goblin) => goblin.state === "run");

  if (goblinWaveDone && liveGoblinsGone && nextY <= FINAL_FPS_CORRIDOR_FOREST_TRIGGER_Y) {
    startFinalFpsForestTransition();
    return;
  }

  if (isFinalFpsCorridorPointInside(nextX, nextY, 0.14)) {
    player.x = nextX;
    player.y = nextY;
    return;
  }

  if (isFinalFpsCorridorPointInside(nextX, player.y, 0.14)) {
    player.x = nextX;
  }

  if (isFinalFpsCorridorPointInside(player.x, nextY, 0.14)) {
    player.y = nextY;
  }
}

function updateFinalFpsForestPlayer(deltaSeconds) {
  if (finalFpsState.forestBoss?.state === "walk") {
    finalFpsState.keys.forward = 0;
    finalFpsState.keys.strafe = 0;
    finalFpsState.joystick.active = false;
    return;
  }

  const player = finalFpsState.player;
  const speed = 5.2 * deltaSeconds;
  const forwardX = Math.cos(player.angle);
  const forwardY = Math.sin(player.angle);
  const strafeX = Math.cos(player.angle + Math.PI / 2);
  const strafeY = Math.sin(player.angle + Math.PI / 2);
  const nextX = player.x + forwardX * finalFpsState.keys.forward * speed + strafeX * finalFpsState.keys.strafe * speed;
  const nextY = player.y + forwardY * finalFpsState.keys.forward * speed + strafeY * finalFpsState.keys.strafe * speed;

  player.x = nextX;
  player.y = nextY;
  player.x = Math.max(-FINAL_FPS_FOREST_WALK_LIMIT, Math.min(FINAL_FPS_FOREST_WALK_LIMIT, player.x));

  if (finalFpsState.forestBoss) {
    player.y = Math.max(finalFpsState.forestBoss.y + FINAL_FPS_FOREST_BOSS_BLOCK_DISTANCE, player.y);
  }
}

function startFinalFpsForestTransition() {
  finalFpsState.environmentMode = "forestTransition";
  finalFpsState.forestTransitionStartedAt = performance.now();
  finalFpsState.keys.forward = 0;
  finalFpsState.keys.strafe = 0;
  finalFpsState.joystick.active = false;
  finalFpsState.look.active = false;
  finalFpsState.isShooting = false;
  finalFpsState.shootButtonPressed = false;
  finalFpsState.partyGoblins = [];
  finalFpsState.partyGoblinBursts = [];
  triggerScreenShake(FINAL_FPS_FOREST_TRANSITION_MS, 7);
  playSoundEffect("levelUp", { minGap: 120, volume: 0.64 });
}

function startFinalFpsPortalTransition() {
  finalFpsState.portalEntered = true;
  finalFpsState.environmentMode = "portalTransition";
  finalFpsState.portalTransitionStartedAt = performance.now();
  finalFpsState.keys.forward = 0;
  finalFpsState.keys.strafe = 0;
  finalFpsState.joystick.active = false;
  finalFpsState.look.active = false;
  finalFpsState.isShooting = false;
  finalFpsState.shootButtonPressed = false;
  playSoundEffect("levelUp", { minGap: 180, volume: 0.62 });
}

function drawFinalFpsScene(timestamp) {
  const context = finalFpsState.context;
  const width = window.innerWidth;
  const height = window.innerHeight;

  context.save();
  applyFinalFpsRecoilTransform(context, timestamp);
  applyFinalFpsJumpTransform(context, timestamp);

  if (finalFpsState.environmentMode === "hedge" || finalFpsState.environmentMode === "forestTransition") {
    drawFinalFpsHedgeMaze(context, width, height, timestamp);
  } else if (finalFpsState.environmentMode === "forest") {
    drawFinalFpsForestScene(context, width, height, timestamp);
  } else {
    drawFinalFpsRaycastRoom(context, width, height);
  }

  if (finalFpsState.environmentMode === "portalTransition") {
    drawFinalFpsPortalTransition(context, width, height, timestamp);
  }

  if (finalFpsState.environmentMode === "forestTransition") {
    drawFinalFpsForestTransition(context, width, height, timestamp);
  }

  context.restore();

  drawFinalFpsCluePrompt(context, width, height, timestamp);
  drawFinalFpsHeldGun(context, width, height);
  drawFinalFpsGunHud(context, width, height, timestamp);
  if (!isFinalFpsInSceneTransition()) {
    drawFinalFpsJoystick(context, width, height);
  }
  drawFinalFpsInteractionLayer(context, width, height);
  drawFinalFpsTutorialOverlay(context, width, height, timestamp);
  drawFinalFpsCorridorOverlays(context, width, height, timestamp);
  drawFinalFpsForestOverlays(context, width, height, timestamp);
  drawFinalFpsInspectionOverlay(context, width, height);
  drawFinalFpsBlink(context, width, height, timestamp);
  drawFinalFpsForestBossOutroFade(context, width, height, timestamp);
}

function applyFinalFpsRecoilTransform(context, timestamp) {
  if (timestamp >= finalFpsState.recoilUntil) {
    finalFpsState.recoilIntensity = 0;
    return;
  }

  const remaining = (finalFpsState.recoilUntil - timestamp) / 110;
  const strength = finalFpsState.recoilIntensity * remaining;
  context.translate(Math.sin(timestamp / 18) * strength, Math.cos(timestamp / 23) * strength * 0.55);
}

function applyFinalFpsJumpTransform(context) {
  if (!finalFpsState.playerJumpHeight) {
    return;
  }

  const lift = Math.sin(finalFpsState.playerJumpHeight * Math.PI * 0.5) * window.innerHeight * 0.13;
  context.translate(0, lift);
}

function handleFinalFpsTutorialTap(event) {
  if (
    finalFpsState.tutorialPhase === "eyeOpening" ||
    finalFpsState.tutorialPhase === "explore" ||
    finalFpsState.tutorialPhase === "wizard" ||
    finalFpsState.tutorialPhase === "preDoorDelay" ||
    finalFpsState.tutorialPhase === "doorWarp" ||
    finalFpsState.tutorialPhase === "playing"
  ) {
    return false;
  }

  if (finalFpsState.tutorialPhase === "look") {
    finalFpsState.tutorialPhase = "move";
    finalFpsState.tutorialPhaseStartedAt = performance.now();
    event.preventDefault();
    return true;
  }

  if (finalFpsState.tutorialPhase === "move") {
    const now = performance.now();
    finalFpsState.tutorialPhase = "eyeOpening";
    finalFpsState.tutorialPhaseStartedAt = now;
    finalFpsState.blinkStartedAt = now;
    event.preventDefault();
    return true;
  }

  return false;
}

function handleFinalFpsInspectionTap(event) {
  if (finalFpsState.inspectedImageKey) {
    if (isFinalFpsGunDiscoveryActive()) {
      if (isFinalFpsGunDiscoveryComplete()) {
        pickupFinalFpsGun();
      }

      event.preventDefault();
      return true;
    }

    if (event.clientY < 82 && event.clientX < 132) {
      finalFpsState.inspectedImageKey = null;
      finalFpsState.inspectedPaintingFlipped = false;
      finalFpsState.inspectionPointer = null;
      finalFpsState.gunPickupButtonRect = null;
      event.preventDefault();
      return true;
    }

    finalFpsState.inspectionPointer = { x: event.clientX, y: event.clientY };
    event.preventDefault();
    return true;
  }

  if (
    finalFpsState.activeInteraction?.inspectable &&
    finalFpsState.interactionButtonRect &&
    isPointInsideRect(event.clientX, event.clientY, finalFpsState.interactionButtonRect)
  ) {
    finalFpsState.inspectedImageKey = finalFpsState.activeInteraction.imageKey;
    finalFpsState.inspectedPaintingFlipped = false;
    finalFpsState.inspectionFlipStartedAt = 0;
    finalFpsState.gunDiscoveryStartedAt = 0;
    finalFpsState.gunDiscoveryTypingActive = false;
    finalFpsState.gunPickupButtonRect = null;
    registerFinalFpsBoomtownInspection(finalFpsState.inspectedImageKey);
    finalFpsState.joystick.active = false;
    finalFpsState.look.active = false;
    finalFpsState.keys.forward = 0;
    finalFpsState.keys.strafe = 0;
    playSoundEffect("finalFpsInspect", { minGap: 120, volume: 0.58 });
    event.preventDefault();
    return true;
  }

  return false;
}

function handleFinalFpsInspectionSwipe(event) {
  if (isFinalFpsGunDiscoveryActive() || !finalFpsState.inspectedImageKey || !finalFpsState.inspectionPointer) {
    return false;
  }

  const dx = event.clientX - finalFpsState.inspectionPointer.x;
  const dy = event.clientY - finalFpsState.inspectionPointer.y;
  finalFpsState.inspectionPointer = null;

  if (Math.abs(dx) > 46 && Math.abs(dx) > Math.abs(dy) * 1.4) {
    finalFpsState.inspectedPaintingFlipped = true;
    finalFpsState.inspectionFlipStartedAt = performance.now();
    playSoundEffect("finalFpsFlip", { minGap: 160, volume: 0.58 });
    if (isFinalFpsCurrentInspectionGunPainting()) {
      finalFpsState.gunDiscoveryStartedAt = performance.now();
    }
    event.preventDefault();
    return true;
  }

  return false;
}

function pickupFinalFpsGun() {
  finalFpsState.hasGun = true;
  finalFpsState.inspectedImageKey = null;
  finalFpsState.inspectedPaintingFlipped = false;
  finalFpsState.inspectionPointer = null;
  finalFpsState.gunDiscoveryStartedAt = 0;
  finalFpsState.gunDiscoveryTypingActive = false;
  finalFpsState.gunPickupButtonRect = null;
  stopTypingSound();
  finalFpsState.gunTutorialPhase = "shoot";
  playSoundEffect("finalFpsGunEquip", { minGap: 500, volume: 0.66 });
}

function registerFinalFpsBoomtownInspection(imageKey) {
  if (!FINAL_FPS_INSPECTABLE_PAINTINGS.includes(imageKey) || finalFpsState.inspectedBoomtownPaintings.includes(imageKey)) {
    return;
  }

  finalFpsState.inspectedBoomtownPaintings.push(imageKey);

  if (finalFpsState.inspectedBoomtownPaintings.length >= FINAL_FPS_INSPECTABLE_PAINTINGS.length) {
    finalFpsState.gunPaintingKey = imageKey;
  }
}

function isFinalFpsCurrentInspectionGunPainting() {
  return (
    !finalFpsState.hasGun &&
    Boolean(finalFpsState.gunPaintingKey) &&
    finalFpsState.inspectedImageKey === finalFpsState.gunPaintingKey
  );
}

function isFinalFpsGunDiscoveryActive() {
  return isFinalFpsCurrentInspectionGunPainting() && finalFpsState.inspectedPaintingFlipped && finalFpsState.gunDiscoveryStartedAt > 0;
}

function isFinalFpsGunDiscoveryComplete() {
  return performance.now() - finalFpsState.gunDiscoveryStartedAt >= FINAL_FPS_GUN_DISCOVERY_DIALOGUE.length * FINAL_FPS_WIZARD_TYPE_SPEED_MS;
}

function startFinalFpsDoorSpawn() {
  if (finalFpsState.doorSpawnProgress > 0 || finalFpsState.tutorialPhase === "doorWarp") {
    return;
  }

  finalFpsState.tutorialPhase = "doorWarp";
  finalFpsState.doorWarpStartedAt = performance.now();
  finalFpsState.doorSpawnProgress = 0;
  finalFpsState.doorOpenProgress = 0;
  playSoundEffect("finalFpsPortalOpen", { minGap: 800, volume: 0.5 });
}

function isPointInsideRect(x, y, rect) {
  return x >= rect.x && x <= rect.x + rect.width && y >= rect.y && y <= rect.y + rect.height;
}

function updateFinalFpsTutorial(timestamp) {
  if (finalFpsState.tutorialPhase !== "wizard" && finalFpsState.wizardDialogueTypingActive) {
    finalFpsState.wizardDialogueTypingActive = false;
    stopTypingSound();
  }

  if (finalFpsState.tutorialPhase === "eyeOpening") {
    const age = timestamp - finalFpsState.tutorialPhaseStartedAt;

    if (age >= FINAL_FPS_EYE_OPEN_MS) {
      finalFpsState.tutorialPhase = "explore";
      finalFpsState.tutorialPhaseStartedAt = timestamp;
    }
    return;
  }

  if (finalFpsState.tutorialPhase === "explore") {
    const age = timestamp - finalFpsState.tutorialPhaseStartedAt;

    if (age >= FINAL_FPS_FREE_LOOK_BEFORE_WIZARD_MS) {
      finalFpsState.tutorialPhase = "wizard";
      finalFpsState.wizardDialogueStartedAt = timestamp;
    }
    return;
  }

  if (finalFpsState.tutorialPhase === "wizard") {
    const age = timestamp - finalFpsState.wizardDialogueStartedAt;
    const typeDuration = FINAL_FPS_WIZARD_DIALOGUE.length * FINAL_FPS_WIZARD_TYPE_SPEED_MS;

    if (age < typeDuration && !finalFpsState.wizardDialogueTypingActive) {
      finalFpsState.wizardDialogueTypingActive = startTypingSound();
    }

    if (age >= typeDuration && finalFpsState.wizardDialogueTypingActive) {
      finalFpsState.wizardDialogueTypingActive = false;
      stopTypingSound();
    }

    if (age > typeDuration + FINAL_FPS_WIZARD_HOLD_MS) {
      finalFpsState.tutorialPhase = "playing";
      finalFpsState.tutorialPhaseStartedAt = timestamp;
      finalFpsState.wizardDialogueTypingActive = false;
      stopTypingSound();
    }
    return;
  }

  if (finalFpsState.tutorialPhase === "preDoorDelay") {
    const age = timestamp - finalFpsState.tutorialPhaseStartedAt;

    if (age >= FINAL_FPS_DOOR_PRE_DELAY_MS) {
      finalFpsState.tutorialPhase = "doorWarp";
      finalFpsState.doorWarpStartedAt = timestamp;
    }
    return;
  }

  if (finalFpsState.tutorialPhase === "doorWarp") {
    const progress = Math.min(1, (timestamp - finalFpsState.doorWarpStartedAt) / FINAL_FPS_DOOR_WARP_MS);
    finalFpsState.doorSpawnProgress = easeOutCubic(progress);

    if (progress >= 1) {
      finalFpsState.tutorialPhase = "playing";
      finalFpsState.doorSpawnProgress = 1;
    }
  }
}

function isFinalFpsMovementEnabled() {
  if (finalFpsState.gunTutorialPhase || isFinalFpsInSceneTransition() || finalFpsState.forestAutoFirePromptActive) {
    return false;
  }

  return (
    finalFpsState.tutorialPhase === "explore" ||
    finalFpsState.tutorialPhase === "wizard" ||
    finalFpsState.tutorialPhase === "preDoorDelay" ||
    finalFpsState.tutorialPhase === "doorWarp" ||
    finalFpsState.tutorialPhase === "playing"
  );
}

function isFinalFpsInSceneTransition() {
  return finalFpsState.environmentMode === "portalTransition" || finalFpsState.environmentMode === "forestTransition";
}

function easeOutCubic(value) {
  return 1 - Math.pow(1 - value, 3);
}

function normalizeAngle(angle) {
  let normalized = angle;

  while (normalized > Math.PI) normalized -= Math.PI * 2;
  while (normalized < -Math.PI) normalized += Math.PI * 2;
  return normalized;
}

function drawFinalFpsTutorialOverlay(context, width, height, timestamp) {
  if (finalFpsState.gunTutorialPhase) {
    drawFinalFpsGunTutorialOverlay(context, width, height, timestamp);
    return;
  }

  if (finalFpsState.tutorialPhase === "doorWarp") {
    drawFinalFpsPortalOpeningText(context, width, height, timestamp);
  }

  if (finalFpsState.tutorialPhase === "look") {
    context.fillStyle = "#000000";
    context.fillRect(0, 0, width, height);
    drawFinalFpsJoystick(context, width, height);
    drawFinalFpsInstruction(context, width, height, FINAL_FPS_LOOK_TUTORIAL_TEXT, "look");
    return;
  }

  if (finalFpsState.tutorialPhase === "move") {
    context.fillStyle = "#000000";
    context.fillRect(0, 0, width, height);
    drawFinalFpsJoystick(context, width, height);
    drawFinalFpsInstruction(context, width, height, FINAL_FPS_MOVE_TUTORIAL_TEXT, "move");
    return;
  }

  if (finalFpsState.tutorialPhase === "wizard") {
    drawFinalFpsWizardLine(context, width, height, timestamp);
  }
}

function drawFinalFpsGunTutorialOverlay(context, width, height, timestamp) {
  const phase = finalFpsState.gunTutorialPhase;
  const target =
    phase === "shoot"
      ? finalFpsState.shootButtonRect || { x: width - 106, y: height * 0.62 - 40, width: 80, height: 80 }
      : finalFpsState.reloadButtonRect || { x: width - 120, y: height * 0.62 - 100, width: 88, height: 30 };
  const text =
    phase === "shoot"
      ? "press to shoot"
      : "press to reload";
  const boxWidth = Math.min(390, width * 0.56);
  const boxHeight = 84;
  const boxX = Math.max(16, Math.min(width - boxWidth - 16, target.x + target.width / 2 - boxWidth / 2));
  const boxY = Math.max(18, target.y - boxHeight - 38);

  context.save();
  context.fillStyle = "rgba(0, 0, 0, 0.34)";
  context.fillRect(0, 0, width, height);
  context.strokeStyle = "#ffffff";
  context.lineWidth = 3;
  context.beginPath();
  context.moveTo(boxX + boxWidth / 2, boxY + boxHeight);
  context.lineTo(target.x + target.width / 2, target.y - 6);
  context.stroke();
  context.beginPath();
  context.arc(target.x + target.width / 2, target.y + target.height / 2, Math.max(target.width, target.height) * 0.55, 0, Math.PI * 2);
  context.stroke();

  context.fillStyle = "rgba(0, 0, 0, 0.78)";
  context.strokeStyle = "rgba(255, 255, 255, 0.82)";
  context.lineWidth = 2;
  context.fillRect(boxX, boxY, boxWidth, boxHeight);
  context.strokeRect(boxX, boxY, boxWidth, boxHeight);
  context.fillStyle = "#ffffff";
  context.font = "700 14px monospace";
  context.textAlign = "center";
  context.textBaseline = "top";
  wrapCanvasText(context, text, boxWidth - 26).forEach((line, index) => {
    context.fillText(line, boxX + boxWidth / 2, boxY + 14 + index * 18);
  });
  context.globalAlpha = 0.48 + Math.sin(timestamp / 260) * 0.18;
  context.font = "12px monospace";
  context.fillText("click to continue", boxX + boxWidth / 2, boxY + boxHeight - 21);
  context.restore();
}

function drawFinalFpsCorridorOverlays(context, width, height, timestamp) {
  if (finalFpsState.partyGoblinTutorialActive) {
    drawFinalFpsPartyGoblinTutorial(context, width, height, timestamp);
  }

  if (finalFpsState.corridorFailedAt > 0) {
    drawFinalFpsCorridorFailed(context, width, height, timestamp);
  }
}

function drawFinalFpsPartyGoblinTutorial(context, width, height, timestamp) {
  const horizon = height * (0.42 + finalFpsState.player.pitch * 0.48);
  const goblin = finalFpsState.partyGoblins.find((candidate) => candidate.id === finalFpsState.partyGoblinTutorialId) || finalFpsState.partyGoblins[0];
  const projection = goblin ? getFinalFpsProjectedPartyGoblin(goblin, width, height, horizon) : null;
  const boxWidth = Math.min(360, width * 0.58);
  const boxHeight = 82;
  const boxX = (width - boxWidth) / 2;
  const boxY = height * 0.13;

  context.save();
  context.fillStyle = "rgba(0, 0, 0, 0.32)";
  context.fillRect(0, 0, width, height);

  if (projection) {
    context.strokeStyle = "#ffffff";
    context.lineWidth = 3;
    context.beginPath();
    context.ellipse(projection.centerX, projection.centerY, projection.width * 0.58, projection.height * 0.54, 0, 0, Math.PI * 2);
    context.stroke();
  }

  context.fillStyle = "rgba(0, 0, 0, 0.78)";
  context.strokeStyle = "rgba(255, 255, 255, 0.84)";
  context.lineWidth = 2;
  context.fillRect(boxX, boxY, boxWidth, boxHeight);
  context.strokeRect(boxX, boxY, boxWidth, boxHeight);
  context.fillStyle = "#ffffff";
  context.font = "900 17px monospace";
  context.textAlign = "center";
  context.textBaseline = "top";
  context.fillText("Shoot the goblins", boxX + boxWidth / 2, boxY + 16);

  if (timestamp - finalFpsState.partyGoblinTutorialStartedAt >= FINAL_FPS_PARTY_GOBLIN_TUTORIAL_LOCK_MS) {
    context.globalAlpha = 0.48 + Math.sin(timestamp / 260) * 0.18;
    context.font = "12px monospace";
    context.fillText("click to continue", boxX + boxWidth / 2, boxY + boxHeight - 22);
  }
  context.restore();
}

function drawFinalFpsCorridorFailed(context, width, height, timestamp) {
  const age = timestamp - finalFpsState.corridorFailedAt;
  const fade = Math.min(1, age / 650);
  const failedSize = Math.max(42, Math.min(74, height * 0.16));
  const centerY = height * 0.42;

  context.save();
  context.globalAlpha = fade;
  context.fillStyle = "#000000";
  context.fillRect(0, 0, width, height);
  context.fillStyle = "#ff2424";
  context.font = `900 ${failedSize}px 'Courier New', monospace`;
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText("FAILED", width / 2, centerY);

  if (age > 900) {
    const hasSkip =
      finalFpsState.corridorFailedMode === "forestBoss" ||
      finalFpsState.corridorFailedMode === "forestRun" ||
      finalFpsState.corridorFailedMode === "hedge";
    const buttonWidth = 172;
    const gap = 18;
    const retry = {
      x: hasSkip ? width / 2 - buttonWidth - gap / 2 : width / 2 - buttonWidth / 2,
      y: centerY + failedSize * 0.76,
      width: buttonWidth,
      height: 42,
    };
    const skip = {
      x: width / 2 + gap / 2,
      y: retry.y,
      width: buttonWidth,
      height: retry.height,
    };
    finalFpsState.corridorFailedButtons = hasSkip ? { retry, skip } : { retry };
    drawFailedButton(context, retry, "Retry");
    if (hasSkip) {
      drawFailedButton(context, skip, "Skip level");
    }
  } else {
    finalFpsState.corridorFailedButtons = null;
  }
  context.restore();
}

function failFinalFpsCorridor(timestamp) {
  if (finalFpsState.corridorFailedAt > 0) {
    return;
  }

  finalFpsState.corridorFailedAt = timestamp;
  finalFpsState.corridorFailedButtons = null;
  finalFpsState.corridorFailedMode = getFinalFpsFailureMode();
  finalFpsState.keys.forward = 0;
  finalFpsState.keys.strafe = 0;
  finalFpsState.joystick.active = false;
  finalFpsState.look.active = false;
  finalFpsState.isShooting = false;
  finalFpsState.shootButtonPressed = false;
  finalFpsState.shootPointerId = null;
  playSoundEffect("failed", { minGap: 1000, volume: 0.7 });
}

function getFinalFpsFailureMode() {
  if (finalFpsState.environmentMode === "forest" && finalFpsState.forestBoss) {
    return "forestBoss";
  }

  if (finalFpsState.environmentMode === "forest") {
    return "forestRun";
  }

  return finalFpsState.environmentMode;
}

function drawFinalFpsPortalOpeningText(context, width, height, timestamp) {
  context.save();
  context.globalAlpha = 0.55 + Math.sin(timestamp / 260) * 0.2;
  context.fillStyle = "#ffffff";
  context.font = "700 15px monospace";
  context.textAlign = "center";
  context.textBaseline = "top";
  context.fillText("a portal door is opening", width / 2, Math.max(12, height * 0.07));
  context.restore();
}

function drawFinalFpsInstruction(context, width, height, text, mode) {
  const boxWidth = Math.min(width * 0.66, 440);
  const boxHeight = Math.min(height * 0.36, 170);
  const x = (width - boxWidth) / 2;
  const y = height * 0.22;

  context.fillStyle = "rgba(0, 0, 0, 0.66)";
  context.strokeStyle = "rgba(255, 255, 255, 0.54)";
  context.lineWidth = 2;
  context.fillRect(x, y, boxWidth, boxHeight);
  context.strokeRect(x, y, boxWidth, boxHeight);

  context.save();
  context.strokeStyle = "rgba(255, 255, 255, 0.9)";
  context.lineWidth = 4;
  context.lineCap = "round";

  if (mode === "look") {
    const arrowY = y + 46;
    context.beginPath();
    context.moveTo(x + boxWidth * 0.36, arrowY);
    context.quadraticCurveTo(x + boxWidth * 0.5, arrowY - 24, x + boxWidth * 0.64, arrowY);
    context.stroke();
    context.beginPath();
    context.moveTo(x + boxWidth * 0.64, arrowY);
    context.lineTo(x + boxWidth * 0.6, arrowY - 13);
    context.moveTo(x + boxWidth * 0.64, arrowY);
    context.lineTo(x + boxWidth * 0.58, arrowY + 7);
    context.stroke();
  } else {
    const targetX = width * 0.16;
    const targetY = height * 0.74;
    context.beginPath();
    context.moveTo(x + boxWidth * 0.25, y + boxHeight + 8);
    context.lineTo(targetX, targetY - 66);
    context.stroke();
    context.beginPath();
    context.moveTo(targetX, targetY - 66);
    context.lineTo(targetX - 10, targetY - 82);
    context.moveTo(targetX, targetY - 66);
    context.lineTo(targetX + 13, targetY - 78);
    context.stroke();
  }

  context.restore();

  context.fillStyle = "#ffffff";
  context.font = "700 18px monospace";
  context.textAlign = "center";
  context.textBaseline = "middle";
  wrapCanvasText(context, text, boxWidth - 40).forEach((line, index, lines) => {
    context.fillText(line, x + boxWidth / 2, y + 88 + (index - (lines.length - 1) / 2) * 23);
  });

  context.globalAlpha = 0.5 + Math.sin(performance.now() / 260) * 0.18;
  context.font = "13px monospace";
  context.fillText("click to continue", x + boxWidth / 2, y + boxHeight - 24);
  context.globalAlpha = 1;
}

function drawFinalFpsWizardLine(context, width, height, timestamp) {
  const wizardHeight = Math.max(210, Math.min(310, height * 0.76));
  const wizardWidth = wizardHeight * (543 / 724);
  const wizardX = Math.max(8, width * 0.035);
  const wizardY = height - wizardHeight * 0.62;

  drawLargeRetroWizardSprite(context, wizardX, wizardY, wizardWidth, wizardHeight, timestamp);

  const bubbleWidth = Math.min(width * 0.48, 390);
  const bubbleHeight = 92;
  const bubbleX = Math.min(width - bubbleWidth - 20, wizardX + wizardWidth * 0.72);
  const bubbleY = Math.max(22, wizardY + wizardHeight * 0.12);
  const age = Math.max(0, timestamp - finalFpsState.wizardDialogueStartedAt);
  const visibleCharacters = Math.min(FINAL_FPS_WIZARD_DIALOGUE.length, Math.floor(age / FINAL_FPS_WIZARD_TYPE_SPEED_MS));
  const visibleText = FINAL_FPS_WIZARD_DIALOGUE.slice(0, visibleCharacters);

  context.fillStyle = "rgba(5, 15, 9, 0.9)";
  context.strokeStyle = "rgba(86, 255, 151, 0.78)";
  context.lineWidth = 2;
  context.fillRect(bubbleX, bubbleY, bubbleWidth, bubbleHeight);
  context.strokeRect(bubbleX, bubbleY, bubbleWidth, bubbleHeight);

  context.fillStyle = "#ffffff";
  context.font = "16px monospace";
  context.textAlign = "left";
  context.textBaseline = "top";
  wrapCanvasText(context, visibleText, bubbleWidth - 28).slice(0, 3).forEach((line, index) => {
    context.fillText(line, bubbleX + 14, bubbleY + 16 + index * 20);
  });
}

function drawFinalFpsForestOverlays(context, width, height, timestamp) {
  if (finalFpsState.environmentMode !== "forest") {
    return;
  }

  drawFinalFpsBossHealthBar(context, width, height);
  drawFinalFpsForestDialogue(context, width, height, timestamp);
  drawFinalFpsForestBossDialogue(context, width, height, timestamp);
  drawFinalFpsInfiniteAmmoBanner(context, width, height, timestamp);
  drawFinalFpsForestComboAnnouncer(context, width, height, timestamp);
  drawFinalFpsAutoFireUnlockPrompt(context, width, height, timestamp);
  drawFinalFpsBossDodgePrompt(context, width, height, timestamp);
  drawFinalFpsBossJumpPrompt(context, width, height, timestamp);
  drawFinalFpsBossShockwavePrompt(context, width, height, timestamp);
}

function drawFinalFpsForestBossOutroFade(context, width, height, timestamp) {
  if (!finalFpsState.forestBossOutroFadeStartedAt) {
    return;
  }

  const progress = Math.min(1, (timestamp - finalFpsState.forestBossOutroFadeStartedAt) / 1100);
  context.save();
  context.globalAlpha = easeInOutCubic(progress);
  context.fillStyle = "#000000";
  context.fillRect(0, 0, width, height);
  context.restore();
}

function drawFinalFpsBossHealthBar(context, width, height) {
  const boss = finalFpsState.forestBoss;

  if (!boss || boss.state === "walk") {
    return;
  }

  const barWidth = Math.min(width * 0.72, 650);
  const barHeight = Math.max(14, height * 0.034);
  const x = (width - barWidth) / 2;
  const y = Math.max(8, height * 0.018);
  const healthRatio = Math.max(0, Math.min(1, boss.health / FINAL_FPS_FOREST_BOSS_MAX_HEALTH));
  const iconSize = barHeight * 1.85;

  context.save();
  context.fillStyle = "rgba(0, 0, 0, 0.72)";
  context.fillRect(x - iconSize * 0.74, y - 4, barWidth + iconSize * 0.9, barHeight + 8);
  context.strokeStyle = "rgba(255, 255, 255, 0.78)";
  context.lineWidth = 2;
  context.strokeRect(x - iconSize * 0.74, y - 4, barWidth + iconSize * 0.9, barHeight + 8);

  context.fillStyle = "#2b0707";
  context.fillRect(x, y, barWidth, barHeight);
  context.fillStyle = "#d61522";
  context.fillRect(x, y, barWidth * healthRatio, barHeight);
  context.fillStyle = "rgba(255, 110, 110, 0.42)";
  context.fillRect(x, y, barWidth * healthRatio, barHeight * 0.38);

  [1 / 3, 2 / 3].forEach((mark) => {
    const markX = x + barWidth * mark;
    context.strokeStyle = "rgba(255, 255, 255, 0.88)";
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(markX, y - 3);
    context.lineTo(markX, y + barHeight + 3);
    context.stroke();
    context.strokeStyle = "rgba(0, 0, 0, 0.62)";
    context.lineWidth = 1;
    context.beginPath();
    context.moveTo(markX + 2, y);
    context.lineTo(markX + 2, y + barHeight);
    context.stroke();
  });

  context.translate(x - iconSize * 0.34, y + barHeight * 0.5);
  drawFinalFpsBossMushroomIcon(context, iconSize);
  context.translate(-(x - iconSize * 0.34), -(y + barHeight * 0.5));

  context.fillStyle = "#ffffff";
  context.font = `900 ${Math.max(11, barHeight * 0.82)}px monospace`;
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.strokeStyle = "rgba(0, 0, 0, 0.8)";
  context.lineWidth = 3;
  context.strokeText("Mushroom Monster", x + barWidth / 2, y + barHeight / 2);
  context.fillText("Mushroom Monster", x + barWidth / 2, y + barHeight / 2);
  context.restore();
}

function drawFinalFpsBossMushroomIcon(context, size) {
  context.save();
  context.fillStyle = "#f2d4a0";
  context.fillRect(-size * 0.15, -size * 0.02, size * 0.3, size * 0.42);
  context.fillStyle = "#d92024";
  context.beginPath();
  context.arc(0, -size * 0.04, size * 0.42, Math.PI, Math.PI * 2);
  context.lineTo(size * 0.34, size * 0.05);
  context.lineTo(-size * 0.34, size * 0.05);
  context.closePath();
  context.fill();
  context.fillStyle = "#fff4d0";
  [-0.2, 0.05, 0.25].forEach((spot) => {
    context.beginPath();
    context.arc(size * spot, -size * 0.12, size * 0.075, 0, Math.PI * 2);
    context.fill();
  });
  context.restore();
}

function drawFinalFpsBossDodgePrompt(context, width, height, timestamp) {
  if (!finalFpsState.forestBossDodgePromptActive) {
    return;
  }

  const age = timestamp - finalFpsState.forestBossDodgePromptStartedAt;
  const canContinue = age >= FINAL_FPS_FOREST_BOSS_TUTORIAL_LOCK_MS;
  const panelWidth = Math.min(560, width * 0.78);
  const panelHeight = Math.max(108, height * 0.24);
  const panelX = (width - panelWidth) / 2;
  const panelY = height * 0.2;

  context.save();
  context.fillStyle = "rgba(0, 0, 0, 0.44)";
  context.fillRect(0, 0, width, height);
  context.fillStyle = "rgba(0, 0, 0, 0.78)";
  context.strokeStyle = "rgba(255, 255, 255, 0.9)";
  context.lineWidth = 2;
  context.fillRect(panelX, panelY, panelWidth, panelHeight);
  context.strokeRect(panelX, panelY, panelWidth, panelHeight);
  context.fillStyle = "#ffffff";
  context.font = `900 ${Math.max(17, Math.min(28, height * 0.058))}px monospace`;
  context.textAlign = "center";
  context.textBaseline = "middle";
  wrapCanvasText(context, "move around to avoid the mushroom monster's cannon", panelWidth - 44)
    .slice(0, 2)
    .forEach((line, index, lines) => {
      context.fillText(line, width / 2, panelY + panelHeight * 0.36 + (index - (lines.length - 1) / 2) * 30);
    });

  if (canContinue) {
    context.globalAlpha = 0.42 + (Math.sin(timestamp / 250) * 0.5 + 0.5) * 0.42;
    context.font = `700 ${Math.max(12, Math.min(17, height * 0.036))}px monospace`;
    context.fillText("click to continue", width / 2, panelY + panelHeight - 24);
  }
  context.restore();
}

function drawFinalFpsBossJumpPrompt(context, width, height, timestamp) {
  if (!finalFpsState.forestBossJumpPromptActive) {
    return;
  }

  const age = timestamp - finalFpsState.forestBossJumpPromptStartedAt;
  const canContinue = age >= FINAL_FPS_FOREST_BOSS_JUMP_TUTORIAL_LOCK_MS;
  const panelWidth = Math.min(620, width * 0.82);
  const panelHeight = Math.max(116, height * 0.25);
  const panelX = (width - panelWidth) / 2;
  const panelY = height * 0.2;

  context.save();
  context.fillStyle = "rgba(0, 0, 0, 0.5)";
  context.fillRect(0, 0, width, height);
  context.fillStyle = "rgba(0, 0, 0, 0.8)";
  context.strokeStyle = "rgba(255, 255, 255, 0.9)";
  context.lineWidth = 2;
  context.fillRect(panelX, panelY, panelWidth, panelHeight);
  context.strokeRect(panelX, panelY, panelWidth, panelHeight);

  context.fillStyle = "#ffffff";
  context.font = `900 ${Math.max(16, Math.min(27, height * 0.054))}px monospace`;
  context.textAlign = "center";
  context.textBaseline = "middle";
  wrapCanvasText(context, "jump to avoid the shockwave from the jump", panelWidth - 44)
    .slice(0, 2)
    .forEach((line, index, lines) => {
      context.fillText(line, width / 2, panelY + panelHeight * 0.38 + (index - (lines.length - 1) / 2) * 30);
    });

  if (canContinue) {
    context.globalAlpha = 0.42 + (Math.sin(timestamp / 250) * 0.5 + 0.5) * 0.42;
    context.font = `700 ${Math.max(12, Math.min(17, height * 0.036))}px monospace`;
    context.fillText("click to continue", width / 2, panelY + panelHeight - 24);
  }
  context.restore();
}

function drawFinalFpsBossShockwavePrompt(context, width, height, timestamp) {
  if (!finalFpsState.forestBossShockwavePromptActive) {
    finalFpsState.forestBossJumpButtonRect = null;
    return;
  }

  const buttonWidth = Math.max(136, Math.min(220, width * 0.23));
  const buttonHeight = Math.max(58, Math.min(82, height * 0.16));
  const shakeX = Math.sin(timestamp / 48) * 4;
  const shakeY = Math.cos(timestamp / 57) * 3;
  const buttonX = width / 2 - buttonWidth / 2 + shakeX;
  const buttonY = height * 0.62 - buttonHeight / 2 + shakeY;

  finalFpsState.forestBossJumpButtonRect = {
    x: buttonX,
    y: buttonY,
    width: buttonWidth,
    height: buttonHeight,
  };

  const isTutorial = finalFpsState.forestBossShockwavePromptTutorial;

  context.save();
  context.fillStyle = isTutorial ? "rgba(0, 0, 0, 0.46)" : "rgba(0, 0, 0, 0.18)";
  context.fillRect(0, 0, width, height);

  if (isTutorial) {
    context.fillStyle = "#ffffff";
    context.font = `900 ${Math.max(16, Math.min(28, height * 0.056))}px monospace`;
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText("shockwave incoming", width / 2, height * 0.34);
  }

  const glow = context.createRadialGradient(width / 2, height * 0.62, 4, width / 2, height * 0.62, buttonWidth * 0.86);
  glow.addColorStop(0, "rgba(129, 255, 74, 0.28)");
  glow.addColorStop(1, "rgba(129, 255, 74, 0)");
  context.fillStyle = glow;
  context.beginPath();
  context.arc(width / 2, height * 0.62, buttonWidth * 0.8, 0, Math.PI * 2);
  context.fill();

  context.fillStyle = "rgba(26, 96, 42, 0.88)";
  context.strokeStyle = "rgba(255, 255, 255, 0.95)";
  context.lineWidth = 3;
  context.fillRect(buttonX, buttonY, buttonWidth, buttonHeight);
  context.strokeRect(buttonX, buttonY, buttonWidth, buttonHeight);
  context.fillStyle = "#ffffff";
  context.font = `900 ${Math.max(22, Math.min(38, height * 0.074))}px monospace`;
  context.fillText("JUMP", buttonX + buttonWidth / 2, buttonY + buttonHeight / 2);
  context.restore();
}

function drawFinalFpsForestComboAnnouncer(context, width, height, timestamp) {
  if (!finalFpsState.forestComboAnnounceAt || !finalFpsState.forestComboAnnounceText) {
    return;
  }

  const age = timestamp - finalFpsState.forestComboAnnounceAt;

  if (age > FINAL_FPS_FOREST_KILL_COMBO_DISPLAY_MS) {
    return;
  }

  const intro = Math.min(1, age / 180);
  const outro = age > FINAL_FPS_FOREST_KILL_COMBO_DISPLAY_MS - 420
    ? Math.max(0, 1 - (age - (FINAL_FPS_FOREST_KILL_COMBO_DISPLAY_MS - 420)) / 420)
    : 1;
  const alpha = easeOutCubic(intro) * outro;
  const scale = 0.84 + easeOutCubic(intro) * 0.18 + Math.sin(timestamp / 80) * 0.012;
  const centerX = width / 2;
  const centerY = height * 0.22;
  const text = finalFpsState.forestComboAnnounceText;
  const comboText = `${finalFpsState.forestComboKills} KILL COMBO`;

  context.save();
  context.globalAlpha = alpha;
  context.translate(centerX, centerY);
  context.scale(scale, scale);

  const glow = context.createRadialGradient(0, 0, 4, 0, 0, Math.min(width, height) * 0.28);
  glow.addColorStop(0, "rgba(255, 216, 74, 0.28)");
  glow.addColorStop(1, "rgba(255, 216, 74, 0)");
  context.fillStyle = glow;
  context.fillRect(-width * 0.28, -height * 0.13, width * 0.56, height * 0.26);

  context.font = `900 ${Math.max(24, Math.min(48, height * 0.105))}px 'Courier New', monospace`;
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.lineWidth = 5;
  context.strokeStyle = "rgba(0, 0, 0, 0.72)";
  context.fillStyle = "#ffd84a";
  context.shadowColor = "rgba(255, 216, 74, 0.88)";
  context.shadowBlur = 16;
  context.strokeText(text, 0, 0);
  context.fillText(text, 0, 0);

  context.shadowBlur = 0;
  context.font = `900 ${Math.max(11, Math.min(18, height * 0.04))}px monospace`;
  context.fillStyle = "#ffffff";
  context.globalAlpha = alpha * 0.84;
  context.fillText(comboText, 0, Math.max(28, height * 0.07));
  context.restore();
}

function drawFinalFpsForestDialogue(context, width, height, timestamp) {
  let text = "";
  let startedAt = 0;

  if (!finalFpsState.forestIntroComplete) {
    text = FINAL_FPS_FOREST_INTRO_LINES[finalFpsState.forestIntroLineIndex] || "";
    startedAt = finalFpsState.forestIntroStartedAt;
  } else if (finalFpsState.forestOneOffDialogue) {
    text = finalFpsState.forestOneOffDialogue.text;
    startedAt = finalFpsState.forestOneOffDialogue.startedAt;
  } else if (finalFpsState.forestChaosDialogueStartedAt && !finalFpsState.forestChaosActive) {
    text = FINAL_FPS_FOREST_WIZARD_CHAOS_LINE;
    startedAt = finalFpsState.forestChaosDialogueStartedAt;
  }

  if (!text || !startedAt) {
    return;
  }

  const wizardHeight = Math.max(210, Math.min(310, height * 0.76));
  const wizardWidth = wizardHeight * (543 / 724);
  const wizardX = Math.max(8, width * 0.035);
  const wizardY = height - wizardHeight * 0.62;
  const bubbleWidth = Math.min(width * 0.5, 430);
  const bubbleHeight = Math.max(92, Math.min(138, height * 0.25));
  const bubbleX = Math.min(width - bubbleWidth - 20, wizardX + wizardWidth * 0.72);
  const bubbleY = Math.max(18, wizardY + wizardHeight * 0.1);
  const age = Math.max(0, timestamp - startedAt);
  const visibleCharacters = Math.min(text.length, Math.floor(age / FINAL_FPS_FOREST_DIALOGUE_TYPE_SPEED_MS));
  const visibleText = text.slice(0, visibleCharacters);

  drawLargeRetroWizardSprite(context, wizardX, wizardY, wizardWidth, wizardHeight, timestamp);
  context.save();
  context.fillStyle = "rgba(5, 15, 9, 0.9)";
  context.strokeStyle = "rgba(86, 255, 151, 0.78)";
  context.lineWidth = 2;
  context.fillRect(bubbleX, bubbleY, bubbleWidth, bubbleHeight);
  context.strokeRect(bubbleX, bubbleY, bubbleWidth, bubbleHeight);
  context.fillStyle = "#ffffff";
  context.font = "16px monospace";
  context.textAlign = "left";
  context.textBaseline = "top";
  wrapCanvasText(context, visibleText, bubbleWidth - 28).slice(0, 5).forEach((line, index) => {
    context.fillText(line, bubbleX + 14, bubbleY + 14 + index * 20);
  });
  context.restore();
}

function drawFinalFpsForestBossDialogue(context, width, height, timestamp) {
  const dialogue = finalFpsState.forestBossDialogue;

  if (!dialogue) {
    return;
  }

  const age = timestamp - dialogue.startedAt;

  if (age > dialogue.duration) {
    finalFpsState.forestBossDialogue = null;
    return;
  }

  const wizardHeight = Math.max(210, Math.min(310, height * 0.76));
  const wizardWidth = wizardHeight * (543 / 724);
  const wizardX = Math.max(8, width * 0.035);
  const wizardY = height - wizardHeight * 0.62;
  const bubbleWidth = Math.min(width * 0.52, 450);
  const bubbleHeight = Math.max(86, Math.min(128, height * 0.23));
  const bubbleX = Math.min(width - bubbleWidth - 20, wizardX + wizardWidth * 0.72);
  const bubbleY = Math.max(18, wizardY + wizardHeight * 0.1);
  const fadeIn = Math.min(1, age / 160);
  const fadeOut = age > dialogue.duration - 280 ? Math.max(0, 1 - (age - (dialogue.duration - 280)) / 280) : 1;

  context.save();
  context.globalAlpha = fadeIn * fadeOut;
  drawLargeRetroWizardSprite(context, wizardX, wizardY, wizardWidth, wizardHeight, timestamp);
  context.fillStyle = "rgba(5, 15, 9, 0.9)";
  context.strokeStyle = "rgba(86, 255, 151, 0.78)";
  context.lineWidth = 2;
  context.fillRect(bubbleX, bubbleY, bubbleWidth, bubbleHeight);
  context.strokeRect(bubbleX, bubbleY, bubbleWidth, bubbleHeight);
  context.fillStyle = "#ffffff";
  context.font = "16px monospace";
  context.textAlign = "left";
  context.textBaseline = "top";
  wrapCanvasText(context, dialogue.text, bubbleWidth - 28).slice(0, 4).forEach((line, index) => {
    context.fillText(line, bubbleX + 14, bubbleY + 16 + index * 20);
  });
  context.restore();
}

function drawFinalFpsInfiniteAmmoBanner(context, width, height, timestamp) {
  if (!finalFpsState.infiniteAmmoActivatedAt) {
    return;
  }

  const age = timestamp - finalFpsState.infiniteAmmoActivatedAt;

  if (age > FINAL_FPS_FOREST_POWERUP_ACTIVATED_HOLD_MS && !finalFpsState.forestAutoFirePromptActive) {
    return;
  }

  const alpha = age < 180 ? age / 180 : age > 1800 ? Math.max(0, 1 - (age - 1800) / 500) : 1;

  context.save();
  context.globalAlpha = alpha;
  context.fillStyle = "rgba(0, 0, 0, 0.48)";
  context.fillRect(0, height * 0.08, width, Math.max(52, height * 0.16));
  context.fillStyle = "#81ff4a";
  context.strokeStyle = "rgba(129, 255, 74, 0.55)";
  context.lineWidth = 2;
  context.font = `900 ${Math.max(24, Math.min(46, height * 0.105))}px 'Courier New', monospace`;
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.shadowColor = "rgba(129, 255, 74, 0.75)";
  context.shadowBlur = 12;
  context.fillText("Infinite Ammo Activated", width / 2, height * 0.16);
  context.shadowBlur = 0;
  context.strokeText("Infinite Ammo Activated", width / 2, height * 0.16);
  context.restore();
}

function drawFinalFpsAutoFireUnlockPrompt(context, width, height, timestamp) {
  if (!finalFpsState.forestAutoFirePromptActive) {
    return;
  }

  const target = finalFpsState.autoFireButtonRect || { x: 20, y: 20, width: 160, height: 50 };
  const boxWidth = Math.min(330, width * 0.48);
  const boxHeight = 74;
  const boxX = Math.max(16, target.x + target.width * 0.26);
  const boxY = target.y + target.height + 30;

  context.save();
  context.fillStyle = "rgba(0, 0, 0, 0.28)";
  context.fillRect(0, 0, width, height);
  context.strokeStyle = "#ffffff";
  context.lineWidth = 3;
  context.beginPath();
  context.arc(target.x + target.width / 2, target.y + target.height / 2, Math.max(target.width, target.height) * 0.68, 0, Math.PI * 2);
  context.stroke();
  context.beginPath();
  context.moveTo(boxX + 32, boxY);
  context.lineTo(target.x + target.width / 2, target.y + target.height + 6);
  context.stroke();
  context.fillStyle = "rgba(0, 0, 0, 0.82)";
  context.strokeStyle = "rgba(255, 255, 255, 0.84)";
  context.lineWidth = 2;
  context.fillRect(boxX, boxY, boxWidth, boxHeight);
  context.strokeRect(boxX, boxY, boxWidth, boxHeight);
  context.fillStyle = "#ffffff";
  context.font = "900 18px monospace";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText("Turn on Auto Fire", boxX + boxWidth / 2, boxY + boxHeight / 2);
  context.restore();
}

function castFinalFpsRay(angle) {
  const player = finalFpsState.player;
  const dx = Math.cos(angle);
  const dy = Math.sin(angle);
  const candidates = [];

  if (dx > 0) candidates.push({ distance: (FINAL_FPS_ROOM_SIZE - player.x) / dx, wall: "east" });
  if (dx < 0) candidates.push({ distance: (0 - player.x) / dx, wall: "west" });
  if (dy > 0) candidates.push({ distance: (FINAL_FPS_ROOM_SIZE - player.y) / dy, wall: "south" });
  if (dy < 0) candidates.push({ distance: (0 - player.y) / dy, wall: "north" });

  const hit = candidates
    .filter((candidate) => candidate.distance > 0)
    .sort((a, b) => a.distance - b.distance)[0];

  const hitX = player.x + dx * hit.distance;
  const hitY = player.y + dy * hit.distance;
  return { ...hit, x: hitX, y: hitY };
}

function drawFinalFpsRaycastRoom(context, width, height) {
  const horizon = height * (0.48 + finalFpsState.player.pitch * 0.5);
  const fov = Math.PI / 3;
  const columns = Math.ceil(width / 2);

  const ceilingGradient = context.createLinearGradient(0, 0, 0, horizon);
  ceilingGradient.addColorStop(0, "#22140b");
  ceilingGradient.addColorStop(0.66, "#3a2415");
  ceilingGradient.addColorStop(1, "#25160c");
  context.fillStyle = ceilingGradient;
  context.fillRect(0, 0, width, horizon);

  const floorGradient = context.createLinearGradient(0, horizon, 0, height);
  floorGradient.addColorStop(0, "#2e2118");
  floorGradient.addColorStop(1, "#120b07");
  context.fillStyle = floorGradient;
  context.fillRect(0, horizon, width, height - horizon);

  let previousWall = null;
  for (let column = 0; column < columns; column += 1) {
    const screenX = column / columns;
    const rayAngle = finalFpsState.player.angle - fov / 2 + screenX * fov;
    const hit = castFinalFpsRay(rayAngle);
    const correctedDistance = Math.max(0.12, hit.distance * Math.cos(rayAngle - finalFpsState.player.angle));
    const wallHeight = Math.min(height * 1.6, height * 0.9 / correctedDistance);
    const top = horizon - wallHeight / 2;
    const stripWidth = Math.ceil(width / columns) + 1;
    const x = column * (width / columns);
    const centerLight = 1 - Math.min(1, Math.abs(screenX - 0.5) * 1.8);
    const brightness = Math.max(0.38, Math.min(0.92, 0.9 - correctedDistance * 0.12 + centerLight * 0.22));
    const wallTop = Math.max(-height * 0.22, top);
    const wallBottom = Math.min(height * 1.1, top + wallHeight);
    const sideShade = hit.wall === "north" || hit.wall === "south" ? 1 : 0.82;
    const shade = brightness * sideShade;

    context.fillStyle = `rgb(${Math.floor(104 * shade)}, ${Math.floor(70 * shade)}, ${Math.floor(42 * shade)})`;
    context.fillRect(x, wallTop, stripWidth, wallBottom - wallTop);
    drawFinalFpsWallDecorationStrip(context, hit, x, stripWidth, top, wallHeight, wallTop, wallBottom, shade);
    drawFinalFpsDoorStrip(context, hit, x, stripWidth, top, wallHeight, wallTop, wallBottom, shade);
    drawFinalFpsBulletMarkStrip(context, hit, x, stripWidth, top, wallHeight, shade);

    if (previousWall && previousWall !== hit.wall) {
      context.fillStyle = "rgba(15, 8, 4, 0.55)";
      context.fillRect(x, wallTop, Math.max(2, stripWidth * 0.7), wallBottom - wallTop);
    }

    previousWall = hit.wall;
  }

  drawFinalFpsRoomDetails(context, width, height, horizon);
}

function drawFinalFpsHedgeMaze(context, width, height, timestamp) {
  const horizon = height * (0.42 + finalFpsState.player.pitch * 0.48);
  const ceilingGradient = context.createLinearGradient(0, 0, 0, horizon);
  ceilingGradient.addColorStop(0, "#22140b");
  ceilingGradient.addColorStop(0.66, "#3a2415");
  ceilingGradient.addColorStop(1, "#25160c");
  context.fillStyle = ceilingGradient;
  context.fillRect(0, 0, width, horizon);

  const floorGradient = context.createLinearGradient(0, horizon, 0, height);
  floorGradient.addColorStop(0, "#2e2118");
  floorGradient.addColorStop(1, "#120b07");
  context.fillStyle = floorGradient;
  context.fillRect(0, horizon, width, height - horizon);

  const fov = Math.PI / 3;
  const columns = Math.ceil(width / 2);
  const halfWidth = FINAL_FPS_HEDGE_CORRIDOR_WIDTH / 2;

  for (let column = 0; column < columns; column += 1) {
    const screenX = column / columns;
    const rayAngle = finalFpsState.player.angle - fov / 2 + screenX * fov;
    const hit = castFinalFpsHedgeRay(rayAngle, halfWidth);
    const stripWidth = Math.ceil(width / columns) + 1;
    const x = column * (width / columns);

    if (!hit) {
      context.fillStyle = "#160d08";
      context.fillRect(x, 0, stripWidth, height);
      continue;
    }

    const correctedDistance = Math.max(0.12, hit.distance * Math.cos(rayAngle - finalFpsState.player.angle));
    const wallHeight = Math.min(height * 4.4, height * 2.7 / correctedDistance);
    const top = horizon - wallHeight * 0.82;
    const wallTop = Math.max(-height * 1.6, top);
    const wallBottom = Math.min(height * 1.18, horizon + wallHeight * 0.5);
    const shade = Math.max(0.3, Math.min(0.92, 0.9 - correctedDistance * 0.055));
    const sideTint = hit.wall === "left" ? 0.86 : 1.02;
    const fogAlpha = Math.max(0, Math.min(0.84, (correctedDistance - 5.5) / 5.2));

    context.fillStyle = `rgb(${Math.floor(104 * shade * sideTint)}, ${Math.floor(70 * shade)}, ${Math.floor(42 * shade)})`;
    context.fillRect(x, wallTop, stripWidth, wallBottom - wallTop);
    drawFinalFpsHedgeBulletMarkStrip(context, hit, x, stripWidth, wallHeight, wallTop, wallBottom, horizon, shade);

    if (fogAlpha > 0) {
      context.fillStyle = `rgba(22, 13, 7, ${fogAlpha})`;
      context.fillRect(x, 0, stripWidth, height);
    }

    context.fillStyle = "rgba(0, 0, 0, 0.5)";
    context.fillRect(x, wallBottom - 2, stripWidth, 2);
  }

  drawFinalFpsCorridorCeilingLights(context, width, height, horizon, timestamp);
  drawFinalFpsPartyGoblins(context, width, height, horizon, timestamp);
  drawFinalFpsCorridorEntranceBehind(context, width, height, horizon);
}

function drawFinalFpsCorridorCeilingLights(context, width, height, horizon, timestamp) {
  const player = finalFpsState.player;
  const lightPoints = [];
  const mainFirstSlot = Math.floor((-player.y - 1.2) / FINAL_FPS_CORRIDOR_LIGHT_INTERVAL);

  for (let index = 0; index < 8; index += 1) {
    const slot = mainFirstSlot + index;
    lightPoints.push({ x: 0, y: -(slot * FINAL_FPS_CORRIDOR_LIGHT_INTERVAL + 2.8) });
  }

  context.save();
  lightPoints.forEach((light) => {
    if (!isFinalFpsCorridorSegmentVisible(player.x, player.y, light.x, light.y)) {
      return;
    }

    drawFinalFpsCorridorCeilingLight(context, width, height, horizon, light.x, light.y);
  });
  context.restore();
}

function drawFinalFpsCorridorCeilingLight(context, width, height, horizon, lightX, lightY) {
  const player = finalFpsState.player;
  const fov = Math.PI / 3;
  const projectionScale = width / fov;
  const relX = lightX - player.x;
  const relY = lightY - player.y;
  const depth = relX * Math.cos(player.angle) + relY * Math.sin(player.angle);

  if (depth <= 0.25 || depth > 34) {
    return;
  }

  const angleToLight = normalizeAngle(Math.atan2(relY, relX) - player.angle);

  if (Math.abs(angleToLight) > fov * 0.75) {
    return;
  }

  const x = width / 2 + angleToLight * projectionScale;
  const y = horizon - Math.min(height * 0.9, height * 0.95 / depth);
  const lightWidth = Math.max(16, Math.min(92, width * 0.18 / depth));
  const lightHeight = Math.max(5, lightWidth * 0.22);
  const alpha = Math.max(0.18, Math.min(0.86, 1.1 - depth * 0.045));

  const glow = context.createRadialGradient(x, y + lightHeight * 0.4, 2, x, y + lightHeight * 0.4, lightWidth * 2.2);
  glow.addColorStop(0, `rgba(255, 228, 150, ${0.22 * alpha})`);
  glow.addColorStop(1, "rgba(255, 228, 150, 0)");
  context.fillStyle = glow;
  context.fillRect(x - lightWidth * 2.2, y - lightWidth * 0.9, lightWidth * 4.4, lightWidth * 2.7);

  context.fillStyle = `rgba(20, 13, 8, ${0.78 * alpha})`;
  context.fillRect(x - lightWidth * 0.58, y - lightHeight * 0.55, lightWidth * 1.16, lightHeight * 1.45);
  context.fillStyle = `rgba(255, 234, 170, ${0.92 * alpha})`;
  context.fillRect(x - lightWidth * 0.46, y - lightHeight * 0.34, lightWidth * 0.92, lightHeight * 0.76);
}

function loadFinalFpsPartyGoblinImage() {
  if (finalFpsState.partyGoblinImage) {
    return finalFpsState.partyGoblinImage;
  }

  const image = new Image();
  image.src = FINAL_FPS_PARTY_GOBLIN_SHEET_URL;
  finalFpsState.partyGoblinImage = image;
  return image;
}

function loadFinalFpsForestBossImage() {
  if (finalFpsState.forestBossImage) {
    return finalFpsState.forestBossImage;
  }

  const image = new Image();
  image.src = FINAL_FPS_FOREST_BOSS_SHEET_URL;
  finalFpsState.forestBossImage = image;
  return image;
}

function loadFinalFpsForestBossAttackImage() {
  if (finalFpsState.forestBossAttackImage) {
    return finalFpsState.forestBossAttackImage;
  }

  const image = new Image();
  image.src = FINAL_FPS_FOREST_BOSS_ATTACK_SHEET_URL;
  finalFpsState.forestBossAttackImage = image;
  return image;
}

function loadFinalFpsForestBossJumpImage() {
  if (finalFpsState.forestBossJumpImage) {
    return finalFpsState.forestBossJumpImage;
  }

  const image = new Image();
  image.src = FINAL_FPS_FOREST_BOSS_JUMP_SHEET_URL;
  finalFpsState.forestBossJumpImage = image;
  return image;
}

function loadFinalFpsForestBossStunImage() {
  if (finalFpsState.forestBossStunImage) {
    return finalFpsState.forestBossStunImage;
  }

  const image = new Image();
  image.src = FINAL_FPS_FOREST_BOSS_STUN_SHEET_URL;
  finalFpsState.forestBossStunImage = image;
  return image;
}

function loadFinalFpsForestBossDeathImage() {
  if (finalFpsState.forestBossDeathImage) {
    return finalFpsState.forestBossDeathImage;
  }

  const image = new Image();
  image.src = FINAL_FPS_FOREST_BOSS_DEATH_SHEET_URL;
  finalFpsState.forestBossDeathImage = image;
  return image;
}

function updateFinalFpsPartyGoblins(timestamp, deltaSeconds) {
  if (finalFpsState.environmentMode !== "hedge" && finalFpsState.environmentMode !== "forest") {
    return;
  }

  if (finalFpsState.partyGoblinTutorialActive || finalFpsState.corridorFailedAt > 0) {
    return;
  }

  const isForest = finalFpsState.environmentMode === "forest";
  const elapsed = timestamp - (isForest ? finalFpsState.forestStartedAt : finalFpsState.corridorStartedAt);

  if (!isForest && !finalFpsState.corridorStartedAt) {
    return;
  }

  if (isForest && !finalFpsState.forestStartedAt) {
    return;
  }

  const waveIsActive = isForest
    ? !finalFpsState.forestBoss &&
      !finalFpsState.forestBossComplete &&
      finalFpsState.forestIntroComplete &&
      !finalFpsState.forestAutoFirePromptActive &&
      (finalFpsState.forestChaosActive || finalFpsState.forestIntroGoblinSpawned < FINAL_FPS_FOREST_INTRO_GOBLIN_COUNT)
    : elapsed > FINAL_FPS_PARTY_GOBLIN_START_DELAY_MS && elapsed < FINAL_FPS_PARTY_GOBLIN_START_DELAY_MS + FINAL_FPS_PARTY_GOBLIN_WAVE_MS;
  const spawnGap = isForest
    ? finalFpsState.forestChaosActive
      ? FINAL_FPS_FOREST_CHAOS_GOBLIN_SPAWN_MS
      : FINAL_FPS_FOREST_GOBLIN_SPAWN_MS
    : FINAL_FPS_PARTY_GOBLIN_SPAWN_MS;
  const maxGoblins = isForest ? (finalFpsState.forestChaosActive ? FINAL_FPS_FOREST_CHAOS_MAX_GOBLINS : 2) : 4;

  if (waveIsActive && timestamp - finalFpsState.lastPartyGoblinSpawnAt > spawnGap && finalFpsState.partyGoblins.filter((goblin) => goblin.state === "run").length < maxGoblins) {
    spawnFinalFpsPartyGoblin(timestamp, { forest: isForest, chaos: finalFpsState.forestChaosActive });
  }

  finalFpsState.partyGoblins.forEach((goblin) => {
    if (goblin.state === "run") {
      goblin.y += goblin.speed * deltaSeconds;
      goblin.step += deltaSeconds * 9.5;

      if (!isForest && goblin.y >= finalFpsState.player.y - FINAL_FPS_PARTY_GOBLIN_TOUCH_DISTANCE) {
        failFinalFpsCorridor(timestamp);
      }

      if (isForest && !finalFpsState.forestBoss && goblin.y >= finalFpsState.player.y - FINAL_FPS_PARTY_GOBLIN_TOUCH_DISTANCE) {
        failFinalFpsCorridor(timestamp);
      }
    }
  });

  finalFpsState.partyGoblins = finalFpsState.partyGoblins.filter((goblin) => {
    if (goblin.state === "dead") {
      return timestamp - goblin.deadAt < FINAL_FPS_PARTY_GOBLIN_DEATH_MS;
    }

    return goblin.y < finalFpsState.player.y + 1.2;
  });

  finalFpsState.partyGoblinBursts = finalFpsState.partyGoblinBursts.filter((burst) => timestamp - burst.createdAt < 620);
  finalFpsState.forestBossScorePopups = finalFpsState.forestBossScorePopups.filter((popup) => timestamp - popup.createdAt < 1450);
}

function spawnFinalFpsPartyGoblin(timestamp, options = {}) {
  const lanes = options.forest ? [-0.54, -0.24, 0.08, 0.44] : [-0.42, 0, 0.42];
  const availableLanes = lanes
    .map((_, index) => index)
    .filter((index) => index !== finalFpsState.lastPartyGoblinLane || Math.random() < 0.25);
  const laneIndex = availableLanes[Math.floor(Math.random() * availableLanes.length)] ?? Math.floor(Math.random() * lanes.length);
  const id = `${timestamp}-${Math.random().toString(16).slice(2)}`;
  finalFpsState.partyGoblins.push({
    id,
    x: lanes[laneIndex] + (Math.random() - 0.5) * 0.12,
    y: finalFpsState.player.y - (options.forest ? 17 + Math.random() * 5.4 : 13.5 + Math.random() * 4.4),
    row: Math.floor(Math.random() * FINAL_FPS_PARTY_GOBLIN_ROWS),
    speed: options.forest
      ? options.chaos
        ? 3.25 + Math.random() * 0.72
        : 2.35 + Math.random() * 0.55
      : 2.45 + Math.random() * 0.62,
    health: options.chaos ? FINAL_FPS_FOREST_CHAOS_GOBLIN_HEALTH : FINAL_FPS_PARTY_GOBLIN_HEALTH,
    step: Math.random() * 4,
    state: "run",
    createdAt: timestamp,
    deadAt: 0,
  });
  if (options.forest && !options.chaos) {
    finalFpsState.forestIntroGoblinSpawned += 1;
  }
  finalFpsState.lastPartyGoblinSpawnAt = timestamp;
  finalFpsState.lastPartyGoblinLane = laneIndex;

  if (!options.forest && !finalFpsState.hasShownPartyGoblinTutorial) {
    finalFpsState.hasShownPartyGoblinTutorial = true;
    finalFpsState.partyGoblinTutorialActive = true;
    finalFpsState.partyGoblinTutorialId = id;
    finalFpsState.partyGoblinTutorialStartedAt = timestamp;
    finalFpsState.keys.forward = 0;
    finalFpsState.keys.strafe = 0;
    finalFpsState.joystick.active = false;
    finalFpsState.look.active = false;
  }
}

function getFinalFpsProjectedPartyGoblin(goblin, width, height, horizon) {
  const player = finalFpsState.player;
  const relX = goblin.x - player.x;
  const relY = goblin.y - player.y;
  const forwardX = Math.cos(player.angle);
  const forwardY = Math.sin(player.angle);
  const rightX = Math.cos(player.angle + Math.PI / 2);
  const rightY = Math.sin(player.angle + Math.PI / 2);
  const depth = relX * forwardX + relY * forwardY;

  if (depth <= 0.16) {
    return null;
  }

  const side = relX * rightX + relY * rightY;
  const fov = Math.PI / 3;
  const projectionScale = width / fov;
  const screenX = width / 2 + (side / depth) * projectionScale;
  const feetY = horizon + Math.min(height - horizon + 92, height * 0.78 / depth);
  const spriteHeight = Math.max(36, Math.min(height * 0.78, height * 0.96 / depth));
  const spriteWidth = spriteHeight * 0.82;

  if (screenX < -spriteWidth || screenX > width + spriteWidth || feetY < -spriteHeight || feetY > height + spriteHeight) {
    return null;
  }

  return {
    depth,
    x: screenX - spriteWidth / 2,
    y: feetY - spriteHeight,
    centerX: screenX,
    centerY: feetY - spriteHeight * 0.52,
    width: spriteWidth,
    height: spriteHeight,
    alpha: Math.max(0.12, Math.min(1, (16 - depth) / 5.4)),
  };
}

function hitFinalFpsPartyGoblin(timestamp) {
  if (finalFpsState.environmentMode !== "hedge" && finalFpsState.environmentMode !== "forest") {
    return false;
  }

  const width = window.innerWidth;
  const height = window.innerHeight;
  const horizon = height * (0.42 + finalFpsState.player.pitch * 0.48);
  const targetX = width / 2;
  const targetY = height / 2;
  const candidates = finalFpsState.partyGoblins
    .filter((goblin) => goblin.state === "run")
    .map((goblin) => ({ goblin, projection: getFinalFpsProjectedPartyGoblin(goblin, width, height, horizon) }))
    .filter(({ projection }) => projection)
    .filter(({ projection }) => (
      targetX >= projection.x + projection.width * 0.18 &&
      targetX <= projection.x + projection.width * 0.82 &&
      targetY >= projection.y + projection.height * 0.08 &&
      targetY <= projection.y + projection.height * 0.92
    ))
    .sort((a, b) => a.projection.depth - b.projection.depth);

  const hit = candidates[0];

  if (!hit) {
    return false;
  }

  hit.goblin.health -= 1;
  const isKill = hit.goblin.health <= 0;

  finalFpsState.partyGoblinBursts.push({
    x: hit.projection.centerX,
    y: hit.projection.centerY,
    size: hit.projection.width,
    createdAt: timestamp,
    score: isKill ? "100" : null,
  });

  if (isKill) {
    hit.goblin.state = "dead";
    hit.goblin.deadAt = timestamp;
    registerFinalFpsForestGoblinKill(timestamp);
    if (finalFpsState.environmentMode === "forest" && !finalFpsState.forestChaosActive) {
      finalFpsState.forestIntroGoblinKills += 1;
      ensureFinalFpsForestWaypoint(timestamp);
      if (finalFpsState.forestIntroGoblinKills >= FINAL_FPS_FOREST_INTRO_GOBLIN_COUNT && !finalFpsState.forestPowerUp) {
        finalFpsState.forestPowerUp = {
          x: hit.goblin.x,
          y: hit.goblin.y,
          createdAt: timestamp,
          collected: false,
        };
      }
    }
    playSoundEffect("goblinSmallDeath", { minGap: 45, volume: 0.48 });
  } else {
    playSoundEffect("tapPop", { minGap: 28, volume: 0.22 });
  }

  return true;
}

function drawFinalFpsPartyGoblins(context, width, height, horizon, timestamp) {
  const image = loadFinalFpsPartyGoblinImage();

  if (!image.complete || image.naturalWidth === 0 || image.naturalHeight === 0) {
    return;
  }

  const frameWidth = Math.floor(image.naturalWidth / FINAL_FPS_PARTY_GOBLIN_COLUMNS);
  const frameHeight = Math.floor(image.naturalHeight / FINAL_FPS_PARTY_GOBLIN_ROWS);
  const visibleGoblins = finalFpsState.partyGoblins
    .map((goblin) => ({ goblin, projection: getFinalFpsProjectedPartyGoblin(goblin, width, height, horizon) }))
    .filter(({ projection }) => projection)
    .sort((a, b) => b.projection.depth - a.projection.depth);

  context.save();
  context.imageSmoothingEnabled = false;
  visibleGoblins.forEach(({ goblin, projection }) => {
    const isDead = goblin.state === "dead";
    const frame = isDead ? 4 : Math.floor(goblin.step % 4);
    const alpha = (isDead ? Math.max(0, 1 - (timestamp - goblin.deadAt) / FINAL_FPS_PARTY_GOBLIN_DEATH_MS) : 1) * projection.alpha;
    const drawHeight = isDead ? projection.height * 0.58 : projection.height;
    const drawY = isDead ? projection.y + projection.height * 0.44 : projection.y;
    const sourceInsetLeft = frameWidth * 0.055;
    const sourceInsetRight = frameWidth * 0.115;
    const sourceInsetTop = frameHeight * 0.04;
    const sourceInsetBottom = frameHeight * 0.075;

    context.globalAlpha = alpha;
    context.drawImage(
      image,
      frame * frameWidth + sourceInsetLeft,
      goblin.row * frameHeight + sourceInsetTop,
      frameWidth - sourceInsetLeft - sourceInsetRight,
      frameHeight - sourceInsetTop - sourceInsetBottom,
      projection.x,
      drawY,
      projection.width,
      drawHeight,
    );
  });
  context.restore();

  drawFinalFpsPartyGoblinBursts(context, timestamp);
}

function drawFinalFpsPartyGoblinBursts(context, timestamp) {
  context.save();
  finalFpsState.partyGoblinBursts.forEach((burst) => {
    const age = timestamp - burst.createdAt;
    const bloodProgress = Math.min(1, age / 360);
    const markerProgress = Math.min(1, age / 620);
    const alpha = 1 - bloodProgress;
    const radius = burst.size * (0.12 + bloodProgress * 0.22);

    context.globalAlpha = alpha;
    context.fillStyle = "#a41417";
    for (let index = 0; index < 8; index += 1) {
      const angle = index * 0.78 + bloodProgress * 1.4;
      const x = burst.x + Math.cos(angle) * radius * (0.45 + index * 0.08);
      const y = burst.y + Math.sin(angle) * radius * 0.62;
      context.beginPath();
      context.arc(x, y, Math.max(2, burst.size * 0.018 * (1 - bloodProgress * 0.4)), 0, Math.PI * 2);
      context.fill();
    }

    const markerAlpha = Math.max(0, 1 - markerProgress);
    const markerSize = Math.max(9, Math.min(18, burst.size * 0.18));
    const markerGap = markerSize * (0.45 + markerProgress * 0.24);
    const markerArm = markerSize * 0.46;

    context.globalAlpha = markerAlpha;
    context.strokeStyle = "#ffffff";
    context.lineWidth = Math.max(1.4, markerSize * 0.12);
    context.beginPath();
    context.moveTo(burst.x - markerGap - markerArm, burst.y - markerGap - markerArm);
    context.lineTo(burst.x - markerGap, burst.y - markerGap);
    context.moveTo(burst.x + markerGap + markerArm, burst.y - markerGap - markerArm);
    context.lineTo(burst.x + markerGap, burst.y - markerGap);
    context.moveTo(burst.x - markerGap - markerArm, burst.y + markerGap + markerArm);
    context.lineTo(burst.x - markerGap, burst.y + markerGap);
    context.moveTo(burst.x + markerGap + markerArm, burst.y + markerGap + markerArm);
    context.lineTo(burst.x + markerGap, burst.y + markerGap);
    context.stroke();

    if (burst.score) {
      context.fillStyle = "#ffd84a";
      context.font = `900 ${Math.max(12, markerSize * 0.92)}px monospace`;
      context.textAlign = "left";
      context.textBaseline = "middle";
      context.fillText(burst.score, burst.x + markerSize * 1.25, burst.y - markerSize * (0.25 + markerProgress * 1.25));
    }
  });
  context.restore();
}

function drawFinalFpsCorridorEntranceBehind(context, width, height, horizon) {
  const player = finalFpsState.player;
  const distanceBehind = Math.max(0.35, -player.y + 0.35);

  if (player.y < -5.2) {
    return;
  }

  const angleToEntrance = normalizeAngle(Math.PI / 2 - player.angle);
  const fov = Math.PI / 3;

  if (Math.abs(angleToEntrance) > fov * 0.62) {
    return;
  }

  const screenX = width / 2 + (angleToEntrance / (fov / 2)) * (width / 2);
  const correctedDistance = Math.max(0.3, distanceBehind * Math.cos(angleToEntrance));
  const doorwayHeight = Math.min(height * 1.3, height * 0.92 / correctedDistance);
  const doorwayWidth = doorwayHeight * 0.72;
  const top = horizon - doorwayHeight * 0.5;
  const left = screenX - doorwayWidth / 2;
  const fade = Math.max(0, Math.min(1, 1 - Math.max(0, -player.y) / 5.2));

  context.save();
  context.globalAlpha = fade;
  context.fillStyle = "#170d07";
  context.fillRect(left, top, doorwayWidth, doorwayHeight);
  context.fillStyle = "#3a2415";
  context.fillRect(left + doorwayWidth * 0.08, top + doorwayHeight * 0.08, doorwayWidth * 0.84, doorwayHeight * 0.84);
  context.fillStyle = "#2e2118";
  context.fillRect(left + doorwayWidth * 0.08, top + doorwayHeight * 0.52, doorwayWidth * 0.84, doorwayHeight * 0.4);
  context.strokeStyle = "rgba(0, 0, 0, 0.62)";
  context.lineWidth = Math.max(2, doorwayWidth * 0.035);
  context.strokeRect(left, top, doorwayWidth, doorwayHeight);
  context.restore();
}

function isFinalFpsCorridorPointInside(x, y, margin = 0) {
  const halfWidth = FINAL_FPS_HEDGE_CORRIDOR_WIDTH / 2 - margin;
  return Math.abs(x) <= halfWidth;
}

function isFinalFpsCorridorSegmentVisible(startX, startY, endX, endY) {
  const distance = Math.hypot(endX - startX, endY - startY);
  const steps = Math.max(1, Math.ceil(distance / 0.28));

  for (let index = 1; index <= steps; index += 1) {
    const progress = index / steps;
    const x = startX + (endX - startX) * progress;
    const y = startY + (endY - startY) * progress;

    if (!isFinalFpsCorridorPointInside(x, y, 0.03)) {
      return false;
    }
  }

  return true;
}

function getFinalFpsCorridorWallName(x, y) {
  const halfWidth = FINAL_FPS_HEDGE_CORRIDOR_WIDTH / 2;
  return x < 0 ? "left" : "right";
}

function castFinalFpsHedgeRay(rayAngle, halfWidth) {
  const player = finalFpsState.player;
  const dx = Math.cos(rayAngle);
  const dy = Math.sin(rayAngle);
  let previousDistance = 0;

  for (let distance = FINAL_FPS_CORRIDOR_RAY_STEP; distance <= FINAL_FPS_CORRIDOR_RAY_MAX_DISTANCE; distance += FINAL_FPS_CORRIDOR_RAY_STEP) {
    const x = player.x + dx * distance;
    const y = player.y + dy * distance;

    if (!isFinalFpsCorridorPointInside(x, y)) {
      const hitDistance = Math.max(0.01, (previousDistance + distance) / 2);
      const worldX = player.x + dx * hitDistance;
      const worldY = player.y + dy * hitDistance;

      return {
        distance: hitDistance,
        wall: getFinalFpsCorridorWallName(worldX, worldY),
        worldX,
        worldY,
      };
    }

    previousDistance = distance;
  }

  return null;
}

function getPositiveModulo(value, modulus) {
  return ((value % modulus) + modulus) % modulus;
}

function getFinalFpsHedgePaintingDescriptor(hit) {
  const interval = FINAL_FPS_HEDGE_PAINTING_INTERVAL;
  const slot = Math.floor(hit.worldY / interval);
  const sideSeed = hit.wall === "left" ? 3 : 11;
  const local = getPositiveModulo(hit.worldY, interval);
  const center = interval * (0.24 + getPositiveModulo(slot * 37 + sideSeed, 46) / 100);
  const halfWidth = FINAL_FPS_HEDGE_PAINTING_HALF_WIDTH * (0.82 + getPositiveModulo(slot * 19 + sideSeed, 7) * 0.07);

  if (Math.abs(local - center) > halfWidth) {
    return null;
  }

  const index = getPositiveModulo(slot * 7 + sideSeed, FINAL_FPS_HEDGE_PAINTINGS.length);
  const size = 0.34 + getPositiveModulo(slot * 23 + sideSeed, 6) * 0.052;
  const centerY = 0.18 + getPositiveModulo(slot * 31 + sideSeed, 10) * 0.07;
  const tilt = (getPositiveModulo(slot * 29 + sideSeed, 13) - 6) * 0.04;

  return {
    imageKey: FINAL_FPS_HEDGE_PAINTINGS[index],
    relative: (local - center) / halfWidth,
    centerY,
    size,
    tilt,
  };
}

function drawFinalFpsHedgePaintingStrip(context, hit, x, stripWidth, wallHeight, wallTop, wallBottom, horizon, shade) {
  const descriptor = getFinalFpsHedgePaintingDescriptor(hit);

  if (!descriptor) {
    return;
  }

  const paintingHeight = Math.max(24, Math.min(wallHeight * descriptor.size, window.innerHeight * 0.31));
  const top = Math.max(
    wallTop + 6,
    Math.min(
      wallBottom - paintingHeight - 6,
      horizon - wallHeight * descriptor.centerY + descriptor.tilt * descriptor.relative * wallHeight,
    ),
  );

  drawFinalFpsPaintingStrip(context, x, stripWidth, top, paintingHeight, descriptor.relative, descriptor.imageKey, shade);
}

function drawFinalFpsHedgeBulletMarkStrip(context, hit, x, stripWidth, wallHeight, wallTop, wallBottom, horizon, shade) {
  finalFpsState.bulletMarks.forEach((mark) => {
    if (mark.environment !== "hedgeWall" || mark.wall !== hit.wall || Math.abs(mark.coordinate - hit.worldY) > 0.025) {
      return;
    }

    const age = performance.now() - mark.createdAt;
    const alpha = Math.max(0, 1 - age / FINAL_FPS_BULLET_MARK_MS);
    const markY = Math.max(wallTop + 3, Math.min(wallBottom - 3, horizon - wallHeight * 0.82 + wallHeight * mark.verticalFraction));
    const radius = Math.max(2, Math.min(8, wallHeight * 0.014));

    context.fillStyle = `rgba(4, 3, 2, ${0.75 * alpha})`;
    context.beginPath();
    context.arc(x + stripWidth / 2, markY, radius, 0, Math.PI * 2);
    context.fill();
    context.fillStyle = `rgba(228, 226, 182, ${0.18 * alpha * shade})`;
    context.beginPath();
    context.arc(x + stripWidth / 2 - radius * 0.25, markY - radius * 0.22, radius * 0.42, 0, Math.PI * 2);
    context.fill();
  });
}

function drawFinalFpsHedgeFloorBulletMarks(context, width, height, horizon, timestamp) {
  const player = finalFpsState.player;
  const forwardX = Math.cos(player.angle);
  const forwardY = Math.sin(player.angle);
  const rightX = Math.cos(player.angle + Math.PI / 2);
  const rightY = Math.sin(player.angle + Math.PI / 2);
  const projectionScale = width * 0.48;

  finalFpsState.bulletMarks.forEach((mark) => {
    if (mark.environment !== "hedgeFloor") {
      return;
    }

    const relX = mark.x - player.x;
    const relY = mark.y - player.y;
    const depth = relX * forwardX + relY * forwardY;

    if (depth <= 0.08) {
      return;
    }

    const side = relX * rightX + relY * rightY;
    const screenX = width / 2 + (side / depth) * projectionScale;
    const baseDrop = mark.screenDrop || (height * 0.32) / depth;
    const screenY = Math.max(horizon + 18, Math.min(height - 8, horizon + baseDrop * (mark.floorDistance || depth) / depth));

    if (screenX < -20 || screenX > width + 20 || screenY < horizon || screenY > height + 20) {
      return;
    }

    const age = timestamp - mark.createdAt;
    const alpha = Math.max(0, 1 - age / FINAL_FPS_BULLET_MARK_MS);
    const radius = Math.max(4, Math.min(13, 9 / Math.sqrt(depth)));

    context.fillStyle = `rgba(10, 8, 6, ${0.65 * alpha})`;
    context.beginPath();
    context.ellipse(screenX, screenY, radius * 1.75, radius * 0.32, 0, 0, Math.PI * 2);
    context.fill();
    context.fillStyle = `rgba(210, 196, 160, ${0.12 * alpha})`;
    context.beginPath();
    context.ellipse(screenX - radius * 0.35, screenY - radius * 0.08, radius * 0.52, radius * 0.12, 0, 0, Math.PI * 2);
    context.fill();
  });
}

function drawFinalFpsHedgeSky(context, width, height, horizon, timestamp) {
  const fov = Math.PI / 3;
  const skyScale = width / fov;
  const pitchOffset = finalFpsState.player.pitch * height * 0.44;

  context.save();
  for (let index = 0; index < 62; index += 1) {
    const starAngle = -Math.PI + ((index * 1.61803398875) % 1) * Math.PI * 2;
    const offset = normalizeAngle(starAngle - finalFpsState.player.angle);

    if (Math.abs(offset) > fov * 0.72) {
      continue;
    }

    const x = width / 2 + offset * skyScale;
    const y = 12 + ((index * 47) % Math.max(20, horizon - 28)) + pitchOffset;

    if (y < 4 || y > horizon - 6) {
      continue;
    }

    const alpha = 0.22 + (Math.sin(timestamp / 700 + index) * 0.5 + 0.5) * 0.45;
    context.globalAlpha = alpha;
    context.fillStyle = "rgba(255, 255, 255, 0.78)";
    context.fillRect(x, y, index % 5 === 0 ? 2 : 1, index % 7 === 0 ? 2 : 1);
  }

  const moonAngle = -Math.PI / 2 - 0.42;
  const moonOffset = normalizeAngle(moonAngle - finalFpsState.player.angle);

  if (Math.abs(moonOffset) <= fov * 0.82) {
    const moonX = width / 2 + moonOffset * skyScale;
    const moonY = Math.max(22, horizon * 0.25 + pitchOffset);
    const moonRadius = Math.max(12, Math.min(24, width * 0.026));

    context.globalAlpha = 0.9;
    context.fillStyle = "#d9dfc6";
    context.beginPath();
    context.arc(moonX, moonY, moonRadius, 0, Math.PI * 2);
    context.fill();
    context.fillStyle = "#10152a";
    context.beginPath();
    context.arc(moonX + moonRadius * 0.22, moonY - moonRadius * 0.12, moonRadius * 0.88, 0, Math.PI * 2);
    context.fill();
  }

  context.restore();
}

function drawFinalFpsPortalTransition(context, width, height, timestamp) {
  const progress = Math.min(1, Math.max(0, (timestamp - finalFpsState.portalTransitionStartedAt) / FINAL_FPS_PORTAL_TRANSITION_MS));
  const reveal = easeOutCubic(progress);

  context.save();
  context.globalAlpha = reveal;
  drawFinalFpsHedgeMaze(context, width, height, timestamp);
  context.globalAlpha = 1 - reveal;
  drawFinalFpsRaycastRoom(context, width, height);
  context.restore();
}

function drawFinalFpsForestTransition(context, width, height, timestamp) {
  const progress = Math.min(1, Math.max(0, (timestamp - finalFpsState.forestTransitionStartedAt) / FINAL_FPS_FOREST_TRANSITION_MS));
  const reveal = easeOutCubic(progress);
  const pulse = Math.sin(timestamp / 48) * 0.5 + 0.5;

  context.save();
  context.globalAlpha = reveal;
  drawFinalFpsForestScene(context, width, height, timestamp);
  context.globalAlpha = 1;

  const centerX = width / 2 + Math.sin(timestamp / 95) * width * 0.08;
  const centerY = height * 0.48 + Math.cos(timestamp / 88) * height * 0.08;
  const wash = context.createRadialGradient(centerX, centerY, 10, centerX, centerY, Math.max(width, height) * (0.32 + progress * 0.86));
  wash.addColorStop(0, `rgba(255, 255, 255, ${0.42 * (1 - progress)})`);
  wash.addColorStop(0.22, `rgba(88, 255, 173, ${0.34 + pulse * 0.18})`);
  wash.addColorStop(0.58, `rgba(178, 78, 255, ${0.24 * (1 - progress * 0.4)})`);
  wash.addColorStop(1, "rgba(0, 0, 0, 0)");
  context.fillStyle = wash;
  context.fillRect(0, 0, width, height);

  context.lineWidth = 2;
  for (let ring = 0; ring < 7; ring += 1) {
    const ringProgress = (progress + ring * 0.12) % 1;
    context.globalAlpha = (1 - ringProgress) * 0.38;
    context.strokeStyle = ring % 2 ? "#bfffef" : "#b967ff";
    context.beginPath();
    context.ellipse(
      centerX,
      centerY,
      width * (0.08 + ringProgress * 0.75),
      height * (0.035 + ringProgress * 0.42),
      progress * Math.PI * 4 + ring * 0.7,
      0,
      Math.PI * 2,
    );
    context.stroke();
  }

  context.globalAlpha = Math.max(0, 1 - progress) * 0.78;
  context.fillStyle = "#000000";
  context.fillRect(0, 0, width, height);
  context.restore();
}

function drawFinalFpsForestScene(context, width, height, timestamp) {
  const horizon = height * (0.43 + finalFpsState.player.pitch * 0.48);
  const skyGradient = context.createLinearGradient(0, 0, 0, Math.max(1, horizon));
  skyGradient.addColorStop(0, "#4c58ad");
  skyGradient.addColorStop(0.48, "#d17b5a");
  skyGradient.addColorStop(1, "#f0b15f");
  context.fillStyle = skyGradient;
  context.fillRect(0, 0, width, height);

  const grassGradient = context.createLinearGradient(0, horizon, 0, height);
  grassGradient.addColorStop(0, "#4f9c45");
  grassGradient.addColorStop(1, "#1f542a");
  context.fillStyle = grassGradient;
  context.fillRect(0, horizon, width, height - horizon);

  drawFinalFpsForestFireworks(context, width, height, horizon, timestamp);
  drawFinalFpsForestBoomtownMountain(context, width, height, horizon);
  drawFinalFpsForestWalls(context, width, height, horizon);
  drawFinalFpsForestPath(context, width, height, horizon);
  drawFinalFpsForestProps(context, width, height, horizon, timestamp);
  drawFinalFpsPartyGoblins(context, width, height, horizon, timestamp);
  drawFinalFpsForestBossShockwave(context, width, height, horizon, timestamp);
  drawFinalFpsForestBossRockets(context, width, height, horizon, timestamp);
  drawFinalFpsForestBoss(context, width, height, horizon, timestamp);
  drawFinalFpsForestBossScorePopups(context, width, height, horizon, timestamp);
  drawFinalFpsForestPowerUp(context, width, height, horizon, timestamp);
  drawFinalFpsForestFog(context, width, height, horizon);
  drawFinalFpsForestWaypoint(context, width, height, horizon, timestamp);
}

function drawFinalFpsForestBoomtownMountain(context, width, height, horizon) {
  const mountainDepth = 42;
  const mountainCenter = projectFinalFpsForestCameraPoint({ side: 0, depth: mountainDepth }, width, height, horizon);

  if (!mountainCenter || mountainCenter.x < -width * 0.5 || mountainCenter.x > width * 1.5) {
    return;
  }

  const mountainWidth = width * 0.98;
  const mountainHeight = height * 0.34;
  const baseY = mountainCenter.y + height * 0.03;

  context.save();
  context.globalAlpha = 0.62;
  context.fillStyle = "#5b515f";
  context.beginPath();
  context.moveTo(mountainCenter.x - mountainWidth * 0.58, baseY);
  context.lineTo(mountainCenter.x - mountainWidth * 0.28, baseY - mountainHeight * 0.42);
  context.lineTo(mountainCenter.x - mountainWidth * 0.08, baseY - mountainHeight * 0.72);
  context.lineTo(mountainCenter.x + mountainWidth * 0.08, baseY - mountainHeight * 0.46);
  context.lineTo(mountainCenter.x + mountainWidth * 0.3, baseY - mountainHeight * 0.86);
  context.lineTo(mountainCenter.x + mountainWidth * 0.56, baseY);
  context.closePath();
  context.fill();

  context.globalAlpha = 0.5;
  context.fillStyle = "#776069";
  context.beginPath();
  context.moveTo(mountainCenter.x - mountainWidth * 0.1, baseY);
  context.lineTo(mountainCenter.x + mountainWidth * 0.3, baseY - mountainHeight * 0.86);
  context.lineTo(mountainCenter.x + mountainWidth * 0.56, baseY);
  context.closePath();
  context.fill();

  context.globalAlpha = 0.42;
  context.fillStyle = "#f4c879";
  context.beginPath();
  context.arc(mountainCenter.x + mountainWidth * 0.18, baseY - mountainHeight * 0.64, Math.max(5, height * 0.018), 0, Math.PI * 2);
  context.fill();
  context.restore();
}

function drawFinalFpsForestFireworks(context, width, height, horizon, timestamp) {
  if (!finalFpsState.forestFireworks.length) {
    return;
  }

  const mountainCenter = projectFinalFpsForestCameraPoint({ side: 0, depth: 42 }, width, height, horizon);

  if (!mountainCenter) {
    return;
  }

  context.save();
  finalFpsState.forestFireworks.forEach((firework) => {
    const age = timestamp - firework.createdAt;
    const launchMs = 760;
    const originX = mountainCenter.x + firework.side * width * firework.arc;
    const originY = mountainCenter.y - height * 0.045;
    const burstX = originX + firework.side * width * 0.025;
    const burstY = mountainCenter.y - height * firework.height;

    if (age < launchMs) {
      const progress = Math.min(1, age / launchMs);
      const rocketX = originX + (burstX - originX) * progress;
      const rocketY = originY + (burstY - originY) * progress;

      context.globalAlpha = 0.86;
      context.strokeStyle = "rgba(255, 230, 150, 0.68)";
      context.lineWidth = firework.big ? 3 : 2;
      context.beginPath();
      context.moveTo(originX, originY);
      context.lineTo(rocketX, rocketY);
      context.stroke();
      context.fillStyle = firework.color;
      context.beginPath();
      context.arc(rocketX, rocketY, firework.big ? 4 : 3, 0, Math.PI * 2);
      context.fill();
      return;
    }

    const burstProgress = Math.min(1, (age - launchMs) / (firework.big ? 1450 : 1050));
    const alpha = Math.max(0, 1 - burstProgress);
    const radius = (firework.big ? width * 0.082 : width * 0.048) * Math.sin(burstProgress * Math.PI * 0.78);
    const sparks = firework.big ? 22 : 13;

    context.globalAlpha = alpha;
    for (let spark = 0; spark < sparks; spark += 1) {
      const angle = (spark / sparks) * Math.PI * 2;
      const wobble = 0.72 + finalFpsHash(spark * 3.1 + firework.createdAt * 0.001) * 0.48;
      const x = burstX + Math.cos(angle) * radius * wobble;
      const y = burstY + Math.sin(angle) * radius * 0.68 * wobble + burstProgress * height * 0.025;

      context.fillStyle = spark % 3 === 0 ? "#ffffff" : firework.color;
      context.beginPath();
      context.arc(x, y, firework.big ? 3.2 : 2.2, 0, Math.PI * 2);
      context.fill();
    }
  });
  context.restore();
}

function drawFinalFpsForestPowerUp(context, width, height, horizon, timestamp) {
  const powerUp = finalFpsState.forestPowerUp;

  if (!powerUp || powerUp.collected || finalFpsState.infiniteAmmo) {
    return;
  }

  const projection = projectFinalFpsForestGroundPoint(powerUp.x, powerUp.y, width, height, horizon);

  if (!projection || projection.x < -120 || projection.x > width + 120 || projection.y < -120 || projection.y > height + 120) {
    return;
  }

  const bob = Math.sin(timestamp / 260) * Math.max(4, height * 0.012);
  const size = Math.max(34, Math.min(96, height * 0.76 / projection.depth));
  const x = projection.x;
  const y = projection.y - size * 1.15 + bob;
  const spin = timestamp / 420;

  context.save();
  context.translate(x, y);
  context.rotate(spin);
  context.globalAlpha = Math.max(0.34, Math.min(1, (18 - projection.depth) / 6));
  const glow = context.createRadialGradient(0, 0, size * 0.1, 0, 0, size * 0.92);
  glow.addColorStop(0, "rgba(112, 255, 128, 0.42)");
  glow.addColorStop(1, "rgba(112, 255, 128, 0)");
  context.fillStyle = glow;
  context.beginPath();
  context.arc(0, 0, size * 0.92, 0, Math.PI * 2);
  context.fill();

  context.strokeStyle = "#9dff72";
  context.lineWidth = Math.max(3, size * 0.075);
  context.lineCap = "round";
  for (let loop = 0; loop < 2; loop += 1) {
    const offset = loop * Math.PI;
    context.beginPath();
    for (let step = 0; step <= 44; step += 1) {
      const t = (step / 44) * Math.PI * 2;
      const px = Math.sin(t) * size * 0.34;
      const py = Math.sin(t + offset) * Math.cos(t) * size * 0.22;
      if (step === 0) {
        context.moveTo(px, py);
      } else {
        context.lineTo(px, py);
      }
    }
    context.stroke();
  }

  context.fillStyle = "#eaffdc";
  context.font = `900 ${Math.max(11, size * 0.22)}px monospace`;
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.rotate(-spin);
  context.fillText("∞", 0, 0);
  context.restore();
}

function drawFinalFpsForestBoss(context, width, height, horizon, timestamp) {
  const boss = finalFpsState.forestBoss;

  if (!boss) {
    return;
  }

  const isAttacking = boss.state === "attack";
  const isJumping = boss.state === "jump" || boss.state === "shockwave";
  const isStunned = boss.state === "stunned" || boss.state === "getup";
  const isDead = boss.state === "death";
  const image = isDead
    ? loadFinalFpsForestBossDeathImage()
    : isStunned
    ? loadFinalFpsForestBossStunImage()
    : isAttacking
    ? loadFinalFpsForestBossAttackImage()
    : isJumping
      ? loadFinalFpsForestBossJumpImage()
      : loadFinalFpsForestBossImage();

  if (!image.complete || image.naturalWidth === 0 || image.naturalHeight === 0) {
    return;
  }

  const projection = projectFinalFpsForestGroundPoint(boss.x, boss.y, width, height, horizon);

  if (!projection || projection.x < -width * 0.5 || projection.x > width * 1.5 || projection.y < -height * 0.35) {
    return;
  }

  const depthAlpha = Math.max(0.18, Math.min(1, (42 - projection.depth) / 16));
  const attackScale = isAttacking ? 1.42 : 1;
  const baseHeight = Math.max(110, Math.min(height * 0.94, (height * FINAL_FPS_FOREST_BOSS_SCALE * attackScale) / Math.max(1.4, projection.depth)));
  const baseWidth = baseHeight * (isAttacking ? 0.94 : isStunned ? 0.92 : 0.76);
  const walkFrame = Math.floor(boss.step) % FINAL_FPS_FOREST_BOSS_WALK_FRAMES;
  const idleFrame = Math.floor(boss.step) % FINAL_FPS_FOREST_BOSS_IDLE_FRAMES;
  const attackFrame = Math.floor(boss.step) % FINAL_FPS_FOREST_BOSS_ATTACK_SHEET_FRAMES;
  const jumpFrame = getFinalFpsForestBossJumpFrame(boss, timestamp);
  const stunFrame = getFinalFpsForestBossStunFrame(boss, timestamp);
  const deathFrame = getFinalFpsForestBossDeathFrame(boss, timestamp);
  const isWalking = boss.state === "walk";
  const spawnFade = Math.min(1, Math.max(0, (timestamp - boss.createdAt) / 820));
  const bob = isWalking
    ? Math.sin(walkFrame * Math.PI * 0.66) * baseHeight * 0.025
    : Math.sin(timestamp / 520) * baseHeight * 0.018;
  const squash = isWalking ? 1 + Math.sin(walkFrame * Math.PI * 0.66) * 0.025 : 1 + Math.sin(timestamp / 600) * 0.018;
  const entranceScale = 0.86 + spawnFade * 0.14;
  const drawX = projection.x;
  const jumpLift = getFinalFpsForestBossJumpLift(boss, timestamp, baseHeight);
  const feetY = projection.y + bob + (isAttacking ? baseHeight * 0.24 : 0) - jumpLift;

  context.save();
  context.globalAlpha = depthAlpha * spawnFade * getFinalFpsForestBossDeathAlpha(boss, timestamp);
  context.translate(drawX, feetY);
  context.scale(entranceScale, squash * entranceScale);
  drawFinalFpsMushroomBossShadow(context, baseWidth, baseHeight);
  if (isDead) {
    drawFinalFpsMushroomBossDeathFrame(context, image, baseWidth * 1.08, baseHeight, deathFrame);
  } else if (isStunned) {
    drawFinalFpsMushroomBossStunFrame(context, image, baseWidth, baseHeight, stunFrame);
  } else if (isAttacking) {
    drawFinalFpsMushroomBossAttackFrame(context, image, baseWidth, baseHeight, attackFrame);
  } else if (isJumping) {
    drawFinalFpsMushroomBossJumpFrame(context, image, baseWidth * 1.05, baseHeight, jumpFrame);
  } else {
    drawFinalFpsMushroomBossFrame(context, image, baseWidth, baseHeight, isWalking ? FINAL_FPS_FOREST_BOSS_IDLE_FRAMES + walkFrame : idleFrame);
  }
  context.restore();
}

function drawFinalFpsForestBossScorePopups(context, width, height, horizon, timestamp) {
  if (!finalFpsState.forestBossScorePopups.length) {
    return;
  }

  context.save();
  finalFpsState.forestBossScorePopups.forEach((popup) => {
    const age = timestamp - popup.createdAt;
    const projection = projectFinalFpsForestWorldPoint(popup.x, popup.y, 1.65, width, height, horizon);

    if (!projection || projection.depth <= 0.16) {
      return;
    }

    const intro = Math.min(1, age / 180);
    const outro = age > 980 ? Math.max(0, 1 - (age - 980) / 470) : 1;
    const alpha = easeOutCubic(intro) * outro;
    const lift = easeOutCubic(Math.min(1, age / 920)) * Math.max(34, height * 0.08);
    const scale = Math.max(0.74, Math.min(1.35, 8.5 / Math.max(4, projection.depth))) * (1 + Math.sin(age / 60) * 0.035);
    const x = projection.x;
    const y = projection.y - lift;

    context.save();
    context.globalAlpha = alpha;
    context.translate(x, y);
    context.scale(scale, scale);
    context.strokeStyle = "rgba(255, 255, 255, 0.95)";
    context.lineWidth = 4;
    context.beginPath();
    context.moveTo(-38, -28);
    context.lineTo(-12, -9);
    context.moveTo(38, -28);
    context.lineTo(12, -9);
    context.moveTo(-38, 28);
    context.lineTo(-12, 9);
    context.moveTo(38, 28);
    context.lineTo(12, 9);
    context.stroke();
    context.font = "900 28px 'Courier New', monospace";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.lineWidth = 5;
    context.strokeStyle = "rgba(0, 0, 0, 0.78)";
    context.fillStyle = "#ffd84a";
    context.shadowColor = "rgba(255, 216, 74, 0.9)";
    context.shadowBlur = 14;
    context.strokeText(popup.text, 0, 4);
    context.fillText(popup.text, 0, 4);
    context.restore();
  });
  context.restore();
}

function getFinalFpsForestBossDeathFrame(boss, timestamp) {
  if (boss.state !== "death") {
    return 0;
  }

  const progress = Math.min(0.999, (timestamp - boss.stateStartedAt) / FINAL_FPS_FOREST_BOSS_DEATH_MS);
  return Math.floor(progress * FINAL_FPS_FOREST_BOSS_DEATH_SHEET_FRAMES);
}

function getFinalFpsForestBossDeathAlpha(boss, timestamp) {
  if (boss.state !== "death") {
    return 1;
  }

  const age = timestamp - boss.stateStartedAt;
  const fadeStart = FINAL_FPS_FOREST_BOSS_DEATH_MS + FINAL_FPS_FOREST_BOSS_DEATH_HOLD_MS;

  if (age <= fadeStart) {
    return 1;
  }

  return Math.max(0, 1 - (age - fadeStart) / FINAL_FPS_FOREST_BOSS_DEATH_FADE_MS);
}

function getFinalFpsForestBossStunFrame(boss, timestamp) {
  if (boss.state === "getup") {
    const progress = Math.min(0.999, (timestamp - boss.stateStartedAt) / FINAL_FPS_FOREST_BOSS_GETUP_MS);
    return FINAL_FPS_FOREST_BOSS_STUN_FRAMES + Math.floor(progress * FINAL_FPS_FOREST_BOSS_GETUP_FRAMES);
  }

  return Math.floor((timestamp - boss.stateStartedAt) / 170) % FINAL_FPS_FOREST_BOSS_STUN_FRAMES;
}

function getFinalFpsForestBossJumpFrame(boss, timestamp) {
  if (boss.state === "shockwave") {
    return 3;
  }

  const progress = finalFpsState.forestBossJumpPromptActive
    ? boss.jumpFreezeProgress || 0.58
    : Math.min(1, (timestamp - boss.stateStartedAt) / FINAL_FPS_FOREST_BOSS_JUMP_MS);

  if (progress < 0.22) {
    return 0;
  }
  if (progress < 0.42) {
    return 1;
  }
  if (progress < 0.82) {
    return 2;
  }
  return 3;
}

function getFinalFpsForestBossJumpLift(boss, timestamp, baseHeight) {
  if (boss.state !== "jump" && boss.state !== "shockwave") {
    return 0;
  }

  if (boss.state === "shockwave") {
    return 0;
  }

  const progress = finalFpsState.forestBossJumpPromptActive
    ? boss.jumpFreezeProgress || 0.58
    : Math.min(1, (timestamp - boss.stateStartedAt) / FINAL_FPS_FOREST_BOSS_JUMP_MS);

  return Math.sin(progress * Math.PI) * baseHeight * 0.34;
}

function drawFinalFpsMushroomBossLauncher(context, width, height, timestamp) {
  const recoil = Math.max(0, 1 - ((timestamp - (finalFpsState.forestBoss?.lastRocketAt || 0)) / 180));
  const launcherY = -height * 0.48 + recoil * height * 0.018;
  const barrelLength = width * 0.78;
  const barrelHeight = height * 0.13;

  context.save();
  context.translate(width * 0.05, launcherY);
  context.rotate(Math.sin(timestamp / 280) * 0.035);
  context.fillStyle = "#1d2324";
  context.strokeStyle = "#050606";
  context.lineWidth = Math.max(3, width * 0.035);
  context.fillRect(-barrelLength * 0.5, -barrelHeight * 0.5, barrelLength, barrelHeight);
  context.strokeRect(-barrelLength * 0.5, -barrelHeight * 0.5, barrelLength, barrelHeight);
  context.fillStyle = "#3f4b4c";
  context.fillRect(-barrelLength * 0.42, -barrelHeight * 0.25, barrelLength * 0.58, barrelHeight * 0.24);
  context.fillStyle = "#242b2d";
  context.fillRect(barrelLength * 0.28, -barrelHeight * 0.64, barrelLength * 0.18, barrelHeight * 1.28);
  context.fillStyle = "#78512b";
  context.fillRect(-barrelLength * 0.18, barrelHeight * 0.46, barrelLength * 0.22, height * 0.11);

  if (recoil > 0) {
    context.globalAlpha = recoil;
    context.fillStyle = "#ffcf5f";
    context.beginPath();
    context.moveTo(barrelLength * 0.54, 0);
    context.lineTo(barrelLength * (0.72 + recoil * 0.08), -barrelHeight * 0.9);
    context.lineTo(barrelLength * (0.68 + recoil * 0.08), barrelHeight * 0.9);
    context.closePath();
    context.fill();
  }
  context.restore();
}

function drawFinalFpsForestBossRockets(context, width, height, horizon, timestamp) {
  const objects = [
    ...finalFpsState.forestBossMuzzleBursts.map((burst) => ({ ...burst, type: "burst" })),
    ...finalFpsState.forestBossRockets.map((rocket) => ({ ...rocket, type: "rocket" })),
    ...finalFpsState.forestBossLandingBursts.map((burst) => ({ ...burst, type: "landing" })),
  ];

  if (!objects.length) {
    return;
  }

  context.save();
  objects
    .map((object) => {
      const worldZ = object.type === "rocket" ? object.z || 1.1 : object.type === "landing" ? 0.08 : 1.05;
      const projection = projectFinalFpsForestWorldPoint(object.x, object.y, worldZ, width, height, horizon);
      return projection ? { ...object, projection } : null;
    })
    .filter(Boolean)
    .filter((object) => object.projection.depth > 0.16 && object.projection.depth < 34)
    .sort((a, b) => b.projection.depth - a.projection.depth)
    .forEach((object) => {
      if (object.type === "burst") {
        drawFinalFpsForestBossMuzzleBurst(context, object, timestamp);
      } else if (object.type === "landing") {
        drawFinalFpsForestBossLandingBurst(context, object, timestamp);
      } else {
        drawFinalFpsForestBossRocket(context, object, timestamp);
      }
    });
  context.restore();
}

function drawFinalFpsForestBossShockwave(context, width, height, horizon, timestamp) {
  const shockwave = finalFpsState.forestBossShockwave;

  if (!shockwave) {
    return;
  }

  const projection = projectFinalFpsForestGroundPoint(shockwave.x, shockwave.y, width, height, horizon);

  if (!projection || projection.depth <= 0.12 || projection.depth > 24) {
    return;
  }

  const age = timestamp - shockwave.createdAt;
  const widthScale = Math.max(120, Math.min(width * 1.1, width * 0.82 / Math.max(0.85, projection.depth * 0.14)));
  const heightScale = Math.max(12, Math.min(46, height * 0.16 / Math.max(1.1, projection.depth)));
  const pulse = Math.sin(age / 70) * 0.18 + 0.82;

  context.save();
  context.translate(projection.x, projection.y);
  context.globalAlpha = Math.max(0.28, Math.min(0.9, (24 - projection.depth) / 13));
  context.strokeStyle = "rgba(255, 255, 255, 0.84)";
  context.lineWidth = Math.max(4, heightScale * 0.22);
  context.beginPath();
  context.ellipse(0, 0, widthScale * pulse, heightScale, 0, Math.PI * 1.02, Math.PI * 1.98);
  context.stroke();
  context.strokeStyle = "rgba(170, 150, 120, 0.46)";
  context.lineWidth *= 0.58;
  context.beginPath();
  context.ellipse(0, heightScale * 0.22, widthScale * 0.82, heightScale * 0.72, 0, Math.PI * 1.04, Math.PI * 1.96);
  context.stroke();
  context.restore();
}

function drawFinalFpsForestBossRocket(context, rocket, timestamp) {
  const size = Math.max(14, Math.min(76, 310 / Math.max(1.05, rocket.projection.depth)));
  const age = timestamp - rocket.createdAt;
  const pulse = Math.sin(timestamp / 70) * 0.15;

  context.save();
  context.translate(rocket.projection.x, rocket.projection.y);
  context.globalAlpha = Math.max(0.25, Math.min(1, (34 - rocket.projection.depth) / 18));
  context.fillStyle = "rgba(105, 105, 96, 0.42)";
  for (let puff = 0; puff < 4; puff += 1) {
    const offset = (puff + 1) * size * 0.26;
    const wobble = Math.sin(age / 90 + puff) * size * 0.08;
    context.beginPath();
    context.arc(wobble, offset, size * (0.16 + puff * 0.035), 0, Math.PI * 2);
    context.fill();
  }
  context.rotate(Math.sin(age / 120) * 0.14);
  context.fillStyle = "#2a2f31";
  context.strokeStyle = "#050606";
  context.lineWidth = Math.max(1.5, size * 0.11);
  context.beginPath();
  context.moveTo(0, -size * 0.54);
  context.lineTo(size * 0.34, size * 0.24);
  context.lineTo(size * 0.18, size * 0.48);
  context.lineTo(-size * 0.18, size * 0.48);
  context.lineTo(-size * 0.34, size * 0.24);
  context.closePath();
  context.fill();
  context.stroke();
  context.fillStyle = "#7d8b8d";
  context.fillRect(-size * 0.16, -size * 0.18, size * 0.32, size * 0.48);
  context.fillStyle = "#ffcf5f";
  context.beginPath();
  context.ellipse(0, size * 0.58, size * (0.2 + pulse * 0.08), size * 0.26, 0, 0, Math.PI * 2);
  context.fill();
  context.restore();
}

function drawFinalFpsForestBossMuzzleBurst(context, burst, timestamp) {
  const age = timestamp - burst.createdAt;
  const projection = burst.projection;
  const progress = Math.min(1, age / 720);
  const size = Math.max(18, Math.min(82, 320 / Math.max(1.1, projection.depth))) * (0.85 + progress * 1.1);

  context.save();
  context.globalAlpha = (1 - progress) * 0.84;
  context.translate(projection.x, projection.y - size * 0.35);
  context.fillStyle = "#ffcf5f";
  context.beginPath();
  context.arc(0, 0, size * 0.34, 0, Math.PI * 2);
  context.fill();
  context.fillStyle = "rgba(190, 180, 160, 0.55)";
  for (let puff = 0; puff < 8; puff += 1) {
    const angle = puff * 1.25 + progress * 0.8;
    context.beginPath();
    context.arc(Math.cos(angle) * size * progress, Math.sin(angle) * size * progress * 0.55, size * (0.12 + puff * 0.01), 0, Math.PI * 2);
    context.fill();
  }
  context.restore();
}

function drawFinalFpsForestBossLandingBurst(context, burst, timestamp) {
  const age = timestamp - burst.createdAt;
  const progress = Math.min(1, age / 820);
  const projection = burst.projection;
  const size = Math.max(28, Math.min(130, 520 / Math.max(1.05, projection.depth))) * (0.8 + progress * 1.45);

  context.save();
  context.translate(projection.x, projection.y);
  context.globalAlpha = (1 - progress) * 0.78;
  context.fillStyle = "rgba(200, 170, 125, 0.72)";
  for (let spike = 0; spike < 11; spike += 1) {
    const angle = Math.PI + (spike / 10) * Math.PI;
    const radius = size * (0.22 + progress * 0.7);
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius * 0.24;
    context.beginPath();
    context.moveTo(x * 0.52, y * 0.52);
    context.lineTo(x * 0.88, y * 0.88 - size * (0.18 + progress * 0.12));
    context.lineTo(x * 1.18, y * 1.06);
    context.closePath();
    context.fill();
  }
  context.fillStyle = "rgba(210, 196, 172, 0.58)";
  for (let puff = 0; puff < 14; puff += 1) {
    const angle = (puff / 14) * Math.PI * 2;
    const radius = size * (0.18 + progress * 0.72);
    context.beginPath();
    context.arc(Math.cos(angle) * radius, Math.sin(angle) * radius * 0.25, size * (0.06 + (puff % 3) * 0.018), 0, Math.PI * 2);
    context.fill();
  }
  context.restore();
}

function drawFinalFpsMushroomBossShadow(context, width, height) {
  context.save();
  context.globalAlpha = 0.28;
  context.fillStyle = "#111111";
  context.beginPath();
  context.ellipse(0, -height * 0.02, width * 0.36, height * 0.07, 0, 0, Math.PI * 2);
  context.fill();
  context.restore();
}

function drawFinalFpsMushroomBossFrame(context, image, width, height, frame) {
  const frameWidth = image.naturalWidth / FINAL_FPS_FOREST_BOSS_SHEET_FRAMES;
  const frameHeight = image.naturalHeight;

  context.imageSmoothingEnabled = false;
  context.drawImage(
    image,
    frame * frameWidth,
    0,
    frameWidth,
    frameHeight,
    -width / 2,
    -height,
    width,
    height,
  );
}

function drawFinalFpsMushroomBossAttackFrame(context, image, width, height, frame) {
  const frameWidth = image.naturalWidth / FINAL_FPS_FOREST_BOSS_ATTACK_SHEET_FRAMES;
  const frameHeight = image.naturalHeight;

  context.imageSmoothingEnabled = false;
  context.drawImage(
    image,
    frame * frameWidth,
    0,
    frameWidth,
    frameHeight,
    -width / 2,
    -height,
    width,
    height,
  );
}

function drawFinalFpsMushroomBossJumpFrame(context, image, width, height, frame) {
  const frameWidth = image.naturalWidth / FINAL_FPS_FOREST_BOSS_JUMP_SHEET_FRAMES;
  const frameHeight = image.naturalHeight;

  context.imageSmoothingEnabled = false;
  context.drawImage(
    image,
    frame * frameWidth,
    0,
    frameWidth,
    frameHeight,
    -width / 2,
    -height,
    width,
    height,
  );
}

function drawFinalFpsMushroomBossStunFrame(context, image, width, height, frame) {
  const frameWidth = image.naturalWidth / FINAL_FPS_FOREST_BOSS_STUN_SHEET_FRAMES;
  const frameHeight = image.naturalHeight;

  context.imageSmoothingEnabled = false;
  context.drawImage(
    image,
    frame * frameWidth,
    0,
    frameWidth,
    frameHeight,
    -width / 2,
    -height,
    width,
    height,
  );
}

function drawFinalFpsMushroomBossDeathFrame(context, image, width, height, frame) {
  const frameWidth = image.naturalWidth / FINAL_FPS_FOREST_BOSS_DEATH_SHEET_FRAMES;
  const frameHeight = image.naturalHeight;

  context.imageSmoothingEnabled = false;
  context.drawImage(
    image,
    frame * frameWidth,
    0,
    frameWidth,
    frameHeight,
    -width / 2,
    -height,
    width,
    height,
  );
}

function drawFinalFpsForestWaypoint(context, width, height, horizon, timestamp) {
  const waypoint = finalFpsState.forestWaypoint;

  if (!waypoint) {
    return;
  }

  const projection = projectFinalFpsForestGroundPoint(0, waypoint.worldY, width, height, horizon);

  if (!projection || projection.x < -width * 0.35 || projection.x > width * 1.35) {
    return;
  }

  const reveal = Math.min(1, Math.max(0, (timestamp - waypoint.createdAt) / FINAL_FPS_FOREST_WAYPOINT_REVEAL_MS));
  const easedReveal = easeOutCubic(reveal);
  const distanceAlpha = Math.max(0.2, Math.min(1, (32 - projection.depth) / 12));
  const alpha = easedReveal * distanceAlpha;
  const pulse = Math.sin(timestamp / 190) * 0.5 + 0.5;
  const dotRadius = Math.max(5, Math.min(12, height * 0.16 / Math.max(1.2, projection.depth)));
  const markerY = projection.y - Math.max(42, dotRadius * 7);
  const text = `${waypoint.remainingMeters}m`;

  context.save();
  context.globalAlpha = alpha;
  context.translate(projection.x, markerY - (1 - easedReveal) * height * 0.08);

  const glow = context.createRadialGradient(0, 0, 1, 0, 0, dotRadius * (3.2 + pulse * 0.45));
  glow.addColorStop(0, "rgba(255, 229, 74, 0.42)");
  glow.addColorStop(1, "rgba(255, 229, 74, 0)");
  context.fillStyle = glow;
  context.beginPath();
  context.arc(0, 0, dotRadius * 3.4, 0, Math.PI * 2);
  context.fill();

  context.fillStyle = "#ffd84a";
  context.beginPath();
  context.arc(0, 0, dotRadius * (1 + pulse * 0.08), 0, Math.PI * 2);
  context.fill();

  context.strokeStyle = "rgba(255, 255, 255, 0.86)";
  context.lineWidth = Math.max(1.5, dotRadius * 0.2);
  context.beginPath();
  context.arc(0, 0, dotRadius * 1.22, 0, Math.PI * 2);
  context.stroke();

  context.fillStyle = "#ffd84a";
  context.font = `900 ${Math.max(13, dotRadius * 1.35)}px monospace`;
  context.textAlign = "left";
  context.textBaseline = "middle";
  context.lineWidth = Math.max(3, dotRadius * 0.32);
  context.strokeStyle = "rgba(0, 0, 0, 0.72)";
  context.strokeText(text, dotRadius * 2.1, 0);
  context.fillText(text, dotRadius * 2.1, 0);
  context.restore();
}

function drawFinalFpsForestWalls(context, width, height, horizon) {
  const player = finalFpsState.player;
  const currentSlot = Math.floor(player.y / 3.2);
  const wallSegments = [];
  const wallDistance = 8.35;
  const wallHeight = 3.6;

  for (let slot = currentSlot - 26; slot < currentSlot + 54; slot += 1) {
    const y1 = slot * 3.2;
    const y2 = (slot + 1) * 3.2;

    for (let side = -1; side <= 1; side += 2) {
      const x = side * wallDistance;
      const bottomNear = projectFinalFpsForestWorldPoint(x, y1, 0, width, height, horizon);
      const bottomFar = projectFinalFpsForestWorldPoint(x, y2, 0, width, height, horizon);
      const topFar = projectFinalFpsForestWorldPoint(x, y2, wallHeight, width, height, horizon);
      const topNear = projectFinalFpsForestWorldPoint(x, y1, wallHeight, width, height, horizon);

      if (!bottomNear || !bottomFar || !topFar || !topNear) {
        continue;
      }

      wallSegments.push({
        points: [bottomNear, bottomFar, topFar, topNear],
        depth: (bottomNear.depth + bottomFar.depth) / 2,
        side,
        seed: finalFpsHash(slot * 4.13 + side * 10.2),
      });
    }
  }

  context.save();
  wallSegments
    .filter((segment) => segment.depth > 0.25 && segment.depth < 48)
    .sort((a, b) => b.depth - a.depth)
    .forEach((segment) => {
      const shade = Math.max(0.42, Math.min(0.82, 1 - segment.depth * 0.018));
      const base = Math.floor(118 * shade);
      context.globalAlpha = Math.max(0.18, Math.min(0.82, (42 - segment.depth) / 20));
      context.fillStyle = `rgb(${base}, ${base + 4}, ${base - 8})`;
      context.beginPath();
      segment.points.forEach((point, index) => {
        if (index === 0) {
          context.moveTo(point.x, point.y);
        } else {
          context.lineTo(point.x, point.y);
        }
      });
      context.closePath();
      context.fill();

      context.strokeStyle = `rgba(42, 46, 38, ${0.18 + segment.seed * 0.16})`;
      context.lineWidth = Math.max(1, 3 / Math.max(1, segment.depth * 0.22));
      context.beginPath();
      context.moveTo(segment.points[0].x, segment.points[0].y);
      context.lineTo(segment.points[1].x, segment.points[1].y);
      context.moveTo(segment.points[3].x, segment.points[3].y);
      context.lineTo(segment.points[2].x, segment.points[2].y);
      context.stroke();
    });
  context.restore();
}

function drawFinalFpsForestFog(context, width, height, horizon) {
  context.save();

  const hazeTop = Math.max(0, horizon - height * 0.08);
  const horizonFog = context.createLinearGradient(0, hazeTop, 0, Math.min(height, horizon + height * 0.2));
  horizonFog.addColorStop(0, "rgba(126, 199, 154, 0)");
  horizonFog.addColorStop(0.46, "rgba(126, 199, 154, 0.24)");
  horizonFog.addColorStop(1, "rgba(126, 199, 154, 0)");
  context.fillStyle = horizonFog;
  context.fillRect(0, hazeTop, width, height * 0.3);

  const leftFog = context.createLinearGradient(0, 0, width * 0.34, 0);
  leftFog.addColorStop(0, "rgba(75, 166, 77, 0.48)");
  leftFog.addColorStop(0.58, "rgba(75, 166, 77, 0.16)");
  leftFog.addColorStop(1, "rgba(75, 166, 77, 0)");
  context.fillStyle = leftFog;
  context.fillRect(0, horizon - height * 0.1, width * 0.35, height);

  const rightFog = context.createLinearGradient(width, 0, width * 0.66, 0);
  rightFog.addColorStop(0, "rgba(75, 166, 77, 0.48)");
  rightFog.addColorStop(0.58, "rgba(75, 166, 77, 0.16)");
  rightFog.addColorStop(1, "rgba(75, 166, 77, 0)");
  context.fillStyle = rightFog;
  context.fillRect(width * 0.65, horizon - height * 0.1, width * 0.35, height);

  context.restore();
}

function drawFinalFpsForestPath(context, width, height, horizon) {
  const player = finalFpsState.player;
  const startSlot = Math.floor((player.y - FINAL_FPS_FOREST_VIEW_DISTANCE) / 1.25);
  const endSlot = Math.ceil((player.y + FINAL_FPS_FOREST_VIEW_DISTANCE) / 1.25);
  const tiles = [];

  for (let slot = startSlot; slot < endSlot; slot += 1) {
    const y1 = slot * 1.25;
    const y2 = (slot + 1) * 1.25;
    const tile = getFinalFpsForestPathTile(
      [
        [-FINAL_FPS_FOREST_PATH_HALF_WIDTH, y1],
        [FINAL_FPS_FOREST_PATH_HALF_WIDTH, y1],
        [FINAL_FPS_FOREST_PATH_HALF_WIDTH, y2],
        [-FINAL_FPS_FOREST_PATH_HALF_WIDTH, y2],
      ],
      width,
      height,
      horizon,
    );

    if (tile) {
      tiles.push(tile);
    }
  }

  context.save();
  tiles
    .sort((a, b) => b.depth - a.depth)
    .forEach((tile) => {
      const shade = Math.max(0.42, Math.min(1, 1 - tile.depth * 0.018));
      context.fillStyle = `rgb(${Math.floor(121 * shade)}, ${Math.floor(76 * shade)}, ${Math.floor(38 * shade)})`;
      context.beginPath();
      tile.points.forEach((point, index) => {
        if (index === 0) {
          context.moveTo(point.x, point.y);
        } else {
          context.lineTo(point.x, point.y);
        }
      });
      context.closePath();
      context.fill();
    });

  context.strokeStyle = "rgba(32, 24, 14, 0.78)";
  context.lineWidth = 2;
  tiles.forEach((tile) => {
    if (tile.points.length < 4) {
      context.strokeStyle = "rgba(32, 24, 14, 0.28)";
      context.beginPath();
      tile.points.forEach((point, index) => {
        if (index === 0) {
          context.moveTo(point.x, point.y);
        } else {
          context.lineTo(point.x, point.y);
        }
      });
      context.closePath();
      context.stroke();
      return;
    }

    const [leftNear, rightNear, rightFar, leftFar] = tile.points;
    context.strokeStyle = "rgba(32, 24, 14, 0.78)";
    context.beginPath();
    context.moveTo(leftNear.x, leftNear.y);
    context.lineTo(leftFar.x, leftFar.y);
    context.moveTo(rightNear.x, rightNear.y);
    context.lineTo(rightFar.x, rightFar.y);
    context.stroke();
  });
  context.restore();
}

function drawFinalFpsForestProps(context, width, height, horizon, timestamp) {
  const player = finalFpsState.player;
  const currentSlot = Math.floor(player.y / 2.65);
  const props = [];

  for (let slot = currentSlot - 30; slot < currentSlot + 54; slot += 1) {
    for (let side = -1; side <= 1; side += 2) {
      for (let lane = 0; lane < 10; lane += 1) {
        const seed = finalFpsHash(slot * 19.17 + side * 3.41 + lane * 11.83);
        const x = side * (1.08 + lane * 0.76 + seed * 0.82);
        const y = slot * 2.65 + finalFpsHash(slot * 8.33 + side + lane * 4.7) * 2.2;
        const typeRoll = finalFpsHash(slot * 4.71 + side * 12.9 + lane * 7.2);
        const type =
          lane >= 2 || typeRoll < 0.7
            ? "tree"
            : typeRoll > 0.94
              ? "puddle"
              : typeRoll > 0.83
                ? "mushroom"
                : typeRoll > 0.7
                  ? "rock"
                  : "bush";
        props.push({ x, y, type, seed, depth: getFinalFpsWorldDepth(x, y) });
      }
    }

    if (slot % 2 === 0) {
      const seed = finalFpsHash(slot * 2.41);
      const centerX = clampFinalFpsForestPropXOffPath((seed - 0.5) * 7.8, seed);
      const centerY = slot * 2.65 + 1.2;
      const typeRoll = finalFpsHash(slot * 5.13 + 0.77);
      props.push({
        x: centerX,
        y: centerY,
        type: typeRoll > 0.82 ? "mushroom" : typeRoll > 0.62 ? "bush" : "tree",
        seed,
        depth: getFinalFpsWorldDepth(centerX, centerY),
      });
    }
  }

  context.save();
  props
    .filter((prop) => prop.depth > 0.2 && prop.depth < 42)
    .sort((a, b) => b.depth - a.depth)
    .forEach((prop) => {
      const projection = projectFinalFpsForestGroundPoint(prop.x, prop.y, width, height, horizon);

      if (!projection || projection.x < -260 || projection.x > width + 260 || projection.y < -180 || projection.y > height + 210) {
        return;
      }

      const scale = Math.max(0.22, Math.min(4.6, 3.8 / projection.depth));
      const base =
        prop.type === "tree" ? 285 : prop.type === "bush" ? 82 : prop.type === "rock" ? 54 : prop.type === "mushroom" ? 64 : 86;
      const baseSize = base * scale * (0.9 + prop.seed * 0.52);
      const alpha = Math.max(0.04, Math.min(1, (34 - projection.depth) / 13));

      context.globalAlpha = alpha;
      if (prop.type === "tree") {
        drawFinalFpsForestTree(context, projection.x, projection.y, baseSize, prop.seed);
      } else if (prop.type === "bush") {
        drawFinalFpsForestBush(context, projection.x, projection.y, baseSize, prop.seed);
      } else if (prop.type === "rock") {
        drawFinalFpsForestRock(context, projection.x, projection.y, baseSize, prop.seed);
      } else if (prop.type === "mushroom") {
        drawFinalFpsForestMushroom(context, projection.x, projection.y, baseSize, prop.seed);
      } else {
        drawFinalFpsForestPuddle(context, projection.x, projection.y, baseSize, prop.seed);
      }
    });
  context.restore();
}

function drawFinalFpsForestTree(context, x, y, size, seed) {
  const trunkWidth = Math.max(4, size * 0.12);
  const trunkHeight = size * 0.88;

  context.fillStyle = "#5b361d";
  context.fillRect(x - trunkWidth / 2, y - trunkHeight, trunkWidth, trunkHeight);
  context.fillStyle = seed > 0.48 ? "#1d7a3f" : "#256b33";
  for (let layer = 0; layer < 3; layer += 1) {
    const layerSize = size * (0.96 - layer * 0.16);
    const layerY = y - trunkHeight - size * (0.05 + layer * 0.2);
    context.beginPath();
    context.moveTo(x - layerSize * 0.52, layerY + layerSize * 0.42);
    context.lineTo(x, layerY - layerSize * 0.48);
    context.lineTo(x + layerSize * 0.52, layerY + layerSize * 0.42);
    context.closePath();
    context.fill();
  }
  context.fillStyle = "rgba(178, 235, 134, 0.28)";
  context.fillRect(x - size * 0.12, y - trunkHeight - size * 0.62, Math.max(2, size * 0.04), size * 0.55);
}

function drawFinalFpsForestBush(context, x, y, size, seed) {
  context.fillStyle = seed > 0.5 ? "#2f923e" : "#3fa74c";
  for (let blob = 0; blob < 4; blob += 1) {
    const offset = (blob - 1.5) * size * 0.18;
    context.beginPath();
    context.arc(x + offset, y - size * (0.22 + blob % 2 * 0.08), size * (0.24 + blob * 0.015), 0, Math.PI * 2);
    context.fill();
  }
}

function drawFinalFpsForestRock(context, x, y, size, seed) {
  context.fillStyle = seed > 0.5 ? "#74766d" : "#5d6258";
  context.beginPath();
  context.ellipse(x, y - size * 0.18, size * 0.42, size * 0.25, seed * 0.5, 0, Math.PI * 2);
  context.fill();
  context.fillStyle = "rgba(255, 255, 255, 0.18)";
  context.beginPath();
  context.ellipse(x - size * 0.12, y - size * 0.28, size * 0.12, size * 0.05, -0.3, 0, Math.PI * 2);
  context.fill();
}

function drawFinalFpsForestMushroom(context, x, y, size, seed) {
  const stemWidth = Math.max(3, size * 0.14);
  const stemHeight = size * 0.34;
  const capWidth = size * 0.68;
  const capHeight = size * 0.38;

  context.fillStyle = "#ead7ae";
  context.fillRect(x - stemWidth / 2, y - stemHeight, stemWidth, stemHeight);
  context.fillStyle = seed > 0.5 ? "#c73d36" : "#8b4ac4";
  context.beginPath();
  context.ellipse(x, y - stemHeight, capWidth / 2, capHeight / 2, 0, Math.PI, Math.PI * 2);
  context.fill();
  context.fillStyle = "rgba(255, 245, 218, 0.88)";
  for (let dot = 0; dot < 3; dot += 1) {
    const dotSeed = finalFpsHash(seed * 20 + dot);
    context.beginPath();
    context.arc(x + (dotSeed - 0.5) * capWidth * 0.55, y - stemHeight - capHeight * (0.12 + dot * 0.04), Math.max(1.4, size * 0.035), 0, Math.PI * 2);
    context.fill();
  }
}

function drawFinalFpsForestPuddle(context, x, y, size, seed) {
  context.fillStyle = "rgba(46, 130, 203, 0.64)";
  context.beginPath();
  context.ellipse(x, y - size * 0.08, size * 0.48, size * 0.18, seed * 0.7, 0, Math.PI * 2);
  context.fill();
  context.fillStyle = "rgba(174, 227, 255, 0.42)";
  context.beginPath();
  context.ellipse(x - size * 0.08, y - size * 0.13, size * 0.22, size * 0.045, seed * 0.4, 0, Math.PI * 2);
  context.fill();
}

function clampFinalFpsForestPropXOffPath(x, seed) {
  const minDistance = FINAL_FPS_FOREST_PATH_HALF_WIDTH + 0.95;

  if (Math.abs(x) >= minDistance) {
    return x;
  }

  const side = x < 0 ? -1 : 1;
  return side * (minDistance + finalFpsHash(seed * 23.7) * 2.45);
}

function getFinalFpsForestPathTile(worldPoints, width, height, horizon) {
  const cameraPoints = worldPoints.map(([worldX, worldY]) => getFinalFpsForestCameraPoint(worldX, worldY));
  const clippedPoints = clipFinalFpsForestCameraPolygon(cameraPoints);

  if (clippedPoints.length < 3) {
    return null;
  }

  const points = clippedPoints
    .map((point) => projectFinalFpsForestCameraPoint(point, width, height, horizon))
    .filter(Boolean);

  if (points.length < 3) {
    return null;
  }

  return {
    points,
    depth: clippedPoints.reduce((total, point) => total + point.depth, 0) / clippedPoints.length,
  };
}

function getFinalFpsForestCameraPoint(worldX, worldY) {
  const player = finalFpsState.player;
  const relX = worldX - player.x;
  const relY = worldY - player.y;
  const forwardX = Math.cos(player.angle);
  const forwardY = Math.sin(player.angle);
  const rightX = Math.cos(player.angle + Math.PI / 2);
  const rightY = Math.sin(player.angle + Math.PI / 2);

  return {
    depth: relX * forwardX + relY * forwardY,
    side: relX * rightX + relY * rightY,
  };
}

function clipFinalFpsForestCameraPolygon(points) {
  const nearDepth = 0.08;
  const clipped = [];

  points.forEach((point, index) => {
    const next = points[(index + 1) % points.length];
    const pointInside = point.depth >= nearDepth;
    const nextInside = next.depth >= nearDepth;

    if (pointInside && nextInside) {
      clipped.push(next);
      return;
    }

    if (pointInside !== nextInside) {
      const ratio = (nearDepth - point.depth) / (next.depth - point.depth);
      const intersection = {
        depth: nearDepth,
        side: point.side + (next.side - point.side) * ratio,
      };

      clipped.push(intersection);
    }

    if (!pointInside && nextInside) {
      clipped.push(next);
    }
  });

  return clipped;
}

function projectFinalFpsForestCameraPoint(point, width, height, horizon) {
  if (point.depth <= 0.08) {
    return null;
  }

  const fov = Math.PI / 3;
  const projectionScale = width / fov;
  const x = width / 2 + (point.side / point.depth) * projectionScale;
  const y = horizon + Math.min(height - horizon + 120, height * 0.82 / point.depth);

  return { x, y, depth: point.depth };
}

function projectFinalFpsForestWorldPoint(worldX, worldY, worldZ, width, height, horizon) {
  const cameraPoint = getFinalFpsForestCameraPoint(worldX, worldY);

  if (cameraPoint.depth <= 0.16) {
    return null;
  }

  const projected = projectFinalFpsForestCameraPoint(cameraPoint, width, height, horizon);

  if (!projected) {
    return null;
  }

  projected.y -= (worldZ * height * 0.72) / cameraPoint.depth;
  return projected;
}

function projectFinalFpsForestGroundPoint(worldX, worldY, width, height, horizon) {
  const cameraPoint = getFinalFpsForestCameraPoint(worldX, worldY);

  if (cameraPoint.depth <= 0.16) {
    return null;
  }

  return projectFinalFpsForestCameraPoint(cameraPoint, width, height, horizon);
}

function getFinalFpsWorldDepth(worldX, worldY) {
  const player = finalFpsState.player;
  const relX = worldX - player.x;
  const relY = worldY - player.y;

  return relX * Math.cos(player.angle) + relY * Math.sin(player.angle);
}

function finalFpsHash(value) {
  const raw = Math.sin(value * 127.1 + 311.7) * 43758.5453;
  return raw - Math.floor(raw);
}

function drawFinalFpsBulletMarkStrip(context, hit, x, stripWidth, top, wallHeight, shade) {
  const coordinate = getFinalFpsWallCoordinate(hit);

  finalFpsState.bulletMarks.forEach((mark) => {
    if (mark.environment !== "room" || mark.wall !== hit.wall || Math.abs(mark.coordinate - coordinate) > 0.01) {
      return;
    }

    const age = performance.now() - mark.createdAt;
    const alpha = Math.max(0, 1 - age / FINAL_FPS_BULLET_MARK_MS);
    const markY = top + wallHeight * mark.verticalFraction;
    const radius = Math.max(2, Math.min(7, wallHeight * 0.012));

    context.fillStyle = `rgba(13, 8, 5, ${0.72 * alpha})`;
    context.beginPath();
    context.arc(x + stripWidth / 2, markY, radius, 0, Math.PI * 2);
    context.fill();
    context.fillStyle = `rgba(230, 208, 150, ${0.18 * alpha * shade})`;
    context.beginPath();
    context.arc(x + stripWidth / 2 - radius * 0.3, markY - radius * 0.25, radius * 0.42, 0, Math.PI * 2);
    context.fill();
  });
}

function drawFinalFpsRoomDetails(context, width, height, horizon) {
  drawFinalFpsDoorWarp(context, width, height);
  drawFinalFpsOpenDoor(context, width, height, horizon);
  drawFinalFpsFurniture(context, width, height, horizon);
  drawFinalFpsCeilingLight(context, width, height, horizon);
}

function createFinalFpsWallDecorations() {
  return [
    { wall: "north", center: FINAL_FPS_ROOM_SIZE * 0.5, halfWidth: 0.155, centerY: 0.43, imageKey: "mona", tilt: getFinalFpsRandomTilt() },
    { wall: "west", center: FINAL_FPS_ROOM_SIZE * 0.3, halfWidth: 0.2, centerY: 0.42, imageKey: "starry", tilt: getFinalFpsRandomTilt() },
    { wall: "south", center: FINAL_FPS_ROOM_SIZE * 0.35, halfWidth: 0.2, centerY: 0.43, imageKey: "garden", tilt: getFinalFpsRandomTilt() },
    { wall: "east", center: FINAL_FPS_ROOM_SIZE * 0.78, halfWidth: 0.155, centerY: 0.42, imageKey: "rain", tilt: getFinalFpsRandomTilt() },
    { wall: "north", center: FINAL_FPS_ROOM_SIZE * 0.18, halfWidth: 0.13, centerY: 0.38, imageKey: "boomtownLionsDen", tilt: getFinalFpsRandomTilt(), inspectable: true },
    { wall: "west", center: FINAL_FPS_ROOM_SIZE * 0.72, halfWidth: 0.13, centerY: 0.4, imageKey: "boomtownHydro", tilt: getFinalFpsRandomTilt(), inspectable: true },
    { wall: "south", center: FINAL_FPS_ROOM_SIZE * 0.78, halfWidth: 0.13, centerY: 0.4, imageKey: "boomtownSpectrum", tilt: getFinalFpsRandomTilt(), inspectable: true },
    { wall: "east", center: FINAL_FPS_ROOM_SIZE * 0.28, halfWidth: 0.13, centerY: 0.39, imageKey: "boomtownGrandCentral", tilt: getFinalFpsRandomTilt(), inspectable: true },
  ];
}

function getFinalFpsRandomTilt() {
  return -0.035 + Math.random() * 0.07;
}

function drawFinalFpsWallDecorationStrip(context, hit, x, stripWidth, top, wallHeight, wallTop, wallBottom, shade) {
  const coordinate = getFinalFpsWallCoordinate(hit);

  finalFpsState.wallDecorations.forEach((decoration) => {
    if (decoration.wall !== hit.wall || Math.abs(coordinate - decoration.center) > decoration.halfWidth) {
      return;
    }

    const imageAspect = getFinalFpsPaintingAspect(decoration.imageKey);
    const heightFraction = Math.max(0.16, Math.min(0.5, (decoration.halfWidth * 2) / imageAspect));
    const relative = (coordinate - decoration.center) / decoration.halfWidth;
    const decorationCenterY = decoration.centerY + relative * decoration.tilt;
    const decorationTop = Math.max(wallTop, top + wallHeight * (decorationCenterY - heightFraction / 2));
    const decorationBottom = Math.min(wallBottom, top + wallHeight * (decorationCenterY + heightFraction / 2));
    const decorationHeight = decorationBottom - decorationTop;

    if (decorationHeight <= 3) {
      return;
    }

    drawFinalFpsPaintingStrip(context, x, stripWidth, decorationTop, decorationHeight, relative, decoration.imageKey, shade);
  });
}

function drawFinalFpsInteractionLayer(context, width, height) {
  if (
    finalFpsState.environmentMode !== "room" ||
    finalFpsState.gunTutorialPhase ||
    finalFpsState.inspectedImageKey ||
    finalFpsState.tutorialPhase === "look" ||
    finalFpsState.tutorialPhase === "move" ||
    finalFpsState.tutorialPhase === "eyeOpening"
  ) {
    finalFpsState.activeInteraction = null;
    finalFpsState.interactionButtonRect = null;
    return;
  }

  const horizon = height * (0.48 + finalFpsState.player.pitch * 0.5);
  const candidates = getFinalFpsPaintingInteractions(width, height, horizon)
    .concat(getFinalFpsObjectInteractions(width, height, horizon))
    .filter((candidate) => candidate.distance < candidate.maxDistance)
    .filter((candidate) => Math.abs(candidate.angleOffset) < (candidate.aimTolerance || 0.18))
    .sort((a, b) => {
      const aAim = Math.abs(a.angleOffset);
      const bAim = Math.abs(b.angleOffset);
      return aAim - bAim || a.distance - b.distance;
    });

  const target = candidates[0] || null;
  finalFpsState.activeInteraction = target;
  finalFpsState.interactionButtonRect = null;

  if (!target) {
    return;
  }

  context.save();
  drawFinalFpsInteractionLabel(context, target);
  context.restore();
}

function getFinalFpsPaintingInteractions(width, height, horizon) {
  return finalFpsState.wallDecorations
    .map((decoration) => {
      const worldCenter = getFinalFpsWallWorldPoint(decoration.wall, decoration.center);
      const bounds = getFinalFpsWallDecorationBounds(decoration, width, height, horizon);

      if (!worldCenter || !bounds) {
        return null;
      }

      const player = finalFpsState.player;
      const dx = worldCenter.x - player.x;
      const dy = worldCenter.y - player.y;
      const distance = Math.hypot(dx, dy);
      const angleOffset = normalizeAngle(Math.atan2(dy, dx) - player.angle);

      return {
        type: "painting",
        label: decoration.inspectable && !finalFpsState.hasGun ? "Inspect" : "painting",
        inspectable: Boolean(decoration.inspectable && !finalFpsState.hasGun),
        imageKey: decoration.imageKey,
        points: bounds.points,
        screenX: bounds.centerX,
        screenY: bounds.centerY,
        distance,
        angleOffset,
        maxDistance: decoration.inspectable ? 1.0 : 0.82,
        aimTolerance: decoration.inspectable ? 0.2 : 0.16,
      };
    })
    .filter(Boolean);
}

function getFinalFpsObjectInteractions(width, height, horizon) {
  const furniture = finalFpsState.furniture;

  if (!furniture) {
    return [];
  }

  const plate = getFinalFpsObjectInteraction(
    furniture.x + furniture.width * 0.05,
    furniture.y - furniture.depth * 0.05,
    0.48,
    0.18,
    "plate",
    width,
    height,
    horizon,
  );
  const bong = getFinalFpsObjectInteraction(
    furniture.x - furniture.width * 0.18,
    furniture.y + furniture.depth * 0.02,
    0.64,
    0.2,
    "bong",
    width,
    height,
    horizon,
  );

  return [plate, bong].filter(Boolean);
}

function getFinalFpsObjectInteraction(worldX, worldY, heightOffset, size, label, width, height, horizon) {
  const center = getFinalFpsObjectPoint(worldX, worldY, heightOffset, width, height, horizon);
  const player = finalFpsState.player;

  if (!center) {
    return null;
  }

  const distance = Math.hypot(player.x - worldX, player.y - worldY);
  const angleOffset = normalizeAngle(Math.atan2(worldY - player.y, worldX - player.x) - player.angle);
  const halfWidth = Math.max(15, Math.min(52, center.scale * size * 0.06));
  const halfHeight = halfWidth * 0.8;

  return {
    type: label,
    label,
    points: [
      { x: center.x - halfWidth, y: center.y - halfHeight },
      { x: center.x + halfWidth, y: center.y - halfHeight },
      { x: center.x + halfWidth, y: center.y + halfHeight },
      { x: center.x - halfWidth, y: center.y + halfHeight },
    ],
    screenX: center.x,
    screenY: center.y,
    distance,
    maxDistance: 0.9,
    angleOffset,
    aimTolerance: 0.22,
  };
}

function drawFinalFpsInteractionOutline(context, target) {
  if (!target?.points?.length) {
    return;
  }

  context.save();
  context.strokeStyle = "rgba(255, 255, 255, 0.9)";
  context.lineWidth = 2;
  context.shadowColor = "rgba(255, 255, 255, 0.45)";
  context.shadowBlur = 8;
  context.beginPath();
  target.points.forEach((point, index) => {
    if (index === 0) {
      context.moveTo(point.x, point.y);
      return;
    }

    context.lineTo(point.x, point.y);
  });
  context.closePath();
  context.stroke();
  context.restore();
}

function drawFinalFpsInteractionLabel(context, target) {
  const label = target.label;
  const x = Math.min(window.innerWidth - 130, Math.max(14, target.screenX + 24));
  const y = Math.min(window.innerHeight - 52, Math.max(14, target.screenY - 16));
  const width = label === "Inspect" ? 96 : Math.max(76, label.length * 10 + 24);
  const height = 34;

  context.fillStyle = "rgba(0, 0, 0, 0.72)";
  context.strokeStyle = "rgba(255, 255, 255, 0.86)";
  context.lineWidth = 1.5;
  context.fillRect(x, y, width, height);
  context.strokeRect(x, y, width, height);
  if (target.inspectable) {
    finalFpsState.interactionButtonRect = { x, y, width, height };
  }
  context.fillStyle = "#ffffff";
  context.font = "700 14px monospace";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(label, x + width / 2, y + height / 2);
}

function drawFinalFpsInspectionOverlay(context, width, height) {
  const imageKey = finalFpsState.inspectedImageKey;

  if (!imageKey) {
    return;
  }

  const image = loadFinalFpsPaintingImage(imageKey);

  context.save();
  finalFpsState.gunPickupButtonRect = null;
  context.fillStyle = "rgba(0, 0, 0, 0.74)";
  context.fillRect(0, 0, width, height);

  context.fillStyle = "rgba(0, 0, 0, 0.78)";
  context.strokeStyle = "rgba(255, 255, 255, 0.92)";
  context.lineWidth = 2;
  context.fillRect(18, 18, 92, 38);
  context.strokeRect(18, 18, 92, 38);
  context.fillStyle = "#ffffff";
  context.font = "700 15px monospace";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText("Exit", 64, 37);

  if (image.complete && image.naturalWidth > 0) {
    const maxFrameWidth = width * 0.58;
    const maxFrameHeight = height * 0.7;
    const imageAspect = image.naturalWidth / image.naturalHeight;
    let frameWidth = maxFrameWidth;
    let frameHeight = frameWidth / imageAspect;

    if (frameHeight > maxFrameHeight) {
      frameHeight = maxFrameHeight;
      frameWidth = frameHeight * imageAspect;
    }

    const x = (width - frameWidth) / 2;
    const y = (height - frameHeight) / 2;
    const framePadding = 10;
    const flipAge = Math.max(0, performance.now() - finalFpsState.inspectionFlipStartedAt);
    const flipProgress = finalFpsState.inspectedPaintingFlipped ? Math.min(1, flipAge / 420) : 0;
    const flipScale = finalFpsState.inspectedPaintingFlipped ? Math.max(0.08, Math.abs(Math.cos(flipProgress * Math.PI))) : 1;
    const renderWidth = frameWidth * flipScale;
    const renderX = x + (frameWidth - renderWidth) / 2;

    context.fillStyle = "#2f1c0f";
    context.fillRect(renderX - framePadding, y - framePadding, renderWidth + framePadding * 2, frameHeight + framePadding * 2);
    context.strokeStyle = "#e4d7bf";
    context.lineWidth = 3;
    context.strokeRect(renderX - framePadding, y - framePadding, renderWidth + framePadding * 2, frameHeight + framePadding * 2);

    if (finalFpsState.inspectedPaintingFlipped && flipProgress > 0.45) {
      drawFinalFpsPaintingBack(context, renderX, y, renderWidth, frameHeight, imageKey);
    } else {
      context.drawImage(image, renderX, y, renderWidth, frameHeight);
    }

    if (!finalFpsState.inspectedPaintingFlipped) {
      drawFinalFpsFlipPrompt(context, x + frameWidth + 32, y + frameHeight * 0.5);
    }
  }

  drawFinalFpsGunDiscoveryDialogue(context, width, height, performance.now());
  context.restore();
}

function drawFinalFpsGunDiscoveryDialogue(context, width, height, timestamp) {
  if (!isFinalFpsGunDiscoveryActive()) {
    if (finalFpsState.gunDiscoveryTypingActive) {
      finalFpsState.gunDiscoveryTypingActive = false;
      stopTypingSound();
    }
    return;
  }

  const age = Math.max(0, timestamp - finalFpsState.gunDiscoveryStartedAt);
  const typeDuration = FINAL_FPS_GUN_DISCOVERY_DIALOGUE.length * FINAL_FPS_WIZARD_TYPE_SPEED_MS;
  const isTyping = age < typeDuration;

  if (isTyping && !finalFpsState.gunDiscoveryTypingActive) {
    finalFpsState.gunDiscoveryTypingActive = startTypingSound();
  }

  if (!isTyping && finalFpsState.gunDiscoveryTypingActive) {
    finalFpsState.gunDiscoveryTypingActive = false;
    stopTypingSound();
  }

  const wizardHeight = Math.max(190, Math.min(285, height * 0.68));
  const wizardWidth = wizardHeight * (543 / 724);
  const wizardX = Math.max(8, width * 0.035);
  const wizardY = height - wizardHeight * 0.58;
  const visibleCharacters = Math.min(FINAL_FPS_GUN_DISCOVERY_DIALOGUE.length, Math.floor(age / FINAL_FPS_WIZARD_TYPE_SPEED_MS));
  const visibleText = FINAL_FPS_GUN_DISCOVERY_DIALOGUE.slice(0, visibleCharacters);
  const bubbleWidth = Math.min(width * 0.44, 330);
  const bubbleHeight = 96;
  const bubbleX = Math.min(width - bubbleWidth - 18, wizardX + wizardWidth * 0.72);
  const bubbleY = Math.max(18, wizardY + wizardHeight * 0.12);

  drawLargeRetroWizardSprite(context, wizardX, wizardY, wizardWidth, wizardHeight, timestamp);

  context.save();
  context.fillStyle = "rgba(5, 15, 9, 0.93)";
  context.strokeStyle = "rgba(86, 255, 151, 0.84)";
  context.lineWidth = 2;
  context.fillRect(bubbleX, bubbleY, bubbleWidth, bubbleHeight);
  context.strokeRect(bubbleX, bubbleY, bubbleWidth, bubbleHeight);

  context.fillStyle = "#ffffff";
  context.font = "16px monospace";
  context.textAlign = "left";
  context.textBaseline = "top";
  context.fillText(visibleText, bubbleX + 14, bubbleY + 18);

  if (!isTyping) {
    context.globalAlpha = 0.48 + Math.sin(timestamp / 260) * 0.18;
    context.font = "13px monospace";
    context.fillText("click to continue", bubbleX + 14, bubbleY + bubbleHeight - 24);
  }

  context.restore();
}

function drawFinalFpsFlipPrompt(context, x, y) {
  context.save();
  context.globalAlpha = 0.84 + Math.sin(performance.now() / 260) * 0.12;
  context.fillStyle = "#ffffff";
  context.font = "700 15px monospace";
  context.textAlign = "left";
  context.textBaseline = "middle";
  context.fillText("Swipe to flip", x, y - 28);
  context.strokeStyle = "#ffffff";
  context.lineWidth = 3;
  context.beginPath();
  context.moveTo(x + 12, y);
  context.lineTo(x + 72, y);
  context.lineTo(x + 56, y - 13);
  context.moveTo(x + 72, y);
  context.lineTo(x + 56, y + 13);
  context.stroke();
  context.restore();
}

function drawFinalFpsPaintingBack(context, x, y, width, height, imageKey) {
  const isGunPainting = isFinalFpsCurrentInspectionGunPainting();

  context.fillStyle = "#5a3219";
  context.fillRect(x, y, width, height);
  context.fillStyle = "rgba(36, 18, 8, 0.38)";
  for (let line = 0; line < 5; line += 1) {
    const lineY = y + height * (0.18 + line * 0.16);
    context.fillRect(x + width * 0.06, lineY, width * 0.88, Math.max(2, height * 0.012));
  }
  context.strokeStyle = "rgba(20, 9, 3, 0.55)";
  context.lineWidth = 2;
  context.strokeRect(x + width * 0.08, y + height * 0.08, width * 0.84, height * 0.84);

  if (!isGunPainting) {
    context.fillStyle = "rgba(255, 255, 255, 0.68)";
    context.font = "700 15px monospace";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText("nothing here", x + width / 2, y + height / 2);
    return;
  }

  drawFinalFpsAkSideModel(context, x + width * 0.14, y + height * 0.36, width * 0.72, height * 0.3);
}

function drawFinalFpsCluePrompt(context, width, height, timestamp) {
  if (finalFpsState.tutorialPhase !== "playing" || finalFpsState.hasGun) {
    return;
  }

  const alpha = 0.42 + (Math.sin(timestamp / 420) * 0.5 + 0.5) * 0.38;
  context.save();
  context.globalAlpha = alpha;
  context.fillStyle = "#ffffff";
  context.font = "700 13px monospace";
  context.textAlign = "center";
  context.textBaseline = "top";
  context.fillText("Explore the room and look for clues.", width / 2, Math.max(12, height * 0.055));
  context.restore();
}

function drawFinalFpsHeldGun(context, width, height) {
  if (!finalFpsState.hasGun || isFinalFpsInSceneTransition()) {
    return;
  }

  context.save();
  drawFinalFpsHeldAkModel(context, width, height);
  drawFinalFpsMuzzleFlash(context, width, height, performance.now());
  drawFinalFpsCrosshair(context, width, height);
  context.restore();
}

function drawFinalFpsGunHud(context, width, height, timestamp) {
  if (!finalFpsState.hasGun || isFinalFpsInSceneTransition()) {
    finalFpsState.shootButtonRect = null;
    finalFpsState.reloadButtonRect = null;
    finalFpsState.autoFireButtonRect = null;
    return;
  }

  finalFpsState.autoFireButtonRect = null;
  if (finalFpsState.infiniteAmmo && !finalFpsState.forestBoss) {
    drawFinalFpsAutoFireToggle(context, width, height);
  }
  drawFinalFpsShootControls(context, width, height, timestamp);
}

function drawFinalFpsAutoFireToggle(context, width, height) {
  const rect = {
    x: Math.max(14, width * 0.026),
    y: Math.max(14, height * 0.045),
    width: Math.max(142, Math.min(176, width * 0.18)),
    height: 42,
  };
  const knobSize = 22;
  const toggleX = rect.x + rect.width - 46;
  const toggleY = rect.y + rect.height / 2 - knobSize / 2;

  finalFpsState.autoFireButtonRect = rect;
  context.save();
  context.fillStyle = "rgba(0, 0, 0, 0.56)";
  context.strokeStyle = finalFpsState.autoFire ? "#81ff4a" : "rgba(255, 255, 255, 0.76)";
  context.lineWidth = 2;
  context.fillRect(rect.x, rect.y, rect.width, rect.height);
  context.strokeRect(rect.x, rect.y, rect.width, rect.height);
  context.fillStyle = "#ffffff";
  context.font = "900 13px monospace";
  context.textAlign = "left";
  context.textBaseline = "middle";
  context.fillText("auto-fire", rect.x + 10, rect.y + rect.height / 2);
  context.fillStyle = finalFpsState.autoFire ? "rgba(129, 255, 74, 0.72)" : "rgba(255, 255, 255, 0.24)";
  context.fillRect(toggleX, toggleY, 38, knobSize);
  context.fillStyle = "#ffffff";
  context.fillRect(toggleX + (finalFpsState.autoFire ? 18 : 2), toggleY + 2, knobSize - 4, knobSize - 4);
  context.restore();
}

function drawFinalFpsShootControls(context, width, height, timestamp) {
  const radius = Math.max(34, Math.min(46, Math.min(width, height) * 0.12));
  const centerX = width - radius - 26;
  const centerY = height * 0.62;
  const reloadWidth = radius * 1.8;
  const reloadHeight = 30;
  const reloadX = centerX - reloadWidth / 2;
  const reloadY = centerY - radius - reloadHeight - 14;

  finalFpsState.shootButtonRect = {
    x: centerX - radius,
    y: centerY - radius,
    width: radius * 2,
    height: radius * 2,
  };
  finalFpsState.reloadButtonRect = { x: reloadX, y: reloadY, width: reloadWidth, height: reloadHeight };

  context.save();
  context.globalAlpha = finalFpsState.infiniteAmmo ? 0.34 : 1;
  const needsReload = !finalFpsState.infiniteAmmo && finalFpsState.ammo <= 0;
  const reloadPulse = needsReload ? 0.5 + Math.sin(timestamp / 95) * 0.5 : 0;
  const reloadShake = needsReload ? Math.sin(timestamp / 42) * 3.5 : 0;
  context.fillStyle = needsReload ? `rgba(130, 0, 0, ${0.42 + reloadPulse * 0.3})` : "rgba(0, 0, 0, 0.54)";
  context.strokeStyle = needsReload ? "#ff4545" : "rgba(255, 255, 255, 0.66)";
  context.lineWidth = 1.5;
  context.fillRect(reloadX + reloadShake, reloadY, reloadWidth, reloadHeight);
  context.strokeRect(reloadX + reloadShake, reloadY, reloadWidth, reloadHeight);
  context.fillStyle = "#ffffff";
  context.font = "700 12px monospace";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText("reload", centerX + reloadShake, reloadY + reloadHeight / 2);
  if (needsReload) {
    context.globalAlpha = 0.72 + reloadPulse * 0.28;
    context.strokeStyle = "#ffffff";
    context.fillStyle = "#ff4545";
    context.lineWidth = 3;
    context.beginPath();
    context.moveTo(centerX, reloadY - 34);
    context.lineTo(centerX, reloadY - 7);
    context.stroke();
    context.beginPath();
    context.moveTo(centerX, reloadY - 4);
    context.lineTo(centerX - 9, reloadY - 18);
    context.lineTo(centerX + 9, reloadY - 18);
    context.closePath();
    context.fill();
  }
  context.globalAlpha = 1;

  const pressedAlpha = finalFpsState.shootButtonPressed ? 0.33 : 0.13;
  context.fillStyle = `rgba(255, 255, 255, ${pressedAlpha})`;
  context.strokeStyle = "rgba(255, 255, 255, 0.72)";
  context.lineWidth = 2;
  context.beginPath();
  context.arc(centerX, centerY, radius, 0, Math.PI * 2);
  context.fill();
  context.stroke();
  context.fillStyle = "#ffffff";
  context.font = "700 13px monospace";
  context.fillText("shoot", centerX, centerY);

  context.font = "700 13px monospace";
  context.fillStyle = finalFpsState.infiniteAmmo
    ? "#81ff4a"
    : finalFpsState.ammo <= 6 && Math.floor(timestamp / 220) % 2 ? "#ff6d6d" : "#ffffff";
  context.fillText(finalFpsState.infiniteAmmo ? "∞" : `${finalFpsState.ammo}/${FINAL_FPS_MAGAZINE_SIZE}`, centerX, centerY + radius + 24);
  context.restore();
}

function drawFinalFpsMuzzleFlash(context, width, height, timestamp) {
  const age = timestamp - finalFpsState.muzzleFlashAt;

  if (age < 0 || age > FINAL_FPS_MUZZLE_FLASH_MS) {
    return;
  }

  const alpha = 1 - age / FINAL_FPS_MUZZLE_FLASH_MS;
  const point = getFinalFpsMuzzleScreenPoint(width, height);
  const size = Math.max(14, Math.min(32, Math.min(width, height) * 0.055)) * alpha;

  context.save();
  context.globalAlpha = alpha;
  context.translate(point.x, point.y);
  context.rotate(-0.18 + Math.sin(timestamp) * 0.2);
  context.fillStyle = "#fff3a2";
  context.beginPath();
  context.moveTo(0, -size * 1.2);
  context.lineTo(size * 0.52, -size * 0.16);
  context.lineTo(size * 1.2, 0);
  context.lineTo(size * 0.45, size * 0.22);
  context.lineTo(0, size * 1.05);
  context.lineTo(-size * 0.35, size * 0.18);
  context.lineTo(-size * 0.95, 0);
  context.lineTo(-size * 0.3, -size * 0.2);
  context.closePath();
  context.fill();
  context.fillStyle = "#ff7b22";
  context.globalAlpha = alpha * 0.72;
  context.beginPath();
  context.arc(0, 0, size * 0.42, 0, Math.PI * 2);
  context.fill();
  context.restore();
}

function getFinalFpsMuzzleScreenPoint(width, height) {
  const bob = Math.sin(performance.now() / 360) * 2;
  const baseX = width * 0.69;
  const baseY = height + 58 + bob;
  const scale = Math.min(width, height) / 440;
  const rotation = -0.18;
  const localX = 0;
  const localY = -285;
  const cos = Math.cos(rotation);
  const sin = Math.sin(rotation);

  return {
    x: baseX + (localX * cos - localY * sin) * scale,
    y: baseY + (localX * sin + localY * cos) * scale,
  };
}

function drawFinalFpsCrosshair(context, width, height) {
  context.save();
  context.globalAlpha = 0.9;
  context.strokeStyle = "#f0f0e8";
  context.lineWidth = 2;
  context.beginPath();
  context.arc(width / 2, height / 2, 3, 0, Math.PI * 2);
  context.stroke();
  context.fillStyle = "rgba(240, 240, 232, 0.86)";
  context.beginPath();
  context.arc(width / 2, height / 2, 1.2, 0, Math.PI * 2);
  context.fill();
  context.restore();
}

function drawFinalFpsAkSideModel(context, x, y, width, height) {
  context.save();
  context.translate(x, y);
  context.imageSmoothingEnabled = false;

  const px = width / 96;
  const py = height / 36;
  const rect = (color, left, top, rectWidth, rectHeight) => {
    context.fillStyle = color;
    context.fillRect(left * px, top * py, rectWidth * px, rectHeight * py);
  };
  const poly = (color, points) => {
    context.fillStyle = color;
    context.beginPath();
    points.forEach(([pointX, pointY], index) => {
      const drawX = pointX * px;
      const drawY = pointY * py;
      if (index === 0) {
        context.moveTo(drawX, drawY);
      } else {
        context.lineTo(drawX, drawY);
      }
    });
    context.closePath();
    context.fill();
  };

  poly("#4a2615", [
    [0, 15],
    [15, 10],
    [22, 13],
    [21, 22],
    [3, 28],
  ]);
  rect("#8b4a25", 3, 13, 17, 10);
  rect("#191b1a", 20, 12, 31, 9);
  rect("#353a38", 25, 8, 25, 7);
  rect("#0e0f0f", 32, 15, 18, 6);
  rect("#75411f", 50, 11, 19, 8);
  rect("#151716", 69, 13, 18, 5);
  rect("#303433", 84, 11, 5, 10);
  rect("#171918", 88, 16, 8, 3);
  rect("#b6b8a8", 89, 8, 3, 8);
  rect("#b6b8a8", 92, 14, 3, 7);
  poly("#242624", [
    [38, 21],
    [55, 21],
    [52, 27],
    [43, 27],
  ]);
  poly("#4c2a19", [
    [35, 23],
    [47, 23],
    [44, 34],
    [37, 34],
  ]);
  poly("#1c1d1b", [
    [51, 20],
    [63, 20],
    [60, 34],
    [50, 34],
  ]);
  rect("#777b75", 31, 10, 12, 2);
  rect("#b7b192", 71, 12, 3, 2);
  rect("#0b0c0c", 22, 19, 17, 3);

  context.strokeStyle = "rgba(0, 0, 0, 0.74)";
  context.lineWidth = Math.max(1, px * 2);
  context.strokeRect(20 * px, 12 * py, 31 * px, 9 * py);
  context.restore();
}

function drawFinalFpsHeldAkModel(context, width, height) {
  const bob = Math.sin(performance.now() / 360) * 2;
  const baseX = width * 0.69;
  const baseY = height + 58 + bob;
  const scale = Math.min(width, height) / 440;

  context.save();
  context.translate(baseX, baseY);
  context.scale(scale, scale);
  context.rotate(-0.18);
  context.imageSmoothingEnabled = false;

  context.fillStyle = "rgba(0, 0, 0, 0.42)";
  context.beginPath();
  context.ellipse(0, -18, 120, 24, 0, 0, Math.PI * 2);
  context.fill();

  context.fillStyle = "#211914";
  context.beginPath();
  context.moveTo(-68, -8);
  context.lineTo(-26, -142);
  context.lineTo(4, -142);
  context.lineTo(-4, -4);
  context.closePath();
  context.fill();

  context.fillStyle = "#7b4524";
  context.beginPath();
  context.moveTo(-55, -5);
  context.lineTo(-22, -122);
  context.lineTo(-2, -122);
  context.lineTo(-14, -2);
  context.closePath();
  context.fill();

  context.fillStyle = "#2a2c2b";
  context.beginPath();
  context.moveTo(-22, -160);
  context.lineTo(22, -160);
  context.lineTo(40, -12);
  context.lineTo(-40, -12);
  context.closePath();
  context.fill();

  context.fillStyle = "#111313";
  context.beginPath();
  context.moveTo(-13, -220);
  context.lineTo(13, -220);
  context.lineTo(22, -150);
  context.lineTo(-22, -150);
  context.closePath();
  context.fill();

  context.fillStyle = "#414644";
  context.beginPath();
  context.moveTo(-9, -245);
  context.lineTo(9, -245);
  context.lineTo(13, -212);
  context.lineTo(-13, -212);
  context.closePath();
  context.fill();

  context.fillStyle = "#090a0a";
  context.fillRect(-6, -285, 12, 48);
  context.fillStyle = "#2f3332";
  context.fillRect(-18, -236, 36, 22);

  context.fillStyle = "#8b4f2a";
  context.beginPath();
  context.moveTo(28, -18);
  context.lineTo(82, 8);
  context.lineTo(68, 42);
  context.lineTo(28, 16);
  context.closePath();
  context.fill();

  context.fillStyle = "#c48955";
  context.beginPath();
  context.moveTo(-82, -24);
  context.lineTo(-42, -12);
  context.lineTo(-47, 34);
  context.lineTo(-91, 18);
  context.closePath();
  context.fill();

  context.fillStyle = "#a96a3b";
  context.fillRect(-76, -20, 24, 44);
  context.fillRect(44, -1, 24, 36);
  context.fillStyle = "#e0a66f";
  context.fillRect(-86, -16, 18, 28);
  context.fillRect(62, 5, 20, 26);
  context.fillStyle = "#8f532e";
  context.fillRect(-72, -13, 5, 24);
  context.fillRect(76, 8, 5, 21);

  context.strokeStyle = "rgba(230, 235, 220, 0.22)";
  context.lineWidth = 5;
  context.beginPath();
  context.moveTo(-8, -238);
  context.lineTo(-15, -158);
  context.moveTo(8, -238);
  context.lineTo(18, -158);
  context.stroke();

  context.strokeStyle = "rgba(0, 0, 0, 0.76)";
  context.lineWidth = 5;
  context.strokeRect(-6, -285, 12, 48);
  context.strokeRect(-18, -236, 36, 22);
  context.restore();
}

function drawFinalFpsPaintingStrip(context, x, stripWidth, y, height, relative, imageKey, shade) {
  const frameWidth = Math.max(2, height * 0.045);
  const innerY = y + frameWidth;
  const innerHeight = height - frameWidth * 2;
  const texture = loadFinalFpsPaintingTexture(imageKey);

  context.fillStyle = `rgb(${Math.floor(125 * shade)}, ${Math.floor(88 * shade)}, ${Math.floor(40 * shade)})`;
  context.fillRect(x, y, stripWidth, height);

  if (!texture) {
    context.fillStyle = "#1b140d";
    context.fillRect(x, innerY, stripWidth, innerHeight);
    return;
  }

  const sourceX = Math.max(0, Math.min(texture.width - 1, ((relative + 1) / 2) * texture.width));
  const sourceWidth = Math.max(1, texture.width * 0.018);
  context.imageSmoothingEnabled = false;
  context.drawImage(texture.canvas, sourceX, 0, sourceWidth, texture.height, x, innerY, stripWidth, innerHeight);
  context.fillStyle = `rgba(0, 0, 0, ${Math.max(0.05, 0.24 - shade * 0.12)})`;
  context.fillRect(x, innerY, stripWidth, innerHeight);
}

function loadFinalFpsPaintingImage(imageKey) {
  if (finalFpsState.paintingImages[imageKey]) {
    return finalFpsState.paintingImages[imageKey];
  }

  const image = new Image();
  image.onload = () => {
    createFinalFpsPaintingTexture(imageKey, image);
  };
  image.src = FINAL_FPS_PAINTING_URLS[imageKey];
  finalFpsState.paintingImages[imageKey] = image;
  return image;
}

function preloadFinalFpsPaintingImages() {
  Object.keys(FINAL_FPS_PAINTING_URLS).forEach((imageKey) => {
    loadFinalFpsPaintingImage(imageKey);
  });
}

function loadFinalFpsPaintingTexture(imageKey) {
  if (finalFpsState.paintingTextures[imageKey]) {
    return finalFpsState.paintingTextures[imageKey];
  }

  const image = loadFinalFpsPaintingImage(imageKey);

  if (!image.complete || image.naturalWidth === 0 || image.naturalHeight === 0) {
    return null;
  }

  return createFinalFpsPaintingTexture(imageKey, image);
}

function createFinalFpsPaintingTexture(imageKey, image) {
  if (finalFpsState.paintingTextures[imageKey]) {
    return finalFpsState.paintingTextures[imageKey];
  }

  if (!image.complete || image.naturalWidth === 0 || image.naturalHeight === 0) {
    return null;
  }

  const canvas = document.createElement("canvas");
  const aspect = image.naturalWidth / image.naturalHeight;
  const width = FINAL_FPS_PAINTING_TEXTURE_WIDTH;
  const height = Math.max(32, Math.min(FINAL_FPS_PAINTING_TEXTURE_MAX_HEIGHT, Math.round(width / aspect)));
  const textureContext = canvas.getContext("2d");

  canvas.width = width;
  canvas.height = height;
  textureContext.imageSmoothingEnabled = true;
  textureContext.drawImage(image, 0, 0, width, height);

  finalFpsState.paintingTextures[imageKey] = { canvas, width, height };
  return finalFpsState.paintingTextures[imageKey];
}

function getFinalFpsPaintingAspect(imageKey) {
  const image = loadFinalFpsPaintingImage(imageKey);

  if (image.complete && image.naturalWidth > 0 && image.naturalHeight > 0) {
    return image.naturalWidth / image.naturalHeight;
  }

  const fallbackAspects = {
    mona: 0.667,
    starry: 1.25,
    garden: 1.338,
    rain: 0.802,
    boomtownLionsDen: 1.38,
    boomtownHydro: 1.38,
    boomtownSpectrum: 1.38,
    boomtownGrandCentral: 1.38,
  };

  return fallbackAspects[imageKey] || 1;
}

function getFinalFpsWallDecorationBounds(decoration, width, height, horizon) {
  const imageAspect = getFinalFpsPaintingAspect(decoration.imageKey);
  const heightFraction = Math.max(0.16, Math.min(0.5, (decoration.halfWidth * 2) / imageAspect));
  const leftCoordinate = decoration.center - decoration.halfWidth;
  const rightCoordinate = decoration.center + decoration.halfWidth;
  const leftCenterY = decoration.centerY - decoration.tilt;
  const rightCenterY = decoration.centerY + decoration.tilt;
  const leftPoint = getFinalFpsWallPoint(decoration.wall, leftCoordinate, width);
  const rightPoint = getFinalFpsWallPoint(decoration.wall, rightCoordinate, width);

  if (!leftPoint || !rightPoint) {
    return null;
  }

  const leftVertical = getFinalFpsVerticalProjection(leftPoint.depth, height, horizon);
  const rightVertical = getFinalFpsVerticalProjection(rightPoint.depth, height, horizon);
  const points = [
    { x: leftPoint.x, y: leftVertical.top + leftVertical.height * (leftCenterY - heightFraction / 2) },
    { x: rightPoint.x, y: rightVertical.top + rightVertical.height * (rightCenterY - heightFraction / 2) },
    { x: rightPoint.x, y: rightVertical.top + rightVertical.height * (rightCenterY + heightFraction / 2) },
    { x: leftPoint.x, y: leftVertical.top + leftVertical.height * (leftCenterY + heightFraction / 2) },
  ];

  if (points.some((point) => !Number.isFinite(point.x) || !Number.isFinite(point.y))) {
    return null;
  }

  const centerPoint = getFinalFpsWallPoint(decoration.wall, decoration.center, width);
  const player = finalFpsState.player;
  const worldCenter = getFinalFpsWallWorldPoint(decoration.wall, decoration.center);

  return {
    points,
    centerX: centerPoint?.x ?? (points[0].x + points[1].x) / 2,
    centerY: points.reduce((total, point) => total + point.y, 0) / points.length,
    distance: Math.hypot(player.x - worldCenter.x, player.y - worldCenter.y),
  };
}

function getFinalFpsWallPoint(wall, coordinate, width) {
  const worldPoint = getFinalFpsWallWorldPoint(wall, coordinate);

  if (!worldPoint) {
    return null;
  }

  return projectFinalFpsPoint(worldPoint.x, worldPoint.y, width);
}

function getFinalFpsWallWorldPoint(wall, coordinate) {
  if (wall === "north") {
    return { x: coordinate, y: 0.015 };
  }

  if (wall === "south") {
    return { x: coordinate, y: FINAL_FPS_ROOM_SIZE - 0.015 };
  }

  if (wall === "east") {
    return { x: FINAL_FPS_ROOM_SIZE - 0.015, y: coordinate };
  }

  return { x: 0.015, y: coordinate };
}

function createFinalFpsFurniture() {
  return {
    x: FINAL_FPS_ROOM_SIZE * 0.24,
    y: FINAL_FPS_ROOM_SIZE * 0.78,
    width: 0.48,
    depth: 0.36,
  };
}

function resolveFinalFpsFurnitureCollision(nextX, nextY, previousX, previousY) {
  const furniture = finalFpsState.furniture;

  if (!furniture) {
    return { x: nextX, y: nextY };
  }

  const padding = 0.16;
  const left = furniture.x - furniture.width / 2 - padding;
  const right = furniture.x + furniture.width / 2 + padding;
  const top = furniture.y - furniture.depth / 2 - padding;
  const bottom = furniture.y + furniture.depth / 2 + padding;

  if (nextX < left || nextX > right || nextY < top || nextY > bottom) {
    return { x: nextX, y: nextY };
  }

  const resolved = { x: nextX, y: nextY };

  if (previousX <= left || previousX >= right) {
    resolved.x = previousX;
  }

  if (previousY <= top || previousY >= bottom) {
    resolved.y = previousY;
  }

  if (resolved.x === nextX && resolved.y === nextY) {
    resolved.x = previousX;
    resolved.y = previousY;
  }

  return resolved;
}

function drawFinalFpsFurniture(context, width, height, horizon) {
  const furniture = finalFpsState.furniture;

  if (!furniture) {
    return;
  }

  const left = furniture.x - furniture.width / 2;
  const right = furniture.x + furniture.width / 2;
  const front = furniture.y - furniture.depth / 2;
  const back = furniture.y + furniture.depth / 2;
  const topCorners = [
    getFinalFpsObjectPoint(left, front, 0.42, width, height, horizon),
    getFinalFpsObjectPoint(right, front, 0.42, width, height, horizon),
    getFinalFpsObjectPoint(right, back, 0.42, width, height, horizon),
    getFinalFpsObjectPoint(left, back, 0.42, width, height, horizon),
  ];
  const floorCorners = [
    getFinalFpsObjectPoint(left, front, 0, width, height, horizon),
    getFinalFpsObjectPoint(right, front, 0, width, height, horizon),
    getFinalFpsObjectPoint(right, back, 0, width, height, horizon),
    getFinalFpsObjectPoint(left, back, 0, width, height, horizon),
  ];

  if (topCorners.some((point) => !point) || floorCorners.some((point) => !point)) {
    return;
  }

  context.save();
  context.fillStyle = "#6f3f1f";
  drawFinalFpsPolygon(context, topCorners);

  context.strokeStyle = "rgba(20, 9, 3, 0.82)";
  context.lineWidth = 2;
  drawFinalFpsPolygonStroke(context, topCorners);

  [0, 1, 2, 3].forEach((index) => {
    const topPoint = topCorners[index];
    const floorPoint = floorCorners[index];
    const legWidth = Math.max(5, Math.min(13, topPoint.scale * 0.008));
    context.strokeStyle = "#3a1c0b";
    context.lineWidth = legWidth;
    context.lineCap = "square";
    context.beginPath();
    context.moveTo(topPoint.x, topPoint.y);
    context.lineTo(floorPoint.x, floorPoint.y);
    context.stroke();
  });

  drawFinalFpsPlate(context, furniture.x + furniture.width * 0.05, furniture.y - furniture.depth * 0.05, width, height, horizon);
  drawFinalFpsBong(context, furniture.x - furniture.width * 0.18, furniture.y + furniture.depth * 0.02, width, height, horizon);
  context.restore();
}

function drawFinalFpsPlate(context, worldX, worldY, width, height, horizon) {
  const center = getFinalFpsObjectPoint(worldX, worldY, 0.48, width, height, horizon);

  if (!center) {
    return;
  }

  const radiusX = Math.max(5, Math.min(26, center.scale * 0.032));
  const radiusY = radiusX * 0.38;

  context.fillStyle = "#ddd0ad";
  context.beginPath();
  context.ellipse(center.x, center.y, radiusX, radiusY, 0, 0, Math.PI * 2);
  context.fill();
  context.strokeStyle = "#7f6844";
  context.lineWidth = 2;
  context.stroke();
  context.fillStyle = "#b98a42";
  context.beginPath();
  context.ellipse(center.x + radiusX * 0.12, center.y, radiusX * 0.35, radiusY * 0.42, 0, 0, Math.PI * 2);
  context.fill();
}

function drawFinalFpsBong(context, worldX, worldY, width, height, horizon) {
  const base = getFinalFpsObjectPoint(worldX, worldY, 0.48, width, height, horizon);
  const top = getFinalFpsObjectPoint(worldX, worldY, 0.82, width, height, horizon);

  if (!base || !top) {
    return;
  }

  const bodyWidth = Math.max(7, Math.min(23, base.scale * 0.018));
  const tubeWidth = Math.max(4, bodyWidth * 0.42);

  context.fillStyle = "rgba(75, 190, 150, 0.78)";
  context.strokeStyle = "rgba(188, 255, 228, 0.78)";
  context.lineWidth = 2;
  context.beginPath();
  context.ellipse(base.x, base.y, bodyWidth, bodyWidth * 0.52, 0, 0, Math.PI * 2);
  context.fill();
  context.stroke();

  context.fillStyle = "rgba(75, 190, 150, 0.66)";
  context.fillRect(top.x - tubeWidth / 2, top.y, tubeWidth, base.y - top.y);
  context.strokeRect(top.x - tubeWidth / 2, top.y, tubeWidth, base.y - top.y);

  const bowl = getFinalFpsObjectPoint(worldX + 0.08, worldY - 0.03, 0.62, width, height, horizon);
  if (bowl) {
    context.strokeStyle = "#6b3b1b";
    context.lineWidth = 3;
    context.beginPath();
    context.moveTo(base.x + tubeWidth * 0.4, base.y - bodyWidth * 0.25);
    context.lineTo(bowl.x, bowl.y);
    context.stroke();
    context.fillStyle = "#3c1e0d";
    context.beginPath();
    context.ellipse(bowl.x, bowl.y, bodyWidth * 0.38, bodyWidth * 0.25, 0, 0, Math.PI * 2);
    context.fill();
  }

  drawFinalFpsBongSmoke(context, top.x, top.y, top.scale);
}

function drawFinalFpsBongSmoke(context, x, y, scale) {
  const now = performance.now();

  context.save();
  context.strokeStyle = "rgba(220, 230, 225, 0.42)";
  context.lineWidth = Math.max(1, Math.min(3, scale * 0.003));
  for (let stream = 0; stream < 3; stream += 1) {
    const age = ((now / 900 + stream * 0.33) % 1);
    const smokeY = y - age * 54;
    const offset = Math.sin(now / 420 + stream * 2.1) * 7 * age;
    context.globalAlpha = (1 - age) * 0.45;
    context.beginPath();
    context.moveTo(x + offset * 0.2, smokeY);
    context.quadraticCurveTo(x + offset - 8, smokeY - 12, x + offset + 4, smokeY - 24);
    context.stroke();
  }
  context.restore();
}

function drawFinalFpsRug(context, width, height, horizon) {
  const centerX = FINAL_FPS_ROOM_SIZE * 0.55;
  const centerY = FINAL_FPS_ROOM_SIZE * 0.58;
  const rugWidth = 1.25;
  const rugDepth = 0.78;
  const points = [
    getFinalFpsFloorPoint(centerX - rugWidth / 2, centerY - rugDepth / 2, width, height, horizon),
    getFinalFpsFloorPoint(centerX + rugWidth / 2, centerY - rugDepth / 2, width, height, horizon),
    getFinalFpsFloorPoint(centerX + rugWidth / 2, centerY + rugDepth / 2, width, height, horizon),
    getFinalFpsFloorPoint(centerX - rugWidth / 2, centerY + rugDepth / 2, width, height, horizon),
  ].filter(Boolean);

  if (points.length < 3) {
    return;
  }

  context.save();
  context.fillStyle = "rgba(93, 22, 19, 0.86)";
  drawFinalFpsPolygon(context, points);
  context.strokeStyle = "rgba(170, 96, 56, 0.84)";
  context.lineWidth = 2;
  drawFinalFpsPolygonStroke(context, points);

  const stripeA = getFinalFpsFloorPoint(centerX - rugWidth * 0.28, centerY, width, height, horizon);
  const stripeB = getFinalFpsFloorPoint(centerX + rugWidth * 0.28, centerY, width, height, horizon);
  if (stripeA && stripeB) {
    context.strokeStyle = "rgba(199, 128, 74, 0.42)";
    context.lineWidth = 3;
    context.beginPath();
    context.moveTo(stripeA.x, stripeA.y);
    context.lineTo(stripeB.x, stripeB.y);
    context.stroke();
  }
  context.restore();
}

function getFinalFpsFloorPoint(worldX, worldY, width, height, horizon) {
  const player = finalFpsState.player;
  const relX = worldX - player.x;
  const relY = worldY - player.y;
  const forwardX = Math.cos(player.angle);
  const forwardY = Math.sin(player.angle);
  const rightX = Math.cos(player.angle + Math.PI / 2);
  const rightY = Math.sin(player.angle + Math.PI / 2);
  const rawDepth = relX * forwardX + relY * forwardY;
  const side = relX * rightX + relY * rightY;
  const depth = Math.max(0.1, rawDepth);
  const projectionScale = width / 2 / Math.tan(Math.PI / 6);
  const x = width / 2 + (side / depth) * projectionScale;
  const y = horizon + height * 0.45 / depth;

  if (rawDepth < -0.08 || x < -width * 1.25 || x > width * 2.25 || y < -height * 0.3) {
    return null;
  }

  return {
    x,
    y: Math.min(height * 1.35, y),
    depth,
    scale: projectionScale / depth,
  };
}

function getFinalFpsObjectPoint(worldX, worldY, heightOffset, width, height, horizon) {
  const projection = projectFinalFpsPoint(worldX, worldY, width);

  if (!projection) {
    return null;
  }

  return {
    x: projection.x,
    y: horizon + height * 0.45 / projection.depth - projection.scale * heightOffset * 0.23,
    depth: projection.depth,
    scale: projection.scale,
  };
}

function drawFinalFpsPolygon(context, points) {
  context.beginPath();
  points.forEach((point, index) => {
    if (index === 0) {
      context.moveTo(point.x, point.y);
    } else {
      context.lineTo(point.x, point.y);
    }
  });
  context.closePath();
  context.fill();
}

function drawFinalFpsPolygonStroke(context, points) {
  context.beginPath();
  points.forEach((point, index) => {
    if (index === 0) {
      context.moveTo(point.x, point.y);
    } else {
      context.lineTo(point.x, point.y);
    }
  });
  context.closePath();
  context.stroke();
}

function getFinalFpsWallCoordinate(hit) {
  return hit.wall === "north" || hit.wall === "south" ? hit.x : hit.y;
}

function getFinalFpsDoorWorldPoint() {
  if (FINAL_FPS_DOOR_WALL === "east") {
    return { x: FINAL_FPS_ROOM_SIZE - 0.02, y: FINAL_FPS_DOOR_POSITION };
  }

  if (FINAL_FPS_DOOR_WALL === "west") {
    return { x: 0.02, y: FINAL_FPS_DOOR_POSITION };
  }

  if (FINAL_FPS_DOOR_WALL === "south") {
    return { x: FINAL_FPS_DOOR_POSITION, y: FINAL_FPS_ROOM_SIZE - 0.02 };
  }

  return { x: FINAL_FPS_DOOR_POSITION, y: 0.02 };
}

function getFinalFpsDoorWorldPointArray() {
  const point = getFinalFpsDoorWorldPoint();
  return [point.x, point.y];
}

function getFinalFpsDoorHingePoint() {
  if (FINAL_FPS_DOOR_WALL === "east") {
    return { x: FINAL_FPS_ROOM_SIZE - 0.015, y: FINAL_FPS_DOOR_POSITION - FINAL_FPS_DOOR_HALF_WIDTH };
  }

  if (FINAL_FPS_DOOR_WALL === "west") {
    return { x: 0.015, y: FINAL_FPS_DOOR_POSITION + FINAL_FPS_DOOR_HALF_WIDTH };
  }

  if (FINAL_FPS_DOOR_WALL === "south") {
    return { x: FINAL_FPS_DOOR_POSITION + FINAL_FPS_DOOR_HALF_WIDTH, y: FINAL_FPS_ROOM_SIZE - 0.015 };
  }

  return { x: FINAL_FPS_DOOR_POSITION - FINAL_FPS_DOOR_HALF_WIDTH, y: 0.015 };
}

function getFinalFpsDoorFreeEdgePoint(hinge, doorWidth, swingAngle) {
  if (FINAL_FPS_DOOR_WALL === "east") {
    return {
      x: hinge.x - Math.sin(swingAngle) * doorWidth,
      y: hinge.y + Math.cos(swingAngle) * doorWidth,
    };
  }

  if (FINAL_FPS_DOOR_WALL === "west") {
    return {
      x: hinge.x + Math.sin(swingAngle) * doorWidth,
      y: hinge.y - Math.cos(swingAngle) * doorWidth,
    };
  }

  if (FINAL_FPS_DOOR_WALL === "south") {
    return {
      x: hinge.x - Math.cos(swingAngle) * doorWidth,
      y: hinge.y - Math.sin(swingAngle) * doorWidth,
    };
  }

  return {
    x: hinge.x + Math.cos(swingAngle) * doorWidth,
    y: hinge.y + Math.sin(swingAngle) * doorWidth,
  };
}

function drawFinalFpsDoorStrip(context, hit, x, stripWidth, top, wallHeight, wallTop, wallBottom, shade) {
  if (hit.wall !== FINAL_FPS_DOOR_WALL) {
    return;
  }

  const spawnProgress = finalFpsState.doorSpawnProgress;

  if (spawnProgress <= 0) {
    return;
  }

  const doorHalfWidth = FINAL_FPS_DOOR_HALF_WIDTH;
  const doorOffset = getFinalFpsWallCoordinate(hit) - FINAL_FPS_DOOR_POSITION;

  if (Math.abs(doorOffset) > doorHalfWidth) {
    return;
  }

  const doorTop = Math.max(wallTop, top + wallHeight * 0.24);
  const doorBottom = Math.min(wallBottom, top + wallHeight * 0.94);
  const doorHeight = doorBottom - doorTop;

  if (doorHeight <= 4) {
    return;
  }

  const openProgress = finalFpsState.doorOpenProgress;
  const doorwayVisible = openProgress > 0.04;
  const warpAlpha = Math.min(1, spawnProgress * 1.3);

  if (doorwayVisible || spawnProgress < 0.96) {
    const previewShade = Math.max(0.18, shade * (0.42 + openProgress * 0.22));
    context.fillStyle = `rgb(${Math.floor(58 * previewShade)}, ${Math.floor(35 * previewShade)}, ${Math.floor(20 * previewShade)})`;
    context.globalAlpha = doorwayVisible ? 1 : warpAlpha * 0.28;
    context.fillRect(x, doorTop, stripWidth, doorHeight);
    context.fillStyle = `rgba(16, 9, 5, ${0.32 + openProgress * 0.18})`;
    context.fillRect(x, doorTop + doorHeight * 0.56, stripWidth, Math.max(1, doorHeight * 0.44));
    context.globalAlpha = 1;
  }

  if (openProgress > 0.1 || spawnProgress < 0.18) {
    return;
  }

  const doorShade = Math.max(0.34, shade * 0.72);
  context.globalAlpha = Math.min(1, spawnProgress * 1.7) * (1 - openProgress * 8);
  context.fillStyle = `rgb(${Math.floor(82 * doorShade)}, ${Math.floor(43 * doorShade)}, ${Math.floor(18 * doorShade)})`;
  context.fillRect(x, doorTop, stripWidth, doorHeight);
  context.globalAlpha = 1;

  const handleCoordinate = FINAL_FPS_DOOR_POSITION + doorHalfWidth * 0.46;
  if (Math.abs(getFinalFpsWallCoordinate(hit) - handleCoordinate) < doorHalfWidth * 0.055) {
    const handleY = doorTop + doorHeight * 0.53;
    context.fillStyle = "#f1c84d";
    context.fillRect(x, handleY, stripWidth, Math.max(3, doorHeight * 0.045));
  }
}

function drawFinalFpsOpenDoor(context, width, height, horizon) {
  const openProgress = finalFpsState.doorOpenProgress;

  if (finalFpsState.doorSpawnProgress < 1 || openProgress <= 0.08) {
    return;
  }

  const doorHalfWidth = FINAL_FPS_DOOR_HALF_WIDTH;
  const doorWidth = doorHalfWidth * 2;
  const hinge = getFinalFpsDoorHingePoint();
  const swingAngle = openProgress * Math.PI * 0.48;
  const freeEdge = getFinalFpsDoorFreeEdgePoint(hinge, doorWidth, swingAngle);
  const hingeProjection = projectFinalFpsPoint(hinge.x, hinge.y, width);
  const freeProjection = projectFinalFpsPoint(freeEdge.x, freeEdge.y, width);

  if (!hingeProjection || !freeProjection) {
    return;
  }

  const hingeVertical = getFinalFpsVerticalProjection(hingeProjection.depth, height, horizon);
  const freeVertical = getFinalFpsVerticalProjection(freeProjection.depth, height, horizon);
  const hingeTop = hingeVertical.top + hingeVertical.height * 0.24;
  const hingeBottom = hingeVertical.top + hingeVertical.height * 0.94;
  const freeTop = freeVertical.top + freeVertical.height * 0.24;
  const freeBottom = freeVertical.top + freeVertical.height * 0.94;
  const doorShade = 0.56 + openProgress * 0.12;

  context.fillStyle = `rgb(${Math.floor(88 * doorShade)}, ${Math.floor(46 * doorShade)}, ${Math.floor(20 * doorShade)})`;
  context.beginPath();
  context.moveTo(hingeProjection.x, hingeTop);
  context.lineTo(freeProjection.x, freeTop);
  context.lineTo(freeProjection.x, freeBottom);
  context.lineTo(hingeProjection.x, hingeBottom);
  context.closePath();
  context.fill();

  context.strokeStyle = "rgba(28, 12, 4, 0.64)";
  context.lineWidth = 2;
  context.beginPath();
  context.moveTo(hingeProjection.x, hingeTop);
  context.lineTo(hingeProjection.x, hingeBottom);
  context.lineTo(freeProjection.x, freeBottom);
  context.lineTo(freeProjection.x, freeTop);
  context.stroke();

  const handleX = hingeProjection.x + (freeProjection.x - hingeProjection.x) * 0.73;
  const handleY = hingeTop + (hingeBottom - hingeTop) * 0.53;
  context.fillStyle = "#f1c84d";
  context.beginPath();
  context.arc(handleX, handleY, Math.max(3, Math.min(8, Math.abs(freeProjection.x - hingeProjection.x) * 0.045)), 0, Math.PI * 2);
  context.fill();
}

function drawFinalFpsDoorWarp(context, width, height) {
  const progress = finalFpsState.doorSpawnProgress;

  if (progress <= 0 || progress >= 1) {
    return;
  }

  const projection = projectFinalFpsPoint(...getFinalFpsDoorWorldPointArray(), width);

  if (!projection) {
    return;
  }

  const centerY = height * 0.49;
  const radius = Math.max(26, Math.min(230, projection.scale * 0.13 * (0.55 + progress)));
  const pulse = Math.sin(performance.now() / 58) * 0.5 + 0.5;
  const flash = Math.sin(progress * Math.PI);

  context.save();
  context.globalAlpha = 0.13 + flash * 0.24;
  const wash = context.createRadialGradient(projection.x, centerY, 8, projection.x, centerY, radius * 2.4);
  wash.addColorStop(0, "rgba(115, 255, 180, 0.38)");
  wash.addColorStop(0.44, "rgba(100, 60, 255, 0.2)");
  wash.addColorStop(1, "rgba(0, 0, 0, 0)");
  context.fillStyle = wash;
  context.fillRect(0, 0, width, height);

  context.globalAlpha = 0.26 + flash * 0.6;
  context.strokeStyle = `rgba(145, 255, 217, ${0.42 + pulse * 0.4})`;
  context.lineWidth = 2 + pulse * 3;
  for (let ring = 0; ring < 8; ring += 1) {
    context.beginPath();
    context.ellipse(
      projection.x,
      centerY,
      radius * (0.5 + ring * 0.16 + pulse * 0.05),
      radius * (0.22 + ring * 0.055),
      progress * Math.PI * 2.8 + ring * 0.42,
      0,
      Math.PI * 2,
    );
    context.stroke();
  }

  context.globalAlpha = 0.36 + flash * 0.34;
  context.strokeStyle = "rgba(225, 255, 235, 0.84)";
  context.lineWidth = 2;
  for (let bolt = 0; bolt < 6; bolt += 1) {
    const angle = progress * Math.PI * 6 + bolt * ((Math.PI * 2) / 6);
    context.beginPath();
    context.moveTo(projection.x + Math.cos(angle) * radius * 0.25, centerY + Math.sin(angle) * radius * 0.12);
    context.lineTo(projection.x + Math.cos(angle + 0.2) * radius * 0.68, centerY + Math.sin(angle + 0.2) * radius * 0.34);
    context.lineTo(projection.x + Math.cos(angle - 0.1) * radius * 0.95, centerY + Math.sin(angle - 0.1) * radius * 0.48);
    context.stroke();
  }

  context.globalAlpha = 0.12 + pulse * 0.16;
  context.fillStyle = "rgba(80, 255, 170, 1)";
  context.fillRect(projection.x - radius * 0.42, centerY - radius * 1.32, radius * 0.84, radius * 2.35);
  context.restore();
}

function getFinalFpsVerticalProjection(depth, height, horizon) {
  const verticalHeight = Math.min(height * 1.6, height * 0.9 / Math.max(0.12, depth));
  const top = horizon - verticalHeight / 2;

  return { top, height: verticalHeight };
}

function drawFinalFpsCeilingLight(context, width, height, horizon) {
  const lightPosition = projectFinalFpsPoint(FINAL_FPS_ROOM_SIZE / 2, FINAL_FPS_ROOM_SIZE / 2, width);
  const player = finalFpsState.player;
  const playerDistanceToLight = Math.hypot(player.x - FINAL_FPS_ROOM_SIZE / 2, player.y - FINAL_FPS_ROOM_SIZE / 2);

  if (!lightPosition || playerDistanceToLight < 0.26 || lightPosition.x < -width * 0.2 || lightPosition.x > width * 1.2) {
    return;
  }

  const depthScale = Math.max(0.65, Math.min(1.45, 1.6 / lightPosition.depth));
  const bulbSize = Math.max(8, Math.min(30, lightPosition.scale * 0.026));
  const ceilingY = Math.max(6, Math.min(horizon * 0.16, horizon - lightPosition.scale * 0.2));
  const bulbX = lightPosition.x;
  const socketY = ceilingY + bulbSize * 1.35;
  const bulbY = socketY + bulbSize * 0.9;
  const glowRadius = Math.min(width, height) * 0.28 * depthScale;

  const glow = context.createRadialGradient(bulbX, bulbY, 4, bulbX, bulbY, glowRadius);

  glow.addColorStop(0, "rgba(255, 225, 150, 0.34)");
  glow.addColorStop(0.28, "rgba(255, 203, 118, 0.18)");
  glow.addColorStop(1, "rgba(255, 203, 118, 0)");
  context.fillStyle = glow;
  context.fillRect(0, 0, width, height);

  context.strokeStyle = "rgba(20, 13, 8, 0.92)";
  context.lineWidth = Math.max(2, bulbSize * 0.14);
  context.beginPath();
  context.moveTo(bulbX, ceilingY);
  context.lineTo(bulbX, socketY);
  context.stroke();

  context.fillStyle = "#2a1a0e";
  context.fillRect(bulbX - bulbSize * 0.55, socketY - bulbSize * 0.32, bulbSize * 1.1, bulbSize * 0.62);

  context.fillStyle = "#ffe2a3";
  context.shadowColor = "rgba(255, 220, 145, 0.9)";
  context.shadowBlur = bulbSize * 1.25;
  context.beginPath();
  context.ellipse(bulbX, bulbY, bulbSize * 0.48, bulbSize * 0.62, 0, 0, Math.PI * 2);
  context.fill();
  context.shadowBlur = 0;
  context.fillStyle = "rgba(255, 255, 255, 0.42)";
  context.beginPath();
  context.ellipse(bulbX - bulbSize * 0.16, bulbY - bulbSize * 0.18, bulbSize * 0.12, bulbSize * 0.24, 0.2, 0, Math.PI * 2);
  context.fill();
}

function projectFinalFpsPoint(worldX, worldY, width) {
  const player = finalFpsState.player;
  const relX = worldX - player.x;
  const relY = worldY - player.y;
  const forwardX = Math.cos(player.angle);
  const forwardY = Math.sin(player.angle);
  const rightX = Math.cos(player.angle + Math.PI / 2);
  const rightY = Math.sin(player.angle + Math.PI / 2);
  const depth = relX * forwardX + relY * forwardY;
  const side = relX * rightX + relY * rightY;

  if (depth <= 0.12) {
    return null;
  }

  const projectionScale = width / 2 / Math.tan(Math.PI / 6);
  return {
    x: width / 2 + (side / depth) * projectionScale,
    depth,
    scale: projectionScale / depth,
  };
}

function drawFinalFpsJoystick(context, width, height) {
  const baseX = finalFpsState.joystick.active ? finalFpsState.joystick.startX : width * 0.16;
  const baseY = finalFpsState.joystick.active ? finalFpsState.joystick.startY : height * 0.74;
  const knobX = finalFpsState.joystick.active ? finalFpsState.joystick.x : baseX;
  const knobY = finalFpsState.joystick.active ? finalFpsState.joystick.y : baseY;

  context.strokeStyle = "rgba(255, 255, 255, 0.22)";
  context.lineWidth = 2;
  context.beginPath();
  context.arc(baseX, baseY, 54, 0, Math.PI * 2);
  context.stroke();
  context.strokeStyle = "rgba(255, 255, 255, 0.42)";
  context.beginPath();
  context.moveTo(knobX - 13, knobY);
  context.lineTo(knobX + 13, knobY);
  context.moveTo(knobX, knobY - 13);
  context.lineTo(knobX, knobY + 13);
  context.stroke();
  context.fillStyle = "rgba(255, 255, 255, 0.1)";
  context.beginPath();
  context.arc(knobX, knobY, 16, 0, Math.PI * 2);
  context.fill();
}

function drawFinalFpsBlink(context, width, height, timestamp) {
  if (finalFpsState.tutorialPhase !== "eyeOpening") {
    return;
  }

  const age = timestamp - finalFpsState.blinkStartedAt;
  const open = Math.min(1, easeOutCubic(Math.max(0, age) / FINAL_FPS_EYE_OPEN_MS));

  const visibleHeight = height * open;
  context.fillStyle = "#000000";
  context.fillRect(0, 0, width, (height - visibleHeight) / 2);
  context.fillRect(0, (height + visibleHeight) / 2, width, (height - visibleHeight) / 2 + 2);
}

async function typeOpeningDialogueLine(dialogue, dialogueText, text, options = {}) {
  dialogueText.textContent = "";
  showElement(dialogue);
  window.requestAnimationFrame(() => dialogue.classList.add("is-visible"));
  await waitWhileLandscape(120);
  await typeWizardSpeech(dialogueText, text, OPENING_WIZARD_DIALOGUE_TYPE_SPEED_MS);

  if (options.waitForContinue) {
    await waitForOpeningDialogueContinue(dialogue);
  }
}

async function typeOpeningJohnLine(boost, boostText, text, options = {}) {
  boostText.textContent = "";
  showElement(boost);
  window.requestAnimationFrame(() => boost.classList.add("is-visible"));
  await waitWhileLandscape(120);
  await typeWizardSpeech(boostText, text, OPENING_SPEED_BOOST_TYPE_SPEED_MS);

  if (options.waitForContinue) {
    await waitForOpeningDialogueContinue(boost);
  }
}

function waitForOpeningDialogueContinue(container, options = {}) {
  return new Promise((resolve) => {
    const prompt = document.createElement("span");
    prompt.className = "opening-dialogue-continue";
    prompt.textContent = "click to continue";
    container.append(prompt);
    const runId = options.runId;

    const finish = (event) => {
      event?.preventDefault?.();
      if (runId !== undefined && runId !== loadingState.openingWizardRunId) {
        document.removeEventListener("pointerdown", finish, true);
        document.removeEventListener("touchstart", finish, true);
        prompt.remove();
        resolve();
        return;
      }
      document.removeEventListener("pointerdown", finish, true);
      document.removeEventListener("touchstart", finish, true);
      prompt.remove();
      resolve();
    };

    window.setTimeout(() => {
      document.addEventListener("pointerdown", finish, true);
      document.addEventListener("touchstart", finish, true);
    }, 120);
  });
}

function createCupTableCups() {
  const cupColors = ["#ff4fc8", "#f7e24a", "#9b62ff", "#43e66d", "#40d8ff", "#ff8c33"];
  const cupAnchors = [
    [0.24, 0.23], [0.42, 0.2], [0.6, 0.21], [0.76, 0.25],
    [0.16, 0.37], [0.34, 0.35], [0.52, 0.34], [0.7, 0.37], [0.84, 0.42],
    [0.23, 0.52], [0.43, 0.5], [0.62, 0.51], [0.79, 0.55],
    [0.15, 0.67], [0.35, 0.68], [0.55, 0.67], [0.74, 0.7],
    [0.27, 0.83], [0.49, 0.84], [0.68, 0.82],
  ];

  return shuffleArray(cupAnchors)
    .slice(0, CUP_TABLE_COUNT)
    .map(([x, y]) => ({
      x: x + (Math.random() - 0.5) * 0.035,
      y: y + (Math.random() - 0.5) * 0.03,
      liquid: cupColors[Math.floor(Math.random() * cupColors.length)],
      wobble: Math.random() * Math.PI * 2,
      rotation: (Math.random() - 0.5) * 0.18,
    }));
}

function shuffleArray(items) {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }

  return shuffled;
}

function createCupTableDecor(cups) {
  const cornerSlots = [
    { corner: "topLeft", x: 0.06, y: 0.18 },
    { corner: "topRight", x: 0.94, y: 0.18 },
    { corner: "bottomLeft", x: 0.08, y: 0.86 },
    { corner: "bottomRight", x: 0.92, y: 0.86 },
  ];
  const decorKinds = shuffleArray([
    { kind: "pan", size: 0.24, clearance: 0.18 },
    { kind: "bong", size: 0.32, clearance: 0.19 },
    { kind: "underwear", size: 0.26, clearance: 0.18 },
  ]);
  const corners = shuffleArray(cornerSlots).slice(0, decorKinds.length);
  const chosen = [];

  decorKinds.forEach((decor, index) => {
    const corner = corners[index];
    const slot = {
      ...decor,
      ...corner,
    };

    chosen.push({
      ...findClearCupTableDecorSlot(cups, slot, chosen),
      jitter: Math.random() * Math.PI * 2,
    });
  });

  return chosen;
}

function findClearCupTableDecorSlot(cups, slot, chosenDecor) {
  if (isCupTableDecorSlotClear(cups, slot, chosenDecor)) {
    return slot;
  }

  const edgeOffsets = [
    [-0.04, 0],
    [0.04, 0],
    [0, -0.04],
    [0, 0.04],
    [-0.035, -0.035],
    [0.035, -0.035],
    [-0.035, 0.035],
    [0.035, 0.035],
  ];

  for (const [offsetX, offsetY] of edgeOffsets) {
    const candidate = {
      ...slot,
      x: Math.max(0.04, Math.min(0.96, slot.x + offsetX)),
      y: Math.max(0.12, Math.min(0.9, slot.y + offsetY)),
    };

    if (isCupTableDecorSlotClear(cups, candidate, chosenDecor)) {
      return candidate;
    }
  }

  return slot;
}

function isCupTableDecorSlotClear(cups, slot, chosenDecor) {
  const clearOfCups = cups.every((cup) => {
    const distance = Math.hypot((cup.x - slot.x) * 1.08, (cup.y - slot.y) * 1.36);
    return distance > slot.clearance;
  });
  const clearOfDecor = chosenDecor.every((decor) => {
    const distance = Math.hypot((decor.x - slot.x) * 1.08, (decor.y - slot.y) * 1.36);
    return distance > (decor.clearance + slot.clearance) * 0.55;
  });

  return clearOfCups && clearOfDecor;
}

function startPhoneChallengePromptTest() {
  const canvas = document.querySelector("#mini-game-canvas");

  if (!canvas) {
    return;
  }

  if (miniGameState.animationFrame) {
    window.cancelAnimationFrame(miniGameState.animationFrame);
  }

  removeMiniGamePressListeners(canvas);
  canvas.removeEventListener("pointermove", handleMiniGameAim);

  const now = performance.now();
  miniGameState.canvas = canvas;
  miniGameState.context = canvas.getContext("2d");
  miniGameState.status = "phoneDialogue";
  miniGameState.isRunning = true;
  miniGameState.lastFrameTime = now;
  miniGameState.phoneDialogueStartedAt = now - PHONE_DIALOGUE_LINE_DRAW_MS - 700;
  miniGameState.phoneDialogueLineIndex = PHONE_DIALOGUE_LINES.length - 1;
  miniGameState.phoneDialogueLineStartedAt = now - PHONE_DIALOGUE_LINES[PHONE_DIALOGUE_LINES.length - 1].text.length * PHONE_DIALOGUE_TYPE_SPEED_MS - 160;
  miniGameState.phoneDialogueTypingActive = false;
  miniGameState.phoneChallengePromptAt = now;
  miniGameState.phoneChallengeAcceptedAt = 0;
  miniGameState.phoneChallengeButton = null;
  miniGameState.cupTableStartedAt = 0;
  miniGameState.cupTableCups = [];
  miniGameState.cupTableDecor = [];
  miniGameState.cupTableJohnStartedAt = 0;
  miniGameState.cupTableJohnLineIndex = 0;
  miniGameState.cupTableJohnLineStartedAt = 0;
  miniGameState.cupTableJohnTypingActive = false;
  miniGameState.cupTableJohnButtons = null;
  miniGameState.cupTableJohnAccepted = false;
  loadingState.activeSurface = "miniGame";
  showActiveSurface();
  resizeMiniGameCanvas();
  loadMiniGameWizardSprite();
  loadJohnCharacterImage();
  unlockGameAudio();

  addMiniGamePressListeners(canvas);
  canvas.addEventListener("pointermove", handleMiniGameAim);
  miniGameState.animationFrame = window.requestAnimationFrame(updateMiniGame);
}

function startPhoneChapter() {
  const canvas = document.querySelector("#mini-game-canvas");

  if (!canvas) {
    return;
  }

  if (miniGameState.animationFrame) {
    window.cancelAnimationFrame(miniGameState.animationFrame);
  }

  removeMiniGamePressListeners(canvas);
  canvas.removeEventListener("pointermove", handleMiniGameAim);

  const now = performance.now();
  miniGameState.canvas = canvas;
  miniGameState.context = canvas.getContext("2d");
  miniGameState.status = "phone";
  miniGameState.isRunning = true;
  miniGameState.lastFrameTime = now;
  miniGameState.phoneTransitionStartedAt = 0;
  miniGameState.phoneStartedAt = now;
  miniGameState.phoneRingStartedAt = 0;
  miniGameState.phoneAnsweredAt = 0;
  miniGameState.phoneRect = null;
  miniGameState.phoneDialogueStartedAt = 0;
  miniGameState.phoneDialogueLineIndex = 0;
  miniGameState.phoneDialogueLineStartedAt = 0;
  miniGameState.phoneDialogueTypingActive = false;
  miniGameState.phoneChallengePromptAt = 0;
  miniGameState.phoneChallengeAcceptedAt = 0;
  miniGameState.phoneChallengeButton = null;
  miniGameState.finishEffect = null;
  miniGameState.failedButtons = null;
  miniGameState.bullets = [];
  miniGameState.goblins = [];
  miniGameState.apples = [];
  miniGameState.explosions = [];
  miniGameState.hitMarkers = [];
  loadingState.activeSurface = "miniGame";
  showActiveSurface();
  resizeMiniGameCanvas();
  loadMiniGameWizardSprite();
  loadJohnCharacterImage();
  unlockGameAudio();

  addMiniGamePressListeners(canvas);
  canvas.addEventListener("pointermove", handleMiniGameAim);
  miniGameState.animationFrame = window.requestAnimationFrame(updateMiniGame);
}

function startPostGamePhone(timestamp, fromSkip = false) {
  miniGameState.status = "phone";
  miniGameState.isRunning = true;
  miniGameState.phoneTransitionStartedAt = 0;
  miniGameState.phoneStartedAt = timestamp;
  miniGameState.phoneRingStartedAt = 0;
  miniGameState.phoneAnsweredAt = 0;
  miniGameState.phoneRect = null;
  miniGameState.finishEffect = null;
  miniGameState.failedButtons = null;
  miniGameState.bullets = [];
  miniGameState.goblins = [];
  miniGameState.apples = [];
  miniGameState.tikiMen = [];
  miniGameState.lavaSnakes = [];
  miniGameState.helperFairies = [];
  miniGameState.fairyBombs = [];
  miniGameState.explosions = [];
  miniGameState.hitMarkers = [];

  if (fromSkip) {
    miniGameState.failedAt = 0;
  }
}

function updateMiniGameWizardTip(timestamp) {
  if (!miniGameState.wizardTipStartedAt) {
    return;
  }

  const age = timestamp - miniGameState.wizardTipStartedAt;
  const typeDuration = MINI_GAME_WIZARD_TIP_TEXT.length * MINI_GAME_WIZARD_TIP_TYPE_SPEED_MS;
  const isTyping = age >= 0 && age < typeDuration;

  if (isTyping && !miniGameState.wizardTipTypingActive) {
    miniGameState.wizardTipTypingActive = startTypingSound();
  }

  if (!isTyping && miniGameState.wizardTipTypingActive) {
    miniGameState.wizardTipTypingActive = false;
    stopTypingSound();
  }
}

function maybeSpawnGoblin(timestamp) {
  if (miniGameState.bossSpawned || timestamp - miniGameState.startedAt >= MINI_GAME_DURATION_MS) {
    return;
  }

  const difficulty = getMiniGameDifficulty(timestamp);
  const spawnInterval = MINI_GAME_GOBLIN_SPAWN_MS - difficulty * 840;

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
      ? MINI_GAME_GOBLIN_SPEED + 8 + difficulty * 40
      : MINI_GAME_GOBLIN_SPEED + 6 + difficulty * 66 + Math.random() * difficulty * 20,
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
  updateSmokeDeaths(timestamp);
  moveLavaHazards(slowDeltaSeconds, timestamp);
  updateFairyHutAndHelpers(timestamp, slowDeltaSeconds);
  updateTikiMen(timestamp, slowDeltaSeconds);
  moveGoblins(slowDeltaSeconds);
  trimMiniGameObjects();

  if (!effect || effect.resolved || timestamp - effect.startedAt < MINI_GAME_FINISH_EFFECT_MS) {
    return;
  }

  effect.resolved = true;
  miniGameState.status = effect.kind === "victory" ? "victory" : "failed";
  miniGameState.bullets = [];

  if (effect.kind === "victory") {
    miniGameState.victoryStartedAt = timestamp;
    miniGameState.goblins = [];
    miniGameState.apples = [];
    return;
  }

  miniGameState.failedAt = timestamp;
  miniGameState.failedButtons = null;
}

function startMiniGameFinish(kind, x, y) {
  if (miniGameState.status !== "playing") {
    return;
  }

  const turret = getTurretPosition();

  miniGameState.status = "finishing";
  miniGameState.bullets = [];
  stopGangGoblinsMusic(1.7);
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

function updateVolcanoEvents(timestamp, deltaSeconds) {
  const elapsed = timestamp - miniGameState.startedAt;

  if (!miniGameState.volcano) {
    if (
      miniGameState.volcanoWave < 1 &&
      elapsed >= MINI_GAME_VOLCANO_START_MS &&
      elapsed < MINI_GAME_VOLCANO_START_MS + MINI_GAME_VOLCANO_DURATION_MS
    ) {
      spawnVolcano(timestamp, 1);
    } else if (miniGameState.volcanoWave < 2 && elapsed >= MINI_GAME_FINAL_VOLCANO_START_MS) {
      spawnVolcano(timestamp, 2);
    }
  }

  if (!miniGameState.volcano) {
    return;
  }

  const volcanoAge = timestamp - miniGameState.volcano.startedAt;

  if (miniGameState.volcano.wave === 1 && volcanoAge > MINI_GAME_VOLCANO_DURATION_MS) {
    miniGameState.volcano.isFading = true;
  }

  if (!miniGameState.volcano.isFading && timestamp - miniGameState.volcano.lastRockAt >= MINI_GAME_VOLCANO_ROCK_INTERVAL_MS) {
    miniGameState.volcano.lastRockAt = timestamp;
    launchLavaRock(timestamp);
  }

  miniGameState.volcano.pulse += deltaSeconds * 5;
}

function spawnVolcano(timestamp, wave) {
  const turret = getTurretPosition();
  const spot = getVolcanoSpawnSpot(turret);

  miniGameState.volcanoWave = wave;
  miniGameState.volcano = {
    x: spot.x,
    y: spot.y,
    wave,
    startedAt: timestamp,
    lastRockAt: timestamp - 500,
    pulse: 0,
    isFading: false,
  };
}

function getVolcanoSpawnSpot(turret) {
  let spot = null;
  let attempts = 0;

  while (!spot && attempts < 80) {
    attempts += 1;
    const candidate = {
      x: 76 + Math.random() * (window.innerWidth - 152),
      y: 78 + Math.random() * Math.max(80, window.innerHeight * 0.38),
    };
    const farFromTurret = Math.hypot(candidate.x - turret.x, candidate.y - turret.y) > 180;
    const farFromLake =
      !miniGameState.lake ||
      Math.hypot(candidate.x - miniGameState.lake.x, candidate.y - miniGameState.lake.y) >
        miniGameState.lake.radiusX + 95;

    if (farFromTurret && farFromLake) {
      spot = candidate;
    }
  }

  return spot || {
    x: window.innerWidth * 0.72,
    y: Math.max(80, Math.min(window.innerHeight * 0.35, turret.y - 190)),
  };
}

function launchLavaRock(timestamp) {
  const volcano = miniGameState.volcano;
  const turret = getTurretPosition();
  let target = null;
  let attempts = 0;

  while (!target && attempts < 60) {
    attempts += 1;
    const candidate = {
      x: 48 + Math.random() * (window.innerWidth - 96),
      y: 60 + Math.random() * (window.innerHeight - 150),
    };

    if (Math.hypot(candidate.x - turret.x, candidate.y - turret.y) > 180) {
      target = candidate;
    }
  }

  target = target || { x: window.innerWidth / 2, y: Math.max(70, turret.y - 170) };

  playSoundEffect("volcanoRockLaunch", { minGap: 180 });
  playSoundEffect("lavaWarning", { minGap: 180 });
  miniGameState.lavaRocks.push({
    x: volcano.x,
    y: volcano.y - 32,
    targetX: target.x,
    targetY: target.y,
    startedAt: timestamp,
    landAt: timestamp + 1100,
    phase: Math.random() * Math.PI * 2,
  });
}

function moveLavaHazards(deltaSeconds, timestamp) {
  for (let index = miniGameState.lavaRocks.length - 1; index >= 0; index -= 1) {
    const rock = miniGameState.lavaRocks[index];
    const progress = Math.min((timestamp - rock.startedAt) / (rock.landAt - rock.startedAt), 1);
    const arc = Math.sin(progress * Math.PI) * 120;

    rock.x = rock.x + (rock.targetX - rock.x) * Math.min(deltaSeconds * 3.2, 1);
    rock.y = rock.y + (rock.targetY - rock.y - arc) * Math.min(deltaSeconds * 3.2, 1);

    if (progress >= 1) {
      miniGameState.lavaRocks.splice(index, 1);
      triggerScreenShake(180, 4.5);
      playSoundEffect("lavaImpact", { minGap: 80 });
      miniGameState.explosions.push({
        x: rock.targetX,
        y: rock.targetY,
        size: 36,
        type: "lava",
        startedAt: performance.now(),
        pieces: Array.from({ length: 8 }, () => ({
          x: 0,
          y: 0,
          vx: (Math.random() - 0.5) * 120,
          vy: (Math.random() - 0.5) * 120,
        })),
      });
      spawnLavaSnake(rock.targetX, rock.targetY);
    }
  }

  const turret = getTurretPosition();

  miniGameState.lavaSnakes.forEach((snake) => {
    const dx = turret.x - snake.x;
    const dy = turret.y - snake.y;
    const distance = Math.hypot(dx, dy) || 1;
    snake.phase += deltaSeconds * 9;
    snake.angle = Math.atan2(dy, dx);
    snake.x += (dx / distance) * snake.speed * deltaSeconds;
    snake.y += (dy / distance) * snake.speed * deltaSeconds;
  });

  miniGameState.lavaPools.forEach((pool) => {
    for (let goblinIndex = miniGameState.goblins.length - 1; goblinIndex >= 0; goblinIndex -= 1) {
      const goblin = miniGameState.goblins[goblinIndex];

      if (!goblin.isBoss && Math.hypot(goblin.x - pool.x, goblin.y - pool.y) <= pool.radius + goblin.size * 0.4) {
        miniGameState.goblins.splice(goblinIndex, 1);
        createGoblinDeath(goblin.x, goblin.y, goblin.size, "goblin", false);
      }
    }
  });
}

function spawnLavaSnake(x, y) {
  miniGameState.lavaSnakes.push({
    x,
    y,
    size: 22,
    speed: 50,
    health: 2,
    maxHealth: 2,
    phase: Math.random() * Math.PI * 2,
  });
}

function updateFairyHutAndHelpers(timestamp, deltaSeconds) {
  const elapsed = timestamp - miniGameState.startedAt;

  if (!miniGameState.fairyHut && elapsed >= MINI_GAME_FAIRY_HUT_START_MS) {
    spawnFairyHut(timestamp);
  }

  if (miniGameState.fairyHut) {
    const hut = miniGameState.fairyHut;
    if (
      miniGameState.helperFairies.length < MINI_GAME_MAX_HELPER_FAIRIES &&
      timestamp - hut.lastSpawnAt >= MINI_GAME_FAIRY_SPAWN_MS
    ) {
      hut.lastSpawnAt = timestamp;
      spawnHelperFairy(timestamp);
    }
  }

  updateHelperFairies(timestamp, deltaSeconds);
}

function spawnFairyHut(timestamp) {
  const turret = getTurretPosition();
  let hut = null;
  let attempts = 0;

  while (!hut && attempts < 80) {
    attempts += 1;
    const candidate = {
      x: 64 + Math.random() * (window.innerWidth - 128),
      y: 66 + Math.random() * (window.innerHeight - 190),
    };
    const farFromTurret = Math.hypot(candidate.x - turret.x, candidate.y - turret.y) > 135;
    const farFromLake =
      !miniGameState.lake ||
      Math.hypot(candidate.x - miniGameState.lake.x, candidate.y - miniGameState.lake.y) >
        miniGameState.lake.radiusX + 50;

    if (farFromTurret && farFromLake) {
      hut = candidate;
    }
  }

  miniGameState.fairyHut = {
    ...(hut || { x: window.innerWidth * 0.18, y: window.innerHeight * 0.54 }),
    startedAt: timestamp,
    lastSpawnAt: timestamp - 700,
  };
}

function spawnHelperFairy(timestamp) {
  const hut = miniGameState.fairyHut;

  if (!hut) {
    return;
  }

  miniGameState.helperFairies.push({
    x: hut.x,
    y: hut.y - 16,
    vx: (Math.random() - 0.5) * 40,
    vy: -30,
    size: 12,
    health: 3,
    maxHealth: 3,
    lastSwingAt: 0,
    lastHitAt: 0,
    phase: Math.random() * Math.PI * 2,
    startedAt: timestamp,
  });
  playSoundEffect("fairySpawn", { minGap: 220 });
}

function updateHelperFairies(timestamp, deltaSeconds) {
  miniGameState.helperFairies.forEach((fairy) => {
    fairy.phase += deltaSeconds * 10;
    const target = findNearestFairyTarget(fairy);

    if (target) {
      const dx = target.x - fairy.x;
      const dy = target.y - fairy.y;
      const distance = Math.hypot(dx, dy) || 1;
      const desiredDistance = 38;

      if (distance > desiredDistance) {
        fairy.x += (dx / distance) * 84 * deltaSeconds;
        fairy.y += (dy / distance) * 84 * deltaSeconds;
      } else if (timestamp - fairy.lastSwingAt > 900) {
        fairy.lastSwingAt = timestamp;
        damageFairyTarget(target, 1);
        createHitMarker(target.x, target.y - (target.size || 20), "-1", "#9be7ff", 12);
        playSoundEffect("fairyAttack", { minGap: 120 });
      }
    } else {
      fairy.x += Math.sin(fairy.phase) * 22 * deltaSeconds;
      fairy.y += Math.cos(fairy.phase * 0.7) * 18 * deltaSeconds;
    }

    fairy.x = Math.max(24, Math.min(window.innerWidth - 24, fairy.x));
    fairy.y = Math.max(34, Math.min(window.innerHeight - 58, fairy.y));
    damageFairyFromEnemies(fairy, timestamp);
  });
}

function findNearestFairyTarget(fairy) {
  const candidates = [...miniGameState.goblins, ...miniGameState.tikiMen]
    .filter((target) => !target.isBoss)
    .map((target) => ({
      target,
      distance: Math.hypot(target.x - fairy.x, target.y - fairy.y),
    }))
    .sort((a, b) => a.distance - b.distance);

  return candidates[0]?.target || null;
}

function damageFairyTarget(target, damage) {
  target.health -= damage;

  if (target.health > 0) {
    return;
  }

  if (miniGameState.tikiMen.includes(target)) {
    killTiki(target);
    return;
  }

  const index = miniGameState.goblins.indexOf(target);
  if (index >= 0) {
    miniGameState.goblins.splice(index, 1);
    createGoblinDeath(target.x, target.y, target.size);
  }
}

function damageFairyFromEnemies(fairy, timestamp) {
  const attacker = [...miniGameState.goblins, ...miniGameState.tikiMen].find(
    (enemy) => !enemy.isBoss && Math.hypot(enemy.x - fairy.x, enemy.y - fairy.y) < (enemy.size || 18) + 18
  );

  if (!attacker || timestamp - fairy.lastHitAt < 900) {
    return;
  }

  fairy.lastHitAt = timestamp;
  fairy.health -= 1;
  playSoundEffect("tikiAttack", { minGap: 120 });

  if (fairy.health <= 0) {
    killFairy(fairy);
  }
}

function killFairy(fairy) {
  const index = miniGameState.helperFairies.indexOf(fairy);

  if (index >= 0) {
    miniGameState.helperFairies.splice(index, 1);
  }

  miniGameState.magicBursts.push({
    x: fairy.x,
    y: fairy.y,
    type: "fairy",
    startedAt: performance.now(),
  });
  playSoundEffect("fairyDeath", { minGap: 120 });
}

function updateTikiMen(timestamp, deltaSeconds) {
  const elapsed = timestamp - miniGameState.startedAt;

  if (!miniGameState.bossSpawned && elapsed >= MINI_GAME_TIKI_START_MS && timestamp - miniGameState.lastTikiSpawnTime >= MINI_GAME_TIKI_SPAWN_MS) {
    miniGameState.lastTikiSpawnTime = timestamp;
    spawnTikiMan(timestamp);
  }

  const turret = getTurretPosition();
  miniGameState.tikiMen.forEach((tiki) => {
    const fairyTarget = miniGameState.helperFairies
      .map((fairy) => ({ fairy, distance: Math.hypot(fairy.x - tiki.x, fairy.y - tiki.y) }))
      .sort((a, b) => a.distance - b.distance)[0];
    const target = fairyTarget && fairyTarget.distance < 120 ? fairyTarget.fairy : turret;
    const dx = target.x - tiki.x;
    const dy = target.y - tiki.y;
    const distance = Math.hypot(dx, dy) || 1;

    tiki.phase += deltaSeconds * 10;
    tiki.angle = Math.atan2(dy, dx);
    tiki.x += (dx / distance) * tiki.speed * deltaSeconds;
    tiki.y += (dy / distance) * tiki.speed * deltaSeconds;

    if (target !== turret && distance < 24 && timestamp - tiki.lastAttackAt > 900) {
      tiki.lastAttackAt = timestamp;
      target.health -= 1;
      playSoundEffect("tikiAttack", { minGap: 120 });
      if (target.health <= 0) {
        killFairy(target);
      }
    }
  });
}

function spawnTikiMan(timestamp) {
  const corners = [
    { x: -24, y: -24 },
    { x: window.innerWidth + 24, y: -24 },
    { x: -24, y: window.innerHeight * 0.48 },
    { x: window.innerWidth + 24, y: window.innerHeight * 0.48 },
  ];
  const corner = corners[Math.floor(Math.random() * corners.length)];

  miniGameState.tikiMen.push({
    x: corner.x,
    y: corner.y,
    size: 18,
    speed: 58,
    health: 2,
    maxHealth: 2,
    phase: Math.random() * Math.PI * 2,
    angle: 0,
    lastAttackAt: 0,
    startedAt: timestamp,
  });
  playSoundEffect("tikiSpawn", { minGap: 220 });
}

function killTiki(tiki) {
  const index = miniGameState.tikiMen.indexOf(tiki);

  if (index >= 0) {
    miniGameState.tikiMen.splice(index, 1);
  }

  miniGameState.magicBursts.push({
    x: tiki.x,
    y: tiki.y,
    type: "tiki",
    startedAt: performance.now(),
  });
  miniGameState.droppedSpears.push({
    x: tiki.x,
    y: tiki.y,
    angle: tiki.angle || 0,
    startedAt: performance.now(),
  });
  playSoundEffect("tikiDeath", { minGap: 100 });
}

function createLavaPool(x, y) {
  miniGameState.lavaPools.push({
    x,
    y,
    radius: 34,
    startedAt: performance.now(),
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

function shouldCreateSmokeDeath(size) {
  const now = performance.now();

  return (
    size < 52 &&
    now - miniGameState.lastSmokeDeathAt >= MINI_GAME_SMOKE_DEATH_GAP_MS
  );
}

function createSmokeDeath(x, y, size) {
  const now = performance.now();
  miniGameState.lastSmokeDeathAt = now;
  miniGameState.smokeDeaths.push({
    x,
    y,
    originX: x,
    originY: y,
    size,
    startedAt: now,
    exploded: false,
    phase: Math.random() * Math.PI * 2,
    vx: (Math.random() > 0.5 ? 1 : -1) * (120 + Math.random() * 90),
    vy: -70 - Math.random() * 90,
    smokePuffs: [],
    lastPuffAt: now,
    lastFlySoundAt: 0,
  });
}

function updateSmokeDeaths(timestamp) {
  miniGameState.smokeDeaths.forEach((death) => {
    const age = timestamp - death.startedAt;
    const flightAge = Math.max(0, age - 650);

    if (!death.exploded && flightAge > 0) {
      const seconds = flightAge / 1000;
      death.x = death.originX + death.vx * seconds * 0.42 + Math.sin(seconds * 11 + death.phase) * 54;
      death.y = death.originY + death.vy * seconds * 0.34 + Math.cos(seconds * 15 + death.phase) * 38;
      death.x = Math.max(34, Math.min(window.innerWidth - 34, death.x));
      death.y = Math.max(38, Math.min(window.innerHeight - 58, death.y));

      if (timestamp - death.lastFlySoundAt > 190) {
        death.lastFlySoundAt = timestamp;
        playSoundEffect("smokeGoblinFly", { minGap: 45 });
      }

      if (timestamp - death.lastPuffAt > 95) {
        death.lastPuffAt = timestamp;
        death.smokePuffs.push({
          x: death.x + (Math.random() - 0.5) * death.size * 0.6,
          y: death.y + (Math.random() - 0.5) * death.size * 0.4,
          size: 5 + Math.random() * 8,
          startedAt: timestamp,
        });
      }
    }

    death.smokePuffs = death.smokePuffs.filter((puff) => timestamp - puff.startedAt < 850);

    if (!death.exploded && age >= 2000) {
      death.exploded = true;
      death.explodedAt = timestamp;
      triggerGreenSmokeBlast(death.x, death.y);
    }
  });
}

function triggerGreenSmokeBlast(x, y) {
  triggerScreenShake(420, 8);
  playSoundEffect("fairyBomb", { minGap: 0 });
  miniGameState.herbBursts.push({
    x,
    y,
    startedAt: performance.now(),
  });
  miniGameState.explosions.push({
    x,
    y,
    size: MINI_GAME_SMOKE_DEATH_BLAST_RADIUS,
    type: "green",
    startedAt: performance.now(),
    pieces: Array.from({ length: 14 }, () => ({
      x: 0,
      y: 0,
      vx: (Math.random() - 0.5) * 170,
      vy: (Math.random() - 0.5) * 170,
    })),
  });

  for (let goblinIndex = miniGameState.goblins.length - 1; goblinIndex >= 0; goblinIndex -= 1) {
    const goblin = miniGameState.goblins[goblinIndex];

    if (!goblin.isBoss && Math.hypot(goblin.x - x, goblin.y - y) <= MINI_GAME_SMOKE_DEATH_BLAST_RADIUS + goblin.size) {
      miniGameState.goblins.splice(goblinIndex, 1);
      createGoblinDeath(goblin.x, goblin.y, goblin.size, "goblin", false);
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

  for (let snakeIndex = miniGameState.lavaSnakes.length - 1; snakeIndex >= 0; snakeIndex -= 1) {
    const snake = miniGameState.lavaSnakes[snakeIndex];

    for (let bulletIndex = miniGameState.bullets.length - 1; bulletIndex >= 0; bulletIndex -= 1) {
      const bullet = miniGameState.bullets[bulletIndex];

      if (Math.hypot(snake.x - bullet.x, snake.y - bullet.y) <= snake.size + bullet.radius) {
        miniGameState.bullets.splice(bulletIndex, 1);
        snake.health -= bullet.damage;
        createHitMarker(snake.x, snake.y - snake.size, `-${bullet.damage}`, "#ff6d2e", 13);

        if (snake.health <= 0) {
          miniGameState.lavaSnakes.splice(snakeIndex, 1);
          playSoundEffect("snakeHiss", { minGap: 80 });
          createLavaPool(snake.x, snake.y);
        }

        break;
      }
    }
  }

  for (let tikiIndex = miniGameState.tikiMen.length - 1; tikiIndex >= 0; tikiIndex -= 1) {
    const tiki = miniGameState.tikiMen[tikiIndex];

    for (let bulletIndex = miniGameState.bullets.length - 1; bulletIndex >= 0; bulletIndex -= 1) {
      const bullet = miniGameState.bullets[bulletIndex];

      if (Math.hypot(tiki.x - bullet.x, tiki.y - bullet.y) <= tiki.size + bullet.radius) {
        miniGameState.bullets.splice(bulletIndex, 1);
        tiki.health -= bullet.damage;
        createHitMarker(tiki.x, tiki.y - tiki.size, `-${bullet.damage}`, "#ffd64a", 12);

        if (tiki.health <= 0) {
          killTiki(tiki);
        }

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
  const touchedTiki = miniGameState.tikiMen.find(
    (tiki) => Math.hypot(tiki.x - turret.x, tiki.y - turret.y) <= tiki.size + hitRadius
  );

  if (touchedTiki) {
    failMiniGame(touchedTiki.x, touchedTiki.y);
    return;
  }

  const touchedSnake = miniGameState.lavaSnakes.find(
    (snake) => Math.hypot(snake.x - turret.x, snake.y - turret.y) <= snake.size + hitRadius
  );

  if (touchedSnake) {
    failMiniGame(touchedSnake.x, touchedSnake.y);
    return;
  }

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

function createGoblinDeath(x, y, size, soundType = "goblin", allowSpecial = true) {
  if (soundType === "goblin") {
    if (allowSpecial && shouldCreateSmokeDeath(size)) {
      createSmokeDeath(x, y, size);
      return;
    }

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
  miniGameState.smokeDeaths = miniGameState.smokeDeaths.filter(
    (death) => !death.exploded || now - death.explodedAt < 650
  );
  miniGameState.herbBursts = miniGameState.herbBursts.filter((burst) => now - burst.startedAt < 1600);
  miniGameState.magicBursts = miniGameState.magicBursts.filter((burst) => now - burst.startedAt < 800);
  miniGameState.droppedSpears = miniGameState.droppedSpears.filter((spear) => now - spear.startedAt < 1000);
  miniGameState.lavaRocks = miniGameState.lavaRocks.filter((rock) => now - rock.startedAt < 1800);
  miniGameState.lavaPools = miniGameState.lavaPools.filter((pool) => now - pool.startedAt < 1000);
  miniGameState.tikiMen = miniGameState.tikiMen.filter(
    (tiki) => tiki.x > -70 && tiki.x < width + 70 && tiki.y > -70 && tiki.y < height + 70
  );
  miniGameState.scorchMarks = miniGameState.scorchMarks.filter(
    (mark) => !mark.createdAt || now - mark.createdAt < 620
  );
  if (miniGameState.volcano?.isFading && now - miniGameState.volcano.startedAt > MINI_GAME_VOLCANO_DURATION_MS + 900) {
    miniGameState.volcano = null;
  }
  miniGameState.goblins = miniGameState.goblins.filter((goblin) => goblin.y < height + 40);
  miniGameState.explosions = miniGameState.explosions.filter(
    (explosion) => now - explosion.startedAt < (explosion.type === "golden" || explosion.type === "green" || explosion.type === "lava" ? 720 : MINI_GAME_DEATH_ANIMATION_MS)
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
  drawHerbBursts(context);
  drawLevelPulses(context);
  drawTrails(context);
  drawVolcanoHazards(context);
  drawFairyHut(context);
  drawScorchMarks(context);
  drawForestObstacles(context);
  drawApples(context);
  drawAppleSplatters(context);
  drawFrogs(context);
  drawFairyBombs(context);
  drawShells(context);
  drawBullets(context);
  drawGoblins(context);
  drawSmokeDeaths(context);
  drawLavaSnakes(context);
  drawHelperFairies(context);
  drawTikiMen(context);
  drawDroppedSpears(context);
  drawMagicBursts(context);
  drawExplosions(context);
  drawHitMarkers(context);
  drawTurret(context);
  context.restore();
  drawFailedGameplayFade(context, gameplayOpacity);
  drawMiniGameFinishEffect(context);
  drawMiniGameWizardTipOverlay(context);
  drawPostGamePhone(context);
  drawPhoneDialogue(context);
  drawCupTableScene(context);
  drawMiniGameHud(context);
  if (miniGameState.status === "playing") {
    drawLevelMessages(context);
  }
}

function loadMiniGameWizardSprite() {
  if (miniGameState.wizardTipImage) {
    return miniGameState.wizardTipImage;
  }

  const image = new Image();
  image.src = MINI_GAME_WIZARD_SPRITE_URL;
  miniGameState.wizardTipImage = image;
  return image;
}

function loadJohnCharacterImage() {
  if (miniGameState.johnImage) {
    return miniGameState.johnImage;
  }

  const image = new Image();
  image.src = JOHN_CHARACTER_IMAGE_URL;
  miniGameState.johnImage = image;
  return image;
}

function drawMiniGameWizardTipOverlay(context) {
  if (miniGameState.status !== "playing" || !miniGameState.wizardTipStartedAt) {
    return;
  }

  const now = performance.now();
  const age = now - miniGameState.wizardTipStartedAt;
  const typeDuration = MINI_GAME_WIZARD_TIP_TEXT.length * MINI_GAME_WIZARD_TIP_TYPE_SPEED_MS;
  const exitStart = typeDuration + MINI_GAME_WIZARD_TIP_HOLD_MS;
  const totalDuration = exitStart + MINI_GAME_WIZARD_TIP_EXIT_MS;

  if (age < 0 || age > totalDuration) {
    return;
  }

  const enter = Math.min(age / 520, 1);
  const exit = age > exitStart ? Math.min((age - exitStart) / MINI_GAME_WIZARD_TIP_EXIT_MS, 1) : 0;
  const easedEnter = 1 - Math.pow(1 - enter, 3);
  const easedExit = exit * exit;
  const opacity = Math.max(0, Math.min(easedEnter, 1 - easedExit));
  const wizardHeight = Math.max(220, Math.min(310, window.innerHeight * 0.82));
  const wizardWidth = wizardHeight * (543 / 724);
  const wizardX = Math.max(8, window.innerWidth * 0.035);
  const wizardY = window.innerHeight - wizardHeight * 0.62 + (1 - easedEnter) * 120 + easedExit * 130;
  const typedCharacters = Math.min(
    MINI_GAME_WIZARD_TIP_TEXT.length,
    Math.max(0, Math.floor(age / MINI_GAME_WIZARD_TIP_TYPE_SPEED_MS))
  );
  const visibleText = MINI_GAME_WIZARD_TIP_TEXT.slice(0, typedCharacters);
  const bubbleX = Math.min(window.innerWidth - 230, wizardX + wizardWidth * 0.78);
  const bubbleY = Math.max(54, window.innerHeight - 162);
  const bubbleWidth = Math.min(360, window.innerWidth - bubbleX - 18);
  const bubbleHeight = Math.max(74, Math.min(106, window.innerHeight * 0.27));

  context.save();
  context.globalAlpha = opacity;
  drawLargeRetroWizardSprite(context, wizardX, wizardY, wizardWidth, wizardHeight, now);
  drawWizardTipBubble(context, bubbleX, bubbleY, bubbleWidth, bubbleHeight, visibleText, typedCharacters < MINI_GAME_WIZARD_TIP_TEXT.length);
  context.restore();
}

function drawLargeRetroWizardSprite(context, x, y, width, height, now) {
  const image = loadMiniGameWizardSprite();
  const bob = Math.sin(now / 360) * 2;

  if (!image.complete || image.naturalWidth === 0) {
    return;
  }

  context.save();
  context.shadowColor = "rgba(92, 255, 146, 0.38)";
  context.shadowBlur = 18;
  context.imageSmoothingEnabled = false;
  context.drawImage(image, 0, 0, 543, 724, x, y + bob, width, height);
  context.restore();
}

function drawLargeRetroWizardBust(context, x, y, scale, now) {
  const bob = Math.sin(now / 360) * 2;

  context.save();
  context.translate(x, y + bob);
  context.scale(scale, scale);
  context.shadowColor = "rgba(92, 255, 146, 0.38)";
  context.shadowBlur = 18;

  context.fillStyle = "#07160d";
  context.fillRect(-42, -104, 86, 76);
  context.fillStyle = "#123d32";
  context.fillRect(-35, -100, 70, 72);
  context.fillStyle = "#1e6654";
  context.fillRect(-26, -98, 22, 68);
  context.fillStyle = "#9ee36a";
  context.fillRect(-28, -88, 8, 8);
  context.fillRect(19, -73, 7, 7);
  context.fillRect(1, -49, 8, 8);

  context.fillStyle = "#0a221c";
  context.fillRect(-54, -116, 110, 18);
  context.fillRect(-34, -149, 62, 34);
  context.fillRect(-23, -171, 48, 24);
  context.fillRect(-12, -190, 34, 24);
  context.fillStyle = "#1f6f5d";
  context.fillRect(-49, -119, 96, 14);
  context.fillRect(-29, -150, 55, 33);
  context.fillRect(-18, -169, 39, 23);
  context.fillRect(-7, -187, 27, 21);
  context.fillStyle = "#dcb64f";
  context.fillRect(1, -128, 13, 13);
  context.fillStyle = "#1a160e";
  context.fillRect(5, -124, 6, 6);
  context.fillStyle = "#f2d864";
  context.fillRect(-19, -158, 7, 7);
  context.fillRect(12, -177, 6, 6);

  context.fillStyle = "#f2b06f";
  context.fillRect(-22, -104, 45, 32);
  context.fillStyle = "#ffd3a0";
  context.fillRect(-13, -103, 28, 28);
  context.fillStyle = "#0b1110";
  context.fillRect(-13, -93, 6, 9);
  context.fillRect(9, -93, 6, 9);
  context.fillStyle = "#ffffff";
  context.fillRect(-16, -98, 9, 4);
  context.fillRect(8, -98, 9, 4);

  context.fillStyle = "#fff6d8";
  context.fillRect(-28, -73, 58, 14);
  context.fillRect(-24, -59, 50, 15);
  context.fillRect(-19, -44, 40, 16);
  context.fillRect(-12, -28, 26, 15);
  context.fillStyle = "#ddd0b4";
  context.fillRect(11, -58, 13, 18);
  context.fillRect(3, -41, 12, 18);

  context.fillStyle = "#164b3e";
  context.fillRect(-62, -69, 28, 46);
  context.fillRect(34, -68, 28, 45);
  context.fillStyle = "#2a8568";
  context.fillRect(-58, -63, 16, 32);
  context.fillRect(38, -62, 16, 30);
  context.fillStyle = "#dcb64f";
  context.fillRect(-49, -44, 7, 7);
  context.fillRect(45, -47, 7, 7);

  context.restore();
}

function drawWizardTipBubble(context, x, y, width, height, text, showCursor) {
  context.save();
  context.fillStyle = "rgba(3, 18, 10, 0.9)";
  context.strokeStyle = "rgba(156, 255, 156, 0.74)";
  context.shadowColor = "rgba(80, 255, 130, 0.36)";
  context.shadowBlur = 13;
  context.lineWidth = 2;
  context.fillRect(x, y, width, height);
  context.strokeRect(x, y, width, height);

  context.beginPath();
  context.moveTo(x, y + height - 24);
  context.lineTo(x - 20, y + height - 10);
  context.lineTo(x, y + height - 5);
  context.closePath();
  context.fill();
  context.stroke();

  context.shadowBlur = 0;
  context.fillStyle = "#ffffff";
  context.font = `bold ${Math.max(10, Math.min(13, window.innerHeight * 0.034))}px 'Courier New', monospace`;
  context.textAlign = "left";
  context.textBaseline = "top";
  const lines = wrapCanvasText(context, text, width - 24);
  const lineHeight = Math.max(14, Math.min(17, window.innerHeight * 0.042));

  lines.slice(0, 5).forEach((line, index) => {
    context.fillText(line, x + 12, y + 12 + index * lineHeight);
  });

  if (showCursor) {
    const cursorLine = Math.min(lines.length - 1, 4);
    const cursorText = lines[cursorLine] || "";
    const cursorX = x + 12 + context.measureText(cursorText).width + 3;
    const cursorY = y + 12 + cursorLine * lineHeight + 2;
    context.fillStyle = Math.floor(performance.now() / 180) % 2 ? "#ffffff" : "rgba(255, 255, 255, 0.25)";
    context.fillRect(cursorX, cursorY, 7, lineHeight - 4);
  }

  context.restore();
}

function wrapCanvasText(context, text, maxWidth) {
  const words = text.split(" ");
  const lines = [];
  let line = "";

  words.forEach((word) => {
    const testLine = line ? `${line} ${word}` : word;

    if (context.measureText(testLine).width <= maxWidth || !line) {
      line = testLine;
      return;
    }

    lines.push(line);
    line = word;
  });

  if (line) {
    lines.push(line);
  }

  return lines;
}

function drawFailedGameplayFade(context, gameplayOpacity) {
  if (miniGameState.status !== "failed" || gameplayOpacity >= 1) {
    return;
  }

  context.save();
  context.globalAlpha = 1 - gameplayOpacity;
  context.fillStyle = "#000000";
  context.fillRect(0, 0, window.innerWidth, window.innerHeight);
  context.restore();
}

function getMiniGameGameplayOpacity() {
  if (miniGameState.status === "victory") {
    const age = performance.now() - (miniGameState.victoryStartedAt || performance.now());
    return Math.max(0, 1 - age / 1000);
  }

  if (
    miniGameState.status === "phoneTransition" ||
    miniGameState.status === "phone" ||
    miniGameState.status === "phoneDialogue" ||
    miniGameState.status === "phoneDone" ||
    miniGameState.status === "cupTable"
  ) {
    return 0;
  }

  if (miniGameState.status === "failed") {
    const age = performance.now() - (miniGameState.failedAt || performance.now());

    if (age < 1000) {
      return 1;
    }

    return Math.max(0, 1 - (age - 1000) / 900);
  }

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

function drawPostGamePhone(context) {
  if (miniGameState.status !== "phone") {
    return;
  }

  const now = performance.now();
  const age = now - (miniGameState.phoneStartedAt || now);
  const answeredAge = miniGameState.phoneAnsweredAt ? now - miniGameState.phoneAnsweredAt : 0;
  const fadeIn = Math.min(age / POST_GAME_PHONE_FADE_MS, 1);
  const fadeOut = miniGameState.phoneAnsweredAt ? Math.min(answeredAge / POST_GAME_PHONE_PICKUP_FADE_MS, 1) : 0;
  const opacity = Math.max(0, fadeIn * (1 - fadeOut));
  const pickupScale = miniGameState.phoneAnsweredAt ? 1 + fadeOut * 0.22 : 1;
  const ringAge = miniGameState.phoneRingStartedAt ? now - miniGameState.phoneRingStartedAt : Infinity;
  const ringShake = getPhoneRingShake(ringAge);
  const phoneImage = loadRetroPhoneImage();
  const phoneAspect = phoneImage.complete && phoneImage.naturalWidth > 0 ? phoneImage.naturalWidth / phoneImage.naturalHeight : 1;
  const phoneWidth = Math.max(150, Math.min(250, window.innerHeight * 0.56));
  const phoneHeight = phoneWidth / phoneAspect;
  const phoneX = window.innerWidth / 2;
  const phoneY = window.innerHeight / 2 - 16;
  const shakeX = ringShake * Math.sin(now / 28);
  const shakeY = ringShake * Math.cos(now / 34) * 0.65;
  const rotation = ringShake * 0.014 * Math.sin(now / 42);

  miniGameState.phoneRect = {
    x: phoneX - phoneWidth / 2,
    y: phoneY - phoneHeight / 2,
    width: phoneWidth,
    height: phoneHeight,
  };

  context.save();
  context.globalAlpha = opacity;
  context.translate(phoneX + shakeX, phoneY + shakeY);
  context.scale(pickupScale, pickupScale);
  context.rotate(rotation);
  drawRetroPhone(context, phoneWidth, phoneHeight, ringShake);
  context.restore();

  if (!miniGameState.phoneAnsweredAt) {
    const textOpacity = opacity * (0.45 + Math.sin(now / 310) * 0.34);
    context.save();
    context.globalAlpha = textOpacity;
    context.font = `bold ${Math.max(12, Math.min(18, window.innerHeight * 0.045))}px 'Courier New', monospace`;
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillStyle = "#ffffff";
    context.shadowColor = "rgba(255, 255, 255, 0.5)";
    context.shadowBlur = 10;
    context.fillText("click to answer the phone", window.innerWidth / 2, phoneY + phoneHeight / 2 + 34);
    context.restore();
  }
}

function drawPhoneDialogue(context) {
  if (miniGameState.status !== "phoneDialogue") {
    return;
  }

  const now = performance.now();
  const age = now - (miniGameState.phoneDialogueStartedAt || now);
  const lineProgress = Math.min(age / PHONE_DIALOGUE_LINE_DRAW_MS, 1);
  const revealProgress = Math.min(Math.max((age - PHONE_DIALOGUE_LINE_DRAW_MS * 0.55) / 520, 0), 1);
  const centerX = window.innerWidth / 2;

  context.save();
  context.fillStyle = "#000000";
  context.fillRect(0, 0, window.innerWidth, window.innerHeight);
  context.restore();

  context.save();
  context.strokeStyle = "#ffffff";
  context.shadowColor = "rgba(255, 255, 255, 0.8)";
  context.shadowBlur = 12;
  context.lineWidth = 3;
  context.beginPath();
  context.moveTo(centerX, 0);
  context.lineTo(centerX, window.innerHeight * lineProgress);
  context.stroke();
  context.restore();

  if (revealProgress <= 0) {
    return;
  }

  context.save();
  context.globalAlpha = revealProgress;
  drawPhoneDialogueCharacters(context);
  drawPhoneDialogueBubble(context);
  drawPhoneChallengePrompt(context);
  context.restore();

  if (miniGameState.phoneChallengeAcceptedAt) {
    const fadeProgress = Math.min(
      (now - miniGameState.phoneChallengeAcceptedAt) / PHONE_CHALLENGE_ACCEPT_FADE_MS,
      1
    );
    context.save();
    context.globalAlpha = fadeProgress;
    context.fillStyle = "#000000";
    context.fillRect(0, 0, window.innerWidth, window.innerHeight);
    context.restore();
  }
}

function drawPhoneDialogueCharacters(context) {
  const wizard = loadMiniGameWizardSprite();
  const john = loadJohnCharacterImage();
  const halfWidth = window.innerWidth / 2;
  const bottomY = window.innerHeight + Math.min(150, window.innerHeight * 0.36);
  const firstJohnLineIndex = PHONE_DIALOGUE_LINES.findIndex((line) => line.speaker === "john");
  const johnShouldBeVisible =
    firstJohnLineIndex >= 0 &&
    miniGameState.phoneDialogueLineIndex >= firstJohnLineIndex &&
    performance.now() >= miniGameState.phoneDialogueLineStartedAt;

  if (wizard.complete && wizard.naturalWidth > 0) {
    const wizardHeight = Math.max(250, Math.min(window.innerHeight * 0.94, 390));
    const wizardWidth = wizardHeight * (543 / 724);
    context.save();
    context.imageSmoothingEnabled = false;
    context.shadowColor = "rgba(92, 255, 146, 0.4)";
    context.shadowBlur = 18;
    context.drawImage(
      wizard,
      0,
      0,
      543,
      724,
      halfWidth * 0.48 - wizardWidth / 2,
      bottomY - wizardHeight,
      wizardWidth,
      wizardHeight
    );
    context.restore();
  }

  if (johnShouldBeVisible && john.complete && john.naturalWidth > 0) {
    const johnHeight = Math.max(250, Math.min(window.innerHeight * 0.92, 380));
    const johnWidth = johnHeight * (john.naturalWidth / john.naturalHeight);
    const firstLineFade =
      miniGameState.phoneDialogueLineIndex === firstJohnLineIndex
        ? Math.min((performance.now() - miniGameState.phoneDialogueLineStartedAt) / 420, 1)
        : 1;
    context.save();
    context.globalAlpha *= firstLineFade;
    context.imageSmoothingEnabled = false;
    context.shadowColor = "rgba(255, 170, 80, 0.34)";
    context.shadowBlur = 16;
    context.drawImage(john, halfWidth + halfWidth * 0.52 - johnWidth / 2, bottomY - johnHeight, johnWidth, johnHeight);
    context.restore();
  }
}

function drawPhoneDialogueBubble(context) {
  const line = PHONE_DIALOGUE_LINES[miniGameState.phoneDialogueLineIndex];

  if (!line || performance.now() < miniGameState.phoneDialogueLineStartedAt) {
    return;
  }

  const lineAge = performance.now() - miniGameState.phoneDialogueLineStartedAt;
  const typedCharacters = Math.min(line.text.length, Math.floor(lineAge / PHONE_DIALOGUE_TYPE_SPEED_MS));
  const visibleText = line.text.slice(0, typedCharacters);
  const isWizard = line.speaker === "wizard";
  const halfWidth = window.innerWidth / 2;
  const bubbleWidth = Math.min(halfWidth - 34, 380);
  const bubbleHeight = Math.max(72, Math.min(128, window.innerHeight * 0.28));
  const bubbleX = isWizard ? 18 : window.innerWidth - bubbleWidth - 18;
  const bubbleY = Math.max(18, window.innerHeight * 0.09);

  context.save();
  context.fillStyle = isWizard ? "rgba(3, 18, 10, 0.9)" : "rgba(24, 12, 4, 0.91)";
  context.strokeStyle = isWizard ? "rgba(156, 255, 156, 0.78)" : "rgba(255, 190, 92, 0.82)";
  context.shadowColor = isWizard ? "rgba(80, 255, 130, 0.32)" : "rgba(255, 170, 80, 0.34)";
  context.shadowBlur = 12;
  context.lineWidth = 2;
  context.fillRect(bubbleX, bubbleY, bubbleWidth, bubbleHeight);
  context.strokeRect(bubbleX, bubbleY, bubbleWidth, bubbleHeight);

  context.shadowBlur = 0;
  context.fillStyle = isWizard ? "#9cff9c" : "#ffbd5f";
  context.font = `900 ${Math.max(10, Math.min(13, window.innerHeight * 0.034))}px 'Courier New', monospace`;
  context.textAlign = "left";
  context.textBaseline = "top";
  context.fillText(isWizard ? "RETRO WIZ" : "SCATTY JOHN", bubbleX + 12, bubbleY + 9);

  context.fillStyle = "#ffffff";
  context.font = `bold ${Math.max(10, Math.min(14, window.innerHeight * 0.038))}px 'Courier New', monospace`;
  const lines = wrapCanvasText(context, visibleText, bubbleWidth - 24);
  const lineHeight = Math.max(14, Math.min(18, window.innerHeight * 0.044));

  lines.slice(0, 5).forEach((textLine, index) => {
    context.fillText(textLine, bubbleX + 12, bubbleY + 31 + index * lineHeight);
  });

  if (typedCharacters < line.text.length) {
    const cursorLine = Math.min(lines.length - 1, 4);
    const cursorText = lines[cursorLine] || "";
    const cursorX = bubbleX + 12 + context.measureText(cursorText).width + 3;
    const cursorY = bubbleY + 33 + cursorLine * lineHeight;
    context.fillStyle = Math.floor(performance.now() / 180) % 2 ? "#ffffff" : "rgba(255, 255, 255, 0.25)";
    context.fillRect(cursorX, cursorY, 7, lineHeight - 4);
  } else if (!miniGameState.phoneChallengePromptAt) {
    const blink = 0.34 + (Math.sin(performance.now() / 260) + 1) * 0.12;
    context.fillStyle = `rgba(255, 255, 255, ${blink})`;
    context.font = `900 ${Math.max(8, Math.min(11, window.innerHeight * 0.028))}px 'Courier New', monospace`;
    context.textAlign = "right";
    context.textBaseline = "middle";
    context.fillText("click to continue", bubbleX + bubbleWidth - 12, bubbleY + bubbleHeight - 13);
  }

  context.restore();
}

function drawPhoneChallengePrompt(context) {
  if (!miniGameState.phoneChallengePromptAt) {
    miniGameState.phoneChallengeButton = null;
    return;
  }

  const now = performance.now();
  const fadeProgress = Math.min((now - miniGameState.phoneChallengePromptAt) / PHONE_CHALLENGE_PROMPT_FADE_MS, 1);
  const promptWidth = Math.min(window.innerWidth * 0.58, 430);
  const promptHeight = Math.min(window.innerHeight * 0.36, 180);
  const promptX = window.innerWidth / 2 - promptWidth / 2;
  const promptY = window.innerHeight / 2 - promptHeight / 2;
  const buttonRect = getPhoneChallengeButtonRect();

  miniGameState.phoneChallengeButton = buttonRect;

  context.save();
  context.globalAlpha *= fadeProgress;
  context.fillStyle = "rgba(2, 10, 5, 0.92)";
  context.strokeStyle = "rgba(156, 255, 156, 0.82)";
  context.shadowColor = "rgba(80, 255, 130, 0.34)";
  context.shadowBlur = 18;
  context.lineWidth = 2;
  context.fillRect(promptX, promptY, promptWidth, promptHeight);
  context.strokeRect(promptX, promptY, promptWidth, promptHeight);

  context.shadowBlur = 0;
  context.fillStyle = "#ffffff";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.font = `900 ${Math.max(14, Math.min(22, window.innerHeight * 0.055))}px 'Courier New', monospace`;
  wrapCanvasText(context, "Accept Scatty John's Challenge?", promptWidth - 34)
    .slice(0, 2)
    .forEach((line, index, lines) => {
      const lineHeight = Math.max(18, Math.min(26, window.innerHeight * 0.066));
      const startY = promptY + 44 - ((lines.length - 1) * lineHeight) / 2;
      context.fillText(line, window.innerWidth / 2, startY + index * lineHeight);
    });

  context.fillStyle = "#19a947";
  context.strokeStyle = "#9cff9c";
  context.shadowColor = "rgba(80, 255, 130, 0.42)";
  context.shadowBlur = 14;
  context.fillRect(buttonRect.x, buttonRect.y, buttonRect.width, buttonRect.height);
  context.strokeRect(buttonRect.x, buttonRect.y, buttonRect.width, buttonRect.height);

  context.shadowBlur = 0;
  context.fillStyle = "#ffffff";
  context.font = `900 ${Math.max(13, Math.min(20, window.innerHeight * 0.052))}px 'Courier New', monospace`;
  context.fillText("Accept", window.innerWidth / 2, buttonRect.y + buttonRect.height / 2);
  context.restore();
}

function drawCupTableScene(context) {
  if (miniGameState.status !== "cupTable") {
    return;
  }

  const now = performance.now();
  const age = now - (miniGameState.cupTableStartedAt || now);
  const fadeProgress = Math.min(Math.max((age - CUP_TABLE_SCENE_DELAY_MS) / CUP_TABLE_SCENE_FADE_MS, 0), 1);

  context.save();
  context.fillStyle = "#000000";
  context.fillRect(0, 0, window.innerWidth, window.innerHeight);
  context.restore();

  if (fadeProgress <= 0) {
    return;
  }

  if (miniGameState.cupTablePhase === "skippedBlack") {
    return;
  }

  const width = window.innerWidth;
  const height = window.innerHeight;
  const tableCenterX = width / 2;
  const tableCenterY = height * 0.51;
  const tableRadiusX = Math.min(width * 0.43, height * 0.72);
  const tableRadiusY = Math.min(height * 0.42, width * 0.28);

  context.save();
  context.globalAlpha = fadeProgress;
  applyScreenShake(context);
  applyCupTableSelectionZoom(context, now);
  drawCupTableLegs(context, tableCenterX, tableCenterY, tableRadiusX, tableRadiusY);
  drawCupTableTop(context, tableCenterX, tableCenterY, tableRadiusX, tableRadiusY);
  drawCupTableDecor(context, tableCenterX, tableCenterY, tableRadiusX, tableRadiusY, now, miniGameState.cupTableDecor);
  miniGameState.cupTableCupHitBoxes = [];
  miniGameState.cupTableCups.forEach((cup) => {
    drawCupOnTable(context, cup, tableCenterX, tableCenterY, tableRadiusX, tableRadiusY, now);
  });
  drawCupTablePickPrompt(context, now);
  drawCupTableCupChoiceUi(context, now);
  drawCupTablePourAnimation(context, tableCenterX, tableCenterY, tableRadiusX, tableRadiusY, now);
  drawCupTablePostPourDialogue(context, now);
  drawCupTableRetryIntro(context, now);
  drawCupTableDrinkChoiceUi(context, now);
  drawCupTableJohnTurnUi(context, now);
  drawCupTableDrinkAnimation(context, tableCenterX, tableCenterY, tableRadiusX, tableRadiusY, now);
  drawCupTableJohnDrink(context, tableCenterX, tableCenterY, tableRadiusX, tableRadiusY, now);
  drawCupTableDrinkResult(context, now);
  drawCupTableFailOverlay(context, now);
  drawCupTablePathReturnOverlay(context, now);
  drawCupTableJohnResult(context, now);
  drawCupTableJohnTutorial(context, now);
  context.restore();
}

function drawCupTableJohnTutorial(context, now) {
  if (
    !miniGameState.cupTableJohnStartedAt ||
    miniGameState.cupTablePhase === "selecting" ||
    miniGameState.cupTablePhase === "selectionDone" ||
    miniGameState.cupTablePhase === "pickPrompt" ||
    miniGameState.cupTablePhase === "chooseCup" ||
    miniGameState.cupTablePhase === "pouring" ||
    miniGameState.cupTablePhase === "postPourDialogue" ||
    miniGameState.cupTablePhase === "retryIntro" ||
    miniGameState.cupTablePhase === "drinkChoice" ||
    miniGameState.cupTablePhase === "johnTurn" ||
    miniGameState.cupTablePhase === "johnDrinking" ||
    miniGameState.cupTablePhase === "drinking" ||
    miniGameState.cupTablePhase === "drinkResult" ||
    miniGameState.cupTablePhase === "failed" ||
    miniGameState.cupTablePhase === "pathReturn" ||
    miniGameState.cupTablePhase === "johnLost" ||
    miniGameState.cupTablePhase === "johnWon" ||
    miniGameState.cupTablePhase === "skippedBlack"
  ) {
    miniGameState.cupTableJohnButtons = null;
    return;
  }

  const introAge = now - miniGameState.cupTableJohnStartedAt;
  const introProgress = Math.min(introAge / 420, 1);
  const easedIntro = 1 - Math.pow(1 - introProgress, 3);
  const johnImage = loadJohnCharacterImage();
  const johnHeight = Math.max(210, Math.min(window.innerHeight * 0.84, 360));
  const johnWidth =
    johnImage.complete && johnImage.naturalWidth > 0
      ? johnHeight * (johnImage.naturalWidth / johnImage.naturalHeight)
      : johnHeight * 0.72;
  const johnX = -johnWidth * 0.18 - (1 - easedIntro) * 80;
  const johnY = window.innerHeight - johnHeight * 0.72;

  context.save();
  context.globalAlpha *= easedIntro;

  if (johnImage.complete && johnImage.naturalWidth > 0) {
    context.imageSmoothingEnabled = false;
    context.shadowColor = "rgba(255, 170, 80, 0.32)";
    context.shadowBlur = 16;
    context.drawImage(johnImage, johnX, johnY, johnWidth, johnHeight);
  } else {
    drawFallbackCupTableJohn(context, johnX + johnWidth / 2, johnY + johnHeight * 0.42, johnHeight * 0.42);
  }

  drawCupTableJohnBubble(context, johnX + johnWidth * 0.64, Math.max(14, window.innerHeight * 0.08), now);
  context.restore();
}

function drawCupTableSelectionJohnPeeks(context, now) {
  if (miniGameState.cupTablePhase !== "selecting" || !miniGameState.cupTableSelectionStartedAt) {
    return;
  }

  const age = now - miniGameState.cupTableSelectionStartedAt;
  miniGameState.cupTableSelectionPeeks.forEach((peek) => {
    const peekAge = age - peek.startedAtOffset;

    if (peekAge < 0 || peekAge > CUP_TABLE_SELECTION_PEEK_MS) {
      return;
    }

    drawCupTableAngledJohnPeek(context, peek, peekAge);
  });
}

function drawCupTableAngledJohnPeek(context, peek, peekAge) {
  const progress = peekAge / CUP_TABLE_SELECTION_PEEK_MS;
  const enter = Math.min(progress / 0.22, 1);
  const exit = Math.min(Math.max((progress - 0.72) / 0.28, 0), 1);
  const visibility = Math.max(0, Math.min(1 - Math.pow(exit, 2), 1 - Math.pow(1 - enter, 3)));
  const johnImage = loadJohnCharacterImage();
  const size = Math.max(120, Math.min(190, window.innerHeight * 0.42));
  const center = getCupTablePeekPosition(peek.edge, peek.offset, size, visibility);

  context.save();
  context.globalAlpha *= visibility;
  context.translate(center.x, center.y);
  context.rotate(center.rotation);
  context.imageSmoothingEnabled = false;
  context.shadowColor = "rgba(255, 170, 80, 0.36)";
  context.shadowBlur = 14;

  if (johnImage.complete && johnImage.naturalWidth > 0) {
    const width = size * (johnImage.naturalWidth / johnImage.naturalHeight);
    context.drawImage(johnImage, -width / 2, -size * 0.46, width, size);
  } else {
    drawFallbackCupTableJohn(context, 0, 0, size * 0.42);
  }

  context.restore();

  drawCupTablePeekBubble(context, peek.text, center, visibility);
}

function getCupTablePeekPosition(edge, offset, size, visibility) {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const slide = (1 - visibility) * size * 0.45;

  if (edge === "top") {
    return {
      x: width * offset,
      y: -size * 0.18 + slide,
      rotation: Math.PI,
      bubbleX: width * offset + size * 0.15,
      bubbleY: size * 0.14,
    };
  }

  if (edge === "bottom") {
    return {
      x: width * offset,
      y: height + size * 0.14 - slide,
      rotation: 0,
      bubbleX: width * offset - size * 1.15,
      bubbleY: height - size * 0.44,
    };
  }

  if (edge === "left") {
    return {
      x: -size * 0.18 + slide,
      y: height * offset,
      rotation: Math.PI / 2,
      bubbleX: size * 0.42,
      bubbleY: height * offset - size * 0.42,
    };
  }

  return {
    x: width + size * 0.18 - slide,
    y: height * offset,
    rotation: -Math.PI / 2,
    bubbleX: width - size * 1.95,
    bubbleY: height * offset - size * 0.42,
  };
}

function drawCupTablePeekBubble(context, text, center, visibility) {
  const bubbleWidth = Math.min(230, window.innerWidth * 0.34);
  const bubbleHeight = Math.max(46, Math.min(62, window.innerHeight * 0.14));
  const bubbleX = Math.max(10, Math.min(center.bubbleX, window.innerWidth - bubbleWidth - 10));
  const bubbleY = Math.max(10, Math.min(center.bubbleY, window.innerHeight - bubbleHeight - 10));

  context.save();
  context.globalAlpha *= visibility;
  context.fillStyle = "rgba(24, 12, 4, 0.94)";
  context.strokeStyle = "rgba(255, 190, 92, 0.82)";
  context.shadowColor = "rgba(255, 170, 80, 0.34)";
  context.shadowBlur = 10;
  context.lineWidth = 2;
  context.fillRect(bubbleX, bubbleY, bubbleWidth, bubbleHeight);
  context.strokeRect(bubbleX, bubbleY, bubbleWidth, bubbleHeight);

  context.shadowBlur = 0;
  context.fillStyle = "#ffffff";
  context.font = `900 ${Math.max(10, Math.min(14, window.innerHeight * 0.036))}px 'Courier New', monospace`;
  context.textAlign = "center";
  context.textBaseline = "middle";
  wrapCanvasText(context, text, bubbleWidth - 18).slice(0, 2).forEach((line, index, lines) => {
    const lineHeight = Math.max(12, Math.min(16, window.innerHeight * 0.038));
    context.fillText(line, bubbleX + bubbleWidth / 2, bubbleY + bubbleHeight / 2 - ((lines.length - 1) * lineHeight) / 2 + index * lineHeight);
  });
  context.restore();
}

function drawCupTablePickPrompt(context, now) {
  if (miniGameState.cupTablePhase !== "pickPrompt") {
    miniGameState.cupTableDrinkButtons = null;
    return;
  }

  const age = now - miniGameState.cupTablePickPromptStartedAt;
  const johnIntro = Math.min(age / 420, 1);
  const typeDuration = CUP_TABLE_PICK_PROMPT_LINE.length * CUP_TABLE_JOHN_TYPE_SPEED_MS;
  const johnShouldShow = age < typeDuration + 1100;
  const optionsShouldShow = age > typeDuration + 850;

  if (johnShouldShow) {
    drawCupTablePickPromptJohn(context, now, johnIntro);
  }

  if (optionsShouldShow) {
    drawCupTableDrinkOptions(context, now, Math.min((age - typeDuration - 850) / 360, 1));
  } else {
    miniGameState.cupTableDrinkButtons = null;
  }
}

function drawCupTablePickPromptJohn(context, now, introProgress) {
  const johnImage = loadJohnCharacterImage();
  const easedIntro = 1 - Math.pow(1 - introProgress, 3);
  const johnHeight = Math.max(210, Math.min(window.innerHeight * 0.84, 360));
  const johnWidth =
    johnImage.complete && johnImage.naturalWidth > 0
      ? johnHeight * (johnImage.naturalWidth / johnImage.naturalHeight)
      : johnHeight * 0.72;
  const johnX = -johnWidth * 0.18 - (1 - easedIntro) * 80;
  const johnY = window.innerHeight - johnHeight * 0.72;
  const lineAge = now - miniGameState.cupTablePickPromptStartedAt;
  const typedCharacters = Math.min(CUP_TABLE_PICK_PROMPT_LINE.length, Math.floor(lineAge / CUP_TABLE_JOHN_TYPE_SPEED_MS));

  if (typedCharacters < CUP_TABLE_PICK_PROMPT_LINE.length && !miniGameState.cupTableJohnTypingActive) {
    miniGameState.cupTableJohnTypingActive = startTypingSound();
  }

  if (typedCharacters >= CUP_TABLE_PICK_PROMPT_LINE.length && miniGameState.cupTableJohnTypingActive) {
    miniGameState.cupTableJohnTypingActive = false;
    stopTypingSound();
  }

  context.save();
  context.globalAlpha *= easedIntro;
  context.imageSmoothingEnabled = false;
  context.shadowColor = "rgba(255, 170, 80, 0.32)";
  context.shadowBlur = 16;
  if (johnImage.complete && johnImage.naturalWidth > 0) {
    context.drawImage(johnImage, johnX, johnY, johnWidth, johnHeight);
  } else {
    drawFallbackCupTableJohn(context, johnX + johnWidth / 2, johnY + johnHeight * 0.42, johnHeight * 0.42);
  }
  drawSimpleCupTableDialogueBubble(
    context,
    johnX + johnWidth * 0.64,
    Math.max(14, window.innerHeight * 0.08),
    CUP_TABLE_PICK_PROMPT_LINE.slice(0, typedCharacters),
    typedCharacters < CUP_TABLE_PICK_PROMPT_LINE.length
  );
  context.restore();
}

function drawCupTableCupChoiceUi(context) {
  if (miniGameState.cupTablePhase !== "chooseCup") {
    miniGameState.cupTableConfirmButton = null;
    return;
  }

  const blink = 0.35 + (Math.sin(performance.now() / 280) + 1) * 0.2;
  context.save();
  context.globalAlpha *= blink;
  context.fillStyle = "#ffffff";
  context.shadowColor = "rgba(255, 255, 255, 0.55)";
  context.shadowBlur = 10;
  context.font = `900 ${Math.max(14, Math.min(22, window.innerHeight * 0.054))}px 'Courier New', monospace`;
  context.textAlign = "center";
  context.textBaseline = "top";
  context.fillText("Click a cup to select", window.innerWidth / 2, Math.max(12, window.innerHeight * 0.035));
  context.restore();

  if (miniGameState.cupTableSelectedCupIndex < 0) {
    miniGameState.cupTableConfirmButton = null;
    return;
  }

  const buttonWidth = Math.min(190, window.innerWidth * 0.26);
  const buttonHeight = Math.max(38, Math.min(52, window.innerHeight * 0.12));
  const button = {
    x: window.innerWidth / 2 - buttonWidth / 2,
    y: window.innerHeight - buttonHeight - 14,
    width: buttonWidth,
    height: buttonHeight,
  };

  miniGameState.cupTableConfirmButton = button;
  drawCupTableOptionButton(context, button, "Select", "#19a947", "#ffffff");
}

function drawCupTablePourAnimation(context, tableX, tableY, tableRadiusX, tableRadiusY, now) {
  if (miniGameState.cupTablePhase !== "pouring" || miniGameState.cupTableSelectedCupIndex < 0) {
    return;
  }

  const cup = miniGameState.cupTableCups[miniGameState.cupTableSelectedCupIndex];

  if (!cup) {
    return;
  }

  const age = now - miniGameState.cupTablePourStartedAt;
  const progress = Math.min(age / CUP_TABLE_POUR_MS, 1);
  const cupPosition = getCupTableCupScreenPosition(cup, tableX, tableY, tableRadiusX, tableRadiusY);
  const startX = window.innerWidth + 90;
  const startY = window.innerHeight * 0.18;
  const holdProgress = Math.min(Math.max((progress - 0.18) / 0.52, 0), 1);
  const exitProgress = Math.min(Math.max((progress - 0.76) / 0.24, 0), 1);
  const arriveProgress = Math.min(progress / 0.32, 1);
  const easedArrive = 1 - Math.pow(1 - arriveProgress, 3);
  const flaskX = startX + (cupPosition.x + 54 - startX) * easedArrive + exitProgress * 180;
  const flaskY = startY + (cupPosition.y - 58 - startY) * easedArrive - exitProgress * 70;
  const pourAmount = holdProgress * (1 - exitProgress);
  const rotation = -0.25 - pourAmount * 0.95 + exitProgress * 0.55;

  context.save();
  context.translate(flaskX, flaskY);
  context.rotate(rotation);
  drawCupTableFlask(context, cupPosition.width * 1.12, miniGameState.cupTablePourColor);
  context.restore();

  if (pourAmount > 0.05) {
    drawCupTablePourStream(context, flaskX - 20, flaskY + 24, cupPosition.x, cupPosition.y - cupPosition.height * 0.18, pourAmount);
  }
}

function drawCupTableFlask(context, size, liquidColor) {
  context.save();
  context.shadowColor = "rgba(255, 255, 255, 0.28)";
  context.shadowBlur = 12;
  context.strokeStyle = "rgba(235, 255, 255, 0.86)";
  context.fillStyle = "rgba(210, 245, 255, 0.22)";
  context.lineWidth = Math.max(2, size * 0.055);
  context.beginPath();
  context.moveTo(-size * 0.14, -size * 0.56);
  context.lineTo(size * 0.14, -size * 0.56);
  context.lineTo(size * 0.14, -size * 0.22);
  context.quadraticCurveTo(size * 0.42, -size * 0.02, size * 0.32, size * 0.4);
  context.quadraticCurveTo(0, size * 0.62, -size * 0.32, size * 0.4);
  context.quadraticCurveTo(-size * 0.42, -size * 0.02, -size * 0.14, -size * 0.22);
  context.closePath();
  context.fill();
  context.stroke();

  context.fillStyle = liquidColor;
  context.globalAlpha *= 0.78;
  context.beginPath();
  context.ellipse(0, size * 0.25, size * 0.26, size * 0.15, 0, 0, Math.PI * 2);
  context.fill();

  context.globalAlpha /= 0.78;
  context.strokeStyle = "rgba(255, 255, 255, 0.42)";
  context.lineWidth = Math.max(1, size * 0.025);
  context.beginPath();
  context.moveTo(-size * 0.1, -size * 0.44);
  context.lineTo(-size * 0.08, size * 0.2);
  context.stroke();
  context.restore();
}

function drawCupTablePourStream(context, startX, startY, endX, endY, amount) {
  const color = miniGameState.cupTablePourColor || getRandomCupTablePourColor();

  context.save();
  context.strokeStyle = color;
  context.shadowColor = color;
  context.shadowBlur = 12;
  context.lineWidth = Math.max(3, window.innerHeight * 0.01) * amount;
  context.lineCap = "round";
  context.beginPath();
  context.moveTo(startX, startY);
  context.quadraticCurveTo((startX + endX) / 2 - 12, (startY + endY) / 2 + 24, endX, endY);
  context.stroke();

  for (let index = 0; index < 5; index += 1) {
    const t = (performance.now() / 240 + index * 0.19) % 1;
    const dropX = startX + (endX - startX) * t + Math.sin(index * 2.1) * 5;
    const dropY = startY + (endY - startY) * t + Math.sin(t * Math.PI) * 18;
    context.fillStyle = color;
    context.beginPath();
    context.arc(dropX, dropY, 2.2 + amount * 1.6, 0, Math.PI * 2);
    context.fill();
  }

  context.restore();
}

function drawCupTablePostPourDialogue(context, now) {
  if (miniGameState.cupTablePhase !== "postPourDialogue") {
    return;
  }

  const lines = getCupTablePostPourLines();
  const line = lines[miniGameState.cupTablePostPourLineIndex];

  if (!line) {
    return;
  }

  const age = now - miniGameState.cupTablePostPourDialogueStartedAt;
  const lineAge = now - miniGameState.cupTablePostPourLineStartedAt;
  const typedCharacters = Math.min(line.text.length, Math.floor(lineAge / CUP_TABLE_POST_POUR_TYPE_SPEED_MS));
  const text = line.text.slice(0, typedCharacters);
  const intro = Math.min(age / 420, 1);
  const easedIntro = 1 - Math.pow(1 - intro, 3);
  const johnImage = loadJohnCharacterImage();
  const wizardImage = loadMiniGameWizardSprite();
  const characterHeight = Math.max(210, Math.min(window.innerHeight * 0.82, 350));
  const johnWidth = johnImage.complete && johnImage.naturalWidth > 0 ? characterHeight * (johnImage.naturalWidth / johnImage.naturalHeight) : characterHeight * 0.72;
  const wizardWidth = characterHeight * (543 / 724);
  const johnX = -johnWidth * 0.18;
  const wizardX = window.innerWidth - wizardWidth * 0.82;
  const y = window.innerHeight - characterHeight * 0.72;

  context.save();
  context.globalAlpha *= easedIntro;
  context.imageSmoothingEnabled = false;
  context.shadowBlur = 16;

  context.shadowColor = "rgba(255, 170, 80, 0.32)";
  if (johnImage.complete && johnImage.naturalWidth > 0) {
    context.drawImage(johnImage, johnX, y, johnWidth, characterHeight);
  }

  context.shadowColor = "rgba(92, 255, 146, 0.32)";
  if (miniGameState.cupTablePostPourLineIndex >= 1 && wizardImage.complete && wizardImage.naturalWidth > 0) {
    context.drawImage(wizardImage, 0, 0, 543, 724, wizardX, y, wizardWidth, characterHeight);
  }

  if (line.speaker === "john") {
    drawSimpleCupTableDialogueBubble(context, johnX + johnWidth * 0.64, Math.max(14, window.innerHeight * 0.08), text, typedCharacters < line.text.length, "SCATTY JOHN");
  } else {
    drawSimpleCupTableDialogueBubble(context, Math.max(16, wizardX - Math.min(380, window.innerWidth * 0.5) + 34), Math.max(14, window.innerHeight * 0.08), text, typedCharacters < line.text.length, "RETRO WIZ");
  }

  if (typedCharacters >= line.text.length) {
    drawCupTableContinuePrompt(context, window.innerWidth / 2, window.innerHeight - 28, now);
  }

  context.restore();
}

function drawCupTableRetryIntro(context, now) {
  if (miniGameState.cupTablePhase !== "retryIntro") {
    return;
  }

  const text = "come back for more ay?";
  const age = now - miniGameState.cupTableRetryIntroStartedAt;
  const typedCharacters = Math.min(text.length, Math.floor(age / CUP_TABLE_RETRY_INTRO_TYPE_SPEED_MS));
  const johnImage = loadJohnCharacterImage();
  const johnHeight = Math.max(210, Math.min(window.innerHeight * 0.84, 360));
  const johnWidth =
    johnImage.complete && johnImage.naturalWidth > 0
      ? johnHeight * (johnImage.naturalWidth / johnImage.naturalHeight)
      : johnHeight * 0.72;
  const johnX = -johnWidth * 0.18;
  const johnY = window.innerHeight - johnHeight * 0.72;

  context.save();
  context.imageSmoothingEnabled = false;
  context.shadowColor = "rgba(255, 170, 80, 0.32)";
  context.shadowBlur = 16;

  if (johnImage.complete && johnImage.naturalWidth > 0) {
    context.drawImage(johnImage, johnX, johnY, johnWidth, johnHeight);
  } else {
    drawFallbackCupTableJohn(context, johnX + johnWidth / 2, johnY + johnHeight * 0.42, johnHeight * 0.42);
  }

  drawSimpleCupTableDialogueBubble(
    context,
    johnX + johnWidth * 0.64,
    Math.max(14, window.innerHeight * 0.08),
    text.slice(0, typedCharacters),
    typedCharacters < text.length,
    "SCATTY JOHN"
  );
  context.restore();
}

function drawCupTableContinuePrompt(context, x, y, now) {
  const blink = 0.28 + (Math.sin(now / 300) + 1) * 0.18;

  context.save();
  context.globalAlpha *= blink;
  context.fillStyle = "#ffffff";
  context.font = `bold ${Math.max(10, Math.min(14, window.innerHeight * 0.036))}px 'Courier New', monospace`;
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText("click to continue", x, y);
  context.restore();
}

function drawCupTableDrinkChoiceUi(context, now) {
  if (miniGameState.cupTablePhase !== "drinkChoice") {
    miniGameState.cupTableDrinkConfirmButton = null;
    return;
  }

  const age = now - miniGameState.cupTableDrinkChoiceStartedAt;
  const remainingSeconds = Math.max(0, Math.ceil((CUP_TABLE_DRINK_CHOICE_MS - age) / 1000));
  const timerWidth = Math.min(160, window.innerWidth * 0.22);
  const timerHeight = Math.max(36, Math.min(50, window.innerHeight * 0.11));
  const timerX = window.innerWidth / 2 - timerWidth / 2;
  const timerY = Math.max(10, window.innerHeight * 0.03);
  const blink = 0.38 + (Math.sin(now / 260) + 1) * 0.22;

  context.save();
  context.fillStyle = "rgba(0, 0, 0, 0.78)";
  context.strokeStyle = "rgba(255, 255, 255, 0.72)";
  context.shadowColor = "rgba(255, 255, 255, 0.28)";
  context.shadowBlur = 10;
  context.lineWidth = 2;
  context.fillRect(timerX, timerY, timerWidth, timerHeight);
  context.strokeRect(timerX, timerY, timerWidth, timerHeight);

  context.shadowBlur = 0;
  context.fillStyle = "#ffffff";
  context.font = `900 ${Math.max(18, Math.min(30, window.innerHeight * 0.07))}px 'Courier New', monospace`;
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(String(remainingSeconds), window.innerWidth / 2, timerY + timerHeight / 2 + 1);

  context.globalAlpha *= blink;
  context.font = `900 ${Math.max(13, Math.min(20, window.innerHeight * 0.048))}px 'Courier New', monospace`;
  const promptY =
    miniGameState.cupTableDrinkSelectedCupIndex >= 0 ? window.innerHeight - 96 : window.innerHeight - 54;
  context.fillText("Select a cup to drink from", window.innerWidth / 2, promptY);
  context.restore();

  if (miniGameState.cupTableDrinkSelectedCupIndex < 0) {
    miniGameState.cupTableDrinkConfirmButton = null;
    return;
  }

  const buttonWidth = Math.min(190, window.innerWidth * 0.26);
  const buttonHeight = Math.max(38, Math.min(52, window.innerHeight * 0.12));
  const button = {
    x: window.innerWidth / 2 - buttonWidth / 2,
    y: window.innerHeight - buttonHeight - 10,
    width: buttonWidth,
    height: buttonHeight,
  };

  miniGameState.cupTableDrinkConfirmButton = button;
  drawCupTableOptionButton(context, button, "Select", "#19a947", "#ffffff");
}

function drawCupTableJohnTurnUi(context, now) {
  if (miniGameState.cupTablePhase !== "johnTurn" && miniGameState.cupTablePhase !== "johnDrinking") {
    return;
  }

  context.save();
  context.fillStyle = "#ffffff";
  context.shadowColor = "rgba(255, 255, 255, 0.4)";
  context.shadowBlur = 12;
  context.font = `900 ${Math.max(16, Math.min(26, window.innerHeight * 0.062))}px 'Courier New', monospace`;
  context.textAlign = "center";
  context.textBaseline = "top";
  context.fillText("SCATTY JOHN'S TURN", window.innerWidth / 2, Math.max(12, window.innerHeight * 0.035));
  context.restore();
}

function drawCupTableDrinkAnimation(context, tableX, tableY, tableRadiusX, tableRadiusY, now) {
  if (miniGameState.cupTablePhase !== "drinking" || miniGameState.cupTableDrinkSelectedCupIndex < 0) {
    return;
  }

  const cup = miniGameState.cupTableCups[miniGameState.cupTableDrinkSelectedCupIndex];

  if (!cup) {
    return;
  }

  const age = now - miniGameState.cupTableDrinkStartedAt;
  const progress = Math.min(age / CUP_TABLE_DRINK_ANIMATION_MS, 1);
  const cupPosition = getCupTableCupScreenPosition(cup, tableX, tableY, tableRadiusX, tableRadiusY);
  const lift = Math.min(progress / 0.34, 1);
  const drink = Math.min(Math.max((progress - 0.34) / 0.38, 0), 1);
  const lower = Math.min(Math.max((progress - 0.72) / 0.28, 0), 1);
  const easedLift = 1 - Math.pow(1 - lift, 3);
  const easedLower = lower * lower * (3 - lower * 2);
  const targetX = window.innerWidth / 2;
  const targetY = window.innerHeight * 0.36;
  const cupX = cupPosition.x + (targetX - cupPosition.x) * easedLift;
  const cupY = cupPosition.y + (targetY - cupPosition.y) * easedLift + easedLower * window.innerHeight * 0.46;
  const scale = 1 + easedLift * 2.3 - easedLower * 0.8;
  const rotation = -0.08 + drink * 1.05 - easedLower * 0.5;
  const alpha = 1 - Math.max(0, progress - 0.88) / 0.12;

  context.save();
  context.globalAlpha *= alpha;
  context.translate(cupX, cupY);
  context.rotate(rotation);
  drawCupTableLargeCup(context, cupPosition.width * scale, cupPosition.height * scale, cup.liquid);
  context.restore();

  if (drink > 0.05 && lower < 0.4) {
    drawCupTableDrinkPour(context, cupX + cupPosition.width * scale * 0.28, cupY, cup.liquid, drink);
  }
}

function drawCupTableLargeCup(context, cupWidth, cupHeight, liquidColor) {
  context.save();
  context.shadowColor = "rgba(0, 0, 0, 0.42)";
  context.shadowBlur = 12;
  context.fillStyle = "rgba(245, 238, 216, 0.96)";
  context.beginPath();
  context.moveTo(-cupWidth * 0.42, -cupHeight * 0.16);
  context.lineTo(cupWidth * 0.42, -cupHeight * 0.16);
  context.lineTo(cupWidth * 0.33, cupHeight * 0.48);
  context.quadraticCurveTo(0, cupHeight * 0.65, -cupWidth * 0.33, cupHeight * 0.48);
  context.closePath();
  context.fill();

  context.shadowBlur = 0;
  context.fillStyle = "rgba(190, 170, 132, 0.38)";
  context.beginPath();
  context.ellipse(0, -cupHeight * 0.16, cupWidth * 0.47, cupWidth * 0.2, 0, 0, Math.PI * 2);
  context.fill();

  context.fillStyle = liquidColor;
  context.shadowColor = liquidColor;
  context.shadowBlur = 14;
  context.beginPath();
  context.ellipse(0, -cupHeight * 0.18, cupWidth * 0.34, cupWidth * 0.12, 0, 0, Math.PI * 2);
  context.fill();

  context.shadowBlur = 0;
  context.strokeStyle = "rgba(255, 255, 255, 0.5)";
  context.lineWidth = Math.max(2, cupWidth * 0.04);
  context.beginPath();
  context.moveTo(-cupWidth * 0.18, -cupHeight * 0.02);
  context.lineTo(-cupWidth * 0.12, cupHeight * 0.36);
  context.stroke();
  context.restore();
}

function drawCupTableDrinkPour(context, startX, startY, color, amount) {
  const endX = window.innerWidth / 2;
  const endY = window.innerHeight + 30;

  context.save();
  context.strokeStyle = color;
  context.shadowColor = color;
  context.shadowBlur = 18;
  context.lineCap = "round";
  context.lineWidth = Math.max(7, window.innerHeight * 0.018) * amount;
  context.beginPath();
  context.moveTo(startX, startY);
  context.quadraticCurveTo((startX + endX) / 2 + 24, window.innerHeight * 0.68, endX, endY);
  context.stroke();

  context.fillStyle = "rgba(0, 0, 0, 0.72)";
  context.shadowBlur = 0;
  context.beginPath();
  context.ellipse(endX, window.innerHeight + 6, window.innerWidth * 0.18, window.innerHeight * 0.08, 0, 0, Math.PI * 2);
  context.fill();
  context.restore();
}

function drawCupTableJohnDrink(context, tableX, tableY, tableRadiusX, tableRadiusY, now) {
  if (miniGameState.cupTablePhase !== "johnDrinking" || miniGameState.cupTableJohnSelectedCupIndex < 0) {
    return;
  }

  const age = now - miniGameState.cupTableJohnDrinkStartedAt;
  const progress = Math.min(age / CUP_TABLE_JOHN_DRINK_MS, 1);
  const cup = miniGameState.cupTableCups[miniGameState.cupTableJohnSelectedCupIndex];
  const johnImage = loadJohnCharacterImage();
  const johnHeight = Math.max(220, Math.min(window.innerHeight * 0.86, 370));
  const johnWidth =
    johnImage.complete && johnImage.naturalWidth > 0
      ? johnHeight * (johnImage.naturalWidth / johnImage.naturalHeight)
      : johnHeight * 0.72;
  const intro = Math.min(progress / 0.28, 1);
  const exit = Math.min(Math.max((progress - 0.78) / 0.22, 0), 1);
  const visibility = Math.max(0, Math.min(1 - exit, 1 - Math.pow(1 - intro, 3)));
  const johnX = -johnWidth * 0.1 - (1 - visibility) * johnWidth * 0.42;
  const johnY = window.innerHeight - johnHeight * 0.72;
  const cupSize = Math.max(34, Math.min(58, window.innerHeight * 0.13));
  const sipBob = Math.sin(progress * Math.PI * 6) * 3;

  context.save();
  context.globalAlpha *= visibility;
  context.imageSmoothingEnabled = false;
  context.shadowColor = "rgba(255, 170, 80, 0.32)";
  context.shadowBlur = 16;

  if (johnImage.complete && johnImage.naturalWidth > 0) {
    context.drawImage(johnImage, johnX, johnY, johnWidth, johnHeight);
  } else {
    drawFallbackCupTableJohn(context, johnX + johnWidth / 2, johnY + johnHeight * 0.42, johnHeight * 0.42);
  }

  context.translate(johnX + johnWidth * 0.63, johnY + johnHeight * 0.4 + sipBob);
  context.rotate(-0.18 - Math.sin(progress * Math.PI) * 0.36);
  drawCupTableLargeCup(context, cupSize, cupSize * 1.15, cup ? cup.liquid : "#ffffff");
  context.restore();

  drawCupTableJohnTurnUi(context, now);
}

function drawCupTableDrinkResult(context, now) {
  if (miniGameState.cupTablePhase !== "drinkResult" || !miniGameState.cupTableDrinkFailed) {
    return;
  }

  const age = now - miniGameState.cupTableDrinkResultAt;
  const fade = Math.min(age / 360, 1);

  context.save();
  context.globalAlpha *= fade;
  context.fillStyle = "rgba(0, 0, 0, 0.28)";
  context.fillRect(0, 0, window.innerWidth, window.innerHeight);
  context.fillStyle = "#ff1f2f";
  context.shadowColor = "rgba(255, 31, 47, 0.82)";
  context.shadowBlur = 22;
  context.font = `900 ${Math.max(42, Math.min(88, window.innerHeight * 0.21))}px 'Courier New', monospace`;
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText("FAILED", window.innerWidth / 2, window.innerHeight / 2);
  context.restore();
}

function drawCupTableFailOverlay(context, now) {
  if (miniGameState.cupTablePhase !== "failed") {
    miniGameState.cupTableFailButtons = null;
    return;
  }

  const age = now - miniGameState.cupTableFailedAt;
  const blackOpacity = Math.min(age / CUP_TABLE_FAIL_FADE_MS, 1);
  const textOpacity = Math.min(Math.max((age - 220) / 360, 0), 1);
  const buttonsOpacity = Math.min(Math.max((age - 1250) / 360, 0), 1);
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2 - 28;
  const failedSize = Math.max(44, Math.min(86, window.innerHeight * 0.2));

  context.save();
  context.fillStyle = `rgba(0, 0, 0, ${blackOpacity})`;
  context.fillRect(0, 0, window.innerWidth, window.innerHeight);

  context.globalAlpha = textOpacity;
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.shadowColor = "rgba(255, 64, 64, 0.78)";
  context.shadowBlur = 22;
  context.fillStyle = "#ff3030";
  context.font = `900 ${failedSize}px 'Courier New', monospace`;
  context.fillText("Failed", centerX, centerY);

  if (buttonsOpacity > 0) {
    const buttonWidth = Math.min(146, window.innerWidth * 0.26);
    const buttonHeight = Math.max(36, Math.min(48, window.innerHeight * 0.11));
    const gap = 16;
    const y = centerY + failedSize * 0.86;
    const retry = {
      x: centerX - buttonWidth - gap / 2,
      y: y - buttonHeight / 2,
      width: buttonWidth,
      height: buttonHeight,
    };
    const skip = {
      x: centerX + gap / 2,
      y: y - buttonHeight / 2,
      width: buttonWidth,
      height: buttonHeight,
      disabled: false,
    };

    miniGameState.cupTableFailButtons = { retry, skip };
    context.globalAlpha = buttonsOpacity;
    drawFailedButton(context, retry, "Retry");
    drawFailedButton(context, skip, "Skip level");
  } else {
    miniGameState.cupTableFailButtons = null;
  }

  context.restore();
}

function drawCupTablePathReturnOverlay(context, now) {
  if (miniGameState.cupTablePhase !== "pathReturn") {
    return;
  }

  const age = now - miniGameState.cupTableJohnResultAt;
  const blackOpacity = Math.min(age / CUP_TABLE_FAIL_FADE_MS, 1);

  context.save();
  context.fillStyle = `rgba(0, 0, 0, ${blackOpacity})`;
  context.fillRect(0, 0, window.innerWidth, window.innerHeight);
  context.restore();
}

function drawCupTableJohnResult(context, now) {
  if (miniGameState.cupTablePhase !== "johnLost" && miniGameState.cupTablePhase !== "johnWon") {
    return;
  }

  const isJohnLost = miniGameState.cupTablePhase === "johnLost";

  if (isJohnLost && !miniGameState.cupTableJohnResultAt) {
    scheduleCupTablePathReturn(now);
  } else if (isJohnLost && !miniGameState.cupTableReturnTimer && !miniGameState.cupTableReturnTriggered) {
    scheduleCupTablePathReturn(miniGameState.cupTableJohnResultAt);
  }

  const age = isJohnLost && miniGameState.cupTableJohnResultAt ? now - miniGameState.cupTableJohnResultAt : 0;
  const blackOpacity = isJohnLost ? Math.min(age / CUP_TABLE_FAIL_FADE_MS, 1) : 0.42;
  const textFadeAge = Math.max(0, age - CUP_TABLE_JOHN_WIN_BLACKOUT_MS);
  const textOpacity = isJohnLost ? Math.max(0, 1 - textFadeAge / CUP_TABLE_JOHN_WIN_TEXT_FADE_MS) : 1;

  context.save();
  context.fillStyle = `rgba(0, 0, 0, ${blackOpacity})`;
  context.fillRect(0, 0, window.innerWidth, window.innerHeight);
  context.globalAlpha *= textOpacity;
  context.fillStyle = isJohnLost ? "#7cff7c" : "#ff3030";
  context.shadowColor = isJohnLost ? "rgba(80, 255, 130, 0.78)" : "rgba(255, 48, 48, 0.78)";
  context.shadowBlur = 22;
  context.font = `900 ${Math.max(34, Math.min(72, window.innerHeight * 0.16))}px 'Courier New', monospace`;
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(
    isJohnLost ? "JOHN DRANK YOUR CUP" : "JOHN WINS",
    window.innerWidth / 2,
    window.innerHeight / 2
  );
  context.restore();
}

function getCupTableCupScreenPosition(cup, tableX, tableY, tableRadiusX, tableRadiusY) {
  const perspective = 0.82 + cup.y * 0.28;
  const width = Math.max(21, Math.min(36, window.innerHeight * 0.082)) * perspective;
  const height = width * 1.15;

  return {
    x: tableX + (cup.x - 0.5) * tableRadiusX * 1.58,
    y: tableY + (cup.y - 0.5) * tableRadiusY * 1.45,
    width,
    height,
  };
}

function getDrinkColor(drink) {
  const colors = {
    Rio: "#ff7a4f",
    Rubicon: "#ffb13b",
    Monster: "#72ff4f",
    "Red Bull": "#60a6ff",
    Fanta: "#ff8c28",
    "Fanta Lemon": "#f7e24a",
    Coke: "#552114",
    "Diet Coke": "#d7e2ea",
  };

  return colors[drink] || "#ffffff";
}

function getRandomCupTablePourColor() {
  const colors = ["#ff4fc8", "#f7e24a", "#9b62ff", "#43e66d", "#40d8ff", "#ff8c33"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function applyCupTableSelectionZoom(context, now) {
  let zoom = 1;

  if (miniGameState.cupTablePhase === "selecting" && miniGameState.cupTableSelectionStartedAt) {
    const age = now - miniGameState.cupTableSelectionStartedAt;
    const progress = Math.min(age / CUP_TABLE_SELECTION_DURATION_MS, 1);
    zoom = 1 + Math.pow(progress, 1.35) * 0.105;
  }

  if (miniGameState.cupTableSelectionFlashAt) {
    const flashAge = now - miniGameState.cupTableSelectionFlashAt;

    if (flashAge < CUP_TABLE_SELECTION_FINAL_FLASH_MS) {
      const flashProgress = flashAge / CUP_TABLE_SELECTION_FINAL_FLASH_MS;
      zoom = 1.105 - flashProgress * 0.105;
    }
  }

  if (Math.abs(zoom - 1) < 0.001) {
    return;
  }

  context.translate(window.innerWidth / 2, window.innerHeight / 2);
  context.scale(zoom, zoom);
  context.translate(-window.innerWidth / 2, -window.innerHeight / 2);
}

function drawFallbackCupTableJohn(context, x, y, size) {
  context.save();
  context.translate(x, y);
  context.fillStyle = "#a6632e";
  context.fillRect(-size * 0.32, -size * 0.16, size * 0.64, size * 0.68);
  context.fillStyle = "#f4ad59";
  context.fillRect(-size * 0.22, -size * 0.46, size * 0.44, size * 0.36);
  context.fillStyle = "#67b7e8";
  context.fillRect(-size * 0.32, -size * 0.66, size * 0.64, size * 0.22);
  context.fillStyle = "#ff5dc8";
  context.fillRect(-size * 0.15, -size * 0.33, size * 0.09, size * 0.09);
  context.fillRect(size * 0.08, -size * 0.33, size * 0.09, size * 0.09);
  context.restore();
}

function drawCupTableJohnBubble(context, x, y, now) {
  const isFinalLine = miniGameState.cupTablePhase === "finalLine";
  const line = isFinalLine ? CUP_TABLE_JOHN_FINAL_LINE : CUP_TABLE_JOHN_LINES[miniGameState.cupTableJohnLineIndex];
  const isComplete = !isFinalLine && miniGameState.cupTableJohnLineIndex >= CUP_TABLE_JOHN_LINES.length - 1 && line;
  const lineStartedAt = isFinalLine ? miniGameState.cupTableJohnFinalStartedAt : miniGameState.cupTableJohnLineStartedAt;
  const lineAge = now - lineStartedAt;
  const typedCharacters = line ? Math.min(line.length, Math.floor(lineAge / CUP_TABLE_JOHN_TYPE_SPEED_MS)) : 0;
  const visibleText = line ? line.slice(0, typedCharacters) : "";
  const bubbleWidth = Math.min(380, window.innerWidth * 0.5);
  const bubbleHeight = Math.max(96, Math.min(142, window.innerHeight * 0.36));
  const bubbleX = Math.max(16, Math.min(x, window.innerWidth - bubbleWidth - 16));
  const bubbleY = y;

  context.save();
  context.fillStyle = "rgba(24, 12, 4, 0.93)";
  context.strokeStyle = "rgba(255, 190, 92, 0.82)";
  context.shadowColor = "rgba(255, 170, 80, 0.34)";
  context.shadowBlur = 12;
  context.lineWidth = 2;
  context.fillRect(bubbleX, bubbleY, bubbleWidth, bubbleHeight);
  context.strokeRect(bubbleX, bubbleY, bubbleWidth, bubbleHeight);

  context.shadowBlur = 0;
  context.fillStyle = "#ffbd5f";
  context.font = `900 ${Math.max(10, Math.min(13, window.innerHeight * 0.034))}px 'Courier New', monospace`;
  context.textAlign = "left";
  context.textBaseline = "top";
  context.fillText("SCATTY JOHN", bubbleX + 12, bubbleY + 9);

  context.fillStyle = "#ffffff";
  context.font = `bold ${Math.max(10, Math.min(14, window.innerHeight * 0.038))}px 'Courier New', monospace`;
  const lines = wrapCanvasText(context, visibleText, bubbleWidth - 24);
  const lineHeight = Math.max(14, Math.min(18, window.innerHeight * 0.044));

  lines.slice(0, 5).forEach((textLine, index) => {
    context.fillText(textLine, bubbleX + 12, bubbleY + 31 + index * lineHeight);
  });

  if (line && typedCharacters < line.length) {
    const cursorLine = Math.min(lines.length - 1, 4);
    const cursorText = lines[cursorLine] || "";
    context.fillStyle = Math.floor(now / 180) % 2 ? "#ffffff" : "rgba(255, 255, 255, 0.25)";
    context.fillRect(bubbleX + 12 + context.measureText(cursorText).width + 3, bubbleY + 33 + cursorLine * lineHeight, 7, lineHeight - 4);
  }

  if (!isFinalLine && line && typedCharacters >= line.length && !isComplete) {
    const blink = 0.32 + (Math.sin(now / 260) + 1) * 0.09;
    context.fillStyle = `rgba(255, 255, 255, ${blink})`;
    context.font = `900 ${Math.max(8, Math.min(11, window.innerHeight * 0.028))}px 'Courier New', monospace`;
    context.textAlign = "right";
    context.fillText("click to continue", bubbleX + bubbleWidth - 12, bubbleY + bubbleHeight - 18);
  }

  if (
    isComplete &&
    !miniGameState.cupTableJohnAccepted &&
    typedCharacters >= line.length &&
    lineAge > line.length * CUP_TABLE_JOHN_TYPE_SPEED_MS + 500
  ) {
    drawCupTableJohnOptions(context, bubbleX, bubbleY + bubbleHeight + 10, bubbleWidth);
  } else {
    miniGameState.cupTableJohnButtons = null;
  }

  context.restore();
}

function drawSimpleCupTableDialogueBubble(context, x, y, text, showCursor = false, speaker = "SCATTY JOHN") {
  const bubbleWidth = Math.min(380, window.innerWidth * 0.5);
  const bubbleHeight = Math.max(76, Math.min(108, window.innerHeight * 0.28));
  const bubbleX = Math.max(16, Math.min(x, window.innerWidth - bubbleWidth - 16));
  const bubbleY = y;

  context.save();
  context.fillStyle = "rgba(24, 12, 4, 0.93)";
  context.strokeStyle = "rgba(255, 190, 92, 0.82)";
  context.shadowColor = "rgba(255, 170, 80, 0.34)";
  context.shadowBlur = 12;
  context.lineWidth = 2;
  context.fillRect(bubbleX, bubbleY, bubbleWidth, bubbleHeight);
  context.strokeRect(bubbleX, bubbleY, bubbleWidth, bubbleHeight);

  context.shadowBlur = 0;
  context.fillStyle = "#ffbd5f";
  context.font = `900 ${Math.max(10, Math.min(13, window.innerHeight * 0.034))}px 'Courier New', monospace`;
  context.textAlign = "left";
  context.textBaseline = "top";
  context.fillText(speaker, bubbleX + 12, bubbleY + 9);

  context.fillStyle = "#ffffff";
  context.font = `bold ${Math.max(10, Math.min(14, window.innerHeight * 0.038))}px 'Courier New', monospace`;
  const lines = wrapCanvasText(context, text, bubbleWidth - 24);
  const lineHeight = Math.max(14, Math.min(18, window.innerHeight * 0.044));
  lines.slice(0, 4).forEach((line, index) => {
    context.fillText(line, bubbleX + 12, bubbleY + 31 + index * lineHeight);
  });

  if (showCursor) {
    const cursorLine = Math.min(lines.length - 1, 3);
    const cursorText = lines[cursorLine] || "";
    context.fillStyle = Math.floor(performance.now() / 180) % 2 ? "#ffffff" : "rgba(255, 255, 255, 0.25)";
    context.fillRect(bubbleX + 12 + context.measureText(cursorText).width + 3, bubbleY + 33 + cursorLine * lineHeight, 7, lineHeight - 4);
  }

  context.restore();
}

function drawCupTableDrinkOptions(context, now, fadeProgress) {
  const panelWidth = Math.min(window.innerWidth * 0.52, 440);
  const panelHeight = Math.min(window.innerHeight * 0.58, 250);
  const panelX = window.innerWidth / 2 - panelWidth / 2;
  const panelY = window.innerHeight / 2 - panelHeight / 2;
  const buttonGap = 10;
  const buttonHeight = Math.max(34, Math.min(46, window.innerHeight * 0.105));
  const buttonWidth = (panelWidth - 42 - buttonGap) / 2;
  const startY = panelY + 76;

  context.save();
  context.globalAlpha *= Math.max(0, Math.min(fadeProgress, 1));
  context.fillStyle = "rgba(8, 12, 8, 0.94)";
  context.strokeStyle = "rgba(156, 255, 156, 0.72)";
  context.shadowColor = "rgba(80, 255, 130, 0.28)";
  context.shadowBlur = 16;
  context.lineWidth = 2;
  context.fillRect(panelX, panelY, panelWidth, panelHeight);
  context.strokeRect(panelX, panelY, panelWidth, panelHeight);

  context.shadowBlur = 0;
  context.fillStyle = "#ffffff";
  context.font = `900 ${Math.max(14, Math.min(20, window.innerHeight * 0.052))}px 'Courier New', monospace`;
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText("Pick what to put into the cup", panelX + panelWidth / 2, panelY + 38);

  miniGameState.cupTableDrinkButtons = miniGameState.cupTableDrinkOptions.map((option, index) => {
    const column = index % 2;
    const row = Math.floor(index / 2);
    const button = {
      x: panelX + 21 + column * (buttonWidth + buttonGap),
      y: startY + row * (buttonHeight + buttonGap),
      width: buttonWidth,
      height: buttonHeight,
      label: option,
    };

    drawCupTableOptionButton(context, button, option, "#185c34", "#ffffff");
    return button;
  });

  context.restore();
}

function drawCupTableJohnOptions(context, x, y, width) {
  const gap = 8;
  const buttonHeight = Math.max(34, Math.min(46, window.innerHeight * 0.105));
  const buttonWidth = (width - gap) / 2;
  const accept = { x, y, width: buttonWidth, height: buttonHeight };
  const repeat = { x: x + buttonWidth + gap, y, width: buttonWidth, height: buttonHeight };

  miniGameState.cupTableJohnButtons = { accept, repeat };
  drawCupTableOptionButton(context, accept, "Makes Sense", "#19a947", "#ffffff");
  drawCupTableOptionButton(context, repeat, "IQ of 40 read caveman rules again", "#8c1f24", "#ffffff");
}

function drawCupTableOptionButton(context, rect, label, fill, textColor) {
  context.save();
  context.fillStyle = fill;
  context.strokeStyle = fill === "#19a947" ? "#9cff9c" : "rgba(255, 132, 132, 0.82)";
  context.shadowColor = fill === "#19a947" ? "rgba(80, 255, 130, 0.36)" : "rgba(255, 68, 68, 0.34)";
  context.shadowBlur = 10;
  context.lineWidth = 2;
  context.fillRect(rect.x, rect.y, rect.width, rect.height);
  context.strokeRect(rect.x, rect.y, rect.width, rect.height);

  context.shadowBlur = 0;
  context.fillStyle = textColor;
  context.font = `900 ${Math.max(8, Math.min(12, window.innerHeight * 0.032))}px 'Courier New', monospace`;
  context.textAlign = "center";
  context.textBaseline = "middle";
  const lines = wrapCanvasText(context, label, rect.width - 12);
  const lineHeight = Math.max(10, Math.min(13, window.innerHeight * 0.032));
  const startY = rect.y + rect.height / 2 - ((lines.length - 1) * lineHeight) / 2;
  lines.slice(0, 2).forEach((line, index) => {
    context.fillText(line, rect.x + rect.width / 2, startY + index * lineHeight);
  });
  context.restore();
}

function drawCupTableLegs(context, x, y, radiusX, radiusY) {
  const legPositions = [
    [-0.58, 0.58],
    [0.58, 0.58],
    [-0.38, 0.83],
    [0.38, 0.83],
  ];

  context.save();
  legPositions.forEach(([offsetX, offsetY], index) => {
    const legX = x + radiusX * offsetX;
    const legTop = y + radiusY * offsetY;
    const legHeight = radiusY * (index < 2 ? 0.48 : 0.62);
    const legWidth = Math.max(11, radiusX * 0.04);
    const gradient = context.createLinearGradient(legX - legWidth, legTop, legX + legWidth, legTop + legHeight);
    gradient.addColorStop(0, "#6e3a1e");
    gradient.addColorStop(0.45, "#3d1d10");
    gradient.addColorStop(1, "#160a06");

    context.fillStyle = gradient;
    context.shadowColor = "rgba(0, 0, 0, 0.72)";
    context.shadowBlur = 12;
    context.shadowOffsetY = 8;
    context.beginPath();
    context.moveTo(legX - legWidth * 0.58, legTop);
    context.lineTo(legX + legWidth * 0.58, legTop);
    context.lineTo(legX + legWidth * 0.35, legTop + legHeight);
    context.lineTo(legX - legWidth * 0.35, legTop + legHeight);
    context.closePath();
    context.fill();
  });
  context.restore();
}

function drawCupTableTop(context, x, y, radiusX, radiusY) {
  const tableGradient = context.createRadialGradient(
    x - radiusX * 0.18,
    y - radiusY * 0.22,
    radiusY * 0.1,
    x,
    y,
    radiusX
  );
  tableGradient.addColorStop(0, "#9a6237");
  tableGradient.addColorStop(0.58, "#6f3f22");
  tableGradient.addColorStop(1, "#3a1d11");

  context.save();
  context.shadowColor = "rgba(0, 0, 0, 0.72)";
  context.shadowBlur = 34;
  context.shadowOffsetY = 18;
  context.fillStyle = "#2b130b";
  context.beginPath();
  context.ellipse(x, y + radiusY * 0.16, radiusX * 1.01, radiusY * 1.02, 0, 0, Math.PI * 2);
  context.fill();

  context.shadowBlur = 0;
  context.shadowOffsetY = 0;
  context.fillStyle = tableGradient;
  context.beginPath();
  context.ellipse(x, y, radiusX, radiusY, 0, 0, Math.PI * 2);
  context.fill();

  context.strokeStyle = "rgba(255, 206, 128, 0.22)";
  context.lineWidth = Math.max(4, Math.min(8, radiusY * 0.035));
  context.stroke();

  context.strokeStyle = "rgba(37, 16, 8, 0.34)";
  context.lineWidth = 2;
  for (let index = 0; index < 9; index += 1) {
    const offset = (index - 4) * radiusX * 0.18;
    context.beginPath();
    context.ellipse(x + offset, y, radiusX * 0.12, radiusY * 0.96, 0.08 * Math.sin(index), -Math.PI / 2, Math.PI / 2);
    context.stroke();
  }

  context.restore();
}

function drawCupTableDecor(context, tableX, tableY, tableRadiusX, tableRadiusY, now, decorItems) {
  decorItems.forEach((decor) => {
    const x = tableX + (decor.x - 0.5) * tableRadiusX * 1.72;
    const y = tableY + (decor.y - 0.5) * tableRadiusY * 1.5;
    const size = tableRadiusY * decor.size;

    if (decor.kind === "pan") {
      drawCupTablePanEgg(context, x, y, size, now);
    } else if (decor.kind === "bong") {
      drawCupTableBong(context, x, y, size, now);
    } else if (decor.kind === "underwear") {
      drawCupTableUnderwear(context, x, y, size, now);
    }
  });
}

function drawCupTablePanEgg(context, x, y, size, now) {
  context.save();
  context.translate(x, y);
  context.rotate(-0.22);
  context.shadowColor = "rgba(0, 0, 0, 0.48)";
  context.shadowBlur = 10;
  context.shadowOffsetY = 5;

  context.fillStyle = "#1b1b1f";
  context.beginPath();
  context.ellipse(0, 0, size * 0.72, size * 0.42, 0, 0, Math.PI * 2);
  context.fill();

  context.fillStyle = "#111114";
  context.fillRect(size * 0.52, -size * 0.08, size * 0.72, size * 0.16);

  context.shadowBlur = 0;
  context.fillStyle = "#f9f4dc";
  context.beginPath();
  context.ellipse(-size * 0.08, -size * 0.03, size * 0.34, size * 0.22, -0.15, 0, Math.PI * 2);
  context.ellipse(size * 0.12, size * 0.03, size * 0.28, size * 0.2, 0.25, 0, Math.PI * 2);
  context.fill();

  context.fillStyle = "#ffbf32";
  context.beginPath();
  context.arc(size * 0.02, -size * 0.01, size * 0.12, 0, Math.PI * 2);
  context.fill();

  context.strokeStyle = "rgba(255, 235, 145, 0.68)";
  context.lineWidth = Math.max(1, size * 0.025);
  for (let index = 0; index < 5; index += 1) {
    const sizzleAge = (now / 260 + index * 0.7) % 1;
    const startX = -size * 0.34 + index * size * 0.16;
    const startY = -size * 0.28 + Math.sin(now / 130 + index) * size * 0.025;
    context.globalAlpha = 0.45 * (1 - sizzleAge);
    context.beginPath();
    context.moveTo(startX, startY);
    context.quadraticCurveTo(
      startX + size * 0.06,
      startY - size * (0.08 + sizzleAge * 0.14),
      startX + size * 0.13,
      startY - size * (0.02 + sizzleAge * 0.2)
    );
    context.stroke();
  }

  context.globalAlpha = 1;
  for (let index = 0; index < 4; index += 1) {
    const smokeAge = (now / 1700 + index * 0.22) % 1;
    const smokeX = -size * 0.18 + index * size * 0.13 + Math.sin(now / 480 + index) * size * 0.035;
    const smokeY = -size * (0.36 + smokeAge * 0.6);
    context.fillStyle = `rgba(220, 235, 210, ${0.28 * (1 - smokeAge)})`;
    context.beginPath();
    context.ellipse(smokeX, smokeY, size * (0.05 + smokeAge * 0.08), size * (0.025 + smokeAge * 0.05), 0.45, 0, Math.PI * 2);
    context.fill();
  }

  context.strokeStyle = "rgba(255, 255, 255, 0.22)";
  context.lineWidth = 2;
  context.beginPath();
  context.ellipse(0, 0, size * 0.72, size * 0.42, 0, Math.PI * 0.95, Math.PI * 1.72);
  context.stroke();
  context.restore();
}

function drawCupTableBong(context, x, y, size, now) {
  const bubble = 0.55 + Math.sin(now / 520) * 0.18;
  const isSelectionActive = miniGameState.cupTablePhase === "selecting";

  context.save();
  context.translate(x, y);
  context.shadowColor = "rgba(64, 216, 255, 0.32)";
  context.shadowBlur = 12;
  context.lineCap = "round";
  context.lineJoin = "round";

  context.fillStyle = "rgba(48, 190, 210, 0.32)";
  context.strokeStyle = "rgba(205, 255, 255, 0.78)";
  context.lineWidth = Math.max(2, size * 0.045);
  context.beginPath();
  context.moveTo(-size * 0.16, size * 0.38);
  context.quadraticCurveTo(-size * 0.32, size * 0.12, -size * 0.1, -size * 0.02);
  context.lineTo(-size * 0.06, -size * 0.58);
  context.lineTo(size * 0.12, -size * 0.58);
  context.lineTo(size * 0.14, -size * 0.02);
  context.quadraticCurveTo(size * 0.34, size * 0.14, size * 0.16, size * 0.38);
  context.closePath();
  context.fill();
  context.stroke();

  context.strokeStyle = "rgba(126, 255, 154, 0.72)";
  context.beginPath();
  context.moveTo(size * 0.12, size * 0.08);
  context.lineTo(size * 0.5, -size * 0.12);
  context.stroke();

  context.fillStyle = "#24421d";
  context.beginPath();
  context.ellipse(size * 0.54, -size * 0.15, size * 0.12, size * 0.07, -0.25, 0, Math.PI * 2);
  context.fill();

  context.fillStyle = `rgba(165, 255, 210, ${bubble})`;
  context.beginPath();
  context.ellipse(size * 0.02, size * 0.24, size * 0.18, size * 0.08, 0, 0, Math.PI * 2);
  context.fill();

  if (isSelectionActive) {
    drawCupTableBongSmoke(context, size, now);
  }

  context.restore();
}

function drawCupTableBongSmoke(context, size, now) {
  const selectionAge = now - (miniGameState.cupTableSelectionStartedAt || now);
  const smokeBuild = Math.min(selectionAge / 2200, 1);

  context.save();
  context.shadowBlur = 0;
  for (let index = 0; index < 7; index += 1) {
    const smokeAge = (now / 2300 + index * 0.14) % 1;
    const drift = Math.sin(now / 520 + index * 1.8) * size * (0.08 + smokeAge * 0.1);
    const smokeX = size * 0.03 + drift;
    const smokeY = -size * (0.68 + smokeAge * 0.86);
    const smokeSize = size * (0.06 + smokeAge * 0.12);
    const alpha = smokeBuild * 0.34 * (1 - smokeAge);

    context.fillStyle = `rgba(225, 245, 230, ${alpha})`;
    context.beginPath();
    context.ellipse(smokeX, smokeY, smokeSize, smokeSize * 0.46, 0.35 + smokeAge, 0, Math.PI * 2);
    context.fill();
  }
  context.restore();
}

function drawCupTableUnderwear(context, x, y, size, now) {
  const sway = Math.sin(now / 700) * 0.035;

  context.save();
  context.translate(x, y);
  context.rotate(sway);
  context.shadowColor = "rgba(0, 0, 0, 0.44)";
  context.shadowBlur = 9;
  context.shadowOffsetY = 5;

  context.fillStyle = "#f6f0ff";
  context.strokeStyle = "#ff63c8";
  context.lineWidth = Math.max(2, size * 0.06);
  context.beginPath();
  context.moveTo(-size * 0.52, -size * 0.08);
  context.quadraticCurveTo(-size * 0.3, size * 0.34, -size * 0.04, size * 0.18);
  context.quadraticCurveTo(0, size * 0.06, size * 0.04, size * 0.18);
  context.quadraticCurveTo(size * 0.32, size * 0.34, size * 0.52, -size * 0.08);
  context.lineTo(size * 0.34, -size * 0.22);
  context.quadraticCurveTo(0, -size * 0.08, -size * 0.34, -size * 0.22);
  context.closePath();
  context.fill();
  context.stroke();

  context.shadowBlur = 0;
  context.strokeStyle = "rgba(255, 99, 200, 0.72)";
  context.lineWidth = 1.5;
  context.beginPath();
  context.moveTo(-size * 0.05, -size * 0.05);
  context.lineTo(-size * 0.05, size * 0.16);
  context.stroke();

  context.restore();
}

function drawCupOnTable(context, cup, tableX, tableY, tableRadiusX, tableRadiusY, now) {
  if (cup.removed || (miniGameState.cupTablePhase === "drinking" && miniGameState.cupTableDrinkSelectedCupIndex === miniGameState.cupTableCups.indexOf(cup))) {
    return;
  }

  const cupIndex = miniGameState.cupTableCups.indexOf(cup);
  const cupPosition = getCupTableCupScreenPosition(cup, tableX, tableY, tableRadiusX, tableRadiusY);
  const cupX = cupPosition.x;
  const cupY = cupPosition.y;
  const cupWidth = cupPosition.width;
  const cupHeight = cupPosition.height;
  const bob = Math.sin(now / 900 + cup.wobble) * 0.7;
  const selectionAge = miniGameState.cupTableSelectionStartedAt
    ? now - miniGameState.cupTableSelectionStartedAt
    : 0;
  const redProgress = Math.min(
    Math.max((selectionAge - CUP_TABLE_SELECTION_RED_START_MS) / CUP_TABLE_SELECTION_RED_RAMP_MS, 0),
    1
  );
  const isSelected = miniGameState.cupTablePhase === "selecting" && miniGameState.cupTableSelectionIndex === cupIndex;
  const isPlayerSelectedCup =
    (miniGameState.cupTablePhase === "chooseCup" || miniGameState.cupTablePhase === "pouring") &&
    miniGameState.cupTableSelectedCupIndex === cupIndex;
  const isPlayerOwnedDrinkCup =
    (
      miniGameState.cupTablePhase === "drinkChoice" ||
      miniGameState.cupTablePhase === "drinking" ||
      miniGameState.cupTablePhase === "johnTurn" ||
      miniGameState.cupTablePhase === "johnDrinking"
    ) &&
    miniGameState.cupTableSelectedCupIndex === cupIndex;
  const isDrinkSelectedCup =
    (miniGameState.cupTablePhase === "drinkChoice" || miniGameState.cupTablePhase === "drinking") &&
    miniGameState.cupTableDrinkSelectedCupIndex === cupIndex;
  const isJohnSelectedCup =
    (miniGameState.cupTablePhase === "johnTurn" || miniGameState.cupTablePhase === "johnDrinking") &&
    (miniGameState.cupTableJohnTurnSelectionIndex === cupIndex || miniGameState.cupTableJohnSelectedCupIndex === cupIndex);
  const finalFlashAge = miniGameState.cupTableSelectionFlashAt ? now - miniGameState.cupTableSelectionFlashAt : Infinity;
  const finalFlashProgress =
    finalFlashAge < CUP_TABLE_SELECTION_FINAL_FLASH_MS
      ? 1 - finalFlashAge / CUP_TABLE_SELECTION_FINAL_FLASH_MS
      : 0;
  const highlightStrength = isSelected ? 1 : finalFlashProgress;
  const whiteHighlight = highlightStrength * (1 - redProgress);
  const redHighlight = Math.max(isSelected ? redProgress : 0, finalFlashProgress, isPlayerOwnedDrinkCup ? 1 : 0);
  const greenHighlight = isPlayerSelectedCup || isDrinkSelectedCup || isJohnSelectedCup ? 1 : 0;

  if (!(miniGameState.cupTablePhase === "drinkChoice" && cupIndex === miniGameState.cupTableSelectedCupIndex)) {
    miniGameState.cupTableCupHitBoxes[cupIndex] = {
      index: cupIndex,
      x: cupX - cupWidth * 0.78,
      y: cupY - cupHeight * 0.48,
      width: cupWidth * 1.56,
      height: cupHeight * 1.34,
    };
  }

  context.save();
  context.translate(cupX, cupY + bob);
  context.rotate(cup.rotation || 0);
  context.shadowColor = "rgba(0, 0, 0, 0.24)";
  context.shadowBlur = 5;
  context.shadowOffsetY = 3;
  context.fillStyle = "rgba(8, 5, 3, 0.14)";
  context.beginPath();
  context.ellipse(0, cupHeight * 0.54, cupWidth * 0.55, cupWidth * 0.18, 0, 0, Math.PI * 2);
  context.fill();

  context.shadowBlur = 0;
  context.shadowOffsetY = 0;
  context.fillStyle = blendCupColor(
    "rgba(238, 230, 204, 0.94)",
    whiteHighlight,
    redHighlight
  );
  context.beginPath();
  context.moveTo(-cupWidth * 0.43, -cupHeight * 0.1);
  context.lineTo(cupWidth * 0.43, -cupHeight * 0.1);
  context.lineTo(cupWidth * 0.32, cupHeight * 0.45);
  context.quadraticCurveTo(0, cupHeight * 0.58, -cupWidth * 0.32, cupHeight * 0.45);
  context.closePath();
  context.fill();

  context.fillStyle = blendCupColor("rgba(173, 158, 126, 0.42)", whiteHighlight * 0.75, redHighlight * 0.7);
  context.beginPath();
  context.ellipse(0, -cupHeight * 0.1, cupWidth * 0.46, cupWidth * 0.22, 0, 0, Math.PI * 2);
  context.fill();

  context.fillStyle = cup.liquid;
  context.shadowColor = redHighlight > 0.05 ? "rgba(255, 40, 40, 0.85)" : cup.liquid;
  context.shadowBlur = 8 + highlightStrength * 10;
  context.beginPath();
  context.ellipse(0, -cupHeight * 0.12, cupWidth * 0.34, cupWidth * 0.14, 0, 0, Math.PI * 2);
  context.fill();

  if (highlightStrength > 0 || greenHighlight > 0 || isPlayerOwnedDrinkCup) {
    context.globalCompositeOperation = "source-atop";
    context.fillStyle = `rgba(255, 255, 255, ${whiteHighlight * 0.34})`;
    context.fillRect(-cupWidth * 0.55, -cupHeight * 0.26, cupWidth * 1.1, cupHeight * 0.98);
    context.fillStyle = `rgba(255, 20, 20, ${redHighlight * 0.42})`;
    context.fillRect(-cupWidth * 0.55, -cupHeight * 0.26, cupWidth * 1.1, cupHeight * 0.98);
    context.fillStyle = `rgba(40, 255, 100, ${greenHighlight * 0.46})`;
    context.fillRect(-cupWidth * 0.55, -cupHeight * 0.26, cupWidth * 1.1, cupHeight * 0.98);
    context.globalCompositeOperation = "source-over";
  }

  context.shadowBlur = 0;
  context.strokeStyle =
    greenHighlight > 0
      ? "rgba(90, 255, 120, 0.96)"
      : redHighlight > 0.55
      ? "rgba(255, 45, 45, 0.96)"
      : highlightStrength > 0
      ? `rgba(255, ${Math.round(255 * (1 - redProgress))}, ${Math.round(255 * (1 - redProgress))}, ${0.5 + highlightStrength * 0.35})`
      : "rgba(255, 255, 255, 0.34)";
  context.lineWidth = 1.5 + highlightStrength * 1.2 + greenHighlight * 1.5 + (redHighlight > 0.55 ? 1.2 : 0);
  context.beginPath();
  context.moveTo(-cupWidth * 0.24, -cupHeight * 0.02);
  context.lineTo(-cupWidth * 0.18, cupHeight * 0.35);
  context.stroke();

  context.restore();

  const USE_CUP_SELECTION_RING_HIGHLIGHT = false;
  if (USE_CUP_SELECTION_RING_HIGHLIGHT && (isSelected || finalFlashProgress > 0)) {
    drawCupSelectionHighlight(context, cupX, cupY + bob, cupWidth, cupHeight, redProgress, finalFlashProgress, now);
  }
}

function blendCupColor(baseColor, whiteAmount, redAmount) {
  if (redAmount > 0) {
    return `rgba(255, ${Math.round(235 * (1 - redAmount))}, ${Math.round(220 * (1 - redAmount))}, 0.96)`;
  }

  if (whiteAmount > 0) {
    return `rgba(255, 255, 255, ${0.86 + whiteAmount * 0.12})`;
  }

  return baseColor;
}

function drawCupSelectionHighlight(context, x, y, cupWidth, cupHeight, redProgress, finalFlashProgress, now) {
  const pulse = 0.82 + Math.sin(now / 55) * 0.18;
  const red = Math.round(255 * redProgress + 255 * (1 - redProgress));
  const greenBlue = Math.round(255 * (1 - redProgress));
  const alpha = Math.max(0.72 * pulse, finalFlashProgress * 0.92);
  const ringScale = 1 + finalFlashProgress * 0.42;

  context.save();
  context.strokeStyle = `rgba(${red}, ${greenBlue}, ${greenBlue}, ${alpha})`;
  context.fillStyle = `rgba(255, 0, 0, ${finalFlashProgress * 0.28})`;
  context.shadowColor = `rgba(${red}, ${greenBlue}, ${greenBlue}, ${0.75})`;
  context.shadowBlur = 16 + finalFlashProgress * 18;
  context.lineWidth = Math.max(3, cupWidth * 0.12);
  context.beginPath();
  context.ellipse(x, y + cupHeight * 0.12, cupWidth * 0.82 * ringScale, cupHeight * 0.78 * ringScale, 0, 0, Math.PI * 2);
  context.fill();
  context.stroke();
  context.restore();
}

function loadRetroPhoneImage() {
  if (miniGameState.phoneImage) {
    return miniGameState.phoneImage;
  }

  const image = new Image();
  image.src = RETRO_PHONE_IMAGE_URL;
  miniGameState.phoneImage = image;
  return image;
}

function getPhoneRingShake(ringAge) {
  if (ringAge < 0 || ringAge > POST_GAME_PHONE_RING_DURATION_MS) {
    return 0;
  }

  const firstRing = getPhoneRingClusterShake(ringAge, 200, 650);
  const secondRing = getPhoneRingClusterShake(ringAge, 850, 1250);
  return Math.max(firstRing, secondRing) * 9;
}

function getPhoneRingClusterShake(ringAge, start, end) {
  if (ringAge < start || ringAge > end) {
    return 0;
  }

  const progress = (ringAge - start) / (end - start);
  const envelope = Math.sin(progress * Math.PI);
  const tremble = 0.68 + Math.abs(Math.sin(ringAge / 24)) * 0.32;
  return envelope * tremble;
}

function drawRetroPhone(context, width, height, ringShake) {
  const phoneImage = loadRetroPhoneImage();

  context.save();
  context.imageSmoothingEnabled = false;
  context.shadowColor = "rgba(156, 255, 156, 0.28)";
  context.shadowBlur = 18;

  if (phoneImage.complete && phoneImage.naturalWidth > 0) {
    const aspect = phoneImage.naturalWidth / phoneImage.naturalHeight;
    context.drawImage(phoneImage, -width / 2, -width / aspect / 2, width, width / aspect);
  }

  if (ringShake > 0.2) {
    context.strokeStyle = `rgba(255, 255, 255, ${Math.min(0.8, ringShake / 8)})`;
    context.lineWidth = 2;
    [-1, 1].forEach((side) => {
      context.beginPath();
      context.arc(side * width * 0.58, -height * 0.33, width * 0.08, -0.9, 0.9);
      context.stroke();
      context.beginPath();
      context.arc(side * width * 0.66, -height * 0.33, width * 0.12, -0.9, 0.9);
      context.stroke();
    });
  }

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

  if (
    miniGameState.status === "phoneTransition" ||
    miniGameState.status === "phone" ||
    miniGameState.status === "phoneDialogue" ||
    miniGameState.status === "phoneDone" ||
    miniGameState.status === "cupTable"
  ) {
    context.restore();
    return;
  }

  if (miniGameState.status === "failed") {
    drawFailedMiniGameOverlay(context);
    context.restore();
    return;
  }

  if (miniGameState.status === "victory") {
    const age = performance.now() - (miniGameState.victoryStartedAt || performance.now());
    const fadeOut = Math.min(Math.max((age - MINI_GAME_VICTORY_HOLD_MS) / MINI_GAME_VICTORY_FADE_MS, 0), 1);
    context.globalAlpha = 1 - fadeOut;
    context.font = `900 ${Math.max(48, Math.min(86, window.innerHeight * 0.2))}px 'Courier New', monospace`;
    context.fillStyle = "#6dff66";
    context.shadowColor = "rgba(109, 255, 102, 0.95)";
    context.shadowBlur = 26;
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

function drawFailedMiniGameOverlay(context) {
  const age = performance.now() - (miniGameState.failedAt || performance.now());
  const failedOpacity = Math.min(age / 360, 1);
  const buttonsOpacity = Math.min(Math.max((age - 520) / 220, 0), 1);
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2 - 30;
  const failedSize = Math.max(36, Math.min(58, window.innerHeight * 0.16));

  context.save();
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.shadowColor = "rgba(255, 64, 64, 0.7)";
  context.shadowBlur = 18;
  context.globalAlpha = failedOpacity;
  context.font = `900 ${failedSize}px 'Courier New', monospace`;
  context.fillStyle = "#ff3030";
  context.fillText("Failed", centerX, centerY);

  if (buttonsOpacity > 0) {
    const { retry, skip } = getMiniGameFailedButtons();
    const canSkip = !skip.disabled;

    miniGameState.failedButtons = { retry, skip };
    context.globalAlpha = buttonsOpacity;
    drawFailedButton(context, retry, "Retry");
    drawFailedButton(context, skip, "Skip level", canSkip ? "2/2" : "1/2");

    if (!canSkip) {
      const blink = 0.45 + Math.sin(performance.now() / 260) * 0.35;
      context.globalAlpha = buttonsOpacity * blink;
      context.shadowColor = "rgba(255, 255, 255, 0.35)";
      context.shadowBlur = 8;
      context.fillStyle = "#ffffff";
      context.font = `bold ${Math.max(10, Math.min(14, window.innerHeight * 0.036))}px 'Courier New', monospace`;
      context.fillText(
        "Come on... give it one more try you got this",
        centerX,
        retry.y + retry.height + Math.max(20, window.innerHeight * 0.055)
      );
    }
  } else {
    miniGameState.failedButtons = getMiniGameFailedButtons();
  }

  context.restore();
}

function drawFailedButton(context, rect, label, badge = "") {
  context.save();
  context.fillStyle = rect.disabled ? "rgba(18, 18, 18, 0.78)" : "rgba(4, 18, 8, 0.86)";
  context.strokeStyle = rect.disabled ? "rgba(140, 140, 140, 0.55)" : "rgba(255, 255, 255, 0.88)";
  context.lineWidth = 2;
  context.fillRect(rect.x, rect.y, rect.width, rect.height);
  context.strokeRect(rect.x, rect.y, rect.width, rect.height);
  context.fillStyle = rect.disabled ? "rgba(255, 255, 255, 0.48)" : "#ffffff";
  context.font = `bold ${Math.max(9, Math.min(12, rect.width / 10))}px 'Courier New', monospace`;
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.shadowBlur = 0;
  context.fillText(label, rect.x + rect.width / 2 - (badge ? 9 : 0), rect.y + rect.height / 2 + 1);

  if (badge) {
    const badgeWidth = 26;
    const badgeHeight = 16;
    const badgeX = rect.x + rect.width - badgeWidth - 7;
    const badgeY = rect.y + rect.height / 2 - badgeHeight / 2;

    context.fillStyle = "rgba(255, 255, 255, 0.1)";
    context.strokeStyle = "rgba(255, 255, 255, 0.35)";
    context.fillRect(badgeX, badgeY, badgeWidth, badgeHeight);
    context.strokeRect(badgeX, badgeY, badgeWidth, badgeHeight);
    context.fillStyle = "rgba(255, 255, 255, 0.62)";
    context.font = "bold 9px 'Courier New', monospace";
    context.fillText(badge, badgeX + badgeWidth / 2, badgeY + badgeHeight / 2 + 1);
  }

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

function drawVolcanoHazards(context) {
  drawLavaPools(context);
  drawVolcano(context);
  drawLavaRocks(context);
}

function drawVolcano(context) {
  const volcano = miniGameState.volcano;

  if (!volcano) {
    return;
  }

  const age = performance.now() - volcano.startedAt;
  const fade = volcano.isFading ? Math.max(0, 1 - (age - MINI_GAME_VOLCANO_DURATION_MS) / 900) : 1;
  const pulse = Math.sin(volcano.pulse) * 4;

  context.save();
  context.globalAlpha = fade;
  context.translate(volcano.x, volcano.y);
  context.shadowColor = "rgba(255, 74, 24, 0.75)";
  context.shadowBlur = 20;

  context.fillStyle = "rgba(255, 72, 24, 0.62)";
  context.beginPath();
  context.ellipse(0, 48, 72, 20, 0, 0, Math.PI * 2);
  context.fill();

  context.fillStyle = "#211629";
  context.beginPath();
  context.moveTo(-68, 46);
  context.lineTo(-28, -38);
  context.lineTo(0, -54);
  context.lineTo(32, -36);
  context.lineTo(70, 46);
  context.closePath();
  context.fill();

  context.fillStyle = "#3a1d1c";
  context.beginPath();
  context.moveTo(-48, 46);
  context.lineTo(-18, -24);
  context.lineTo(0, -38);
  context.lineTo(22, -22);
  context.lineTo(52, 46);
  context.closePath();
  context.fill();

  context.fillStyle = "#ff4a24";
  context.fillRect(-7, -40, 14, 76);
  context.fillRect(-30, 2, 11, 44);
  context.fillRect(22, -8, 10, 54);
  context.fillStyle = "#ff9a2e";
  context.fillRect(-4, -36, 8, 68);
  context.fillRect(-27, 10, 5, 34);
  context.fillRect(25, 0, 4, 40);

  context.fillStyle = "#ffda5a";
  context.beginPath();
  context.arc(0, -55 - pulse, 18 + pulse * 0.35, 0, Math.PI * 2);
  context.fill();
  context.fillStyle = "#ff4a24";
  context.beginPath();
  context.arc(0, -49, 24, 0, Math.PI * 2);
  context.fill();
  context.fillStyle = "#211629";
  context.fillRect(-18, -48, 36, 13);

  context.strokeStyle = "#ff9a2e";
  context.lineWidth = 3;
  context.beginPath();
  context.moveTo(-68, 46);
  context.lineTo(-28, -38);
  context.lineTo(0, -54);
  context.lineTo(32, -36);
  context.lineTo(70, 46);
  context.stroke();

  context.fillStyle = "rgba(255, 154, 46, 0.9)";
  for (let index = 0; index < 12; index += 1) {
    const sparkAngle = (Math.PI * 2 * index) / 12 + volcano.pulse * 0.18;
    const distance = 26 + Math.sin(volcano.pulse + index) * 8;
    context.fillRect(Math.cos(sparkAngle) * distance - 2, -58 + Math.sin(sparkAngle) * distance * 0.55 - 2, 4, 4);
  }
  context.restore();
}

function drawLavaRocks(context) {
  miniGameState.lavaRocks.forEach((rock) => {
    const progress = Math.min((performance.now() - rock.startedAt) / (rock.landAt - rock.startedAt), 1);
    const markerAlpha = Math.min(1, progress * 1.8);

    context.save();
    context.translate(rock.targetX, rock.targetY);
    context.rotate(performance.now() / 140 + rock.phase);
    context.globalAlpha = markerAlpha;
    context.strokeStyle = "rgba(255, 50, 30, 0.9)";
    context.lineWidth = 2;
    context.beginPath();
    context.arc(0, 0, 22, 0, Math.PI * 2);
    context.moveTo(-28, 0);
    context.lineTo(28, 0);
    context.moveTo(0, -28);
    context.lineTo(0, 28);
    context.stroke();
    context.restore();

    context.save();
    context.translate(rock.x, rock.y);
    context.shadowColor = "rgba(255, 80, 24, 0.9)";
    context.shadowBlur = 16;
    context.fillStyle = "#ff4a24";
    context.fillRect(-8, -8, 16, 16);
    context.fillStyle = "#ffd64a";
    context.fillRect(-3, -3, 6, 6);
    context.restore();
  });
}

function drawLavaPools(context) {
  miniGameState.lavaPools.forEach((pool) => {
    const progress = Math.min((performance.now() - pool.startedAt) / 1000, 1);
    const opacity = 1 - progress;

    context.save();
    context.globalAlpha = opacity;
    context.translate(pool.x, pool.y);
    context.shadowColor = "rgba(255, 70, 22, 0.7)";
    context.shadowBlur = 16;
    context.fillStyle = "rgba(255, 72, 24, 0.7)";
    context.beginPath();
    context.ellipse(0, 0, pool.radius * (1 + progress * 0.4), pool.radius * 0.42, 0, 0, Math.PI * 2);
    context.fill();
    context.fillStyle = "rgba(255, 220, 80, 0.72)";
    context.fillRect(-pool.radius * 0.45, -3, pool.radius * 0.9, 6);
    context.restore();
  });
}

function drawLavaSnakes(context) {
  miniGameState.lavaSnakes.forEach((snake) => {
    const wobble = Math.sin(snake.phase) * 3;

    context.save();
    context.translate(snake.x, snake.y);
    context.rotate(snake.angle || 0);
    context.shadowColor = "rgba(255, 74, 24, 0.72)";
    context.shadowBlur = 14;
    for (let index = 0; index < 4; index += 1) {
      const x = -snake.size + index * (snake.size * 0.45);
      const y = Math.sin(snake.phase + index * 0.9) * 4 + wobble * 0.25;
      context.fillStyle = index % 2 === 0 ? "#ff4a24" : "#ff7a2e";
      context.fillRect(x, y - 5, snake.size * 0.55, 10);
    }
    context.fillStyle = "#ff4a24";
    context.fillRect(snake.size * 0.55, -11, 15, 18);
    context.fillStyle = "#ffd64a";
    context.fillRect(snake.size * 0.82, -7, 4, 4);
    context.fillStyle = "#000000";
    context.fillRect(snake.size * 1.02, -2, 8, 3);
    context.restore();
    drawLavaSnakeHealthBar(context, snake);
  });
}

function drawLavaSnakeHealthBar(context, snake) {
  const width = snake.size * 1.8;
  const ratio = Math.max(0, snake.health / snake.maxHealth);

  context.save();
  context.fillStyle = "rgba(0, 0, 0, 0.72)";
  context.fillRect(snake.x - width / 2, snake.y - snake.size - 13, width, 4);
  context.fillStyle = "#ff4a24";
  context.fillRect(snake.x - width / 2, snake.y - snake.size - 13, width * ratio, 4);
  context.strokeStyle = "rgba(255, 255, 255, 0.65)";
  context.lineWidth = 1;
  context.strokeRect(snake.x - width / 2, snake.y - snake.size - 13, width, 4);
  context.restore();
}

function drawFairyHut(context) {
  const hut = miniGameState.fairyHut;

  if (!hut) {
    return;
  }

  const age = performance.now() - hut.startedAt;
  const fade = Math.min(age / 700, 1);

  context.save();
  context.globalAlpha = fade;
  context.translate(hut.x, hut.y);
  context.shadowColor = "rgba(156, 255, 220, 0.42)";
  context.shadowBlur = 14;
  context.fillStyle = "#6b3f26";
  context.fillRect(-20, -4, 40, 28);
  context.fillStyle = "#8ee87f";
  context.fillRect(-27, -17, 54, 15);
  context.fillRect(-19, -26, 38, 11);
  context.fillStyle = "#c9ffe0";
  context.fillRect(-7, 8, 14, 16);
  context.fillStyle = "#ffd64a";
  context.fillRect(10, 1, 6, 6);
  context.strokeStyle = "rgba(255,255,255,0.75)";
  context.lineWidth = 1;
  context.strokeRect(-20, -4, 40, 28);
  context.restore();
}

function drawHelperFairies(context) {
  miniGameState.helperFairies.forEach((fairy) => {
    const flap = Math.sin(fairy.phase) * 5;

    context.save();
    context.translate(fairy.x, fairy.y);
    context.shadowColor = "rgba(155, 231, 255, 0.72)";
    context.shadowBlur = 14;
    context.fillStyle = "rgba(155, 231, 255, 0.82)";
    context.beginPath();
    context.ellipse(-9, flap * 0.2, 8, 4 + Math.abs(flap) * 0.4, -0.6, 0, Math.PI * 2);
    context.ellipse(9, flap * 0.2, 8, 4 + Math.abs(flap) * 0.4, 0.6, 0, Math.PI * 2);
    context.fill();
    context.fillStyle = "#ffe8ff";
    context.fillRect(-4, -7, 8, 13);
    context.fillStyle = "#ffd64a";
    context.fillRect(-3, -12, 6, 5);
    context.strokeStyle = "#ffffff";
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(5, 0);
    context.lineTo(17, -8 + Math.sin(fairy.phase * 1.4) * 4);
    context.stroke();
    drawSmallHealthBar(context, 0, -20, 24, fairy.health / fairy.maxHealth, "#9be7ff");
    context.restore();
  });
}

function drawTikiMen(context) {
  miniGameState.tikiMen.forEach((tiki) => {
    const unit = tiki.size / 5;
    const run = Math.sin(tiki.phase) * 2.8;
    const legSwing = Math.sin(tiki.phase) * unit * 0.75;

    context.save();
    context.translate(tiki.x, tiki.y + run);
    context.rotate(tiki.angle || 0);
    context.shadowColor = "rgba(255, 214, 74, 0.45)";
    context.shadowBlur = 8;

    context.strokeStyle = "#d8b67a";
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(unit * 1.4, -unit * 0.4);
    context.lineTo(unit * 5.1, -unit * 2.6);
    context.stroke();
    context.fillStyle = "#f1ead0";
    context.beginPath();
    context.moveTo(unit * 5.1, -unit * 2.6);
    context.lineTo(unit * 6.1, -unit * 2.35);
    context.lineTo(unit * 5.3, -unit * 1.72);
    context.closePath();
    context.fill();

    context.strokeStyle = "#5c321a";
    context.lineWidth = Math.max(1.5, unit * 0.35);
    context.beginPath();
    context.moveTo(-unit * 0.8, unit * 1.2);
    context.lineTo(-unit * 1.4, unit * 2.5 + legSwing);
    context.moveTo(unit * 0.8, unit * 1.2);
    context.lineTo(unit * 1.4, unit * 2.5 - legSwing);
    context.moveTo(-unit * 1.3, -unit * 0.2);
    context.lineTo(-unit * 2.5, unit * 0.9);
    context.moveTo(unit * 1.3, -unit * 0.2);
    context.lineTo(unit * 2.2, -unit * 1.1);
    context.stroke();

    context.fillStyle = "#7a421f";
    context.fillRect(-unit * 0.8, -unit * 0.8, unit * 1.6, unit * 2.2);

    context.fillStyle = "#9a5529";
    context.fillRect(-unit * 1.7, -unit * 3.2, unit * 3.4, unit * 2.3);
    context.fillStyle = "#c47a32";
    context.fillRect(-unit * 1.45, -unit * 2.9, unit * 2.9, unit * 0.45);
    context.fillRect(-unit * 1.45, -unit * 1.25, unit * 2.9, unit * 0.38);
    context.fillStyle = "#ffd64a";
    context.fillRect(-unit * 1.1, -unit * 2.22, unit * 0.62, unit * 0.55);
    context.fillRect(unit * 0.48, -unit * 2.22, unit * 0.62, unit * 0.55);
    context.fillStyle = "#111111";
    context.fillRect(-unit * 0.62, -unit * 1.6, unit * 1.24, unit * 0.35);
    context.fillStyle = "#ffffff";
    context.fillRect(-unit * 0.88, -unit * 0.72, unit * 0.44, unit * 0.38);
    context.fillRect(0, -unit * 0.72, unit * 0.44, unit * 0.38);
    context.strokeStyle = "#2b170d";
    context.lineWidth = 1;
    context.strokeRect(-unit * 1.7, -unit * 3.2, unit * 3.4, unit * 2.3);
    drawSmallHealthBar(context, 0, -unit * 4.1, 28, tiki.health / tiki.maxHealth, "#ffd64a");
    context.restore();
  });
}

function drawDroppedSpears(context) {
  miniGameState.droppedSpears.forEach((spear) => {
    const progress = Math.min((performance.now() - spear.startedAt) / 1000, 1);

    context.save();
    context.globalAlpha = 1 - progress;
    context.translate(spear.x, spear.y);
    context.rotate(spear.angle);
    context.strokeStyle = "#d8b67a";
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(-12, 0);
    context.lineTo(16, 0);
    context.stroke();
    context.fillStyle = "#ffffff";
    context.fillRect(15, -3, 6, 6);
    context.restore();
  });
}

function drawMagicBursts(context) {
  miniGameState.magicBursts.forEach((burst) => {
    const progress = Math.min((performance.now() - burst.startedAt) / 800, 1);
    const opacity = 1 - progress;

    context.save();
    context.globalAlpha = opacity;
    context.translate(burst.x, burst.y);
    context.shadowColor = burst.type === "fairy" ? "rgba(96, 207, 255, 0.9)" : "rgba(255, 214, 74, 0.8)";
    context.shadowBlur = 16;
    context.strokeStyle = burst.type === "fairy" ? "#60cfff" : "#ffd64a";
    context.fillStyle = burst.type === "fairy" ? "#b15cff" : "#ffd64a";

    if (burst.type === "fairy") {
      context.lineWidth = 3;
      context.beginPath();
      for (let angle = 0; angle < Math.PI * 2; angle += 0.35) {
        const radius = 5 + progress * 42 + angle * 1.2;
        context.lineTo(Math.cos(angle + progress * 5) * radius, Math.sin(angle + progress * 5) * radius);
      }
      context.stroke();
    } else {
      for (let index = 0; index < 8; index += 1) {
        const angle = (Math.PI * 2 * index) / 8;
        const distance = 8 + progress * 30;
        context.fillRect(Math.cos(angle) * distance - 3, Math.sin(angle) * distance - 3, 6, 6);
      }
    }

    context.restore();
  });
}

function drawSmallHealthBar(context, x, y, width, ratio, color) {
  context.fillStyle = "rgba(0,0,0,0.75)";
  context.fillRect(x - width / 2, y, width, 3);
  context.fillStyle = color;
  context.fillRect(x - width / 2, y, width * Math.max(0, ratio), 3);
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

function drawSmokeDeaths(context) {
  miniGameState.smokeDeaths.forEach((death) => {
    const age = performance.now() - death.startedAt;

    if (death.exploded) {
      return;
    }

    const inhale = Math.min(age / 650, 1);
    const puff = Math.max(0, Math.min((age - 650) / 1000, 1));
    const isFlying = age > 650;
    const step = Math.max(3, death.size / 5) * (1 + inhale * 0.28);

    death.smokePuffs.forEach((smokePuff) => {
      const puffAge = performance.now() - smokePuff.startedAt;
      const progress = Math.min(puffAge / 850, 1);

      context.save();
      context.globalAlpha = Math.max(0, 1 - progress);
      context.strokeStyle = `rgba(156, 255, 156, ${0.62 - progress * 0.42})`;
      context.lineWidth = 2;
      context.beginPath();
      context.arc(smokePuff.x, smokePuff.y - progress * 18, smokePuff.size + progress * 10, 0, Math.PI * 2);
      context.stroke();
      context.restore();
    });

    context.save();
    context.translate(death.x, death.y);
    if (isFlying) {
      context.rotate(Math.sin(age / 70 + death.phase) * 0.7);
    }
    context.shadowColor = "rgba(156, 255, 156, 0.6)";
    context.shadowBlur = 14;
    context.fillStyle = "#9cff9c";
    context.fillRect(-step * 2, -step, step * 4, step * 3);
    context.fillRect(-step * 3, 0, step, step);
    context.fillRect(step * 2, 0, step, step);
    context.fillRect(-step * 2, -step * 2, step, step);
    context.fillRect(step, -step * 2, step, step);
    context.fillStyle = "#000000";
    context.fillRect(-step * 1.2, -step * 0.1, step * 0.8, step * 0.25);
    context.fillRect(step * 0.4, -step * 0.1, step * 0.8, step * 0.25);
    context.fillRect(-step * 1.2, step * 1.1, step * 2.4, puff > 0 ? step * 1.1 : step * 0.35);

    context.fillStyle = "#d8c4a4";
    context.fillRect(step * 1.35, step * 0.55, step * 2.35, step * 0.52);
    context.strokeStyle = "#000000";
    context.lineWidth = Math.max(1, step * 0.12);
    context.strokeRect(step * 1.35, step * 0.55, step * 2.35, step * 0.52);
    context.fillStyle = "#ff4a24";
    context.fillRect(step * 3.45, step * 0.45, step * 0.42, step * 0.72);
    context.fillStyle = "#ffffff";
    context.fillRect(step * 1.55, step * 0.62, step * 0.34, step * 0.36);

    if (puff > 0) {
      context.strokeStyle = `rgba(156, 255, 156, ${1 - puff})`;
      context.lineWidth = 3;
      for (let index = 0; index < 3; index += 1) {
        context.beginPath();
        context.arc(step * (1.5 + index * 0.7) + puff * 28, -step * (0.4 + index * 0.4), step * (0.8 + puff * 1.8), 0, Math.PI * 2);
        context.stroke();
      }
    }

    context.restore();
  });
}

function drawHerbBursts(context) {
  miniGameState.herbBursts.forEach((burst) => {
    const progress = Math.min((performance.now() - burst.startedAt) / 1600, 1);
    const opacity = progress < 0.18 ? progress / 0.18 : Math.max(0, 1 - (progress - 0.72) / 0.28);
    const scale = 0.18 + progress * 2.2;

    context.save();
    context.globalAlpha = opacity * 0.34;
    context.translate(burst.x, burst.y);
    context.scale(scale, scale);
    context.rotate(Math.sin(progress * Math.PI * 2) * 0.08);
    drawRetroLeaf(context, 0, 0, 34);
    context.restore();
  });
}

function drawRetroLeaf(context, x, y, size) {
  context.save();
  context.translate(x, y);
  context.strokeStyle = "#061f0c";
  context.lineWidth = Math.max(2, size * 0.08);
  context.fillStyle = "#42f05f";

  for (let index = 0; index < 7; index += 1) {
    const angle = (index - 3) * 0.32;
    const length = size * (index === 3 ? 1.45 : 1.08 - Math.abs(index - 3) * 0.06);
    context.save();
    context.rotate(angle);
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(-size * 0.16, -length * 0.35);
    context.lineTo(0, -length);
    context.lineTo(size * 0.16, -length * 0.35);
    context.closePath();
    context.fill();
    context.stroke();
    context.restore();
  }

  context.strokeStyle = "#083813";
  context.beginPath();
  context.moveTo(0, 0);
  context.lineTo(0, size * 0.85);
  context.stroke();
  context.restore();
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
    const duration = explosion.type === "golden" || explosion.type === "green" || explosion.type === "lava" ? 720 : MINI_GAME_DEATH_ANIMATION_MS;
    const progress = age / duration;
    const isGolden = explosion.type === "golden";
    const isGreen = explosion.type === "green";
    const isLava = explosion.type === "lava";

    context.save();
    context.fillStyle = isGolden
      ? `rgba(255, 213, 74, ${1 - progress})`
      : isGreen
        ? `rgba(66, 240, 95, ${1 - progress})`
        : isLava
          ? `rgba(255, 74, 24, ${1 - progress})`
          : `rgba(156, 255, 156, ${1 - progress})`;
    context.shadowColor = isGolden
      ? "rgba(255, 213, 74, 0.9)"
      : isGreen
        ? "rgba(66, 240, 95, 0.85)"
        : isLava
          ? "rgba(255, 74, 24, 0.88)"
          : "rgba(156, 255, 156, 0.7)";
    context.shadowBlur = isGolden || isGreen || isLava ? 24 : 12;

    if (isGolden || isGreen || isLava) {
      context.beginPath();
      context.arc(explosion.x, explosion.y, explosion.size * progress, 0, Math.PI * 2);
      context.strokeStyle = isGolden
        ? `rgba(255, 213, 74, ${1 - progress})`
        : isGreen
          ? `rgba(66, 240, 95, ${1 - progress})`
          : `rgba(255, 74, 24, ${1 - progress})`;
      context.lineWidth = 4;
      context.stroke();
    }

    explosion.pieces.forEach((piece) => {
      const spread = isGolden || isGreen || isLava ? 0.75 : 0.55;
      const x = explosion.x + piece.vx * progress * spread;
      const y = explosion.y + piece.vy * progress * spread;
      context.fillRect(x, y, Math.max(2, explosion.size / (isGolden || isGreen || isLava ? 18 : 5)), Math.max(2, explosion.size / (isGolden || isGreen || isLava ? 18 : 5)));
    });

    context.restore();
  });
}

// Types the friendly wizard terminal messages into the Loading scene.
async function playLoadingSequence() {
  const runId = loadingState.loadingRunId;
  const loadingScene = document.querySelector('[data-scene="Loading"]');
  const output = document.querySelector("#loading-output");

  if (!loadingScene || !output) {
    return;
  }

  output.textContent = "";

  for (const message of LOADING_MESSAGES) {
    await waitForLandscape();
    if (runId !== loadingState.loadingRunId) {
      return;
    }

    const line = createTerminalLine(message);
    const cursor = createCursor();

    output.append(line);
    line.append(cursor);

    for (const character of message.text) {
      await waitForLandscape();
      if (runId !== loadingState.loadingRunId) {
        stopTypingSound();
        return;
      }

      startTypingSound();
      cursor.before(character);
      await waitWhileLandscape(LOADING_TYPE_SPEED_MS);
      if (runId !== loadingState.loadingRunId) {
        stopTypingSound();
        return;
      }
    }

    stopTypingSound();
    cursor.remove();
    addAnimatedEllipsis(line, message.text);
    await waitWhileLandscape(message.pauseAfter ?? LOADING_LINE_PAUSE_MS);
    if (runId !== loadingState.loadingRunId) {
      return;
    }

    if (message.clearAfter) {
      output.textContent = "";
      await waitWhileLandscape(LOADING_LINE_PAUSE_MS);
      if (runId !== loadingState.loadingRunId) {
        return;
      }
    }
  }

  if (runId !== loadingState.loadingRunId) {
    return;
  }

  loadingScene.classList.add("is-complete");
  await playSignalStrengthSequence(output);
}

async function prepareLoadingScene() {
  const terminalPanel = document.querySelector(".terminal-panel");
  const openingDisclaimer = document.querySelector("#opening-disclaimer");
  const openingDisclaimerContinue = openingDisclaimer?.querySelector(".opening-disclaimer__continue");
  const orientationWarning = document.querySelector("#orientation-warning");
  const rotateMessage = document.querySelector("#rotate-phone-message");
  const transmissionMessage = document.querySelector("#transmission-message");
  const openingWizard = document.querySelector("#opening-wizard");
  const openingDialogue = document.querySelector("#opening-dialogue");
  const openingDialogueText = document.querySelector("#opening-dialogue-text");
  const wizardHologram = document.querySelector("#wizard-hologram");
  const wizardSpeech = document.querySelector("#wizard-speech");
  const chapterSelect = document.querySelector("#chapter-select");
  const miniGameIntro = document.querySelector("#mini-game-intro");
  const miniGameCanvas = document.querySelector("#mini-game-canvas");

  if (
    !terminalPanel ||
    !openingDisclaimer ||
    !openingDisclaimerContinue ||
    !orientationWarning ||
    !rotateMessage ||
    !transmissionMessage ||
    !openingWizard ||
    !openingDialogue ||
    !openingDialogueText ||
    !wizardHologram ||
    !wizardSpeech ||
    !chapterSelect ||
    !miniGameIntro ||
    !miniGameCanvas
  ) {
    return;
  }

  showElement(openingDisclaimer);
  openingDisclaimer.classList.remove("is-fading");
  openingDisclaimerContinue.disabled = true;
  openingDisclaimerContinue.classList.remove("is-ready");
  hideElement(terminalPanel);
  hideElement(orientationWarning);
  hideElement(rotateMessage);
  hideElement(transmissionMessage);
  hideElement(openingWizard);
  hideElement(openingDialogue);
  hideElement(wizardHologram);
  hideElement(wizardSpeech);
  hideElement(chapterSelect);
  hideElement(miniGameIntro);
  hideElement(miniGameCanvas);
  wizardHologram.classList.remove("is-visible");
  openingWizard.classList.remove("is-active");
  openingWizard.classList.remove("is-path-running");
  openingWizard.classList.remove("is-mountain-exploding");
  openingWizard.classList.remove("is-travel-hud-active");
  stopOpeningTapBubbleGame();
  stopOpeningMountainExplosionLoop();
  loadingState.travelHudStarted = false;
  loadingState.travelHudStartedAt = 0;
  loadingState.travelDialogueStarted = false;
  loadingState.travelDialogueRunId += 1;
  loadingState.pathChallengeActive = false;
  loadingState.pathChallengeFailed = false;
  loadingState.pathFailRestartCount = 0;
  loadingState.tapBubbleTutorialSeen = false;
  openingDialogue.classList.remove("is-visible");
  openingDialogueText.textContent = "";
  wizardSpeech.classList.remove("is-visible");
  chapterSelect.classList.remove("is-visible", "is-ready", "is-exiting");
  terminalPanel.classList.remove("is-visible");
  loadingState.disclaimerAccepted = false;
  loadingState.chapterMenuShown = false;
  loadingState.selectedChapterTarget = null;

  const runAfterDisclaimer = () => {
    updateLoadingOrientation();
    startWhenLandscape();
  };

  const showOrientationWarning = async () => {
    showElement(orientationWarning);
    orientationWarning.classList.remove("is-fading");

    await new Promise((resolve) => {
      let finished = false;

      const continueFromWarning = (event) => {
        event?.preventDefault?.();

        if (finished) {
          return;
        }

        finished = true;
        orientationWarning.removeEventListener("pointerdown", continueFromWarning);
        orientationWarning.removeEventListener("touchstart", continueFromWarning);
        resolve();
      };

      orientationWarning.addEventListener("pointerdown", continueFromWarning);
      orientationWarning.addEventListener("touchstart", continueFromWarning, { passive: false });
    });

    orientationWarning.classList.add("is-fading");
    await wait(420);
    hideElement(orientationWarning);
    orientationWarning.classList.remove("is-fading");
    runAfterDisclaimer();
  };

  window.setTimeout(() => {
    if (loadingState.disclaimerAccepted) {
      return;
    }
    openingDisclaimerContinue.disabled = false;
    openingDisclaimerContinue.classList.add("is-ready");
  }, 2000);

  const acceptOpeningDisclaimer = async (event) => {
    event?.preventDefault?.();
    if (openingDisclaimer.dataset.accepting === "true") {
      return;
    }
    if (openingDisclaimerContinue.disabled || loadingState.disclaimerAccepted) {
      return;
    }
    openingDisclaimer.dataset.accepting = "true";
    unlockAllGameAudio().catch(() => {});
    playSoundEffect("menuStart", { minGap: 120, volume: 0.72 });
    loadingState.disclaimerAccepted = true;
    openingDisclaimer.classList.add("is-fading");
    await wait(420);
    hideElement(openingDisclaimer);
    await showOrientationWarning();
    openingDisclaimer.dataset.accepting = "false";
  };

  openingDisclaimer.onclick = acceptOpeningDisclaimer;
  openingDisclaimerContinue.onclick = acceptOpeningDisclaimer;

  const updateLoadingOrientation = () => {
    if (!loadingState.disclaimerAccepted) {
      hideElement(rotateMessage);
      return;
    }

    loadingState.isLandscape = getOrientation() === ORIENTATION.LANDSCAPE;

    if (!loadingState.isLandscape) {
      stopTypingSound();
      setLoadingOrientationRecoveryMode();
      markFinalFpsOrientationFailure();
      showElement(rotateMessage);
      hideLoadingSurfaces({ preserveFinalFps: Boolean(finalFpsState.isRunning) });
      return;
    }

    hideElement(rotateMessage);

    if (finalFpsState.orientationWasPaused) {
      void recoverFinalFpsOrientation();
      return;
    }

    if (loadingState.orientationRecoveryMode) {
      recoverLoadingOrientation();
      window.dispatchEvent(new Event("lostrelic:landscape"));
      return;
    }

    if (loadingState.activeSurface) {
      showActiveSurface();
    }

    if (loadingState.activeSurface === "terminal") {
      terminalPanel.classList.add("is-visible");
    }

    window.dispatchEvent(new Event("lostrelic:landscape"));
  };

  const startWhenLandscape = async () => {
    if (loadingState.sequenceStarted || !loadingState.disclaimerAccepted || !loadingState.isLandscape) {
      return;
    }

    loadingState.sequenceStarted = true;

    if (TEST_START_AT_PHONE_CHALLENGE) {
      startPhoneChallengePromptTest();
      return;
    }

    if (TEST_START_AT_FINAL_CHALLENGE) {
      loadingState.activeSurface = null;
      hideLoadingSurfaces();
      if (TEST_FINAL_FPS_START_NEAR_FOREST) {
        startFinalFpsChallenge({
          startWithGunAndPortal: TEST_FINAL_FPS_START_WITH_GUN_AND_PORTAL,
          startNearForest: true,
        });
        return;
      }
      await showFinalChallengePrompt({ skipFade: true });
      return;
    }

    if (TEST_START_AT_SPEED_BOOST) {
      startOpeningSpeedBoostTest();
      return;
    }

    if (TEST_START_AT_SKIP_LEVEL_FAIL) {
      startMiniGameAtLockedSkipFail();
      return;
    }

    if (TEST_START_AT_TRANSMISSION) {
      loadingState.activeSurface = "transmission";
      hideLoadingSurfaces();
      showActiveSurface();
      await playTransmissionBlinkSequence();
      return;
    }

    if (TEST_START_AT_MINI_GAME_INTRO) {
      await playMiniGameIntroSequence();
      return;
    }

    await playChapterSelectSequence();
  };

  const handleOrientationChange = () => {
    updateLoadingOrientation();
    resizeMiniGameCanvas();
    startWhenLandscape();
  };

  window.addEventListener("resize", handleOrientationChange);
  window.addEventListener("orientationchange", handleOrientationChange);
  updateLoadingOrientation();
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
  const retryMobileAudioUnlock = () => {
    unlockAllGameAudio().catch(() => {});
  };

  // Capture every phase of the first physical tap. iOS can grant audio
  // activation on a different phase depending on Safari/WebView version.
  document.addEventListener("pointerdown", retryMobileAudioUnlock, { capture: true, passive: true });
  document.addEventListener("touchstart", retryMobileAudioUnlock, { capture: true, passive: true });
  document.addEventListener("touchend", retryMobileAudioUnlock, { capture: true, passive: true });
  document.addEventListener("click", retryMobileAudioUnlock, { capture: true, passive: true });

  window.TheLostRelic = {
    audio: audioState,
    loadingMessages: LOADING_MESSAGES,
    sceneManager,
    getOrientation,
    scenes: SCENE_NAMES,
  };
}

document.addEventListener("DOMContentLoaded", bootstrap);

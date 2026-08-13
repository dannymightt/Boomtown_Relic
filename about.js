const MUSIC_TRACKS = [
  { title: "Me and You", clips: [{ src: "assets/me-and-you-snippet.wav", available: true }] },
  { title: "Lonely", clips: [{ src: "assets/lonely-snippet.m4a", available: true }] },
  {
    title: "Strawberry Seeds (Instrumental)",
    note: "I haven’t finished the vocals yet.",
    clips: [{ src: "assets/strawberry-seeds-snippet.m4a", available: true }],
  },
  { title: "Movie Scene", clips: [{ src: "assets/movie-scene-snippet.m4a", available: true }] },
  {
    title: "Crystal Clear",
    clips: [
      { label: "Demo 1", src: "assets/crystal-clear-demo-1.m4a", available: true },
      { label: "Demo 2", src: "assets/crystal-clear-demo-2.m4a", available: true },
    ],
  },
  { title: "Orbiting", clips: [{ src: "assets/orbiting-snippet.m4a", available: true }] },
  { title: "The 19th", clips: [{ src: "assets/the-19th-snippet.m4a", available: true }] },
  {
    title: "If I Could Turn Back",
    clips: [{ src: "assets/if-i-could-turn-back-snippet.m4a", available: true }],
  },
  { title: "A Thousand Roses", clips: [{ src: "assets/a-thousand-roses-snippet.m4a", available: true }] },
];

const trackList = document.querySelector("#music-track-list");
let activePlayer = null;

function formatTime(value) {
  if (!Number.isFinite(value) || value < 0) {
    return "0:00";
  }

  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60);
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function pauseActivePlayer(exceptPlayer = null) {
  if (!activePlayer || activePlayer === exceptPlayer) {
    return;
  }

  activePlayer.audio.pause();
}

function createPlayer(track, clip, clipIndex) {
  const player = document.createElement("div");
  player.className = "track-player";

  const playButton = document.createElement("button");
  playButton.type = "button";
  playButton.className = "track-player__play";
  playButton.setAttribute("aria-label", `Play ${track.title}${clip.label ? ` ${clip.label}` : ""}`);

  const body = document.createElement("div");
  body.className = "track-player__body";

  const labelRow = document.createElement("div");
  labelRow.className = "track-player__label";

  const clipLabel = document.createElement("span");
  clipLabel.textContent = clip.label || "Snippet";

  const status = document.createElement("span");
  status.className = "track-player__status";
  status.textContent = clip.available ? "Loading audio..." : "Snippet file pending";
  labelRow.append(clipLabel, status);

  const timelineWrap = document.createElement("div");
  timelineWrap.className = "track-player__timeline-wrap";

  const timeline = document.createElement("input");
  timeline.className = "track-player__timeline";
  timeline.type = "range";
  timeline.min = "0";
  timeline.max = "1000";
  timeline.value = "0";
  timeline.step = "1";
  timeline.setAttribute("aria-label", `Seek through ${track.title}${clip.label ? ` ${clip.label}` : ""}`);
  timeline.style.setProperty("--progress", "0%");
  timelineWrap.append(timeline);

  const timeRow = document.createElement("div");
  timeRow.className = "track-player__time";
  const elapsed = document.createElement("span");
  const duration = document.createElement("span");
  elapsed.textContent = "0:00";
  duration.textContent = "0:00";
  timeRow.append(elapsed, duration);

  body.append(labelRow, timelineWrap, timeRow);
  player.append(playButton, body);

  if (!clip.available || !clip.src) {
    playButton.disabled = true;
    timeline.disabled = true;
    return player;
  }

  const audio = new Audio();
  audio.preload = "metadata";
  audio.src = clip.src;
  const playerState = { audio, playButton, player, track, clipIndex };

  const updateTimeline = () => {
    const ratio = audio.duration > 0 ? audio.currentTime / audio.duration : 0;
    timeline.value = String(Math.round(ratio * 1000));
    timeline.style.setProperty("--progress", `${Math.max(0, Math.min(100, ratio * 100))}%`);
    elapsed.textContent = formatTime(audio.currentTime);
  };

  audio.addEventListener("loadedmetadata", () => {
    duration.textContent = formatTime(audio.duration);
    status.textContent = "Ready to play";
    status.classList.add("is-ready");
  });

  audio.addEventListener("timeupdate", updateTimeline);

  audio.addEventListener("play", () => {
    pauseActivePlayer(playerState);
    activePlayer = playerState;
    player.closest(".music-track")?.classList.add("is-playing");
    playButton.setAttribute("aria-label", `Pause ${track.title}${clip.label ? ` ${clip.label}` : ""}`);
    status.textContent = "Playing";
  });

  audio.addEventListener("pause", () => {
    player.closest(".music-track")?.classList.remove("is-playing");
    playButton.setAttribute("aria-label", `Play ${track.title}${clip.label ? ` ${clip.label}` : ""}`);
    status.textContent = audio.ended ? "Finished" : "Ready to play";
  });

  audio.addEventListener("ended", () => {
    audio.currentTime = 0;
    updateTimeline();
  });

  audio.addEventListener("error", () => {
    playButton.disabled = true;
    timeline.disabled = true;
    status.textContent = "Audio unavailable";
    status.classList.remove("is-ready");
  });

  playButton.addEventListener("click", async () => {
    if (!audio.paused) {
      audio.pause();
      return;
    }

    try {
      await audio.play();
    } catch (error) {
      status.textContent = "Tap again to play";
    }
  });

  timeline.addEventListener("input", () => {
    if (!Number.isFinite(audio.duration) || audio.duration <= 0) {
      return;
    }

    audio.currentTime = (Number(timeline.value) / 1000) * audio.duration;
    updateTimeline();
  });

  return player;
}

function createTrackCard(track, index) {
  const card = document.createElement("article");
  card.className = "music-track";
  if (track.variant) {
    card.classList.add(`music-track--${track.variant}`);
  }

  const number = document.createElement("span");
  number.className = "music-track__number";
  number.textContent = String(index + 1).padStart(2, "0");

  const title = document.createElement("h3");
  title.textContent = track.title;
  card.append(number, title);

  if (track.note) {
    const note = document.createElement("p");
    note.className = "music-track__note";
    note.textContent = track.note;
    card.append(note);
  }

  track.clips.forEach((clip, clipIndex) => {
    card.append(createPlayer(track, clip, clipIndex));
  });

  return card;
}

if (trackList) {
  MUSIC_TRACKS.forEach((track, index) => {
    trackList.append(createTrackCard(track, index));
  });
}

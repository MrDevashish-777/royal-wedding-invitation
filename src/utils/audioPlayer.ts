/**
 * Audio Player for South Indian Wedding Background Music.
 * Uses HTML5 Audio with an automatic Web Audio API Carnatic Tanpura & Flute Drone synthesizer
 * fallback if an external audio file fails or isn't supplied.
 */

class WeddingAudioManager {
  private audio: HTMLAudioElement | null = null;
  private audioCtx: AudioContext | null = null;
  private isSynthesizing = false;
  private isPlayingState = false;
  private synthGainNode: GainNode | null = null;
  private intervalId: number | null = null;
  private listeners: Array<(playing: boolean) => void> = [];

  constructor() {
    if (typeof window !== 'undefined') {
      // Create HTML audio element with royal shehnai / nadaswaram royalty free sound
      this.audio = new Audio('https://cdn.pixabay.com/download/audio/2022/05/16/audio_c1e63a8a3f.mp3?filename=indian-flute-meditation-111867.mp3');
      this.audio.loop = true;
      this.audio.volume = 0.45;

      this.audio.addEventListener('play', () => {
        this.isPlayingState = true;
        this.notifyListeners();
      });

      this.audio.addEventListener('pause', () => {
        if (!this.isSynthesizing) {
          this.isPlayingState = false;
          this.notifyListeners();
        }
      });

      this.audio.addEventListener('error', () => {
        console.warn('Audio file failed to load, switching seamlessly to Web Audio Carnatic synthesizer.');
        if (this.isPlayingState) {
          this.startCarnaticSynth();
        }
      });
    }
  }

  public subscribe(cb: (playing: boolean) => void): () => void {
    this.listeners.push(cb);
    cb(this.isPlayingState);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== cb);
    };
  }

  private notifyListeners() {
    this.listeners.forEach((cb) => cb(this.isPlayingState));
  }

  public async play(): Promise<boolean> {
    this.isPlayingState = true;

    // Try HTML Audio first
    if (this.audio) {
      try {
        await this.audio.play();
        this.notifyListeners();
        return true;
      } catch (err) {
        console.log('HTML5 audio play blocked or error, activating Carnatic Synth fallback:', err);
      }
    }

    // Fallback: Web Audio API Carnatic Tanpura / Flute Harmonics
    this.startCarnaticSynth();
    return true;
  }

  public pause() {
    this.isPlayingState = false;
    if (this.audio && !this.audio.paused) {
      this.audio.pause();
    }
    this.stopCarnaticSynth();
    this.notifyListeners();
  }

  public toggle(): boolean {
    if (this.isPlayingState) {
      this.pause();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  public isPlaying(): boolean {
    return this.isPlayingState;
  }

  /**
   * Generates a warm, authentic South Indian temple ambience
   * with Tanpura Sa-Pa drone and flute tones in Raga Mohanam / Hamsadhwani.
   */
  private startCarnaticSynth() {
    if (this.isSynthesizing) return;
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;

      this.audioCtx = new AudioContextClass();
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }

      this.synthGainNode = this.audioCtx.createGain();
      this.synthGainNode.gain.setValueAtTime(0.01, this.audioCtx.currentTime);
      this.synthGainNode.gain.linearRampToValueAtTime(0.25, this.audioCtx.currentTime + 1.5);
      this.synthGainNode.connect(this.audioCtx.destination);

      // Tanpura frequencies based on C# (138.59 Hz)
      // Pa (G#3: 207.65 Hz), Sa (C#4: 277.18 Hz), Sa (C#4: 277.18 Hz), Kharaj Sa (C#3: 138.59 Hz)
      const baseFreqs = [138.59, 207.65, 277.18, 554.37];
      baseFreqs.forEach((freq, idx) => {
        if (!this.audioCtx || !this.synthGainNode) return;
        const osc = this.audioCtx.createOscillator();
        const oscGain = this.audioCtx.createGain();

        osc.type = idx === 0 ? 'sawtooth' : 'triangle';
        osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

        // Gentle chorus vibrato
        const lfo = this.audioCtx.createOscillator();
        const lfoGain = this.audioCtx.createGain();
        lfo.frequency.value = 0.2 + idx * 0.1;
        lfoGain.gain.value = 1.2;
        lfo.connect(osc.frequency);
        lfo.start();

        oscGain.gain.setValueAtTime(0.08 / (idx + 1), this.audioCtx.currentTime);
        osc.connect(oscGain);
        oscGain.connect(this.synthGainNode);
        osc.start();
      });

      // Gentle Mohanam scale flute notes every few seconds (Sa, Ri, Ga, Pa, Dha)
      const mohanamNotes = [277.18, 311.13, 349.23, 415.30, 466.16, 554.37];
      let noteIdx = 0;
      this.intervalId = window.setInterval(() => {
        if (!this.audioCtx || !this.synthGainNode || !this.isSynthesizing) return;
        const fluteOsc = this.audioCtx.createOscillator();
        const fluteGain = this.audioCtx.createGain();

        fluteOsc.type = 'sine';
        const targetFreq = mohanamNotes[noteIdx % mohanamNotes.length];
        noteIdx = (noteIdx + 1 + Math.floor(Math.random() * 2)) % mohanamNotes.length;

        fluteOsc.frequency.setValueAtTime(targetFreq, this.audioCtx.currentTime);
        fluteGain.gain.setValueAtTime(0.001, this.audioCtx.currentTime);
        fluteGain.gain.linearRampToValueAtTime(0.06, this.audioCtx.currentTime + 0.8);
        fluteGain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + 3.2);

        fluteOsc.connect(fluteGain);
        fluteGain.connect(this.synthGainNode);

        fluteOsc.start();
        fluteOsc.stop(this.audioCtx.currentTime + 3.3);
      }, 3500);

      this.isSynthesizing = true;
      this.notifyListeners();
    } catch (e) {
      console.warn('Web Audio synthesis error:', e);
    }
  }

  private stopCarnaticSynth() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    if (this.synthGainNode && this.audioCtx) {
      try {
        this.synthGainNode.gain.linearRampToValueAtTime(0.0001, this.audioCtx.currentTime + 0.5);
        setTimeout(() => {
          if (this.audioCtx) {
            this.audioCtx.close();
            this.audioCtx = null;
          }
          this.isSynthesizing = false;
        }, 550);
      } catch {
        this.isSynthesizing = false;
      }
    } else {
      this.isSynthesizing = false;
    }
  }
}

export const audioManager = new WeddingAudioManager();

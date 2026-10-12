/**
 * Audio Player for South Indian Wedding Background Music.
 * Uses the authentic soft instrumental wedding music from assets,
 * with a soft, gentle ambient fallback.
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
      // Local bundled authentic soft instrumental wedding music (Mangalyam Tantunanena - Alaipayuthey)
      this.audio = new Audio('/assets/audio/mangalyam.mp3');
      this.audio.loop = true;
      this.audio.volume = 0.35; // Soft and comfortable volume

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
        console.log('Audio file fallback to gentle ambient drone.');
        if (this.isPlayingState) {
          this.startSoftAmbientSynth();
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

    if (this.audio) {
      try {
        await this.audio.play();
        this.notifyListeners();
        return true;
      } catch (err) {
        console.log('Autoplay deferred or audio element play error:', err);
      }
    }

    this.startSoftAmbientSynth();
    return true;
  }

  public pause() {
    this.isPlayingState = false;
    if (this.audio && !this.audio.paused) {
      this.audio.pause();
    }
    this.stopSoftAmbientSynth();
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
   * Ultra-soft ambient sine wave tanpura drone (C# Sa-Pa-Sa) at low gentle volume
   */
  private startSoftAmbientSynth() {
    if (this.isSynthesizing) return;
    try {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;

      this.audioCtx = new AudioContextClass();
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }

      this.synthGainNode = this.audioCtx.createGain();
      this.synthGainNode.gain.setValueAtTime(0.001, this.audioCtx.currentTime);
      this.synthGainNode.gain.linearRampToValueAtTime(0.08, this.audioCtx.currentTime + 2.0); // very soft
      this.synthGainNode.connect(this.audioCtx.destination);

      // Warm pure sine waves for soothing temple drone
      const frequencies = [138.59, 207.65, 277.18]; // C#3, G#3, C#4
      frequencies.forEach((freq, idx) => {
        if (!this.audioCtx || !this.synthGainNode) return;
        const osc = this.audioCtx.createOscillator();
        const oscGain = this.audioCtx.createGain();

        osc.type = 'sine'; // pure and soft, never harsh
        osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

        oscGain.gain.setValueAtTime(0.04 / (idx + 1), this.audioCtx.currentTime);
        osc.connect(oscGain);
        oscGain.connect(this.synthGainNode);
        osc.start();
      });

      this.isSynthesizing = true;
      this.notifyListeners();
    } catch (e) {
      console.warn('Soft ambient synth error:', e);
    }
  }

  private stopSoftAmbientSynth() {
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

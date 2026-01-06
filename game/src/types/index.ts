export interface CharacterState {
  name: string;
  expression: string;
  position: 'left' | 'center' | 'right';
  scale: number;
  opacity: number;
}

export interface Message {
  characterName: string;
  text: string;
  speed: 'slow' | 'normal' | 'fast';
}

export interface Choice {
  id: string;
  label: string;
  nextSceneId: string;
}

export interface ChoiceNode {
  choiceId: string;
  choices: Choice[];
}

export interface Scene {
  id: string;
  title?: string;
  background?: string;
  characters: CharacterState[];
  messages: Message[];
  choices?: ChoiceNode | null;
  nextSceneId?: string | null;
}

export interface CharacterSprite {
  displayName: string;
  expressions: Record<string, string>;
}

export interface SceneData {
  metadata?: {
    version: string;
    phase: string;
    description: string;
  };
  characters: Record<string, CharacterSprite>;
  scenes: Record<string, Scene>;
}

export interface GameState {
  currentSceneId: string;
  currentMessageIndex: number;
  messageBacklog: Message[];
  sceneHistory: string[];
}

export interface UIState {
  isMessageBoxVisible: boolean;
  isChoicePanelVisible: boolean;
  isBacklogVisible: boolean;
  isControlBarVisible: boolean;
  textSpeed: 'slow' | 'normal' | 'fast';
  fontSize: number;
}

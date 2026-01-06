import { SceneData } from '@/types'

const SCENE_DATA_URL = '/data/scenes_phase1.json'

let cachedSceneData: SceneData | null = null

export async function loadSceneData(): Promise<SceneData> {
  if (cachedSceneData) {
    return cachedSceneData
  }

  try {
    const response = await fetch(SCENE_DATA_URL)
    if (!response.ok) {
      throw new Error(`Failed to load scene data: ${response.status}`)
    }
    const data = await response.json()
    cachedSceneData = data
    return data
  } catch (error) {
    console.error('Error loading scene data:', error)
    // フォールバック: ダミーデータ
    const fallbackData: SceneData = {
      metadata: {
        version: '1.0',
        phase: 'Phase 1',
        description: 'Fallback scene data',
      },
      characters: {},
      scenes: {
        scene_001: {
          id: 'scene_001',
          title: 'Error',
          background: '',
          characters: [],
          messages: [
            {
              characterName: 'narrator',
              text: 'シーンデータの読み込みに失敗しました。',
              speed: 'normal',
            },
          ],
          choices: null,
          nextSceneId: null,
        },
      },
    }
    cachedSceneData = fallbackData
    return fallbackData
  }
}

export async function getScene(sceneId: string): Promise<SceneData['scenes'][string] | null> {
  const sceneData = await loadSceneData()
  return sceneData.scenes[sceneId] || null
}

export async function getCharacter(characterId: string) {
  const sceneData = await loadSceneData()
  return sceneData.characters[characterId] || null
}

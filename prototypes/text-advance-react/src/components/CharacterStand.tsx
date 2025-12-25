import React from 'react'

export type CharacterName = 'Ai' | 'Mai' | 'Mina' | 'Takeshi' | 'Yuzu'

type Props = {
  name: CharacterName
  file?: string // default: `${name}1.png`
  width?: number // px
}

export default function CharacterStand({ name, file, width = 180 }: Props) {
  const img = `/characters/${name}/${file ?? `${name}1.png`}`
  return (
    <figure className="stand">
      <img src={img} alt={`${name} stand`} style={{ width }} />
      <figcaption>{name}</figcaption>
    </figure>
  )
}

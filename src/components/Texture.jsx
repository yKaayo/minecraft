import { TextureLoader } from 'three'

// Images
import dirtImg from '../assets/images/dirt.webp'
import bricksImg from '../assets/images/bricks.webp'
import cobblestoneImg from '../assets/images/Cobblestone.webp'
import mossImg from '../assets/images/moss.webp'

export const dirtTexture = new TextureLoader().load(dirtImg)
export const mossTexture = new TextureLoader().load(mossImg)
export const bricksTexture = new TextureLoader().load(bricksImg)
export const cobblestoneTexture = new TextureLoader().load(cobblestoneImg)

import uniqid from "uniqid";
import { create } from "zustand";

export const useStore = create((set) => ({
  texture: "dirt",
  blocks: [
    {
      key: uniqid(),
      pos: [0, 0.5, 0],
      texture: "dirt",
    },
  ],
  addBlock: (x, y, z) => {
    set((prev) => ({
      blocks: [
        ...prev.blocks,
        { key: uniqid(), pos: [x, y, z], texture: prev.texture },
      ],
    }));
  },
  removeBlock: () => {},
  setTexture: () => {},
  saveWorld: () => {},
  resetWorld: () => {},
}));

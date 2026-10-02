// Elements above the viewport count as "in view", so content skipped by a jump
// (End key, anchor link, restored scroll position) is never left invisible.
export const REVEAL_VIEWPORT = { once: true, margin: "100000px 0px -80px 0px" } as const

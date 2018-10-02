const leftPad = n => `0${n}`.substr(-2)

export const formatTime = secs => `${leftPad(~~(secs / 60))}:${leftPad(~~(secs % 60))}`

import Typography from "typography"

const fontFamily = [
    'Space Mono',
    'SFMono-Regular',
    'Menlo',
    'Monaco',
    'Consolas',
    'Liberation Mono',
    'Courier New',
    'monospace',
]

const typography = new Typography({
    baseFontSize: "16px",
    headerFontFamily: fontFamily,
    bodyFontFamily: fontFamily,
})

export default typography
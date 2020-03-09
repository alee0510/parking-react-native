export const depth = (elevation) => {
    return {
        elevation,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0.5 * elevation },
        shadowOpacity: 0.3,
        shadowRadius: 0.8 * elevation
    }
}

export const center = {
    justifyContent : 'center',
    alignItems : 'center'
}
export const FecthDataWithErrorHandle = async (dispatch, callback, error) => {
    try {
        await callback()
    } catch (err) {
        await error()
        console.log(err.responese ? err.responese.data : err)
    }
}
export const beforeSave = async (request) => {
    const { object } = request
    if (!object.get('reviewableStatus')) {
        object.set('reviewableStatus', object.reviewableDefaultStatus())
    }

    const dirtyKeys = object.dirtyKeys()
    if (!dirtyKeys || !dirtyKeys.length) {
        return
    }

    object.reviewableUpdatePublication()
}
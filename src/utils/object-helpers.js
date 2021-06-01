export const updateObjectInArray = (item, itemId, objPropName, newObjProps) => {
    return item.map(user => {
        if (user[objPropName] === itemId) {
            return {...user, ...newObjProps}
        }
        return user
    })
}


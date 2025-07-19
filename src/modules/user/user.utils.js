export const stripUserData = (userDocument) => {
    const {
        _id,
        email,
        role,
        status,
        createdAt,
        updatedAt
    } = userDocument;
    
    return {
        id: _id.toString(),
        email,
        role,
        status,
        createdAt,
        updatedAt,
    };
}
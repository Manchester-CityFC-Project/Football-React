
export const  firebaseLooper = (snapData) => {
    const data = [];
snapData &&  snapData.forEach((childSnap) => {
         data.push({
             ...childSnap.val(),
             id:childSnap.key
         })
    })

    return data

}
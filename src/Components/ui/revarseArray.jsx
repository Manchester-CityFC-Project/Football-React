export const RevarseArray = (actualArray) => {
    let revarsedData=[];
    console.log(actualArray)

    for (let i=actualArray.length-1; i>=0; i--)
    {
        revarsedData.push(actualArray[i])
    }

    return revarsedData;
}
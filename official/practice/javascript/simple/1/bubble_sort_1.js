let array = [3,2,4,1,6,9,10,8,7];

for(let index = 0; index < array.length; index++)
{
    for(let i = 0; i < array.length; i++)
    {
        if(array[i] > array[i + 1])
        {
            let temp = array[i];
            array[i] = array[i+1];
            array[i+1] = temp;
        }
    }
}

console.log(array)

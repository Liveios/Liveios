
const max = function(value)
{

    let maximum = arguments[0]
    
    for(let i = 0; i < arguments.length; i++)
    {
        if(maximum < arguments[i])
        {
          maximum = arguments[i]  
        }
    }
    console.log("Biggest Value is  : ",maximum)
    return maximum;
    
};



/* this function return biggest value that you pass as parameters in function */

/* ========= Explanation ===============

max(12,10,15,13); passed parameters to function (arguments) and then function runs

let maximum = arguments[0] // 12

for(let i = 0; i < arguments.length; i++) // loop runs 
{
if(maximum < arguments[i] // checks if argument element is bigger than maximum's value if yes then bigger value assigns to maximum
{
maximum = arguments[i]
}


}

================ see each iteration of for loop ===========
max(12,10,15,13) so loop runs 4 times

first iteration

for(let i = 0; i < arguments.length; i++) // first loop
{
  if(maximum < arguments[i] (0) // 12 is bigger than arguments[0] = 12 .. no so it does not run if's block code
  {
    maximum = arguments[i]
  }
}


for(let i = 0; i < arguments.length; i++) // second loop
{
  if(maximum < arguments[i](1) // 12 is bigger than arguments[1] = 10 .. no so it does not run if's block code 
  {
    maximum = arguments[i]
  }
}

for(let i = 0; i < arguments.length; i++) // third loop
{
  if(maximum < arguments[i] (2) // 15 is bigger than arguments[2] = 12 .. so code of if block runs and it assigns value of 15 to maximum
  {
    maximum = arguments[i]
  }
}

for(let i = 0; i < arguments.length; i++) // first loop
{
  if(maximum < arguments[i](3) // 13 is bigger than arguments[2] = 15 .. no so if codeblock does not run and the loop ends
  {
    maximum = arguments[i]
  }
}





*/

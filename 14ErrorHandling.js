{
    var a = prompt('enter num1');
    var b = prompt('enter num2');

    console.log(a+b);

    let sum = parseInt(a) + parseInt(b);
    console.log('Sum is ', sum);
}

//Try error

{
    let a = prompt('Enter num1 err');
    let b = prompt('Enter num2 err');

    if(isNaN(a) || isNaN(b)){                               //New Error Generation
        throw SyntaxError('Syntax error self message');
    }

    let sum = parseInt(a) + parseInt(b);
    console.log('The sum is ', sum);

    try{
        console.log('Sum is 2 err', sum*x);
    } catch(error){
        console.log('error in try catch');
    } finally{                      //Gold for making functions
                                    //after "return" statement in func code stops but finally surpasses it
        console.log('File are being closed DB connection being closed');
    }
}

//Try error works syncoronous if setTimeout in try catch will die out due to async

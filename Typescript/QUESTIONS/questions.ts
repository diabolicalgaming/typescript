function convert(num: number): number {
    return num*60;
}

function remainder(x: number, y:number): number{
    return x % y;
}

function makesTen(a:number, b: number): boolean {
    return a+b === 10 || (a === 10 || b === 10) ? true: false; 
}

function makesTen2(a:number, b: number): boolean {
    return a+b === 10 || (a === 10 || b === 10) ? true: false; 
}

function countTrue(lst: boolean[]): number {
    let count = 0;
    for(var i = 0; i < lst.length; i++) {
        if(lst[i] === true)
        {
            count++;
        }
    }
    return count;
}

function num_of_digits(num: number): number {
    
    num = Math.abs(num)
    let strNum = num.toString();
    let splitter = strNum.split("");

    let count = 0;
    for(var digit of splitter)
    {
        count++;
    }
    return count;
}

function generation(num: number, char: string): string{
    var map: {[key: number]: string[];} = {};

    map[-3] = ["great grandfather", "great grandmother"]
    map[-2] = ["grandfather", "grandmother"]
    map[-1] = ["father", "mother"]
    map[0] = ["me!", "me!"]
    map[1] = ["son", "daughter"]
    map[2] = ["grandson", "granddaughter"]
    map[3] = ["great grandson", "great granddaughter"]

    if(char === "m")
    {
        return map[num][0];
    }
    return map[num][1];
}

function addName(obj: {[key: string]: number;}, name: string, value: number): {[key: string]: number;}{
    obj[name] = value;
    return obj
}

function concat(...args: any[]): number[]{
    let list: number[] = []

    for(var lst of args) {
        for(var i of lst){
            list.push(i);
        }
    }
    return list
}

function arrayOfMultiples (num: number, length: number): number[]{
    let list: number[] = [];

    for(var i = 1; i <= num*length; i++)
    {
        if(i % num === 0)
        {
            list.push(i);
        }
    }

    return list
}

function testJackpot(result: string[]) {
    let bool: boolean = false;
    for(var i = 0; i < result.length; i++){
        let first = result[0]
        if(first === result[i])
        {
            bool = true
        }
        result.shift()
        first = result[0]
    }
    return bool
}

/*let l = [1,2,3,4];
l.shift();
console.log(l);
l.shift();
console.log(l);
l.shift();
console.log(l);*/

//console.log(testJackpot(["@", "@", "@", "@"]))
//console.log(testJackpot(["abc", "abc", "abc", "abc"]))
//console.log(testJackpot(["SS", "SS", "SS", "SS"]))
//console.log(testJackpot(["&&", "&", "&&&", "&&&&"]))
//console.log(testJackpot(["SS", "SS", "SS", "Ss"]))

function keysAndValues(obj: any){
    let keys: any[] = [];
    let values: any[] = [];

    for()
}
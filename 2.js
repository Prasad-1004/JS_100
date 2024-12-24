// You are requested to implement a function that generates a hash tag from a given input string
// Eaxample => "my name is jit" ===>    #MyNameIsJit


const Hashtag = (str) => {
    str = str.split(" ");
    str = str.map((curElem)=> {
        return curElem.replace(curElem[0], curElem[0].toUpperCase());
    });
    str = "#" + str.join("")
    console.log(str);
}



console.log(Hashtag("my name is jit"));
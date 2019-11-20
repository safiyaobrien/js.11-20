function firstLast6(arr) {
    var nums = "";
    if(arr[0] == 6 || arr[arr.length-1] == 6){
        var nums = true;
    }else{
        var nums = false;
    }
    return nums;
}

function has23(arr){
    for(var i = 0; i<2; i++){
        if(arr[i] == 2 || arr[i] == 3){
            return true;
        }
    }
    return false;
}

function fix23(arr){
    for(var i=0; i<arr.length-1; i++){
        if(arr[i] == 2 && arr[i+1] == 3){
            arr[i+1] = 0;
        }
    }
    return arr;
}

function countYZ(str){
    var count = 0;
    str = str.toLowerCase();
    for(var i =0; i<str.length-1; i++){
        if(str[i] == " ") {
            if(str[i-1] == "y" || str[i-1] == "z"){
                count = count + 1;
            }
        }
    }
    if(str[str.length - 1] == "y" || str[str.length - 1] == "z"){
        count = count + 1;
    }
    return count;
}

function endOther(string1,string2) {
    var abc = string1.toLowerCase();
    var hey = string2.toLowerCase();
    var resulta = abc.endsWith(hey);
    var resulth = hey.endsWith(abc);

    return resulta || resulth ;

}

function starOut(str){
    var newStr = '';

    for(var i= 0; i< str.length; i++){
        if(str[i] !== "*" && str[i + 1] !== "*" && str[i - 1] !== "*"){
            newStr += str[i];
        }
    }
    return newStr;
}

function getSandwich(str) {
    var sand = '';
    var bread1 = str.indexOf("bread")
    var bread2 = str.lastIndexOf("bread")
    if(bread1 != bread2){
        sand += str.substring(bread1 + 5, bread2);
    }
    return sand;
}

function canBalance(arr){
    var outerSum = 0;
    var innerSum = 0;
    for(var i = 0; i< arr.length; i++) {

        outerSum += arr[i];

        for (var j = i+1; j < arr.length; j++) {
            innerSum += arr[j];
        }
        if(outerSum == innerSum) {
            return true;
        }
        innerSum = 0;
    }

    return false;
}

function countClumps(arr){
    var count = 0;

    for(var i = 0; i<arr.length; i++ ){
        if(arr[i-1]== arr[i] && arr[i]!= arr[i+1]){
        count += 1
        }
}
return count;
}

function evenlySpaced(int1, int2, int3){
    if(Math.abs(int2 - int1) == Math.abs(int3 - int2)){
        return true;
    }
    if(int1 - int3 == int2-int1) {
        return true;
    }
    if(int3-int2 == int1-int3){


        return true;
    }else{
        return false;
    }

}














function tester() {
    document.getElementById("output").innerHTML += firstLast6([6,1,2,5]);
    document.getElementById("output").innerHTML += has23([2,4]);
    document.getElementById("output").innerHTML += fix23([1,2,3]);
    document.getElementById("output").innerHTML += countYZ('aba y ax');
    document.getElementById("output").innerHTML += endOther(5,7);
    document.getElementById("output").innerHTML += starOut(string*sd);
    document.getElementById("output").innerHTML += getSandwich(breadyumbread);
    document.getElementById("output").innerHTML += canBalance([1,2,3,4]);
    document.getElementById("output").innerHTML += countClumps([1,2,2,3,4]);
    document.getElementById("output").innerHTML += evenlySpaced(3,4,5);

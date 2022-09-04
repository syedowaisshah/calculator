



function getAns(e){
var result = document.getElementById("anss");
result.value += e;

};
function clr(){
    var result = document.getElementById("anss");
    result.value = "";
};

function eql(){
    var result = document.getElementById("anss");
    result.value = eval(result.value);

};

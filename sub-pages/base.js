
function helloWorld() {
    console.log("Hello, World!");
    alert("Hello, World!");
    document.write("Hello, World!");
}

//写一个处理输入文本的函数
function processText(inputText) {
    inputText = inputText.toLowerCase(); // 将文本转换为小写
    inputText = inputText.replace(/[^a-z ]/g, ""); // 只保留字母和空格
    inputText = inputText.replace(/[ ]+/g, " "); // 将多个空格合并为一个
    return inputText;
}

function getNetTime() {
    var xhr = new XMLHttpRequest();
    if (!xhr) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.open("HEAD", location.href, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.getResponseHeader("Date"));
            alert(xhr.getResponseHeader("Date"));
        }
    }
    xhr.send(null);
}
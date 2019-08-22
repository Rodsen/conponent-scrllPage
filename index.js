window.onload = function(){
    console.log ("rodsen")

var elBox = document.getElementById ("box");
var aWalls = elBox.children;
var elNav = document.getElementById ("nav");
var elBtns = elNav.firstElementChild;
var aBtns = elBtns.children;
// console.log (elBtns)
// 添加按钮组
for (var i = 0;i<aWalls.length;i++) {
    var elBtn = document.createElement("li");
    elBtn.innerText = i+1;
    elBtns.appendChild(elBtn);
    
};
// console.log (aBtns)
// 绑定滚动事件
window.onscroll = function () {
    var nScrollTop = document.documentElement.scrollTop;
    for (var i = 0;i<aWalls.length;i++) {
        // console.log (i);
        if (nScrollTop > i*1000 && nScrollTop< (i*1000)+1000 ) {
            console.log (i);
            for (var j = 0;j<aBtns.length;j++){
                aBtns[j].className = ""; 
            }
            aBtns[i].className = "active-btn";
        }    
    }
} 
// 绑定点击事件
for (var i = 0;i<aBtns.length;i++) {
    aBtns[i].onclik = function () {
        console.log(1)
    }
}
aBtns.onclik = function () {
    console.log(1)
}
}
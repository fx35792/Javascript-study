window.onload = function() {
    function moveon() {
        var answer = confirm('准备好了吗');
        if (answer) {
            window.location = 'http://www.baidu.com';
        }
    }
    // setInterval(moveon,5000)

    function debug(msg) {
        var log = document.getElementById('debuglog');
        if (!log) {
            log = document.createElement('div');
            log.id = "debuglog";
            log.innerHTML = "<h2>hello world!</h2>";
            document.body.appendChild(log);
        }

        var pre = document.createElement("h3");
        var text = document.createTextNode(msg);
        pre.appendChild(text);
        log.appendChild(pre);
    }
    debug("fanxin");

    //获得点击元素
    var btnHidden = document.getElementById('btnHidden');
    //点击隐藏方法
    function hide(e, reflow) {
        if (reflow) {
            e.style.display = "none"; 
        } else {
            e.style.visibility = "hidden";
        }
    }
    //点击该元素，如果参数传的是true 则隐藏该元素，如果是false，则隐藏内容；
    btnHidden.onclick = function() {
        hide(this, true)
        // hide(this, false);
    }

}
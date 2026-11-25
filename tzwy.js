if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
    window.location.href = "PCplay.html";     //手机（已修复：手机直接进游戏，不再跳“暂未开发”页）
} else {
    window.location.href = "PCplay.html";        //电脑
}
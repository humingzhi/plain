/**
 * Author: humingzhi
 * Date: 09/03/2017
 * Email: 1330745625@qq.com
 */
;(function() {
    console.log('ok');
    var href = location.href;
    var activeLink = document.querySelector('a[href="'+href+'"]');
    if(activeLink) {
        activeLink.parentNode.classList.add('active')
    }
})()
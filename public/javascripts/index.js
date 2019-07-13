$(function() {
    'use strict';
    let pageObj;
    $(document).on('click', '#queryUser', function() {
        $.showPreloader();
        $.get('http://doublesix.xin:3000/search', function(data, status) {
            $.hidePreloader();
            pageObj.renderUser(data);
        });
    });
    pageObj = {
        renderUser: function(data) {
            if (!data || data.length == 0) {
                $.toast("无数据");
                return;
            }
            let userDom = '';
            for (let item of data) {
                let domcur = `<li class="item-content"><div class="item-inner"><div class="item-title">${item.name}</div><div class="item-after">${item.account}</div></div></li>`;
                userDom += domcur;
            }
            if (userDom != '') {
                $('.userList').html(userDom);
                $('#userInfo').show();
            }
        }
    }


    $.init();
});

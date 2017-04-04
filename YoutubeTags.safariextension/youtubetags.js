(function() {
    function handleContextMenu(event) {
        var sendUserInfo = {
            'ifLink': false,
            'linkHref': ''
        };

        if (event.target.nodeName === 'A') {
            sendUserInfo.ifLink = true;
            sendUserInfo.linkHref = event.target.href;
        }else if(event.target.offsetParent.nodeName === 'A') {
            sendUserInfo.ifLink = true;
            sendUserInfo.linkHref = event.target.offsetParent.href;
        }

        safari.self.tab.setContextMenuEventUserInfo(event, sendUserInfo);
    }

    document.addEventListener("contextmenu", handleContextMenu, false);

})();

var app6 = new Vue({
    el: '#app-6',
    data: function () {
        return {
            search: ''
        };
    },
    watch: {
        search: function (value) {
            var list = document.getElementsByTagName('img');
            for (let item of list) {
                item.classList.remove('founded');
            }
            for (let item of list) {
                let alt = item.getAttribute('alt');
                if (!alt || !value) {
                    continue;
                }
                alt = alt.toLowerCase();
                value = value.toLowerCase()
                if (alt.includes(value)) {
                    item.classList.add('founded');
                    // item.style.width = '50px';
                    // item.style.height = '50px';
                    // item.style.border = '5px solid gold';
                }
            }
        }
    }
})

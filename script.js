const app = new Vue({
    el: '#app',
    data: function () {
        return {
            search: '',
            selectedItem: '',
            reforged: false,
            shops: [
                ...weaponMerchant,
                ...weaponInventory,
                ...heavyWeaponsMerchant,
                ...magazin,
                ...arsenal,
                ...buildingOfElements,
                ...windOfChange,
                ...weaponHut,
                ...hutOfTheCraftsman,
                ...trollcombiner,
                ...hutOfThePirate,
                ...bobsGuns,
                ...fishingHut,
                ...equipmentMerchant,
                ...equipmentCombiner,
                ...weapontrader
            ]
        };
    },
    watch: {
        search: function (value) {
            const shops = document.getElementsByClassName('shop-images-container');
            for (let shop of shops) {
                const parent = shop.parentElement.parentElement;
                let list = parent.getElementsByTagName('img');
                parent.classList.remove('d-none');

                // let selectedImg = list.get(0);
                // selectedImg.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add('fat');

                for (let item of list) {
                    item.parentElement.classList.remove('scaled');
                    item.parentElement.classList.remove('grayed');
                    item.parentElement.classList.remove('yellow-bordered');
                }

                let founded = false;
                for (let item of list) {
                    let alt = item.getAttribute('alt');
                    if (!alt || !value) {
                        parent.classList.remove('d-none');
                        continue;
                    }
                    alt = alt.toLowerCase();
                    value = value.toLowerCase()
                    if (alt.includes(value)) {
                        item.parentElement.classList.add('scaled');
                        if (item.parentElement.classList.contains('green-bordered')) {
                            item.parentElement.classList.remove('green-bordered');
                            item.parentElement.classList.add('rainbow-bordered');
                        }
                        item.parentElement.classList.add('yellow-bordered');
                        founded = true;
                    } else {
                        item.parentElement.classList.add('grayed');
                    }
                }
                if (!founded && value) {
                    parent.classList.add('d-none');
                }
            }
        }
    },
    methods: {
        select: function (event) {
            let selectedImg = event.target;
            this.selectedItem = selectedImg.alt;
            if (selectedImg.alt === '#') {
                return;
            }
            let selectedImageContainer = selectedImg.parentElement;
            let containerClassList = selectedImageContainer.classList;

            let list = document.getElementsByTagName('img');
            for (let item of list) {
                let bruteForceImageContainer = item.parentElement;
                if (
                    bruteForceImageContainer.classList.contains('green-bordered')
                    && bruteForceImageContainer !== selectedImageContainer
                ) {
                    bruteForceImageContainer.classList.remove('green-bordered');
                } else if (
                    bruteForceImageContainer.classList.contains('rainbow-bordered')
                    && bruteForceImageContainer !== selectedImageContainer
                ) {
                    bruteForceImageContainer.classList.remove('rainbow-bordered');
                    bruteForceImageContainer.classList.add('yellow-bordered');
                }
            }


            if (containerClassList.contains('green-bordered')) {
                event.target.parentElement.classList.remove('green-bordered');
            } else if (containerClassList.contains('yellow-bordered')) {
                event.target.parentElement.classList.remove('yellow-bordered')
                event.target.parentElement.classList.add('rainbow-bordered');
            } else if (containerClassList.contains('rainbow-bordered')) {
                event.target.parentElement.classList.remove('rainbow-bordered')
                event.target.parentElement.classList.add('yellow-bordered')
            } else {
                event.target.parentElement.classList.add('green-bordered');
            }
        },
        clearSearch: function () {
            this.search = '';
        },
        focusSearch: function () {
            const input = document.getElementById('search-input');
            input.focus();
        }
    },
    created: function () {
        window.addEventListener("keydown",function (e) {
            if (e.keyCode === 114 || (e.ctrlKey && e.keyCode === 70)) {
                e.preventDefault();
                const input = document.getElementById('search-input');
                input.select();
            }
        })
    }
})

const app = new Vue({
    el: '#app',
    data: function () {
        return {
            search: '',
            selectedItem: '',
            reforged: false,
            showDoubled: false,
            shops: {
                1: weaponMerchant,
            },
                // ...,
                // ...weaponInventory,
                // ...heavyWeaponsMerchant,
                // ...magazin,
                // ...arsenal,
                // ...buildingOfElements,
                // ...windOfChange,
                // ...weaponHut,
                // ...hutOfTheCraftsman,
                // ...trollcombiner,
                // ...hutOfThePirate,
                // ...bobsGuns,
                // ...fishingHut,
                // ...equipmentMerchant,
                // ...equipmentCombiner,
                // ...weapontrader
        };
    },
    watch: {
        search: function (value) {
            const shops = document.getElementsByClassName('shop-images-container');
            for (let shop of shops) {
                const parent = shop.parentElement.parentElement;
                let list = parent.getElementsByTagName('img');
                parent.classList.remove('d-none');

                for (let item of list) {
                    item.parentElement.classList.remove('scaled');
                    item.parentElement.classList.remove('grayed');
                    item.parentElement.classList.remove('yellow-bordered');
                }

                let founded = false;
                for (let item of list) {
                    let alt = item.getAttribute('alt');
                    if (!alt || !value) {
                        shop.classList.remove('with-founded')
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
                        if (!founded) {
                            founded = true;
                            if (!shop.classList.contains('with-founded')) {
                                shop.classList.add('with-founded')
                            }
                        }
                    } else {
                        item.parentElement.classList.add('grayed');
                    }
                }
                if (!founded && value) {
                    parent.classList.add('d-none');
                    shop.classList.remove('with-founded')
                }
            }
        }
    },
    methods: {
        getImage: function (item, reforged) {
            return reforged
                ? this.fullPath(item.id, item.reforgedImg)
                : this.fullPath(item.id, item.img);
        },
        fullPath: function (itemId, imageName) {
            const shopId = (itemId - itemId % 100) / 100;
            // return this.shops.$shopId.path ;
            return 'shops/' + this.shops[shopId].path + '/' + (imageName.includes('.', -4) ? imageName : imageName + '.png');
        },
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
        },
        comingSoon: function () {
            alert('Coming soon');
        },
        removeSelectedIdtem: function () {
            this.selectedItem = '';
        }
    },
    created: function () {
        var that = this;
        window.addEventListener("keydown",function (e) {
            if (e.keyCode === 114 || (e.ctrlKey && e.keyCode === 70)) {
                e.preventDefault();
                const input = document.getElementById('search-input');
                input.select();
            }
            if (e.keyCode === 27) {
                if (that.selectedItem) {
                    that.removeSelectedIdtem();
                } else if (that.search) {
                    that.search = '';
                }
            }
        });

        var chart_config = {
            chart: {
                container: "#basic-example",
                connectors: {
                    type: 'step'
                },
                node: {
                    HTMLclass: 'nodeExample1'
                }
            },
            nodeStructure: {
                text: {
                    name: "Admirals Torpedo",
                },
                image: "images/tree/6.png",
                children: [
                    {
                        stackChildren: true,
                        text:{
                            name: "Pirates Cannon",
                        },
                        image: "images/tree/5.png",
                        children: [
                            {
                                text:{
                                    name: "Double Basic Cannon",
                                },
                                image: "images/tree/44.png",
                                children: [
                                    {
                                        text:{
                                            name: "Basic Cannon",
                                        },
                                        image: "images/tree/4.png",
                                    }
                                ]
                            },
                            {
                                text:{
                                    name: "Double Cruiser Cannon",
                                },
                                image: "images/tree/33.png",
                                children: [
                                    {
                                        text:{
                                            name: "Cruiser Cannon",
                                        },
                                        image: "images/tree/3.png",
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        text:{
                            name: "Doubled Pirates Torpedo",
                        },
                        image: "images/tree/1.png",
                        children: [
                            {
                                text:{
                                    name: "Pirates torpedo",
                                },
                                link: {
                                    href: "http://www.google.com"
                                },
                                image: "images/tree/2.png"
                            }
                        ]
                    }
                ]
            }
        };

        new Treant( chart_config );
    }
})

console.log('Vue ok', Vue);
Vue.config.devtools = true;

const root = new Vue({
    el: '#root',
    data: {
        user: {
            name: 'Laura Bigoni',
            avatar: '_io'
        },
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                active: true,
            },
            {
                name: 'Fabio',
                avatar: '_2',
                active: false,
            },
            {
                name: 'Samuele',
                avatar: '_3',
                active: false,
            },
            {
                name: 'Luisa',
                avatar: '_4',
                active: false,
            },
        ]
    },
    methods: {

    },
});
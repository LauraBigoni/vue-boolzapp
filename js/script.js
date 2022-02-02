console.log('Vue ok', Vue);
Vue.config.devtools = true;

dayjs.extend(dayjs_plugin_customParseFormat);

const root = new Vue({
    el: '#root',
    data: {
        newMessage: '',
        automaticReply: ['Ok', 'Non posso', 'Più tardi', 'Si', 'No', 'Sei sicuro?', 'Forse si...', 'Non ci posso credere!', "E' tardi", 'Buongiorno!', "E' stato un piacere aiutarti", 'Vuoi che ti racconti una barzelletta?', 'Buonanotte', 'Non ho capito..', 'E se poi te ne penti?', 'Lascia stare', 'Non lo farò mai', 'Come dici tu', 'Lol'],
        currentIndex: 0,
        search: '',
        user: {
            name: 'Laura Bigoni',
            avatar: '_io'
        },
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    text: 'Tutto fatto!',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
                    date: '20/03/2020 16:30:00',
                    text: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    text: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                    date: '28/03/2020 10:10:40',
                    text: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '28/03/2020 10:20:10',
                    text: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    text: 'Ah scusa!',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    text: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
                ],
            },
        ],
    },
    methods: {
        setActive(index) {
            this.currentIndex = index;
        },
        randomReply() {
            const randomMessage = this.automaticReply[Math.floor(Math.random() * this.automaticReply.length)];
            return randomMessage;
        },
        getDate() {
            const date = dayjs().get('date') + '/' + (dayjs().get('month') + 1) + '/' + dayjs().get('year');
            const time = dayjs().get('hour') + ":" + dayjs().get('minute') + ":" + dayjs().get('second');
            const dateTime = date + ' ' + time;
            return dateTime;
            // dayjs().format('DD/MM/YYY HH:mm:ss');

        },
        addNewMessage() {
            const message = this.newMessage.trim();
            if (!this.newMessage) return;
            if (message) {
                this.contacts[this.currentIndex].messages.push({ text: message, status: 'sent', date: this.getDate() });
            }
            this.newMessage = setTimeout(() => {
                this.contacts[this.currentIndex].messages.push({ text: this.randomReply(), status: 'received', date: this.getDate() });
            }, 1000);
            this.newMessage = '';
        },
        filterContacts() {
            const search = this.search;
            this.contacts.forEach(contact => {
                contact.visible = contact.name.toLowerCase().includes(search);
            });
        },
        deleteMessage(index) {
            this.contacts[this.currentIndex].messages.splice(index, 1);
        },
        showLastMessage() {
            const lastMessage = this.lastMessage;
            this.contacts[this.currentIndex].messages.forEach(contact => {
                this.lastMessage = this.contacts[this.currentIndex].messages[this.contacts[this.currentIndex].messages.length - 1].text;
                console.log(lastMessage);
                return lastMessage;
            });
        },
    },
});


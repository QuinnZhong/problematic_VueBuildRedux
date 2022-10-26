import ProfPanel from './components/TheProfComponent.js';





(() => {
    //instantiate the Vue instance here 
    const { createApp } = Vue;
    createApp({

        created(){
            fetch('./data.json')
            .then(res => res.json())
            .then(data => {
                this.dynamicData = data;
            })
            //.catch(error => console.error(error));

        },

        data() {
            return {
                message: 'Hello Vue!',
                anotherMessage: 'You fake as hell',
                profs: ['Joe', 'John', 'Jarrod'],
                yesanothermessage: 'more data is about to Coomeee',
                dynamicData: {},
                currentProf: {},
                username: '',
                password: ''
            }
        },

        methods: {
            logClicked(){
                console.log('clicked on a button');
            },
            showData(item){
                // debugger;
                this.currentProf = item;
            },
            sendForm(){
                console.log(this.username, this.password)
            }
        },

        components: {
            profpanel: ProfPanel
        }
    }).mount('#app')

})();
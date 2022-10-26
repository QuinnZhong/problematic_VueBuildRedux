export default {
    name:'TheProfComponent',

    props: ['item'],

    template: 
        `<section>
            <h1 class="prof_name>{{ name }}</h1>
        </sectio>
    `,
    

    data() {
        return {
            name: 'some generic name'
        }
    }
}
export default {
    props: ['book'],
    template: `
        <section class="book-preview">
            <div><img :src=bookImgUrl></div>
            <h3>title: {{book.title}}</h3>
            <h4>price:{{SymboleCurrency}} </h4>
        </section>
    `,
    data() {
        return {}
    },
    created() {},
    methods: {

    },
    computed: {
        bookImgUrl() {
            return this.book.thumbnail;
        },
        // SymboleCurrency() {
        //     return new Intl.NumberFormat('he-IL', {
        //         style: 'currency',
        //         currency: this.book.listPrice.currencyCode,
        //     }).format(this.book.listPrice.amount)
        // },
    }
}
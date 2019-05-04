<template>
  <div>
    <filterBook @item-filtered="filterByBook = $event"></filterBook>
    
    <div class="row">
      <card v-for='book in filteredList'>
        <image-book :bookURL="book.imagem" :bookAlt="book.livro" :bookStatus="book.status"></image-book>
        <bar-reading :bookRead="book.lido"></bar-reading>
        <title-author :bookName="book.livro" :authorName="book.autor"></title-author>
        <btn-details :bookDataToModal="book"></btn-details>
      </card>
    </div>

    <box-details></box-details>
  </div>
</template>

<script>
  import Card from './Card.vue';
  import BarReading from './BarReading.vue';
  import TitleAuthor from './TitleAuthor.vue';
  import BtnDetails from './BtnDetails.vue';
  import BoxDetails from './BoxDetails.vue';
  import Image from './Image.vue';
  import FilterBook from './FilterBook.vue';
  import Register from './Register.vue';
  
  export default {
    components: {
      'card': Card,
      'bar-reading': BarReading,
      'title-author': TitleAuthor,
      'btn-details': BtnDetails,
      'box-details': BoxDetails,
      'image-book': Image,
      'filterBook': FilterBook,
      'register': Register
    },
    data () {
      return {
        books: [],
        filterByBook: ''
      }
    },
    computed: {
      filteredList: function (item) {
        if(this.filterByBook) {
          let exp = new RegExp(this.filterByBook.trim(), 'i');
          return this.books.filter(book => exp.test(book.livro) || exp.test(book.autor) || exp.test(book.genero));

        } else {
          return this.books;
        }
      }
    },
    methods:{
      infinityScroll: function(paginationData){
        let pgData = paginationData;
        [].slice.call(document.querySelectorAll('.card')).filter(
          (item, index)=> {
            this.showFirstTwelveBooks(item, index, pgData)
          }
        )
      },
      showFirstTwelveBooks: function(item, index, pgData){
        if(index > (pgData.itemsPerPage - 1)){
          item.style.display = "none";
          item.style.opacity = "0"; 
        }
      }
    },
    created(){ /* lifecycle hooks, the code below will be executed when component is created */
      fetch('https://valinor-vuejs.herokuapp.com/api/importBooks.json')
        .then(res => res.json())
        .then(book => this.books = book) 
        .then(book => {
          let allBooks = book;
          let viewed = 12;
          let amount = allBooks.length;
          let pages = amount <= viewed ? 1 : Math.ceil(amount / viewed);
          let pagination = {
            qtdBooks: amount,
            qtdPages: pages,
            itemsPerPage: viewed
          };

          this.infinityScroll(pagination) 
        });
    }
  }
</script>

<style scoped lang="sass">
  @import './src/assets/sass/main.scss';
</style>

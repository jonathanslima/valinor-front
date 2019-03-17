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
    created(){ /* lifecycle hooks, the code below will be executed when component is created */
      fetch('http://localhost:8080/api/importBooks.json')
        .then(res => res.json())
        .then(book => this.books = book)
    }
  }
</script>

<style scoped lang="sass">
  @import './src/assets/sass/main.scss';
</style>

<template>
  <div id="app">
    <div class="container">
      <headerValinor :pName="projectName"></headerValinor>
      <filterBook @item-filtered="filterByBook = $event"></filterBook>

      <div class="row">
        <card v-for='book in filteredList'>
          <image-book :bookURL="book.imagem" :bookAlt="book.livro" :bookStatus="book.status"></image-book>
          <bar-reading :bookRead="book.lido"></bar-reading>
          <title-author :bookName="book.livro" :authorName="book.autor"></title-author>
          <btn-details :bookDataToModal="book"></btn-details>
        </card>
      </div>
    </div>
    <box-details></box-details>
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import Card from './components/Card.vue';
  import BarReading from './components/BarReading.vue';
  import TitleAuthor from './components/TitleAuthor.vue';
  import BtnDetails from './components/BtnDetails.vue';
  import BoxDetails from './components/BoxDetails.vue';
  import Image from './components/Image.vue';
  import FilterBook from './components/FilterBook.vue';
  
  export default {
    components: {
      'headerValinor': Header,
      'card': Card,
      'bar-reading': BarReading,
      'title-author': TitleAuthor,
      'btn-details': BtnDetails,
      'box-details': BoxDetails,
      'image-book': Image,
      'filterBook': FilterBook
    },
    data () {
      return {
        books: [],
        projectName: 'Valinor',
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

<template>
  <div id="app">
    <div class="container">
      <filterBook></filterBook>

      <div class="row">
        <card v-for='book in books'>
          <image-book :bookURL="book.imagem" :bookAlt="book.livro" :bookStatus="book.status"></image-book>
          <bar-reading :bookRead="book.lido"></bar-reading>
          <title-author :bookName="book.livro" :authorName="book.autor"></title-author>
          <btn-details></btn-details>
        </card>
      </div>
      </div>
    <box-details></box-details>
  </div>
</template>

<script>
  import Card from './components/Card.vue';
  import BarReading from './components/BarReading.vue';
  import TitleAuthor from './components/TitleAuthor.vue';
  import BtnDetails from './components/BtnDetails.vue';
  import BoxDetails from './components/BoxDetails.vue';
  import Image from './components/Image.vue';
  import FilterBook from './components/FilterBook.vue';
  
  export default {
    components: {
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
        books: []
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

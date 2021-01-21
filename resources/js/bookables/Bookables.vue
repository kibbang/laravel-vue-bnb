<template>
  <div>
    <div v-if="loading">Data is loading...</div>
    <div v-else>
      <div class="row mb-4" v-for="row in rows" :key="'row' + row">
        <div
          class="col"
          v-for="(bookable, column) in bookablesInRow(row)"
          :key="'row' + row + column"
        >
          <bookable-list-item
            :item-title="bookable.title"
            :item-contents="bookable.contents"
            :item-price="1000"
          />
        </div>
        <div
          class="col"
          v-for="p in placeholderInRow(row)"
          :key="'placeholder' + row + p"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import BookableListItem from "./BookableListItem.vue";
export default {
  components: { BookableListItem },

  data() {
    return {
      bookables: null,
      loading: false,
      columns: 3,
    };
  },

  computed: {
    rows() {
      return this.bookables === null
        ? 0
        : Math.ceil(this.bookables.length / this.columns);
    },
  },

  methods: {
    bookablesInRow(row) {
      return this.bookables.slice((row - 1) * this.columns, row * this.columns);
    },
    placeholderInRow(row) {
      return this.columns - this.bookablesInRow(row).length;
    },
  },

  created() {
    this.loading = true;
    setTimeout(() => {
      this.bookables = [
        {
          title: "Death-Note",
          contents: "Apple",
        },
        {
          title: "Naruto",
          contents: "Ninza",
        },
        {
          title: "Naruto2",
          contents: "Ninza",
        },
        {
          title: "Naruto3",
          contents: "Ninza",
        },
        {
          title: "Naruto4",
          contents: "Ninza",
        },
        {
          title: "Naruto5",
          contents: "Ninza",
        },
        {
          title: "Naruto6",
          contents: "Ninza",
        },
        {
          title: "Naruto7",
          contents: "Ninza",
        },
        {
          title: "Naruto8",
          contents: "Ninza",
        },
        {
          title: "Naruto9",
          contents: "Ninza",
        },
      ];
      this.loading = false;
    }, 2000);
  },
};
</script>

<style>
</style>
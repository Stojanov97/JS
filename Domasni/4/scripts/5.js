let book = {
  title: "The Hausmain",
  author: "Freida McFadden",
  isRead: false,
  readingStatus: function () {
    if (!this.isRead) {
      console.log(`You still need to read "${this.title}" by ${this.author}.`);
    } else {
      console.log(`Already read "${this.title}" by ${this.author}.`);
    }
  },
};
book.readingStatus();

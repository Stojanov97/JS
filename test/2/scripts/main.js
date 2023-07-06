let imgs = [
  "https://s3.us-east-1.amazonaws.com/craft-marinbikes/images/2020/bikes/gallery/_gallery1456x752/1416096/23_BCT4_detail-1.jpg",
  "https://ep1.pinkbike.org/p4pb15215853/p4pb15215853.jpg",
  "https://images.immediate.co.uk/production/volatile/sites/21/2021/02/Canyon-Stoic-hardtail-01-7652714.jpg?quality=90&resize=768,574",
  "https://ep1.pinkbike.org/p4pb17427762/p4pb17427762.jpg",
  "https://images.immediate.co.uk/production/volatile/sites/21/2022/05/GT-Force-Carbon-Pro-01-e8d9218.jpg?quality=90&resize=768,574",
  "https://ep1.pinkbike.org/p6pb21225265/p6pb21225265.jpg",
  "https://bikerumor.com/wp-content/uploads/2022/11/Screen-Shot-2022-11-09-at-2.47.42-PM-scaled.jpg",
  "https://images.immediate.co.uk/production/volatile/sites/21/2020/09/Santa-Cruz-5010-CC-X01-RSV-01-1acc4f3.jpg?quality=90&resize=768,574",
  "../images/rift-zone.jpg",
  "../images/session.jpg",
];

let setPictures = document.querySelector(".btn");
let setShadow = document.getElementsByClassName("btn-2")[0];
let picturesCounter = 0;

setPictures.addEventListener("click", () => {
  if (picturesCounter > 0) {
    document.body.children[1].innerHTML.remove();
  }
  imgs.forEach((img) => {
    let image = document.createElement("img");
    image.setAttribute("src", img);
    image.style.width = "300px";
    image.style.aspectRatio = "16/10";
    document.body.children[1].appendChild(image);
  });
  picturesCounter++;
});

setShadow.addEventListener("click", () => {
  document.getElementById("img-holder").childNodes.forEach((img) => {
    img.classList.add("shadow");
    img.style.borderRadius = "5px";
  });
});

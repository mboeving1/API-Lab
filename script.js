"use strict";
//fetching data from reddit
fetch("https://www.reddit.com/r/aww/.json")
  .then((res) => res.json())
  .then((data) => {
    let awwObject = data.data.children;

//looping through specific elements and appending them to the page
    for (let i = 0; i < awwObject.length +1; i++) {
   $("h2").wrap("<div></div>");//wrapping each h2 element in a div to style.
      let title = document.createElement("h2");
      title.innerText = awwObject[i].data.title;
      title.style.display = ("block");
      document.body.append(title);

      let link = document.createElement("a");
      link.href = awwObject[i].data.url;
      link.classList.add("link");
      link.innerText = link.href;
      document.body.append(link);

      let pic = document.createElement("img");
      pic.classList.add("img");
      pic.src = awwObject[i].data.thumbnail;
      document.body.append(pic);
    }
  });
//create a header to place a logo and a search bar connected to reddit.
  let section = document.createElement("section");
  section.innerText=("r/aww")
  section.classList.add("header");
  document.body.append(section);

//   let logo = document.createElement("img");
//   logo.classList.add("logo");
//   logo.src = "https://cdn.freelogovectors.net/wp-content/uploads/2019/01/reddit-logo.png";
//   document.body.section.append(logo);
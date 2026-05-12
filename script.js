const img = document.createElement("img");
img.src = "pict/" + (Math.floor(Math.random() * 9) + 1) + ".jpg";

document.body.append(img);

console.log(img);

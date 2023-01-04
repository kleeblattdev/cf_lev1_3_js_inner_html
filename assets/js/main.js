let gallery = document.getElementById("gallery");

gallery.innerHTML += `<figure><img src="https://picsum.photos/200/301" alt="picture">
<figcaption>Fig.1</figcaption></figure>` + `<figure><img src="https://picsum.photos/200/301" alt="picture">
<figcaption>Fig.2</figcaption></figure>` + `<figure><img src="https://picsum.photos/200/301" alt="picture">
<figcaption>Fig.3</figcaption></figure>`;

gallery.style.display = "flex";

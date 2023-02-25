let datas = [];

function getData2(event) {
  event.preventDefault();
  let title = document.getElementById("title").value;
  let content = document.getElementById("content").value;
  let image = document.getElementById("image").files;

  image = URL.createObjectURL(image[0]);

  let data = {
    title,
    content,
    image,
  };

  datas.push(data);
  console.log(datas);
  showData();
}

const showData = () => {
  document.getElementById("contents").innerHTML += "";
  for (let i = 0; i < datas.length; i++) {
    document.getElementById("contents").innerHTML += `
   
        <div class="card">
            <div class="image">
                <img src="${datas[i].image}" alt="">
            </div>
            <div class="isi">
                <h2>${datas[i].title}</h2>
                <p>${datas[i].content}</p>
            </div>
        </div>


        `;
  }
};

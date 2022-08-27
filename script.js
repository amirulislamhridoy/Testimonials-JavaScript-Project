const data = [
    {
      _id: "6309afedcdb99fc209a9bbe3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQthHVYX7uaGAQbJifvkv4GskIjvp14b9KIAQ&usqp=CAU",
      name: "John"
    },
    {
      _id: "6309afedfa3e21a6951914e9",
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3WEmfJCME77ZGymWrlJkXRv5bWg9QQmQEzw&usqp=CAU",
      name: "Sandy"
    },
    {
      _id: "6309afed5f7a7f8255b68049",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4GbTjaOA_EHtp5XLj_OMg0koIXYo8Ox0_ug&usqp=CAU",
      name: "Amy"
    },
    {
      _id: "6309afedca25fde5b2e7783b",
      description: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmKAoiqyYPoASMj7VlTygIsuV_QuQpxYiMVw&usqp=CAU",
      name: "Tyrell"
    },
    {
      _id: "6309afedcdc97341986b5733",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsQ-YHX2i3RvTDDmpfnde4qyb2P8up7Wi3Ww&usqp=CAU",
      name: "Wanda"
    }
  ]

const leftBtn = document.getElementById('left-btn')
const rightBtn = document.getElementById('right-btn')
const img = document.getElementById('img')
const name = document.getElementById('name')
const para = document.getElementById('para')

let i = 0;

const rightFn = () => {
    i += 1
    if(i >=  data.length){
        i = 0
    }
    img.src = data[i].photo
    name.innerText = data[i].name
    para.innerText = data[i].description
}

leftBtn.addEventListener('click', leftFn)
rightBtn.addEventListener('click', rightFn)

function leftFn(){
    i = i - 1
    if(i <= 0){
        i = data.length - 1
    }
    img.src = data[i].photo
    name.innerText = data[i].name
    para.innerText = data[i].description
}

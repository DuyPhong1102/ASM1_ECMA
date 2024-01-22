import Footer from "../components/footer"
import Header from "../components/header"
// import {books} from '../../db.json' assert {type: 'json'}
import {useEffect, useState} from '../lib'

const ProductDetail = (id) => {
    // Buoc 1: Tao state
    const [book, setBook] = useState({})

    useEffect(function() {
        const listThumbnail = document.querySelectorAll(".thumbnail")
        // console.log(listThumbnail);
        listThumbnail.forEach(function(btn) {
            // console.log(btn.dataset.src);
            btn.addEventListener('click', function() {
                document.querySelector(".image-detail").src = btn.dataset.src
            })
        })

        fetch('http://localhost:3000/books/' + id)
        .then(function(res) {
            return res.json()
        })
        .then(function(data) {
            setBook(data) 
        })
    }, [])

    return `
    <!--chi tiet san pham-->

    ${Header()}
    <!--images-->
 
            <div class=" flex ">
                <div class="">
                <img class=" mt-5 h-[400px] w-[400px] ml-[385px]" src="${book.images?.[0]}"/>
                <img src="/src/public/2.png" class="w-[120px] h-[50px] ml-[400px]"/>
            </div>
          
       
    <!--name,price,-->        
             <div class=" mt-5 w-[400px] h-[450px] border p-4 rounded-lg shadow-md ml-7">
             <div class=" items-center ">
                <p class=" font-bold text-[25px]">${book.name}</p> 
                    <span class="text-2xl text-yellow-500">&#9733;</span>
                    <span class="ml-2 text-gray-600 ">${book.rating_average} | <p>${book.quantity_sold?.text}</p> </span> 
                <p class="mt-10"></p>
             </div>
    <!--name,price,-->  
             <div class="flex shadow-md bg-zinc-100">
                <p class="text-red-500 font-bold text-[30px]  w-48 h-14 "> 
                 ${book.original_price}.VND </p>               
             </div>
    <!--tiền-->
             <div>
                    <h4 class="text-[25px] font-bold">số lượng</h4>
                    <button class="shadow-md bg-slate-300 w-10 h-10" id="decrement">-</button>
                    <span id="quantity">0</span>
                    <button class="shadow-md bg-slate-300 w-10 h-10"  id="increment">+</button> <br>
                    <button class="mt-3 shadow-md w-64 h-12 bg-red-600 text-white rounded-md hover:bg-green-500">Chọn Mua</button> </div>
                
            </div> 
            </div>
    <!--ảnh liên quan--> 
    <div class="flex mb-16 ml-20">
    <img class=" mt-5 h-[150px] w-[150px] transform hover:scale-105 hover:shadow-lg transition-transform duration-300 " src="${book.images?.[0]}"/>
    <img class=" mt-5 h-[150px] w-[150px] transform hover:scale-105 hover:shadow-lg transition-transform duration-300 " src="${book.images?.[0]}"/>
    
   </div>
</div>
      

    <!--mô tả-->
         
             </div>  
   
             <div class=" mt-10  ml-52 w-[1900px] mg-center mb-20 text-[25px]">
             <h2 class="font-bold">MÔ TẢ SẢN PHẨM</h2>
             <p class="mt-7  ">${book.description}</p>           
            </div>
            
            </div class="mt-4">  
            ${Footer()}
            </div>
    `
    
}

export default ProductDetail
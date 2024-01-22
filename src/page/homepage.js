import Footer from "../components/footer"
import Header from "../components/header"
import ProductItem from "../components/product-item"
import {useState, useEffect} from '../lib'

const HomePage = () => {
  let [books, setBook] = useState([])
  useEffect(function() {
    fetch('http://localhost:3000/books') //Promise
    .then(function(res) {
      return res.json()
    }) 
    .then(function(data) {
      // books = data
      setBook(data)
    })
  }, [])
 
  return /*html*/`
      ${Header()}
     
<!--  -->
<div class="flex mt-10">
          <div class="ml-[280px]  ">
          <ul class="w-200 mt-6 space-y-1">
      <li>
        <a href="" class="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
          Products
                 </a>
      </li>

      <li>
        <details class="group [&_summary::-webkit-details-marker]:hidden">
          <summary
            class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            <span class="text-sm font-medium"> Category </span>

            <span class="shrink-0 transition duration-300 group-open:-rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <ul class="mt-2 space-y-1 px-4">
            <li>
              <a
                href=""
                class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Novel
              </a>
            </li>

            <li>
              <a
                href=""
                class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Business
              </a>
            </li>
            <li>
              <a
                href=""
                class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                LifeStyle
              </a>
            </li>
          </ul>
        </details>
      </li>

      <li>
        <a
          href=""
          class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          VietnameseBooks
        </a>
      </li>

      <li>
        <a
          href=""
          class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          EnglishBooks
        </a>
      </li>

      <li>
        <details class="group [&_summary::-webkit-details-marker]:hidden">
          <summary
            class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            <span class="text-sm font-medium"> Author </span>

            <span class="shrink-0 transition duration-300 group-open:-rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <ul class="mt-2 space-y-1 px-4">
            <li>
              <a
                href=""
                class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Details
              </a>
            </li>

            <li>
              <a
                href=""
                class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Security
              </a>
            </li>

            <li>
              <form action="/logout">
                <button
                  type="submit"
                  class="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
                >
                  Logout
                </button>
              </form>
            </li>
          </ul>
          </div>
<!--  -->
      <div class="ml-[60px]">
        <h1 class="text-[30px] font-bold size">Nhà Sách TiKi</h1>
        <img class="w-2/3" src="/src/public/header.png"  alt="">
      </div>

<!--  -->

</div>
<div class="flex ml-[660px] mt-10 mb-10">
<div class="hidden sm:block">
  <div class="border-b border-gray-200">
    <nav class="-mb-px flex gap-6" aria-label="Tabs">
      <a
        href="#"
        class="shrink-0 border-b-2 border-sky-500 px-1 pb-4 text-sm font-medium text-sky-600"
      >
      Phổ biến
      </a>

      <a
        href="#"
        class="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
      >
      Bán chạy
      </a>

      <a
        href="#"
        class="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
      >
      Hàng mới
      </a>

      <a
        href="#"
        class="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        aria-current="page"
      >
      Giá thấp
      </a>
      <a
        href="#"
        class="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        aria-current="page"
      >
      Giá cao
      </a>
      
    </nav>
  </div>
</div>




</div>
<!--  -->     
      <div class="container mx-auto grid grid-cols-4 gap-2">
        ${books.map(function (book) {
          return ProductItem(book)
        }).join('')}
      </div>
      ${Footer()}
    `
}

export default HomePage
// Destruction
const ProductItem = ({images, name, id,original_price,rating_average}) => {
  return /*html*/` 
  
    <!-- danh sách sản phẩm-->

  <a href="/product/${id}" class="group relative block overflow-hidden">
  <button
    class="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
  >
    <span class="sr-only">Wishlist</span>
    
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="h-4 w-4"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  </button>

  <img
    src="${images?.[0]}"alt=""
    class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"  />

<!-- tên_giá,  -->
  <div class="relative border border-gray-100 bg-white p-6  ">
    <h3 class="mt-4 text-lg font-medium text-gray-900">${name}</h3>
    <span class="text-2xl text-yellow-500">&#9733;</span>
    <span class="ml-2 text-gray-600">${rating_average}</span>
    <p class="mt-1.5 text-lg font-bold text-red-600">${original_price}</p>
    <h3 class="text-red-500 font-bold text-lg">$ Rẻ Hơn Hoàn Tiền</h3>
    <form class="mt-4">
      <button
        class="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
      >
        Add to Cart
      </button>
    </form>
  </div>
<!--  -->

</a>

`
}

export default ProductItem
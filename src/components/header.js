// component header
const Header = () => {
  // string interpolation
  return `
  <header class="bg-blue-400">
  <div class="container mx-auto p-5 flex items-center jus=tify-between">

    <div  class="flex items-center ml-100">
      <img href="/" src="/src/public/logo.svg" class="w-[83px] h-[63px]" alt="Logo" />
    </div>

    
    
    <div class="flex items-center ml-64">
    <input type="text" class="w-[620px] h-[40px] p-3" placeholder="" />
    <div href="#" class="flex items-center w-40 h-10 ml-2 bg-blue-600 p-2">
        <img src="/src/public/Rectangle.png" class="w-5 h-5" alt="" />
        <button class="text-center mx-1 text-white">Tìm Kiếm</button>
    </div>
    </div>



    <div class="flex space-x-4 ml-16 items-center">
      <img src="/src/public/Rectangle (1).png" class="w-[35px] h-[35px]" alt="" />
      <div>
        <div class="flex items-center w-40">
          <a href="#" class="mr-1 text-white">Đăng nhập/ Đăng ký</a>
        
        </div>
        <a href="#" class="text-white">Tài Khoản</a>
      </div>
    </div>


    <div class="flex space-x-1 w-50 ml-12">
    <img href="#" src="/src/public/Rectangle (2).png" class="w-25 h-25" alt="" />
    <p href="#" class="text-white px-1">Giỏ hàng</p>
    </div>

  </div>
</header>

    `
}

export default Header
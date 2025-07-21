const url = "https://coffee-api-nu.vercel.app/";
const coffees = async () => {
    const response = await fetch(url);
    const datalist = await response.json();
    const allCoffee = datalist[0].data;


    allCoffee.forEach(val => {
      
        document.querySelector('.box-card').innerHTML += `
            <div onclick="showData(${val.id})" class="card mt-5 relative cursor-pointer h-[350px] bg-white shadow-md rounded-md overflow-hidden">
                <div class="absolute top-0 start-0 z-10 bg-amber-200 px-2 py-1 rounded-br-md">${val.category}</div>
                <div class="image w-full h-[75%] overflow-hidden">
                    <img class="w-full h-full hover:scale-[1.07] transition ease-in-out duration-[0.3s]" src="${val.image}" alt="">
                </div>
                <div class="title flex flex-col px-3 pt-2">
                    <span>${val.name}</span>
                    <span class="text-red-500 font-bold">$${val.price}</span>
                </div>
                <div class="star flex items-center px-3 pb-2">
                    <span class="text-gray-500 ms-2">(${val.rating})</span>
                </div>
            </div>
        `;
    });
};

coffees();

function showData(id) {
    document.querySelector('.modal').classList.remove('hidden');
    document.querySelector('.modal').classList.add('block');
}

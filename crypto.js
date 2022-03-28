const form=document.querySelector('#searchForm');
const res=document.querySelector('#tableResult');
let timeupdate;
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    const ctype=form.elements.coinType.value;
    fetchPrice(ctype);
});

const fetchPrice=async(ctype)=>{

    const r=await axios.get(`https://api.coinstats.app/public/v1/coins/${ctype}?currency=INR`);
    const price=r.data.coin.price;
    const volume=r.data.coin.volume;
    const change=r.data.coin.priceChange1d;
    const base=r.data.coin.name; 
    const target='INR';

res.innerHTML=` <tr>
<th> Property</th>
<th>Value</th>
</tr>
<tr>
<td>${base}</td>
<td>${price} ${target}</td>
</tr>
<tr>
<td>Volume</td>
<td>${volume}</td>
</tr>
<tr>
<td>change</td>
<td>${change}</td>
</tr>`

};

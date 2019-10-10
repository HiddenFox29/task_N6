let price = [15000, 10000, 1000, 20000 ]
let items = ['стол', 'стул', 'зеркало', 'палатенцо']
let li = document.createElement("li");

for (i = 0; i < price.length; i++){
    document.getElementsByTagName("li").innerText = price[i];

}
  // let li = document.createElement("li");
  // let text = document.createTextNode(price[i]);
  // li.appendChild(text);
  // document.getElementById("myUl").appendChild(li);
import "./styles.css";

console.log("aaa");

//  || は左がfalseなら右を返す
//  && は左がtrueなら右を返す
const num = null;
const fee = num || "金額未設定";
console.log(fee);

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

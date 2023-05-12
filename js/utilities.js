function inputFieldById(inputFieldId){
   const inputFiled = document.getElementById(inputFieldId);
   const inputFiledString = inputFiled.value;
   const inputFiledValue = parseFloat(inputFiledString);
   inputFiled.value = '';

   return inputFiledValue;
}


function showResult(totalCalculate, triangleName) {
   const containerTable = document.getElementById('tableContainer');
   const tr = document.createElement('tr');
   tr.innerHTML = `<td>${triangleName}</td>
   <td>${totalCalculate}cm<sup>2</sup></td>
   <td><Button class="p-2 rounded py-1 bg-sky-500 font-semibold text-white hover:bg-sky-300">Covert to m<sup>2</sup></Button></td>`
   containerTable.appendChild(tr)
}
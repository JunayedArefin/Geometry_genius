document.getElementById('rhombus-btn').addEventListener('click',function(){

   const rhombusInputOne = inputFieldById('rhombus-input-one');
   const rhombusInputTwo = inputFieldById('rhombus-input-two');

   const totalRhombus = 0.5 * rhombusInputOne * rhombusInputTwo;

   if (isNaN(rhombusInputOne) || isNaN(rhombusInputTwo) || rhombusInputOne === null || rhombusInputTwo === null || typeof rhombusInputOne === 'string' || typeof rhombusInputTwo === 'string' || rhombusInputOne < 0 || rhombusInputTwo < 0) {
      return alert('Please enter a valid input');
   }
   const rombusTitle = document.getElementById('rombusTitle').innerText;
   showResult(totalRhombus,rombusTitle);
})
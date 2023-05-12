document.getElementById('pentagon-btn').addEventListener('click',function(){

   const pentagonInputOne = inputFieldById('pentagon-input-one');
   const pentagonInputTwo = inputFieldById('pentagon-input-two');

   const totalPentagon = 0.5 * pentagonInputOne * pentagonInputTwo;

   if (isNaN(pentagonInputOne) || isNaN(pentagonInputTwo) || pentagonInputOne === null || pentagonInputTwo === null || typeof pentagonInputOne === 'string' || typeof pentagonInputTwo === 'string' || pentagonInputOne < 0 || pentagonInputTwo < 0) {
      return alert('Please enter a valid input');
   }

   const pentagonTitle = document.getElementById('pentagonTitle').innerText;
   showResult(totalPentagon,pentagonTitle);
})
document.getElementById('parallelogram-btn').addEventListener('click',function(){

   const parallelogramInputOne = inputFieldById('parallelogram-input-one');
   const parallelogramInputTwo = inputFieldById('parallelogram-input-two');

   const totalParallelogram = parallelogramInputOne * parallelogramInputTwo;

   if (isNaN(parallelogramInputOne) || isNaN(parallelogramInputTwo) || parallelogramInputOne === null || parallelogramInputTwo === null || typeof parallelogramInputOne === 'string' || typeof parallelogramInputTwo === 'string' || parallelogramInputOne < 0 || parallelogramInputTwo < 0) {
      return alert('Please enter a valid input');
   }

   const paralTitle = document.getElementById('paralTitle').innerText;
   showResult(totalParallelogram,paralTitle);

})
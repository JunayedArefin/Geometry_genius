document.getElementById('rectangle-btn').addEventListener('click',function(){

   const rectangleInputOne = inputFieldById('rectangle-input-one');
   const rectangleInputTwo = inputFieldById('rectangle-input-two');

   const totalRectangle = rectangleInputOne * rectangleInputTwo;
   
   if (isNaN(rectangleInputOne) || isNaN(rectangleInputTwo) || rectangleInputOne === null || rectangleInputTwo === null || typeof rectangleInputOne === 'string' || typeof rectangleInputTwo === 'string' || rectangleInputOne < 0 || rectangleInputTwo < 0) {
      return alert('Please enter a valid input');
   }
   const rectangleTitle = document.getElementById('rectangleTitle').innerText;
   showResult(totalRectangle,rectangleTitle);
})
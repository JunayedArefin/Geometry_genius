document.getElementById('triangle-btn').addEventListener('click',function(){

   const triangleInputOne = inputFieldById('input-one');
   const triangleInputTwo = inputFieldById('input-two');

   const totalTriangle = triangleInputOne * triangleInputTwo * 0.5;

   if (isNaN(triangleInputOne) || isNaN(triangleInputTwo) || triangleInputOne === null || triangleInputTwo === null || typeof triangleInputOne === 'string' || typeof triangleInputTwo === 'string' || triangleInputOne < 0 || triangleInputTwo < 0) {
      return alert('Please enter a valid input');
   }
   const triangleNameTitle = document.getElementById('TriangleTitle').innerText;
   showResult(totalTriangle,triangleNameTitle);
})
document.getElementById('ellipse-btn').addEventListener('click',function(){

   const ellipseInputOne = inputFieldById('ellipse-input-one');
   const ellipseInputTwo = inputFieldById('ellipse-input-two');

   const totalEllipse = 3.1416 * ellipseInputOne * ellipseInputTwo;
   
   if (isNaN(ellipseInputOne) || isNaN(ellipseInputTwo) || ellipseInputOne === null || ellipseInputTwo === null || typeof ellipseInputOne === 'string' || typeof ellipseInputTwo === 'string' || ellipseInputOne < 0 || ellipseInputTwo < 0) {
      return alert('Please enter a valid input');
   }
   const ellipseTitle = document.getElementById('ellipseTitle').innerText;
   showResult(totalEllipse,ellipseTitle);
})
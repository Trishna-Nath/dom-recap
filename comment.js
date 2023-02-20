//milestone-5
// 1 - how to use js with html and css 
// 2 get element or elements from dom

// 2.1 getElementById
// 2.2 getElementByClassName
// 2.3 querySelector
// 2.4 querySelectorAll

// 3. dynamically add element to the dom:document.createElement
// 3.5 set value to the innerHtml

// 4. get and set value from/to a dom element 
// 4.1 use innerText (h1,p,h5,div,span,strong)
// 4.2 use value(input,textArea)

// 5. add event listener (event handler)
// 5.1 cancelIdleCallback,focus,blur,onChange,keyUp)
// 5.2. addEventListener onclick = "myHandler()"

// 6.use function to reduce duplicate ConvolverNode7. 

//7 event bubble and event deligate


//start milestone-6

 document.getElementById('apply-bg').addEventListener('click',function(){
     const friends = document.getElementsByClassName('friend');
     for(const friend of friends){
        friend.style.backgroundColor = 'lightblue';
     }
 });
 document.getElementById('center').addEventListener('click',function(){
    const centeringThirdOne = document.getElementById('third');
    centeringThirdOne.style.textAlign = 'center';
 });

 document.getElementById('add-new').addEventListener('click',function(){
    const friendContainer = document.getElementById('friends');
    const friend = document.createElement('div');
    friend.classList.add('friend');
    friend.innerHTML = `
    <h3 class = "friend-name">new friend</h3>
    <p>something new added </p>
    `
    friendContainer.appendChild(friend);
 })

$(document).ready(initializeApp);

function initializeApp(){
    addClickHandlersToElements();
    clearAddItemFormInputs();
}

function addClickHandlersToElements(){
    $(".addButton").click(handleAddClicked);
    $(".cancelButton").click(handleCancelClick);
}

/***************************************************************************************************
 * handleAddClicked - Event Handler when user clicks the add button
 * @param {object} event  The event object from the click
 * @return: 
       none
 */

function handleAddClicked(){
    // addStudent();
    let nameInput = $('#nameInput').val();
    let descriptionInput = $('#descriptionInput').val();
    let priceInput = parseInt($('#priceInput').val());
    let ratingInput = parseInt($('#ratingInput').val());
    let quantityInput = parseInt($('#quantityInput').val());
    
    let item = {name: nameInput, description: descriptionInput, price: priceInput, rating: ratingInput, quantity: quantityInput};

    pushDataToServer(item);
	clearAddItemFormInputs();
}

/***************************************************************************************************
 * handleCancelClicked - Event Handler when user clicks the cancel button, should clear out add item form
 * @param: {undefined} none
 * @returns: {undefined} none
 * @calls: clearAddItemFormInputs
 */
function handleCancelClick(){
    console.log('handle cancel click is firing')
    clearAddItemFormInputs();
}

/***************************************************************************************************
 * clearAddItemForm - clears out the form values based on inputIds variable
 * * @param: {undefined} none
 * @returns: {undefined} none
 */
function clearAddItemFormInputs(){
    $("#nameInput").val("");
    $("#descriptionInput").val("");
    $("#priceInput").val("");
    $("#ratingInput").val("");
    $("#quantityInput").val("");
}

/***************************************************************************************************
 * pushDataToServer - uses ajax call to push data to server.
 * @param: itemObj {object}
 * @returns: {undefined} none
 * @calls: none
 */
function pushDataToServer(itemObj){
    $.ajax({
        url: 'https://http://localhost:3000/add-item',
        method: 'POST',
        dataType: 'json',
        data: { itemObj },
        success: function(response){
            console.log("Stored Item: ", response);
        },
        error: function(response){
            console.log('Server Error: ', response);      
        }
        
    });
}


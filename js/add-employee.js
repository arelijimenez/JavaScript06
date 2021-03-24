// SET WIDTH AND HEIGHT VARIABLES TO 800 x 700
let width   = 800;
let height  = 700;

// CREATE A HELPER FUNCTION TO RETRIEVE THE HTML ELEMENTS FROM THE DOM
function getElement(e) {
    return document.getElementById(e);
}
// HANDLE THE LOAD EVENT OF THE WINDOW
 window.addEventListener('load', () => {

// RESIZE THE POPUP TO THE SET WIDTH AND HEIGHT
    window.resizeTo(width, height);

// MOVE THE POPUP TO THE MIDDLE OF THE SCREEN
    window.moveTo(((window.screen.width - width) / 2), ((window.screen.height - height) / 2));
     console.log('Page is fully loaded'); 

     // HANDLE THE CANCEL BUTTON. WHEN THE USER CLICKS THIS BUTTON, CLOSE THE WINDOW
    let btn = getElement('cancel');
    btn.addEventListener('click', () => {
        window.close();
    });

    // HANDLE THE SUBMISSION OF THE FORM AND THEN IMMEDIATELY PREVENT THE SUBMISSION
    let submitBtn =getElement('submit');
    submitBtn.addEventListener('click',(e) => {
        e.preventDefault();

        // CREATE 5 VARIABLES FOR ID, NAME, EXT, EMAIL, AND DEPT
        let employeeID, fullName, extension, email, department;
       
        // SET THOSE VARIABLES TO WHATEVER THE USER ENTERS INTO THE FORM ELEMENTS
        employeeID  = getElement('id').value;
        fullName    = getElement('name').value;
        extension   = getElement('extension').value;
        email       = getElement('email').value;
        department  = getElement('department').value;

        // GET THE LOGINDETAILS OUTPUT ELEMENT FROM THE PARENT PAGE
        let login =  window.opener.document.getElementById('loginDetails');

        // SET THE TEXT OF THE LOGINDETAILS ELEMENT TO THE ABOVE SET VARIABLES
        // THE DATA SHOULD SHOW ON THE INDEX.HTML PAGE
        login.innerHTML  = 'ID: '+ employeeID + "<br/>";
        login.innerHTML += 'Name: ' + fullName + "<br/>";
        login.innerHTML += 'Extension: ' + extension + "<br/>";
        login.innerHTML += 'Email: ' + email + "<br/>";
        login.innerHTML += 'Department: ' + department + "<br/>";

        // CLOSE THE POPUP
        window.close();
        
    });  
 });



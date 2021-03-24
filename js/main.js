// OPEN THE ADD-EMPLOYEE.HTML PAGE WITHIN A POPUP
function openAddEmployee(){
    window.open("add-employee.html", "add-employee",'width=600,height=600');
}

// HANDLE THE LOAD EVENT OF THE WINDOW
window.addEventListener('load', () => {
    console.log('Page is fully loaded');

    // HANDLE THE CLICK EVENT FOR THE BTNADDEMPLOYEE BUTTON
    let btn = window.document.getElementById('btnAddEmployee');
    btn.addEventListener('click', openAddEmployee);    
});
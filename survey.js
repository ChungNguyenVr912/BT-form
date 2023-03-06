let f1 = document.getElementById('f3-4');
let f2 = document.getElementById('field01');
let f3 = document.getElementById('f3-4-1');
f2.addEventListener("click", check)
function check()
{   
    f1.checked = true;   
    f3.style.display = 'block';
}
f2.addEventListener("blur", function()
{
    f3.style.display = 'none';
})
// function check()
// {
//     f1.checked = check;
// }
let f1 = document.getElementById('f3-4');
let f2 = document.getElementById('field01');
let f3 = document.getElementById('f3-4-1');
let f4 = document.getElementById('genselect');
let charcount = document.getElementById('usedchar');
f1.addEventListener("click", check)
f2.addEventListener("click", check)
f4.addEventListener("click", function()
{
    if(f1.checked == false)
    {f3.style.display = 'none';}
})
function check()
{   
    f1.checked = true;   
    f3.style.display = 'block';
}
f2.addEventListener("blur", function()
{
    f3.style.display = 'none';
})

f2.addEventListener("input", changetext);
function changetext()
{
    charcount.textContent = f2.value.length;
}
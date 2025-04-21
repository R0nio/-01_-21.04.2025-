document.addEventListener('DOMContentLoaded', function() {
const burgerBtn = document.getElementById('burgerBtn');
const burgerMenu = document.getElementById('burgerMenu');
const edit = document.getElementById('edit');
const edit_panel = document.getElementById('edit_panel');
const del = document.getElementById('del');
const del_panel = document.getElementById('del_panel');
const divPlus = document.getElementById('plus');
const Plus = document.getElementById('Add_plus');
const Sup = document.getElementById('sup');
const Supp = document.getElementById('supp');

burgerBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    burgerMenu.style.display = 'flex';
});
document.addEventListener('click', function() {
    burgerMenu.style.display = 'none';
});
Sup.addEventListener('click', function(e) {
    e.stopPropagation();
    Supp.classList.add('active');
});
document.addEventListener('click', function(){
    Supp.classList.remove('active');
});
edit.addEventListener('click', function(e) {
    e.stopPropagation();
    edit_panel.style.display = 'flex';
});
document.addEventListener('click', function(){
    edit_panel.style.display = 'none';
});
del.addEventListener('click', function(e) {
    e.stopPropagation();
    del_panel.style.display = 'flex';
});
document.addEventListener('click', function(){
    del_panel.style.display = 'none';
});
Plus.addEventListener('click', function(e) {
    e.stopPropagation();
    divPlus.classList.add('active');
});
document.addEventListener('click', function(){
    divPlus.classList.remove('active');
});
});
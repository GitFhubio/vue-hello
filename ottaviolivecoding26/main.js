Vue.config.devtools = true;

// inizializzare applicazione vue
// creo div id root html(contenitore applicazione,tutto ciò che è qui dentro sarà rielaborato da vue)
var app = new Vue({
el:'#root',
data:{
  name:'',
  surname:'',
  boxClassName:'box',
  color:'red',
  titleColor:'red',
  titleColorClass:'startTitleColor'
},
methods:{
saluta: function(){
  alert( 'Ciao!');
},
submitFunction: function(){
  alert('Ora invierò dati al server');
},
changeColor: function(){
  this.titleColor='blue';
},
changeColorClass:function()
{
  this.titleColorClass='newTitleColor';
}
}




});

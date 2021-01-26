// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Aggiungere un’immagine presa anch’essa da un data

Vue.config.devtools = true;

const app = new Vue( {
  el:'#root',
  data:{
    name:'Davide',
    surname:'Bibbò',
    index:0,
    img:[{
      url:'https://i.pinimg.com/736x/83/5c/4b/835c4b7dbc2757d24fed44e9ac9c4ea2.jpg',
      alt:'immagine di Rost'
    },
    {
      url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYInr0SIKvZUd6tU84L6AUQnG-4wj-d-iy3A&usqp=CAU',
      alt:'immagine di Rast'
    },
    {
      url:'https://static.wikia.nocookie.net/true-detective/images/8/8f/Errol_Childress.png/revision/latest?cb=20150914034316',
      alt:'immagine di Rist'
    }],
    color:'red',
    backColor:'black',
    cit:'Il sonno della ragione genera mostri',
    classe1:'sottotitolo',
    classe2:'titolo',
    input:'ciao',
    value0:'all',
    value1:'option 1'

  },
  methods:{
   // changeColor(){
   //   this.color='white';
   // },
   changeColor: function(){
     this.color='white';
   },
   changeBackColor: function(){
     this.backColor='red';
   },
   changeSize:function(){
     this.classe1=this.classe2;
   },
   selectValue(){
    if(this.color=='red'){
      this.color='pink';
    } else{
      this.changeBackColor();
    }
  },
    avanti(){
      this.index+=1;
    },
    indietro(){
      this.index-=1;
    }
  }

});

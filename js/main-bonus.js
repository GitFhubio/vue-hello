// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Aggiungere un’immagine presa anch’essa da un data

Vue.config.devtools = true;

const app = new Vue( {
  el:'#root',
  data:{
    name:'Davide',
    surname:'Bibbò',
    img:{
      url:'https://www.smartweek.it/wpsw/wp-content/uploads/2018/06/Rustin-%E2%80%98Rust%E2%80%99-Cohle.jpg',
      alt:'immagine di Rust'
    }

  }
});

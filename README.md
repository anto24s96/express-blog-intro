# Esercizio - express-blog-intro

Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità.

1. Creiamo il progetto base con una rotta `/` che ritorna un `h1` con scritto "Benvenuto nel mio blog!".
2. Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (array di stringhe).
3. Creiamo poi una rotta `/posts` che ritorni tramite content negotiation la lista dei post, da un array locale. Ritorniamo i dati sotto forma di JSON e HTML stampando una semplice `ul`.
4. Le rotte relative ai post dovranno chiamare la funzione relativa dal controller dedicato `controllers/posts.js`.
5. Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
6. Testare le immagini scrivendo manualmente il link nel browser.

## Bonus

-   Nel stampare la `ul` in HTML, si potrebbe inserire anche un tag `img`, la descrizione e la lista dei tag.
-   Spostiamo l’array dei post in un file separato da importare poi dentro il controller.
-   Creare una rotta `POST` per aggiungere i post tramite Postman.

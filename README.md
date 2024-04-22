## verITA

## _Introduzione_

Il _**Made in Italy**_ rappresenta un _**patrimonio inestimabile**_ riconosciuto in tutto il mondo per la sua eccellenza, tuttavia il fenomeno della contraffazione minaccia l'integrità di questo patrimonio, compromettendo la reputazione e l'economia italiana. Il progetto _**verITA nasce**_ dalla necessità di proteggere l'essenza del Made in Italy, _**preservando l'autenticità**_ e 
la _**qualità**_ dei nostri prodotti attraverso l'adozione di _**soluzioni tecnologiche avanzate**_. 

## _Goals di verITA_

- **Garantire l'autenticità** e **l'originalità** dei prodotti Made in Italy : attraverso l'implementazione di _**sistemi avanzati di riconoscimento**_ e _**autenticazione**_,
  vogliamo garantire che ogni prodotto Made in Italy sia genuino e originale. 
  
- **_Fornire_** ai **_consumatori_** **_strumenti affidabili_** per verificare l'autenticità dei prodotti : vogliamo offrire soluzioni **_intuitive_** e _**accessibili**_ che consentano
ai consumatori di verificare l'autenticità dei prodotti in modo _**rapido e affidabile**_, promuovendo _**fiducia**_ e _**trasparenza**_ nelle transazioni.
  
- _**Tracciare**_ il **_percorso_** di **_produzione_** e _**distribuzione**_ per _**garantire**_ la _**trasparenza**_ lungo l'intera filiera : l'implementazione di _sistemi di tracciabilità_   permetterà di _**monitorare il percorso di ogni prodotto**_ lungo la catena di distribuzione, dalla produzione al consumatore finale, facilitando la verifica dell'autenticità e garantendo
la qualità del Made in Italy.

- _**Coinvolgere attivamente i consumatori**_ nella _**lotta**_ alla _**contraffazione**_ : vogliamo promuovere la partecipazione attiva dei consumatori nella
_**segnalazione di prodotti   contraffatti**_ creando un _**network**_ di **_collaborazione_** e un _**monitoraggio condiviso**_, che coinvolga produttori, autorità e consumatori nella difesa del Made in Italy.

<br>

## _Stack Tecnologico_ 

- **Hardware** :  **Tag RFid Passivi** _(readable-writable)_ con tecnologia **PUF** _(Physical Unclonable Functions)_
- **Software** :  **BMS** (Branding Monitoring System) integrato in **WebApp** (**"verITA"**) (.....)

<br>

## _Architettura del Sistema_

_**Descrizione generale**:_

<br>

_**Architettura Hardware**_

Il sistema verITA comprende sul **piano hardware 2 livelli** di **sicurezza**, costituiti da un **Tag RFid Passivo** e dall'integrazione di un **chip PUF** che permette la **generazioni** di _**chiavi crittografiche on-chip univoche**_, che verranno **associate** a _**ogni singolo articolo**_ emesso dal produttore.


**Tag RFid Passivi**

Gli RFId passivi sono costituiti solamente da un’antenna e da un circuito integrato generalmente miniaturizzato e possono essere inseriti in **piccolissimi** oggetti non metallici e in **etichette adesive**, le cosiddette _“etichette intelligenti”_.
Sono _**privi di batteria**_ e _ricavano l’energia_ per il loro funzionamento _dal segnale proveniente dal reader_ e le distanze a cui possono operare sono al massimo di alcuni metri a seconda della frequenza operativa che utilizzano. 

- Per la nostra soluzione sono adatti dei Tag RFid passivi di tipo **readble-writeable**, che permettono al **produttore di inserire** all'interno della memoria dei chip, **tutte** le **informazioni dell'articolo** e **della filiera per produrre quest'ultimo**, che verrano **visualizzate** in seguito **per ogni scansione del RFid** _effettuata da una delle qualsiasi parti in causa (consumatori, autorità o dagli stessi produttori)_ . 
 


**PUF _(Physical Unclonable Functions)_**

I PUF _(Physical Unclonable Functions)_ sono le “**funzioni fisiche non clonabili**” basati sulla _struttura molecolare della materia_  di cui vengono dotati i chip inseriti all’interno di Tag RFId (passivi, attivi, semi-passivi).
La tecnologia PUF costituisce un _**nuovo approccio**_ all’_**identificazione univoca**_ dei chip, **l’autenticazione**, e la generazione di chiavi “on-chip”.

- Alcune _**tipologie**_ di PUF **basate** sul **silicio** sfruttano le _**variazioni fisiche intrinseche**_ che esistono nei circuiti integrati. Poiché tali _variazioni_ sono **incontrollabili e casuali**, la tecnologia PUF **risulta adatta** per _**l’identificazione** e _l’autenticazione dei chip tramite la generazione in maniera completamente casuale di codici identificativi univoci_. Con questi ultimi è possibile _**generare** una _**firma univoca**_ per ogni _**circuito integrato**_, che consente la successiva _**identificazione di circuiti integrati autentici**_.

- La tecnologia PUF _**consente di rilevare chip clonati**_ in quanto genera identificativi unici, legati alla _casualità nel pro- cesso di fabbricazione dei chip_ che _**non può essere controllato o clonato**_. 
Gli _**identificativi univoci dei chip originali** possono essere _**memorizzati** dal produttore dell'articolo in un _**database protetto**_ per _**future verifiche**_ _(da parte dei consumatori, dalle autorità o dai stessi produttori)_ attraverso la piattaforma integrata nella _**WebApp "verITA"**_

<br>

_**Architettura Software**_

**WebApp "verITA"**












<br>

_**Fonte:**_ _Tutte le informazioni riguardanti le tecnologie di anti-contraffazione sopra menzionate sono state estrapolate dalla "Guida alle Tecnologie Anti-Contraffazione" dell' "UFFICIO ITALIANO BREVETTI E MARCHI DIREZIONE GENERALE PER LA TUTELA DELLA PROPRIETA' INDUSTRIALE (DGTPI-UIBM)"_



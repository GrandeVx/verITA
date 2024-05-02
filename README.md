## verITA

## _Introduzione_

Il _**Made in Italy**_ rappresenta un _**patrimonio inestimabile**_ riconosciuto in tutto il mondo per la sua eccellenza, tuttavia il fenomeno della contraffazione minaccia l'integrità di questo patrimonio, compromettendo la reputazione e l'economia italiana. Il progetto **_verITA_ nasce** dalla necessità di proteggere l'essenza del Made in Italy, **_preservando l'autenticità_** e la **_qualità_** dei nostri prodotti attraverso l'adozione di **soluzioni tecnologiche avanzate**. 

## _Goals di verITA_

- **Garantire l'autenticità** e **l'originalità** dei prodotti Made in Italy : attraverso l'implementazione di **_sistemi avanzati di riconoscimento_** e **autenticazione**, vogliamo garantire che ogni prodotto Made in Italy sia genuino e originale. 
  
- **Fornire** ai **_consumatori_** **_strumenti affidabili_** per verificare l'autenticità dei prodotti : vogliamo offrire soluzioni **_intuitive_** e **accessibili** che consentano ai consumatori di verificare l'autenticità dei prodotti in modo **_rapido e affidabile_**, promuovendo **fiducia** e **_trasparenza_** nelle transazioni.
  
- **Tracciare** il **_percorso_** di **_produzione_** e **_distribuzione_** per **garantire** la **_trasparenza_** lungo l'intera filiera : l'implementazione di _sistemi di tracciabilità_   permetterà di **_monitorare il percorso di ogni prodotto_** lungo la catena di distribuzione, dalla produzione al consumatore finale, facilitando la verifica dell'autenticità e garantendo la qualità del Made in Italy.

- **Coinvolgere attivamente i consumatori** nella **_lotta_** alla **_contraffazione_** : vogliamo promuovere la partecipazione attiva dei consumatori nella
**_segnalazione di prodotti contraffatti_** creando un **_network_** di **_collaborazione_** e un **_monitoraggio condiviso_**, che coinvolga produttori, autorità e consumatori nella difesa del Made in Italy.

<br>


## _Stack Tecnologico_ 

- **Hardware** :

    - **Tag RFid Passivi** _(readable-writable)_ con tecnologia **PUF** _(Physical Unclonable Functions)_
      
- **Software** :
  
    - **BMS** (Branding Monitoring System) integrato in **WebApp** **_verITA_** 
    - **Web Framework** : _Next.js_
    - **Database** : _Postgress SQL_
    - **ORM** : _Prisma_
    - **API** : _TRPC_
                  
<br>


## _Architettura del Sistema_

**_Architettura Hardware_**

Il sistema verITA comprende sul **piano hardware 2 livelli** di **sicurezza**, costituiti da un **Tag RFid Passivo** e dall'integrazione di un **chip PUF** che permette la **generazioni** di **_chiavi crittografiche on-chip univoche_**, che verranno **associate** a **_ogni singolo articolo_** emesso dal produttore.


**Tag RFid Passivi**

Gli RFId passivi sono costituiti solamente da un’antenna e da un circuito integrato generalmente miniaturizzato e possono essere inseriti in **piccolissimi** oggetti non metallici e in **etichette adesive**, le cosiddette _“etichette intelligenti”_.
Sono _**privi di batteria**_ e _ricavano l’energia_ per il loro funzionamento _dal segnale proveniente dal reader_ e le distanze a cui possono operare sono al massimo di alcuni metri a seconda della frequenza operativa che utilizzano. 

- Per la nostra soluzione sono adatti dei Tag RFid passivi di tipo **readble-writeable**, che permettono al **produttore di inserire** all'interno della memoria dei chip, **tutte** le **informazioni dell'articolo** e **della filiera per produrre quest'ultimo**, che verrano **visualizzate** in seguito **ad ogni scansione del RFid**, _effettuata da una delle qualsiasi parti in causa (consumatori, autorità o dagli stessi produttori)_ . 
 

**PUF _(Physical Unclonable Functions)_**

I PUF _(Physical Unclonable Functions)_ sono le “**funzioni fisiche non clonabili**” basati sulla _struttura molecolare della materia_  di cui vengono dotati i chip inseriti all’interno di Tag RFId (passivi, attivi, semi-passivi).
La tecnologia PUF costituisce un **_nuovo approccio_** all’**_identificazione univoca_** dei chip, **l’autenticazione**, e la generazione di chiavi “on-chip”.

- Alcune **_tipologie_** di PUF **basate** sul **silicio** sfruttano le **_variazioni fisiche intrinseche_** che esistono nei circuiti integrati. Poiché tali _variazioni_ sono **incontrollabili e casuali**, la tecnologia PUF **risulta adatta** per **l’identificazione** e _l’autenticazione dei chip tramite la generazione in maniera completamente casuale di codici identificativi univoci_. Con questi ultimi è possibile **generare** una **_firma univoca_** per ogni **_circuito integrato_**, che consente la successiva **_identificazione di circuiti integrati autentici_**.

- Inoltre la tecnologia PUF **_consente di rilevare chip clonati_** in quanto genera identificativi unici, legati alla _casualità nel processo di fabbricazione dei chip_ che **_non può essere controllato o clonato_**. 
Gli **_identificativi univoci dei chip originali_** possono essere **_memorizzati_** dal produttore dell'articolo in un **_database protetto_** per **_future verifiche_** _(da parte dei consumatori, dalle autorità o dagli stessi produttori)_ attraverso la piattaforma integrata nella **_WebApp verITA_**.

<br>


**_Architettura Software_**

**WebApp _verITA_** con **BMS** _(Branding Monitoring System)_

La webapp _verITA_ si sviluppa su più interfacce con funzionalità adatte e **personalizzate** _per ogni_ **_tipo utente_**, creando una user experience unica e facile nell'utilizzo. Tale webapp ci permette di **garantire l'autenticità** e **l'originalità** di qualsiasi prodotto, **tracciare** il **_percorso_** di **_produzione_** e **_distribuzione_** lungo la filiera per **_garantire_** **trasparenza**, e **_coinvolgere attivamente i consumatori_** nella **_lotta_** alla **_contraffazione_**.

<br>


- **_Interfaccia Consumatore_**

Il consumatore attraverso il _**proprio smartphone**_ e alle funzionalità _NFC integrate dello stesso_, potrà _scansionare l'RFid_ del prodotto di cui è interessato conoscere l'_autenticità_, l'**intera filiera (certificata _100% Made in Italy_** dall'_ITPI Istituto per la Tutela dei Produttori Italiani)_, **_tutte le informazioni riguardo il prodotto_** in sè e un _immagine dello stesso_.

La _scansione_ **_reindirizzerà automaticamente_** il consumatore sulla _WebApp verITA_, grazie a un **_URL univoco_**, inoltre **_ogni scansione_** dell'RFid **reindirizza** dei _dati specifici_ alla _piattaforma_, di **_importante utilità_** soprattutto in caso di **articoli contraffatti**, tra cui: **geolocalizzazione della scansione** e del **_dispositivo "reader"_** (smartphone) della relativa **_scansione_** , **data e ora** e **UUID univoco scansionato**. 

- Sono **3** i **_possibili esiti_** ed **_interfacce visualizzabili_** post-scansione da **_parte del consumatore_**:

    -  **_Codice Verde_** ->  **_UUID Autentico_** -> **_Prodotto Autentico 100% Made in Italy_**
    -  **_Codice Giallo_** -> **_UUID Sospetto_** -> **_Numero elevato di scansioni_** in **_relazione al tipo di articolo_** 
    -  **_Codice Rosso_**  -> **_UUID Contraffatto_** -> **_Numero elevato di scansioni_** in **_relazione al tipo di articolo_** con **conseguente controllo** 
    che ha **_appurato l'effettiva contraffazione_** dell'articolo, o **_UUID non presente nel database_**


- Nel caso in cui il **prodotto risulti autentico**  **_(Codice Verde)_**, la _scansione reindirizzerà il consumatore alla piattaforma_ **notificandolo** della **_autenticità_** dell'_articolo_ e permettendogli di visualizzare una serie di informazioni sull'articolo (precedentemente citate), e in _modo_ **_completamente automatico_** verranno inviati una serie di dati (precedentemente citati), al **_sistema_** che li **integrerà** all'interno del **_report scansioni_**. 


-   Nel caso in cui il **prodotto risulti contraffatto**  **_(Codice Giallo o Rosso)_**, la _scansione reindirizzerà il consumatore alla piattaforma_ **notificandolo** della **_non originalità_** dell'_articolo_, e in _modo_ **_completamente automatico_** verrà **_inviata una segnalazione del prodotto contraffatto_** al **_sistema_** che la **integrerà** all'interno del **_report segnalazioni_**, che verrà _successivamente inviato_ alle **_autorità competenti_**, che _potranno in tal modo effettuare ulteriori verifiche_ anche in locale. 

<br>

 
- **_Interfaccia Produttore_** 

Il produttore può accedere attraverso delle **_credenziali_** fornite dall' _ITPI (Istituto per la Tutela dei Produttori Italiani)_, a **_numerose funzionalità_**  che gli permettono di **_gestire tutti i processi_** di **_certificazione_**, di **_tracciamento_**, di **_informazione_** e **_sensibilizzazione del consumatore_**, in modo totalmente **_semplificato e rapido_**.


La **_principale funzionalità_** a disposizione del produttore è la **_generazione degli URL univoci_** da _assegnare a ciascun RFid e articolo_.
Gli **_URL univoci generati_** saranno della _forma_: **_verita.ink/v/UUID_**, che saranno **_inseriti all'interno della memoria_** dell'RFid al momento 
di writing del chip. Inoltre all'interno del **_database_** verranno **_conservate tutte le chiavi "on-chip" generate dal PUF_** che rendono l'**_RFid inclonabile_**.


Un'altra delle tante **_funzionalità fondamentali_** è la **_sezione di reporting e analisi_** di ogni scansione attraverso i seguenti dati: **geolocalizzazione della scansione** e del **_dispositivo "reader"_** (smartphone), **data e ora** e **UUID univoco scansionato**.


In base al **_numero di scansioni_** di un dato articolo, la piattaforma effettua un **_analisi_** attraverso i _dati delle singoli scansioni_, e in **_relazione_** al **_tipo di articolo_**, può **_cambiare_** lo **_stato di autenticità di quest'ultimo_**.
    
- Sono **4** i **_possibili esiti_** risultanti dall'**_analisi della piattaforma_** e **_visualizzabili dal produttore:_**

    -  **_Codice Verde_** ->  **_UUID Autentico_** -> **_Prodotto Autentico 100% Made in Italy_**
    -  **_Codice Giallo_** -> **_UUID Sospetto_** -> **_Numero elevato di scansioni_** in **_relazione al tipo di articolo_** 
    -  **_Codice Rosso_**  -> **_UUID Contraffatto_** -> **_Numero elevato di scansioni_** in **_relazione al tipo di articolo_** con **conseguente controllo** 
    che ha **_appurato l'effettiva contraffazione_** dell'articolo, o **_UUID non presente nel database_**
    - **_Codice Grigio_** -> **_UUID Attivato_** -> **_Nessuna scansione effettuata dell'RFid dell'articolo_** 


Ad esempio su **_articoli di lusso_**, un _numero elevato di scansioni_ può far **_facilmente variare_** lo **_stato di autenticità dell'articolo_**, poichè _rispetto ad un articolo di consumo primario o quotidiano_, come per il settore del food, il **_numero di scansioni_** è **_statisticamente molto più basso_**, dovuto dal fatto che i _possessori o gli acquirenti_ di quell'articolo _saranno_ su una **_scala numerica nettamente inferiore_**, se non **_unici_**.

<br>


- **_Interfaccia Autorità_**


Le **_autorità competenti_** hanno un **_accesso privilegiato_** alla piattaforma **_verITA_**, che gli permettono di usufruire di importanti funzionalità 
per effettuare **_verifiche sui prodotti contraffatti_**, e **_restituire_** un **_feedback veloce e attendibile_** ai produttori.

Tutti i _report visualizzabili dai produttori_ possono essere **_condivisi con le autorità competenti_**, che andranno ad effettuare **_ulteriori verifiche_** in **_locale_**, _sui lotti, e sugli articoli contraffatti_ in base alle **_segnalazioni contenuti negli stessi report_**.

Le autorità dispongono di **_tecnologie avanzate_** che gli permetteranno di effettuare una **_verifica_** ad un **_livello_** di **_sicurezza superiore_**, attraverso la **_firma univoca_** del circuito integrato, **_generata_** attraverso la tecnologia **_PUF_** interna all'RFid, che verrà **_confrontata_** con
il **_database_** contenenti le **_chiavi on-chip_** visualizzabili dalle stesse autorità.

Successivamente le autorità potranno **_inviare_** dei **_feedback veloci e attendibili_** _riguado_ i **_report e le verifiche effettuate_** attraverso una funzionalità della medesima piattaforma.


<br>


**_Fonte:_** _Tutte le informazioni riguardanti le tecnologie di anti-contraffazione sopra menzionate sono state estrapolate dalla "Guida alle Tecnologie Anti-Contraffazione" dell' "UFFICIO ITALIANO BREVETTI E MARCHI DIREZIONE GENERALE PER LA TUTELA DELLA PROPRIETA' INDUSTRIALE (DGTPI-UIBM)"_

<br>


**_Graphic Mockup:_** https://www.behance.net/gallery/197453347/verITA-concept-Autenticita-del-Made-in-Italy

**_Video Pitch:_** https://youtu.be/oJxkWYH-aQo


**_Contribution:_**
_Tale sistema è stato **_ideato e progettato_** da: **Gallo Carmine** e **De Fusco Antonio Walter**, implementato a livello funzionale da **Vittorio D'Alfonso** e realizzato a livello grafico da **Francesco Sarnà**_. 
# Creazione prohect Storybook

## comandi usati per la creazione in terminal:
- mkdir mio-progetto-storybook
- cd mio-progetto-storybook
- npm create vite@latest . -- --template react-ts
    - npm create vite@latest: Questo è il comando per usare l'ultima versione del tool di creazione di Vite.

    - .: Il punto indica a Vite di inizializzare il progetto nella cartella corrente (quella che hai appena creato, mio-progetto-storybook).

    - -- --template react-ts: Questo dice a Vite di usare il template per un progetto React con TypeScript.
- npm install
- npm run dev           # (Per testare React/Vite - premi Ctrl+C per fermare)
- npx storybook@latest init 
    - npx: Esegue il pacchetto Storybook senza installarlo globalmente.
- npm run storybook     # (Per avviare Storybook)
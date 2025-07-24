# Creazione project Storybook

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

## Creazione della Prima Storia con Storybook
Questa sezione documenta i passaggi cruciali per configurare un ambiente di sviluppo pulito con React, Vite e Storybook, e per creare la nostra prima storia. Include le soluzioni rapide ai problemi che abbiamo riscontrato.

- Modifiche e Correzioni dalla Creazione di Badge.tsx e Badge.stories.tsx
Creazione Iniziale dei File:

    - Creato src/components/Badge.tsx con il componente base.

    - Creato src/components/Badge.stories.tsx con l'importazione iniziale dei tipi di Storybook (Meta, StoryObj) e del componente Badge.

- Correzione Avvisi verbatimModuleSyntax:

    - Le importazioni in Badge.stories.tsx apparivano sottolineate in giallo a causa dell'impostazione "verbatimModuleSyntax": true presente nei file tsconfig.app.json e tsconfig.node.json.

    - Azione: Abbiamo commentato (// "verbatimModuleSyntax": true,) questa riga in entrambi i file tsconfig.app.json e tsconfig.node.json.

    - Azione: Abbiamo eseguito una pulizia della cache di TypeScript (rm -rf node_modules/.tmp o rmdir /s /q node_modules\.tmp su Windows) e riavviato sia il TS Server (TypeScript: Restart TS Server) che la finestra di VS Code (Developer: Reload Window).

- Comprensione Avvisi di Codice Non Utilizzato:

    - Successivamente, abbiamo realizzato che eventuali nuove sottolineature gialle sulle importazioni erano semplicemente avvisi standard di TypeScript/ESLint. Questi segnalavano che Meta, StoryObj o Badge non erano ancora stati utilizzati nel codice del file .stories.tsx. Gli avvisi sono poi spariti automaticamente una volta che il codice completo della storia è stato scritto e le importazioni sono state effettivamente impiegate.

- Completamento del File di Storia:

    - Infine, è stata aggiunta la definizione completa di meta e delle export const delle storie a Badge.stories.tsx per permettere la corretta visualizzazione e il funzionamento del componente in Storybook.
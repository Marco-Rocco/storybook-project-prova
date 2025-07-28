/* La tendenza moderna nel web design responsivo è di utilizzare una combinazione strategica di unità relative:

- rem per quasi tutto: font-size, margin, padding, gap e le dimensioni base di molti componenti.
Questo crea un sistema di design scalabile e accessibile che si adatta alle preferenze dell'utente e alle diverse dimensioni dello schermo in modo coerente.

- em per la spaziatura interna di elementi che devono scalare con il proprio font-size o quello del genitore più vicino 
(es. padding di un pulsante, border-radius o line-height).

- %, vw, vh per il layout e le dimensioni della viewport: Per griglie fluide, immagini full-width,
e sezioni che devono occupare una percentuale specifica dell'altezza o larghezza dello schermo.

- px solo per casi eccezionali: Quando è necessaria una precisione 
assoluta al pixel, come per bordi sottili o elementi grafici che non devono scalare.

 */

import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta: Meta = {
    title: 'Atoms/Spacing',
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}

const SpaceCalc = ({ value }: { value: string }) => {
    const spacing = React.useMemo(() => {
        const bodystyle = window.getComputedStyle(document.body);
        return bodystyle.getPropertyValue(value);
    }, [value]);
    return <span>{spacing}</span>
}

const Style: React.FC = () => {
    return <style>{`
        dl{
        font-size: 1rem;
        border: 1px solid #ccc;
        display: grid;
        max-width: (550rem/16);
        grid-template-columns: 1fr 1fr;
        border-radius: 0.5rem;
        }

        dt{
        font-weight: 600;
        padding: 0.5rem;
        border-bottom: 1px solid #ccc;
        }

        dd{
        padding: 0.5rem;
        border-bottom: 1px solid #ccc;
        grid-template-columns: subgrid;
        display: grid;
        align-items: center;
        gap: 1ch;
        grid-column: 2/4;
        }

        .info{
        background-color: magenta;
        height: 1ch;
        width: var(--story-spacing);
        display: inline-block;
        }
        `}</style>
}

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
    render: () => <>
        <Style />
        <dl>
            {['zero', 'xs', 'sm', 'md', 'lg', 'xl'].map((key) => (
                <React.Fragment key={key}>
                    <dt>{key}</dt>
                    <dd style={{ '--story-spacing': `var(--spacing-${key})` }}>
                        <span><SpaceCalc value={`--spacing-${key}`} /></span>
                        <span className="info"></span>
                    </dd>
                </React.Fragment>
            ))}
        </dl>
    </>
}


// 1. render: () => <> ... </>
// render: Come abbiamo visto, questa è la proprietà di una storia che definisce cosa Storybook deve disegnare nel suo "canvas". Invece di renderizzare un componente React importato (come avremmo fatto con un <Titolo />), qui stiamo creando un pezzo di UI al volo direttamente nella storia.

// (): Indica che render è una funzione freccia che non prende argomenti.

// <> ... </>: Questo è un Fragment di React. È un modo per raggruppare più elementi JSX senza aggiungere un nodo DOM extra (come un div wrapper) all'output finale. È utile quando vuoi restituire più elementi senza alterare la struttura HTML.

// 2. <dl> (Description List)
// All'interno del Fragment, c'è un elemento HTML <dl>, che sta per "Description List" (lista di descrizione).

// Le liste di descrizione sono usate per visualizzare coppie di nome-valore o termine-descrizione.

// Sono composte da:

// <dt> (Description Term): Il termine o il nome.

// <dd> (Description Description): La descrizione o il valore associato al termine.

// In questo contesto, il codice sta creando una lista dove ogni "termine" sarà il nome di una scala di spaziatura (es. 'zero', 'xs', 'sm') e ogni "descrizione" sarà il valore della corrispondente variabile CSS (es. var(--spacing-zero)).

// 3. {['zero', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'].map((key) => (...))}
// Questa è la parte dinamica, un classico pattern di React per renderizzare una lista di elementi.

// ['zero', 'xs', 'sm', 'md', 'lg', 'xl', '2xl']: Questo è un array di stringhe. Ogni stringa rappresenta una "chiave" per una specifica dimensione di spaziatura (ad esempio, 'xs' potrebbe corrispondere a "extra-small").

// .map((key) => (...)): Il metodo map() è un metodo standard degli array JavaScript. It takes a function as an argument and calls that function for each item in the array. For each key in the array (e.g., 'zero', 'xs', etc.), it will execute the code inside the parentheses and return a new array containing the results.

// key: All'interno della funzione map, key è il nome della variabile corrente dell'array (es. 'zero', 'xs', ecc.).

// 4. <React.Fragment key={key}> ... </React.Fragment>
// All'interno della funzione map, stiamo restituendo un altro React.Fragment.

// key={key}: Ogni elemento in una lista renderizzata in React (come quelli generati da map) ha bisogno di una proprietà key unica. Questo aiuta React a identificare quali elementi sono stati aggiunti, rimossi o modificati in modo efficiente. In questo caso, il valore di key (es. 'zero', 'xs') è perfetto per questo scopo, essendo univoco.

// 5. <dt>{key}</dt> e <dd>{var(--spacing-${key})}</dd>
// Questi sono gli elementi che vengono renderizzati per ogni iterazione del map.

// <dt>{key}</dt>: Crea un "termine" nella lista di descrizione. Il contenuto di questo termine sarà il valore corrente di key dall'array (es. 'zero', 'xs', etc.). Quindi vedrai zero, xs, sm e così via.

// <dd>{var(--spacing-${key})}</dd>: Crea la "descrizione" per il termine.

// var(--spacing-${key}): Questa è una sintassi CSS che si riferisce a una variabile CSS (o Custom Property). Indica che il valore di questa spaziatura è definito in una variabile CSS con un nome che segue il pattern --spacing-X, dove X è il valore di key.

// Ad esempio, quando key è 'xs', questo diventerà var(--spacing-xs).

// Quando key è 'md', questo diventerà var(--spacing-md).

// Questo è un modo intelligente per documentare visivamente le tue variabili CSS di spaziatura in Storybook. La storia non solo mostra i nomi delle variabili, ma se le variabili sono definite e applicate da qualche parte nel tuo CSS (o tramite parametri di Storybook che applicano questi stili), vedrai anche la spaziatura effettiva applicata a un elemento.
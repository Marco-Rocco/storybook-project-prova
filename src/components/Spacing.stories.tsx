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
    title: 'Spacing',
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
    render: () => <>
        <dl>
            {['zero', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'].map((key) => (
                <React.Fragment key={key}>
                    <dt>{key}</dt>
                    <dd>{`var(--spacing-${key})`}</dd>
                </React.Fragment>
            ))}
        </dl>
    </>
}
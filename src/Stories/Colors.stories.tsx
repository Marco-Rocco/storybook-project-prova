import type { Meta, StoryObj } from "@storybook/react";
import type { ButtonHTMLAttributes } from "react";

const meta: Meta = {
    title: 'Atoms/Colors',
    parameters: {
        layout: 'centered',
    }
}

export default meta;
type Story = StoryObj<typeof meta>;

const ClickToCopy: React.FC<({ value: string } & ButtonHTMLAttributes<HTMLButtonElement>)> = ({ value, ...attrs }) => {
    return <button
        className="click-to-copy"
        {...attrs}
        style={{ border: 'none', cursor: 'pointer', ...attrs.style }}
        onClick={() => navigator.clipboard.writeText(value)} />
}
export const Primary: Story = {
    render: () => (
        <>
            <div>
                <style>{`
            .container {
            display: flex;
            grid-tamplate-columns: repeat;
            height: 4rem;x
            }

            .info{
            padding: var(--spacing-md);
            background-color: var(--color-neutral-bcg);
            color: var(--color-neutral-text);
            margin: var(--spacing-sm);
            text-align: center;
            border: 1px solid var(--color-neutral-accent);
            }
            `}
                </style>
                <h1>Colors</h1>

                <p>Click on a color to copy the value</p>
                <h2>Primitives</h2>
                <h3>Grays</h3>
                <div className="container grays">
                    {Array.from({ length: 10 }).map((_, index) => (
                        <ClickToCopy
                            className="info"
                            key={index}
                            value={`var(--color-gray-${index})`}
                            style={{ backgroundColor: `var(--color-gray-${index})` }}
                        />
                    ))}
                </div>


                <h3>Reds</h3>
                <div className="container reds">
                    {Array.from({ length: 10 }).map((_, index) => (
                        <ClickToCopy
                            className="info"
                            key={index}
                            value={`var(--color-red-${index})`}
                            style={{ backgroundColor: `var(--color-red-${index})` }}
                        />
                    ))}
                </div>

                <h3>Greens</h3>
                <div className="container greens">
                    {Array.from({ length: 10 }).map((_, index) => (
                        <ClickToCopy
                            className="info"
                            key={index}
                            value={`var(--color-green-${index})`}
                            style={{ backgroundColor: `var(--color-green-${index})` }}
                        />


                    ))}
                </div>

                <h2>Semantic</h2>
                <h3>Neutrals</h3>
                <p className="info">Per questa rappresentazione abbiamo usato: {""}
                    <ClickToCopy value={`var(--color-neutral-bcg)`} >
                        --color-neutral-bcg
                    </ClickToCopy>
                    ,
                    <ClickToCopy value={`var(--color-neutral-text)`} >
                        --color-neutral-text
                    </ClickToCopy>
                    e
                    <ClickToCopy value={`var(--color-neutral-accent)`} >
                        --color-neutral-accent
                    </ClickToCopy>
                </p>

                <h3>Positives</h3>
                <p className="info"
                    style={{ backgroundColor: 'var(--color-positive-bcg)', color: 'var(--color-positive-text)', borderColor: 'var(--color-positive-accent)' }}>
                    Per le rappresentazioni in positivo utilizzeremo: {""}
                    <ClickToCopy value={`var(--color-positive-bcg)`} >
                        --color-positive-bcg
                    </ClickToCopy>
                    ,
                    <ClickToCopy value={`var(--color-positive-text)`} >
                        --color-positive-text
                    </ClickToCopy>
                    e
                    <ClickToCopy value={`var(--color-positive-accent)`} >
                        --color-positive-accent
                    </ClickToCopy>
                </p>

                <h3>Negatives</h3>
                <p className="info"
                    style={{ backgroundColor: 'var(--color-negative-bcg)', color: 'var(--color-negative-text)', borderColor: 'var(--color-negative-accent)' }}>Per le rappresentazioni in negativo utilizzeremo: {""}
                    <ClickToCopy value={`var(--color-negative-bcg)`} >
                        --color-negative-bcg
                    </ClickToCopy>
                    ,
                    <ClickToCopy value={`var(--color-negative-text)`} >
                        --color-negative-text
                    </ClickToCopy>
                    e
                    <ClickToCopy value={`var(--color-negative-accent)`} >
                        --color-negative-accent
                    </ClickToCopy>
                </p>
            </div>
        </>
    )
}
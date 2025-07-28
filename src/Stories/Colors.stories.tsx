import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
    title: 'Atoms/Colors',
    parameters: {
        layout: 'centered',
    }
}

export default meta;
type Story = StoryObj<typeof meta>;

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
            background-color: var(--color-gray-5);
            color: var(--color-gray-10);
            margin: var(--spacing-sm);
            text-align: center;
            border: 1px solid var(--color-gray-10);
            }
            `}
                </style>
                <h1>Colors</h1>
                <h3>Grays</h3>
                <div className="container grays">
                    {Array.from({ length: 10 }).map((_, index) => (
                        <div
                            className="info"
                            key={index}
                            style={{ backgroundColor: `var(--color-gray-${index})` }}
                        >

                        </div>
                    ))}
                </div>


                <h3>Reds</h3>
                <div className="container reds">
                    {Array.from({ length: 10 }).map((_, index) => (
                        <div
                            className="info"
                            key={index}
                            style={{ backgroundColor: `var(--color-red-${index})` }}
                        >

                        </div>
                    ))}
                </div>

                <h3>Greens</h3>
                <div className="container greens">
                    {Array.from({ length: 10 }).map((_, index) => (
                        <div
                            className="info"
                            key={index}
                            style={{ backgroundColor: `var(--color-green-${index})` }}
                        >

                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
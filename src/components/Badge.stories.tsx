import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
    title: 'Badge',
    component: Badge,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <Badge />
}
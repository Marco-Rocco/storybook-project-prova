import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../components/Input.tsx";

const meta: Meta = {
    title: "Components/Input",
    parameters: {
        layout: "centered",
    },
    args: {
        label: "Label",
        isInvalid: false,
        disabled: false
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: ({ label, isInvalid, disabled }) => (
        <div>
            <Input disabled={disabled} isInvalid={isInvalid} errorText="Invalid email" label={label} iconPosition="right" kind="email" icon="Book" />
            <Input isInvalid={isInvalid}
                label={label}
                options={[
                    { label: "Option 1", value: "1" },
                    { label: "Option 2", value: "2" },
                ]}
                kind="select"
                disabled={disabled}
            />
            <Input isInvalid={isInvalid}
                label={label}
                options={[
                    { label: "Option 1", value: "1" },
                    { label: "Option 2", value: "2" },
                ]}
                kind="radio"
                name="Mimmo"
                disabled={disabled}
                errorText="Invalid selection"
            />
        </div>
    )
};

export const text: Story = {
    render: ({ label }) => <Input label={label} kind="text" />,
};

export const Select: Story = {
    render: ({ label, isInvalid, disabled }) => (
        <Input isInvalid={isInvalid}
            label={label}
            options={[
                { label: "Option 1", value: "1" },
                { label: "Option 2", value: "2" },
            ]}
            kind="select"
            disabled={disabled}
        />
    ),
};

export const Radio: Story = {
    render: ({ label, isInvalid, disabled }) => (
        <Input isInvalid={isInvalid}
            label={label}
            options={[
                { label: "Option 1", value: "1" },
                { label: "Option 2", value: "2" },
            ]}
            kind="radio"
            name="Mimmo"
            disabled={disabled}
            errorText="Invalid email"
        />
    ),
};
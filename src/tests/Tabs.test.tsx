import { render, within } from "@testing-library/react";
import { Tabs } from "../components/Tabs";
import "@testing-library/jest-dom";


const getShadowRoot = (): HTMLElement | null => {
    const shadowHost = document.querySelector('div[data-testid="tabs-root"]');
    return shadowHost ? (shadowHost.shadowRoot as unknown as HTMLElement) : null;
}

describe("Tabs Component", () => {
    const renderTabs = () => (
        <Tabs>
            <Tabs.Item label="Tab 1">Content 1</Tabs.Item>
            <Tabs.Item label="Tab 2">Content 2</Tabs.Item>
            <Tabs.Item label="Tab 3">Content 3</Tabs.Item>
        </Tabs>
    );

    let shadowRoot: HTMLElement | null = null;

    beforeEach(() => {
        render(renderTabs());
        shadowRoot = getShadowRoot();
        expect(shadowRoot).not.toBeNull();
    });

    afterEach(() => {
        shadowRoot = null;
    });

    it("renders all tab labels", () => {
        if (!shadowRoot) return;
        const { getByText } = within(shadowRoot);
        expect(getByText("Tab 1")).toBeInTheDocument();
        expect(getByText("Tab 2")).toBeInTheDocument();
        expect(getByText("Tab 3")).toBeInTheDocument();
    });
});


import React from "react";
import root from "react-shadow";
import cssText from "../styles/Badge.css?inline";
import { GlobalStyles } from "../styles/GlobalStyles";

type BadgeProps = {
    children: React.ReactNode;
    variant?: "neutral" | "positive" | "negative";
} & React.HTMLAttributes<HTMLDivElement>;

export const Badge: React.FC<BadgeProps> = ({
    children,
    variant = "neutral",
    ...attrs
}) => {
    return (
        <root.span>
            <GlobalStyles />
            <style>{cssText}</style>
            <span className={`badge ${variant}`} {...attrs}>
                {children}
            </span>
        </root.span>
    );
}
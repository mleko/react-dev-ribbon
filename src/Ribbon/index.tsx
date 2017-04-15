import * as React from "react";
import * as ReactDOM from "react-dom";
import {merge} from "typescript-object-utils";

export class Ribbon extends React.PureComponent<RibbonProps, void> {
	public static defaultProps = {
		width: 190,
		angle: 45
	};

	private container: HTMLDivElement;

	public render(): JSX.Element {
		const width = this.props.width;
		const angle = this.props.angle;

		const sin = Math.sin(Math.PI / 180 * angle);
		const cos = Math.cos(Math.PI / 180 * angle);

		let height = (this.container && this.container.clientHeight) || 0;
		let top = Math.floor(width / 2 * sin - cos * height);
		let right = Math.floor(-(width / 2 - width / 2 * cos) - sin * height / 2);
		let ribbonStyle: React.CSSProperties = merge(ribbonBaseStyle, {
			width,
			transform: `rotate(${angle}deg)`,
			top,
			right
		});
		if (this.props.style) {
			ribbonStyle = merge(ribbonStyle, this.props.style);
		}
		const ribbonTextStyle = {
			border: "1px white dashed"
		};
		return (
			<div {...this.props.containerProps} style={ribbonStyle} ref={this.mountContainer}>
				<div style={ribbonTextStyle}>{this.props.children || "DEVELOPMENT"}</div>
			</div>
		);
	}

	private mountContainer = (e: HTMLDivElement) => {
		this.container = ReactDOM.findDOMNode<HTMLDivElement>(e);
		this.forceUpdate();
	};
}

const ribbonBaseStyle: React.CSSProperties = {
	fontFamily: "monospace",
	fontSize: "16px",
	textAlign: "center",
	color: "white",
	backgroundColor: "#c00",
	zIndex: 9999,
	position: "fixed",
	fontWeight: "bold",
	padding: 5,
	opacity: 1
};

export interface RibbonProps {
	width?: number;
	angle?: number;
	style?: React.CSSProperties;
	containerProps?: React.HTMLProps<HTMLDivElement>;
}

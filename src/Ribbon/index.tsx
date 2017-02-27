import * as React from "react";
import * as ReactDOM from "react-dom";

export class Ribbon extends React.PureComponent<RibbonProps, void> {
	private container: HTMLDivElement;

	public render(): JSX.Element {
		const width = this.props.width || 190;
		const angle = this.props.angle || 45;
		const sin = Math.sin(Math.PI / 180 * angle);
		const cos = Math.cos(Math.PI / 180 * angle);

		let height = (this.container && this.container.clientHeight) || 0;
		let top = Math.floor(width / 2 * sin - cos * height);
		let right = Math.floor(-(width / 2 - width / 2 * cos) - sin * height / 2);
		const ribbonStyle: React.CSSProperties = {
			fontFamily: "monospace",
			fontSize: "16px",
			textAlign: "center",
			width,
			color: "white",
			backgroundColor: "#c00",
			transform: `rotate(${angle}deg)`,
			zIndex: 9999,
			position: "fixed",
			top, // 30,
			right, // -50
			fontWeight: "bold",
			padding: 5,
			cursor: "pointer",
			opacity: 1
		};
		const ribbonTextStyle = {
			border: "1px white dashed"
		};
		return (
			<div style={ribbonStyle} ref={this.mountContainer}>
				<div style={ribbonTextStyle}>{this.props.children || "DEVELOPMENT"}</div>
			</div>
		);
	}

	private mountContainer = (e: HTMLDivElement) => {
		this.container = ReactDOM.findDOMNode<HTMLDivElement>(e);
		this.forceUpdate();
	}
}
// onclick="var s=this.style,p='opacity',t=setTimeout,i=function(){if(s[p]<1){s[p]-=-0.05;s.display='block';t(i,10);}else{s[p]=1;}},o=function(){if(s[p]>0){s[p]-=0.05;t(o,10);}else{s[p]=0;s.display='none';t(i,5e+3);}};o();"
export interface RibbonProps {
	width?: number;
	angle?: number;
}

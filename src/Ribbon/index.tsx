import * as React from "react";

export class Ribbon extends React.PureComponent<RibbonProps, void> {
	public render(): JSX.Element {
		const ribbonStyle: React.CSSProperties = {
			fontFamily: "monospace",
			fontSize: "16px",
			textAlign: "center",
			width: 190,
			color: "white",
			backgroundColor: "#c00",
			transform: "rotate(45deg)",
			zIndex: 9999,
			position: "fixed",
			top: 30,
			right: -50,
			fontWeight: "bold",
			padding: 5,
			cursor: "pointer",
			opacity: 1
		};
		const ribbonTextStyle = {
			border: "1px white dashed"
		};
		return (
			<div style={ribbonStyle}>
				<div style={ribbonTextStyle}>{this.props.children || "DEVELOPMENT"}</div>
			</div>
		);
	}
}
// onclick="var s=this.style,p='opacity',t=setTimeout,i=function(){if(s[p]<1){s[p]-=-0.05;s.display='block';t(i,10);}else{s[p]=1;}},o=function(){if(s[p]>0){s[p]-=0.05;t(o,10);}else{s[p]=0;s.display='none';t(i,5e+3);}};o();"
export interface RibbonProps {

}

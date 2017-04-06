import * as React from "react";
import {animate} from "react-animate-hoc";
import {mergeDeep} from "typescript-object-utils";
import {Ribbon, RibbonProps} from "../Ribbon";

export class DismissibleRibbon extends React.Component<DismissibleRibbonProps, State> {

	public static readonly defaultProps = {
		hideOnMouseOver: true
	};

	private timeoutHandle;

	constructor(props: RibbonProps, context: any) {
		super(props, context);
		this.state = {
			opacity: 1
		};
	}

	public render(): JSX.Element {
		const props = mergeDeep(this.props, {
			opacity: this.state.opacity,
			containerProps: {
				onClick: this.click,
				onMouseOver: this.mouseOver
			}
		});

		return React.createElement(animatedRibbon, props);
	}

	private click = (event) => {
		if (this.props.containerProps && this.props.containerProps.onClick) {
			this.props.containerProps.onClick(event);
		}
		this.hide();
	};
	private mouseOver = (event) => {
		if (this.props.containerProps && this.props.containerProps.onMouseOver) {
			this.props.containerProps.onMouseOver(event);
		}
		if (this.props.hideOnMouseOver) this.hide();
	};
	private hide = () => {
		this.setState({opacity: 0});
		if (this.timeoutHandle) {
			clearTimeout(this.timeoutHandle);
		}
		this.timeoutHandle = setTimeout(this.show, 5000);
	};
	private show = () => {
		this.setState({opacity: 1});
	};
}

export type DismissibleRibbonProps = RibbonProps & {
	hideOnMouseOver?: boolean;
};

interface State {
	opacity: number;
}

const animatedRibbon = animate({duration: 300, properties: ["opacity"]})((props: AnimatedRibbonProps): JSX.Element => {
	if (!props.opacity) return null;
	let style = {cursor: "pointer", opacity: props.opacity};
	if (props.opacity < 1) {
		style["pointerEvents"] = "none";
	}
	return React.createElement(Ribbon, mergeDeep(props, {style}));
});

interface AnimatedRibbonProps {
	opacity: number;
	children?: React.ReactNode;
}

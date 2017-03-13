import * as React from "react";
import {animate} from "react-easing";
import {mergeDeep} from "typescript-object-utils";
import {Ribbon, RibbonProps} from "../Ribbon";

export class DismissibleRibbon extends React.Component<RibbonProps, State> {

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
			onClick: this.click
		});

		return React.createElement(animatedRibbon, props);
	}

	private click = () => {
		if (this.props.onClick) this.props.onClick();
		this.hide();
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

interface State {
	opacity: number;
}

const animatedRibbon = animate({duration: 500})((props: AnimatedRibbonProps): JSX.Element => {
	if (!props.opacity) return null;
	return React.createElement(Ribbon, mergeDeep(props, {style: {cursor: "pointer", opacity: props.opacity}}));
});

interface AnimatedRibbonProps {
	opacity: number;
	children?: React.ReactNode;
}

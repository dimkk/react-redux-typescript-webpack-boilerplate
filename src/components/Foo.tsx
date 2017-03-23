import * as React from "react";
declare const require:any;
declare const jsplumb:any;

var j = require("jsplumb/dist/js/jsplumb-1.7.9-min.js").jsPlumb.getInstance({
    Connector: "Flowchart",
    Anchor: "Bottom",
    Endpoint: [ "Dot", { radius: 2 }],
    ConnectionOverlays: [
        [ "Arrow", { location: 0, width: 10, length: 7, foldbackPoint: 0.62, direction:-1 }]
    ]
});

j.connect({source: "one", target: "two" });

j.on(window, "resize", j.repaintEverything);

export interface IFooState {
    greeting: string;
}

export interface IFooActions {
    changeGreeting: (message: string) => any;
}

interface IFooLocalState {
    test: string;
}

export default class Foo extends React.Component<IFooState & IFooActions, IFooLocalState> {

    constructor(props: IFooState & IFooActions) {
        super(props);
        this.state = {
            test: "supatest.",
        };
        
    }

    public render() {

        return (
            <div className="greeting">
                <h1>HelloWorld</h1>
                <p>{this.state.test}</p>
                
            </div>
        );
    }
}

import * as React from "react";
export declare type IActivityTrackerProps = {
    trackerId: number;
    timeout: number;
    onTrackerIdChange: Function;
    debugOn: boolean;
};
declare const App: React.FC<IActivityTrackerProps>;
export default App;

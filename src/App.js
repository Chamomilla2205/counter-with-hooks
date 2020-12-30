import React, {Component,useState, useEffect, useReducer, useMemo, memo, useCallback} from "react";
import AllComponents from "./Components/AllComponents/AllComponents";
class App extends Component {
    render() {
        return (
            <div>
                <AllComponents/>
            </div>
        );
    }
}

export default App;
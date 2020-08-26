import * as actions from "../actions";

const initialState = {
    getMetrics: []
  };

const metricsDataReceived = (state: any, action: any) => {
    const {getMetrics} = action;
    return {getMetrics}
}

const metricsDataFailed = (state: any, action: any) => {
    return {...state, error: action.error}
}

const handlers: any = {
    [actions.METRICS_DATA_RECEIVED]: metricsDataReceived,
    [actions.METRIC_API_CALL_FAIL]: metricsDataFailed
}

export default (state = initialState, action: any) => {
    const handler = handlers[action.type];
    if (typeof handler === 'undefined') return state;
    return handler(state, action);
}
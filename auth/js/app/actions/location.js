import {
	NAVIGATION,
	SCENARIO
} from 'constants/locations';

export function navigate(viewName) {
	return {
		type: NAVIGATION,
		viewName: viewName
	};
}

export function navigateScenario(scenario_) {
	return {
		type: NAVIGATION,
		viewName: SCENARIO,
		scenarioID: scenario_
	};
}

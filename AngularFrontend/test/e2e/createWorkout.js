'use strict';

describe('Create tabata workout', function(){

    beforeEach(function() {
	browser.get('/app/#/whats-my-workout');
    });

    describe('New workout', function() {
	it('shows an empty page with the generate workout button', function() {
	    expect(element(by.binding('workout.scheme')).isPresent()).toBe(false);
	    expect(element(by.binding('workout.timeScheme')).isPresent()).toBe(false);
	    expect(element(by.binding('workout.expectedTime')).isPresent()).toBe(false);
	    expect(element(by.binding('workout.rounds')).isPresent()).toBe(false);
	    expect(element(by.repeater('exercise in workout.exercises track by $index')).isPresent()).toBe(false);
	    expect(element(by.css('[ng-click="generateWorkout()"]')).isPresent()).toBe(true);
	});

    });

    describe('Generate workout', function() {
	beforeEach(function() {
	    element(by.css('[ng-click="generateWorkout()"]')).click();
	});

	it('shows a tabata workout with at least two repetitions', function() {
	    var scheme = element(by.binding('workout.scheme'));
	    expect(scheme.getText()).toEqual('TABATA');
	    var timeScheme = element(by.binding('workout.timeScheme'));
	    expect(timeScheme.getText()).toEqual('TABATA 20/10');
	    var expectedTime = element(by.binding('workout.expectedTime'));
	    expect(expectedTime.getText()).toBe('4800');
	    var rounds = element(by.binding('workout.rounds'));
	    expect(rounds.getText()).toBe('2');
	    var exercises = element.all(by.repeater('exercise in workout.exercises track by $index'));
	    expect(exercises.count()).toBe(2);
	    var squats = element(by.repeater('exercise in workout.exercises track by $index').row(0));
	    expect(squats.getText() ).toBe('SQUATS');
	    var pushUps = element(by.repeater('exercise in workout.exercises track by $index').row(1));
	    expect(pushUps.getText() ).toBe('PUSH UPS');
	    
	});

    });
});

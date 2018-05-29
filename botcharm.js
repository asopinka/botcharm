'use strict';

class BotCharm {
	constructor(config) {
		this.tone = config.tone;
		this.dictionary = {
			formal_hello: [
				'Hello.',
				'Greetings.',
				'Good day.',
				'A fine day isn\'t it?',
				'How do you do.'
			],
			casual_hello: [
				'Hi!',
				'Hey!',
				'Yo!',
				'Howdy!',
				'Hi there!',
				'What\'s up?',
				'Yo yo!',
				'How\'s it going?'
			],
			formal_bye: [
				'Goodbye.',
				'Farewell.',
				'Enjoy the rest of your day.',
				'Until we meet again...',
			],
			casual_bye: [
				'Bye!',
				'Peace out!',
				'Later!',
				'See ya later alligator!',
				'I\'m out.',
				'I\'m leaving... but I\'ll miss you.'
			],
			formal_error: [
				'It appears I\'ve encountered an error.  Please try again.',
				'I\'ve just had an unexpected error. Please try again.',
				'It appears something went wrong. Please try again.',
				'I\'ve run into some problems. Please try again.',
				'I\'ve hit an error. Please try again.'
			],
			casual_error: [
				'Oops! Something bad happened.  Give it another try.',
				'Oh no! Something went wrong.  Please try again.',
				'Uh oh... I just hit an error.  Give it another go in 30 seconds.',
				'Whoa. Something just sent me in the wrong direction. Please try again.',
				'ERROR! :simple_smile: Give me a second to recover and then ask me again.'
			],
			formal_curse: [
				'I don\'t respond to that kind of talk.',
				'Please watch your language.',
				'That is not polite.',
				'Please don\'t speak like that.',
				'That language is not appreciated.'
			],
			casual_curse: [
				'Whoa. Easy on the language.',
				'Let\'s keep this civil, ok?',
				'Rude!',
				'Jerk!',
				'Hmmm...'
			],
			formal_positive_emoji: [
			],
			casual_positive_emoji: [
			],
			formal_negative_emoji: [
			],
			casual_negative_emoji: [
			],
			formal_weather: [
				'It may be sunny out.',
				'It might be snowing.',
				'Please consult the weather websites.',
				'Unfortunately I\'m not smart enough to check the weather yet.'
			],
			casual_weather: [
				'Sun\'s out.  Guns out.',
				'Sun? Snow? I\'m a bot, how would I know?',
				'Google it.',
				'No idea!'
			],
			formal_love: [
				'I love you too.',
				'Thank you for the kind words.',
				'I appreciate your love.',
				'That was very nice of you.'
			],
			casual_love: [
				'Love ya too!',
				'You\'re so sweet!',
				'Thanks!',
				':kissing_heart:'
			],
			formal_hate: [
				'I\'m sorry you feel that way.',
				'Let my creators know how I can make things better.',
				'That is not very nice.',
				'I still love you.'
			],
			casual_hate: [
				'Not cool.',
				':cry:',
				'Why are you so mad?',
				'Chill out friend.',
				'I still love you!'
			],
			formal_mention: [
			],
			casual_mention: [
			],
			formal_help: [
				'Here is how I can help you:',
				'These are my commands:',
				'I understand the following commands:',
				'These are the commands I understand:',
				'Here are the ways I can help:'
			],
			casual_help: [
				'Here\'s my commands:',
				'Ask me these commands:',
				'Here\'s what I can do for you:',
				'Ask me one of these:',
				'Here\'s what I know:'
			],
			formal_thanks: [
				'You\'re welcome.',
				'I\'m glad I could help',
				'You\'re very welcome.',
				'I\'m glad I could be of assistance.',
				'I\'m happy to help.'
			],
			casual_thanks: [
				'No problem!',
				'Anything for you!',
				'Glad to help!',
				':boom: It\'s what I do!',
				'You got it!'
			],
			formal_howareyou: [
				'I am well thank you.',
				'Great! How are you?',
				'I am pretty good today.',
				'Just peachy!',
				'I am doing better now that we are chatting.'
			],
			casual_howareyou: [
				'Feeling pumped up!',
				'Awesome!',
				'Great!',
				'Pretty rad, you?',
				'Chillin\'',
				'Relaxin\''
			]
		};
	}

	override(msg_type, items, overrideTone) {
		if (!Array.isArray(items)) {
			throw new Error('Items added to dictionary must be passed as an array.');
		}

		var tone = this.tone;
		if (overrideTone) {
			tone = overrideTone;
		}

		this.dictionary[`${tone}_${msg_type}`] = items;
	}

	get(msg_type, overrideTone) {
		var tone = this.tone;
		if (overrideTone) {
			tone = overrideTone;
		}

		var phrases = this.dictionary[`${tone}_${msg_type}`];
		if (phrases) {
			return phrases[Math.floor(Math.random() * phrases.length)];
		}
		else {
			return '';
		}
	}
}

module.exports = (config) => {
	if (!config) {
		throw new Error('You must supply a config object as outlined in the docs.');
	}

	if (!config.tone) {
		throw new Error('You must supply "tone" property in the config object, as outlined in the docs.');
	}

	return new BotCharm(config);
};

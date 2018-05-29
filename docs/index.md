## Why Does This Matter?

The voice of your chatbot is arguably one of the *most* important design aspects when you start to build your artificial assistant.  It sets the tone for the conversations your users will have when they interact with your bot.  Failing to put the time and effort into your bot's identity will affect your brand, so make sure you give it considerable thought. Feel free to use this tool as a starting point and then shape your bot's voice to make it unique.

## Install and Initialize

To install BotCharm, simply add the package to your project:

```
npm install --save botcharm
```

Once the package is added, you can initialize the framework like so:

```
const voice = require('botcharm')({ tone: either 'casual' or 'formal' })
```

Set the tone of your bot to cater towards your audience. A casual tone contains phrases like *"What's up?"*, whereas a formal tone would contain *"How are you?"*.

Don't worry, this can be changed on-demand.

## Usage

Now, whenever your bot is going to speak, you can simply call BotCharm for a random phrase:

```
voice.get('<phrase_type>')
```

The following phrase types have pre-built responses in BotCharm:

| `hello` | Responses to a greeting	|
|---------|-------------------------|
| `bye`	  | Responses to a farewell	|
|---------|-------------------------|
| `mention` | Responses to when your bot is mentioned in a conversation |
|---------|-------------------------|
| `how_are_you` | Responses to a "how are you" message |
|---------|-------------------------|
| `thanks` | Responses to a message of thanks |
|---------|-------------------------|
| `help` | Pre-amble for a help message |
|---------|-------------------------|
| `error` | Responses for when an error occurs |
|---------|-------------------------|
| `love` | Responses to loving messages |
|---------|-------------------------|
| `hate` | Responses to hateful messages |
|---------|-------------------------|
| `curse` | Responses to messages with curse words |
|---------|-------------------------|
| `positive_emoji` | A random positive emoji |
|---------|-------------------------|
| `negative_emoji` | A random negative emoji |
|---------|-------------------------|
| `weather` | Responses to messages about weather |


## Advanced Usage

### Overriding Tone

If you'd like to override the tone you set on initialization, you can do that when grabbing a phrase:

```
voice.get('<phrase_type>', pass either 'casual' or 'formal' here)
```

### Custom Dictionary

As your bot grows (or possibly as soon as you install BotCharm), you'll probably want to create custom phrase types and responses. Doing that is simple!

```
voice.override('<custom_phrase_type>', ['custom', 'array', 'of', 'strings/responses'])
```

Then you can use it like any other phrase type:

```
voice.get('<custom_phrase_type>')
```

You can also pass in the tone as the last parameter to `voice.override` to add the phrase type dictionary to 'casual' or 'formal' regardless of what you initially set.
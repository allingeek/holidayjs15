# holidayjs15 - Team 5

This app facilitates a White Elephant gift exchange.  Participants can sign into the app once the moderator initializes the session.  Participants indicate their name and what gift they are submitting (bringing) to the gift exchange.

The app then picks a first participant to pick a gift that was submitted.  The second participate has the option to steal the gift from the first participant, or to pick a gift from the available unselected gifts.  If the second participant steals the gift from the first participant, the first participant then picks an unselected gift.  The third participant can then steal from the first two or pick an unselected gift.  This continues until all gifts are allocated to participants.

Any gift can only be stolen a maximum of three times.

Participants sees updates on their browsers as the game progresses.  Participants are alerted on their turn to either pick a gift or steal another's gift.  Participants that do not pick a gift during their turn are automatically given a random gift.

This uses Backand (http://www.backand.com) for data and Angular/Bootstrap for the UI.
